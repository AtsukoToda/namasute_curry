<template>
  <v-container>
    <h1>商品詳細</h1>
    <v-row>
      <v-col>
        <img :src="item.img" alt="商品の画像" class="img_size" />
      </v-col>
      <v-col>
        <h2>{{ item.name }}</h2>
        <p class="item_text">{{ item.text }}</p>
        <p class="item_price">
          価格：<span class="price_font_size"
            >{{ item.price.toLocaleString() }}円</span
          >(税抜き)
        </p>
        <v-col>
          <v-text-field
            width="10"
            v-model="number"
            type="number"
            max="10"
            min="1"
            label="購入個数"
            style="width:100px;text-align:center"
          >
          </v-text-field>
        </v-col>
        <div class="total_price">
          <h2>
            ご注文金額合計：{{
              (item.price * number).toLocaleString()
            }}円(税抜)
          </h2>
          <v-btn @click="addCart()" color="orange" dark
            ><strong>カートに入れる</strong></v-btn
          >
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: "ItemDetail",
  data() {
    return {
      item: "",
      items: this.$store.state.itemData,
      number: 1,
    };
  },
  created() {
    let paramId = this.$route.params.item_id;
    this.items.forEach((item) => {
      if (paramId === item.id) {
        this.item = item;
      }
    });
  },
   methods:{
        ...mapActions(['addItemToCart']),
        addCart(){
            if(confirm(`${this.item.name}を${this.number}個追加しますがよろしいですか？`)){
                this.addItemToCart({itemId:this.item.id,number:this.number}).then(()=>{
                    this.$router.push('/cart')
                })
            }
        }
    }
};
</script>

<style scoped>
.img_size {
  width: 300px;
  margin-top: 80px;
  margin-left: 50px;
}
.item_text {
  margin-top: 50px;
}
.item_price {
  margin-top: 50px;
  text-align: center;
}
.price_font_size {
  font-size: 20px;
  font-weight: bold;
}
.total_price {
  text-align: right;
}
</style>
