console.log("HELLO");

const form = document.querySelector(".form");
const list = document.querySelector(".list");
const textInput = document.querySelector(".textInput");
const button = document.querySelector(".button");

// this is now the source of truth for messages
const state = {
  messages: ["message1", "message2"],
  input: "",
};
// const messages =
// let input = ""

form.addEventListener("submit", (event) => {
  // prevent default
  event.preventDefault();
  // // get the data from the input field
  // const message = event.target[0].value
  // update state
  state.messages.push(state.input);
  form.reset();
  state.input = "";
  console.log(state);
  // render the whole list each time from scratch
  renderList();
});

textInput.addEventListener("input", (event) => {
  // store the input as state
  state.input = event.target.value;
  console.log(state);
});

function renderList() {
  // make sure the html list is empty
  // loop through messages array and create all the elements and update the page.
  list.innerHTML = "";

  state.messages.forEach((message) => {
    // create the li element
    const li = document.createElement("li");
    // set the right text
    li.innerText = message;
    // add a list item to the list
    list.append(li);
  });
}

button.addEventListener("click", function () {
  state.messages.shift();

  renderList();
});

renderList();
