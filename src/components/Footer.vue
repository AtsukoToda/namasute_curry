<template>
    <v-footer  color="#309040" padless>
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in links"
          :key="link"
          :to="link"
          color="white"
          text
          rounded
          class="my-2"
        >
          {{ link }}
        </v-btn>
        <v-col class="#309040 py-4 text-center white--text" cols="12">
          <div>🇮🇳本場インドのスパイスを贅沢に使ったカレー専門店🇮🇳</div>
          ©️ {{ new Date().getFullYear() }} — <strong>ナマステカレー</strong>
        </v-col>
      </v-row>
    </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    links: ["home", "cart"],
    //"Contact Us"
  }),
};
</script>

<style></style>
