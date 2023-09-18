import type { Answer } from "./Session.d.ts";
interface ISessionManager {
    createSession(): Promise<boolean>;
    hasSession(): Promise<boolean>;
    appendToSession(answer: Answer): Promise<boolean>;
    getPreviousAnswers(): Promise<Answer[]>;
    getSessionString(): string;
}

export default ISessionManager;
