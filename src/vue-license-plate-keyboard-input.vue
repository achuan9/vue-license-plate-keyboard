<template>
  <div class="page-charge">
    <div class="main">
      <h2 :class="{ warning: warning }">{{ title }}</h2>
      <ul class="main-input-box" @click="showKeyboard = true">
        <li
          v-for="(item, index) in vehicleList"
          :key="index"
          :class="{ active: inputIndex === index }"
        >
          {{ item }}
        </li>
      </ul>
      <p class="main-tips">注：普通车辆为7位，新能源汽车为8位。</p>
    </div>
    <button
      type="button"
      class="base-button"
      :class="{ disabled: loading }"
      @click="submit"
    >
      确定
    </button>
    <base-keyboard
      v-model="vehicleList"
      :input-index.sync="inputIndex"
      :show.sync="showKeyboard"
      @toggle-type="toggleTypeHandler"
    />
  </div>
</template>
<script type="text/javascript">
import BaseKeyboard from "./BaseKeyboard";
export default {
  name: "",
  components: { BaseKeyboard },
  props: {
    title: {
      type: String,
      default: "请输入需要缴费的车牌"
    },
    warning: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showKeyboard: true,
      inputIndex: 0,
      vehicleList: []
    };
  },
  created() {},
  methods: {
    toggleTypeHandler(msg) {
      console.log("toggleTypeHandler", msg);
    },
    submit() {
      const arr = Array.from(this.vehicleList);
      if (!arr[arr.length - 1]) {
        return this.$toast.text("请输入完整的车牌");
      }
      this.$emit("submit", arr.join(""));
    }
  }
};
</script>

<style lang="scss" scoped>
.base-button {
  display: block;
  width: 320px;
  height: 40px;
  margin: 48px auto 0;
  background: linear-gradient(to right, #00a3f9, #0071f2);
  border-radius: 4px;
  color: #fff;
  border: none;
  & + .base-button {
    margin: 24px auto 0;
  }
  &.light {
    background: $normal-color;
    color: #fff;
  }
  font-size: 16px;
  &.disabled {
    cursor: not-allowed;
    background: #dadada;
    color: #f6f6f6;
  }
}
</style>
<style lang="scss" scoped>
.main {
  padding: 50px 30px 40px;
  background: #fff;
  h2 {
    margin-bottom: 24px;
    font-weight: bold;
    text-align: center;
    &.warning {
      color: $warning-color;
    }
  }
  .main-input-box {
    display: flex;
    margin-bottom: 24px;
    li {
      flex: 1;
      height: 40px;
      line-height: 40px;
      margin-right: 2px;
      text-align: center;
      font-size: 16px;
      font-weight: bolder;
      border: 1px solid $dark-color;
      border-radius: 2px;

      &:nth-child(2) {
        margin-right: 20px;
      }
      &:last-child {
        margin-right: 0;
      }
      &.active {
        border: 1px solid $primary-color;
      }
    }
  }
  .main-tips {
    font-size: 12px;
    color: $second-color;
  }
}
</style>
