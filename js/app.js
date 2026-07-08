"use strict";

async function loadDashboard() {

    try {

        showLoading(true);

        const data = await loadEVData();

        console.log(data);

        renderDashboard(data);

    }
    catch (err) {

        console.error(err);

    }
    finally {

        showLoading(false);

    }

}

function showLoading(show) {
    console.log("Loading:", show);
}

async function loadEVData() {
    return [];
}

function renderDashboard(data) {
    console.log("Render Dashboard", data);
}