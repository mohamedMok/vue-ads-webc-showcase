<template>
  <header class="header">ADEO Design System</header>
  <div class="welcome">
    Welcome to ADEO Design System’s Web Components showcase
  </div>
  <m-toggle label="Default" :checked="toggleTheme" @click="handleToggle()"></m-toggle>
  <ShowcaseAdeo v-if="toggleTheme"/>
  <ShowcaseLM v-else/>
</template>

<script>
import ShowcaseAdeo from "./components/ShowcaseAdeo.vue";
import ShowcaseLM from "./components/ShowcaseLM.vue";

export default {
  name: "App",
  components: {
    ShowcaseAdeo,
    ShowcaseLM
  },
  mounted() {
    console.log('mounted')
  },
  data() {
    return {
      toggleTheme: true,
    };
  },
  methods: {
    handleToggle() {
      this.toggleTheme = !this.toggleTheme
    }
  }
};
</script>

<style>
@font-face {
  font-family: Leroy Merlin;
  src: url(assets/Roboto/Roboto-Medium.ttf) format("ttf");
}

* {
  font-family: "Roboto", sans-serif;
}
body {
  margin: 0;
}
.header {
  background-color: #48bac4;
  height: 2.375rem;
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
}

.welcome {
  display: flex;
  align-items: center;
  height: 25rem;
  color: white;
  background-color: #082435;
  font-weight: 300;
  font-size: 59px;
  line-height: 80px;
}
</style>
