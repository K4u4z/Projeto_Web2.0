const button = document.querySelector("button");
const modal = document.querySelector("dialog");
const buttonEnviar = document.querySelector("dialogbuttton");


button.onclick = function(){
    modal.showModal();
}

buttonEnviar.onclick() = function(){
    modal.close()
}

button.addEventListener('submit',function(event){
    alert('Compra realizada com sucesso')
})
