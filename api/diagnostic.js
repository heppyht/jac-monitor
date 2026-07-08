"use strict";

async function getDiagnostics() {

    return await apiCall("Get", {

        typeName: "Diagnostic"

    });

}