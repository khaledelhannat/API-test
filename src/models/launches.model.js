const launches = new Map();

let latestFlightNumber = 11;

const launchData = [
    {
        flightNumber: 1,
        mission: 'Kepler Exploration X',
        rocket: 'Explorer IS1',
        launchDate: new Date('December 27, 2003'),
        target: 'Kepler-442 b',
        customers: ['NASA'],
        upcoming: false,
        success: false,
    },
    {
        flightNumber: 2,
        mission: 'Voyager 1',
        rocket: 'Saturn V',
        launchDate: new Date('July 15, 2005'),
        target: 'Kepler-1652 b',
        customers: ['PlanetLabs', 'NASA'],
        upcoming: false,
        success: false,
    },
    {
        flightNumber: 3,
        mission: 'Cassini-Huygens',
        rocket: 'Atlas V',
        launchDate: new Date('May 20, 2007'),
        target: 'Kepler-1410 b',
        customers: ['Space X', 'Boeing'],
        upcoming: false,
        success: false,
    },
    {
        flightNumber: 4,
        mission: 'Rosetta',
        rocket: 'Soyuz',
        launchDate: new Date('September 8, 2008'),
        target: 'Kepler-296 f',
        customers: ['Aurora Flight Services'],
        upcoming: false,
        success: false,
    },
    {
        flightNumber: 5,
        mission: 'Juno spacecraft',
        rocket: 'Space Shuttle',
        launchDate: new Date('March 12, 2011'),
        target: 'Kepler-296 e',
        customers: ['Maxar Technologies'],
        upcoming: false,
        success: false,
    },
    {
        flightNumber: 6,
        mission: 'Curiosity Rover',
        rocket: 'Delta II',
        launchDate: new Date('November 19, 2013'),
        target: 'Kepler-1649 b',
        customers: ['The Aerospace Corporation'],
        upcoming: false,
        success: false,
    },
    {
        flightNumber: 7,
        mission: 'New Horizons',
        rocket: 'Ariane 5',
        launchDate: new Date('April 7, 2015'),
        target: 'Kepler-62 f',
        customers: ['Honeybee Robotics'],
        upcoming: false,
        success: true,
    },
    {
        flightNumber: 8,
        mission: 'Cassini-Huygens',
        rocket: 'Long March',
        launchDate: new Date('October 3, 2017'),
        target: 'Kepler-452 b',
        customers: ['Ball Aerospace'],
        upcoming: false,
        success: false,
    },
    {
        flightNumber: 9,
        mission: 'Chandrayaan-2',
        rocket: 'H-IIA',
        launchDate: new Date('April 20, 2019'),
        target: 'Kepler-62 f',
        customers: ['Space X'],
        upcoming: false,
        success: false,
    },
    {
        flightNumber: 10,
        mission: 'Artemis Program',
        rocket: 'GSLV Mk III',
        launchDate: new Date('March 15, 2020'),
        target: 'Kepler-1410 b',
        customers: ['Honeybee Robotics'],
        upcoming: false,
        success: false,
    },
    {
        flightNumber: 11,
        mission: 'Kepler Exploration XI',
        rocket: 'Explorer IS17',
        launchDate: new Date('May  26, 2022'),
        target: 'Kepler-442 b',
        customers: ['Nasa', 'Space X'],
        upcoming: false,
        success: false,
    },
];

launchData.forEach((launch) => {
    launches.set(launch.flightNumber, launch)
})

function addNewLaunch(launch) {
    latestFlightNumber++;
    launches.set(latestFlightNumber, Object.assign(launch, {
        flightNumber: latestFlightNumber,
        customers: ['Space X', 'PlanetLabs'],
        upcoming: true,
        success: false,
    }))
}

function getAllLaunches() {
    return Array.from(launches.values())
}

function existsLaunchWithID(launchID) {
    return launches.has(launchID);
}

function abortLaunchByID(launchID) {
    const aborted = launches.get(launchID);
    aborted.upcoming = false;
    aborted.success = false;
    return aborted;
}

module.exports = {
    addNewLaunch,
    getAllLaunches,
    existsLaunchWithID,
    abortLaunchByID,
}