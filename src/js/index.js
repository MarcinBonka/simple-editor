import '../scss/main.scss';

/* place your code below */

console.log('HELLO 🚀');

const txtMyInput = document.querySelector('.form__text--js');


const buttonLoad = document.querySelector('.form__btnLoad--js');
buttonLoad.addEventListener('click', (e) => {
  console.log(`button ${buttonLoad.innerHTML} clicked `);
  const localText = localStorage.getItem('MyInputText');
  if(localText)
  {
    console.log(`Local text under the key 'MyInputText' exists and will be loaded as textbox content `);
    document.getElementById("myText").value = localText;
    console.log(`Local text '${localText}' loaded.`);
  }
  else
    console.log(`Local text under the key 'MyInputText' doesn't exist. Will be not loaded. `);
});

const buttonSave = document.querySelector('.form__btnSave--js');
buttonSave.addEventListener('click', (e) => {
    console.log(`Button ${buttonSave.innerHTML} clicked `);
    const userText = document.getElementById("myText").value;
    localStorage.setItem('MyInputText', userText);  
    console.log(`Text '${userText}' saved to local storage.`);
});