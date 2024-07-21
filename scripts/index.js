const movimentoPendulo = new MovimentoPendulo(GRAVIDADE_PADRAO, COMPRIMENTO_PADRAO, STEP_TEMPO_PADRAO, ANGULO_INICIAL_PADRAO, VELOCIDADE_ANGULAR_INICIAL_PADRAO);

const pendulo = document.querySelector("#pendulo");
const haste = document.querySelector("#haste");
const bolinha = document.querySelector("#bolinha");

function animarPendulo() {
    movimentoPendulo.atualizarPosicaoPendulo();

    const posicaoX = movimentoPendulo.getComprimento() * Math.sin(movimentoPendulo.getAngulo());
    const posicaoY = movimentoPendulo.getComprimento() * Math.cos(movimentoPendulo.getAngulo());
    const offsetY = screen.height / 4;

    bolinha.style.top = posicaoY + offsetY + "px";
    bolinha.style.left = ((pendulo.clientWidth / 2) + posicaoX) + "px";
}

function configurarComportamentoBotoes() {
    const botaoPlay = document.querySelector("#botao-play");
    const botaoParar = document.querySelector("#botao-pause");
    const botaoReset = document.querySelector("#botao-reset");
    
    const inputGravidade = document.querySelector("#input-gravidade");
    const inputComprimento = document.querySelector("#input-comprimento");
    const inputAnguloInicial = document.querySelector("#input-angulo-inicial");

    var corrotinaIntervalo = null;

    function configurarBotaoPlay() {    
        botaoPlay.addEventListener("click", function() {
            if(corrotinaIntervalo !== null) {
                return;
            }

            const gravidade = parseFloat(inputGravidade.value);
            const comprimento = parseFloat(inputComprimento.value);
            const angulo = parseFloat(inputAnguloInicial.value);

            movimentoPendulo.setGravidade(gravidade);
            movimentoPendulo.setComprimento(comprimento);
            movimentoPendulo.setAngulo(angulo);

            console.log("Gravidade: " + movimentoPendulo.getGravidade());
            console.log("Comprimento: " + movimentoPendulo.getComprimento());
            console.log("Angulo: " + movimentoPendulo.getAngulo());
            corrotinaIntervalo = setInterval(animarPendulo, 20); // TODO: 20 é um valor mágico

            botaoPlay.disabled = true;
            botaoParar.disabled = false;
        });
    }

    function configurarBotaoPause() {
        botaoParar.addEventListener("click", function() {
            if(corrotinaIntervalo === null) {
                return;
            }

            movimentoPendulo.reset();
            clearInterval(corrotinaIntervalo);
            corrotinaIntervalo = null;

            botaoPlay.disabled = false;
            botaoParar.disabled = true;
        });
    }

    function configurarBotaoReset() {
        botaoReset.addEventListener("click", function() {
            if(corrotinaIntervalo !== null) {
                movimentoPendulo.reset();
                clearInterval(corrotinaIntervalo);
                corrotinaIntervalo = null;
            }

            inputGravidade.value = GRAVIDADE_PADRAO;
            inputComprimento.value = COMPRIMENTO_PADRAO;
            inputAnguloInicial.value = ANGULO_INICIAL_PADRAO;

            botaoPlay.disabled = false;
            botaoParar.disabled = true;
        });
    }

    configurarBotaoPlay();
    configurarBotaoPause();
    configurarBotaoReset();
}

configurarComportamentoBotoes();
