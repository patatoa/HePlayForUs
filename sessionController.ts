import ISessionManager from './ISessionManager.d.ts';
import { FirstWelcome, WelcomeBack } from "./Components.ts"

const sessionController = async (_req: Request, session: ISessionManager): Promise<Response> => {
    return new Response(await session.hasSession() ? WelcomeBack() : FirstWelcome());
}

export default sessionController;
