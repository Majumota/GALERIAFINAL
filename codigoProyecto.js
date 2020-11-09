var mysql = require('mysql');
var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"gositogordo",
    database:"Galeria_de_arte"
});

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

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO exposicíon (idExposicíon,Fecha_Inicio,Fecha_Final,Obras_a_mostrar) VAlUES"+idExpo+fechaS+fechaF+obrasAMostrar;
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        });
    });
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
    var idExpo;
    var fechaS;
    var fechaF;
    var obrasAMostrar;

    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT idExposicíon,Fecha_Inicio,Fecha_Final,Obras_a_mostrar FROM exposicíon", function (err, result, fields) {
          if (err) throw err;
            for (var i=0;i<obras.length;i++) {
                if (idExpoAMostrar == result[i].idExposicíon) {
                    idExpo = result[i].idExposicíon;
                    fechaS = result[i].Fecha_Inicio;
                    fechaF = result[i].Fecha_Final;
                    obrasAMostrar = result[i].Obras_a_mostrar;
                }
            }
        });
    });

    document.getElementById("idExposicion").innerHTML = idExpo;
    document.getElementById("startdate").innerHTML = fechaS;
    document.getElementById("enddate").innerHTML = fechaF;
    document.getElementById("mostrarObra").innerHTML = obrasAMostrar;
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

    var descripcion = ""+tecnicaObra.value+añoObra.value;

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO obra (idObra,Titulo_Obra,Descripcion,IdArtista,precio,IdExpo) VAlUES"
        +idObra+tituloObra+descripcion+idArtista+precioObra+idExpo;
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        });
    });
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
    var idExpo;
    var idObra;
    var idArtista;
    var titulo;
    var descripcion;
    var precio;

    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT idExpo,idObra,Descripcion,Titulo_Obra,idArtista,Precio FROM obra", function (err, result, fields) {
          if (err) throw err;
            for (var i=0;i<obras.length;i++) {
                if (idObraAMostrar == result[i].idObra) {
                    idExpo = result[i].idExpo;
                    idObra = result[i].idObra;
                    idArtista = result[i].idArtista;
                    titulo = result[i].Titulo_Obra;
                    descripcion = result[i].Descripcion;
                    precio = result[i].Precio;
                }
            }
        });
    });

    document.getElementById("idExpo").innerHTML = idExpo;
    document.getElementById("idObra").innerHTML = idObra;
    document.getElementById("idArtista").innerHTML = idArtista;
    document.getElementById("titulo").innerHTML = titulo;
    document.getElementById("descripcion").innerHTML = descripcion;
    document.getElementById("precio").innerHTML = precio;
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

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO cliente (idCliente,Nombre,Apellido_Paterno,Apellido_Materno,Teléfono,Correo) VAlUES"
        +idCliente+nombre+apellidoP+apellidoM+tel+correo;
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        });
    });    
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
    var idCliente;
    var nombre;
    var apelidoP;
    var apellidoM;
    var tel;
    var correo;

    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT idCliente,Nombre,Apellido_Paterno,Apellido_Materno,Teléfono,Correo FROM cliente", function (err, result, fields) {
          if (err) throw err;
            for (var i=0;i<obras.length;i++) {
                if (idClienteAMostrar == result[i].idCliente) {
                    idCliente = result[i].idCliente;
                    nombre = result[i].Nombre;
                    apelidoP = result[i].Apellido_Paterno;
                    apellidoM = result[i].Apellido_Materno;
                    tel = result[i].Teléfono;
                    correo = result[i].Correo;
                }
            }
        });
    });

    document.getElementById("idCliente").innerHTML = idCliente;
    document.getElementById("nombreCliente").innerHTML = nombre;
    document.getElementById("apellidoClienteP").innerHTML = apellidoP;
    document.getElementById("apellidoClienteM").innerHTML = apellidoM;
    document.getElementById("correoCliente").innerHTML = correo;
    document.getElementById("telCliente").innerHTML = tel;
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

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO artista (idArtista,Nombre,Apellido_Paterno,Apellido_Materno,Teléfono,Correo,Reseña_Artista,Número_Obras,Fecha_Nacimiento) VAlUES"
        +idArtista+nombre+apellidoP+apellidoM+tel+correo+reseña+cantObras+fecha;
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        });
    });
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
    var idArtista;
    var nombre;
    var apellidoP;
    var apellidoM;
    var tel;
    var correo;
    var fecha;
    var reseña;
    var cantObras;

    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT idArtista,Nombre,Apellido_Paterno,Apellido_Materno,Teléfono,Correo,Reseña_Artista,Número_Obras,Fecha_Nacimiento FROM obra", function (err, result, fields) {
          if (err) throw err;
            for (var i=0;i<obras.length;i++) {
                if (idArtistaAMostrar == result[i].idArtista) {
                    idArtista = result[i].idArtista;
                    nombre = result[i].Nombre;
                    apellidoP = result[i].Apellido_Paterno;
                    apellidoM = result[i].Apellido_Materno;
                    tel = result[i].Teléfono;
                    correo = result[i].Correo;
                    fecha = result[i].Fecha_Nacimiento;
                    reseña = result[i].Reseña_Artista;
                    cantObras = result[i].Número_Obras;
                }
            }
        });
    });

    document.getElementById("idArtista").innerHTML = idArtista;
    document.getElementById("nombreArtista").innerHTML = nombre;
    document.getElementById("apellidoArtistaP").innerHTML = apellidoP;
    document.getElementById("apellidoArtistaM").innerHTML = apellidoM;
    document.getElementById("telArtista").innerHTML = tel;
    document.getElementById("correoArtista").innerHTML = correo;
    document.getElementById("fechaArtista").innerHTML = fecha;
    document.getElementById("reseñaArtista").innerHTML = reseña;
    document.getElementById("numeroObrasArtista").innerHTML = cantObras;
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
