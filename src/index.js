// Waits for DOM to load completely
document.addEventListener("DOMContentLoaded", () => {
  // Grabs the form element and sets it to the varialbe 'form'
  let form = document.querySelector('form')
  // Listens to the form element for a submit event
  form.addEventListener('submit', (e) => {
    // Prevents the default behaivour of the form submit button
    e.preventDefault()
    // Invokes the 'buildToDo' function and passes the event with the value of our input from the description
    buildToDo(e.target.input_box.value)
    // Resets the form back to it's original state
    form.reset()
  })
});
// Function buildToDo (Gets invoked in the arrow function in our DOMContentLoaded event listener)
function buildToDo(todo){
  // Creates a paragraph element and sets it to the variable 'p'
  let li = document.createElement('li')
  // Creates a button element and sets it to the variable 'btn'
  let btn = document.createElement('button')
  // Adds an event listener to the button, listens for a click, if so it will call the handleDelete function
  btn.addEventListener('click', handleDelete)
  // Sets the text content of the delete button to an X
  btn.textContent = '✖'
  // Sets the text content of the paragraph to what we passes into this function
  li.textContent = `${todo}`
  // Adds the button to the paragraph element
  li.appendChild(btn)
  // Console logs the paragraph element
  console.log(li)
  // Finds our ul element and adds our task (Paragraph element)
  document.querySelector('#tasks').appendChild(li)
}
// Function that removes the task that's X button is clicked
function handleDelete(e){
  e.target.parentNode.remove()
}