<template>
  <div ref="containDivEl" class="m-auto">
    <svg ref="chartSvgEl" :width="width" :height="height">
      <g
        class="chart graphic"
        v-for="node in chartLayout.children"
        :key="node.data.id"
        :style="{ transform: `translate(${node.x}px, ${node.y}px)` }"
      >
        <circle class="chart g__bubble" :r="node.r" :fill="useHashColor(node.data.name)" />
        <text class="chart g__label">{{ node.data.name }}</text>
      </g>
    </svg>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { hierarchy, pack } from 'd3-hierarchy';

//import useChart from '@/use/chart';
import { useHashColor } from '@/useables/useHashColor';

export default defineComponent({
  name: 'BubbleChart',
  props: {
    data: {
      type: Object,
      required: true,
    },
    width: {
      type: Number,
      default: 500,
    },
    height: {
      type: Number,
      default: 500,
    },
    packed: {
      type: Boolean,
      default: false,
    },
  },
  setup: (props) => {
    const containDivEl = ref(null);
    const chartSvgEl = ref(null); // <SVGSVGElement>

    const chartLayout = computed(() => {
      // Generate a D3 hierarchy
      const rootHierarchy = hierarchy(props.data)
        .sum((d) => d.size)
        .sort((a, b) => {
          return b.value! - a.value!;
        });

      // Pack the circles inside the viewbox
      return pack().size([props.height, props.width]).padding(10)(rootHierarchy);
    });

    return { containDivEl, chartSvgEl, chartLayout, useHashColor };
  },
});
</script>

<style scoped>
.chart.graphic {
  text-anchor: middle;
}
.g__label {
  fill: #fff;
  font-weight: bold;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}
</style>
