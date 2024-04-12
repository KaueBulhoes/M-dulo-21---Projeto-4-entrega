document.addEventListener('DOMContentLoaded', function () {
    // Seleciona todos os elementos com o atributo '[data-tab-button]'.
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function () {
        const posicaoAtual = window.scrollY;

        if (posicaoAtual < alturaHero) {
            ocultaElementosDoHeader();
        } else{
            exibeElementosDoHeader();
        }
    })

    // Itera sobre todos os botões selecionados.
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (botao) {
            // Obtém o valor do atributo 'data-tab-button' do botão clicado.
            const abaAlvo = botao.target.dataset.tabButton;
            // Seleciona a aba correspondente com o atributo 'data-tab-id' igual ao valor obtido.
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            // Executa a função removendo todas as classes shows__list--is--active' para só depois adiciona-la
            escondeTodasAbas();
            // Adiciona a classe 'shows__list--is--active' à aba selecionada para exibi-la.
            aba.classList.add('shows__list--is--active');
            removeBotaoAtivo()
            botao.target.classList.add('shows__tabs__button--is--active')
        })
    }

    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreOuFechaResposta);
    }
})

function exibeElementosDoHeader(){
    const header = document.querySelector('header');
    header.classList.remove('header--is--hidden');
}

function ocultaElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is--hidden');
}

function abreOuFechaResposta(elemento) {
    const classe = 'faq__questions__item--is--open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is--active')
    }
}

// Função para esconder todas as abas visíveis.
function escondeTodasAbas() {
    // Seleciona todos os elementos com o atributo '[data-tab-id]'.
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    // Itera sobre todos os elementos selecionados.
    for (let i = 0; i < tabsContainer.length; i++) {
        // Remove a classe 'shows__list--is--active' de cada elemento,
        tabsContainer[i].classList.remove('shows__list--is--active');
    }
}
