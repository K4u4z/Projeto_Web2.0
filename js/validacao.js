const validacaoform = document.getElementsByClassName('formLogin');
const login = document.getElementById('txtLogin');
const senha = document.getElementById('passSenha');


const CadL = localStorage.getItem('login');
const CadS = localStorage.getItem('senha');

console.log(CadL);
console.log(CadS);



validacaoform.addEventListener('submit', function(event){
    if(login.value != CadL && senha.value != CadS)
    {
        alert('Digite um login valido');
    }

});