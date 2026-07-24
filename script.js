'use strict'

const input_tarefas = document.querySelector("#input_tarefas")
const btn_addTarefa = document.querySelector("#btn_addTarefa")
const area_tarefas = document.querySelector("#area_tarefas")
const totalTarefas = document.querySelector("#totalTarefas")
const tarefasProntas = document.querySelector("#tarefasProntas")
const tarefasPendentes = document.querySelector("#tarefasPendentes")
const buscaTarefas = document.querySelector('#buscaTarefas')

let filtroAtual = 'filtro_total'

function criarTarefa() {
    const checkVazio = input_tarefas.value.trim()
    
    if (!checkVazio) {
        alert('Digite uma tarefa')
        input_tarefas.focus()
        return
    }

    
    const tarefaHolder = document.createElement('li')
    const tarefaTexto = document.createElement('span')
    tarefaTexto.textContent = input_tarefas.value

    
    const acoes = document.createElement('div')
    acoes.classList.add('acoes_tarefa')

    const editarTarefa = document.createElement('button')
    editarTarefa.textContent = '✏️'
    editarTarefa.classList.add('btn_editar')

    const deletarTarefa = document.createElement('button')
    deletarTarefa.textContent = '🗑️'
    deletarTarefa.classList.add('btn_remover')

    
    acoes.appendChild(editarTarefa)
    acoes.appendChild(deletarTarefa)

    tarefaHolder.appendChild(tarefaTexto)
    tarefaHolder.appendChild(acoes)
    area_tarefas.appendChild(tarefaHolder)

    input_tarefas.value = ''
    input_tarefas.focus()

   
    tarefaHolder.addEventListener('click', function(e) {
        if (e.target.closest('button')) return
        this.classList.toggle('concluida')
        atualizarStats()
    })

    
    deletarTarefa.addEventListener('click', (event) => {
        event.stopPropagation()
        tarefaHolder.remove()
        atualizarStats()
    });

    
    editarTarefa.addEventListener('click', function(event) {
        event.stopPropagation()
        const novoTexto = prompt('Editar tarefa:', tarefaTexto.textContent)
        if (novoTexto !== null) { 
            const textoEditado = novoTexto.trim()
            if (textoEditado === '') {
                alert('A tarefa não pode ficar vazia!')
            } else {
                tarefaTexto.textContent = textoEditado
            }
        }
    })

    atualizarStats()
    filtrarTarefas(filtroAtual)
}

function atualizarStats() {
    let prontas = 0
    let pendentes = 0

    totalTarefas.textContent = area_tarefas.children.length
    
    for (let checkConcluida of area_tarefas.children) {
        if (checkConcluida.classList.contains('concluida')) {
            prontas++
        } else {
            pendentes++
        }
    }

    tarefasPendentes.textContent = pendentes
    tarefasProntas.textContent = prontas

}

function filtrarTarefas(filtro) {
    area_tarefas.classList.remove('filtro_total', 'filtro_concluidas', 'filtro_pendentes')

    if (filtro === 'filtro_total') {
        area_tarefas.classList.add('filtro_total')
    } else if (filtro === 'filtro_concluidas') {
        area_tarefas.classList.add('filtro_concluidas')
    } else if (filtro === 'filtro_pendentes') {
        area_tarefas.classList.add('filtro_pendentes')
    }

    filtroAtual = filtro

    document.querySelectorAll('.estatistica button').forEach(btn => btn.classList.remove('ativo'))

    if (filtro === 'filtro_total') {
        totalTarefas.classList.add('ativo')
    } else if (filtro === 'filtro_concluidas') {
        tarefasProntas.classList.add('ativo')
    } else if (filtro === 'filtro_pendentes') {
        tarefasPendentes.classList.add('ativo');
    }
    
}

function procurarTarefas() {
    const termo = buscaTarefas.value.trim().toLowerCase()
    
    for (let li of area_tarefas.children) {
        const texto = li.querySelector('span').textContent.toLowerCase()

        if (texto.includes(termo)){
            li.classList.remove('oculta')
        } else {
            li.classList.add('oculta')
        }
    }

}

totalTarefas.addEventListener('click', () => filtrarTarefas('filtro_total'))
tarefasProntas.addEventListener('click', () => filtrarTarefas('filtro_concluidas'))
tarefasPendentes.addEventListener('click', () => filtrarTarefas('filtro_pendentes'))

btn_addTarefa.addEventListener('click', () => {
    criarTarefa()
    atualizarStats()
})

buscaTarefas.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        procurarTarefas()
        event.preventDefault()
    }
})

input_tarefas.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        criarTarefa()
        event.preventDefault()
    }
})