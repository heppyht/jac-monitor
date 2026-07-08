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