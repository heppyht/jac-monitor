"use strict";

async function getLogRecords() {

    return await apiCall("Get", {

        typeName: "LogRecord",

        resultsLimit: 1000

    });

}