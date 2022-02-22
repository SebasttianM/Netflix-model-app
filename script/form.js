const formNet= document.getElementById('form');
const NAME= document.getElementById('name').value;
const SURNAME= document.getElementById('surName').value;
const TEL = document.getElementById('telephone').value;
const AGE = document.getElementsByClassName('age').value;
let SEND = document.getElementById('btnForm');


const getInfo= function enviarInfo(){
    alert('Done')
}

SEND.addEventListener('click', function(e){
    e.preventDefault();
    
})


SEND(e, getInfo)