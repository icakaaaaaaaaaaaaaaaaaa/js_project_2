document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting the traditional way
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const greetingMessage = `Hello, ${name}! You are ${age} years old.`;

    const greetingElement = document.getElementById('greeting');
    greetingElement.innerText = greetingMessage;
    greetingElement.classList.remove('hidden');
});



const element = document.querySelector('.example');
element.addEventListener('click', () => {
  element.style.transition = 'transform 0.5s';
  element.style.transform = 'rotate(180deg)';
});
