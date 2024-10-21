const formCad = document.getElementById('formCadastro');
const CadLogin = document.getElementById('CadastrarLogin');
const CadSenha = document.getElementById('CadastrarSenha');



formCad.addEventListener('submit', function(event){


    
    localStorage.setItem("login", CadLogin.value);
    
    localStorage.setItem("senha", CadSenha.value)
    
});
    
  

