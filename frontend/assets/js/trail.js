async function carregarTrilhas() {
    const loading = document.getElementById('loading-trilhas');
    try {
        const response = await fetch(`${API_BASE_URL}/trilhas`);
        const trilhas = await response.json();
        loading.style.display = 'none'
        const container = document.getElementById('trail-list');

        container.innerHTML = '';
        trilhas.forEach((trilha) => {
            container.innerHTML += `
            <label class="trail__option">

                    <span class="trail__option-content">

                        <span class="trail__icon trail__icon--${trilha.classe}">

                            <i class="fa-solid ${trilha.icone}"></i>

                        </span>

                        <span>

                            <h2>${trilha.nome}</h2>

                            <p>${trilha.descricao}</p>

                        </span>

                    </span>

                    <input
                        type="checkbox"
                        name="trilhas"
                        value="${trilha.nome}"
                    >

                </label>
            `
        });

        controlarSelecao();
        salvarSelecao();

    } catch (error) {
        console.error('Erro ao carregar trilhas:', error);
        loading.innerHTML = `

            <div class="
                text-center
            ">

                <h2 class="
                    text-red-500
                    text-2xl
                    font-bold
                    mb-3
                ">
                    Erro ao carregar
                </h2>

                <p class="
                    text-slate-500
                ">
                    O servidor pode estar indisponível.
                </p>

            </div>
        `
    }
    
}

function controlarSelecao() {
    const checkboxes = document.querySelectorAll('input[name="trilhas"]');
    const contador = 
        document.querySelector('.trail__counter');
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', () => {
            const selecionadas = document.querySelectorAll('input[name="trilhas"]:checked');
            contador.textContent = `${selecionadas.length} de 2 trilhas selecionadas`;
            if (selecionadas.length > 2) {
                checkbox.checked = false
                alert(
                    "Você pode selecionar no máximo 2 trilhas."
                )
                return
            } else {
                checkboxes.forEach((item) => {
                    item.disabled = false;
                })
            }
        })
    })

}

function salvarSelecao() {

    const botao = document.getElementById('btn-criar-jornada')

    botao.addEventListener('click', () => {

        const selecionadas = document.querySelectorAll('input[name="trilhas"]:checked')

        const trilhas = Array.from(selecionadas).map(
                (item) => item.value
            )

        if (trilhas.length === 0) {

            alert('Selecione pelo menos uma trilha.')
            return

        }

        localStorage.setItem('trilhasSelecionadas', JSON.stringify(trilhas)
        )

        window.location.href =
            './summary.html'
    })
}

carregarTrilhas();
