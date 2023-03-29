<template onselect="document.selection.empty()">
  <div class="title-time">
    <p class="time">{{time}}</p>
    <p class="greet">{{greet}}</p>
  </div>
  <p style="text-align: center; color: #ffffff; font-size: 40px; margin-bottom: 10px; margin-top: 5%">想找点什么</p>
  <div style="text-align: center">
    <select name="selected" id="select" :value="searchEngine" @click="changeEngine($event)">
      <option value="https://cn.bing.com/search?q=">Bing</option>
      <option value="https://www.google.com/search?q=">Google</option>
      <option value="https://www.baidu.com/s?&wd=">百度</option>
      <option value="https://github.com/search?q=">Github</option>
    </select>
    <input id="mini-input" type="text" :value="inputValue">
    <search-outlined class="search" @click="onSearch()"/>
  </div>
</template>

<script>
// import SelectLayout from "@/layouts/SelectLayout.vue";
import {defineComponent, ref} from 'vue';
import {SearchOutlined} from '@ant-design/icons-vue';
import {getLunar} from "chinese-lunar-calendar";
import {message} from "ant-design-vue";
export default defineComponent({
  setup() {
    const searchEngine = ref('https://cn.bing.com/search?q=');
    const inputValue = ref("");
    const seURL = ref('');
    const info = () => {
          message.info('请输入要搜索的内容');
    };
    return {
      searchEngine,
      inputValue,
      seURL,
      info,
    };
  },
  components: {
    SearchOutlined,
  },
  data() {
    return {
      time: "",
      date: "",
      greet: "",
      engine: "Bing",
    };
  },
  mounted() {
    this.currentTime();
  },
  methods: {
    //   时间
    currentTime() {
      setInterval(this.getTime, 500);
      setInterval(this.greeting, 500);
    },
    getTime() {
      let yy = new Date().getFullYear();    // year
      let mm = new Date().getMonth() + 1;    // month
      let dd = new Date().getDate();    // day
      // let hh = new Date().getHours();    // hour
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
    },
    greeting() {
      if (new Date().getHours() < 11 && new Date().getHours() > 6) {
        this.greet = "Good morning.";
      } else if (new Date().getHours() < 18) {
        this.greet = "Good afternoon.";
      } else {
        this.greet = "Good evening.";
      }
    },
    changeEngine(event) {
      this.searchEngine = event;
    },
    onSearch() {
      if (this.inputValue === '') {
        this.info();
      } else {
        this.seURL = this.searchEngine + this.inputValue;
        window.open(this.seURL, '_blank');
      }
    }
  },
});
</script>

<style scoped>
input::-webkit-input-placeholder{
  color: rgba(255, 255, 255, 0.5);
}
#mini-input {
  text-align: center;
  font-size: 40px;
  color: #ffffff;
  width: 40%;
  height: 50px;
  background: transparent;
  outline-style: none;
  border: 0;
  border-bottom: 3px solid #ffffff;
  padding-bottom: 10px;
}
.title-time{
  text-align: center;
  font-size: 0;
}
.time{
  font-size: 150px;
  margin-bottom: -40px;
  color: #ffffff;
}
.greet {
  font-size: 50px;
  color: #ffffff;
  margin-bottom: 0;
  margin-top: -20px;
}
.ant-dropdown-link {
  text-align: center;
  font-size: 20px;
  color: #ffffff;
  height: 50px;
  background: transparent;
  border: 0;
  border-bottom: 3px solid #ffffff;
  padding-bottom: 9.5px;
}
.search {
  text-align: center;
  font-size: 20px;
  color: #ffffff;
  height: 34px;
  background: transparent;
  border: 0;
  border-bottom: 3px solid #ffffff;
  padding-bottom: 5px;
}
#select {
  text-align: center;
  font-size: 20px;
  color: #ffffff;
  height: 45px;
  background: transparent;
  border: 0;
  border-bottom: 3px solid #ffffff;
}
.date{
  font-size: 20px;
  margin: 0;
}
</style>