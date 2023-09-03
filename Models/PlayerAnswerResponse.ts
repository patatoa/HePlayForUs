class PlayerAnswerResponse {
    public answer: boolean;
    public id: number;

    constructor(post: FormData) {
        this.answer = post.get('answer') === 'true';
        this.id = Number(post.get('id'));
    }
}
export default PlayerAnswerResponse;
