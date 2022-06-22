<template>
  <div class="login">
    <img class="login-img" :src="require('../../assets/img2.jpg')" />
    <section class="login-section">
      <q-form class="login-section-form" @submit.prevent="handleLogin">
        <img
          class="login-section-form-logo"
          :src="require('../../assets/logo.jpg')"
        />

        <q-input
          rounded
          standout
          v-model="usuario"
          outlined
          label="Usuario"
          dense
        >
          <template v-slot:prepend>
            <q-icon name="ti-user" />
          </template>
        </q-input>

        <q-input
          rounded
          standout
          type="password"
          v-model="contrasenia"
          outlined
          label="Contraseña"
          dense
        >
          <template v-slot:prepend>
            <q-icon name="ti-lock" />
          </template>
        </q-input>

        <q-btn
          type="submit"
          push
          color="primary"
          @click="showNotif"
          label="Iniciar sesión"
        />
        <q-toggle class="dense" v-model="dense" label="Recordar contraseña" />
      </q-form>
    </section>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import axios from "axios";
import { useQuasar } from "quasar";
import { Notify } from "quasar";

export default defineComponent({
  name: "LoginPage",
  setup() {
    const usuario = ref();
    const contrasenia = ref();
    const $q = useQuasar();
    const handleLogin = () => {
      let post = {
        email: usuario.value,
        password: contrasenia.value,
      };
      axios.post("http://localhost:7000/login", post).then((result) => {
        console.log(result);
      });
    };

    return {
      usuario,
      contrasenia,
      handleLogin,
      dense: ref(false),
      showNotif() {
        $q.notify({
          message: "Ingreso exitoso" + " " + usuario.value,
          color: "blue",
          position: "top-right",
        });
      },
    };
  },
});
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-img {
  position: fixed;
  height: 100%;
  width: 100%;
}

.login-section {
  width: 350px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.266);
  padding: 8px;
}

.login-section-form {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.login-section-form-title {
  margin: 0;
  font-size: 35px;
  padding: 0;
  line-height: 100%;
  text-align: center;
  font-weight: bold;
  color: rgb(19, 19, 207);
}

.login-section-form-logo {
  width: 90px;
  margin-left: auto;
  margin-right: auto;
}
.dense {
  justify-content: right;
}
</style>
