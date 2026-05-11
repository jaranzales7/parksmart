const formulario = document.getElementById(
    "formVehiculo"
);


formulario.addEventListener(
    "submit",
    (e)=>{

        e.preventDefault();


        const datos = {

            placa: document.getElementById(
                "placa"
            ).value,


            propietario: document.getElementById(
                "propietario"
            ).value,


            horas: Number(

                document.getElementById(
                    "horas"
                ).value

            ),


            tipoVehiculo: document.getElementById(
                "tipoVehiculo"
            ).value

        };


        const listaVehiculos =
            registrarVehiculo(datos);


        mostrarVehiculos(listaVehiculos);


        formulario.reset();

    }
);