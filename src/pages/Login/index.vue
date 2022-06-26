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
          :rules="[(val) => (val && val.length > 0) || 'Por favor completar']"
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
          :rules="[(val) => (val && val.length > 0) || 'Por favor completar']"
        >
          <template v-slot:prepend>
            <q-icon name="ti-lock" />
          </template>
        </q-input>
        <q-toggle v-model="accept" label="Recordar contraseña" />
        <q-btn type="submit" push color="primary" label="Iniciar sesión" />
      </q-form>
    </section>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import { NotifyError } from "../../utils";
import { api } from "boot/axios";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "LoginPage",
  setup() {
    const usuario = ref();
    const contrasenia = ref();
    const router = useRouter();
    const accept = ref(false);

    const handleLogin = async () => {
      let post = {
        email: usuario.value,
        password: contrasenia.value,
      };

      try {
        const result = await api.post("/login", post);

        if (result.status === 200) {
          router.push("/");
        }
      } catch (error) {
        if (error.response.status === 404) {
          NotifyError("Usuario o contraseña incorrecta");
        }
      }
    };

    return {
      usuario,
      contrasenia,
      handleLogin,
      dense: ref(false),
      accept,
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
