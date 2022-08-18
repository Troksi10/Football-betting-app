

/* 
We're building a football betting app 

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Juventus (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Cuadrado', 'Chiesa', 'Zakaria'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Alex Sandro', 'Kostic', 'Vlahovic' and 'Pogba'. Then, call the function again with players from game.scored

*/

const game = {
    team1: 'Juventus',
    team2: 'Inter',
    players: [
      [
        'Szczęsny',
        'Danilo',
        'Bonucci',
        'Bremer',
        'Alex Sandro',
        'Locateli',
        'Rabiot',
        'Pogba',
        'Kostic',
        'Di Maria',
        'Vlahovic',
      ],
      [
        'Handanovic',
        'Skriniar',
        'De Vrij',
        'Bastoni',
        'Dumfries',
        'Brozovic',
        'Barella',
        'Gosens',
        'Calhanoglu',
        'Martinez',
        'Lukaku',
      ],
    ],
    score: '4:0',
    scored: ['Vlahovic', 'Di Maria', 'Vlahovic', 'Bonucci'],
    date: 'Aug 18th, 2022',
    odds: {
      team1: 2.15,
      x: 3.15,
      team2: 3.50,
    },
  };

  
  // 1.
  const [players1, players2] = game.players;
  console.log(players1, players2);
  
  // 2.
  const [gk, ...fieldPlayers] = players1;
  console.log(gk, fieldPlayers);
  
  // 3.
  const allPlayers = [...players1, ...players2];
  console.log(allPlayers);
  
  // 4.
  const players1Final = [...players1, 'Cuadrado', 'Chiesa', 'Zakaria'];
  
  // 5.
  const {
    odds: { team1, x: draw, team2 },
  } = game;
  console.log(team1, draw, team2);
  
  // 6.
  const printGoals = function (...players) {
    console.log(players);
    console.log(`${players.length} goals were scored`);
  };
  
  printGoals('Alex Sandro', 'Kostic', 'Vlahovic','Pogba');
  printGoals('Alex Sandro', 'Vlahovic');
  printGoals(...game.scored);
  
  // 7.
  team1 < team2 && console.log('Team 1 is more likely to win');
  team1 > team2 && console.log('Team 2 is more likely to win');

  /*
  1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Vlahovic")
  2. Use a loop to calculate the average odd and log it to the console 
  3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
        Odd of victory Juventus: 2.15
        Odd of draw: 3.15
        Odd of victory Borrussia Dortmund: 3.5
  Get the team names directly from the game object, don't hardcode them (except for "draw"). 
  
  4.Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
        {
          Di Maria: 1,
          Bonucci: 1,
          Vlahovic: 2
        }
*/
  
  //1.
  
  for(const [i,player] of game.scored.entries())
       console.log(`Goal ${i + 1} : ${player}`);
  
   //2.
  
  let average  = 0;
  const odds = Object.values(game.odds);
  for(const odd of odds) average += odd;
  average /= odds.length;
  console.log(average);
  
  //3.
  
  console.log(`Odd of victory for ${game.team1} : ${game.odds.team1}`);
  console.log(`Odd of draw : ${game.odds.x}`);
  console.log(`Odd of victory for ${game.team2} : ${game.odds.team2}`);
  
  for(const [team,odd] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(`Odd of ${teamStr} of ${odd}`);
  }
  
//4.
  const scorers = {};
  for (const player of game.scored) {
    scorers[player] ? scorers[player]++ : (scorers[player] = 1);
  };

/* 
1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
  ]);
  
  //1.
  const events = [...new Set(gameEvents.values())];
  console.log(events);
  
  //2.
  
  gameEvents.delete(64);
  
  //3.
  
  const time = [...gameEvents.keys()].pop();
  console.log(time);
  console.log(`An event happened, on average, every ${ time / gameEvents.size} minutes`);
  
  //4.
  
  for(const [min,event] of gameEvents){
    const half = min <= 45 ? 'First' : 'Second';
    console.log(`[${half} HALF] ${min} : ${event}`);
  }

  
