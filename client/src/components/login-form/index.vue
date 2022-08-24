<script lang="ts" setup>
import Login from './Login.vue'
import AppleBtn from './AppleBtn'
// export default {
//   name: 'LogForm',
//   data() {
//     return {
//       showLog: true,
//       type: 'login'
//     }
//   },
//   components: {
//     Login
//   },
//   methods: {
//     handelChange(type) {
//       if (type === 'login') {
//         this.type = 'sign'
//       } else {
//         this.type = 'login'
//       }
//     },
//     transData(data) {
//       if (this.type === 'login') {
//         this.$emit('login', data)
//       } else {
//         this.$emit('register', data)
//       }
//     }
//   },
//   computed: {
//     enter() {
//       return this.type === 'login' ? 'login-enter' : 'sign-enter'
//     },
//     leaveTo() {
//       return this.type === 'login' ? 'login-leave-to' : 'sign-leave-to'
//     }
//   }
}
</script>
<template>
  <div class="form-container">
    <!-- <transition :enter-class="enter" :leave-to-class="leaveTo"> -->
    <login
      v-if="type == 'login'"
      @change="handelChange"
      key="login"
      @submit="transData"
      textPlaceholder="请输入手机号"
    />
    <!-- <login
      v-else
      @change="handelChange"
      type="sign-box"
      changeText="去登录"
      key="sign"
      title="Sign"
      @submit="transData"
    />-->
    <!-- </transition> -->
  </div>
</template>



<style lang="less" scoped>
.form-container {
  position: relative;
  height: 350px;
  width: 600px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(17, 39, 59, 0.8);
  overflow: hidden;
}

.sign-enter {
  transform: rotate(90deg);
}

.login-enter {
  transform: rotate(-90deg);
}

.login-leave-to {
  transform: rotate(90deg);
}

.sign-leave-to {
  transform: rotate(-90deg);
}

.v-leave,
.v-enter-to {
  transform: rotate(0deg);
}

.v-enter-active,
.v-leave-active {
  transition: 0.5s ease-in-out;
}
</style>
