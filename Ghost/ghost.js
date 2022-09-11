const input = document.getElementById('input');
// console.log(input);
const show = document.getElementById('show');
// console.log(show);

show.addEventListener('click', function() {
    // input.setAttribute('type','text');
    if(input.getAttribute('type') === 'password'){
        input.setAttribute('type','text');
        show.innerHTML = 'Hiden';
    }
    else{
        input.setAttribute('type','password');
        show.innerHTML = 'Show';
    }
})
