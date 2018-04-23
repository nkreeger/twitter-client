<template>
  <div>
    <nav class="navbar sticky-top">
      <span class="navbar-brand mb-0 h1">TensorFlow.js Live Tweet Demo</span>
    </nav>

    <div class="container content">
      <div class="row justify-content-center">
        <div class="card-columns col-10 card-columns">
          <div class="card" v-if="tweets.length === 0">
            <div class="card-body">
              Waiting for live Twitter data...
            </div>
          </div>
          <transition-group name="tweet">
            <tweet class="tweet"
                   v-for="tweet,index in tweets"
                   :key="tweet.id"
                   v-bind:tweet="tweet"></tweet>
          </transition-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./app.ts"></script>

<style>
.html {
  font-family: Roboto, sans-serif;
}
.flip-list-move {
  transition: transform 1s;
}

.tweet {
  backface-visibility: hidden;
  z-index: 1;
}

.tweet-move {
  transition: all 600ms ease-in-out 50ms;
}
.tweet-enter-active {
  transition: all 400ms ease-out;
}
.tweet-leave-active {
  transition: all 200ms ease-in;
  position: absolute;
  z-index: 0;
}
.tweet-enter,
.tweet-leave-to {
  opacity: 0;
}

.navbar {
  background-color: #ef6c00;
}
.navbar-brand {
  color: white;
}

.content {
  padding-top: 20px;
}

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  line-height: 60px;
  background-color: #f5f5f5;
}
/* .card-columns {
  column-count: 3;
} */
</style>
