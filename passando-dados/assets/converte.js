const MEDICAMENTOS = require('./dados.json');

function converteIdParaString(item) {
    item.id = item.id.toString();
}

MEDICAMENTOS.forEach(converteIdParaString);

console.log(JSON.stringify(MEDICAMENTOS));