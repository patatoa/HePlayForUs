import { html } from "https://deno.land/x/html/mod.ts";

interface GameButtonProps {
    route: string;
    text: string;
    classes: string;
}

interface PlayerCardProps {
    previousAnswer: boolean | undefined;
    previousAnswerText: string | undefined;
    Id: number;
    ImagePath: string;
    Name: string;
    FlavorText: string;
}

interface CompletionCheckProps {
    CorrectCount: number;
    TotalCount: number;
}

const GameButton = ({ route, text, classes }: GameButtonProps): html => (
    html`
        <a
            ${classes ? `class="${classes}"` : ''}
            href="#"
            hx-get="${route}"
            hx-trigger="click"
            hx-target="#holder"
        >${text}
        </a>
    `
);

const PlayerCard = ({ previousAnswer, Id, ImagePath, Name, previousAnswerText, FlavorText }: PlayerCardProps): html => (
    html`
        <section>
            ${previousAnswer !== undefined ? html`
                <h1>${previousAnswer ? 'Correct!' : 'Wrong!'}</h1>
                <p>${previousAnswerText}</p>
                ` 
                : ''
            }
            <h2>Was ${Name} a Spur?</h2>
            <img class="pure-img" src="${ImagePath}" alt="${Name}" style="width:100%">
            <p>${FlavorText}</p>
        </section>
        <form 
        hx-post="/api/${Id}" 
        hx-target="#holder"
        class="card">
            <input type="hidden" name="id" value="${Id}">
            <button type="submit" name="answer" value="true" class="button"> Yes, he was a Spur</button>
            <button type="submit" name="answer" value="false" class="button"> No, he was not</button>
        </form>
    `
);


const WelcomeBack = (): html => (
    html`
        <section class="center">
            <h2>Welcome Back!</h2>
            <p>Would you like to resume your game?</p>
            ${GameButton({ route: '/api/', text: 'Yes, Resume', classes: 'pure-button pure-button-primary' })}
            ${GameButton({ route: '/api/reset', text: 'New Game', classes: 'pure-button pure-button-primary' })}
        </section>
    `
);

const CompletionCheck = ({ CorrectCount, TotalCount }: CompletionCheckProps): html => (
    html`
        <h2> You answered ${CorrectCount} out of ${TotalCount} correctly.</h2>
        <p> But wait! There's still more vaguely familiar players! Would you like to continue?</p>
        ${GameButton({ route: '/api/', text: 'Yes, Continue', classes: 'pure-button pure-button-primary' })}
    `
);

const GameOver = ({ CorrectCount, TotalCount }: CompletionCheckProps): html => (
    html`
        <section class="center">
            <h2> You answered ${CorrectCount} out of ${TotalCount} correctly.</h2>
            <p>Congratulations! You've completed the game! I hope you enjoyed, puro Spurs fang. Would you like to play again?</p>
            ${GameButton({ route: '/api/reset', text: 'New Game', classes: 'pure-button pure-button-primary' })}
        </section>
    `
);

const FirstWelcome = (): html => (
    html`
        <section>
            <p>The Spurs are a magnet for basketball talent. Their phonemonal streak of over 20 consecutive playoff appearences and 5 chammpionships in that time is due to the team's ability to identify and utilize valuable players. Their propensity to identify NBA talent oversees, find undrafted players that can contribute, and assimilate aging stars looking for one last chance at the trophy has meant quite a few peculiar and surprising alumns adorned the Silver & Black. Some you probably forgot about. There are also players that fit the Spurs' ethos so well you could <em>swear</em> called the AT&T Center home. How well do you know your last twenty years of Spurs history? Can you correctly identify whether or not these players played for the San Antonio Spurs or not?</p>
            ${GameButton({ route: '/api/', text: 'Play', classes: 'pure-button pure-button-primary' })}
        </section>
    `
);

export {
    GameButton,
    PlayerCard,
    WelcomeBack,
    CompletionCheck,
    GameOver,
    FirstWelcome
};
export type {
    GameButtonProps,
    PlayerCardProps,
    CompletionCheckProps
};
