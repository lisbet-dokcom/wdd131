const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.getElementById('list');

const line = document.createElement('li');
const deleteButton = document.createElement('button');
line.textContent = input.value;
deleteButton.textContent = '❌';
line.append(deleteButton);
list.append(line);

button.addEventListener('click', function () {
    const inputValue = input.value;
    const newLine = document.createElement('li');
    const newDeleteButton = document.createElement('button');

    newLine.textContent = inputValue;
    newDeleteButton.textContent = '❌';

    newLine.append(newDeleteButton);
    list.append(newLine);

    input.value = '';
});
