'use strict';

let themeDots = document.querySelectorAll('.theme-dot');

for(let i=0; i<themeDots.length; i++){
    themeDots[i].addEventListener('click', () =>{
        let theme = themeDots[i].getAttribute('data-mode');
        setTheme(theme);
    });
}


const setTheme = (theme) =>{
    if(theme === 'light'){
        document.getElementById('theme-style').href = 'styles.css';
    }

    else if(theme === 'blue'){
        document.getElementById('theme-style').href = 'blue.css';
    }

    else if(theme === 'green'){
        document.getElementById('theme-style').href = 'green.css';
    }
}
