"use strict";

async function loadDashboard() {

    try {

        showLoading(true);

        const data = await loadEVData();

        console.log("EV DATA :", data);

        renderDashboard(data);

    }
    catch (err) {

        console.error(err);

    }
    finally {

        showLoading(false);

    }

}

function renderDashboard(data) {

    const session = getApi().getSession();

    document.getElementById("databaseName").textContent =
        session.database;

    document.getElementById("lastUpdate").textContent =
        new Date().toLocaleString();

    document.getElementById("totalDevice").textContent =
        data.devices.length;

    renderVehicleTable(data.devices);

}

function showLoading(show) {

    console.log(show ? "Loading..." : "Finished");

}