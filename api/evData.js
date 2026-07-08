"use strict";

async function loadEVData() {

    const devices = await getDevices();

    return {

        devices,

        statusData: [],

        diagnostics: [],

        logRecords: []

    };

}