const readline = require("readline");
const { players } = require("./players.js");

function createInterface() {
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
}

function askQuestion(rl, question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => resolve(answer));
  });
}

function listPlayers() {
  console.log("\n=== Personagens disponíveis ===");
  players.forEach((player, index) => {
    console.log(
      `${index}: ${player.NOME} (VEL ${player.VELOCIDADE}, MAN ${player.MANOBRABILIDADE}, POD ${player.PODER})`
    );
  });
}

function clonePlayer(player) {
  return {
    ...player,
    PONTOS: 0,
  };
}

async function choosePlayer(slotName, forbiddenIndex = null) {
  const rl = createInterface();
  let index;

  do {
    listPlayers();
    const answer = await askQuestion(
      rl,
      `Escolha o personagem ${slotName} (digite o número): `
    );

    index = Number(answer);

    if (
      Number.isNaN(index) ||
      index < 0 ||
      index >= players.length ||
      (forbiddenIndex !== null && index === forbiddenIndex)
    ) {
      const reason =
        Number.isNaN(index) || index < 0 || index >= players.length
          ? "Índice inválido"
          : `O personagens ${players[index]?.NOME} já está em uso.`;
      console.log(`${reason} -- tente novamente.`);
      index = null;
    }
  } while (index === null);

  rl.close();
  return {
    player: clonePlayer(players[index]),
    index,
  };
}

async function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
  let random = Math.random();
  let result;

  switch (true) {
    case random < 0.33:
      result = "RETA";
      break;
    case random < 0.66:
      result = "CURVA";
      break;
    default:
      result = "CONFRONTO";
  }

  return result;
}

async function logRollResult(characterName, block, diceResult, attribute) {
  console.log(
    `${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${
      diceResult + attribute
    }`
  );
}

async function playRaceEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`🏁 Rodada ${round}`);

    // sortear bloco
    let block = await getRandomBlock();
    console.log(`Bloco: ${block}`);

    // rolar os dados
    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    //teste de habilidade
    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;

    if (block === "RETA") {
      totalTestSkill1 = diceResult1 + character1.VELOCIDADE;
      totalTestSkill2 = diceResult2 + character2.VELOCIDADE;

      await logRollResult(
        character1.NOME,
        "velocidade",
        diceResult1,
        character1.VELOCIDADE
      );

      await logRollResult(
        character2.NOME,
        "velocidade",
        diceResult2,
        character2.VELOCIDADE
      );
    }

    if (block === "CURVA") {
      totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE;
      totalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE;

      await logRollResult(
        character1.NOME,
        "manobrabilidade",
        diceResult1,
        character1.MANOBRABILIDADE
      );

      await logRollResult(
        character2.NOME,
        "manobrabilidade",
        diceResult2,
        character2.MANOBRABILIDADE
      );
    }

    if (block === "CONFRONTO") {
      let powerResult1 = diceResult1 + character1.PODER;
      let powerResult2 = diceResult2 + character2.PODER;

      console.log(`${character1.NOME} confrontou com ${character2.NOME}! 🥊`);

      await logRollResult(
        character1.NOME,
        "poder",
        diceResult1,
        character1.PODER
      );

      await logRollResult(
        character2.NOME,
        "poder",
        diceResult2,
        character2.PODER
      );

      if (powerResult1 > powerResult2 && character2.PONTOS > 0) {
        console.log(
          `${character1.NOME} venceu o confronto! ${character2.NOME} perdeu 1 ponto 🐢`
        );
        character2.PONTOS--;
      }

      if (powerResult2 > powerResult1 && character1.PONTOS > 0) {
        console.log(
          `${character2.NOME} venceu o confronto! ${character1.NOME} perdeu 1 ponto 🐢`
        );
        character1.PONTOS--;
      }

      console.log(
        powerResult2 === powerResult1
          ? "Confronto empatado! Nenhum ponto foi perdido"
          : ""
      );
    }

    // verificando o vencedor
    if (totalTestSkill1 > totalTestSkill2) {
      console.log(`${character1.NOME} marcou um ponto!`);
      character1.PONTOS++;
    } else if (totalTestSkill2 > totalTestSkill1) {
      console.log(`${character2.NOME} marcou um ponto!`);
      character2.PONTOS++;
    }

    console.log("-----------------------------");
  }
}

async function declareWinner(character1, character2) {
  console.log("Resultado final:");
  console.log(`${character1.NOME}: ${character1.PONTOS} ponto(s)`);
  console.log(`${character2.NOME}: ${character2.PONTOS} ponto(s)`);

  if (character1.PONTOS > character2.PONTOS)
    console.log(`\n${character1.NOME} venceu a corrida! Parabéns! 🏆`);
  else if (character2.PONTOS > character1.PONTOS)
    console.log(`\n${character2.NOME} venceu a corrida! Parabéns! 🏆`);
  else console.log("A corrida terminou em empate");
}

(async function main() {
  const args = process.argv.slice(2);
  let character1;
  let character2;

  if (args.length >= 2) {
    const i1 = Number(args[0]);
    const i2 = Number(args[1]);

    if (
      Number.isNaN(i1) ||
      Number.isNaN(i2) ||
      i1 < 0 ||
      i1 >= players.length ||
      i2 < 0 ||
      i2 >= players.length ||
      i1 === i2
    ) {
      console.log(
        "Argumentos inválidos. Usando modo interativo de escolha de personagem."
      );
      const p1 = await choosePlayer("1");
      const p2 = await choosePlayer("2", p1.index);
      character1 = p1.player;
      character2 = p2.player;
    } else {
      character1 = clonePlayer(players[i1]);
      character2 = clonePlayer(players[i2]);
    }
  } else {
    const p1 = await choosePlayer("1");
    const p2 = await choosePlayer("2", p1.index);
    character1 = p1.player;
    character2 = p2.player;
  }

  console.log(`\n🏁🚨 Corrida entre ${character1.NOME} e ${character2.NOME} começando...\n`);

  await playRaceEngine(character1, character2);
  await declareWinner(character1, character2);
})();