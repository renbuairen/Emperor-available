<template>
  <div class="login-container">
    <div class="container-main">
      <div class="topBox">
        <img src="./img/头像.png" alt="">
      </div>

      <div class="form">
        <el-form :model="userForm" :rules="rules">
          <el-form-item prop="name">
            <el-input v-model="userForm.name" prefix-icon="el-icon-mobile-phone" placeholder="请输入账号" maxlength="16" />
          </el-form-item>

          <el-form-item prop="password">
            <el-input v-model="userForm.password" show-password="true" prefix-icon="el-icon-lock" placeholder="请输入密码" maxlength="16" />
          </el-form-item>

          <el-form-item prop="code">
            <el-input v-model="userForm.code" prefix-icon="el-icon-help" placeholder="请输入验证码" maxlength="4" />
            <span class="boxBottom">
              <img src="./img/验证码.jpg" alt="">
            </span>
          </el-form-item>
          <el-button>登录</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { rules } from './rules'
export default {
  name: 'Login',
  data() {
    return {
      userForm: {
        name: 'admin',
        password: 'admin',
        code: ''
      },
      rules

    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }

}
</script>

<style lang="scss">
  .login-container{
    width: 100%;
    height: 100%;
    background: url('./img/背景图.png') no-repeat center;
    background-size: cover;

    .container-main{
      position: absolute;
      width: 518px;
      height: 388px;
      top: 50%;
      left: 50%;
      margin-top: -194px;
      margin-left: -259px;
      padding: 76px 35px 0;
      background: #fff;
      -webkit-box-shadow: 0 3px 70px 0 rgb(30 111 72 / 35%);
      box-shadow: 0 3px 70px 0 rgb(30 111 72 / 35%);
      border-radius: 10px;
      padding: 76px 35px 0;

      .el-input__inner{
        height: 48px;
        color: #999;
        padding-left:52px ;

      }

      .el-form-item__content{
        display: flex;
        margin-top: 4px;
        height: 50px;

      }
      .el-input__icon{
        font-size: 16px;
        padding: 4px  24px 0 8px;

      }
      .topBox{
        img{
        width: 96px;
        position: absolute;
        top:-45px;
        left: 50%;
        transform: translateX(-50%);
      }
      }
      .boxBottom{
        margin-left: 10px;
        margin-top:-1px ;
      }
      .el-button{
        width: 100%;
        height: 52px;
        background: linear-gradient(262deg,#2e50e1,#6878f0);
        opacity: .91;
        border-radius: 8px;
        color: #fff;
        text-shadow: 0 7px 22px #cfcfcf;
      }
    }
  }
</style>
