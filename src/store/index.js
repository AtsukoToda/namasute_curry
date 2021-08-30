import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login_user: null,
    flag: true,
    cartItems: null,
    orderedItems: [],
    itemData: [
      {
        id: 1,
        name: "カツカレー",
        text:
          "食べると勝負に勝てると言われる勝つカレー。ナマステカレー定番の１品です",
        price: 1490,
        subPrice: 2570,
        img: "/img_curry/1.jpg",
      },
      {
        id: 2,
        name: "ポークポークカレー・ミート",
        text:
          "グリーンアスパラと相性の良いベーコンにいろどりのフレッシュトマトをトッピングし特製マヨソースでまとめた商品です",
        price: 1490,
        subPrice: 2570,
        img: "/img_curry/2.jpg",
      },
      {
        id: 3,
        name: "牛すじカレー",
        text:
          "トロトロの牛すじとネギの風味が格別な味わいシンプルなカレーです！",
        price: 1490,
        subPrice: 2570,
        img: "/img_curry/3.jpg",
      },
      {
        id: 4,
        name: "味噌カツカレー",
        text:
          "マイルドな味付けのカレーに大きくカットした味噌カツをのせた、バターとチーズの風味が食欲をそそるお子様でも楽しめる商品です",
        price: 1900,
        subPrice: 2980,
        img: "/img_curry/4.jpg",
      },
      {
        id: 5,
        name: "とんかつカレーラーメン",
        text:
          "カレーはライスだけではありません。ナマステピザが開発したカレーラーメンは絶品の美味しさ！",
        price: 1900,
        subPrice: 2980,
        img: "/img_curry/5.jpg",
      },
      {
        id: 6,
        name: "ヒレカツカレー",
        text:
          "やわらかくあっさりとしたヒレ肉を上質な衣で包み込みました。4種類の濃厚な味わいが一つで楽しめるカレーです",
        price: 2700,
        subPrice: 4050,
        img: "/img_curry/6.jpg",
      },
      {
        id: 7,
        name: "濃厚Gorgeous4",
        text:
          "こだわりのソースで、旨みとコクを堪能！濃厚Gorgeous4とは、動物由来の原材料を使用していないカレーです。ベジタリアンの方にオススメです",
        price: 2570,
        subPrice: 3780,
        img: "/img_curry/7.jpg",
      },
      {
        id: 8,
        name: "カレーうどん",
        text:
          "ナマステカレー自慢のカレーに魚介のダシ、ローストオニオンのコクが加わった絶妙なスープをお楽しみください",
        price: 2160,
        subPrice: 3380,
        img: "/img_curry/8.jpg",
      },
      {
        id: 9,
        name: "Charity4",
        text:
          "にんにくとトマトの旨みが効いたスパイスカレー。食べると思わず元気が出るラクラクカレーの自信作",
        price: 2700,
        subPrice: 4050,
        img: "/img_curry/9.jpg",
      },
      {
        id: 10,
        name: "ほうれん草のカレードリア",
        text:
          "カレードリアの王道！ホワイトソースとカレーのダブルソースとなす、ほうれん草、チーズのおいしい組み合わせ",
        price: 2160,
        subPrice: 3380,
        img: "/img_curry/10.jpg",
      },
      {
        id: 11,
        name: "Specialドリア4",
        text: "ホワイトソースとカレーのダブルソースにハンバーグを合わせました",
        price: 2700,
        subPrice: 4050,
        img: "/img_curry/11.jpg",
      },
      {
        id: 12,
        name: "季節の野菜カレー",
        text:
          "季節の野菜が一つになった4種の栄養満点カレー。ナマステカレーオリジナル商品でベジタリアンの方にオススメです",
        price: 2160,
        subPrice: 3380,
        img: "/img_curry/12.jpg",
      },
      {
        id: 13,
        name: "バラエティー４",
        text:
          "あらびきスライス牛肉とイタリアンチーズを、トマトソースと特製マヨソースの2種類のソースで召し上がって頂く商品です",
        price: 2160,
        subPrice: 3380,
        img: "/img_curry/13.jpg",
      },
      {
        id: 14,
        name: "えびナスカレー",
        text:
          "デミグラスソースでじっくり煮込んだ旨味たっぷりのえびとナスのカレー",
        price: 2980,
        subPrice: 4460,
        img: "/img_curry/14.jpg",
      },
      {
        id: 15,
        name: "Family４",
        text:
          "ナマステピザ自慢「特うまプルコギ」定番「デラックス」お子様に人気「ツナマイルド」女性に好評「チーズ＆チーズ」の４種のおいしさを贅沢に組み合わせました",
        price: 2440,
        subPrice: 3650,
        img: "/img_curry/15.jpg",
      },
      {
        id: 16,
        name: "シンプルイズベスト",
        text:
          "人気ナンバー１！魚介の旨みたっぷり！人気の海の幸と、野菜のリッチなおいしさ",
        price: 2700,
        subPrice: 4050,
        img: "/img_curry/16.jpg",
      },
      {
        id: 17,
        name: "学芸会カレー",
        text:
          "みんな大好き！学芸会で作るような味を再現！定番のおいしさを味わえます",
        price: 2440,
        subPrice: 3650,
        img: "/img_curry/17.jpg",
      },
      {
        id: 18,
        name: "黄金に輝くチキンカレー",
        text: "カレーが黄金に輝く、超高級鶏肉を使用したカレーです",
        price: 2700,
        subPrice: 4050,
        img: "/img_curry/18.jpg",
      },
    ],
  },
  getters: {
    uid: (state) => (state.login_user ? state.login_user.uid : null),
    orderId: (state) => (state.cartItems ? state.cartItems.orderId : null),
  },
  mutations: {
    setLoginUser(state, user) {
      state.login_user = user;
    },
    deleteloginUser(state) {
      state.login_user = null;
    },
    addItemToCart(state, { orderId, order }) {
      order.orderId = orderId;
      state.cartItems = order;
    },
    addItemToCartForNoUser(state, itemInfo) {
      let cartItems = state.cartItems;
      cartItems.itemInfo.push(itemInfo);
    },
    addItemToOrderedItems(state, { orderId, order }) {
      order.orderId = orderId;
      state.orderedItems.push(order);
      state.cartItems = null;
    },
    deleteCartItem(state, index) {
      let cartItems = state.cartItems;
      cartItems.itemInfo.splice(index, 1);
    },
    clearCartItems(state) {
      state.cartItems = null;
    },
    clearOrderedItems(state) {
      state.orderedItems = [];
    },
    errorDelete(state) {
      state.login_user = null;
    },
    deleteLoginUser(state) {
      state.login_user = null;
    },
  },
  actions: {
    setLoginUser({ commit }, user) {
      commit("setLoginUser", user);
    },
    login() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(provider);
    },
    logout() {
      firebase.auth().signOut();
    },
    deleteLoginUser({ commit }) {
      commit("deleteLoginUser");
    },
    errorDelete({ commit }) {
      commit("errorDelete");
    },
    addItemToCart({ state, getters, commit }, { itemId, number }) {
      //一意の文字列を作成(itemごとのID用)
      function getUniqueStr(myStrong) {
        var strong = 1000;
        if (myStrong) strong = myStrong;
        return (
          new Date().getTime().toString(16) +
          Math.floor(strong * Math.random()).toString(16)
        );
      }
      let itemInfo = { id: getUniqueStr(), itemId: itemId, itemNum: number };
      let order = {
        userId: getters.uid,
        itemInfo: [itemInfo],
        status: 0,
      };
      //ログインしているかのチェック
      if (getters.uid) {
        //すでにカートが作成されている(status:0のorderがある)場合
        if (getters.orderId) {
          let newCartItems = state.cartItems;
          newCartItems.itemInfo.push(itemInfo);
          firebase
            .firestore()
            .collection(`users/${getters.uid}/order`)
            .doc(getters.orderId)
            .update({
              itemInfo: [...newCartItems.itemInfo],
            })
            .then(() => {
              commit("addItemToCart", {
                orderId: getters.orderId,
                order: newCartItems,
              });
            });
          //カートが未作成(status:0のorderがない)場合
        } else if (getters.orderId === null) {
          firebase
            .firestore()
            .collection(`users/${getters.uid}/order`)
            .add(order)
            .then((doc) => {
              commit("addItemToCart", { orderId: doc.id, order: order });
            });
        }
        //ログインしていない人がストアのカートに商品を追加できる処理(リロードで消える)
      } else {
        //ストアのカート内にデータがある時
        if (state.cartItems) {
          commit("addItemToCartForNoUser", itemInfo);
          //ストアのカートにデータがない時
        } else {
          commit("addItemToCart", { order: order });
        }
      }
    },
    deleteItemFromCart({ state, getters, commit }, { cartId }) {
      if (getters.uid) {
        let cartItems = state.cartItems;
        let a = JSON.stringify(cartItems.itemInfo);
        a = JSON.parse(a);
        const item = a.find((item) => item.id === cartId);
        const index = a.indexOf(item);
        a.splice(index, 1);
        firebase
          .firestore()
          .collection(`users/${getters.uid}/order`)
          .doc(getters.orderId)
          .update({
            itemInfo: [...a],
          })
          .then(() => {
            commit("deleteCartItem", index);
          });
      } else {
        let cartItems = state.cartItems;
        let a = JSON.stringify(cartItems.itemInfo);
        a = JSON.parse(a);
        const item = a.find((item) => item.id === cartId);
        const index = a.indexOf(item);
        commit("deleteCartItem", index);
      }
    },
    fetchOrderItems({ getters, commit }) {
      if (getters.uid) {
        firebase
          .firestore()
          .collection(`users/${getters.uid}/order`)
          .get()
          .then((snapShot) => {
            snapShot.forEach((doc) => {
              if (doc.data().status === 0) {
                commit("addItemToCart", { orderId: doc.id, order: doc.data() });
              } else {
                commit("addItemToOrderedItems", {
                  orderId: doc.id,
                  order: doc.data(),
                });
              }
            });
          });
      }
    },
    orderConfirm({ getters, commit }, { order }) {
      if (getters.uid) {
        firebase
          .firestore()
          .collection(`users/${getters.uid}/order`)
          .doc(getters.orderId)
          .update(order)
          .then(() => {
            commit("addItemToOrderedItems", {
              orderId: order.orderId,
              order: order,
            });
          });
      }
    },
    clearOrderItems({ commit }) {
      commit("clearCartItems");
      commit("clearOrderedItems");
    },
  },
});
