class Bus extends Vehiculo {

    constructor(
        placa,
        propietario,
        horasEstacionado
    ){

        super(
            placa,
            propietario,
            horasEstacionado,
            "B"
        );

    }

    calcularTarifaTotal(){

        return (
            this.tarifaBase *
            this.horasEstacionado
        ) + 15000;

    }

}