function mostrarVehiculos(vehiculos){

    const tabla = document.getElementById(
        "tablaVehiculos"
    );

    tabla.innerHTML = "";

    let totalDia = 0;


    vehiculos.forEach((vehiculo)=>{

        const total =
            vehiculo.calcularTarifaTotal();

        totalDia += total;


        tabla.innerHTML += `

            <tr>

                <td>${vehiculo.placa}</td>

                <td>${vehiculo.propietario}</td>

                <td>${vehiculo.tipoVehiculo}</td>

                <td>${vehiculo.horasEstacionado}</td>

                <td>$${total}</td>

            </tr>

        `;

    });


    document.getElementById(
        "recaudoTotal"
    ).textContent =

    `Total Recaudado: $${totalDia}`;

}