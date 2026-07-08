"use strict";

function apiCall(method, params = {}) {

    const api = getApi();

    if (!api) {
        return Promise.reject(new Error("Geotab API belum diinisialisasi."));
    }

    return new Promise((resolve, reject) => {

        api.call(
            method,
            params,
            result => resolve(result),
            error => reject(error)
        );

    });

}

function apiMultiCall(calls) {

    const api = getApi();

    if (!api) {
        return Promise.reject(new Error("Geotab API belum diinisialisasi."));
    }

    return new Promise((resolve, reject) => {

        api.multiCall(
            calls,
            result => resolve(result),
            error => reject(error)
        );

    });

}