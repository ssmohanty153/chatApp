const socket = io();

const input = document.getElementById("input");

const submit = document.getElementById("submit");

submit.addEventListener("click", () => {
    if (input.value) {
        socket.emit("chat message", input.value);
        input.value = ""
    }
})