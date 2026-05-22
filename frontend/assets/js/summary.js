async function carregarResumo() {

    const trilhasSelecionadas =
        JSON.parse(
            localStorage.getItem(
                'trilhasSelecionadas'
            )
        ) || []

    try {

        const query =
            encodeURIComponent(
                trilhasSelecionadas.join(',')
            )

        const response =
            await fetch(
                `${API_BASE_URL}/objetivos?trilhas=${query}`
            )

        const objetivos =
            await response.json()

        renderizarResumo(
            objetivos
        )

    } catch (error) {

        console.error(
            'Erro ao carregar resumo:',
            error
        )
    }
}

function renderizarResumo(objetivos) {

    const container =
        document.getElementById(
            'summary-container'
        )

    const trilhas =
        objetivos.map(
            (item) => item.trilha
        )

    const objetivosTexto =
        objetivos.map(
            (item) => item.objetivo
        )

    container.innerHTML = `

        <div class="summary__item">

            <dt>OBJETIVOS</dt>

            <dd>
                ${objetivosTexto.join(', ')}
            </dd>

        </div>

        <div class="summary__item">

            <dt>TRILHAS</dt>

            <dd>
                ${trilhas.join(', ')}
            </dd>

        </div>

        <div class="summary__item">

            <dt>STATUS</dt>

            <dd class="summary__connected">

                <i
                    class="lni lni-checkmark-circle"
                    aria-hidden="true"
                ></i>

                Saúde conectada

            </dd>

        </div>
    `
}

carregarResumo()