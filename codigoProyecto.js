var obras = [];
var artistas = [];
var clientes = [];
var exposiciones = [];
var idObraAMostrar;
var idClienteAMostrar;
var idArtistaAMostrar;
var idComprador;
var idObraComprada;
var idExpoAMostrar;

function añadirExposicion() {
    var idExpo = document.getElementById("E_ID").value;
    var fechaS = document.getElementById("startdate").value;
    var fechaF = document.getElementById("enddate").value;
    var obrasAMostrar = document.getElementById("mostrarObra").value;

    var expo1 = new Exposicion(idExpo, fechaS, fechaF, obrasAMostrar);
    exposiciones.add(expo1);
}

function buscarExposicion() {
    var idExpoABuscar = document.getElementById("buscarExposicion").value;

    for(var i=0;i<exposiciones.length;i++) {
        var idExpo = exposiciones[i].idExpo;
        if (idExpoABuscar.equals(idExpo)) {
            idExpoAMostrar = idExpoABuscar;
        }
    }
}

function verExposicion() {
    document.getElementById("idExposicion").innerHTML;
    document.getElementById("startdate").innerHTML;
    document.getElementById("enddate").innerHTML;
    document.getElementById("mostrarObra").innerHTML;
}

function eliminarExposicion() {

}

function crearObra() {
    var idExpo = document.getElementById("E_ID").value;
    var idObra = document.getElementById("artid").value;
    var idArtista = document.getElementById("artistid").value;
    var tituloObra = document.getElementById("title").value;
    var tecnicaObra = document.getElementById("type_of_art").value;
    var añoObra = document.getElementById("year").value;
    var precioObra = document.getElementById("price").value;

    var obra1 = new Obra(idExpo,idObra,
        idArtista,tituloObra,tecnicaObra,añoObra,precioObra);
    obras.add(obra1);
}

function buscarObra() {
    var idObraABuscar = document.getElementById("buscarObra").value;

    for(var i=0;i<obras.length;i++) {
        var idObra = obras[i].idObra;
        if (idObraABuscar.equals(idObra)) {
            idObraAMostrar = idObraABuscar;
        }
    }
}

function mostrarObra() {
    document.getElementById("idExpo").innerHTML;
    document.getElementById("idObra").innerHTML;
    document.getElementById("idArtista").innerHTML;
    document.getElementById("titulo").innerHTML;
    document.getElementById("tecnica").innerHTML;
    document.getElementById("fecha").innerHTML;
    document.getElementById("precio").innerHTML;
} 

function eliminarObra() {

}

function registrarCliente() {
    var idCliente = document.getElementById("custid").value;
    var nombre = document.getElementById("fname").value;
    var apellidoP = document.getElementById("lname").value;
    var apellidoM = document.getElementById("lname1").value;
    var correo = document.getElementById("mailCliente").value;
    var tel = document.getElementById("telCliente").value;

    var cliente1 = new Cliente(idCliente,nombre,apellidoP,apellidoM,correo,tel);
    clientes.add(cliente1);
}

function buscarCliente() {
    var idClienteABuscar = document.getElementById("buscarCliente").value;

    for(var i=0;i<clientes.length;i++) {
        var idCliente = clientes[i].idCliente;
        if (idClienteABuscar.equals(idCliente)) {
            idClienteAMostrar = idClienteABuscar;
        }
    }
}

function mostrarCliente(){
    document.getElementById("idCliente").innerHTML;
    document.getElementById("nombreCliente").innerHTML ;
    document.getElementById("apellidoClienteP").innerHTML;
    document.getElementById("apellidoClienteM").innerHTML ;
    document.getElementById("correoCliente").innerHTML ;
    document.getElementById("telCliente").innerHTML ;
}

function ComprasCliente() {
    idComprador = document.getElementById("idComprador").value;
    idObraComprada = document.getElementById("idObraComprada").value;
}

function verCompra() {
    document.getElementById("verIdComprador").innerHTML = idComprador;
    document.getElementById("verIdObraComprada").innerHTML = idObraComprada;
}

function eliminarCliente() {

}

function añadirArtista() {
    var idArtista = document.getElementById("artistid").value;
    var nombre = document.getElementById("fname1").value;
    var apellidoP = document.getElementById("lname1").value;
    var apellidoM = document.getElementById("lname2").value;
    var tel = document.getElementById("tel").value;
    var correo = document.getElementById("mail").value;
    var fecha = document.getElementById("birthplace").value;
    var reseña = document.getElementById("reseña").value;
    var cantObras = document.getElementById("cantObras").value;

    var artista1 = new Artista(idArtista,nombre,apellidoP,apellidoM,tel,correo,fecha,reseña,cantObras);
    artistas.add(artista1);
}

function buscarArtista() {
    var idArtistaABuscar = document.getElementById("buscarArtista").value;

    for(var i=0;i<artistas.length;i++) {
        var idArtista = artistas[i].idArtista;
        if (idArtistaABuscar.equals(idArtista)) {
            idArtistaAMostrar = idArtistaABuscar;
        }
    }
}

function mostrarArtista() {
    document.getElementById("idArtista").innerHTML;
    document.getElementById("nombreArtista").innerHTML ;
    document.getElementById("apellidoArtistaP").innerHTML;
    document.getElementById("apellidoArtistaM").innerHTML ;
    document.getElementById("telArtista").innerHTML ;
    document.getElementById("correoArtista").innerHTML ;
    document.getElementById("fechaArtista").innerHTML ;
    document.getElementById("reseñaArtista").innerHTML ;
    document.getElementById("numeroObrasArtista").innerHTML;
}

function eliminarArtista() {
    
}

class Cliente {
    Cliente (idCliente, nombre, apellidoP, apellidoM, correo, tel) {
        this.idCliente = idCliente;
        this.nombre = nombre;
        this.apellidoP = apellidoP;
        this.apellidoM = apellidoM;
        this.correo = correo;
        this.tel = tel;
    }
}

class Artista {
    Artista (idArtista, nombre, apelidoP, apellidoM, tel, correo, fecha, reseña, numeroObras) {
        this.idArtista = idArtista;
        this.nombre = nombre;
        this.apelidoP = apelidoP;
        this.apellidoM = apellidoM;
        this.tel = tel;
        this.correo = correo;
        this.fecha = fecha;
        this.reseña = reseña;
        this.numeroObras = numeroObras;
    }
}

class Obra {
    //atributes
   Obra (idExpo, idObra, idArtista, titulo, tecnica, fecha, precio) {
       this.idExpo = idExpo;
       this.idObra = idObra;
       this.idArtista = idArtista;
       this.titulo = titulo;
       this.tecnica = tecnica;
       this.fecha = fecha;
       this.precio = precio;
   }
  
}

class Exposicion {
    Exposicion(idExpo, fechaS, fechaF, obrasAMostrar) {
        this.idExpo = idExpo;
        this.fechaS = fechaS;
        this.fechaF = fechaF;
        this.obrasAMostrar = obrasAMostrar;
    }
}
