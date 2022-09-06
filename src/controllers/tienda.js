
//ELIMINAMOS LA FUNCIÓN EXPORT FUNCTION, NO LA RECONOCE EL PROGRAMA Y NO ES NECESARIA PARA ESTE --------------------------------

    let productos = [
        //FALTABA SEPARAR LOS OBJETOS DEL ARRAY MEDIANTE COMAS----------------------
        //SE AGREGÓ LA DIRECCIÓN PARA LAS IMÁGENES ALOJADAS EN FIRE BASE -----------------
        { nombre: "Batimovil a escala", precio: 400000, foto: "https://firebasestorage.googleapis.com/v0/b/tiendafinal-eeba3.appspot.com/o/bescala.jpg?alt=media&token=ac66b9ea-7499-4ef9-8547-d6a3c9823abf", descripcion: "Batimovil a escala de la ultima pelicula" },

        { nombre: "Camiseta Batman", precio: 80000, foto: "https://firebasestorage.googleapis.com/v0/b/tiendafinal-eeba3.appspot.com/o/camiseta-batman.jpg?alt=media&token=a17993e6-10d6-44e6-af4f-8744ad1ece0f", descripcion: "Camiseta original DC" },

        { nombre: "Gorra Batman", precio: 50000, foto: "https://firebasestorage.googleapis.com/v0/b/tiendafinal-eeba3.appspot.com/o/gorraB.jpg?alt=media&token=47b36a33-9592-4a1f-b9df-49cf5f5185e7", descripcion: "Gorra original DC" },

        { nombre: "Bati termo DC", precio: 35000, foto: "https://firebasestorage.googleapis.com/v0/b/tiendafinal-eeba3.appspot.com/o/termoB.jpg?alt=media&token=1f2bb0d6-650a-43b7-8de1-0aace9b93c2f", descripcion: "Termo para bati chocolate" },

        { nombre: "Batmav v Superman", precio: 300000, foto: "https://firebasestorage.googleapis.com/v0/b/tiendafinal-eeba3.appspot.com/o/batmanvssuperman.jpg?alt=media&token=d7987740-07a8-4a19-bf74-f21429427450", descripcion: "Imagen a escala de la pelicula Batman v Superman" },

        { nombre: "Bati morral Totto", precio: 80000, foto: "https://firebasestorage.googleapis.com/v0/b/tiendafinal-eeba3.appspot.com/o/MorralBatman.jpg?alt=media&token=739345bf-9b8a-46b5-9c6b-127900d97bc0", descripcion: "Bolso original DC" },

        { nombre: "Silla Gaming Batman", precio: 2000000, foto: "https://firebasestorage.googleapis.com/v0/b/tiendafinal-eeba3.appspot.com/o/sillaBatman.webp?alt=media&token=a09741e4-7b03-485c-b90e-97d16c5f9ad8", descripcion: "Silla comoda y original DC" },

        { nombre: "caja de comics Batman", precio: 300000, foto: "https://firebasestorage.googleapis.com/v0/b/tiendafinal-eeba3.appspot.com/o/cajaComicB.jpg?alt=media&token=050a4238-9759-4a61-8ff1-52e588e4decb", descripcion: "comics Batman originales" },

        { nombre: "Bati caja sorpresa", precio: 250000, foto: "https://firebasestorage.googleapis.com/v0/b/tiendafinal-eeba3.appspot.com/o/cajasorpB.jpg?alt=media&token=11471117-a555-4d56-9f6f-a91925d77511", descripcion: "Caja sorpresa con productos de batman" },
        
        { nombre: "Bati lonchera totto", precio: 80000, foto: "https://firebasestorage.googleapis.com/v0/b/tiendafinal-eeba3.appspot.com/o/lonchera.jpg?alt=media&token=59573137-fc42-4c24-8f3d-8764a6107e1e", descripcion: "Lonchera para llevar tus bati alimentos" },

    ]


    //EL CÓDIGO CREABA LA FILA CON CREATELEMENTBYID, EN CAMBIO LE PUSIMOS EL ATRIBUTO GETELEMENTBYID PARA TOMAR LA ETIQUETA DESDE EL HTML COMO BASE PARA PINTAR--------------------
    //PARA QUE FUNCIONE CREAMOS UN ID FILA EN EL INDEX.HTML
    let fila = document.getElementById("fila")

  
    //FALTABA INDICAR EL PARÁMETRO PARA LA FUNCIÓN ------------------------------------------------
    //SE CAMBIÓ LA ESCRITURA DE foreach A forEach -------------------------------------------------
    productos.forEach(function (producto) {

   
        // LAS CLASSLISTS SE ENCONTRABAN EN DIFERENTES LÍNEAS, SE UNIFICARON Y SE PUSIERON DENTRO DEL MISMO PARÉNTESIS PARA CADA ETIQUETA ----------------------
        let columna = document.createElement("col")
        columna.classList.add("col-md-4")

        let tarjeta = document.createElement("div")
        tarjeta.classList.add("card", "text-center", "h-100")
     

        let imagen = document.createElement("img")
        imagen.classList.add("card-img-top", "p-3", "h-100")
        imagen.src = producto.foto

        //SEPARADOR ESTABA CON GETELEMENTBYID, LO CAMBIAMOS PORE CREATEELEMENT -----------------------------
        let separador = document.createElement("hr")
        separador.classList.add("w-100", "mx-auto", "d-block" )


        let nombre = document.createElement("h5")
        nombre.classList.add("fw-bold", "text-center", "mx-3")
        nombre.textContent = producto.nombre

        let precio = document.createElement("h6")
        precio.classList.add("text-center", "text-muted")
        precio.textContent = producto.precio

        let botonAmpliarInfo = document.createElement("button")
        botonAmpliarInfo.setAttribute("type", "button")
        botonAmpliarInfo.classList.add("btn", "btn-outline-dark", "mx-3", "mb-3")
        botonAmpliarInfo.textContent = "Ver producto"

        tarjeta.appendChild(imagen)
        tarjeta.appendChild(separador)
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(precio)
        tarjeta.appendChild(botonAmpliarInfo)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)

    })