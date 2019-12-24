<template>
  <div class="keyboard" :class="{ show: show }">
    <div class="keyboard-bar">
      <button type="button" class="bar-btn-left" :class="{ active: isEV }" @click="toggleType">新能源</button>
      <button type="button" class="bar-btn-right" @click="closeHandler">关闭</button>
    </div>
    <div class="keyboard-cont">
      <ul v-for="(text, textIndex) in textList" v-show="inputIndex === 0" :key="`text-${textIndex}`">
        <li v-for="(item, index) in text" :key="`text-${textIndex}-${index}`" :class="{ none: !item }" @click="selectHandler(item)">
          {{ item }}
        </li>
        <li v-if="textIndex === 3" class="btn-del" @click="delHandler" />
      </ul>

      <ul
        v-for="(num, numIndex) in numList"
        v-show="inputIndex !== 0"
        :key="`num-${numIndex}`"
        :class="{ disabled: inputIndex === 1 && numIndex === 0 }"
      >
        <li v-for="(item, index) in num" :key="`num-${numIndex}-${index}`" :class="{ none: !item }" @click="selectHandler(item)">
          {{ item }}
        </li>
        <li v-if="numIndex === 3" class="btn-del" @click="delHandler" />
      </ul>
    </div>
  </div>
</template>
<script type="text/javascript">

const NORMAL_LEN = 7;
const EV_LEN = 8;
const PROVINCE_LIST = [
  ['京', '津', '晋', '冀', '蒙', '辽', '吉', '黑', '沪', '苏'],
  ['浙', '皖', '闽', '赣', '鲁', '豫', '鄂', '湘', '粤', '桂'],
  ['琼', '渝', '川', '贵', '云', '藏', '陕', '甘', '青', '宁'],
  ['新', '临', '', '', '', '', '', '']
];
const NORMAL_LIST = [
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K'],
  ['L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V'],
  ['W', 'X', 'Y', 'Z']
];
const APPEND_LIST = ['港', '澳', '学', '警'];
export default {
  name: '',
  props: {
    value: {
      type: Array,
      default: function() {
        return [];
      }
    },
    show: {
      type: Boolean,
      default: true
    },
    inputIndex: {
      type: Number,
      default: 0
    }
  },

  data() {
    return {
      curVal: [],
      textList: [...PROVINCE_LIST],
      isEV: false // 是否为新能源汽车
    };
  },
  computed: {
    numList() {
      const { inputIndex, curLimitLen } = this;
      const isLastInput = inputIndex === curLimitLen - 1;
      const numList = [...NORMAL_LIST];
      const pushArr = isLastInput ? APPEND_LIST : ['', '', '', ''];
      numList[3] = [...numList[3], ...pushArr];
      return numList;
    },
    curLimitLen() {
      return this.isEV ? EV_LEN : NORMAL_LEN;
    }
  },
  watch: {
    curVal(val) {
      this.$emit('input', val);
    },
    value(val) {
      this.curVal = val;
    }
  },
  created() {
    if (this.value.length >= NORMAL_LEN) {
      this.curVal = this.value;
    } else {
      this.curVal = new Array(this.curLimitLen);
    }
  },
  methods: {
    delHandler() {
      this.$set(this.curVal, this.inputIndex, '');
      if (this.inputIndex > 0) {
        this.$emit('update:inputIndex', this.inputIndex - 1);
      }
    },
    toggleType() {
      const that = this;
      that.isEV = !that.isEV;
      this.$emit('toggleType', this.isEV);

      const { inputIndex, curVal, curLimitLen } = this;
      const curValLen = curVal.length;
      const isLastInputActive = inputIndex === curValLen - 1; // 是否当前激活项是最后一项

      // (从 新能源车牌 切换到 普通车牌)
      if (curValLen > curLimitLen) {
        // 如果当前下标 等于 当前值 - 1，当前值的最后一项为激活状态
        this.curVal.pop();
        isLastInputActive && this.$emit('update:inputIndex', inputIndex - 1);
      }
      // (从 普通车牌 切换到 新能源车牌)
      if (curValLen < curLimitLen) {
        // 最后一项为激活状态 且 输入值为['港', '澳', '学']里边的一项 =》 清空该项
        if (isLastInputActive && APPEND_LIST.indexOf(curVal[inputIndex]) > -1) {
          this.$set(this.curVal, inputIndex, '');
        }
        // 最后一项为激活状态 且 已输入值 =》 下标加1
        if (isLastInputActive && curVal[inputIndex]) {
          this.$emit('update:inputIndex', inputIndex + 1);
        }
        this.curVal.push('');
      }
    },
    closeHandler() {
      this.$emit('update:show', false);
    },
    selectHandler(val) {
      this.$set(this.curVal, this.inputIndex, val);
      if (this.inputIndex < this.curLimitLen - 1) {
        this.$emit('update:inputIndex', this.inputIndex + 1);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
$green: $third-color;
.keyboard {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 375px;
  margin: auto;
  transform: translateY(100%);
  transition: transform 0.2s;
  background: $bg-color;
  &.show {
    transform: translateY(0);
  }
}

.keyboard-bar {
  position: relative;
  height: 40px;
  background: #fff;
  box-shadow: 0 -1px 4px 0 rgba($color: #000000, $alpha: 0.2);
  .bar-btn-left {
    position: absolute;
    left: 5px;
    top: 5px;
    height: 30px;
    font-size: inherit;
    color: $primary-color;
    border: 0;
    -webkit-appearance: none;
    user-select: none;
    background: #fff;
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    &.active {
      background: $green;
      color: #fff;
    }
  }
  .bar-btn-right {
    position: absolute;
    right: 0;
    height: 100%;
    font-size: inherit;
    background: none;
    color: $primary-color;
    border: 0;
    -webkit-appearance: none;
    user-select: none;
  }
}
.keyboard-cont {
  padding: 5px 4px;
  ul {
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: 5px;
    font-size: 0;
    &.disabled {
      opacity: 0.4;
      pointer-events: none;
    }
    li {
      width: 32px;
      height: 37px;
      line-height: 37px;
      margin: 0 2px;
      overflow: hidden;
      box-sizing: border-box;
      background: #fff;
      font-size: 14px;
      font-weight: bold;
      text-align: center;
      border: 1px solid $dark-color; /*no*/
      border-radius: 4px;
      box-shadow: 2px 2px 2px #888888;
      cursor: pointer;
      &.none {
        border: none;
        background: transparent;
        box-shadow: none;
        pointer-events: none;
        font-size: 0;
      }
      &.btn-del {
        width: 70px;
        background: url(./images/delete.svg) center center no-repeat #fff;
        background-size: 24px auto;
      }
      &:active,
      &:focus {
        background-color: $primary-color;
        color: #fff;
      }
    }
  }
}
</style>
