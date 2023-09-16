import { type APIGatewayProxyEventV2 } from "https://deno.land/x/lambda@1.31.3/types.d.ts";
import { createHash } from "https://deno.land/std@0.119.0/hash/mod.ts";

import ISessionManager from "./ISessionManager.d.ts";
import type { Session, Answer } from "./Session.d.ts";
import IDbRepository from "./IDbRepository.d.ts";

class SessionManager implements ISessionManager {
    private session: string;
    private currentSession!: Session;
    private db: IDbRepository;

    private getRemoteAddress({requestContext}: APIGatewayProxyEventV2): string {
        const connInfo = requestContext?.http?.sourceIp;
        if (!connInfo) {
            throw new Error("Could not get remote address");
        }
        return connInfo;
    }

    constructor(event: APIGatewayProxyEventV2, db: IDbRepository) {
        this.session = this.hashIp(this.getRemoteAddress(event));
        this.db = db;
    }

    async createSession(): Promise<boolean> {
        this.currentSession = {
            sessionid: this.session,
            Created: Date.now(),
            LastUpdated: Date.now(),
            Answers: []
        };
        return await this.updateSession(this.currentSession);
    }

    public async appendToSession(answer: Answer): Promise<boolean> {
        await this.getSession();
        console.log("Appending to session", this.currentSession);
        this.currentSession.Answers.push(answer);
        this.currentSession.LastUpdated = Date.now();
        return await this.updateSession(this.currentSession);
    }

    private async updateSession(updatedSession: Session): Promise<boolean> {
        console.log("Updating session", updatedSession);
        try {
            await this.db.saveDocument(updatedSession);
        }
        catch (err) {
            console.log("oops this an error", err);
            return false;
        }
        this.currentSession = updatedSession;
        console.log("Updated session", this.currentSession);
        return true;
    }

    public async hasSession(): Promise<boolean> {
        const session = await this.getSession();
        if (!session) {
            return false;
        }
        console.log("Has session", session.Answers.length);
        return session.Answers.length !== 0;
    }

    public async getPreviousAnswers(): Promise<Answer[]> {
        const session = await this.getSession();
        return !session || !session.Answers ? [] : session.Answers;
    }
    private async getSession(){
        try {
            if (!this.currentSession) {
                this.currentSession = await this.db.getDocument(this.session);
                console.log("Got session", this.currentSession);
            }
            return this.currentSession;
        }
        catch (err) {
            console.log("Error getting session", err);
            return undefined;
        }
    }

    private hashIp(clientIp: string): string {
        const hash = createHash("sha256");
        hash.update(clientIp);
        return hash.toString();
    }
}
export default SessionManager;
