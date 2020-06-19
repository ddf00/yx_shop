<template>
  <div class="shopCarContainer">
      <div class="header">
        <span class="title">购物车</span>
        <div class="right">
          <div>领券</div>
          <span>编辑</span>
        </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
     name: 'ShopCar'
  }
</script>

<style lang="less" scoped>
.shopCarContainer {
  .header {
    width: 100%;
    height: 88px;
    background-color: #ccc;
    padding: 0 30px;
    line-height: 88px;
    .title {
      font-size: 36px;
      float: left;
    }
    .right {
      float: right;
      margin-right: 50px;
      display: flex;
    }
  }
}
 
</style>
