interface Answer {
    PlayerId: number;
    Correct: boolean;
}
interface Session {
    sessionid: string;
    Created: number;
    LastUpdated: number;
    Answers: Answer[];
}

export type { Answer, Session };
