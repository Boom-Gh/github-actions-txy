<template>
  <a-switch v-model:checked="theme" checked-value="dark" un-checked-value="light">
    <template #checkedChildren><dayIcon style="width: 12px;height: 12px;vertical-align: -0.11em;" fill="#ffffff" /></template>
    <template #unCheckedChildren><darkIcon style="width: 12px;height: 12px;vertical-align: -0.11em;" fill="#ffd93b" /></template>
  </a-switch>
</template>

<script setup lang="ts">
import dayIcon from '@/assets/svg/day.svg?component'
import darkIcon from '@/assets/svg/dark.svg?component'
import useTheme from '@/hooks/useTheme'
const {theme} = useTheme()
</script>

<style lang="scss" scoped></style>
