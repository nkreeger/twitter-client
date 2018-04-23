<template>
  <div class="card bg-light" v-bind:class="[correct ? 'border-success correct' : 'border-danger incorrect']">
    <h5 class="card-header d-flex justify-content-between">
      @{{ tweet.user.screen_name }}
    </h5>
    <div class="card-body">
      <p class="card-text">
        {{ tweet.text }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" src="./tweet.ts"></script>

<style>
.incorrect {
  background-color: rgba(255, 0, 0, 0.05) !important;
}
.correct {
  background-color: rgba(0, 255, 0, 0.05) !important;
}
</style>
