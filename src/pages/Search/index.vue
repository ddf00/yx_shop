<template>
  <div class="SearchContainer">
      <div class="search">
          <i class='iconfont icon-sousuo'></i>
          <input v-model="keyWord" @input="searchKeyword"  type="text" placeholder="99元任选多件，超值嗨购">
          <van-icon v-show="keyWord" @click="removeKeyWord" class="remove" name="clear" />
          <button class="btn" @click="toHome">取消</button>
      </div>
      <!-- 热门搜索 -->
      <div  v-if="!keyWord">
        <div class="hotSearch">
            热门搜索
        </div>
        <div class="hotkeyword">
            <a class="keyword" href="javascript:;" v-for="(keyItem, index) in hotKeyword" :key="index">{{keyItem.keyword}}</a>
        </div>
      </div>
      <!-- 搜索关键字 -->
      <div class="shop" v-else>
          <ul class="shoplist">
              <li class="shopItem" v-for="(item, index) in searchList" :key="index">
                  <span>{{item}}</span> <van-icon name="arrow" />
              </li>
          </ul>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
import throttle from "lodash/throttle";
import axios from "axios";
  export default {
     name: 'Search',
     data() {
         return {
             hotKeyword: [],
             keyWord: '',
             searchList: []
         }
     },
     methods: {
         async getHotKeyword() {
             let hotKeyWordData = await axios.get('/m/xhr/search/init.json')
             this.hotKeyword = hotKeyWordData.data.data.hotKeywordVOList
         },
         async search() {
             let serchData = await axios.post(`/m/xhr/search/searchAutoComplete.json?keywordPrefix=${this.keyWord}`)
             this.searchList = serchData.data.data
             console.log(this.searchList)
         },
         searchKeyword: throttle(function() {
                 this.searchList = []
                 if(this.keyWord.length > 0) {
                    //  clearTimeout(this.timer)
                    //  this.timer = setTimeout(()=>{
                         this.search()
                    //  },1000)
                 }
         }, 2000),
         toHome() {
             this.$router.replace('/')
         },
         removeKeyWord() {
             this.keyWord = ''
         }
     },
     mounted(){
         this.getHotKeyword()
        //  this.search()
        //  this.searchKeyword()
     }
  }
</script>

<style lang="less" scoped>
.SearchContainer {
    .search {
        width: 100%;
        height: 88px;
        text-align: center;
        line-height: 88px;
        position: relative;
        input {
            border: none;
            outline: none;
            background-color: #f4f4f4;
            width: 600px;
            height: 56px;
            box-sizing: border-box;
            padding: 0 20px;
            padding-left: 80px;
            font-size: 30px;
        }
        .iconfont {
            position: absolute;
            top: 4px;
            left: 56px;
        }
        .remove {
            position: absolute;
            top: 32px;
            right: 136px;
        }
        .btn {
            outline: none;
            border: none;
            background-color: #fff;
            margin-left: 20px;
            font-size: 30px;
            color: #333;
        }
    }
    .hotSearch {
        color: #999;
        font-size: 30px;
        padding: 0 30px;
        width: 100%;
        height: 90px;
        line-height: 90px;
    }
    .hotkeyword {
        width: 100%;
        height: 237px;
        padding-left: 30px;
        box-sizing: border-box;
        .keyword {
            border: 1px solid;
            display: inline-block;
            margin-right: 50px;
            margin-bottom: 30px;
            padding: 5px;
            color: #000;
            &:nth-child(odd) {
                border-color: #dd1a21;
                color: #dd1a21;
            }
        }
        
    }
    .shop {
        width: 100%;
        padding-left: 30px;
        .shoplist {
            .shopItem {
                width: 100%;
                height: 104px;
                box-sizing: border-box;
                border-bottom: 1px solid #f5f5f5;
                line-height: 104px;
                font-size: 30px;
                span {
                    display: inline-block;
                    width: 640px;
                }
            }
        }
    }
}
 
</style>
