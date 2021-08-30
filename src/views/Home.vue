<template>
  <v-app>
    <Search></Search>
    <v-container v-if="$store.state.flag">
      <div class="contents_position">
        <v-row>
          <v-col cols="4" v-for="(item, index) of itemData" :key="index">
            <v-card class="item">
              <router-link
                :to="{ name: 'ItemDetail', params: { item_id: item.id } }"
              >
                <v-img :src="item.img" class="img"></v-img>
              </router-link>
              <v-card-title>
                <router-link
                  :to="{ name: 'ItemDetail', params: { item_id: item.id } }"
                  class="text"
                >
                  {{ item.name }}
                </router-link>
              </v-card-title>
              <v-row>
                <v-col class="price_prace">
                  <div>
                    <span class="price">{{ item.price.toLocaleString() }}</span
                    >円(税抜)
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
import Search from '../components/Search.vue';

export default {
  name: "Home",
  components: {
    Search
  },
  created(){
    this.$store.state.flag = true
  },
  computed: {
    ...mapState(["itemData"]),
  },
};
</script>

<style>
.item {
  width: 300px;
  height: 350px;
}
.img {
  width: 300px;
  height: 200px;
  border-bottom: solid 0.5px gray;
  background-color: white;
}
.text {
  text-decoration: none;
  font-size: 20px;
}
.text:hover {
  color: #1a1a96;
}
.price {
  text-align: center;
  font-size: 20px;
}
.price_prace {
  text-align: center;
}
.contents_position {
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
