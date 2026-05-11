class Camioneta extends Vehiculo {

    constructor(
        placa,
        propietario,
        horasEstacionado
    ){

        super(
            placa,
            propietario,
            horasEstacionado,
            "K"
        );

    }

    calcularTarifaTotal(){

        return (
            this.tarifaBase *
            this.horasEstacionado
        ) + 8000;

    }

}