<script setup lang="ts">
import { ref } from 'vue'
import Player from './components/music-player/player.vue'

const list = [
  'https://music.163.com/song/media/outer/url?id=488249475.mp3',
  'https://music.163.com/song/media/outer/url?id=1901371647.mp3'
]

const musicUrl = ref<string>(list[0])

const handleChange = () => {
  musicUrl.value = list[Math.floor(Math.random() * list.length)]
}
</script>

<template>
  <player :musicUrl="musicUrl" />
  <button :style="{ marginTop: '10px' }" @click="handleChange">chang song</button>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
