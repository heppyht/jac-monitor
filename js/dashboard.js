"use strict";

function renderVehicleTable(devices) {

    const tbody =
        document.querySelector("#vehicleTable tbody");

    tbody.innerHTML = "";

    if (devices.length === 0) {

        tbody.innerHTML = `
        <tr>
            <td colspan="13">No Device Found</td>
        </tr>`;

        return;

    }

    devices.forEach((device, index) => {

        tbody.innerHTML += `

        <tr>

            <td>${index + 1}</td>

            <td>${device.name}</td>

            <td>${device.serialNumber ?? "-"}</td>

            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>

        </tr>`;

    });

}