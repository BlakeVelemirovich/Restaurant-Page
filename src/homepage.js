const testFunction = () => {

    const buttonParent = document.querySelector('#content');
    const button = document.createElement('button');
    button.textContent = 'home';
    button.addEventListener('click', () => {
        console.log('start');
    });
    buttonParent.appendChild(button);
} 

export default testFunction;