'use strict'

const input_tarefas = document.querySelector("#input_tarefas")
const btn_addTarefa = document.querySelector("#btn_addTarefa")
const area_tarefas = document.querySelector("#area_tarefas")



const criarTarefa = function() {
    
    const checkVazio = input_tarefas.value.trim()
    
    if (checkVazio === ''){
        alert('Digite uma tarefa')
        input_tarefas.focus()
    } else {
        const tarefa = document.createElement('li')
        const deletarTarefa = document.createElement('button')

        tarefa.textContent = input_tarefas.value
        deletarTarefa.textContent = '🗑️'
        deletarTarefa.classList.add('btn_remover')

        input_tarefas.value = ''

        tarefa.appendChild(deletarTarefa)
        area_tarefas.appendChild(tarefa)
        input_tarefas.focus()

        tarefa.addEventListener('click', function() {
            this.classList.toggle('concluida')
        })

        deletarTarefa.addEventListener('click', () => {
            tarefa.remove()
        })
        
    }
}


btn_addTarefa.addEventListener('click', () => {
    criarTarefa()
})

input_tarefas.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        criarTarefa()
        event.preventDefault()
    }
})