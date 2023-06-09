<template>
  <div class="buttons-layout">
    <div v-for="currentButton in buttonsNames">
      <button @click="chooseButton(currentButton)">{{ currentButton }}</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    buttonsNames: Array
  },
  data() {
    return {

    }
  },
  methods: {
    chooseButton(buttonName) {
      this.$emit('receivedButtonName', buttonName)
    }
  }
}
</script>

<style lang="scss" scoped>
$font: 'Open Sans', sans-serif;

button {
  background-color: #a1f8d1;
  border-radius: 5px;
  border-color: #ffa148;
  font-family: $font;
  font-size: 20px;
  margin-left: 10px;
}
</style>