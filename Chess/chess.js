let domChessMan = document.querySelectorAll('.fa-solid');
// let domOCo = document.querySelectorAll('.row');
let domOCo = document.querySelectorAll('.black, .white');

let turn1 = ''; // chon quan co
let turn2 = ''; // chon o muon den

domChessMan.forEach(element => {
    element.addEventListener('click', (event) => {
        // console.log(event.target);
        // console.log(turn1);
        if (event.target !== turn1 && turn1 !== '') {
            turn1.style.border = 'none';
            if (event.target.matches('.team-black') && turn1.matches('.team-black')){
                console.log('cung team den');
                // turn1 = '';
            }
            else if (turn1.matches('.team-white') && event.target.matches('.team-white')){
                console.log('cung team trang');
                // turn1 = '';
            }
            else if (event.target.matches('.team-black') && turn1.matches('.team-white')) {
                console.log('trang an den');
                event.target.parentNode.appendChild(turn1);
                event.target.parentNode.removeChild(event.target);
                turn1 = '';
                return; 
            }
            else if (event.target.matches('.team-white') && turn1.matches('.team-black')){
                console.log('den an trang');
                event.target.parentNode.appendChild(turn1);
                event.target.parentNode.removeChild(event.target);
                turn1 = '';
                return; 
            }
            // turn1.style.backgroundColor = 'transparent';
        }
        turn1 = event.target;
        event.target.style.border = '1px solid red';
        // event.target.style.backgroundColor = 'rgba(0, 0, 0, 0.15)';
        // console.log(turn1);
        // console.log('Chon duoc quan co: '+ checkTurn1(event.target));
    });
});

domOCo.forEach(element => {
    element.addEventListener('click', (event) => {
        // console.log('Chon duoc quan co: '+ checkTurn1(event.target));
        // console.log('Chon duoc o de di: ' + checkTurn2(event.target));
        if (checkTurn2(event.target)){
            event.target.appendChild(turn1);
            turn1.style.border = 'none';
            // turn1.style.backgroundColor = 'transparent';
            turn1 = '';
        }
        // if (event.target.matches('.black') || event.target.matches('.white') || ){

        // }
    });
});
// let c = document.querySelector('#wrapper');
// c.addEventListener('click', function(){
//     console.log(c);
//     turn1.style.backgroundColor = 'transparent';
//     turn1.style.border = 'none';
//     turn1 = '';
//     turn2 = '';
// });

function checkTurn1(myTurn){
    if(myTurn.matches('.fa-solid')){
        return true;
    }else{
        return false;
    }
}

function checkTurn2(myTurn){
    if(myTurn.matches('.black, .white')){
        return true;
    }else{
        return false;
    }
}

