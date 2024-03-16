const socket = io();

const input = document.getElementById("input");

const submit = document.getElementById("submit");
const messages = document.getElementById('messages');

submit.addEventListener("click", () => {
    if (input.value) {
        socket.emit("chat message", input.value);
        input.value = ""
    }
})

socket.on('chat message', (msg) => {
    const item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
  });