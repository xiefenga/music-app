<template>
  <div
    class="box"
    :class="formType"
    @mouseenter="showBtn = true"
    @mouseleave="showBtn = false"
  >
    <apple-btn :showBtn="showBtn" :pos="applePos" />
    <div class="title">{{ title }}</div>
    <form action="">
      <div class="input">
        <input type="text" :placeholder="textPlaceholder" v-model="username" />
      </div>
      <div class="input">
        <input type="password" :placeholder="pswPlaceholder" v-model="password" />
      </div>
      <div class="btn">
        <button @click.prevent="$emit('submit', { username, password })">
          {{ buttonText }}
        </button>
      </div>
    </form>
    <div class="change-box">
      <div class="change-btn" @click="$emit('change', type)">
        {{ changeText }}
      </div>
    </div>
  </div>
</template>

<script>
import AppleBtn from './AppleBtn'
export default {
  name: 'Login',
  components: {
    AppleBtn
  },
  props: {
    type: {
      type: String,
      default: 'login'
    },
    title: {
      type: String,
      default: 'Login'
    },
    buttonText: {
      type: String,
      default: '登录'
    },
    changeText: {
      type: String,
      default: '去注册'
    },
    textPlaceholder: {
      type: String,
      default: '请输入账号'
    },
    pswPlaceholder: {
      type: String,
      default: '请输入密码'
    }
  },
  data () {
    return {
      showBtn: false,
      username: '',
      password: ''
    }
  },
  computed: {
    formType () {
      if (this.type === 'login') {
        return 'login-box'
      }
      return 'sign-box'
    },
    applePos () {
      if (this.type === 'login') {
        return 'left'
      } else {
        return 'right'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.box {
  height: 100%;
  width: 100%;
  transition: 0.4s;
  transform-origin: 0 100%;
  position: absolute;
  &.login-box {
    background-color: rgba(17, 39, 59, 0.8);
    .title {
      color: white;
      text-shadow: 0px 0px 7px rgba(255, 255, 255, 0.9);
    }
    input {
      color: rgba(255, 255, 255, 0.8);
      background-color: rgba(255, 255, 255, 0.4);
    }
    button {
      background-color: rgba(0, 0, 0, 0.1);
      color: rgba(255, 255, 255, 0.4);
      &:hover {
        color: white;
        background-color: #57606f;
        text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);
      }
    }
    .change-box {
      background-color: rgba(255, 255, 255, 0.8);
    }
  }

  &.sign-box {
    background-color: rgba(255, 255, 255, 0.8);
    .title {
      text-shadow: 0 0 10px rgba(200, 200, 200, 0.8);
      font-weight: 500;
    }
    input {
      background-color: rgba(255, 255, 255, 0.4);
      box-shadow: 0 0 3px black;
    }
    button {
      color: #1e90ff;
      background-color: rgba(200, 200, 200, 0.1);
      &:hover {
        color: white;
        background-color: #1e90ff;
      }
    }
    .change-box {
      background-color: rgba(17, 39, 59, 0.8);
      color: #fff;
    }
  }

  &:hover {
    .change-box {
      height: 200px;
    }
  }

  .title {
    user-select: none;
    height: 40px;
    width: 100%;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 3px;
    transition: 0.4s;
  }

  .input {
    display: flex;
    justify-content: center;
    margin: 30px;
    input {
      width: 400px;
      height: 45px;
      box-sizing: border-box;
      border: none;
      outline: none;
      padding-left: 15px;
      font-size: 16px;
      transition: 0.4s;
      border-radius: 45px;
      // caret-color: white;
    }
  }

  .btn {
    display: flex;
    justify-content: center;
    button {
      width: 150px;
      height: 50px;
      border: none;
      outline: none;
      cursor: pointer;
      font-size: 18px;
      line-height: 50px;
      border-radius: 30px;
      transition: 0.5s;
    }
  }

  .change-box {
    position: absolute;
    height: 0;
    width: 100%;
    clip-path: polygon(100% 50%, 50% 100%, 100% 100%);
    bottom: 0;
    transition: 0.4s;
    .change-btn {
      position: absolute;
      bottom: 30px;
      right: 40px;
      font-size: 20px;
      font-weight: 500;
      cursor: pointer;
      user-select: none;
    }
  }
}
</style>
