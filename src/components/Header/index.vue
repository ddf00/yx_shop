<template>
    <div class="header">
        <van-icon @click="toHome" size="30" class="home" name="wap-home-o" />
        <span class="title">{{title}}</span>
        <div class="rightIcon">
        <van-icon class="search" size="30" name="search" />
        <van-icon size="30" name="shopping-cart-o" />
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
     name: 'Header',
     props: ['title'],
     methods: {
         toHome() {
             this.$router.replace('/')
         }
     }
  }
</script>

<style lang="less" scoped>
.header {
    width: 100%;
    height: 100px;
    text-align: center;
    padding: 0 24px;
    position: fixed;
    z-index: 999;
    background-color: #fff;
    top: 0;
    left: 0;
    .home {
      float: left;
      margin-top: 20px;
    }
    .title {
      height: 100%;
      display: inline-block;
      line-height: 100px;
      font-size: 40px;
      margin-left: 40px;
    }
    .rightIcon {
      display: inline-block;
      float: right;
      margin-right: 40px;
      margin-top: 20px;
      .search {
        margin-right: 20px;
      }
    }
 }
 
</style>
