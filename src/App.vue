<template>
  <header class="header">ADEO Design System</header>
  <div class="welcome">
    Welcome to ADEO Design System’s Web Components showcase
  </div>
  <div class="mc-divider-bottom theming">
    <m-toggle label="Switch to LEROY MERLIN theme" :checked="toggleTheme" @click="handleToggle()"></m-toggle>
  </div>
  <div class="notif">
    <m-notification class="notif" title="Information" href="https://mozaic.adeo.cloud/" linkcontent="Go to Mozaic Design System">
    The showcase’s purpose is to present the efficiency of the Web-Components. Take note that this is not a comprehensive representation of the catalogue. Please, browse the official website to find out more. 
  </m-notification> 
  </div>
  
  <ShowcaseAdeo v-if="toggleTheme"/>
  <ShowcaseLM v-else/>
</template>

<script>
import ShowcaseAdeo from "./components/ShowcaseAdeo.vue";
import ShowcaseLM from "./components/ShowcaseLM.vue";
import Notification from '@mozaic-ds/mozaic-web-components/public/adeo/components/notification/Notification.js';

if (!customElements.get('m-notification')) {
  customElements.define('m-notification', Notification);
}
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

<style lang="scss">
@import 'settings-tools/all-settings';
@import 'components/_c.divider';

@font-face {
  font-family: Leroy Merlin;
  src: url(assets/Roboto/Roboto-Medium.ttf) format("ttf");
}

* {
  font-family: "Roboto", sans-serif;
}
body {
  margin: 0;
  background-color: #EAEDEF;
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

.theming {
  background-color: white;
  padding: 2rem;
}

.notif {
  background-color: white;
  padding: 2rem;
}
</style>
