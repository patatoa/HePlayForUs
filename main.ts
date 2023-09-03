import { lookup } from "https://deno.land/x/media_types/mod.ts";
import {  ConnInfo } from "https://deno.land/std@0.125.0/http/server.ts";

import playerController from "./playerController.ts";
import sessionController from "./sessionController.ts";
import SessionManager from "./sessionManager.ts";
import DynamoDbRepository from "./DynamoDbRepository.ts";

const requestHandler = async (req: Request, connInfo: ConnInfo): Promise<Response> => {
    // console.log(req);
    const regex = /.*\.\w+$/;

    if (regex.test(req.url)) {
        console.log("We doing static file for {0}", req.url);
        return staticFileHandler(req);
    }
    const sessionManager = new SessionManager(connInfo, new DynamoDbRepository());
    if (/\/session\/.*/.test(req.url)) {
        return sessionController(req, sessionManager);
    }
    if (/\/api\/.*/.test(req.url)) {
        return playerController(req, sessionManager);
    }
    const content = await Deno.readTextFile("./index.html");
    return new Response(content, {
        status: 200, headers: {
            "content-type": "text/html; charset=utf-8"
        }
    });
}

const staticFileHandler = async (req: Request): Promise<Response> => {
    const BASE_PATH = "./public";

    const filePath = BASE_PATH + new URL(req.url).pathname;
    let fileSize: number;
    try {
        fileSize = (await Deno.stat(filePath)).size;
    } catch (e) {
        if (e instanceof Deno.errors.NotFound) {
            console.log(req);
            return new Response(null, { status: 404 });
        }
        return new Response(null, { status: 500 });
    }
    const body = (await Deno.open(filePath)).readable;
    return new Response(body, {
        headers: {
            "content-length": fileSize.toString(),
            "content-type": lookup(filePath) || "application/octet-stream",
        },
    });
}

Deno.serve(requestHandler);
