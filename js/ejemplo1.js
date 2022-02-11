const boton = document.getElementById('botoncito');
const input  = document.getElementById('cuadrito');
const contenedor = document.getElementsByClassName('contenedor');
console.log(contenedor);
boton.setAttribute('value','Cambio texto');
input.setAttribute('value','Que dormidos que estan');


function clickButton (){

    var usuario = [];
    var username ;
    

     fetch('https://jsonplaceholder.typicode.com/users/4')
      .then(Response=>{
          console.log(Response)
          Response.json();
         
        console.log(usuario);
      });
      console.log(usuario);
      const body= document.body;      
      const nombre= document.createElement('h1');
      
      console.log(username);
      const text = document.createTextNode(usurname);
      nombre.appendChild(text);
      
      const contenedor = document.getElementById('h');
      console.log('cambiamos el fondo');
      console.log(contenedor);
      console.log(contenedor.style.backgroundColor);
      if(contenedor.style.backgroundColor == 'blue'){
          contenedor.style.backgroundColor= "red";
      }else{
          contenedor.style.backgroundColor='blue';

      }
      }