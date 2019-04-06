<template>
  <b-container>
    <line-chart
      v-if="advanced && loaded"
      :chartData="chartdataAdvanced"
      :options="optionsAdvanced"
      :key="componentKey"/>

    <line-chart
    v-if="!advanced && loaded"
    :chartData="chartdataCumulative"
    :options="optionsCumulative"
    :key="componentKey"/>
  </b-container>
</template>

<script>
import LineChart from './Chart.vue'
import { seriesAvg, cumulativeDecrement, makeChartData } from '../js/waterStats'
import { getAllTemps, getColdTemps, getHotTemps } from '../js/dataGetter'

var timeSeries = ["9:00", "10:00", "11:00", "12:00",  "13:00", "14:00", "15:00"];

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

var cumulativeSeries = cumulativeDecrement(totalUsage, 150);

export default {
  name: 'LineChartContainer',
  components: { LineChart },
  props: {
    temp: {
      default: 'all'
    },
  },
  data: () => ({
    componentKey: 0,
    loaded: true,
    advanced: true,
    chartdataAdvanced: {
      labels: timeSeries,
      datasets: getAllTemps()
    },
    optionsAdvanced: {maintainAspectRatio: false},

    chartdataCumulative: {
      labels: timeSeries,
      datasets: [
        {
          label: 'Water usage',
          backgroundColor: 'rgba(252, 37, 37, 0.5)',
          data: cumulativeSeries
        }
      ]
    },
    optionsCumulative: {maintainAspectRatio: false},
  }),
  watch: {
    temp: function(newVar, oldVar){
      this.componentKey += 1;

      if(this.temp == 'all'){
        this.chartdataAdvanced['datasets'] = getAllTemps();
      }
      else if(this.temp == 'cold'){
        this.chartdataAdvanced['datasets'] = getColdTemps();
      }
      else if(this.temp == 'hot'){
        this.chartdataAdvanced['datasets'] = getHotTemps();
      }
      this.loaded = true
    }
  },
}
</script>