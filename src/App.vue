<template v-if="urlList.length > 0">
  <MenuBuildier
    :urlList="urlList"
    :containerId="containerId"
    :actionKey="actionKey"
  />
</template>

<script>
import MenuBuildier from "./components/MenuBuildier.vue";

export default {
  name: "App",
  components: {
    MenuBuildier
  },
  beforeCreate: function() {
    this.urlList = this.$parent.$data.urlList;
    this.containerId = this.$parent.$data.containerId;
    this.actionKey = this.$parent.$data.actionKey;
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#fastVenuContainer {
  width: 80%;
  height: 350px;
  z-index: 9999;
  position: fixed;
  top: 10%;
  left: 10%;
  background: white;
}
</style>
