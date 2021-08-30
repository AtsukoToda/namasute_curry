<template>
  <v-app-bar color="#fc9c34" app>
    <!--ヘッダー内容-->
    <router-link to="/home">
      <img
        src="../public/img/curry_logo.png"
        height="80px"
        width="160px"
      />
    </router-link>
    <!-- <v-list-item>
        <v-list-item-avatar>
          <img v-if="photoURL" :src="photoURL" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{userName}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item> -->
    <v-spacer></v-spacer>
    <router-link to="/cart" class="mx-5 link">ショッピングカート</router-link>
    <router-link to="/orderhistory" class="mx-5 link">注文履歴</router-link>
    <v-btn v-if="$store.state.login_user === null" class="mx-5" @click="login"
      >ログイン</v-btn
    >
    <v-btn v-else-if="$store.state.login_user" class="mx-5" @click="logout"
      >ログアウト</v-btn
    >
  </v-app-bar>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import firebase from "firebase";

export default {
  name: "Header",
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setLoginUser(user);
      } else {
        this.deleteLoginUser();
      }
    });
  },
  methods: {
    ...mapActions(["login", "setLoginUser", "logout", "deleteloginUser"]),
  },
  computed: {
    ...mapGetters(["userName", "photoURL"]),
  },
};
</script>

<style scoped>
.link {
  text-decoration: none;
  color: black;
}
</style>
