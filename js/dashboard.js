"use strict";

function renderVehicleTable(devices) {

    const tbody =
        document.querySelector("#vehicleTable tbody");

    tbody.innerHTML = "";

    if (!devices.length) {

        tbody.innerHTML = `
            <tr>
                <td colspan="13">
                    No Data
                </td>
            </tr>
        `;

        return;

    }

}