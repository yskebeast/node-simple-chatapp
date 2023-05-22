let socket = io();
const form = document.querySelector('#form');
const input = document.querySelector('#input');
const list = document.querySelector('#list');

form.addEventListener('submit', (e) => {
  e.preventDefault(); //送信するときのリロードを無効かする
  if (!input.value) {
    return;
  } else {
    socket.emit('message', input.value);
    input.value = '';
  }
});

socket.on('message', (msg) => {
  let item = document.createElement('li');
  item.textContent = msg;
  list.appendChild(item);
});
