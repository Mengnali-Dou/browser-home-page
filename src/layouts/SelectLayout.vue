<template>
  <div style="text-align: center">
    <a-space direction="vertical">
      <a-select v-model:value="searchEngine" size="large" style="margin-right: -1px; min-width: 7%" @change="onChange($event)">
        <a-select-option value="https://cn.bing.com/search?q=">Bing</a-select-option>
        <a-select-option value="https://www.google.com/search?q="><chrome-filled />&nbsp;Google</a-select-option>
        <a-select-option value="https://www.baidu.com/s?&wd=">百度</a-select-option>
        <a-select-option value="https://github.com/search?q="><github-filled />&nbsp;Github</a-select-option>
      </a-select>
      <a-input-search
          v-model:value="inputValue"
          placeholder="input search text"
          style="width: 40%"
          size="large"
          @search="onSearch()"
      />
    </a-space>
  </div>

</template>
<script>
import { defineComponent, ref } from 'vue';
import {message} from "ant-design-vue";
import {ChromeFilled, GithubFilled} from "@ant-design/icons-vue";
export default defineComponent({
  setup() {
    const searchEngine = ref('https://cn.bing.com/search?q=');
    const seURL = ref('');
    const inputValue = ref('');
    const info = () => {
      message.info('请输入要搜索的内容');
    };
    return {
      searchEngine,
      seURL,
      inputValue,
      info,
    };
  },
  components: {
    ChromeFilled,
    GithubFilled,
  },
  methods: {
    onChange(event) {
      this.searchEngine = event;
    },
    onSearch() {
      if (this.inputValue === '') {
        this.info();
      } else {
        this.seURL = this.searchEngine + this.inputValue;
        window.open(this.seURL, '_blank');
      }
    },
  },
});
</script>