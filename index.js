import Arma from './Arma.js';
import Enemigo from './Enemigo.js';
import Jugador from './Jugador.js';



const jugador = new Jugador(400, 50, []) 

const cuchillo = new Arma('cuchillo', 10, true);
const pistola = new Arma('pistola', 20, false, 7);
const escopeta = new Arma('escopeta', 40, false, 8);
const espada = new Arma('espada', 40, true, 8);
jugador.recolectarArma(pistola);
jugador.recolectarArma(cuchillo);
jugador.recolectarArma(espada);
jugador.recolectarArma(escopeta)

let contador = 0;
let enemigos = [];
while(contador < 10){
    let objetoInicial = {
        nombre: `Enemigo - ${contador}`,
        vida: Math.floor(Math.random() * 100),
        poder: Math.floor(Math.random() * 60)
    }
    enemigos.push(new Enemigo(objetoInicial))
    contador++;
}


while(enemigos.length > 0 && jugador.estaVivo){
    const enemigo = enemigos.shift();
    while(enemigo.vida > 0 && jugador.estaVivo){
        if(enemigos.length <= 0){
            console.log("%cEnemigos eliminados con exito", "color: green; background: yellow; font-size: 30px"
            );
            break;
        }
        if(jugador.armaEquipada === undefined) jugador.cambiarArma();
        jugador.atacar(enemigo, jugador.armaEquipada)
        
        if (enemigo.vida > 0) {
            enemigo.atacar(jugador);
        }
    }
}
