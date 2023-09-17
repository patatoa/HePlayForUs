import { type APIGatewayProxyEventV2} from "https://deno.land/x/lambda@1.31.3/types.d.ts";
import ISessionManager from "./ISessionManager.d.ts";
import { FirstWelcome, WelcomeBack } from "./Components.ts";

const sessionController = async (
  _req: APIGatewayProxyEventV2,
  session: ISessionManager
) => {
  let hasSession = false;
  try {
    hasSession = await session.hasSession();
  } catch{
    //
  } 

  return {
    statusCode: 200,
    body: hasSession ? WelcomeBack() : FirstWelcome(),
  };
};

export default sessionController;
