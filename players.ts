interface Player {
    Id: number;
    Name: string;
    ImagePath: string;
    WasSpur: boolean;
    FlavorText: string;
    AnswerText: string;
}
class PlayerRepo {
    private constructor() { }
    private static players: Player[] = [
        {
            Id: 2,
            Name: 'Tyson Chandler',
            ImagePath: 'https://heplayforus-spurs.s3.us-east-2.amazonaws.com/tysonchandler.png',
            WasSpur: false,
            FlavorText: 'The second pick in the 2001 NBA Draft never put it together with the team that drafted him, the Chicago Bulls. Chandler made his name as an explosive rim protector and lob-recipient playing alongside Chris Paul and Jason Kidd. A valuable contributor even late in his career, Chandler played on some pretty random teams rooting for a ring. We’re the Spurs among them?',
            AnswerText: 'Unfortunately, Tyson Chandler never suited up for the Silver & Black',
        },
        {
            Id: 3,
            Name: 'Damon Stoudemire',
            ImagePath: 'https://heplayforus-spurs.s3.us-east-2.amazonaws.com/damonstoudemire.png',
            WasSpur: true,
            FlavorText: 'Mighty Mouse made a name for himself on the mid-late 90’s Toronto Raptors and Portland Trailblazers. Late in his career he re-molded himself into one of the premier backup point guards as a stout defender and smart floor general. Exactly the kind of player the Spurs were always looking floor to back up Tony Parker.',
            AnswerText: 'Damon Stoudemire played on the 2007-08 Spurs, his final NBA season. He played in 31 games, starting 4.',
        },
        {
            Id: 4,
            Name: 'Nick Van Exel',
            ImagePath: 'https://heplayforus-spurs.s3.us-east-2.amazonaws.com/nickvanexel.png',
            WasSpur: true,
            FlavorText: 'Nick the Quick was an All Star Point Guard during blissful years when the LA Lakers bad in early 90’s. He proved to be a capable point guard who could score in bunches. The Spurs love them a veteran point guard.',
            AnswerText: 'Nick Van Exel did make his way to the Spurs playing his final season backing up Tony Parker in 2006.',
        },
        {
            Id: 5,
            Name: 'Greg Anthony',
            ImagePath: 'https://heplayforus-spurs.s3.us-east-2.amazonaws.com/greganthony.png',
            WasSpur: false,
            FlavorText: 'Greg Anthony is your typical 90’s floor general, jack of all trades. Splashed on to the scene on the mighty 90’s Knicks before getting pulled into the expansion Vancouver Grizzlies. He held down the fort for many teams, some contenders. We’re the Spurs one of them?',
            AnswerText: 'Greg Anthony never played for the Spurs, though it would have made sense.',
        },
        {
            Id: 6,
            Name: 'Nando De Colo',
            ImagePath: 'https://heplayforus-spurs.s3.us-east-2.amazonaws.com/nandodecolo.png',
            WasSpur: true,
            FlavorText: 'Just look at this guy. At one point in time, Nando De Colo was considered the best point guard not in the NBA. The Spurs are known for their foreign scouting. Was De Colo one of their finds?',
            AnswerText: 'Nando De Colo played two seasons in the NBA, starting with San Antonio before being traded to Toronto. He then returned to Europe where he won EuroLeague MVP.',
        },
        {
            Id: 7,
            Name: 'Ryan Anderson',
            ImagePath: 'https://heplayforus-spurs.s3.us-east-2.amazonaws.com/ryananderson.png',
            WasSpur: false,
            FlavorText: 'Ryan Anderson was a 6’9 Forward who could make it rain from beyond the arc. The Spurs weren’t the first to popularize the concept of the “Stretch 4”, but were a team that saw early success with it. Was Ryan Anderson part of that?',
            AnswerText: 'Anderson never made it to San Antonio. Though, it was rumored the Spurs would pick him in the 2008 Draft and that’s the reason the New Jersey Nets drafted him ahead of the Spurs.',
        },
        {
            Id: 8,
            Name: 'Anderson Varejao',
            ImagePath: 'https://heplayforus-spurs.s3.us-east-2.amazonaws.com/andersonvarejao.png',
            WasSpur: false,
            FlavorText: 'Varejao is maybe the gold standard when it comes to utility bigs. He’ll bring effort on the boards and defense without making too many mistakes and knows where to be on offense. He proved to be valuable piece to several contending squads.',
            AnswerText: 'Varejao would have slotted in next to Duncan or Aldridge real nice, but alas.',
        },
        {
            Id: 9,
            Name: 'Theo Ratliff',
            ImagePath: 'https://heplayforus-spurs.s3.us-east-2.amazonaws.com/theoratliff.png',
            WasSpur: true,
            FlavorText: 'The Spurs enjoyed pairing Duncan with a reliable room protector for much of his peak. Guys like Rasho Nesterovic or Tiago Splitter. In his day, Theo Ratliff was among the leagues best defensive post presences.',
            AnswerText: 'Theo Ratliff played 21 games for the Spurs in 2010 before trying traded to the Bobcats (yikes.) Unfortunately by the time he joined the Spurs his skills diminished and the game was moving away from players like him.',
        },
        {
            Id: 10,
            Name: 'Melvin Ely',
            ImagePath: 'https://heplayforus-spurs.s3.us-east-2.amazonaws.com/melvinely.png',
            WasSpur: true,
            FlavorText: 'Melvin Ely, a center with a solid defensive presence, was known for his shot-blocking ability and rebounding prowess. With a game built on fundamentals, Ely would have fit seamlessly into the Spurs system, which emphasizes team defense and smart play. His physicality in the post could have added depth to the Spurs frontcourt, especially during the grind of the playoffs.',
            AnswerText: 'Melvin Ely played 6 games for the Spurs in 2007.',
        },
        {
            Id: 11,
            Name: 'Chris Wilcox',
            ImagePath: 'https://heplayforus-spurs.s3.us-east-2.amazonaws.com/chriswilcox.png',
            WasSpur: false,
            FlavorText: 'An athletic big man, Chris Wilcox was recognized for his speed, agility, and ability to finish at the rim. With a transition game that was faster than many of his peers, he could have been a valuable asset in the Spurs\' fast breaks. His energy and hustle would have complemented the Spurs\' disciplined style, providing a change of pace when needed.',
            AnswerText: 'Chris Wilcox never played for the Spurs.',
        },
        {
            Id: 12,
            Name: 'Ruben Patterson',
            ImagePath: 'https://heplayforus-spurs.s3.us-east-2.amazonaws.com/rubenpatterson.png',
            WasSpur: false,
            FlavorText: 'Often referred to as the "Kobe Stopper" due to his defensive abilities, Ruben Patterson was a tenacious wing defender with a knack for taking on an opponent\'s best scorer. His defensive mindset would have been a perfect fit for the Spurs\' defense-first philosophy. Additionally, Patterson\'s slashing ability and aggressiveness on offense could have benefited the Spurs during offensive lulls.',
            AnswerText: 'Ruben Patterson never played for the Spurs.',
        },
        {
            Id: 13,
            Name: 'Luis Scola',
            ImagePath: 'https://heplayforus-spurs.s3.us-east-2.amazonaws.com/luisscola.png',
            WasSpur: false,
            FlavorText: 'Luis Scola was an integral member, and team mate of Manu, on the early 2000’s Argentina men’s National Team. A power forward with a high basketball IQ, was known for his crafty post moves and relentless rebounding. A no-brainer.',
            AnswerText: 'Call the police, a crime was committed. Luis Scola never played for the Spurs. They held his draft rights, but traded them to avoid the luxury tax. The Spurs really overthought this one.',
        },
        {
            Id: 14,
            Name: 'Walter Hermann',
            ImagePath: 'https://heplayforus-spurs.s3.us-east-2.amazonaws.com/walterhermann.png',
            WasSpur: false,
            FlavorText: 'Walter Hermann was yet another member of the killer Argentinian Men’s National Team, whom The Spurs were fond of. Hermann brought versatility with his ability to play both forward positions.',
            AnswerText: 'Though many of his team mates made their way to the Spurs, Hermann never did.',
        },
        {
            Id: 15,
            Name: 'Kurt Thomas',
            ImagePath: 'https://heplayforus-spurs.s3.us-east-2.amazonaws.com/kurtthomas.png',
            WasSpur: true,
            FlavorText: 'Kurt Thomas was a rugged power forward/center who could best be described as “Played on the 90’s Knicks.” Known for his defensive prowess and soft mid-range shooting.',
            AnswerText: 'Kurt Thomas was gifted to the Spurs, being traded from the Sonics by GM Sam Presti, former Assistant GM of the Spurs. He played two seasons in San Antonio.',
        },
        {
            Id: 16,
            Name: 'Nené',
            ImagePath: 'https://heplayforus-spurs.s3.us-east-2.amazonaws.com/nene.png',
            WasSpur: false,
            FlavorText: 'the Brazilian center/power forward, brought a unique blend of power and agility to his game. His ability to run the floor, finish strong at the rim, and defend multiple positions would have made him a valuable asset in the Spurs’ system. With his energy and physicality, Nené could have provided a spark off the bench or even slotted into a starting role, complementing the Spurs’ stars.',
            AnswerText: 'Nené did not play in San Antonio',
        },
        {
            Id: 17,
            Name: 'Glenn Robinson',
            ImagePath: 'https://heplayforus-spurs.s3.us-east-2.amazonaws.com/glennrobinson.png',
            WasSpur: true,
            FlavorText: 'The Big Dog” Glenn Robinson was a prolific scorer, known for his mid-range game and ability to create his own shot. As a former number one draft pick, Robinson’s offensive prowess would have added another scoring dimension to the Spurs. While the Spurs’ system is predicated on ball movement and team play, Robinson’s one-on-one skills could have been leveraged in clutch situations or when the offense stalled.',
            AnswerText: 'The Spurs can claim to have both "Big Dogs", Antoine Carr and Glenn Robinson. The latter of which won a ring in 2003 after signing just before the post-season roster deadline.',
        },
        {
            Id: 18,
            Name: 'Glenn Rice',
            ImagePath: 'https://heplayforus-spurs.s3.us-east-2.amazonaws.com/glennrice.png',
            WasSpur: false,
            FlavorText: 'A three-time NBA All-Star, Glen Rice was one of the league’s premier sharpshooters during the 1990s. Known for his silky-smooth jump shot with the Charlotte Hornets and Miami Heat, Rice’s scoring prowess and ability to stretch the floor would’ve been a tremendous asset to the Spurs, adding another dynamic scoring threat to their offensive arsenal. Especially during his ring-chasing era.',
            AnswerText: 'Glenn Rice never played for the Spurs.',
        },
        {
            Id: 19,
            Name: 'Sam Cassell',
            ImagePath: 'https://heplayforus-spurs.s3.us-east-2.amazonaws.com/samcassell.png',
            WasSpur: false,
            FlavorText: 'Sam Cassell, a crafty point guard with a penchant for big moments, was known for his clutch gene and leadership. His ability to control the tempo, distribute the ball, and score when needed would have made him a great fit within the Spurs’ guard rotation. Cassell’s experience and poise would have been invaluable, especially during the playoffs, complementing the Spurs’ championship DNA.',
            AnswerText: 'Sam Cassell never played for the Spurs.',
        },
        {
            Id: 20,
            Name: 'Hedo Turkoglu',
            ImagePath: 'https://heplayforus-spurs.s3.us-east-2.amazonaws.com/hedoturkoglu.png',
            WasSpur: true,
            FlavorText: 'Hedo Turkoglu, a versatile Turkish forward, was known for his playmaking and clutch shooting. With a unique skill set for his size, Turkoglu could handle the ball, make decisions in the pick-and-roll, and stretch the floor with his three-point shooting. In the Spurs’ system, his ability to create for others and knock down timely shots would have blended seamlessly with the team’s emphasis on ball movement and spacing.',
            AnswerText: 'Hedo Turkoglu played on the 2004 Spurs, narrowly missing out on his ring.',
        },
        {
            Id: 21,
            Name: 'Desagana Diop',
            ImagePath: 'https://heplayforus-spurs.s3.us-east-2.amazonaws.com/desaganadiop.png',
            WasSpur: false,
            FlavorText: 'A  towering presence in the paint, he was a shot-blocker and rebounder who could deter opponents from driving to the rim. In the Spurs’ defensive schemes, Diop could have provided critical minutes as a rim protector, complementing the team’s overall defensive philosophy.',
            AnswerText: 'Desagana Diop did not for the Spurs.',
        },
        {
            Id: 22,
            Name: 'David West',
            ImagePath: 'https://heplayforus-spurs.s3.us-east-2.amazonaws.com/davidwest.png',
            WasSpur: true,
            FlavorText: 'David West, a tough and skilled power forward, brought a combination of mid-range shooting, post play, and veteran leadership. His gritty style and basketball IQ would have been a perfect fit for the Spurs’ culture of discipline and selflessness. West’s ability to operate in pick-and-pop scenarios and his defensive tenacity would have added depth and versatility to the Spurs’ frontcourt.',
            AnswerText: 'Davin West was a part of the 67 win 2016 Spurs. This was the team that got "Zaza’d". Crushing. He joined the Warriors the next season, so I’m not feeling too sad for him.',
        },
        {
            Id: 23,
            Name: 'David Lee',
            ImagePath: 'https://heplayforus-spurs.s3.us-east-2.amazonaws.com/davidlee.png',
            WasSpur: true,
            FlavorText: 'An energetic big man, David Lee was known for his double-double potential, efficient scoring around the rim, and rebounding prowess. His hustle, combined with a soft touch around the basket, would have fit well within the Spurs’ system that values high-percentage shots. Lee’s passing ability from the post would also have meshed with the Spurs’ emphasis on ball movement.',
            AnswerText: 'David Lee played his final NBA season with the Spurs in 2017.',
        },
        {
            Id: 24,
            Name: 'Miloš Vujanić ',
            ImagePath: 'https://heplayforus-spurs.s3.us-east-2.amazonaws.com/milosvujanic.png',
            WasSpur: false,
            FlavorText: 'Miloš Vujanić was at one point considered the best point guard in Europe. So its no question he would have been on the Spurs radar. A floor general accustomed to high-pressure situations.',
            AnswerText: 'Milos Vujanic never played for the Spurs, or in the NBA for that matter.',
        },
        {
            Id: 25,
            Name: 'TJ Ford',
            ImagePath: 'https://heplayforus-spurs.s3.us-east-2.amazonaws.com/tjford.png',
            WasSpur: true,
            FlavorText: 'T.J. Ford, with his blazing speed and court vision, was a dynamic point guard capable of pushing the pace and setting up teammates. In the Spurs’ system, Ford’s ability to penetrate defenses and distribute the ball would have complemented the team’s half-court sets. His agility and quick decision-making could have added a different tempo to the Spurs’ guard rotation.',
            AnswerText: 'TJ Ford played his final NBA season with the Spurs in 2012. After only 14 games played, he was forced to retire due to a spinal injury.',
        },
        {
            Id: 26,
            Name: 'Luke Ridnour',
            ImagePath: 'https://heplayforus-spurs.s3.us-east-2.amazonaws.com/lukeridnour.png',
            WasSpur: false,
            FlavorText: 'Ridnour brought a steady hand and reliable shooting touch. His basketball IQ and ability to run an offense would’ve integrated smoothly with the Spurs’ system, offering them a consistent playmaker in their guard rotation. He has the dubious distinction of being traded three times in 24 hours. We’re the Spurs one of those teams?',
            AnswerText: 'While Ridnour was quite the journeyman, he never played for the Spurs.',
        },
        {
            Id: 27,
            Name: 'Leandro Barbosa',
            ImagePath: 'https://heplayforus-spurs.s3.us-east-2.amazonaws.com/leandrobarbosa.png',
            WasSpur: false,
            FlavorText: 'The “Brazilian Blur,” Leandro Barbosa was recognized for his incredible speed and scoring ability off the bench. His capacity to change the game’s pace and provide instant offense would have been a boon to the Spurs’ second unit. Barbosa’s transition game and perimeter shooting could have added an extra layer of depth to the Spurs’ offensive schemes.',
            AnswerText: 'Life isn’t fair and Leandro Barbosa never played for the Spurs.',
        },
        {
            Id: 28,
            Name: 'Francisco Garcia',
            ImagePath: 'https://heplayforus-spurs.s3.us-east-2.amazonaws.com/franciscogarcia.png',
            WasSpur: false,
            FlavorText: 'Francisco Garcia, a versatile wing player, brought a mix of outside shooting and defensive length. His ability to stretch the floor and defend multiple positions would have been valuable in the Spurs’ system that values spacing and defensive flexibility. Garcia’s experience and adaptability could have provided the Spurs with added depth on the wings.',
            AnswerText: 'Francisco Garcia never played for the Spurs.',
        },
        {
            Id: 29,
            Name: 'Kevin Martin',
            ImagePath: 'https://heplayforus-spurs.s3.us-east-2.amazonaws.com/kevinmartin.png',
            WasSpur: true,
            FlavorText: 'A prolific scorer with a unique shooting form, Kevin Martin had a knack for getting to the free-throw line and knocking down threes. In the Spurs’ offense, Martin’s scoring prowess would have provided another offensive weapon, either as a starter or a go-to option off the bench. His off-ball movement and efficiency would have complemented the Spurs’ ball movement-centric system.',
            AnswerText: 'Kevin Martin played his final NBA season with the Spurs in 2016.',
        },
        {
            Id: 30,
            Name: 'Channing Frye',
            ImagePath: 'https://heplayforus-spurs.s3.us-east-2.amazonaws.com/channingfrye.png',
            WasSpur: false,
            FlavorText: 'Frye, notable for his time with the Phoenix Suns and as a key reserve during the Cleveland Cavaliers’ championship run, was one of the league’s premier stretch big men. His ability to space the floor with his three-point shooting would’ve complemented the Spurs’ inside-out game, potentially creating more opportunities for Duncan in the post.',
            AnswerText: 'Chaning Frye never played for the Spurs.',
        },
        {
            Id: 31,
            Name: 'Ike Diogu',
            ImagePath: 'https://heplayforus-spurs.s3.us-east-2.amazonaws.com/ikediogu.png',
            WasSpur: true,
            FlavorText: 'While Diogu bounced around the league, he was known for his physical presence in the paint. His scoring touch around the basket and rebounding tenacity could’ve been valuable assets to a Spurs team always on the lookout for frontcourt depth.',
            AnswerText: 'Ike Diogu played 2 games for the Spurs in 2012.',
        },
        {
            Id: 32,
            Name: 'Corey Brewer',
            ImagePath: 'https://heplayforus-spurs.s3.us-east-2.amazonaws.com/coreybrewer.jpeg',
            WasSpur: false,
            FlavorText: 'After winning two NCAA championships with Florida and contending NBA squads, Brewer carved out a reputation as a defensive specialist and transition threat. His high-energy play and ability to create turnovers could’ve provided the Spurs with a change of pace, bolstering their wing rotation.',
            AnswerText: 'His many stops in the NBA did not include San Antonio.',
        },
        {
            Id: 33,
            Name: 'Aaron Afflalo',
            ImagePath: 'https://heplayforus-spurs.s3.us-east-2.amazonaws.com/aaronafflalo.png',
            WasSpur: false,
            FlavorText: 'Afflalo was top tier 3-and-D guy who makes a lot sense in a lineage of players like Sean Elliot & Bruce Bowen.',
            AnswerText: 'Afflalo never played for the Spurs.',
        },
        {
            Id: 34,
            Name: 'Nic Batum',
            ImagePath: 'https://heplayforus-spurs.s3.us-east-2.amazonaws.com/nicbatum.png',
            WasSpur: false,
            FlavorText: 'The Spurs have never been shy about bringing over fellow country men of the premier players. Nic Batum is a no brainer. Batum’s versatility as a forward is underscored by his ability to handle the ball, shoot from distance, and defend multiple positions. His all-around skill set would have been a seamless fit in the Spurs’ system that values positionless basketball and ball movement. Batum’s passing and defensive instincts could have provided the Spurs with various lineup options.',
            AnswerText: 'As of the 2023-2024 season, Nic Batum has not played for the Spurs. He is still active, so I’m saying there’s a chance.',
        },
        {
            Id: 35,
            Name: 'Demarre Carroll',
            ImagePath: 'https://heplayforus-spurs.s3.us-east-2.amazonaws.com/demarrecarroll.png',
            WasSpur: true,
            FlavorText: 'Often dubbed as the “Junkyard Dog” for his gritty play, Demarre Carroll is a tenacious defender and capable three-point shooter. His blue-collar approach and ability to defend elite wings would have complemented the Spurs’ defensive identity. Carroll’s catch-and-shoot game on offense would have fit well within the Spurs’ ball movement-oriented system.',
            AnswerText: 'Carroll played 15 games for the Spurs in 2019.',
        },
        {
            Id: 36,
            Name: 'Austin Daye',
            ImagePath: 'https://heplayforus-spurs.s3.us-east-2.amazonaws.com/austindaye.png',
            WasSpur: true,
            FlavorText: 'Daye, with his unique blend of size and shooting, could’ve provided the Spurs with added floor-spacing, complementing their inside-out game.',
            AnswerText: 'Austin Daye won a ring on the 2014 Spurs. He was also deadly in NBA 2k14.',
        },
        {
            Id: 37,
            Name: 'Omri Casspi',
            ImagePath: 'https://heplayforus-spurs.s3.us-east-2.amazonaws.com/omricasspi.png',
            WasSpur: false,
            FlavorText: 'Casspi’s energy and knack for cutting would’ve gelled with the Spurs’ motion offense. His international flair might’ve been another feather in the Spurs’ cap of successful foreign finds.',
            AnswerText: 'Omri Casspi never played for the Spurs.',
        },
        {
            Id: 38,
            Name: 'Donatas Motiejūnas',
            ImagePath: 'https://heplayforus-spurs.s3.us-east-2.amazonaws.com/donatasmotiejunas.png',
            WasSpur: true,
            FlavorText: 'Motiejūnas’ versatile skill set as a big, from post moves to shooting, would’ve been a fitting addition to the Spurs’ diverse offense, potentially pairing well with Duncan.',
            AnswerText: 'Donatas Motiejūnas played 3 games for the Spurs in 2019. This was his last NBA stop.',
        },
        {
            Id: 39,
            Name: 'Cody Zeller',
            ImagePath: 'https://heplayforus-spurs.s3.us-east-2.amazonaws.com/codyzeller.png',
            WasSpur: false,
            FlavorText: 'With Zeller’s mobility and efficient paint play, he could’ve offered the Spurs a reliable big-man option, adding depth to their frontcourt rotations. The Spurs love a doughy white guy in the front court.',
            AnswerText: 'Cody Zeller did not play for the Spurs.',
        },
        {
            Id: 40,
            Name: 'Rasual Butler',
            ImagePath: 'https://heplayforus-spurs.s3.us-east-2.amazonaws.com/rasualbutler.png',
            WasSpur: true,
            FlavorText: "A utility Forward, Butler could play anything except maybe the 1 in the modern NBA. Something every contending team could use.",
            AnswerText: "Rasual Butler was a contributor on the 2016 Spurs."
        },
        {
            Id: 41,
            Name: 'Andre Miller',
            ImagePath: 'https://heplayforus-spurs.s3.us-east-2.amazonaws.com/andremiller.png',
            WasSpur: true,
            FlavorText: "At one point in time, there was no hotter guard in the league than Andre Miller. Before Russell Westbrook, this was the guy we were watching to average the triple double. And he nearly did. Of course, there would have been no room for him during his peak, but perhaps during his “veteran presence” days?",
            AnswerText: "Andre Miller played his last games on the stacked 2016 Spurs."
        },
        {
            Id: 42,
            Name: 'Wayne Ellington',
            ImagePath: 'https://heplayforus-spurs.s3.us-east-2.amazonaws.com/wayneellington.png',
            WasSpur: false,
            FlavorText: "With a sharpshooting touch like Ellington’s, he could’ve been the perimeter threat the Spurs always covet, further spacing the floor for their inside game.",
            AnswerText: "Ellington never played for the Spurs."
        },
        {
            Id: 44,
            Name: 'Johnathan Bender',
            ImagePath: 'https://heplayforus-spurs.s3.us-east-2.amazonaws.com/johnathanbender.png',
            WasSpur: false,
            FlavorText: "Bender’s mix of size and skill had potential Spurs experiment written all over it. While injuries deprived us of what his zenith could have been, the Spurs have conjured respectable seasons out of otherwise injury-riddled-high upside talents. Was Bender among them?",
            AnswerText: "Johnathan Bender never played for the Spurs."
        },
        {
            Id: 45,
            Name: 'Marcus Haislip',
            ImagePath: 'https://heplayforus-spurs.s3.us-east-2.amazonaws.com/marcushaislip.png',
            WasSpur: true,
            FlavorText: "Haislip is a guy that struggled early on, but went to Europe and became a star. Haislip’s athletic prowess and shot-blocking and outside touch would’ve  had him on the Spurs’ radar for sure.",
            AnswerText: "Marcus Haislip played 10 games for the Spurs in 2009."
        },
        {
            Id: 46,
            Name: 'Darius Songaila',
            ImagePath: 'https://heplayforus-spurs.s3.us-east-2.amazonaws.com/dariussongaila.png',
            WasSpur: false,
            FlavorText: "Songaila’s basketball IQ and mid-range game would’ve fit the Spurs’ systematic approach, providing a reliable frontcourt option alongside Duncan.",
            AnswerText: "Darius Songaila never played for the Spurs."
        },
        {
            Id: 47,
            Name: 'Drew Gooden',
            ImagePath: 'https://heplayforus-spurs.s3.us-east-2.amazonaws.com/drewgooden.png',
            WasSpur: true,
            FlavorText: "Gooden’s energy and versatility in the paint align with the Spurs’ search for complementary bigs for Duncan. His rebounding and scoring touch could’ve been invaluable assets.",
            AnswerText: "Drew Gooden played with 10 teams in his career, including the Spurs in 2009."
        },
        {
            Id: 48,
            Name: 'Zoran Planinic',
            ImagePath: 'https://heplayforus-spurs.s3.us-east-2.amazonaws.com/zoranplaninic.png',
            WasSpur: false,
            FlavorText: "Just look at this guy. He is a sharpshooter from Croatia during the early 2000’s. Tell me this guy wasn’t warming up in silver & black.",
            AnswerText: "Zoran Planinic never played for the Spurs."
        },
        {
            Id: 49,
            Name: 'Tomáš Satoranský',
            ImagePath: 'https://heplayforus-spurs.s3.us-east-2.amazonaws.com/tomassatoransky.png',
            WasSpur: true,
            FlavorText: "Tomáš Satoranský is everything the Spurs value in a guard. Hustles, makes few mistakes, not looking to score but can if you beg.",
            AnswerText: "Tomáš Satoranský played a single game for the Spurs in 2022."
        },
        {
            Id: 50,
            Name: 'Joel Anthony',
            ImagePath: 'https://heplayforus-spurs.s3.us-east-2.amazonaws.com/joelanthony.png',
            WasSpur: true,
            FlavorText: "Joel Anthony made a name for himself as being the Ringo on the LeBron, Wade, Bosh Heatles. Which makes him the perfect, ego-less, big to slot into the Spurs system.",
            AnswerText: "Joel Anthony finished his career with the Spurs in 2017."
        },
        {
            Id: 51,
            Name: 'Maciej Lampe',
            ImagePath: 'https://heplayforus-spurs.s3.us-east-2.amazonaws.com/maciejlampe.png',
            WasSpur: false,
            FlavorText: "Maciej Lampe was hyped as a lottery pick in the 2003 NBA Draft, but slid into the second round where he landed with the dreadful New York Knicks. Needless to say, the Knicks wouldn’t have been able to coax out the versatility he promised. But could he have been another Spurs reclamation project?",
            AnswerText: "Maciej Lampe never played for the Spurs."
        },
        {
            Id: 52,
            Name: 'Steve Novak',
            ImagePath: 'https://heplayforus-spurs.s3.us-east-2.amazonaws.com/stevenovak.png',
            WasSpur: true,
            FlavorText: "If Matt Bonner is gone, and Davis Bertans isn’t around, who you gonna call? Steve Novak?",
            AnswerText: "Steve Novak and the Spurs make too much sense. He played 23 games for the Spurs in 2011."
        },
    ];
    static getPlayers(): Player[] {
        return this.players;
    }

    static getPlayer(id: number): Player | undefined {
        return this.players.find(p => p.Id === id);
    }
    static getRandomPlayer(excludedPlayerIds?: number[]): Player | null {
        const players = excludedPlayerIds ? this.players.filter(p => !excludedPlayerIds.includes(p.Id)) : this.players;
        if (players.length === 0) {
            return null;
        }
        const randomIndex = Math.floor(Math.random() * players.length);
        return players[randomIndex];
    }
}

export type { Player };
export { PlayerRepo }
