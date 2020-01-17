class Motobomba{
    constructor(id,capacidad,estado=false){
        this.id = id;
        this.capacidad = capacidad;
        this.estado = estado;
    }
    prender(){
        return this.estado = true;
    }
    apagar(){
        return this.estado = false;
    }
    getEstado(){
        return this.estado;
    }
    toString(){
        if(this.estado === true){
            return "la motobomba con id " + this.id + " esta encendida"
        }else{
            return "la motobomba con id " + this.id + " esta apagada"
        }
    }
    cambio(){
        let d = document.getElementById("id").value;
        let cap = document.getElementById("capacidad").value;
        this.id = d;
        this.capacidad = cap;
        //console.log(this.id + ' ' +this.capacidad);
        document.getElementById("resultado").innerHTML = 'El ID es:  '+ d + ' '+'La Capacidad es:  '+cap;
        document.getElementById("img").innerHTML = ('<img src="img/mot.jpg"/>');
       
        //condicional para que vea en que el estado y el cuadro este en verde o rojo.
        if(this.estado == true){
            document.getElementById("verde").innerHTML = ('<img src="img/verde.jpg"/>');
        }else{
            document.getElementById("verde").innerHTML = ('<img src="img/rojo.jpg"/>');
        }
        
        //creacion del boton y funcionalidad para que cambie de nombre y el color de cuadro
        let boton = document.createElement("button");
        boton.innerHTML = "ENCENDIDO";
        document.body.appendChild(boton);

        //comparacion entre estados true o false para cambio de color y nombre en boton 
        boton.onclick = function() {
            if(this.estado == true){
                boton.innerHTML = "ENCENDIDO"
                document.getElementById("verde").innerHTML = ('<img src="img/verde.jpg"/>');
                return this.estado= false;
            }else{
                boton.innerHTML = "APAGADO"
                document.getElementById("verde").innerHTML = ('<img src="img/rojo.jpg"/>');
                return this.estado= true;
            }
        }
        
    }
   
}
//intanciando la clase motobomba para el funcionamiento
let ejemplo = new Motobomba(1,59,true);
console.log(ejemplo)
console.log(toString());

