<template>
  <div class="navbar">
    <h1 class="imgNav">
      <img src="./img/logo.png" alt="" />
    </h1>

    <div class="right-menu">
      <div class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img
            v-imgError="defaultImg"
            src="http://destiny001.gitee.io/image/monkey_02.jpg"
            class="user-avatar"
          />
          <span class="user">欢迎您, admin</span>
          <el-button type="text" @click="logout">
            <div style="margin: -5px 0 0 10px">
              <span style="cursor: pointer"
                >退出
                <i class="el-icon-caret-bottom" />
              </span>
            </div>
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import defaultImg from '@/assets/404_images/404.png'

export default {
  data() {
    return {
      defaultImg,
    }
  },
  components: {
    Breadcrumb,
    Hamburger,
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },

    logout() {
      this.$confirm('此操作将退出, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true,
      })
        .then(async () => {
          await this.$store.dispatch('user/logout')
          this.$router.push(`/login?redirect=${this.$route.fullPath}`)
        })
        .catch(() => {})
    },
  },
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.navbar {
  height: 60px;
  overflow: hidden;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 10000;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('./img/nav.png');

  .imgNav {
    margin: 0;
    padding: 0;
    height: 0;

    img {
      width: 88px;
      height: 36px;
      margin-top: 10px;
      margin-left: 15px;
    }
  }

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 60px;

    &:focus {
      outline: none;
    }
    .el-button--text {
      color: #fff;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;
        display: flex;
        color: #fff;
        font-size: 16px;

        .user {
          margin-top: -5px;
          margin-right: 20px;
        }

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin-top: 6px;
          margin-right: 10px;
        }

        .el-icon-caret-bottom {
          position: absolute;
          top: 20px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
