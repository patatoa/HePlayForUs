import { PlayerRepo } from "./players.ts";
import PlayerAnswerResponse from "./Models/PlayerAnswerResponse.ts";
import ISessionManager from "./ISessionManager.d.ts";
import { Answer } from "./Session.d.ts";
import { 
    PlayerCard, 
    CompletionCheck,
    GameOver,
} from "./Components.ts"

const playerController = async (req: Request, session: ISessionManager): Promise<Response> => {
    let previousAnswer: boolean | undefined = undefined;
    let previousAnswerText: string | undefined = undefined;
    if (req.method === 'GET' && /\/api\/reset/.test(req.url)) {
        await session.createSession();
    }
    else if (req.method === 'POST') {
        const userResponse = new PlayerAnswerResponse(await req.formData());
        const player = PlayerRepo.getPlayer(userResponse.id);
        if (player) {
            previousAnswer = player.WasSpur === userResponse.answer;
            previousAnswerText = player.AnswerText;
            await session.appendToSession({ PlayerId: userResponse.id, Correct: previousAnswer } as Answer);
        }
    }

    const previousAnswers = await session.getPreviousAnswers();
    const progress = { 
            CorrectCount: previousAnswers.filter((answer) => answer.Correct).length, 
            TotalCount: previousAnswers.length 
        }
    
    if (req.method === 'POST' && previousAnswers.length % 10 === 0) {
        return new Response(CompletionCheck(progress));
    }

    const randomPlayer = PlayerRepo.getRandomPlayer(previousAnswers.map((answer) => answer.PlayerId));
    if (!randomPlayer) {
        return new Response(GameOver(progress));
    }

    return new Response(PlayerCard({ 
        previousAnswer: previousAnswer, 
        previousAnswerText: previousAnswerText,
        ...randomPlayer
    }));
}

export default playerController;
