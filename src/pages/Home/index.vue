<template>
  <div class="HomeContainer">
    <div class="header-Container">
    <!-- 头部 -->
      <div class="header">
        <img class="logo" src="../../static/images/logo.png" alt="">
        <div class="searchInput" >
            <i class='iconfont icon-sousuo'></i>
        </div>
        <div class="btn">登录</div>
      </div>
      <!-- 导航滑屏 -->
        <div class="navScroll" ref="navScroll">
          <ul class="navList" ref="navList" v-if="indexData.kingKongModule">
            <li class="navItem activeClass">
              推荐
            </li>
            <li class="navItem" v-for="(navItem, index) in indexData.kingKongModule.kingKongList" :key="index">
              {{navItem.text}}
            </li>
          </ul>
            <div class="arrow"><van-icon class="icon" name="arrow-down" size="20" /></div>
        </div>
    </div>
      <div class="scrollY" ref="scrollY"> 
        <div class="contentContainer" ref="contentContainer">
          <!-- 轮播图 -->
          <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item class="swiperItem">
              <img src="https://yanxuan.nosdn.127.net/c323c6cbe4c7370cc0c7e823626e5f91.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
            </van-swipe-item>
            <van-swipe-item class="swiperItem">
              <img src="https://yanxuan.nosdn.127.net/c323c6cbe4c7370cc0c7e823626e5f91.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
            </van-swipe-item>
            <van-swipe-item class="swiperItem"> 
              <img src="https://yanxuan.nosdn.127.net/111dbe33b28ca67063da7066ae82179f.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
            </van-swipe-item>
            <van-swipe-item class="swiperItem">
              <img src="https://yanxuan.nosdn.127.net/c323c6cbe4c7370cc0c7e823626e5f91.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
            </van-swipe-item>
          </van-swipe>
          <!-- 3个图标 -->
          <div class='policyDescList'>
            <div class='policyDescItem' v-for="(iconList, index) in indexData.policyDescList" :key="index">
              <img :src="iconList.icon">
              <span>{{iconList.desc}}</span>
            </div>
        </div>
        <!-- 10个图标 -->
          <div class="side" v-if="indexData.kingKongModule">
            <a href="javascript:;" class="kingkongItem" v-for="(item, index) in indexData.kingKongModule.kingKongList" :key="index">
              <img :src="item.picUrl">
              <div>{{item.text}}</div>
            </a>
          </div>
        <!-- 618广告 -->
          <div class="ad618">
            <a class="top" href="javascript:;">
              <img src="https://yanxuan.nosdn.127.net/8e4ab522091f14098dee67811358a5a7.gif?imageView&quality=75" alt="">
            </a>
            <a class="bottom" href="javascript:;">
              <img src="https://yanxuan.nosdn.127.net/55ce7a7afa61c743567a1213cb09caee.png?quality=75&type=webp&imageView&thumbnail=250x0" alt="">
              <img src="https://yanxuan.nosdn.127.net/cd1c15662f7d2c871d8edb169336d9d8.png?quality=75&type=webp&imageView&thumbnail=250x0" alt="">
              <img src="https://yanxuan.nosdn.127.net/5f9be39b227adc0ef19c6ba65f411119.png?quality=75&type=webp&imageView&thumbnail=250x0" alt="">
            </a>
          </div>
          <!-- 新人推荐 -->
          <div class="newRecommend">
            <div class="title">
              <span>- 新人专享 -</span>
            </div>
            <div class="content">
              <div class="left">
                <div class="name">新人专享礼包</div>
                <img src="//yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png" alt="">
              </div>
              <div class="right">
                <div class="top">
                  <div class="top-title">
                    <span class="fltitle" v-if="indexData.indexActivityModule">{{indexData.indexActivityModule[0].title}}</span>
                    <span class="subtitle" v-if="indexData.indexActivityModule">{{indexData.indexActivityModule[0].subTitle}}</span>
                  </div>
                  <img src="https://yanxuan-item.nosdn.127.net/f978a6eeba806149e90ded5c444617f9.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
                </div>
                <div class="bottom">
                  <div class="bttom-title">
                    <span class="Group" v-if="indexData.indexActivityModule">{{indexData.indexActivityModule[1].title}}</span>
                    <span class="subtitle" v-if="indexData.indexActivityModule">{{indexData.indexActivityModule[1].tag}}</span>
                    </div>
                  <img src="https://yanxuan-item.nosdn.127.net/08ed8b0e068a3ff2a0aae8c427db1858.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
                </div>
              </div>
            </div>
          </div>
          <!-- 热销榜 -->
          <div class="hotTapContainer">
            <div class="title" v-if="indexData.categoryHotSellModule">{{indexData.categoryHotSellModule.title}}</div>
            <div class="topContent">
              <div class="hotTap">
                <div class="left" v-if="indexData.categoryHotSellModule">
                  <div class="desc">
                    <span>{{indexData.categoryHotSellModule.categoryList[0].categoryName}}</span>
                    <span>--</span>
                  </div>
                  <img :src="indexData.categoryHotSellModule.categoryList[0].picUrl" alt="">
                </div>
              </div>
              <div class="goodTap">
                <div class="left" v-if="indexData.categoryHotSellModule">
                  <div class="desc">
                    <span>{{indexData.categoryHotSellModule.categoryList[1].categoryName}}</span>
                    <span>--</span>
                  </div>
                 <img :src="indexData.categoryHotSellModule.categoryList[1].picUrl" alt="">
                </div>
              </div>
            </div>
            <div class="cateContent">
              <ul class="cateList" v-if="indexData.categoryHotSellModule">
                 <li class="cateItem" v-for="(topList, index) in indexData.categoryHotSellModule.categoryList.slice(2,10)" :key="index">
                  <span>{{topList.categoryName}}</span>
                  <img :src="topList.picUrl" alt="">
                </li>
              </ul>
            </div>
          </div>
          <!-- 楼层 -->
            <Floor />
            <Floor />
            <Floor />
          <!-- 底部 -->
          <div class="footer">
            <div class="DL_Btn">下载APP</div>
            <div class="CP_Btn">电脑版</div>
            <span class="copyright">
              网易公司版权所有 © 1997-2020
            </span>
            <span>
              食品经营许可证：JY13301080111719
            </span>
          </div>
        </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Floor from "../../components/floor";
import BSscroll from "better-scroll";
import { mapState } from "vuex";
export default {
  name: 'Home',
  components: {
    Floor
  },
  data() {
    return {
      
    }
  },
  methods: {
    initScroll() {
      this.$nextTick(()=>{
        let navScroll = new BSscroll(this.$refs.navScroll, {
          click: true, 
          scrollX: true,
          })
        let contentContainer = new BSscroll(this.$refs.scrollY, {
          click: true,
          scrollY: true,
          momentum:false,
          bounce: false
        })
      })
    },
  },
  mounted() {
    this.initScroll()
    // this.getindexData()
    this.$store.dispatch('getIndexData')
  },
  computed: {
    ...mapState({
      indexData: state => state.indexData.indexData
    })
  }
    
}
</script>

<style lang="less" scoped>
.HomeContainer{
    width: 100%;
    height: 100%;
    .header-Container {
      width: 100%;
      z-index: 999 !important;
      position: fixed;
      top: 0;
      left: 0;
      background-color: #fff;
    }
    .header{
			display: flex;
			width: 100%;
			height: 60px;
			padding: 10px 0;
			.logo{
				width: 140px;
				height: 40px;
				margin: 10px 30px;
      }
			.searchInput {
				height: 60px;
				width: 420px;
				background: #ededed;
				position: relative;
				border-radius: 10px;
				.iconfont{
					font-size: 30px;
					position: absolute;
					left: 10px; 
					top: 25%;
        }
				input{
					border-radius: 10px;
					height: 60px;
					width: 370px;
					margin-left: 50px;
        }
				.placeholder{
					font-size: 24px;
					color: #666;
        }
      }
			.btn{
				width: 100px;
				height: 50px;
				padding: 0 4px;
				color: #b4282d;
				line-height: 56px;
				text-align: center;
				font-size: 24px;
				margin: 0 20px;
				white-space: nowrap;
				overflow: hidden;
        text-overflow: ellipsis;
        border: 1px solid #b4282d;
        border-radius: 100px;
      }
    }
    .navScroll {
      display: flex;
      overflow: hidden;
      width: calc(100vw - 30px);
      position: relative;
      .navList{
        white-space: nowrap;
        height: 60px;
        display: flex;
        .navItem {
          display: inline-block;
          height: 100%;
          font-size: 30px;
          line-height: 60px;
          text-align: center;
          margin: 0 30px;
          box-sizing: border-box;
          &.activeClass {
            border-bottom: 1px solid red;
          }
        }
      }
      .arrow {
        position: absolute;
        right: -10px;
        top: 10px;
        width: 100px;
        height: 60px;
        background-color: #fff;
        text-align: center;
        line-height: 60px;
        .icon {
          color: #666;
        }
      }
    }
    .scrollY {
      height: calc(100vh - 200px);
      margin-top: 140px;
      .contentContainer {
        display: flex;
        flex-direction: column;
      }
    }
    .my-swipe {
      width: 100%;
      height: 350px;
      img {
          width: 100%;
          height: 100%;
      }
    }
    .policyDescList {
      display: flex;
      height: 72px;
      .policyDescItem {
        flex: 1;
        text-align: center;
        img {
          width: 32px;
          height: 32px;
          vertical-align: middle;
          margin-right: 6px;
        }
        span {
          font-size: 24px;
          line-height: 72px;
        }
      }
    }
    .side {
      width: 100%;
      height: 340px;
      display: flex;
      flex-wrap: wrap;
      .kingkongItem {
        width: 25%;
        height: 156px;
        text-align: center;
        img {
          width: 110px;
          height: 110px;     
        }
      }
    }
    .ad618 {
      width: 100%;
      height: 500px;
      .top {
        display: block;
        img {
          width: 100%;
          height: 50%;
          display: block;
        }
      }
      .bottom {
        display: block;
        height: 50%;
        background-color: #b10011;
        display: flex;
        justify-content: space-around;
        align-items: center;
        img {
          width: 230px;
          height: 220px;
        }
      }
    }
    .newRecommend {
      display: flex;
      height: 550px;
      width: 100%;
      display: flex;
      flex-direction: column;
      .title {
        width: 100%;
        height: 90px;
        text-align: center;
        span {
          font-size: 32px;
          line-height: 90px;
        }
      }
      .content {
        display: flex;
        padding: 0 30px;
        .left {
          width: 50%;
          height: 430px;
          background-color: #f9e9cf;
          margin-right: 2px;
          .name {
            font-size: 32px;
            padding: 30px 0 0 30px;
            text-align: center;
          }
          img {
            width: 260px;
            height: 260px;
            display: block;
            margin: 40px auto;
          }
        }
        .right {
          width: 50%;
          display: flex;
          flex-direction: column;
          height: 430px;
          .top {
            background-color: #fbe2d3;
            height: 50%;
            display: flex;
            margin-bottom: 1px;
            .top-title {
              padding: 20px 0 0 30px;
              .fltitle {
                width: 100%;
                display: inline-block;
                font-size: 32px;
                margin-bottom: 10px;
              }
              .subtitle {
                font-size: 24px;
                color: #666;
              }
            }
            img {
              width: 200px;
              height: 200px;
            }
          }
          .bottom {
            height: 50%;
            display: flex;
            background-color: #ffecc2;
            .bttom-title {
              padding: 20px 0 0 30px;
              .Group {
                width: 100%;
                display: inline-block;
                font-size: 32px;
                margin-bottom: 10px;
                white-space: nowrap;
              }
              .subtitle {
                color: #fff;
                background-color: #CBB693;
              }
            }
            img {
              width: 200px;
              height: 200px;
            }
          }
        }
      }
      
    }
    .hotTapContainer {
      width: 100%;
      height: 710px;
      .title {
        width: 100%;
        height: 100px;
        line-height: 100px;
        padding: 0 30px;
        font-size: 32px;
      }
      .topContent {
        display: flex;
        padding: 0 30px;
        .hotTap {
          width: 340px;
          height: 200px;
          background-color: #f9f3e4;
          margin-right: 10px;
          display: flex;
          .left {
            display: flex;
            .desc {
              width: 140px;
              text-align: center;
              display: flex;
              flex-direction: column;
              justify-content: center;
              span {
                width: 100%;
                display: inline-block;
                font-size: 32px;
              }
            }
            img {
              width: 200px;
              height: 200px;
            }
          }
        }
        .goodTap {
          width: 340px;
          height: 200px;
          background-color: #ebeff6;
          .left {
            display: flex;
            .desc {
              width: 140px;
              text-align: center;
              display: flex;
              flex-direction: column;
              justify-content: center;
              span {
                width: 100%;
                display: inline-block;
                font-size: 32px;
              }
            }
            img {
              width: 200px;
              height: 200px;
            }
          }
        }
      }
      .cateContent {
        margin: 20px 0;
        .cateList {
          display: flex;
          flex-wrap: wrap;
          text-align: center;
          padding: 0 30px;
          justify-content: space-between;
          .cateItem {
            width: 160px;
            display: flex;
            flex-direction: column;
            background-color: #f5f5f5;
            margin-bottom: 20px;
            img {
              width: 120px;
              height: 120px;
              margin: 0 auto;
            }
          }
        }
      }
    }
    .footer {
      width: 100%;
      height: 245px;
      background-color: #414141;
      padding: 50px 20px 28px 20px;
      text-align: center;
      color: #fff;
      div{
        display: inline-block;
        width: 172px;
        height: 62px;
        border: 1px solid #8e8e8e;
        font-size: 32px;
        line-height: 62px;
        text-align: center;
        margin-right: 20px;
        margin-bottom: 40px;
      }
      .DL_Btn {
        margin-right: 40px;
      }
      span {
        color: #939393;
      }
      .copyright {
        display: block;
        font-size: 24px;
      }
}
}
</style>
