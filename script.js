'use strict'

const input_tarefas = document.querySelector("#input_tarefas")
const btn_addTarefa = document.querySelector("#btn_addTarefa")
const area_tarefas = document.querySelector("#area_tarefas")

btn_addTarefa.addEventListener('click', () => {
    const tarefa = document.createElement('li')
    const checkVazio = input_tarefas.value.trim()

    if (checkVazio == ''){
        alert('Digite uma tarefa')
    } else {
        tarefa.textContent = input_tarefas.value
        input_tarefas.value = ''
        area_tarefas.appendChild(tarefa)
    }
    
})