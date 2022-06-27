<template>
  <div>
    <h1>Home Page</h1>
    <h3>{{ title }}!</h3>
    <h5>{{ title2 }}!</h5>
    <input type="text" v-model="inputValue1" >
    <button type="button" @click="getData">Get</button>
    <button type="button" @click="setData">Set</button>

    <select class="form-control" v-model="region" @change="changeRegion">  
      <option :key="i" :value="item.v" v-for="(item, i) in options">{{item.t}}</option>
    </select>
    <table class="table table-bordered" v-if="!tableShow">
      <tr :key="i" v-for="(item, i) in options">
        <td>{{ item.v }}</td>
        <td>{{ item.t }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name : "home-content",
  data() {
    return {
      title : "홈 타이틀",
      title2 : "Welcome to Home",
      inputValue1 : "abd",
      options : [
        { v: "S", t : "Seoul" },
        { v: "K", t : "Jeju"  },
        { v: "J", t : "Busan" }
      ],
      region : "K",
      tableShow : false
    }
  },
  watch : {
    inputValue1(){
      console.log(this.inputValue1);
    }
  },
  methods : {
    //get, set 데이터 컨트롤
    getData(){
      alert( this.inputValue1 );
    },
    setData(){
      this.inputValue1 = 12345;
    },
    changeRegion(){
      alert(this.region);
    }
  },
  beforeCreate(){
    console.log("1");
  },
  created(){
    console.log("2");
  },
  beforeMount(){
    console.log("3");
  },
  mounted(){
    console.log("4");
  },
  beforeUpdate(){
    console.log("5");
  },
  updated(){
    console.log("6");
  },
  beforeDestroy(){
    console.log("7");
  },
  destroyed(){
    console.log("8");
  }
}
</script>