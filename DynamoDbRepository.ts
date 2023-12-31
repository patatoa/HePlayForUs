import {
    DynamoDBClient,
    GetItemCommand,
    PutItemCommand,
} from "https://esm.sh/@aws-sdk/client-dynamodb@3.414.0";

import IDbRepository from "./IDbRepository.d.ts";
import SessionDtoService from "./SessionDtoService.ts";
import { Session } from "./Session.d.ts";

class DynamoDbRepository implements IDbRepository {
    private client: DynamoDBClient;
    private readonly tableName = "spursgames";

    constructor() {
        this.client = new DynamoDBClient({
            region: "us-east-2",
            credentials: {
                accessKeyId: Deno.env.get("db_key"),
                secretAccessKey: Deno.env.get("db_secret_key"),
            },
        });
    }
    public async saveDocument(sessionDocument: Session): Promise<boolean> {
        const command = new PutItemCommand({
            TableName: this.tableName,
            Item: SessionDtoService.convertCurrentSessionToDynamoDbFormat(sessionDocument),
        });
        try {
            await this.client.send(command);
            return true;
        }
        catch (err) {
            throw new Error(`Error saving document: ${err}`);
        }
    }
    public async getDocument(sessionId: string): Promise<Session> {
        const command = new GetItemCommand({
            TableName: this.tableName,
            Key: {
                sessionid: { S: sessionId },
            },
        });
        const response = await this.client.send(command);
        if(!response.Item) {
            return {
                sessionid: sessionId,
                Created: Date.now(),
                LastUpdated: Date.now(),
                Answers: []
            };
        }
        return SessionDtoService.convertDynamoDbSessionToCurrentFormat(response.Item);
    }
}

export default DynamoDbRepository;
