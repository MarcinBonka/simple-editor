import '../scss/main.scss';

/* Function prototypes */
const LocalsLoad = () => {
    const localText = localStorage.getItem('MyInputText');
    if(localText)
    {
        console.log(`Local text under the key 'MyInputText' exists and will be loaded as textbox content `);
        const txtBox = document.querySelector('.form__text--js');
        txtBox.value = localText;
        // document.getElementById("myText").value = localText;
        console.log(`Local text '${localText}' loaded.`);
    }
    else
        console.log(`Local text under the key 'MyInputText' doesn't exist. Will be not loaded. `);
}



/* initial tasks */
console.log('HELLO 🚀');
LocalsLoad();

/* query selectors */
const buttonLoad = document.querySelector('.form__btnLoad--js');
const buttonSave = document.querySelector('.form__btnSave--js');

/* event listeners */
buttonLoad.addEventListener('click', (e) => {
  console.log(`button ${buttonLoad.innerHTML} clicked `);
  LocalsLoad();
});

buttonSave.addEventListener('click', (e) => {
    console.log(`Button ${buttonSave.innerHTML} clicked `);
    const userText = document.getElementById("myText").value;
    localStorage.setItem('MyInputText', userText);  
    console.log(`Text '${userText}' saved to local storage.`);
});


