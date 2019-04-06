// Return average of array as array of same length with repeated value
export function seriesAvg(series) {
    var sum = series.reduce(function(a, b) { return a + b; });
    var avg = sum / series.length;
    return Array(series.length).fill(avg);
}


// Return series of data points showing decrease from set limit.
// Series -> array 
// Limit -> number
// Returns -> array
export function cumulativeDecrement(series, limit){
    var val = limit;
    var returnArr = [];
    for(var i = 0; i < series.length; i++) {
        returnArr.push(val);
        val -= series[i];
    }
    return returnArr;
}

// Use API response to construct a JSON object suitable for chartjs to render
export function makeChartData(response) {
    var timeSeries = response.timeSeries;
    console.log(response)
    console.log(response['users'])
    // Initialise list of datasets
    // Hard code for two datasets for now!
    var datasets = [
        // Combined usage
        {
            label: 'Total Usage',
            backgroundColor: 'rgba(5, 203, 7, 0.5)',
            data: response['totalUsage']
        },
        // Individual usage
        {
            label: 'Hot + Cold User 1',
            backgroundColor: 'rgba(252, 37, 37, 0.5)',
            data: response['users'][0]['total']
        },
        {
            label: 'User 1 avg',
            borderColor: 'rgba(252, 37, 37, 0.7)',
            data: seriesAvg(response['users'][0]['total'])
        },
        {
            label: 'Hot + Cold User 2',
            backgroundColor: 'rgba(5, 203, 225, 0.5)',
            data: response['users'][1]['total']
        },
        {
            label: 'User 2 avg',
            borderColor: 'rgba(5, 203, 225, 1)',
            data: seriesAvg(response['users'][1]['total'])
        },
    ]

    return {
        labels: timeSeries,
        datasets: datasets
    }
}