<template>
  <div class="hello" id="printMe" ref="printTable">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>

    <button class="button" @click="printData"> Print page </button>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
      return {
    //  print : "Neelam Thakur"
        newWin:'',
        stylesHtml:[],
      }
  },
  methods: {
  	/*printNow(value){
    	this.print = value;
      window.print();
    }**/

   printData()
    {
    var divToPrint= this.$refs.printTable;
    const prtHtml = document.getElementById('printMe').innerHTML;
    for(var node of [document.querySelectorAll('link[rel="stylesheet"], style')]){
      this.stylesHtml.push(node)
    }
    console.log(this.stylesHtml);
    this.newWin= window.open("")
    this.newWin.document.write(`<!DOCTYPE html><html><head>${this.stylesHtml}</head><body>${prtHtml}</body></html>`);
    //console.log(document.querySelectorAll('link[rel="stylesheet"], style'));
    /*this.newWin= window.open("");
    this.newWin.document.write(divToPrint.innerHTML);**/
    this.newWin.print();
    this.newWin.close();
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
