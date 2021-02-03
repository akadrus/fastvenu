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
  width: 100%;
  height: 100%;
  z-index: 9999;
  position: fixed;
  left: 0;
  top: 0;
  padding: auto;
  // top: 10%;
  // left: 10%;
  background: rgba(255,255,255,0.7)
}
</style>
