<template>
  <h2 class="title">Basic components</h2>
  <div class="wrapper">
    <h3 class="sub-title">Buttons</h3>
    <div class="example">
      <div class="items">
        <m-bc-button label="Button label" />

        <m-bc-button
          label="With icon"
          size="m"
          iconname="navigation-arrow-arrow--left-32px"
          iconmode="left"
          bordered="true"
        ></m-bc-button>

        <m-bc-button
          label="With icon"
          size="m"
          iconname="navigation-arrow-arrow--left-32px"
          iconmode="right"
          bordered="true"
        ></m-bc-button>

        <m-bc-button
          size="m"
          iconname="navigation-arrow-arrow--left-32px"
          iconmode="only"
          bordered="true"
        ></m-bc-button>
      </div>

      <div class="items">
        <m-bc-button label="Button label" size="s" bordered="true" />

        <m-bc-button label="Button label" size="m" bordered="true" />

        <m-bc-button label="Button label" size="l" bordered="true" />
      </div>

      <div class="items">
        <m-bc-button label="Button label" />

        <m-bc-button label="Button label" theme="neutral" />

        <m-bc-button label="Button label" theme="danger" />
      </div>

      <div class="items">
        <m-bc-button label="Button label" bordered="true" />

        <m-bc-button label="Button label" theme="neutral" bordered="true" />

        <m-bc-button label="Button label" theme="danger" bordered="true" />
      </div>
    </div>
  </div>

  <h3 class="sub-title">Badges</h3>
  <div class="example">
    <div class="items">
      <m-bc-badge label="Primary"></m-bc-badge>
      <m-bc-badge label="Success" type="success"></m-bc-badge>
      <m-bc-badge label="Danger" type="danger"></m-bc-badge>
      <m-bc-badge label="Warning" type="warning"></m-bc-badge>
      <m-bc-badge label="Neutral" type="neutral"></m-bc-badge>
    </div>
  </div>

  <h2 class="sub-title">Form elements</h2>
  <div class="example">
    <h3>Text input</h3>
    <div class="form-bc-item">
      <m-bc-textinput
        name="txt1"
        inputtype="text"
        placeholder="Text input"
      ></m-bc-textinput>
    </div>

    <h3>Select</h3>
    <div class="form-bc-item">
      <m-bc-select
        placeholder="Choose an option"
        :options="this.opts"
        :valueselected="selectValue"
      ></m-bc-select>
    </div>

    <h3>Datepicker</h3>
    <div class="form-bc-item">
      <m-bc-textinput
        name="txt1"
        inputtype="date"
        value="2022-06-06"
        placeholder="Datepicker"
      ></m-bc-textinput>
    </div>

    <h3>Textarea</h3>
    <m-bc-textarea name="txt1" placeholder="Text input"></m-bc-textarea>

    <h3>Checkbox</h3>
    <div class="items">
      <m-bc-checkbox name="chx"></m-bc-checkbox>
      <m-bc-checkbox
        class="space"
        name="chx"
        :checked="checkboxValue"
      ></m-bc-checkbox>
      <m-bc-checkbox
        name="chx"
        indeterminate="true"
        label="Checkbox Label"
      ></m-bc-checkbox>
    </div>
    <div class="items">
      <m-bc-checkbox name="chx" label="Checkbox Label"></m-bc-checkbox>
      <m-bc-checkbox
        class="space"
        name="chx"
        :checked="checkboxValue"
        label="Checkbox Label"
      ></m-bc-checkbox>
      <m-bc-checkbox
        name="chx"
        indeterminate="true"
        label="Checkbox Label"
      ></m-bc-checkbox>
    </div>

    <!-- <h3>Radio</h3>
    <div class="item">
      <m-radio id="sho"  name="showcase" label="Default"></m-radio>
      <m-radio id="shosho" name="showcase" label="Second"></m-radio>

    </div> -->

    <h3>Toogle</h3>
    <div class="items">
      <m-bc-toggle value="false"></m-bc-toggle>
      <m-bc-toggle :checked="toggleCheck" @click="handleToggle()"></m-bc-toggle>

      <m-bc-toggle label="Checkbox Label" value="false"></m-bc-toggle>
      <m-bc-toggle
        label="Checkbox Label"
        :checked="toggleCheck"
        @click="handleToggle()"
      ></m-bc-toggle>
    </div>

    <div class="items">
      <m-bc-toggle value="false" size="s"></m-bc-toggle>
      <m-bc-toggle
        :checked="toggleCheck"
        @click="handleToggle()"
        size="s"
      ></m-bc-toggle>

      <m-bc-toggle label="Checkbox Label" value="false" size="s"></m-bc-toggle>
      <m-bc-toggle
        label="Checkbox Label"
        :checked="toggleCheck"
        @click="handleToggle()"
        size="s"
      ></m-bc-toggle>
    </div>
  </div>

  <h2 class="title">Complex component</h2>
  <h3 class="sub-title">Cards</h3>
  <div class="example">
    <div class="items">
      <m-bc-card
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
      </m-bc-card>
      <m-bc-card
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
        <m-bc-button label="Buy it" size="s"> </m-bc-button>
      </m-bc-card>
    </div>
  </div>
  <h3 class="sub-title">Layer</h3>
  <div class="example">
    <div class="items">
      <m-bc-button label="Open Layer " @click="manageLayer()"></m-bc-button>
      <m-bc-layer
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
          <small><m-bc-button label="Primary action"></m-bc-button></small>
        </template>
      </m-bc-layer>
    </div>
  </div>

  <h3 class="sub-title">Charts</h3>

  <div class="example">
    <m-bc-donut
      title="Elements"
      data='[{"name":"Success","total":312,"patternId":"blue"},{"name":"Warning","total":99,"patternId":"gray"},{"name":"Information","total":160,"patternId":"orange"},{"name":"Danger","total":160,"patternId":"yellow"}]'
      colors='["#78be20","#fc961e","#25a8d0","#df382b"]'
      legendposition="left"
    ></m-bc-donut>

    <m-bc-bar-chart
      data='[{"group":"12 Juil.","Data":{"value":"165"}},{"group":"13 Juil.","Data":{"value":"100"}},{"group":"14 Juil.","Data":{"value":"125"}},{"group":"15 Juil.","Data":{"value":"110"}},{"group":"16 Juil.","Data":{"value":"60"}},{"group":"17 Juil.","Data":{"value":"125"}},{"group":"18 Juil.","Data":{"value":"110"}}]'
      chartheight="350"
      scalemax="200"
    ></m-bc-bar-chart>
  </div>
</template>

<script>
import Button from "@mozaic-ds/mozaic-web-components/public/bricoman/components/button/Button.js";
import Card from "@mozaic-ds/mozaic-web-components/public/bricoman/components/card/Card.js";
import Checkbox from "@mozaic-ds/mozaic-web-components/public/bricoman/components/checkbox/Checkbox.js";
import Textarea from "@mozaic-ds/mozaic-web-components/public/bricoman/components/textarea/Textarea.js";
import Select from "@mozaic-ds/mozaic-web-components/public/bricoman/components/select/Select.js";
import Toggle from "@mozaic-ds/mozaic-web-components/public/bricoman/components/toggle/Toggle.js";
import Field from "@mozaic-ds/mozaic-web-components/public/bricoman/components/field/Field.js";
import Textinput from "@mozaic-ds/mozaic-web-components/public/bricoman/components/textinput/Textinput.js";
import Notification from "@mozaic-ds/mozaic-web-components/public/bricoman/components/notification/Notification.js";
import Radio from "@mozaic-ds/mozaic-web-components/public/bricoman/components/radio/Radio.js";
import Layer from "@mozaic-ds/mozaic-web-components/public/bricoman/components/layer/Layer.js";
import Badge from "@mozaic-ds/mozaic-web-components/public/bricoman/components/badge/Badge.js";
import BarChart from "@mozaic-ds/mozaic-web-components/public/bricoman/components/chart/BarChart.js";

if (!customElements.get("m-bc-button")) {
  customElements.define("m-bc-button", Button);
}

if (!customElements.get("m-bc-card")) {
  customElements.define("m-bc-card", Card);
}

if (!customElements.get("m-bc-checkbox")) {
  customElements.define("m-bc-checkbox", Checkbox);
}

if (!customElements.get("m-bc-textarea")) {
  customElements.define("m-bc-textarea", Textarea);
}

if (!customElements.get("m-bc-select")) {
  customElements.define("m-bc-select", Select);
}

if (!customElements.get("m-bc-toggle")) {
  customElements.define("m-bc-toggle", Toggle);
}

if (!customElements.get("m-bc-field")) {
  customElements.define("m-bc-field", Field);
}

if (!customElements.get("m-bc-textinput")) {
  customElements.define("m-bc-textinput", Textinput);
}

if (!customElements.get("m-bc-notification")) {
  customElements.define("m-bc-notification", Notification);
}

if (!customElements.get("m-bc-radio")) {
  customElements.define("m-bc-radio", Radio);
}

if (!customElements.get("m-bc-layer")) {
  customElements.define("m-bc-layer", Layer);
}

if (!customElements.get("m-bc-badge")) {
  customElements.define("m-bc-badge", Badge);
}

if (!customElements.get("m-bc-bar-chart")) {
  customElements.define("m-bc-bar-chart", BarChart);
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
<style scoped lang="scss">
@import 'settings-tools/all-settings';
.example {
  margin: $mu200;
  padding: $mu300;
  background-color: $color-grey-000;
  border-radius: get-border-radius('l');
}

.items {
  display: flex;
  gap: $mu200;
  margin-bottom: $mu300;

  &:last-child {
    margin-bottom: 0;
  }
}

.form-item {
  width: 40%;
}

.title {
  display: flex;
  align-items: flex-end;
  padding: 0 0 $mu200 $mu200;
  background-color: $color-grey-000;
  height: $mu600;
  margin: 0;
}
.sub-title {
  padding-left: $mu200;
}
</style>
