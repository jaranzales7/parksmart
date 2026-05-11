class Moto extends Vehiculo {

    constructor(
        placa,
        propietario,
        horasEstacionado
    ){

        super(
            placa,
            propietario,
            horasEstacionado,
            "M"
        );

    }

    calcularTarifaTotal(){

        return (
            this.tarifaBase *
            this.horasEstacionado
        ) + 2000;

    }

}