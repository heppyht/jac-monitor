"use strict";

async function loadEVData() {

    const [

        devices,

        statusData,

        diagnostics,

        logRecords

    ] = await apiMultiCall([

        [

            "Get",

            {

                typeName: "Device"

            }

        ],

        [

            "Get",

            {

                typeName: "StatusData"

            }

        ],

        [

            "Get",

            {

                typeName: "Diagnostic"

            }

        ],

        [

            "Get",

            {

                typeName: "LogRecord"

            }

        ]

    ]);

    return {

        devices,

        statusData,

        diagnostics,

        logRecords

    };

}