<template>
  <div class="circular-progress" :style="`--circle-size: ${size}px`">
    <svg
      :width="size"
      :height="size"
      xmlns="http://www.w3.org/2000/svg"
      style="transform: rotate(-90deg)"
    >
      <circle
        :cx="radius"
        :cy="radius"
        :r="radius - strokeWidth / 2"
        stroke="#FFE000"
        :stroke-width="strokeWidth"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="circumference * (1 - parseInt(percentage) / 100)"
        fill="none"
      />
      <text
        :x="radius"
        :y="radius + 9"
        text-anchor="middle"
        dominant-baseline="baseline"
        :font-size="fontSize"
        font-weight="700"
        :transform="`rotate(90, ${radius}, ${radius})`"
      >
        <tspan>{{ percentage }}</tspan>
        <tspan class="symbol" :font-size="symbolSize">%</tspan>
      </text>
    </svg>
    <div class="blur-bg" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  percentage: string;
  isSmall?: boolean;
}>();

const size = ref(
  parseInt(
    getComputedStyle(document.documentElement).getPropertyValue("--circle-size")
  )
);
if (props.isSmall) {
  size.value = 98;
}
const fontSize = ref(size.value > 100 ? "24px" : "20px");
const symbolSize = ref(size.value > 100 ? "14px" : "12px");
const strokeWidth = size.value > 100 ? 8 : 6;

const radius = ref(size.value / 2);
const circumference = 2 * Math.PI * (radius.value - strokeWidth / 2);
</script>

<style scoped lang="scss">
.circular-progress {
  position: relative;
  text-align: center;

  svg {
    text {
      fill: #ffe000;
      font-family: "Montserrat", sans-serif;
      font-weight: 700;

      .symbol {
        fill: #fff;
      }
    }
  }

  .blur-bg {
    width: var(--circle-size);
    height: var(--circle-size);
    position: absolute;
    inset: 0;
    z-index: -1;
    background: #00000080;
    backdrop-filter: blur(2px);
    border-radius: 50%;
    border: calc(var(--circle-size) * 0.061) solid #ffffff45;
  }
}
</style>

<style>
:root {
  --circle-size: 140px;
}

@media screen and (max-width: 768px) {
  :root {
    --circle-size: 98px;
  }
}
</style>
