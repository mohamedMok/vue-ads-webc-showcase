<template>
  <header class="header">ADEO Design System</header>
  <div class="welcome">
    Welcome to ADEO Design System’s Web Components showcase
  </div>
  <div class="mc-divider-bottom theming">
    <m-radio-group
      id="radio-group-id"
      legend="Choose your theme"
      :options="opts"
      selectedvalue="ADEO"
      @change="handleTheme($event.detail)"
    ></m-radio-group>
  </div>
  <div class="notif">
    <m-notification
      title="Information"
      href="https://mozaic.adeo.cloud/"
      linkcontent="Go to Mozaic Design System"
    >
      The showcase’s purpose is to present the efficiency of the Web-Components.
      Take note that this is not a comprehensive representation of the
      catalogue. Please, browse the official website to find out more.
    </m-notification>
  </div>

  <ShowcaseAdeo v-if="theme === 'adeo'" />
  <ShowcaseLM v-if="theme === 'lm'" />
  <ShowcaseBricoman v-if="theme === 'bricoman'" />
</template>

<script>
import ShowcaseAdeo from "./components/ShowcaseAdeo.vue";
import ShowcaseLM from "./components/ShowcaseLM.vue";
import ShowcaseBricoman from "./components/ShowcaseBricoman.vue";
import Donut from "@mozaic-ds/mozaic-web-components/public/adeo/components/chart/Donut.js";
import Notification from "@mozaic-ds/mozaic-web-components/public/adeo/components/notification/Notification.js";
import RadioGroup from "@mozaic-ds/mozaic-web-components/public/adeo/components/radiogroup/RadioGroup.js";

if (!customElements.get("m-donut")) {
  customElements.define("m-donut", Donut);
}
if (!customElements.get("m-notification")) {
  customElements.define("m-notification", Notification);
}
if (!customElements.get('m-radio-group')) {
  customElements.define('m-radio-group', RadioGroup);
}

export default {
  name: "App",
  components: {
    ShowcaseAdeo,
    ShowcaseBricoman,
    ShowcaseLM,
  },
  mounted() {
    console.log("mounted");
  },
  data() {
    return {
      theme: 'adeo',
      toggleTheme: false,
      opts: JSON.stringify([
    {
      id: 'adeo',
      name: 'ADEO',
      label: 'ADEO',
      value: 'adeo',
      disabled: false,
      checked: true,
    },
    {
      id: 'lm',
      name: 'Leroy Merlin',
      label: 'LEROY MERLIN',
      value: 'lm',
      disabled: false,
      checked: false,
    },
    {
      id: 'bricoman',
      name: 'Bricoman',
      label: 'Bricoman',
      value: 'bricoman',
      disabled: false,
      checked: false,
    },
  ]),
    };
  },
  methods: {
    handleToggle() {
      this.toggleTheme = !this.toggleTheme;
    },
    handleTheme(e) {
      console.log(e)
      this.theme = e
    },
  },
};
</script>

<style lang="scss">
@import "settings-tools/all-settings";
@import "components/_c.divider";

@font-face {
  font-family: Leroy Merlin;
  src: url(assets/Roboto/Roboto-Medium.ttf) format("ttf");
}

* {
  font-family: "Roboto", sans-serif;
}
body {
  margin: 0;
  background-color: $color-secondary-blue-100;
}
.header {
  background-color: $color-primary-01-300;
  height: 2.375rem;
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
  padding-left: 2rem;
}

.welcome {
  display: flex;
  align-items: center;
  height: 25rem;
  color: white;
  background-color: $color-secondary-blue-900;
  font-weight: 300;
  font-size: 59px;
  line-height: 80px;
  padding-left: $mu200;
}

.theming {
  background-color: $color-grey-000;
  padding: $mu200;
}

.notif {
  background-color: $color-grey-000;
  padding: $mu200;
}
</style>
