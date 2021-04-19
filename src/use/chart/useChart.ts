import { onMounted, onUnmounted, Ref } from 'vue';
import { select, hierarchy, pack } from 'd3';

export function useChart(chartEl: Ref<SVGSVGElement>, data: any, width = 500, height = 500) {
  const chart = chartEl.value;

  function drawChart() {
    const svg = select(chart)
        .append('g').style('transform', `translate(0px, 0px)`);

    const rootHierarchy = hierarchy(data)
      .sum((d) => d.size)
      .sort((a, b) => {
        return b.value! - a.value!;
      });

    return pack().size([width, height]).padding(10)(rootHierarchy);
  }

  onMounted(() => {
    window.addEventListener('resize', drawChart);
    drawChart();
  });

  onUnmounted(() => {
    window.removeEventListener('resize', drawChart);
  });

  return {
    chart,
  };
}
