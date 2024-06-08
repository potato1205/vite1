<template>
  <div class="list-page">
    <Transfer />
  </div>
  <div class="list-dialog">
    <Dialog :dialogObj />
  </div>
</template>

<script setup lang="ts">
import Transfer from '../components/Transfer.vue';
import Dialog from '../components/Dialog.vue';
import { reactive } from 'vue';

const btnArr = [
  {
    name: '提交1',
    type: 1,
    click: () => {
      console.log('提交1')
    }
  },
  {
    name: '提交2',
    type: 1,
    click: () => {
      console.log('提交2')
    }
  },
  {
    name: '取消1',
    type: 2,
    click: () => {
      console.log('取消1')
    }
  },
  {
    name: '取消2',
    type: 2,
    click: () => {
      console.log('取消2')
    }
  }
];

const dialogObj = reactive({
  btnArr: btnArr,
  title: 'lhy'
})

</script>

<style scoped>
@import "./list-page.scss";
</style>
