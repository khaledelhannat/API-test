const { getAllLaunches, addNewLaunch, existsLaunchWithID, abortLaunchByID } = require('../../models/launches.model');

function httpGetAllLaunches(req, res) {
    return res.status(200).json(getAllLaunches());
}

function httpaddNewLaunch(req, res) {
    const launch = req.body;
    if (!launch.mission || !launch.rocket || !launch.launchDate || !launch.target) {
        return res.status(400).json({
            error: 'Missing required launch property',
        });
    }

    launch.launchDate = new Date(launch.launchDate);
    if (isNaN(launch.launchDate)) {
        return res.status(400).json({
            error: 'Invalid launch date',
        });
    }

    addNewLaunch(launch);
    return res.status(201).json(launch);
}

function httpAbortLaunch(req, res) {
    const launchID = +req.params.id;

    // if launch doesn't exist
    if (!existsLaunchWithID(launchID)) {
        return res.status(404).json({
            error: 'Launch not found',
        });
    }

    // if launch does exit
    const aborted = abortLaunchByID(launchID);
    return res.status(200).json(aborted);
}


module.exports = {
    httpGetAllLaunches,
    httpaddNewLaunch,
    httpAbortLaunch,
}