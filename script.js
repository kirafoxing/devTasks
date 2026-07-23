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
        tarefa.textContent = input_tarefas.value
        input_tarefas.value = ''
        area_tarefas.appendChild(tarefa)
        input_tarefas.focus()

        tarefa.addEventListener('click', function() {
            this.classList.toggle('concluida')
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