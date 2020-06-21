<template>
  <div class="ShopListContainer" ref="ShopListContainer">
      <ul class="list">
          <li class="item" v-for="(item, index) in cateList" :key="index">
              <img :src="item.listPicUrl" alt="">
              <div class="desc">{{item.name}}</div>
              <div class="price">{{item.retailPrice}}</div>
          </li>
      </ul>
  </div>
</template>
    
<script type="text/ecmascript-6">
export default {
    name: 'ShopList',
    props: ['cateList'],
}
</script>

<style lang="less" scoped>
.ShopListContainer {
    height: 100%;
    .list {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin-top: 30px;
        .item {
            width: 50%;
            height: 565px;
            img {
                width: 345px;
                height: 345px;
            }
            .desc {
                font-size: 30px;
                text-align: left;
                padding: 0 10px;
            }
            .price {
                text-align: left;
                margin-top: 10px;
                font-size: 34px;
                color: #dd1a21;
            }
        }
    }
}
 
</style>
