<template>
  <div class="layout-page">
    <div class="layout-flex">
      <div class="color-box"></div>
      <div class="color-box"></div>
      <div class="color-box"></div>
      <div class="color-box"></div>
      <div class="color-box"></div>
      <div class="color-box"></div>
    </div>
    <div class="layout-flex-two">
      <div class="layout-flex-two-left"></div>
      <div class="layout-flex-two-left"></div>
      <div class="layout-flex-two-right"></div>
    </div>
    <div class="layout-grid">
      <div class="layout-grid-box">1</div>
      <div class="layout-grid-box">2</div>
      <div class="layout-grid-box">3</div>
      <div class="layout-grid-box">4</div>
      <div class="layout-grid-box">5</div>
      <div class="layout-grid-box">6</div>
      <div class="layout-grid-box">7</div>
      <div class="layout-grid-box">8</div>
      <div class="layout-grid-box">9</div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.layout-flex {
  /* 设置了flex之后，内部元素默认为inline */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
}

.color-box {
  width: 100px;
  height: 100px;
  background-color: #f0f0f0;
}

.layout-flex-two {
  display: flex;
  height: 200px;

  .layout-flex-two-left {
    flex-shrink: 0;
    width: 200px;
    background-color: red;

    &:nth-child(2) {
      background-color: green
    }
  }

  .layout-flex-two-right {
    flex-grow: 1;
    background-color: yellow;
  }
}

.color-box:nth-child(odd) {
  background-color: blue;
}

.color-box:nth-child(even) {
  background-color: yellow;
}

// 网格布局
.layout-grid {
  display: grid;
  justify-content: stretch ;
  grid-template-columns: 100px auto auto;
  grid-template-rows: 100px 100px 100px;
  // height: 800px;

  .layout-grid-box {}

  .layout-grid-box:nth-child(odd) {
    background-color: blue;
  }

  .layout-grid-box:nth-child(even) {
    background-color: yellow;
  }

}
</style>