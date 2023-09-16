class PlayerAnswerResponse {
    public answer: boolean;
    public id: number;

    constructor(post: string) {
        const decodedBody = atob(post);
        const regex = /id=(\d+)&answer=(true|false)/;
        const match = decodedBody.match(regex);
        if (!match) {
            throw new Error("Could not parse body");
        }
        // Parse out the id and answer values
        const [, id, answer] = match;
        this.answer = answer === "true";
        this.id = Number(id);
    }
}
export default PlayerAnswerResponse;
