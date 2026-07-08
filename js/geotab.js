"use strict";

let geotabApi = null;
let geotabState = null;

geotab.addin.jac_ev_monitor = function () {

    return {

        initialize(api, state, callback) {

            console.log("JAC EV Monitor - Initialize");

            geotabApi = api;
            geotabState = state;

            if (callback) {
                callback();
            }
        },

        focus() {

            console.log("JAC EV Monitor - Focus");

            loadDashboard();

        },

        blur() {

            console.log("JAC EV Monitor - Blur");

        }

    };

};

function getApi() {

    return geotabApi;

}

function getState() {

    return geotabState;

}