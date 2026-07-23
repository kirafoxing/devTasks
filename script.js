'use strict'

const input_tarefas = document.querySelector("#input_tarefas")
const btn_addTarefa = document.querySelector("#btn_addTarefa")
const area_tarefas = document.querySelector("#area_tarefas")


const criacaoTarefa = function() {
    
    const tarefa = document.createElement('li')
    const checkVazio = input_tarefas.value.trim()
    
    if (checkVazio == ''){
        alert('Digite uma tarefa')
        input_tarefas.focus()
    } else {
        tarefa.textContent = input_tarefas.value
        input_tarefas.value = ''
        area_tarefas.appendChild(tarefa)
        input_tarefas.focus()
    }
    
}

btn_addTarefa.addEventListener('click', () => {
    criacaoTarefa()
})

input_tarefas.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        criacaoTarefa()
        event.preventDefault()
    }
})