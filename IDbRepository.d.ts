import { Session } from "./Session.d.ts";
interface IDbRepository {
    saveDocument(sessionDocument: Session): Promise<boolean>;
    getDocument(sessionId: string): Promise<Session>;
}

export default IDbRepository;
