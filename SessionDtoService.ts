import { Session } from "./Session.d.ts";

class SessionDtoService {
    private constructor() { }
    static convertCurrentSessionToDynamoDbFormat(session: Session) {
        return {
            sessionid: { S: session.sessionid },
            Created: { N: session.Created.toString() },
            LastUpdated: { N: session.LastUpdated.toString() },
            Answers: {
                L: session.Answers.map((answer) => {
                    return {
                        M: {
                            PlayerId: { N: answer.PlayerId.toString() },
                            Correct: { BOOL: answer.Correct ? "true" : "false" },
                        },
                    };
                })
            },
        };
    }

    static convertDynamoDbSessionToCurrentFormat(session: DynamoDBSession) {
        return {
            sessionid: session["sessionid"].S,
            Created: Number(session["Created"].N),
            LastUpdated: Number(session["LastUpdated"].N),
            Answers: session["Answers"].L.map((answer) => {
                return {
                    PlayerId: Number(answer.M.PlayerId.N),
                    Correct: answer.M.Correct.BOOL,
                };
            }),
        };
    }
}

type DynamoDBString = {
    S: string;
};

type DynamoDBNumber = {
    N: string;
};

type DynamoDBBoolean = {
    BOOL: boolean;
};

type DynamoDBList<T> = {
    L: T[];
};

type DynamoDBMap = {
    M: {
        [key: string]: DynamoDBString | DynamoDBNumber | DynamoDBBoolean | DynamoDBList<any>;
    };
};

type DynamoDBAnswer = {
    M: {
        PlayerId: DynamoDBNumber;
        Correct: DynamoDBBoolean;
    };
};

type DynamoDBSession = {
    sessionid: DynamoDBString;
    Created: DynamoDBNumber;
    LastUpdated: DynamoDBNumber;
    Answers: DynamoDBList<DynamoDBAnswer>;
};


export default SessionDtoService;
