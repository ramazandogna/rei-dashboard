<template>
  <ChartLineWithLineChart :class="height" :data="data" :options="options" />
</template>

<script lang="ts">
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import ChartLineWithLineChart from './ChartLineWithLineChart.ts'
import * as chartConfig from './chartConfig.ts'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export default {
  components: {
    ChartLineWithLineChart
  },
  props: {
    height: {
      type: String,
      default: 'h-450px' // Varsayılan yükseklik
    },
    propKey: String
  },
  data() {
    return chartConfig
  }
}
</script>
