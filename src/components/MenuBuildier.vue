<template>
  <div v-if="urlList.length > 0">
    <multiselect
      ref="vms"
      v-model="value"
      :options="urlList"
      placeholder="Start typing"
      label="name"
      track-by="name"
      loading:="true"
      @select="onSelect"
    ></multiselect>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";

export default {
  name: "MenuBuildier",
  components: {
    Multiselect
  },
  props: ["urlList", "containerId","actionKey"],
  data: function() {
    return {
      value: null
    };
  },
  created: function(){
    this.focused = false;
  },
  mounted: function() {
    this.containerObject = document.getElementById(this.containerId);
    setTimeout(function(){
      this.focus();
    }.bind(this),0);

    setTimeout(function(){
      window.addEventListener("keyup", this.doCommand);
    }.bind(this),100);
    
    
  },
  methods: {
    onSelect(option) {
      // Relative or not? Should be checked!
      window.location = option.url;
    },
    doCommand: function(e) {
      let keyPressed = String.fromCharCode(e.keyCode).toLowerCase();
      if (keyPressed == this.actionKey && e.ctrlKey && e.altKey) {
        if(this.focused == false){
            this.focus();
        }else{
            this.containerObject.style.display = "none";
            this.focused = false;
        }
      }
    },
    focus(){
      this.focused = true;
      this.containerObject.style.display = "block";
      this.$refs.vms.$el.focus();
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
