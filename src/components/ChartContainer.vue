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
import { getAllTemps, getColdTemps, getHotTemps, totalUsage} from '../js/dataGetter'

var timeSeries = ["9:00", "10:00", "11:00", "12:00",  "13:00", "14:00", "15:00"];


var cumulativeSeries = cumulativeDecrement(totalUsage, 150);

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
      this.refreshGraph();
    },
    users: function(newVar, oldVar){
      this.refreshGraph();
    }
  },
  mounted(){
    this.refreshGraph();
  },
  methods: {
    refreshGraph: function(){
      this.componentKey += 1;

      if(this.temp == 'all'){
        this.chartdataAdvanced['datasets'] = getAllTemps(this.users);
      }
      else if(this.temp == 'cold'){
        this.chartdataAdvanced['datasets'] = getColdTemps(this.users);
      }
      else if(this.temp == 'hot'){
        this.chartdataAdvanced['datasets'] = getHotTemps(this.users);
      }
      this.loaded = true
    }
  }
}
</script>