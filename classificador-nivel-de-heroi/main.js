const nivelDoHeroi = require('./nivel-heroi.js')
const scanner = require('readline');
const input = scanner.createInterface(process.stdin, process.stdout);

const heroi = {
    nomeDoHeroi: '',
    xpDoHeroi: 0,
    nivel: ''
}

input.question('Digite o nome do seu Herói: ', (nome) => {
    heroi.nomeDoHeroi = nome;
    input.question('Digite o XP do seu Herói: ', (xp) => {
        heroi.xpDoHeroi = parseInt(xp);
        input.close();
        console.log(`O herói ${heroi.nomeDoHeroi} está no nível de ${calcularNivelDoHeroi()}.`);
    });
});

function calcularNivelDoHeroi() {
    if (heroi.xpDoHeroi < nivelDoHeroi.FERRO) {
        heroi.nivel = 'Ferro';
    } else if (heroi.xpDoHeroi <= nivelDoHeroi.BRONZE) {
        heroi.nivel = 'Bronze';
    } else if (heroi.xpDoHeroi <= nivelDoHeroi.PRATA) {
        heroi.nivel = 'Prata';
    } else if (heroi.xpDoHeroi <= nivelDoHeroi.OURO) {
        heroi.nivel = 'Ouro';
    } else if (heroi.xpDoHeroi <= nivelDoHeroi.PLATINA) {
        heroi.nivel = 'Platina';
    } else if (heroi.xpDoHeroi <= nivelDoHeroi.ASCENDENTE) {
        heroi.nivel = 'Ascendente';
    } else if (heroi.xpDoHeroi <= nivelDoHeroi.IMORTAL) {
        heroi.nivel = 'Imortal';
    } else {
        heroi.nivel = 'Radiante';
    }
    return heroi.nivel;    
}

