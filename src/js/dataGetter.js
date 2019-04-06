import { seriesAvg } from './waterStats'

var coldUser1 = [8, 34, 0, 4, 5, 15, 9];
var hotUser1 = [0, 10, 0, 0, 0, 5, 21];
var totalUser1 = [8, 44, 0, 4, 5, 20, 30];
var user1Avg = seriesAvg(totalUser1);

var coldUser2 = [4, 10, 13, 20, 4, 3, 0];
var hotUser2 = [0, 0, 0, 20, 13, 10, 5];
var totalUser2 = [4, 10, 13, 40, 17, 13, 5];
var user2Avg = seriesAvg(totalUser2);

var totalUsage = totalUser1.map(function (num, idx) {
  return num + totalUser2[idx];
});
var totalCold = coldUser1.map(function (num, idx) {
  return num + coldUser2[idx];
});
var totalHot = hotUser1.map(function (num, idx) {
  return num + hotUser2[idx];
});

export function getAllTemps(){
    return [
        {
          label: 'Hot + Cold User 1',
          backgroundColor: 'rgba(252, 37, 37, 0.5)',
          data: totalUser1
        },
        {
          label: 'User 1 avg',
          borderColor: 'rgba(252, 37, 37, 0.7)',
          data: user1Avg
        },
        {
          label: 'Hot + Cold User 2',
          backgroundColor: 'rgba(5, 203, 225, 0.5)',
          data: totalUser2
        },
        {
          label: 'User 2 avg',
          borderColor: 'rgba(5, 203, 225, 1)',
          data: user2Avg
        },
        {
          label: 'Total Usage',
          backgroundColor: 'rgba(5, 203, 7, 0.5)',
          data: totalUsage
        }
    ]
}

export function getColdTemps(){
    return [
        {
          label: 'Cold User 1',
          backgroundColor: 'rgba(252, 37, 37, 0.5)',
          data: coldUser1
        },
        {
          label: 'User 1 avg',
          borderColor: 'rgba(252, 37, 37, 0.7)',
          data: seriesAvg(coldUser1)
        },
        {
          label: 'Cold User 2',
          backgroundColor: 'rgba(5, 203, 225, 0.5)',
          data: coldUser2
        },
        {
          label: 'User 2 avg',
          borderColor: 'rgba(5, 203, 225, 1)',
          data: seriesAvg(coldUser2)
        },
        {
          label: 'Total Usage',
          backgroundColor: 'rgba(5, 203, 7, 0.5)',
          data: totalCold
        }
    ]
}

export function getHotTemps(){
    return [
        {
          label: 'Hot User 1',
          backgroundColor: 'rgba(252, 37, 37, 0.5)',
          data: hotUser1
        },
        {
          label: 'User 1 avg',
          borderColor: 'rgba(252, 37, 37, 0.7)',
          data: seriesAvg(hotUser1)
        },
        {
          label: 'Hot User 2',
          backgroundColor: 'rgba(5, 203, 225, 0.5)',
          data: hotUser2
        },
        {
          label: 'User 2 avg',
          borderColor: 'rgba(5, 203, 225, 1)',
          data: seriesAvg(hotUser2)
        },
        {
          label: 'Total Usage',
          backgroundColor: 'rgba(5, 203, 7, 0.5)',
          data: totalCold
        }
    ]
}