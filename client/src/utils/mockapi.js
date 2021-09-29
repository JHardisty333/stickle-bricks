export const vehicleApiCall = (make, model, year, dValue, dUnit) => {
    const url = '/api/carbon/vehicle?make=' + make + '&model=' + model + '&year=' + year + '&dValue=' + dValue + '&dUnit=' + dUnit;
    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const flightApiCall = (arrival, depart, roundTrip) => {
    const url = '/api/carbon/flight?arrival=' + arrival + '&depart=' + depart + '&roundTrip=' + roundTrip;
    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export const shippingApiCall = (weight, weightUnit, distance, distanceUnit, shippingMethod) => {
    const url = '/api/carbon/shipping?weight=' + weight + '&distance=' + distance + '&dUnit=' + distanceUnit + '&wUnit=' + weightUnit + '&method=' + shippingMethod;
    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export const newsApiCall = () => {
    return fetch('/api/article/news', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

}