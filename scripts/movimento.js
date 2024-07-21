class MovimentoPendulo {
    constructor(gravidade, comprimento, stepTempo, anguloInicial, velocidadeAngularInicial) {
        this.gravidade = gravidade;
        this.comprimento = comprimento;
        this.stepTempo = stepTempo;
        this.angulo = anguloInicial;
        this.velocidadeAngular = velocidadeAngularInicial;
    }

    calcularAceleracaoAngular() {
        return - (this.gravidade / this.comprimento) * Math.sin(this.angulo);
    }

    atualizarPosicaoPendulo() {
        const aceleracao = this.calcularAceleracaoAngular();
        this.velocidadeAngular += aceleracao * this.stepTempo;
        this.angulo += this.velocidadeAngular * this.stepTempo;
    }

    reset() {
        this.angulo = 0;
        this.velocidadeAngular = 0;
    }

    setGravidade(gravidade) {
        this.gravidade = gravidade;
    }

    setComprimento(comprimento) {
        this.comprimento = comprimento;
    }

    setStepTempo(stepTempo) {
        this.stepTempo = stepTempo;
    }

    setAngulo(angulo) {
        this.angulo = angulo;
    }

    setVelocidadeAngular(velocidadeAngular) {
        this.velocidadeAngular = velocidadeAngular;
    }

    getGravidade() {
        return this.gravidade;
    }

    getComprimento() {
        return this.comprimento;
    }

    getStepTempo() {
        return this.stepTempo;
    }

    getAngulo() {
        return this.angulo;
    }

    getVelocidadeAngular() {
        return this.velocidadeAngular;
    }
}
