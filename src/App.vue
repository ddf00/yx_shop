<template>
  <div id="app">
      <router-view></router-view>
      <van-tabbar active-color="#D43C33" route class="tabbar">
        <van-tabbar-item class="tabbarItem" replace to="/">
          <van-icon size="20" name="wap-home-o" />
          <div>首页</div>
        </van-tabbar-item>
        <van-tabbar-item class="tabbarItem" replace to="/category">
          <van-icon size="20" name="apps-o" />
          <div>分类</div>
        </van-tabbar-item>
        <van-tabbar-item class="tabbarItem" replace to="/worthbuy">
          <van-icon size="20" name="balance-list-o" />
          <div>值得买</div>
        </van-tabbar-item>
        <van-tabbar-item class="tabbarItem" replace to="/shopcar">
          <van-icon size="20" name="shopping-cart-o" />
          <div>购物车</div> 
        </van-tabbar-item>
        <van-tabbar-item class="tabbarItem" replace to="/personal">
          <van-icon size="20" name="user-o" />
          <div>个人中心</div>
        </van-tabbar-item>
      </van-tabbar>
  </div>
</template>
<script>
export default {
  name: 'App',
}
</script>

<style lang="less" scoped>
#app{
  width: 100%;
  height: 100%;
  overflow: hidden;
  .tabbar{
    width: 100%;
    height: 100px;
    z-index: 999;
    .tabbarItem {
      font-size: 28px;
      text-align: center;
    }
  }
}
</style>
