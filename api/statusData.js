"use strict";

async function getStatusData() {

    return await apiCall("Get", {

        typeName: "StatusData",

        resultsLimit: 5000

    });

}