import {
    APIGatewayProxyEventV2,
    APIGatewayProxyResultV2,
    Context,
  } from "https://deno.land/x/lambda@1.32.5/mod.ts";

import playerController from "./playerController.ts";
import sessionHandler from "./sessionHandler.ts";
import SessionManager from "./sessionManager.ts";
import DynamoDbRepository from "./DynamoDbRepository.ts";

export async function handler(
    event: APIGatewayProxyEventV2,
    _context: Context,
  ): Promise<APIGatewayProxyResultV2> {
    const sessionManager = new SessionManager(event, new DynamoDbRepository());
    if (/\/api\/.*/.test(event.rawPath)) {
        return playerController(event, sessionManager);
    }
    const content = await Deno.readTextFile("./index.html");
    const app = await sessionHandler(sessionManager);
    const newContent = content.replace("{{app}}", app);
    return {
        body: newContent,
        statusCode: 200, 
        headers: {
            "content-type": "text/html; charset=utf-8"
        }
  };
}