function logar(){

    var usuario = document.getElementById('usuario').value;


    var senha = document.getElementById('senha').value;

    //validar se o usuário e a senha são igual 'admin'
    //se for, imprimir OK
    //senão, imprimir ERRO

    if (usuario == 'Crowley' && senha == 'admin'){
        alert('Login Ok');
        location.href = './html/home.html';
    }else{
        alert('ERRO usuário ou senha incorretos');
    }




}