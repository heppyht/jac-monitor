"use strict";

async function loadDashboard() {

    console.log("Loading Dashboard...");

    updateHeader();

}

function updateHeader() {

    const api = getApi();

    if (!api) return;

    const session = api.getSession();

    document.getElementById("databaseName").textContent =
        session.database;

    document.getElementById("lastUpdate").textContent =
        new Date().toLocaleString();

}