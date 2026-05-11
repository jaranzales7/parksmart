let vehiculos = [];


function registrarVehiculo(datos){

    let vehiculo;


    switch(datos.tipoVehiculo){

        case "M":

            vehiculo = new Moto(

                datos.placa,

                datos.propietario,

                datos.horas

            );

        break;


        case "C":

            vehiculo = new Carro(

                datos.placa,

                datos.propietario,

                datos.horas

            );

        break;


        case "K":

            vehiculo = new Camioneta(

                datos.placa,

                datos.propietario,

                datos.horas

            );

        break;


        case "B":

            vehiculo = new Bus(

                datos.placa,

                datos.propietario,

                datos.horas

            );

        break;

    }


    vehiculos.push(vehiculo);


    return vehiculos;

}