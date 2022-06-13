<template>
  <h2>Basic components</h2>
  <div class="wrapper">
    <h3>Buttons</h3>
    <div class="example">
      <div class="items">
        <m-button label="Button label" />

        <m-button
          label="With icon"
          size="m"
          iconname="navigation-arrow-arrow--left-32px"
          iconmode="left"
          bordered="true"
        ></m-button>

        <m-button
          label="With icon"
          size="m"
          iconname="navigation-arrow-arrow--left-32px"
          iconmode="right"
          bordered="true"
        ></m-button>

        <m-button
          size="m"
          iconname="navigation-arrow-arrow--left-32px"
          iconmode="only"
          bordered="true"
        ></m-button>
      </div>

      <div class="items">
        <m-button label="Button label" size="s" bordered="true" />

        <m-button label="Button label" size="m" bordered="true" />

        <m-button label="Button label" size="l" bordered="true" />
      </div>

      <div class="items">
        <m-button label="Button label" />

        <m-button label="Button label" theme="neutral" />

        <m-button label="Button label" theme="danger" />
      </div>

      <div class="items">
        <m-button label="Button label" bordered="true" />

        <m-button label="Button label" theme="neutral" bordered="true" />

        <m-button label="Button label" theme="danger" bordered="true" />
      </div>
    </div>
  </div>

  <h3>Badges</h3>
  <div class="example">
    <div class="items">
      <m-badge label="Primary"></m-badge>
      <m-badge label="Success" type="success"></m-badge>
      <m-badge label="Danger" type="danger"></m-badge>
      <m-badge label="Warning" type="warning"></m-badge>
      <m-badge label="Neutral" type="neutral"></m-badge>
    </div>
  </div>

  <h2>Form elements</h2>
  <div class="example">
    <h3>Text input</h3>
    <div class="form-item">
      <m-textinput
        name="txt1"
        inputtype="text"
        placeholder="Text input"
      ></m-textinput>
    </div>

    <h3>Select</h3>
    <div class="form-item">
      <m-select
        placeholder="Choose an option"
        :options="this.opts"
        :valueselected="selectValue"
      ></m-select>
    </div>

    <h3>Datepicker</h3>
    <div class="form-item">
      <m-textinput
        name="txt1"
        inputtype="date"
        value="2022-06-06"
        placeholder="Datepicker"
      ></m-textinput>
    </div>

    <h3>Textarea</h3>
    <m-textarea name="txt1" placeholder="Text input"></m-textarea>

    <h3>Checkbox</h3>
    <div class="items">
      <m-checkbox
        class="space"
        name="chx"
        label="Default"
        :checked="checkboxValue"
      ></m-checkbox>
      <m-checkbox name="chx"></m-checkbox>

      <m-checkbox
        name="chx"
        label="Indeterminate"
        indeterminate="true"
      ></m-checkbox>
    </div>

    <h3>Radio</h3>
    <div class="example">
      <m-radio id="radio" name="radio1" label="Default"></m-radio>
      <m-radio
        id="radio"
        name="radio1"
        label="Disabled"
        disabled="true"
      ></m-radio>
      <m-radio
        id="radio"
        name="radio1"
        label="Invalid"
        isinvalid="true"
      ></m-radio>
    </div>

    <h3>Toogle</h3>
    <div class="example">
      <m-toggle
        label="Default"
        :checked="toggleCheck"
        @click="handleToggle()"
      ></m-toggle>
      <m-toggle name="toggle" label="Disabled" disabled="true"></m-toggle>
      <m-toggle label="Small" value="{{ toggleCheck }}"></m-toggle>
    </div>
  </div>

  <h2>Complex component</h2>
  <h3>Cards</h3>
  <div class="example">
    <m-card
      title="A card in its outlined version"
      imgsrc="https://images.unsplash.com/photo-1534889156217-d643df14f14a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=640"
      outlined="true"
      imgalt="This is the Card image"
      subtitle="A subtitle"
    >
      <p>
        Fusce iaculis dolor nulla, a maximus ipsum sollicitudin et. Ut
        condimentum at orci aliquam feugiat. Curabitur sagittis placerat leo sit
        amet pharetra.
      </p>
      <m-button label="Buy it" size="s"> </m-button>
    </m-card>
  </div>
  <h3>Layer</h3>
  <m-button label="Open Layer " @click="manageLayer()"></m-button>
  <m-layer
    title="Layer title"
    layertitletag="h3"
    :isopen="isLayerOpen"
    @closeLayer="closeLayer()"
  >
    <template v-slot:content>
      <small>
        <p>
          Fusce iaculis dolor nulla, a maximus ipsum sollicitudin et. Ut
          condimentum at orci aliquam feugiat. Curabitur sagittis placerat leo
          sit amet pharetra. Fusce iaculis dolor nulla, a maximus ipsum
          sollicitudin et. Ut condimentum at orci aliquam feugiat. Curabitur
          sagittis placerat leo sit amet pharetra. Fusce iaculis dolor nulla, a
          maximus ipsum sollicitudin et. Ut condimentum at orci aliquam feugiat.
          Curabitur sagittis placerat leo sit amet pharetra. Fusce iaculis dolor
          nulla, a maximus ipsum sollicitudin et. Ut condimentum at orci aliquam
          feugiat. Curabitur sagittis placerat leo sit amet pharetra. Fusce
          iaculis dolor nulla, a maximus ipsum sollicitudin et. Ut condimentum
          at orci aliquam feugiat. Curabitur sagittis placerat leo sit amet
          pharetra. Fusce iaculis dolor nulla, a maximus ipsum sollicitudin et.
          Ut condimentum at orci aliquam feugiat. Curabitur sagittis placerat
          leo sit amet pharetra. Fusce iaculis dolor nulla, a maximus ipsum
          sollicitudin et. Ut condimentum at orci aliquam feugiat. Curabitur
          sagittis placerat leo sit amet pharetra. Fusce iaculis dolor nulla, a
          maximus ipsum sollicitudin et. Ut condimentum at orci aliquam feugiat.
          Curabitur sagittis placerat leo sit amet pharetra. Fusce iaculis dolor
          nulla, a maximus ipsum sollicitudin et. Ut condimentum at orci aliquam
          feugiat. Curabitur sagittis placerat leo sit amet pharetra. Fusce
          iaculis dolor nulla, a maximus ipsum sollicitudin et. Ut condimentum
          at orci aliquam feugiat. Curabitur sagittis placerat leo sit amet
          pharetra. Fusce iaculis dolor nulla, a maximus ipsum sollicitudin et.
          Ut condimentum at orci aliquam feugiat. Curabitur sagittis placerat
          leo sit amet pharetra. Fusce iaculis dolor nulla, a maximus ipsum
          sollicitudin et. Ut condimentum at orci aliquam feugiat. Curabitur
          sagittis placerat leo sit amet pharetra. Fusce iaculis dolor nulla, a
          maximus ipsum sollicitudin et. Ut condimentum at orci aliquam feugiat.
          Curabitur sagittis placerat leo sit amet pharetra. Fusce iaculis dolor
          nulla, a maximus ipsum sollicitudin et. Ut condimentum at orci aliquam
          feugiat. Curabitur sagittis placerat leo sit amet pharetra. Fusce
          iaculis dolor nulla, a maximus ipsum sollicitudin et. Ut condimentum
          at orci aliquam feugiat. Curabitur sagittis placerat leo sit amet
          pharetra.
        </p>
      </small>
      <small><m-button label="Primary action"></m-button></small>
    </template>
  </m-layer>

  <h3>Charts</h3>

  <m-donut
    title="Elements"
    data='[{"name":"Success","total":312,"patternId":"blue"},{"name":"Warning","total":99,"patternId":"gray"},{"name":"Information","total":160,"patternId":"orange"},{"name":"Danger","total":160,"patternId":"yellow"}]'
    colors='["#78be20","#fc961e","#25a8d0","#df382b"]'
    legendposition="left"
  ></m-donut>

  <m-bar-chart
    data='[{"group":"12 Juil.","Data":{"value":"165"}},{"group":"13 Juil.","Data":{"value":"100"}},{"group":"14 Juil.","Data":{"value":"125"}},{"group":"15 Juil.","Data":{"value":"110"}},{"group":"16 Juil.","Data":{"value":"60"}},{"group":"17 Juil.","Data":{"value":"125"}},{"group":"18 Juil.","Data":{"value":"110"}}]'
    chartheight="350"
    scalemax="200"
  ></m-bar-chart>
</template>

<script>
import Button from "@mozaic-ds/mozaic-web-components/public/adeo/components/button/Button.js";
import Card from "@mozaic-ds/mozaic-web-components/public/adeo/components/card/Card.js";
import Checkbox from "@mozaic-ds/mozaic-web-components/public/adeo/components/checkbox/Checkbox.js";
import Textarea from "@mozaic-ds/mozaic-web-components/public/adeo/components/textarea/Textarea.js";
import Select from "@mozaic-ds/mozaic-web-components/public/adeo/components/select/Select.js";
import Toggle from "@mozaic-ds/mozaic-web-components/public/adeo/components/toggle/Toggle.js";
import Field from "@mozaic-ds/mozaic-web-components/public/adeo/components/field/Field.js";
import Textinput from "@mozaic-ds/mozaic-web-components/public/adeo/components/textinput/Textinput.js";
import Notification from "@mozaic-ds/mozaic-web-components/public/adeo/components/notification/Notification.js";
import Radio from "@mozaic-ds/mozaic-web-components/public/adeo/components/radio/Radio.js";
import Layer from "@mozaic-ds/mozaic-web-components/public/adeo/components/layer/Layer.js";
import Badge from "@mozaic-ds/mozaic-web-components/public/adeo/components/badge/Badge.js";
import BarChart from "@mozaic-ds/mozaic-web-components/public/adeo/components/chart/BarChart.js";

if (!customElements.get("m-button")) {
  customElements.define("m-button", Button);
}

if (!customElements.get("m-card")) {
  customElements.define("m-card", Card);
}

if (!customElements.get("m-checkbox")) {
  customElements.define("m-checkbox", Checkbox);
}

if (!customElements.get("m-textarea")) {
  customElements.define("m-textarea", Textarea);
}

if (!customElements.get("m-select")) {
  customElements.define("m-select", Select);
}

if (!customElements.get("m-toggle")) {
  customElements.define("m-toggle", Toggle);
}

if (!customElements.get("m-field")) {
  customElements.define("m-field", Field);
}

if (!customElements.get("m-textinput")) {
  customElements.define("m-textinput", Textinput);
}

if (!customElements.get("m-notification")) {
  customElements.define("m-notification", Notification);
}

if (!customElements.get("m-radio")) {
  customElements.define("m-radio", Radio);
}

if (!customElements.get("m-layer")) {
  customElements.define("m-layer", Layer);
}

if (!customElements.get("m-badge")) {
  customElements.define("m-badge", Badge);
}

if (!customElements.get("m-bar-chart")) {
  customElements.define("m-bar-chart", BarChart);
}

export default {
  name: "HelloWorld",
  props: {
    theme: Boolean,
  },
  data() {
    return {
      isLayerOpen: undefined,
      inputNumber: 99,
      checkboxValue: true,
      toggleCheck: true,
      selectValue: "option1",
      opts: JSON.stringify([
        {
          text: "Option 1",
          value: "option1",
        },
        {
          text: "Option 2",
          value: "option2",
          disabled: true,
        },
        {
          text: "Option 3",
          value: "option3",
        },
        {
          text: "Option 4",
          value: "option4",
        },
      ]),
    };
  },
  methods: {
    handleToggle() {
      alert("stop tickling me");
    },
    manageLayer() {
      console.log(this.isLayerOpen);
      this.isLayerOpen = !this.isLayerOpen;
    },
    closeLayer() {
      console.log("close");
    },
  },
  watch: {
    // whenever question changes, this function will run
    theme() {
      this.loadTheme();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.example {
  margin: 2rem;
  padding: 3rem;
  background-color: white;
  border-radius: 8px;
}

.items {
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
}

.form-item {
  width: 40%;
}
</style>
