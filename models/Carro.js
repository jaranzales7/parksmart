class Carro extends Vehiculo {

    constructor(
        placa,
        propietario,
        horasEstacionado
    ){

        super(
            placa,
            propietario,
            horasEstacionado,
            "C"
        );

    }

    calcularTarifaTotal(){

        return (
            this.tarifaBase *
            this.horasEstacionado
        ) + 5000;

    }

}