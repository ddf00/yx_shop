<template>
  <div class="cateGoryContainer">
    <div class="header">
      <div class="input">
        <i class='iconfont icon-sousuo'></i>
        <span>搜索商品, 共33516款好物</span>
      </div>
    </div>
    <div class="contntContainer">
      <div class="leftNav" ref="leftNav">
        <ul class="navList">
          <li class="navItem active">618专区</li>
          <li class="navItem">爆品专区</li>
          <li class="navItem">爆品专区</li>
          <li class="navItem">爆品专区</li>
          <li class="navItem">爆品专区</li>
          <li class="navItem">爆品专区</li>
          <li class="navItem">爆品专区</li>
          <li class="navItem">爆品专区</li>
          <li class="navItem">爆品专区</li>
          <li class="navItem">爆品专区</li>
          <li class="navItem">爆品专区</li>
          <li class="navItem">爆品专区</li>
          <li class="navItem">爆品专区</li>
          <li class="navItem">爆品专区</li>
          <li class="navItem">爆品专区</li>
          <li class="navItem">爆品专区</li>
          <li class="navItem">爆品专区</li>
          <li class="navItem">爆品专区</li>
          <li class="navItem">爆品专区</li>
          <li class="navItem">爆品专区</li>
          <li class="navItem">爆品专区</li>
          <li class="navItem">爆品专区</li>
          <li class="navItem">爆品专区</li>
          <li class="navItem">爆品专区</li>
          <li class="navItem">爆品专区</li>
          <li class="navItem">爆品专区</li>
          <li class="navItem">爆品专区</li>
          <li class="navItem">爆品专区</li>
          <li class="navItem">爆品专区</li>
          <li class="navItem">爆品专区</li>
          <li class="navItem">爆品专区</li>
          <li class="navItem">爆品专区</li>
          <li class="navItem">爆品专区</li>
          <li class="navItem">爆品专区</li>
          <li class="navItem">爆品专区</li>
          <li class="navItem">爆品专区</li>
          <li class="navItem">爆品专区</li>
          <li class="navItem">爆品专区</li>
        </ul>
      </div>
      <div class="rightList">
        <img class="banner" src="https://yanxuan.nosdn.127.net/54205f6db78e32eb9c5d1175b7164b01.jpg?quality=75&type=webp&imageView&thumbnail=0x196" alt="">
        <div class="listContainer">
            <ul class="list">
              <li class="Item">
                <img src="https://yanxuan.nosdn.127.net/ddf44708f576246755479a7261932b3b.png?quality=75&type=webp&imageView&thumbnail=144x144" alt="">
                <div>人气好物</div>
              </li>
              <li class="Item">
                <img src="https://yanxuan.nosdn.127.net/ddf44708f576246755479a7261932b3b.png?quality=75&type=webp&imageView&thumbnail=144x144" alt="">
                <div>人气好物</div>
              </li>
              <li class="Item">
                <img src="https://yanxuan.nosdn.127.net/ddf44708f576246755479a7261932b3b.png?quality=75&type=webp&imageView&thumbnail=144x144" alt="">
                <div>人气好物</div>
              </li>
              <li class="Item">
                <img src="https://yanxuan.nosdn.127.net/ddf44708f576246755479a7261932b3b.png?quality=75&type=webp&imageView&thumbnail=144x144" alt="">
                <div>人气好物</div>
              </li>
              <li class="Item">
                <img src="https://yanxuan.nosdn.127.net/ddf44708f576246755479a7261932b3b.png?quality=75&type=webp&imageView&thumbnail=144x144" alt="">
                <div>人气好物</div>
              </li>
              <li class="Item">
                <img src="https://yanxuan.nosdn.127.net/ddf44708f576246755479a7261932b3b.png?quality=75&type=webp&imageView&thumbnail=144x144" alt="">
                <div>人气好物</div>
              </li>
              <li class="Item">
                <img src="https://yanxuan.nosdn.127.net/ddf44708f576246755479a7261932b3b.png?quality=75&type=webp&imageView&thumbnail=144x144" alt="">
                <div>人气好物</div>
              </li>
              <li class="Item">
                <img src="https://yanxuan.nosdn.127.net/ddf44708f576246755479a7261932b3b.png?quality=75&type=webp&imageView&thumbnail=144x144" alt="">
                <div>人气好物</div>
              </li>
              <li class="Item">
                <img src="https://yanxuan.nosdn.127.net/ddf44708f576246755479a7261932b3b.png?quality=75&type=webp&imageView&thumbnail=144x144" alt="">
                <div>人气好物</div>
              </li>
            </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BSscroll from "better-scroll";
export default {
    name: 'CateGory',

    methods: {
      initScroll() {
        this.$nextTick(()=>{
          let leftNavScroll = new BSscroll(this.$refs.leftNav,{
            click: true,
          })
        })
      }
    },
    mounted() {
      this.initScroll()
    },
}
</script>

<style lang="less" scoped>
.cateGoryContainer {
  .header {
    width: 100%;
    height: 90px;
    padding: 18px 0;
    box-sizing: border-box;
    .input {
      width: 690px;
      height: 56px;
      background-color: #ededed;
      border-radius: 10px;
      margin: 0 auto;
      text-align: center;
      line-height: 56px;
      .iconfont {
        font-size: 30px;
        margin-right: 10px;
      }
    }
  }
  .contntContainer {
    display: flex;
    height: calc(100vh - 90px);
    box-sizing: border-box;
    border-top: 1px solid #ccc;
    .leftNav {
      width: 25%;
      overflow: hidden;
      box-sizing: border-box;
      border-right: 1px solid #ccc;
      .navList {
        .navItem {
          width: 100%;
          height: 50px;
          margin-top: 40px;
          font-size: 28px;
          text-align: center;
          position: relative;
          &.active {
            &::after{
              content: "";
              height: 70%;
              width: 2px;
              position: absolute;
              top: 0;
              left: 6px;
              background-color: #B4282D;
            }
          }
        }
      }
    }
    .rightList {
      width: 80%;
      padding: 30px 30px 21px 30px;
      .banner {
        width: 528px;
        height: 192px;
        display: block;
      }
      .listContainer {
        .list {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin-top: 20px;
          .Item {
            width: 144px;
            height: 216px;
            img {
              width: 100%;
              height: 144px;
            }
          }
        }
      }
    }
  }
}
 
</style>
