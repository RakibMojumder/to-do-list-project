
// Create Element fuction -------->
function createElement() {
    const inputFeild = document.getElementById('input-field');
    const inputValue = inputFeild.value;
    const todoItem = document.getElementById("todo-item");

    if (inputValue === '') {
        alert('please enter todo drescription');
        return;
    }
    const element = document.createElement('div');
    element.classList.add('grid', 'grid-cols-12', 'text-center', 'w-3/4', 'mx-auto', 'py-4', 'px-8', 'bg-blue-500', 'text-white', 'mt-5', 'rounded-md')
    element.innerHTML =
        `<div class="col-span-1 text-2xl">${count}</div>
        <div class="col-span-8 text-2xl">${inputValue}</div>
        <div class="col-span-3">
        <button id="edit-btn" class="py-2 px-8 bg-green-600 rounded-md text-white mr-5">Edit</button>
        <button class="delete-btn py-2 px-8 bg-red-600 rounded-md text-white">Delete</button>
        </div>`

    todoItem.appendChild(element);
    inputFeild.value = '';
}

// Delete Button function -------->
function deleteBtn() {
    const btnGroup = document.getElementsByClassName('delete-btn');
    for (let btn of btnGroup) {
        btn.addEventListener('click', function (event) {
            event.target.parentElement.parentElement.remove();
        })
    }
}




let count = 0;
document.getElementById('add-btn').addEventListener('click', (event) => {
    count++;
    createElement();
    deleteBtn();
})


