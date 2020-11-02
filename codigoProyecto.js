var obras = [];
var artistas = [];
var clientes = [];

var idExpoAñadirO = document.getElementById("E_ID").innerHTML;
var idGaleriaAñadirO = document.getElementById("G_ID");
var idObraAñadirO = document.getElementById("artid");
var idArtistaAñadirO = document.getElementById("artistid");
var tituloObra = document.getElementById("title");
var tecnicaObra = document.getElementById("type_of_art");
var añoObra = document.getElementById("year");
var precioObra = document.getElementById("price");

function crearObra() {
    var obra1 = new Obra(idExpoAñadirO,idGaleriaAñadirO,idObraAñadirO,
        idArtistaAñadirO,tituloObra,tecnicaObra,añoObra,precioObra);
    obras.add(obra1);
}

function buscarObra() {

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
