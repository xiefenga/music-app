<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue'

interface PlayerProps {
  musicUrl: string
}

withDefaults(defineProps<PlayerProps>(), {})

const palyer = ref<HTMLAudioElement>()

const playState = ref<'playing' | 'paused' | 'stopped'>('stopped')

const playerInfo = reactive({
  currentTime: 0,
  duration: 0,
  progress: 0
})

onMounted(() => {
  const audio = palyer.value!

  // 播放状态切换歌曲，自动播放
  audio.addEventListener('canplay', () => {
    if (playState.value === 'playing') {
      audio.play()
    }
  })

  // 获取播放时长
  audio.addEventListener('durationchange', () => {
    playerInfo.duration = audio.duration
  })

  // 缓冲
  audio.addEventListener('progress', () => {
    if (audio.buffered.length != 0) {
      // console.table(audio.buffered)
      console.log('progress:', audio.buffered.length, audio.buffered.start(0), audio.buffered.end(0))
      playerInfo.progress = audio.buffered.end(0)
    }
  })

  // 播放中
  audio.addEventListener('timeupdate', () => {
    playerInfo.currentTime = audio.currentTime
  })

  audio.addEventListener('pause', () => {
    playState.value = 'paused'
  })

  audio.addEventListener('play', () => {
    playState.value = 'playing'
  })

  audio.addEventListener('ended', () => {
    playState.value = 'stopped'
  })
})

const playOrPause = async () => {
  if (palyer.value) {
    try {
      palyer.value.paused ? await palyer.value.play() : palyer.value.pause()
    } catch (error) {
      console.error(error)
    }
  }
}

const formatPercentage = (percent: number) => Number.isNaN(percent) ? 0 : Math.round(percent * 100)
</script>

<template>
  <div class="music-player">
    <div :style="{ width: '200px', margin: '0 auto' }">
      <div v-for="[key, val] in Object.entries(playerInfo)">
        <span>{{ key }}</span>
        <span :style="{ marginRight: '10px' }">:</span>
        <span>{{ val }}</span>
      </div>
      <div>playing-percent: {{ formatPercentage(playerInfo.currentTime / playerInfo.duration) }}%</div>
      <div>progress-percent: {{ formatPercentage(playerInfo.progress / playerInfo.duration) }}%</div>
    </div>
    <audio ref="palyer" :src="musicUrl" />
    <button @click="playOrPause">{{ playState === 'playing' ? 'paush' : 'play' }}</button>
  </div>
</template>

<style scoped></style>