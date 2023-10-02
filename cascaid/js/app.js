'use strict';

const switcher = document.querySelector('.theme');

switcher.addEventListener('click', function() {
    var className = localStorage.getItem('theme');

    if(className=='dark-theme') {
        localStorage.setItem('theme', 'light-theme');
        document.body.classList.remove('dark-theme')
        // this.textContent = "Dark";
    } else {
        localStorage.setItem('theme', 'dark-theme');
        document.body.classList.add('dark-theme')    
        // this.textContent = "Light";
    }

    // document.body.classList.toggle('dark-theme')


    // var className = document.body.className;

    // if(theme == "light-theme") {

    // }

    // if(className == "light-theme") {
    //     this.textContent = "Dark";
    // }
    // else {
    //     this.textContent = "Light";
    // }

    console.log('current class name: ' + className);
});