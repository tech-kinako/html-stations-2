function displayList() {
    const fruits = document.getElementById('fruits')
    const ul = document.createElement('ul');

    for (const fruit of fruits.children) {
        const li = document.createElement('li');
        li.textContent = fruit.textContent;
        ul.appendChild(li);
    }

    fruits.innerHTML = '';
    fruits.appendChild(ul);
}