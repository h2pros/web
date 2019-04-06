import { seriesAvg } from './waterStats'

var coldUser1 = [8, 34, 0, 4, 5, 15, 9];
var hotUser1 = [0, 10, 0, 0, 0, 5, 21];
var totalUser1 = coldUser1.map(function (num, idx) {
  return num + hotUser1[idx];
});

var coldUser2 = [4, 10, 13, 20, 4, 3, 0];
var hotUser2 = [0, 0, 0, 20, 13, 10, 5];
var totalUser2 = coldUser2.map(function (num, idx) {
  return num + hotUser2[idx];
});

var totalUsage = totalUser1.map(function (num, idx) {
  return num + totalUser2[idx];
});
var totalCold = coldUser1.map(function (num, idx) {
  return num + coldUser2[idx];
});
var totalHot = hotUser1.map(function (num, idx) {
  return num + hotUser2[idx];
});

var redRGB = 'rgba(252, 37, 37, 0.45)';
var greenRGB = 'rgba(5, 203, 7, 0.3)';
var blueRGB = 'rgba(5, 150, 245, 0.6)';
var redlineRGB = 'rgba(252, 37, 37, 0.7)';
var bluelineRGB = 'rgba(5, 203, 225, 1)';


export function getAllTemps(users){
    var list = []
    if(users == 'all'){
      list.push({
        label: 'Total Hot Usage',
        backgroundColor: greenRGB,
        data: totalHot
      })
    }
    if(users == 'all' || users == '1'){
      list.push(
        {
          label: 'Hot + Cold User 1',
          backgroundColor: redRGB,
          data: totalUser1
        },
        {
          label: 'User 1 avg',
          borderColor: redlineRGB,
          data: seriesAvg(totalUser1)
        },
      )
    }
    if(users == 'all' || users == '2'){
      list.push(
        {
          label: 'Hot + Cold User 2',
          backgroundColor: blueRGB,
          data: totalUser2
        },
        {
          label: 'User 2 avg',
          borderColor: bluelineRGB,
          data: seriesAvg(totalUser2)
        },
      )
    }
    return list
}

export function getColdTemps(users){
  var list = []
  if(users == 'all'){
    list.push({
      label: 'Total Cold Usage',
      backgroundColor: greenRGB,
      data: totalCold
    })
  }
  if(users == 'all' || users == '1'){
    list.push(
      {
        label: 'Cold User 1',
        backgroundColor: redRGB,
        data: coldUser1
      },
      {
        label: 'User 1 avg',
        borderColor: redlineRGB,
        data: seriesAvg(coldUser1)
      },
    )
  }
  if(users == 'all' || users == '2'){
    list.push(
      {
        label: 'Cold User 2',
        backgroundColor: blueRGB,
        data: coldUser2
      },
      {
        label: 'User 2 avg',
        borderColor: bluelineRGB,
        data: seriesAvg(coldUser2)
      },
    )
  }
  return list
}


export function getHotTemps(users){
  var list = []
  if(users == 'all'){
    list.push({
      label: 'Total Hot Usage',
      backgroundColor: greenRGB,
      data: totalHot
    })
  }
  if(users == 'all' || users == '1'){
    list.push(
      {
        label: 'Hot User 1',
        backgroundColor: redRGB,
        data: hotUser1
      },
      {
        label: 'User 1 avg',
        borderColor: redlineRGB,
        data: seriesAvg(hotUser1)
      },
    )
  }
  if(users == 'all' || users == '2'){
    list.push(
      {
        label: 'Hot User 2',
        backgroundColor: blueRGB,
        data: hotUser2
      },
      {
        label: 'User 2 avg',
        borderColor: bluelineRGB,
        data: seriesAvg(hotUser2)
      },
    )
  }
  return list
}