class Enemigo {
    constructor(props){
        const { nombre, vida, poder } = props; // destructuring
        this.vida = vida;
        this.poder = poder;
        this.nombre = nombre;
        // console.log(this.nombre)
    }
    atacar(jugador){
        // console.log('dañar al jugador')
        // jugador.recibirDano(this.poder);
        jugador.recibirDano(this.poder);
    }
    recibirDano(dano, jugador){
        this.vida -= dano;
        if(this.vida <= 0){
            // TODO: destruir enemigo
            this.vida = 0;
             jugador.cambiarArma()
            console.warn(`%c Enemigo muerto: ${this.nombre}`)
        }
    }
}
export default Enemigo;
