import Vue from 'vue';

class Tweet {
  correct = false;
}

// tslint:disable-next-line:no-default-export
export default Vue.component('tweet', {
  props: ['tweet'],

  data() {
    return new Tweet();
  },

  mounted: function() {
    this.$data.correct = false;
  },
});
