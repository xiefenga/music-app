<script lang="ts" setup>

enum ButtonType {
  RED = 'red',
  ORANGE = 'orange',
  GREEN = 'green'
}

type ButtonPosition = 'left' | 'right'

interface ButtonProps {
  showBtn: boolean
  position?: ButtonPosition
}

const buttonTypes = Object.values(ButtonType)

withDefaults(defineProps<ButtonProps>(), { position: 'left' })

</script>

<template>
  <div class="apple-btn-container">
    <li class="btn-item" v-for="btnType in buttonTypes" :key="btnType" :class="`${btnType}-btn`" />
  </div>
</template>

<style scoped>
.apple-btn-container {
  --red-btn-bg: #ff0000;
  --orange-btn-bg: #ffa500;
  --green-btn-bg: #0d9a0d;
}
.apple-btn-container {
  box-sizing: border-box;
  padding: 0 2px;
  height: 25px;
  width: 70px;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
}

.apple-btn-container .btn-item {
  list-style: none;
  height: 15px;
  width: 15px;
  border-radius: 50%;
}

.btn-item.red-btn {
  background-color: var(--red-btn-bg);
  transition: 0.3s;
}
.btn-item.orange-btn {
  background-color: var(--orange-btn-bg);
  transition: 0.6s;
}
.btn-item.green-btn {
  background-color: var(--green-btn-bg);
  transition: 0.9s;
}
</style>


