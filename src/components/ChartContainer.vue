<template>
  <b-container>
    <line-chart
      v-if="advanced && loaded"
      :chartData="chartdataAdvanced"
      :options="optionsAdvanced"
      :key="componentKey"/>

    <!-- <line-chart
    v-if="!advanced && loaded"
    :chartData="chartdataCumulative"
    :options="optionsCumulative"
    :key="componentKey"/> -->
  </b-container>
</template>

<script>
import LineChart from './Chart.vue'
import { seriesAvg, cumulativeDecrement, makeChartData } from '../js/waterStats'
import { getAllTemps, getColdTemps, getHotTemps, totalUsage} from '../js/dataGetter'

var timeSeries = ["6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12AM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM", "10PM", "11PM"];
var timeSeriesDay = ["6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12AM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM", "10PM", "11PM"];
var timeSeriesWeek = ["Mon AM", "Mon PM", "Tues AM", "Tues PM", "Weds AM", "Weds PM", "Thurs AM", "Thurs PM", "Fri AM", "Fri PM", "Sat AM", "Sat PM", "Sun AM", "Sun PM",]
var timeSeriesMonth = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th", "13th", "14th", "15th", "16th", "17th", "18th", "19th", "20th"]

// var cumulativeSeries = cumulativeDecrement(totalUsage, 150);

export default {
  name: 'LineChartContainer',
  components: { LineChart },
  props: {
    temp: {
      default: 'all'
    },
    users: {
      default: 'all'
    },
    timescale: {
      default: 'all'
    },
  },
  data: () => ({
    componentKey: 0,
    loaded: true,
    advanced: true,
    // timeSeries: timeSeriesDay,
    chartdataAdvanced: {
      labels: timeSeries,
      datasets: getAllTemps('all', 'day')
    },
    optionsAdvanced: {
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
            display: true,
            ticks: {
                suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
            }
        }]
    }
    },

    /*chartdataCumulative: {
      labels: timeSeries,
      datasets: [
        {
          label: 'Water usage',
          backgroundColor: 'rgba(252, 37, 37, 0.5)',
          data: cumulativeSeries
        }
      ]
    },
    optionsCumulative: {maintainAspectRatio: false},*/
  }),
  watch: {
    temp: function(newVar, oldVar){
      this.refreshGraph();
    },
    users: function(newVar, oldVar){
      this.refreshGraph();
    },
    timescale: function(newVar, oldVar){
      this.refreshGraph();
    }
  },
  methods: {
    refreshGraph: function(){
      this.componentKey += 1;

      this.updateAxisLabels();
      
      if(this.temp == 'all'){
        this.chartdataAdvanced['datasets'] = getAllTemps(this.users, this.timescale);
      }
      else if(this.temp == 'cold'){
        this.chartdataAdvanced['datasets'] = getColdTemps(this.users, this.timescale);
      }
      else if(this.temp == 'hot'){
        this.chartdataAdvanced['datasets'] = getHotTemps(this.users, this.timescale);
      }
      this.loaded = true
    },
    updateAxisLabels: function(){
      if(this.timescale == 'day') {
        this.chartdataAdvanced['labels'] = timeSeriesDay;
      }else if(this.timescale == 'week') {
        this.chartdataAdvanced['labels'] = timeSeriesWeek;
      }else {
        this.chartdataAdvanced['labels'] = timeSeriesMonth;
      }
    }
  },
  mounted(){
    this.refreshGraph();
  },
}
</script>