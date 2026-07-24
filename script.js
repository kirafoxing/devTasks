'use strict'

const input_tarefas = document.querySelector("#input_tarefas")
const btn_addTarefa = document.querySelector("#btn_addTarefa")
const area_tarefas = document.querySelector("#area_tarefas")
const totalTarefas = document.querySelector("#totalTarefas")
const tarefasProntas = document.querySelector("#tarefasProntas")
const tarefasPendentes = document.querySelector("#tarefasPendentes")



const criarTarefa = function() {
    
    const checkVazio = input_tarefas.value.trim()
    
    if (!checkVazio){
        alert('Digite uma tarefa')
        input_tarefas.focus()

    } else {
        const tarefaHolder = document.createElement('li')
        const tarefaTexto = document.createElement('span')
        const deletarTarefa = document.createElement('button')
        const editarTarefa = document.createElement('button')

        tarefaTexto.textContent = input_tarefas.value
        
        editarTarefa.textContent = '✏️'
        deletarTarefa.textContent = '🗑️'
        
        deletarTarefa.classList.add('btn_remover')

        input_tarefas.value = ''
        
        tarefaHolder.appendChild(tarefaTexto)
        tarefaHolder.appendChild(deletarTarefa)
        tarefaHolder.appendChild(editarTarefa)
        area_tarefas.appendChild(tarefaHolder)
        input_tarefas.focus()

        tarefaHolder.addEventListener('click', function() {
            this.classList.toggle('concluida')
            atualizarStats()
            
        })

        deletarTarefa.addEventListener('click', (event) => {
            event.stopPropagation()
            tarefaHolder.remove()
            atualizarStats()
        })

        editarTarefa.addEventListener('click', function(event) {
           event.stopPropagation()
           tarefaTexto.textContent = prompt()
        
        })
        
    }
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