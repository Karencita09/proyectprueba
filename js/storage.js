//-------variables globales------//
var login = document.getElementById("login");
var salir = document.getElementById("salir");
var registro = document.getElementById("registro");
var labelUsuario = document.getElementById("labelUsuario");


//--------Funciones-------------//



function registroUsuario() {
    let user = prompt("Registra tu usuario");
    let pass = prompt("Registra tu password");
    localStorage.setItem('usuario', user);
    localStorage.setItem('clave' , pass);
    alert('registro completo');
    
}

function loginUsuario() {
    let user = prompt("Escribe tu usuario");
    let pass = prompt("Escribe tu password");

//buscar datos en el storage----

    if (user ==localStorage.getItem ('usuario') && pass == localStorage.getItem ('clave')) {
        alert("Login exitoso");
        labelUsuario.innerHTML = user;

    } else {
        alert("Error en el login");
    }
}
function salir() {
    //1.Poner vacia la variable user(usuario)
    let user = "";
    localStorage.setItem('usuario' , user);
    //2. Poner vacio la variable pass(clave)
    let pass = "";
    localStorage.setItem('clave' , pass);
    //3. Label usuario poner vacion user
   labelUsuario.innerHTML = user;
}

//-------usuario en sesion//

if (localStorage.getItem('usuario')) {
    let usuarioStorage =localStorage.getItem('usuario');
    labelUsuario.innerHTML = usuarioStorage;
} 
    


//  --------Oncliks-------------// 
login.onclick = function () {
    //funcion para login
    loginUsuario();
}
salir.onclick = function () {
    //funcion para salir
}
registro.onclick = function () {
    //funcion para registro
    registroUsuario();
    
}







