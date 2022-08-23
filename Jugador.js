class Jugador {
    constructor(vida, tiempo, armas = [], nombre, estaVivo = true){
        this.nombre = nombre
        this.estaVivo = estaVivo;
        this.vida = vida;
        this.tiempoDeVida = tiempo;
        this.armas = armas;
        this.armaEquipada;
        // arma seleccionada
        this.descontarTiempoDeVida();
    }
    
    // seleccionar arma

    recolectarArma(nuevaArma){
        this.armas.push(nuevaArma);
    }
    equiparArma(index){
        return this.armaEquipada = this.armas[index];
    }
    cambiarArma(){
        const numRandom = Math.floor(Math.random() * this.armas.length);
        this.equiparArma(numRandom)
        // this.equiparArma(equiparArma)
    }
    atacar(enemigo, arma){
        console.log('Ataco con: ', arma.nombre)
        enemigo.recibirDano(arma.poder, this)
    }
    recibirDano(dano) {
        // animacion de daño
        // sonido
        // etc
        this.vida -= dano;
        if (this.vida <= 0) {
            // animacion muerte
            this.estaVivo = false;
            this.vida = 0;
            console.error("Estas muerto, suerte la proxima")
        }
    }
    // evento recursivo que descuente tiempo
    descontarTiempoDeVida(){
        // console.info('descontar tiempo de vida', this.tiempoDeVida);
        if(this.tiempoDeVida <= 0 || !this.estaVivo) {
            // console.error('Sin tiempo')
            return;
        };

        this.tiempoDeVida--;
        setTimeout(() => {
            this.descontarTiempoDeVida();
        }, 1000);
    }
}

export default Jugador;