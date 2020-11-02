var obras = [];
var artistas = [];
var clientes = [];

function crearObra() {
    var idExpo = document.getElementById("E_ID").innerHTML;
    var idGaleria = document.getElementById("G_ID");
    var idObra = document.getElementById("artid");
    var idArtista = document.getElementById("artistid");
    var tituloObra = document.getElementById("title");
    var tecnicaObra = document.getElementById("type_of_art");
    var añoObra = document.getElementById("year");
    var precioObra = document.getElementById("price");

    var obra1 = new Obra(idExpo,idGaleria,idObra,
        idArtista,tituloObra,tecnicaObra,añoObra,precioObra);
    obras.add(obra1);
}

function buscarObra() {

}

function eliminarObra() {

}

function registrarCliente () {
    var idCliente = document.getElementById("custid");
    var nombre = document.getElementById("fname");
    var apellidoP = document.getElementById("lname");
    var apellidoM = document.getElementById("lname1");
    var correo = document.getElementById("mailCliente");
    var tel = document.getElementById("telCliente");

    var cliente1 = new Cliente(idCliente,nombre,apellidoP,apellidoM,correo,tel);
    clientes.add(cliente1);
}

function buscarCliente() {
    
}

function eliminarCliente() {

}

function añadirArtista() {

}

function ComprasCliente() {

}

function buscarArtista() {

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
