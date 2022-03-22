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