<template>
  <div class="list-page" >
    <el-transfer v-model="value" :data="data" />
  </div>
</template>

<script setup lang="ts">

import { ref } from 'vue'

interface Option {
  key: number
  label: string
  disabled: boolean
}

const generateData = () => {
  const data: Option[] = []
  for (let i = 1; i <= 15; i++) {
    data.push({
      key: i,
      label: `Option ${i}`,
      disabled: i % 4 === 0,
    })
  }
  return data
}

const data = generateData()
console.log('data: ',data);

const value = ref([])
</script>

<style scoped>
/* @import "./list-page.scss"; */

.list-page {
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
