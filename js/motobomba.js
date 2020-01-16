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
        if(this.estado == true){
            return "la motobomba con" + this.id + " esta encendida"
        }else{
            return "la motobomba con" + this.id + " esta apagada"
        }
    }
    probar(){
        var prueba = document.getElementById("id").value;
        var cap = document.getElementById("capacidad").value;
        this.id = prueba;
        document.write('el ID es:'+prueba+'  '+'Capacidad es:'+cap);
        document.write('<img src="img/mot.jpg"/>');
    }
    ocultar(){
        if(this.estado == true){
            document.getElementById('cuadro').style.display = 'none';
        }else{
            document.getElementById('cuadro').style.display = 'block';
        }
    }
   // mostrar(){
    //    document.getElementById('cuadro').style.display = 'block';
   // }
}

var prueba = new Motobomba(1,22,true);
prueba.apagar()
