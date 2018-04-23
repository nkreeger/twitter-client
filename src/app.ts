// import * as pfx from 'baseball-pitchfx-data';
import {UniqueQueue} from 'containers.js';
import * as socketioClient from 'socket.io-client';
import Vue from 'vue';
import tweet from './tweet';

// import AnimatedLabel from './animated-label';
// import AnimatedPercentage from './animated-percentage';
import Tweet from './Tweet.vue';

const MAX_TWEETS = 40;  // 3 each row.
const SOCKET = 'http://localhost:8002/';

export type User = {
  id: number,
  name: string,
  screen_name: string,
};

export type Tweet = {
  created_at: string,
  id_str: string,
  text: string,
  user: User
};

const data = {
  tweetQueue: new UniqueQueue<Tweet>(MAX_TWEETS),
  tweets: [] as Tweet[]
};

// tslint:disable-next-line:no-default-export
export default Vue.extend({
  data() {
    return data;
  },
  components: {Tweet},
  mounted: function() {
    const socket = socketioClient(SOCKET);

    socket.on('tweets', (data: Tweet|Tweet[]) => {
      console.log('tweets', data);
      if (Array.isArray(data)) {
        this.tweetQueue.insertValues(data as Tweet[]);
        console.log('data', data);
      } else {
        this.tweetQueue.push(data as Tweet);
      }

      this.tweets = this.tweetQueue.values();
      // data.forEach((prediction) => {
      //   this.predictionsQueue.push(prediction);
      // });
      // this.predictions = this.predictionsQueue.values();
      // this.predictionMap.clear();
      // for (let i = 0; i < this.predictions.length; i++) {
      //   this.predictionMap.set(this.predictions[i].uuid, i);
      // }
    });

    // socket.on('prediction_updates', (data: PredictionUpdateMessage[]) => {
    //   data.forEach((update) => {
    //     const index = this.predictionMap.get(update.uuid);
    //     if (index !== undefined) {
    //       this.predictions[index].classes = update.classes;
    //     }
    //   });
    // });
  }
});
