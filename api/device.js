async function getDevices() {

    return await apiCall("Get", {

        typeName: "Device",

        resultsLimit: 500

    });

}