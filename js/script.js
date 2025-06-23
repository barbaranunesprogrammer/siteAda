var nome = document.getElementById("nome");
var email = document.getElementById('email');
document.getElementById("botao").addEventListener("click", enviarFormulario);

function enviarFormulario() {

    if (nome.value !== "" && email.value !== "") {
        // exibe uma mensagem de sucesso
        alert("Obrigado por se inscrever, " + nome.value + "!");

    } else {
        alert("Por favor, preencha todos os campos.");
        // peça a usuaria que preencha os campos nome e email
    }
}
/*function enviarProntuario(){
  var botao = document.getElementById("botao");
  if (botao.onclick) {
      enviarFormulario();
  }
}*/
