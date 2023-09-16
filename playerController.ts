import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from "https://deno.land/x/lambda@1.32.5/mod.ts";
    
import { PlayerRepo } from "./players.ts";
import PlayerAnswerResponse from "./Models/PlayerAnswerResponse.ts";
import ISessionManager from "./ISessionManager.d.ts";
import { Answer } from "./Session.d.ts";
import { 
    PlayerCard, 
    CompletionCheck,
    GameOver,
} from "./Components.ts"

const playerController = async (
  event: APIGatewayProxyEventV2,
  session: ISessionManager
): Promise<APIGatewayProxyResultV2> => {
  let previousAnswer: boolean | undefined = undefined;
  let previousAnswerText: string | undefined = undefined;

  const reqMethod = event.requestContext.http.method;
  const reqUrl = event.requestContext.http.path;

  if (reqMethod === 'GET' && /\/api\/reset/.test(reqUrl)) {
      await session.createSession();
  }
  else if (reqMethod === 'POST') {
      // base 64 decode the body
        const decodedBody = atob(event.body ?? "");
        const regex = /id=(\d+)&answer=(true|false)/;
        const match = decodedBody.match(regex);
        if (!match) {
            return { statusCode: 400 };
        }
        // Parse out the id and answer values
        const [, id, answer] = match;
        console.log("id", id);
        console.log("answer", answer);

      console.log("event body", event.body);
      console.log("Decoded body", decodedBody);
      const userResponse = {
            id: parseInt(id),
            answer: answer === 'true'
        } as PlayerAnswerResponse;
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
  
  if (reqMethod === 'POST' && previousAnswers.length % 10 === 0) {
      return {
          statusCode: 200,
          body: CompletionCheck(progress)
      };
  }

  const randomPlayer = PlayerRepo.getRandomPlayer(previousAnswers.map((answer) => answer.PlayerId));
  if (!randomPlayer) {
      return {
          statusCode: 200,
          body: GameOver(progress)
      };
  }

  return {
      statusCode: 200,
      body: PlayerCard({ 
          previousAnswer: previousAnswer, 
          previousAnswerText: previousAnswerText,
          ...randomPlayer
      })
  };
}

export default playerController;
