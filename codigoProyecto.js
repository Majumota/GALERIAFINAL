var obras = [];
var artistas = [];
var clientes = [];
var idObraAMostrar;
var idClienteAMostrar;
var idArtistaAMostrar;

function crearObra() {
    var idExpo = document.getElementById("E_ID").value;
    var idGaleria = document.getElementById("G_ID").value;
    var idObra = document.getElementById("artid").value;
    var idArtista = document.getElementById("artistid").value;
    var tituloObra = document.getElementById("title").value;
    var tecnicaObra = document.getElementById("type_of_art").value;
    var añoObra = document.getElementById("year").value;
    var precioObra = document.getElementById("price").value;

    var obra1 = new Obra(idExpo,idGaleria,idObra,
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

}

function eliminarObra() {

}

function registrarCliente () {
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

}

function ComprasCliente() {

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

function mostrarObra() {

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
   Obra (idExpo, idGaleria, idObra, idArtista, titulo, tecnica, fecha, precio) {
       this.idExpo = idExpo;
       this.idGaleria = idGaleria;
       this.idObra = idObra;
       this.idArtista = idArtista;
       this.titulo = titulo;
       this.tecnica = tecnica;
       this.fecha = fecha;
       this.precio = precio;
   }
  
}
