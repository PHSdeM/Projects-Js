const form = document.querySelector('.list-form')
const message = document.querySelector('.message')
const listShopping = document.getElementById('name-list')
const submitBtn = document.querySelector('.btn-submit')
const container = document.querySelector('.list-container')
const list = document.querySelector('.shopping-list')
const clearBtn = document.querySelector('.btn-clear')

let editElement;
let editFlag = false;
let editId = '';

form.addEventListener('submit', addItem)

clearBtn.addEventListener('click', clearItems)

window.addEventListener('DOMContentLoaded', setupItems)


function addItem(e){
    e.preventDefault();
    const value = listShopping.value
    const id = new Date().getTime().toString()

    if(value !== "" && !editFlag){
        const element = document.createElement('article')
        let attribute = document.createAttribute('data-id')
        attribute.value = id

        element.setAttributeNode(attribute)
        element.classList.add('list-item')
        element.innerHTML = `<p class="title">${value}</p>
                <div class="btn-container">
                <button type="button" class="btn-edit">
                    <i class="fas fa-edit"></i>
                </button>
                <button type="button" class="btn-delete">
                    <i class="fas fa-trash"></i>
                </button>
                </div>`

        const deleteBtn = element.querySelector('.btn-delete')
        deleteBtn.addEventListener('click', deleteItem)
        const editBtn = element.querySelector('.btn-edit')
        editBtn.addEventListener('click', editItem)

        list.appendChild(element)
        displayMessage('Item added to the list', "sucess")
        container.classList.add('show-container')
        addToLocalStorage(id, value)

        setBackToDefault();
    }else if(value!=="" && editFlag){
        editElement.innerHTML = value
        displayMessage('value changed', 'sucess')

        editLocalStorage(editId, value)
        setBackToDefault()
    }else {
        displayMessage('please enter value', 'danger')
    }
}

function displayMessage(text, action){
    message.textContent = text
    message.classList.add(`message-${action}`)

    setTimeout(function(){
        message.textContent=""
        message.classList.remove(`message-${action}`)
    }, 1000)
}

function clearItems(){
    const items = document.querySelectorAll('.list-item')
    if(items.length > 0){
        items.forEach(function (item){
            list.removeChild(item)
        })
    }
    
    container.classList.remove('show-container')
    displayMessage('empty', 'danger')
    setBackToDefault()
    localStorage.removeItem('list')
}

function deleteItem(e) {
    const element = e.currentTarget.parentElement.parentElement
    const id = element.dataset.id

    list.removeChild(element)

    if(list.children.length === 0){
        container.classList.remove('show-container')
    }
    displayMessage('item removed', 'danger')

    setBackToDefault()

    removeFromLocalStorage(id)
}

function editItem(e) {
    const element = e.currentTarget.parentElement.parentElement
    editElement = e.currentTarget.parentElement.previousElementSibling
    listShopping.value = editElement.innerHTML
    editFlag = true
    editId = element.dataset.id

    submitBtn.textContent = 'edit'
}

function setBackToDefault() {
    listShopping.value = ''
    editFlag = false
    editId = ''
    submitBtn.textContent = 'submit'
}

function addToLocalStorage(id, value) {
    const listShopping = {id, value}
    let items = getLocalStorage()
    items.push(listShopping)
    localStorage.setItem('list', JSON.stringify(items))
}

function getLocalStorage() {
    return localStorage.getItem('list') 
    ? JSON.parse(localStorage.getItem('list')) 
    : []
}

function removeFromLocalStorage(id) {
    let items = getLocalStorage()

    items = items.filter(function(item){
        if(item.id !== id) {
            return item
        }
    })

    localStorage.setItem('list', JSON.stringify(items))
}

function editLocalStorage(id,value){
    let items = getLocalStorage()

    items.items.map(function(item){
        if(item.id === id) {
            item.value = value
        } 
      return item 
    })
    
    localStorage.setItem('list', JSON.stringify(items))
}


function setupItems() {
    let items = getLocalStorage()

    if(items.length > 0) {
        items.forEach(function(item){
            createListItem(item.id, item.value)
        })
        container.classList.add('show-container')
    }
}

function createListItem(id, value) {
    const element = document.createElement('article')
    let attribute = document.createAttribute('data-id')
    attribute.value = id
    element.setAttributeNode(attribute)
    element.classList.add('list-item')
    element.innerHTML = `<p class="title"> ${value}</p>
                <div class="btn-container">
                    <button type="button" class="btn-edit">
                        <i class="fas fa-edit"></i>
                    </button>
                    
                    <button type="button" class="btn-delete">
                        <i class="fas fa-delete></i>
                    </button>
                </div>`

    const deleteBtn = element.querySelector('.btn-delete')
    deleteBtn.addEventListener('click', deleteItem)
    const editBtn = element.querySelector('.btn-edit')
    editBtn.addEventListener('click', editItem)

    list.appendChild(element)
}