function Entrar(){
    let nome = document.getElementById("User").value
    let senha = document.getElementById("Pass").value
    if(nome == "arthur" && senha == "123"){
        alert("Login concluido")
        window.location.href = ''
    }else{
        alert("Nome ou Senha incorretos")
    }
}


function entrarSite(){
    window.location.href="html.html"
}