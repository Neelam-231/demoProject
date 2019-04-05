
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js"></script>

<template>
  <div id="app" class="printing" ref="printTable">
  <canvas id="myChart" width="400" height="200"></canvas>


                <h1>Printd</h1>

                <p>
                  This is an <b>example!</b> using a <a href="https://vuejs.org/" target="_blank">VueJS</a> <em>component</em>. 🚀
                </p>

                <a href="https://vuejs.org/" target="_blank"><img src="https://vuejs.org/images/logo.png" width="140" height="140"></a>
                <canvas id="myCanvas" width="200" height="100" style="border:1px solid #000000;">
                   Your browser does not support the HTML5 canvas tag.
                 </canvas>

            <pre>
              import Printd from 'printd'

              const p: Printd = new Printd()
              p.print(this.$el, '.color { color: blue; }')
            </pre>

                <button @click="print">Print this component</button>
            </div>

 </template>

<script>
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});


</script>

  <script>
  import Printd from 'printd';
  export default{
  data(){
  return {
    cssText: `
      .printing {
        font-family: sans-serif;
        width: 500px;
        border: solid 1px #ccc;
        text-align: center;
        padding: 1em;
        margin: 2em auto;
      }

      button {
        background-color: #f0f0f0;
        border: solid 1px #bbb;
        padding: 10px;
        font-size: 15px;
        border-radius: 5px;
      }

      pre {
        color: #c7254e;
      }
    `}
  },

  mounted () {

  //  const { contentWindow } = this.d.getIFrame()
    //contentWindow.addEventListener(
      //'beforeprint', () => console.log('before print event!')
    //)
    //contentWindow.addEventListener(
      //'afterprint', () => console.log('after print event!')
    //)
  },

  methods: {
    print () {
      this.d = new Printd();
      var divToPrint= this.$refs.printTable;
      this.d.print( this.$refs.printTable, [this.cssText])
    }
  }
};
</script>

  <style>

  .printing {
  font-family: sans-serif;
  max-width: 600px;
  border: solid 1px #ccc;
  text-align: center;
  padding: 1em;
  margin: 2em auto;
}

button {
  background-color: #f0f0f0;
  border: solid 1px #bbb;
  padding: 10px;
  font-size: 15px;
  border-radius: 5px;
}

pre {
  color: #c7254e;
}

</style>
