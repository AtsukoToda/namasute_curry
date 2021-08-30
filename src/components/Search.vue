<template>
  <v-container>
    <div class="contents_position">
      <v-row justify="center">
        <v-col cols="12" sm="10" md="8" lg="6">
          <h2>商品を検索する</h2>
          <v-form>
            <div>
              <v-text-field
                label="商品名 or キーワードで検索"
                v-model="search_term"
              ></v-text-field>
              <v-btn color="#309040" @click="getArticles()">検索</v-btn>&nbsp;
              <v-btn @click="removetext()">クリア</v-btn>
            </div>
          </v-form>
        </v-col>
      </v-row>
      <div
        v-if="show"
        align="center"
        style="font-size:20px; font-weight: bold"
        class="ma-10"
      >
        該当する商品がありません
      </div>
      <v-row>
        <v-col
          cols="4"
          v-for="(search, index) in changeView"
          :key="index"
          align="center"
        >
          <v-card class="item" elevation="5">
            <div>
              <router-link
                :to="{ name: 'ItemDetail', params: { item_id: search.id } }"
              >
                <v-img :src="search.img" class="img"></v-img>
              </router-link>
            </div>
            <div>
              <v-card-title id="titleArea">
                <router-link
                  class="text"
                  :to="{ name: 'ItemDetail', params: { item_id: search.id } }"
                  >{{ search.name }}</router-link
                >
              </v-card-title>
            </div>
            <v-row>
              <v-spacer></v-spacer>
              <v-col cols="9">
                <div>
                  <span class="price">{{ search.price.toLocaleString() }}</span
                  >円(税抜)
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      search_term: "",
      searchBox: [],
      searchItem: [],
      show: false,
    };
  },
  computed: {
    changeView() {
      return this.searchItem;
    },
  },
  methods: {
    getArticles() {
      this.searchItem = [];
      this.searchBox = this.$store.state.itemData;
      this.searchBox.forEach((search) => {
          console.log(search)
        let findName = search.name;
        //search関数でnullの時は-1を返すようにしている
        if (0<=findName.search(this.search_term)) {
            console.log(this.search_term)
          this.searchItem.push(search);
        } else {
          this.$store.state.flag = false;
        }
      });
      if (this.searchItem.length === 0) {
        this.show = true;
      } else {
        this.show = false;
      }
    },
    removetext() {
      this.search_term = "";
      this.searchItem = [];
      this.$store.state.flag = true;
      this.show = false;
    },
  },
};
</script>
