const campoLogin = document.getElementById("username");
const campoSenha = document.getElementById("password");
const campoNovoLogin = document.getElementById("newusername");
const campoNovaSenha = document.getElementById("newpassword");
const campoRepSenha = document.getElementById("repassword");

function logar(){
    let login = campoLogin.value;
    let senha = campoSenha.value;
    let mensagem = "Usuário e/ou senha incorretos!"
    let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
    if (bancoDeDados == null) {
        mensagem = "Nenhum usuário cadastrado até o momento";
    } else {
        for (let usuario of bancoDeDados) {
            // Lógica para verificar as credenciais de login
            if (usuario.login == login && usuario.senha == senha) {
                mensagem = "Parabéns, você logou!";
                localStorage.setItem("logado", JSON.stringify(usuario));
                window.location.href = 'home.html'
                break;
            }
        }
        
    }
    alert(mensagem)
}
function logout(){
    window.location.href = 'index.html'
}
function cadastrar(){
    if(campoNovaSenha.value == campoRepSenha.value){
        const usuario = {
            login: campoNovoLogin.value, 
            senha: campoNovaSenha.value,
        };
        let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"))
        if(bancoDeDados == null){
            bancoDeDados = [];
        }
        bancoDeDados.push(usuario)
        localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados))
        alert("Usuário cadastrado com sucesso!")
        document.getElementById("newusername").value = null
        document.getElementById("newpassword").value = null
        document.getElementById("repassword").value = null

        // Lógica para registrar o usuário
    } else {
        alert("As senhas são diferentes!")
    }
}

const nomeDoLivro = document.getElementById("tituloLivro");
const autorDoLivro = document.getElementById("autorLivro");
const generoDoLivro = document.getElementById("generoLivro");
const isbnDoLivro = document.getElementById("isbnLivro");

function cadastrarLivro(){
    const usuario = {
        nome: nomeDoLivro.value, 
        autor: autorDoLivro.value,
        genero: generoDoLivro.value,
        isbn: isbnDoLivro.value,
    };
    let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"))
    if(bancoDeDados == null){
        bancoDeDados = [];
    }
    bancoDeDados.push(usuario)
    localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados))
    alert("Livro cadastrado com sucesso!")

    document.getElementById("tituloLivro").value = null
    document.getElementById("autorLivro").value = null
    document.getElementById("generoLivro").value = null
    document.getElementById("isbnLivro").value = null
    window.location.href = 'about.html'
}
function concluido(){
    window.location.href = 'index.html'
}
