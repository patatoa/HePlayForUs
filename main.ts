import { contentType } from "https://deno.land/std@0.201.0/media_types/mod.ts";
import {
    APIGatewayProxyEventV2,
    APIGatewayProxyResultV2,
    Context,
  } from "https://deno.land/x/lambda@1.32.5/mod.ts";

import playerController from "./playerController.ts";
import sessionController from "./sessionController.ts";
import SessionManager from "./sessionManager.ts";
import DynamoDbRepository from "./DynamoDbRepository.ts";

export async function handler(
    event: APIGatewayProxyEventV2,
    _context: Context,
  ): Promise<APIGatewayProxyResultV2> {
    const regex = /.*\.\w+$/;

    if (regex.test(event.rawPath)) {
        return staticFileHandler(event);
    }

    const sessionManager = new SessionManager(event, new DynamoDbRepository());
    if (/\/session\/.*/.test(event.rawPath)) {
        return sessionController(event, sessionManager);
    }
    if (/\/api\/.*/.test(event.rawPath)) {
        return playerController(event, sessionManager);
    }
    const content = await Deno.readTextFile("./index.html");
    return {
        body: content,
        statusCode: 200, 
        headers: {
            "content-type": "text/html; charset=utf-8"
        }
  };
}

const staticFileHandler = async (req: APIGatewayProxyEventV2): Promise<APIGatewayProxyResultV2> => {
    const BASE_PATH = "./public";

    const filePath = BASE_PATH + req.rawPath;
    const fileExtension = req.rawPath.split(".").pop();
    let fileSize: number;
    try {
        fileSize = (await Deno.stat(filePath)).size;
    } catch (e) {
        if (e instanceof Deno.errors.NotFound) {
            return { statusCode: 404, };
        }
        return {statusCode: 500};
    }
    const body = await Deno.readTextFile(filePath); 
    return {
        statusCode: 200,
        body: body,
        headers: {
            "content-length": fileSize.toString(),
            "content-type": contentType(fileExtension || "txt") || "application/octet-stream",
        },
    };
}
