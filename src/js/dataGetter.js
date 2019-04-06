import { seriesAvg } from './waterStats'

// Timescale of 'day', 'week' or 'month'
// Returns user1, user2
function getColdData(timeScale){
  if(timeScale == 'day'){
    return [
      ['0.002671996', '0.000730921', '0.001536414', '0.001141125', '0.000533657', '0.001387767', '0.003961886', '0.006568469', '0.000590322', '0.002676955', '0.004567613', '0.00343688', '0.003461907', '0.003589372', '0.001843618', '0.001936159', '0.000484001', '0.002662917'],
      ['0.002919806', '0.000766946', '0.001887048', '0.002363532', '0.000518166', '0.002278373', '0.009139469', '0.004066462', '0.000547672', '0.002710968', '0.004758276', '0.003529656', '0.003672936', '0.016739001', '0.002711308', '0.001971842', '0.000507848', '0.002761515']
    ]
  }else if(timeScale == 'week'){
    return [
      ['0.3', '0.34', '0.3', '0.47', '0.2', '0.14', '0.5', '0.15', '0.2', '0.35', '0.4', '0.5', '0.7', '0.7'],
      ['0.02', '0.02', '0.05', '0.1', '0.2', '0.33', '0.15', '0.265', '0.2', '0.4', '0.4', '0.2', '0.15', '0.2']
    ]
  }else{

  }
}

function getHotData(timeScale){
  if(timeScale == 'day'){
    return [
      ['0.001979031', '0.004051867', '0.012565902', '0.004106707', '0.004648308', '0.005029722', '0.001524237', '0.001718383', '0.004888755', '0.002112879', '0.000000000', '0.001403873', '0.001163414', '0.001398826', '0.006943247', '0.00309207', '0.0044412', '0.002097352'],
      ['0.002162573', '0.004251569', '0.014628664', '0.008505931', '0.004513378', '0.008257571', '0.003516183', '0.001063831', '0.004535543', '0.002139725', '0.00000000', '0.00144177', '0.001234333', '0.006523411', '0.010211055', '0.003149056', '0.004660024', '0.002175009']
    ]
  }else if(timeScale == 'week'){
    return [
      ['0.6', '0.4', '0.5', '0.7', '0.4', '0.65', '0.5', '0.65', '0.5', '0.3', '0.4', '0.5', '0.7', '0.7'],
      ['0.2', '0.3', '0.15', '0.2', '0.2', '0.3', '0.15', '0.265', '0.2', '0.4', '0.2', '0.5', '0.15', '0.2']
    ]
  }else{

  }
}

// returns cold
function getData(timescale){
  var [coldUser1, coldUser2] = getColdData(timescale)
  var [hotUser1, hotUser2] = getHotData(timescale)

  var totalUser1 = coldUser1.map(function (num, idx) { return parseFloat(num) + parseFloat(hotUser1[idx]) });
  var totalUser2 = coldUser2.map(function (num, idx) { return parseFloat(num) + parseFloat(hotUser2[idx]) });
  var totalCold = coldUser1.map(function (num, idx) { return parseFloat(num) + parseFloat(coldUser2[idx]) });
  var totalHot = hotUser1.map(function (num, idx) { return parseFloat(num) + parseFloat(hotUser2[idx]) });
  var totalUsage = totalUser1.map(function (num, idx) { return parseFloat(num) + parseFloat(totalUser2[idx]) });
  

  return [coldUser1, hotUser1, totalUser1, coldUser2, hotUser2, totalUser2, totalCold, totalHot, totalUsage]
}

// var coldUser1 = [8, 34, 0, 4, 5, 15, 9];
// var coldUser2 = [4, 10, 13, 20, 4, 3, 0];
var [coldUser1, coldUser2] = getColdData('day')
// var hotUser1 = [0, 10, 0, 0, 0, 5, 21];
// var hotUser2 = [0, 0, 0, 20, 13, 10, 5];
var [hotUser1, hotUser2] = getHotData('day')


var redRGB = 'rgba(252, 50, -250, 0.5)';
var greenRGB = 'rgba(5, 203, 7, 0.3)';
var blueRGB = 'rgba(5, 50, 245, 0.6)';
var redlineRGB = 'rgba(252, 37, 37, 0.7)';
var bluelineRGB = 'rgba(5, 203, 225, 1)';


// export const totalUsage = totalUser1.map(function (num, idx) {
//   return num + totalUser2[idx];
// });


export function getAllTemps(users, timescale){
    var [coldUser1, hotUser1, totalUser1, coldUser2, hotUser2, totalUser2, totalCold, totalHot, totalUsage] = getData(timescale)
    var list = []
    if(users == 'all'){
      list.push({
        label: 'Total Hot Usage',
        backgroundColor: greenRGB,
        data: totalUsage
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

export function getColdTemps(users, timescale){
  var [coldUser1, hotUser1, totalUser1, coldUser2, hotUser2, totalUser2, totalCold, totalHot] = getData(timescale)
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

export function getHotTemps(users, timescale){
  var [coldUser1, hotUser1, totalUser1, coldUser2, hotUser2, totalUser2, totalCold, totalHot] = getData(timescale)
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