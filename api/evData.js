"use strict";

async function loadEVData() {

    console.log("========== LOAD EV DATA ==========");

    // Device
    const devices = await getDevices();
    console.log("Devices :", devices.length);

    // Diagnostic
    const diagnostics = await getDiagnostics();
    console.log("Diagnostics :", diagnostics.length);

    // StatusData
    const statusData = await getStatusData();
    console.log("StatusData :", statusData.length);

    console.table(devices.slice(0,5));

    console.table(diagnostics.slice(0,5));

    console.table(statusData.slice(0,5));

    return {
        devices,
        diagnostics,
        statusData
    };

}
