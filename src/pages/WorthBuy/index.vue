<template>
  <div class="wothBuyContainer">
      <!-- <div class="header">
          <van-icon size="30" class="home" name="wap-home-o" />
          <span class="title">值得买</span>
          <div class="rightIcon">
            <van-icon class="search" size="30" name="search" />
            <van-icon size="30" name="shopping-cart-o" />
          </div>
      </div> -->
      <!-- 头部 -->
      <Header title="值得买"/>
      <div class="scrollY" ref="scrollY">
        <div class="Sliding-ele" ref="Sliding">
          <div class="header-swiper">
            <img class="bg" src="http://m.you.163.com/topic/index/img/topic_title_bg.2373a140.png" alt="">
            <div class="swiper-title">
              <img src="http://m.you.163.com/topic/index/img/topic_logo.c2284970.png" alt="">
              <span>严选好物 用心生活</span>
            </div>
            <!-- 轮播 -->
            <div class="swiperContainer">
                  <van-swipe class="my-swipe" indicator-color="#dd1a21" :show-indicators="true" :loop="false" :width="90">
                  <ul class="swiperList">
                    <van-swipe-item style="height: 50%;" v-for="(navItem, index) in navListData" :key="index">
                        <li class="swiperItem">
                          <div class="itme">
                            <img :src="navItem.picUrl" alt="">
                            <span class="title">{{navItem.mainTitle}}</span>
                            <span class="desc">{{navItem.viceTitle}}</span>
                          </div>
                      </li>
                    </van-swipe-item>
                  </ul>
                  </van-swipe>
            </div>
          </div>
          <!-- 瀑布列表 -->
          <div class="waterfall">
            <ul class="listLeft">
                <li class="itemLeft" v-if="topics[0]">
                  <img  :src="topics[0].newAppBanner" alt="">
                  <span class="desc">{{topics[0].title}}</span>
                  <div class="lookDetail">
                    <img class="userImg" :src="topics[0].avatar" alt="">
                    <span class="name">{{topics[0].nickname}}</span>
                    <span class="see">200k</span>
                  </div>
                </li>
                <li class="itemLeft"  v-if="topics2[0]">
                  <img :src="topics2[0].newAppBanner" alt="">
                  <span class="desc">{{topics2[0].title}}</span>
                  <div class="lookDetail">
                    <img class="userImg" :src="topics2[0].avatar" alt="">
                    <span class="name">{{topics2[0].nickname}}</span>
                    <span class="see">200k</span>
                  </div>
                </li>
                 <li class="itemLeft" v-for="(pageItem, index) in page1List" :key="index">
                  <img :src="pageItem.picUrl" alt="">
                  <span class="desc">{{pageItem.title}}</span>
                  <div class="lookDetail" v-if="index !== 0">
                    <img class="userImg" :src="pageItem.avatar" alt="">
                    <span class="name">{{pageItem.nickname}}</span>
                    <span class="see">200k</span>
                  </div>
                  <!-- <div class="subTitle">{{pageItem.subTitle}}</div> -->
                </li>
            </ul>
            <ul class="listRight">
                <li class="itemRight"  v-if="topics[1]">
                  <img :src="topics[1].newAppBanner" alt="">
                  <span class="desc">{{topics[1].title}}</span>
                  <div class="lookDetail">
                    <img class="userImg" :src="topics[1].avatar" alt="">
                    <span class="name">{{topics[1].nickname}}</span>
                    <span class="see">200k</span>
                  </div>
                </li>
                 <li class="itemRight" v-if="topics2[1]">
                 <img :src="topics2[1].newAppBanner" alt="">
                  <span class="desc">{{topics2[1].title}}</span>
                  <div class="lookDetail">
                    <img class="userImg" :src="topics2[1].avatar" alt="">
                    <span class="name">{{topics2[1].nickname}}</span>
                    <span class="see">200k</span>
                  </div>
                </li>
                 <li class="itemRight" v-for="(page2Item, index) in page2List" :key="index">
                  <img :src="page2Item.picUrl" alt="">
                  <span class="desc">{{page2Item.title}}</span>
                  <div class="lookDetail">
                    <img class="userImg" :src="page2Item.avatar" alt="">
                    <span class="name">{{page2Item.nickname}}</span>
                    <span class="see">200k</span>
                  </div>
                </li>
            </ul>
          </div>
        </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BSscroll from "better-scroll";
import Header from "../../components/Header";
import {reqWorthBuy} from "../../api";
import axios from "axios";
export default {
  name: 'WorthBuy',
  components: {
    Header,
  },
  data() {
    return {
      navListData: [],
      topics: [],
      topics2:[],
      page1List: [],
      page2List: [],
    }
  },
  methods: {
    initScroll() {
      this.$nextTick(()=>{
        let scrollEle = new BSscroll(this.$refs.scrollY, {
          click: true,
          scrollY: true,
          // momentum:false,
          bounce: false,
          scrollbar: true,
          probeType:1,
          scrollEnd: true,
          pullUpLoad:true
        })
        scrollEle.on('scroll',(pos)=>{
          
            // console.log(scrollEle.y)
            // console.log(scrollEle.maxScrollY+30)
            if(scrollEle.y < scrollEle.maxScrollY+30) {
              // console.log('触底了')
              let that = this
              console.log('1',this)
              function update(that){
                let page = 2
                console.log('2',this)
                console.log('22')
                function getreq(that) {
                  page ++
                  console.log(page)
                  console.log('3',this)
                  that.getWorthList(page,1,true)
                  that.getWorthListR(page,1,true)
                }
                getreq(that)
              }
              update(that)
              scrollEle.refresh()
              console.log(this.page1List,this.page2List)
            }
        })
      })
    },
    async getWorthBuy() {
      let result = await axios.get('/m/topic/v1/know/navWap.json')
      this.navListData = result.data.data.navList
    } ,
    async getWorthTop() {
      let result = await axios.get('/m/topic/v1/find/recManual.json')
      this.topics = result.data.data[0].topics
      this.topics2 = result.data.data[1].topics
    },
    async getWorthList(page,size,update=false) {
      if(update) {
        let result = await axios.get(`/m/topic/v1/find/recAuto.json?page=${page++}&size=${size}`)
        let data = result.data.data.result[0].topics
        data.forEach((item)=>{
            this.page1List.push(item)
          })
        }else {
          let result = await axios.get(`/m/topic/v1/find/recAuto.json?page=1&size=1`)
          let data = result.data.data.result[0].topics
          this.page1List = data
        }
    },
    async getWorthListR(page,size,update=false) {
      if(update) {
          let result = await axios.get(`/m/topic/v1/find/recAuto.json?page=${page}&size=${size}`)
          let data = result.data.data.result[0].topics
          data.forEach((item)=>{
            this.page2List.push(item)
          })
        }else {
          let result = await axios.get(`/m/topic/v1/find/recAuto.json?page=2&size=1`)
          let data = result.data.data.result[0].topics
          this.page2List = data
        }
    },
  },
  mounted() {
    this.getWorthBuy()
    this.initScroll()
    this.getWorthTop()
    this.getWorthList(1,1)
    this.getWorthListR(2,1)
  },
  beforeUpdate(){

  }
}
</script>

<style lang="less" scoped>
.wothBuyContainer {
  width: 100%;
  background-color: #eee;
  .scrollY {
    height: calc(100vh - 200px);
    margin-top: 100px;
  }
 .header-swiper {
   height: 684px;
   position: relative;
   overflow: hidden;
   padding: 0 20px;
   .bg {
     position: absolute;
     top: 0;
     left: 0;
     z-index: -1;
     width: 100%;
     height: 518px;
   }
   .swiper-title {
     img {
       display: inline-block;
       width: 130px;
       height: 68px;
       margin-top: 60px;
     }
     span {
       position: absolute;
       top: 80px;
       left: 160px;
       font-size: 30px;
       color: #fff;
     }
   }
   .swiperContainer {
     width: 710px;
     height: 540px;
     background-color: #fff;
     border-radius: 20px;
     overflow: hidden;
     .my-swipe {
       height: 540px;
       .custom-indicator {
         width: 100px;
         height: 100px;
         background-color: red;
       }
     }
     .swiperList {
       height: 100%;
       width: 50%;
       display: flex;
       flex-wrap: wrap;
       .swiperItem {
         height: 50%;
         .itme{
           height: 50%;
           text-align: center;
           font-size: 24px;
           box-sizing: border-box;
           padding: 40px 0 0 10px;
           img {
             width: 120px;
             height: 120px;
             margin: 0 auto;
           }
           .title {
             font-weight: bold;
             display: block;
           }
           .desc {
             color: #c5c5c5;
           }
         }
       }
     }
   }
 }
  .waterfall {
    width: 100%;
    display: flex;
    box-sizing: border-box;
    padding: 30px 20px 0 20px;
    justify-content: space-between;
    .listLeft {
      .itemLeft {
        width: 345px;
        // height: 400px;
        background-color: #fff;
        border-radius: 20px;
        margin-bottom: 20px;
        // text-align: center;
        &:first-child {
          width: 345px;
          height: 555px;
          .lookDetail {
            margin-top: 30px;
            .userImg {
              margin: 0 20px;
            }
          }
        }
        &:nth-child(2) {
          width: 345px;
          height: 400px;
          img {
            width: 346px;
            height: 200px;
          }
          .lookDetail {
            margin-top: 30px;
          }
        }
        // &:nth-child(3) {
        //   width: 345px;
        //   height: 692px;
        //   background-color: #ffe1b2;
        //   img {
        //     width: 345px;
        //     height: 460px;
        //   }
        //   .lookDetail {
        //     margin-top: 40px;
        //   }
        // }
        img{
          width: 345px;
          height: 355px;
          border-radius: 20px;
        }
        .desc {
          font-size: 30px;
          display: block;
          width: 100%;
          padding: 10px 10px 0 10px;
        }
        .lookDetail {
          width: 100%;
          margin-top: 10px;
          .userImg {
            width: 48px;
            height: 48px;
            vertical-align: middle;
            margin: 0 20px;
          }
        }
      }
    }
    .listRight {
      .itemRight {
        width: 345px;
        height: 500px;
        background-color: #fff;
        border-radius: 20px;
        margin-bottom: 20px;
        &:first-child {
          width: 345px;
          height: 500px; 
        }
        &:nth-child(2) {
          width: 345px;
          height: 400px;
          img {
            width: 346px;
            height: 200px;
          }
          .lookDetail {
            margin-top: 30px;
          }
        }
        img{
          width: 355px;
          height: 355px;
          border-radius: 20px;
        }
        .desc {
          font-size: 30px;
          display: block;
          width: 100%;
          padding: 10px 10px 0 10px;
        }
        .lookDetail {
          width: 100%;
          .userImg {
            width: 48px;
            height: 48px;
            vertical-align: middle;
            margin: 0 20px;
          }
        }
      }
    }
  }
}
 
</style>
