<template>
  <div class="loginContainer">
      <!-- 头部 -->
     <Header title="网易严选"/>
     <div class="logo">
         <img src="http://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt="">
     </div>

     <template v-if="showLogin">
        <div class="phone"><van-icon class="icon"  name="graphic" />手机号快捷登录</div>
        <div @click="showLogin = false" class="email"><van-icon class="icon"  name="envelop-o" />邮箱账号登录</div>
        <div class="login-other">微信 | QQ | 微博</div>
     </template>
     <template v-else>
         <div class="loginContainer">
             <form>
                 <div class="emailInput">
                    <input type="text" placeholder="邮箱账号"  v-model="emailval">
                 </div>
                 <div class="passwordInput">
                    <input type="password" placeholder="密码" v-model="passwordval">
                 </div>
                <span>注册账号</span>
                <span class="forget">忘记密码</span>
                <button @click="submit" class="submit" type="submit">登录</button> 
             </form>
         </div>
     </template>
  </div>
</template>

<script type="text/ecmascript-6">
import { Notify } from 'vant';
import Header from "../../components/Header";
export default {
     name: 'Login',
     components: {
         Header
     },
     data() {
         return {
            showLogin: true,
            emailval:'',
            passwordval:''
         }
     },
     methods: {
         submit(event) {
             event.preventDefault();
             if(this.emailval !== /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}/) {
                 Notify({ type: 'danger', message: '邮箱格式不正确' })
             }else if (this.passwordval !== /^\w+$/) {
                 Notify({ type: 'danger', message: '密码不正确' })
             }
         }
     }
   
  }
</script>

<style lang="less" scoped>
.loginContainer {
    height: calc(100vh - 100px);
    margin-top: 100px;
}
.logo {
    height: 480px;
    width: 100%;
    text-align: center;
    line-height: 480px;
    img {
        width: 268px;
        height: 90px;
    }
}
.phone,.email {
    width: 80%;
    height: 94px;
    background-color: #dd1a21;
    margin: 0 auto;
    font-size: 34px;
    color: #fff;
    text-align: center;
    line-height: 94px;
    .icon {
        display: inline-block;
        margin-right: 20px;
    }
}
.phone {
    margin-bottom: 32px;
}
.email {
    background-color: #fff;
    color: #dd1a21;
    border: 1px solid #dd1a21;
}
.login-other {
    position: absolute;
    bottom: 100px;
    left: 50%;
    transform: translateX(-50%);
    height: 40px;
    font-size: 30px;
    color: #7f7f7f;
}
.loginContainer {
    margin-top: -10px;
    color: #9e9e9e;
    padding: 0 20px;
    input {
        outline: none;
        border: none;
        display: block;
        width: 500px;
        height: 42px;
        
    }
    .emailInput, .passwordInput {
        width: 670px;
        height: 90px;
        margin: 0 auto;
        padding: 40px 0;
        box-sizing: border-box;
        border-bottom: 1px solid #e8e8e8;
        color: #9e9e9e;
    }
    .forget {
        float: right;
    }
    .passwordInput {
        margin-bottom: 40px;
    }
    
    .submit {
        width: 100%;
        height: 94px;
        font-size: 34px;
        color: #fff;
        background-color: #dd1a21;
        text-align: center;
        line-height: 94px;
        outline: none;
        border: none;
        margin-top: 20px;
        border-radius: 10px;
    }
}
 
</style>
