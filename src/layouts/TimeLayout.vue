<template>
  <div class="title-time">
    <p class="time">{{time}}</p>
    <p class="date">{{date}}</p>
  </div>
</template>

<script>
import {getLunar} from "chinese-lunar-calendar";
export default {
  data() {
    return {
      time: "",
      date: "",
    };
  },
  mounted() {
    this.currentTime();
  },
  methods: {
    //   时间
    currentTime() {
      setInterval(this.getTime, 500);
    },
    getTime() {
      let yy = new Date().getFullYear();    // year
      let mm = new Date().getMonth() + 1;    // month
      let dd = new Date().getDate();    // day
      let hh = new Date().getHours() < 10 ? "0" + new Date().getHours() : new Date().getHours();    // hour
      // minute
      let mf =
          new Date().getMinutes() < 10
              ? "0" + new Date().getMinutes()
              : new Date().getMinutes();
      // second
      // let ss =
      //     new Date().getSeconds() < 10
      //         ? "0" + new Date().getSeconds()
      //         : new Date().getSeconds();
      let day = new Date().getDay();
      let weekArr = [ '星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六' ]
      this.time = hh + ":" + mf;
      this.date = mm + "月" + dd + "日 " + weekArr[day] + " " + getLunar(yy, mm, dd).dateStr;
    }
  }
};
</script>

<style scoped>
  .title-time{
    text-align: center;
    font-size: 0px;
  }
  .time{
    font-size: 100px;
    margin-bottom: -20px;
  }
  .date{
    font-size: 20px;
    margin: 0px;
  }
</style>