<template>
  <h2 class="title">Basic components</h2>
  <div class="wrapper">
    <h3>Buttons</h3>
    <div class="example">
      <div class="items">
        <m-lm-button label="Button label" />

        <m-lm-button
          label="With icon"
          size="m"
          iconname="navigation-arrow-arrow--left-32px"
          iconmode="left"
          bordered="true"
        ></m-lm-button>

        <m-lm-button
          label="With icon"
          size="m"
          iconname="navigation-arrow-arrow--left-32px"
          iconmode="right"
          bordered="true"
        ></m-lm-button>

        <m-lm-button
          size="m"
          iconname="navigation-arrow-arrow--left-32px"
          iconmode="only"
          bordered="true"
        ></m-lm-button>
      </div>

      <div class="items">
        <m-lm-button label="Button label" size="s" bordered="true" />

        <m-lm-button label="Button label" size="m" bordered="true" />

        <m-lm-button label="Button label" size="l" bordered="true" />
      </div>

      <div class="items">
        <m-lm-button label="Button label" />

        <m-lm-button label="Button label" theme="neutral" />

        <m-lm-button label="Button label" theme="danger" />
      </div>

      <div class="items">
        <m-lm-button label="Button label" bordered="true" />

        <m-lm-button label="Button label" theme="neutral" bordered="true" />

        <m-lm-button label="Button label" theme="danger" bordered="true" />
      </div>
    </div>
  </div>

  <h3>Badges</h3>
  <div class="example">
    <div class="items">
      <m-lm-badge label="Primary"></m-lm-badge>
      <m-lm-badge label="Success" type="success"></m-lm-badge>
      <m-lm-badge label="Danger" type="danger"></m-lm-badge>
      <m-lm-badge label="Warning" type="warning"></m-lm-badge>
      <m-lm-badge label="Neutral" type="neutral"></m-lm-badge>
    </div>
  </div>

  <h2>Form elements</h2>
  <div class="example">
    <h3>Text input</h3>
    <div class="form-lm-item">
      <m-lm-textinput
        name="txt1"
        inputtype="text"
        placeholder="Text input"
      ></m-lm-textinput>
    </div>

    <h3>Select</h3>
    <div class="form-lm-item">
      <m-lm-select
        placeholder="Choose an option"
        :options="this.opts"
        :valueselected="selectValue"
      ></m-lm-select>
    </div>

    <h3>Datepicker</h3>
    <div class="form-lm-item">
      <m-lm-textinput
        name="txt1"
        inputtype="date"
        value="2022-06-06"
        placeholder="Datepicker"
      ></m-lm-textinput>
    </div>

    <h3>Textarea</h3>
    <m-lm-textarea name="txt1" placeholder="Text input"></m-lm-textarea>

    <h3>Checkbox</h3>
    <div class="items">
      <m-lm-checkbox name="chx"></m-lm-checkbox>
      <m-lm-checkbox
        class="space"
        name="chx"
        :checked="checkboxValue"
      ></m-lm-checkbox>
      <m-lm-checkbox
        name="chx"
        indeterminate="true"
        label="Checkbox Label"
      ></m-lm-checkbox>
    </div>
    <div class="items">
      <m-lm-checkbox name="chx" label="Checkbox Label"></m-lm-checkbox>
      <m-lm-checkbox
        class="space"
        name="chx"
        :checked="checkboxValue"
        label="Checkbox Label"
      ></m-lm-checkbox>
      <m-lm-checkbox
        name="chx"
        indeterminate="true"
        label="Checkbox Label"
      ></m-lm-checkbox>
    </div>

    <!-- <h3>Radio</h3>
    <div class="item">
      <m-lm-radio id="sho"  name="showcase" label="Default"></m-lm-radio>
      <m-lm-radio id="shosho" name="showcase" label="Second"></m-lm-radio>

    </div> -->

    <h3>Toogle</h3>
    <div class="items">
      <m-lm-toggle value="false"></m-lm-toggle>
      <m-lm-toggle :checked="toggleCheck" @click="handleToggle()"></m-lm-toggle>

      <m-lm-toggle label="Checkbox Label" value="false"></m-lm-toggle>
      <m-lm-toggle
        label="Checkbox Label"
        :checked="toggleCheck"
        @click="handleToggle()"
      ></m-lm-toggle>
    </div>

    <div class="items">
      <m-lm-toggle value="false" size="s"></m-lm-toggle>
      <m-lm-toggle
        :checked="toggleCheck"
        @click="handleToggle()"
        size="s"
      ></m-lm-toggle>

      <m-lm-toggle label="Checkbox Label" value="false" size="s"></m-lm-toggle>
      <m-lm-toggle
        label="Checkbox Label"
        :checked="toggleCheck"
        @click="handleToggle()"
        size="s"
      ></m-lm-toggle>
    </div>
  </div>

  <h2 class="title">Complex component</h2>
  <h3>Cards</h3>
  <div class="example">
    <div class="items">
      <m-lm-card
        title="A card in its outlined version"
        imgsrc="https://images.unsplash.com/photo-1534889156217-d643df14f14a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=640"
        imgalt="This is the Card image"
        subtitle="A subtitle"
      >
        <p>
          Fusce iaculis dolor nulla, a maximus ipsum sollicitudin et. Ut
          condimentum at orci aliquam feugiat. Curabitur sagittis placerat leo
          sit amet pharetra.
        </p>
      </m-lm-card>
      <m-lm-card
        title="A card in its outlined version"
        imgsrc="https://images.unsplash.com/photo-1534889156217-d643df14f14a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=640"
        outlined="true"
        imgalt="This is the Card image"
        subtitle="A subtitle"
      >
        <p>
          Fusce iaculis dolor nulla, a maximus ipsum sollicitudin et. Ut
          condimentum at orci aliquam feugiat. Curabitur sagittis placerat leo
          sit amet pharetra.
        </p>
        <m-lm-button label="Buy it" size="s"> </m-lm-button>
      </m-lm-card>
    </div>
  </div>
  <h3>Layer</h3>
  <div class="example">
    <div class="items">
      <m-lm-button label="Open Layer " @click="manageLayer()"></m-lm-button>
      <m-lm-layer
        title="Layer title"
        layertitletag="h3"
        :isopen="isLayerOpen"
        @closeLayer="closeLayer()"
      >
        <template v-slot:content>
          <small>
            <p>
              Fusce iaculis dolor nulla, a maximus ipsum sollicitudin et. Ut
              condimentum at orci aliquam feugiat. Curabitur sagittis placerat
              leo sit amet pharetra. Fusce iaculis dolor nulla, a maximus ipsum
              sollicitudin et. Ut condimentum at orci aliquam feugiat. Curabitur
              sagittis placerat leo sit amet pharetra. Fusce iaculis dolor
              nulla, a maximus ipsum sollicitudin et. Ut condimentum at orci
              aliquam feugiat. Curabitur sagittis placerat leo sit amet
              pharetra. Fusce iaculis dolor nulla, a maximus ipsum sollicitudin
              et. Ut condimentum at orci aliquam feugiat. Curabitur sagittis
              placerat leo sit amet pharetra. Fusce iaculis dolor nulla, a
              maximus ipsum sollicitudin et. Ut condimentum at orci aliquam
              feugiat. Curabitur sagittis placerat leo sit amet pharetra. Fusce
              iaculis dolor nulla, a maximus ipsum sollicitudin et. Ut
              condimentum at orci aliquam feugiat. Curabitur sagittis placerat
              leo sit amet pharetra. Fusce iaculis dolor nulla, a maximus ipsum
              sollicitudin et. Ut condimentum at orci aliquam feugiat. Curabitur
              sagittis placerat leo sit amet pharetra. Fusce iaculis dolor
              nulla, a maximus ipsum sollicitudin et. Ut condimentum at orci
              aliquam feugiat. Curabitur sagittis placerat leo sit amet
              pharetra. Fusce iaculis dolor nulla, a maximus ipsum sollicitudin
              et. Ut condimentum at orci aliquam feugiat. Curabitur sagittis
              placerat leo sit amet pharetra. Fusce iaculis dolor nulla, a
              maximus ipsum sollicitudin et. Ut condimentum at orci aliquam
              feugiat. Curabitur sagittis placerat leo sit amet pharetra. Fusce
              iaculis dolor nulla, a maximus ipsum sollicitudin et. Ut
              condimentum at orci aliquam feugiat. Curabitur sagittis placerat
              leo sit amet pharetra. Fusce iaculis dolor nulla, a maximus ipsum
              sollicitudin et. Ut condimentum at orci aliquam feugiat. Curabitur
              sagittis placerat leo sit amet pharetra. Fusce iaculis dolor
              nulla, a maximus ipsum sollicitudin et. Ut condimentum at orci
              aliquam feugiat. Curabitur sagittis placerat leo sit amet
              pharetra. Fusce iaculis dolor nulla, a maximus ipsum sollicitudin
              et. Ut condimentum at orci aliquam feugiat. Curabitur sagittis
              placerat leo sit amet pharetra. Fusce iaculis dolor nulla, a
              maximus ipsum sollicitudin et. Ut condimentum at orci aliquam
              feugiat. Curabitur sagittis placerat leo sit amet pharetra.
            </p>
          </small>
          <small><m-lm-button label="Primary action"></m-lm-button></small>
        </template>
      </m-lm-layer>
    </div>
  </div>

  <h3>Charts</h3>

  <div class="example">
    <m-donut
      title="Elements"
      data='[{"name":"Success","total":312,"patternId":"blue"},{"name":"Warning","total":99,"patternId":"gray"},{"name":"Information","total":160,"patternId":"orange"},{"name":"Danger","total":160,"patternId":"yellow"}]'
      colors='["#78be20","#fc961e","#25a8d0","#df382b"]'
      legendposition="left"
    ></m-donut>

    <m-lm-bar-chart
      data='[{"group":"12 Juil.","Data":{"value":"165"}},{"group":"13 Juil.","Data":{"value":"100"}},{"group":"14 Juil.","Data":{"value":"125"}},{"group":"15 Juil.","Data":{"value":"110"}},{"group":"16 Juil.","Data":{"value":"60"}},{"group":"17 Juil.","Data":{"value":"125"}},{"group":"18 Juil.","Data":{"value":"110"}}]'
      chartheight="350"
      scalemax="200"
    ></m-lm-bar-chart>
  </div>
</template>

<script>
import Button from "@mozaic-ds/mozaic-web-components/public/components/button/Button.js";
import Card from "@mozaic-ds/mozaic-web-components/public/components/card/Card.js";
import Checkbox from "@mozaic-ds/mozaic-web-components/public/components/checkbox/Checkbox.js";
import Textarea from "@mozaic-ds/mozaic-web-components/public/components/textarea/Textarea.js";
import Select from "@mozaic-ds/mozaic-web-components/public/components/select/Select.js";
import Toggle from "@mozaic-ds/mozaic-web-components/public/components/toggle/Toggle.js";
import Field from "@mozaic-ds/mozaic-web-components/public/components/field/Field.js";
import Textinput from "@mozaic-ds/mozaic-web-components/public/components/textinput/Textinput.js";
import Notification from "@mozaic-ds/mozaic-web-components/public/components/notification/Notification.js";
import Radio from "@mozaic-ds/mozaic-web-components/public/components/radio/Radio.js";
import Layer from "@mozaic-ds/mozaic-web-components/public/components/layer/Layer.js";
import Badge from "@mozaic-ds/mozaic-web-components/public/components/badge/Badge.js";
import BarChart from "@mozaic-ds/mozaic-web-components/public/components/chart/BarChart.js";

if (!customElements.get("m-lm-button")) {
  customElements.define("m-lm-button", Button);
}

if (!customElements.get("m-lm-card")) {
  customElements.define("m-lm-card", Card);
}

if (!customElements.get("m-lm-checkbox")) {
  customElements.define("m-lm-checkbox", Checkbox);
}

if (!customElements.get("m-lm-textarea")) {
  customElements.define("m-lm-textarea", Textarea);
}

if (!customElements.get("m-lm-select")) {
  customElements.define("m-lm-select", Select);
}

if (!customElements.get("m-lm-toggle")) {
  customElements.define("m-lm-toggle", Toggle);
}

if (!customElements.get("m-lm-field")) {
  customElements.define("m-lm-field", Field);
}

if (!customElements.get("m-lm-textinput")) {
  customElements.define("m-lm-textinput", Textinput);
}

if (!customElements.get("m-lm-notification")) {
  customElements.define("m-lm-notification", Notification);
}

if (!customElements.get("m-lm-radio")) {
  customElements.define("m-lm-radio", Radio);
}

if (!customElements.get("m-lm-layer")) {
  customElements.define("m-lm-layer", Layer);
}

if (!customElements.get("m-lm-badge")) {
  customElements.define("m-lm-badge", Badge);
}

if (!customElements.get("m-lm-bar-chart")) {
  customElements.define("m-lm-bar-chart", BarChart);
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

.title {
  display: flex;
  align-items: flex-end;
  padding: 0 0 2rem 2rem;
  background-color: white;
  height: 6rem;
}

h2, h3 {
  padding-left: 2rem;
}
</style>
