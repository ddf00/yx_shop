<template>
  <div class="floorContainer">
    <div class="title">
        <span class="time">限时购</span>
        <span class="more">更多></span>
    </div>
    <div class="cateContainer">
        <ul class="cateList">
            <li class="cateItem">
                <img src="https://yanxuan-item.nosdn.127.net/cd047a4005784f2ff2a6f46d97b2478f.png?quality=75&type=webp&imageView&thumbnail=216x216" alt="">
                <span>￥99</span>
                 <s>￥199</s>
            </li>
            <li class="cateItem">
                <img src="https://yanxuan-item.nosdn.127.net/cd047a4005784f2ff2a6f46d97b2478f.png?quality=75&type=webp&imageView&thumbnail=216x216" alt="">
                <span>￥99</span>
                <s>￥199</s>
            </li>
            <li class="cateItem">
                <img src="https://yanxuan-item.nosdn.127.net/cd047a4005784f2ff2a6f46d97b2478f.png?quality=75&type=webp&imageView&thumbnail=216x216" alt="">
                <span>￥99</span>
                 <s>￥199</s>
            </li>
            <li class="cateItem">
                <img src="https://yanxuan-item.nosdn.127.net/cd047a4005784f2ff2a6f46d97b2478f.png?quality=75&type=webp&imageView&thumbnail=216x216" alt="">
                <span>￥99 </span>
                <s>￥199</s>
            </li>
            <li class="cateItem">
                <img src="https://yanxuan-item.nosdn.127.net/cd047a4005784f2ff2a6f46d97b2478f.png?quality=75&type=webp&imageView&thumbnail=216x216" alt="">
                <span>￥99</span>
                 <s>￥199</s>
            </li>
            <li class="cateItem">
                <img src="https://yanxuan-item.nosdn.127.net/cd047a4005784f2ff2a6f46d97b2478f.png?quality=75&type=webp&imageView&thumbnail=216x216" alt="">
                <span>￥99</span>
                 <s>￥199</s>
            </li>
        </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
     name: 'floor'
  }
</script>

<style lang="less" scoped>
.floorContainer {
    width: 100%;
    height: 710px;
    .title {
        font-size: 32px;
        position: relative;
        padding: 0 30px;
        height: 100px;
        line-height: 100px;
        .more {
            font-size: 24px;
            position: absolute;
            top: 0;
            right: 30px;
        }
    }
    .cateList {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        .cateItem {
            width: 216px;
            height: 300px;
            img {
                background-color: #f5f5f5;
                width: 216px;
                height: 216px;
            }
            span {
                color: #dd1a21;
            }
        }
    }
}
 
</style>
