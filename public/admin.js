
// Your Code Here
async function main() {

    let response = await fetch('http://localhost:3001/listBooks')
    let books = await response.json()

    books.forEach(addBook)
}

function addBook(book){
    let bookContainer = document.querySelector('#root')

    let list = document.createElement('li')
    list.textContent = book.title

    let bookQty = document.createElement('input')
    bookQty.value=book.quantity

    let saveButton = document.createElement('button')
    saveButton.textContent = 'Save'

    saveButton.addEventListener('click', ()=>{
        fetch('http://localhost:3001/updateBook', {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: book.id,
                quantity: bookQty.value
            })
        })
    })

    let deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete'

    deleteButton.addEventListener('click', ()=>{
        fetch('http://localhost:3001/removeBook/{bookId}', {
            method: 'DELETE',

        })
    })
    

root.append(list)
list.append(bookQty)
list.append(saveButton)
list.append(deleteButton)
}


main()