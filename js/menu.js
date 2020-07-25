const hamburguer =document.querySelector('.hamburguesa');
/*se declara una constante "hamburguer" seria igual a documen.cuery selector 
y va tomar la clase hamburguesa*/

const menu =document.querySelector('.menu-navegacion');
/*igual se selecciona la clase menu-navegacion*/

/*se hace un evento con hamburguer*/

console.log(menu)
console.log(hamburguer)

/*se hara un evento con hamburguer*/
/*quiero que al elemento hamburguer se le 
agrege un evento de tipo click y quiero que cunado el usuario
al icono se desate una funcion de flecha*/
hamburguer.addEventListener("click", ()=>{
    menu.classList.toggle("spread")
    /* al menu quiero que seleciones las clases y que le agrges y quites la clase spread*/
    /*significa que vamos a quitar la clse dependiendo si la tiene o no*/
})
/*quiero que cunado alguien toca la ventana va activarse la funcion de flecha*/
window.addEventListener('click', e=>{
    /*si menu.classlist tiene la clase spread quiero que se ejecute este codigo
    y ademas el elemnto al que se le da click es diferente a menu se va ajecutar y si al icono amburguesa*/
    if(menu.classList.contains("spread") && e.target != menu && e.target!= hamburguer)
    {/*targuet sirve para que nos indique en la consola el elemento que se clikio */
        menu.classList.toggle("spread")
    }

})

