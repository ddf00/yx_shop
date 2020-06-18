<template>
  <div>
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
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
     name: 'swiper'
  }
</script>

<style lang="less" scoped>
.my-swipe {
    width: 100%;
    height: 350px;
    img {
        width: 100%;
        height: 100%;
    }
}
 
</style>
