import ISessionManager from "./ISessionManager.d.ts";
import { FirstWelcome, WelcomeBack } from "./Components.ts";

const sessionHandler = async (session: ISessionManager) => {
  let hasSession = false;
  try {
    hasSession = await session.hasSession();
  } catch {
    //
  }

  return hasSession ? WelcomeBack() : FirstWelcome();
};

export default sessionHandler;
