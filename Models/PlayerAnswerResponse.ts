class PlayerAnswerResponse {
    public answer: boolean;
    public id: number;

    constructor(post: string) {
        const body = new URLSearchParams(post);
        this.answer = body.get("answer") === "true";
        this.id = Number(body.get("id"));
    }
}
export default PlayerAnswerResponse;
