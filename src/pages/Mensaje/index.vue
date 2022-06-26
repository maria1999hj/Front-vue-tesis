<template>
  <div>
    <q-input @click="onclick" class="click" v-model="text" :dense="dense" />
    <br />

    <div @click="onclick" class="click">Hola maria aquí estoy</div>

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="mail" color="accent" />
    </q-page-sticky>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MensajePages",
  setup() {
    const onclick = () => {
      console.log("Me estás dando click");
    };

    return {
      onclick,
    };
  },
});
</script>

<style >
.click {
  cursor: pointer;
}
</style>