'use strict'

const input_tarefas = document.querySelector("#input_tarefas")
const btn_addTarefa = document.querySelector("#btn_addTarefa")
const area_tarefas = document.querySelector("#area_tarefas")

btn_addTarefa.addEventListener('click', () => {
    let tarefa = document.createElement('li')
    tarefa.textContent = input_tarefas.value
    input_tarefas.value = ''
    area_tarefas.appendChild(tarefa)
})