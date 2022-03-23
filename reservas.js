let contenedor=document.getElementById("contenedor")
let bandera=true
contenedor.addEventListener("click",function(evento){
    if(bandera==true){
        if(evento.target.classList.contains="w-100"){
       
            evento.target.src="img/cinema2.png"
            bandera=false
        }

    }else{

        if(evento.target.classList.contains="w-100"){
       
            evento.target.src="img/director-chair.png"
            bandera=true
        }

    }

    
})



let boton=document.getElementById("boton")
boton.addEventListener("click",function(evento){

    evento.preventDefault()

    let cantidad=document.getElementById("cantidadentradas").value
    let tribuna=document.getElementById("tribuna").value
    let pelicula=document.getElementById("pelicula").value

    if(tribuna=="general"){
        let precio=18000
        let total=precio*cantidad
        alert("sus entradas valen "+total)
        
    }else{
        let precio=25000
        let total=precio*cantidad
        alert("sus entradas valen "+total)
    }
    
    
})




