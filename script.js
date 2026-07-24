'use strict'

const input_tarefas = document.querySelector("#input_tarefas")
const btn_addTarefa = document.querySelector("#btn_addTarefa")
const area_tarefas = document.querySelector("#area_tarefas")
const totalTarefas = document.querySelector("#totalTarefas")
const tarefasProntas = document.querySelector("#tarefasProntas")
const tarefasPendentes = document.querySelector("#tarefasPendentes")



const criarTarefa = function() {
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
    tarefaHolder.appendChild(acoes);  
    area_tarefas.appendChild(tarefaHolder)

    input_tarefas.value = ''
    input_tarefas.focus()

   
    tarefaHolder.addEventListener('click', function(e) {
        if (e.target.closest('button')) return
        this.classList.toggle('concluida')
        atualizarStats();
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
}

const atualizarStats = function () {

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


btn_addTarefa.addEventListener('click', () => {
    criarTarefa()
    atualizarStats()
})

input_tarefas.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        criarTarefa()
        event.preventDefault()
    }
})