if (Meteor.isClient) {

Template.hello.events({
  "click .buttonRefresh": function(e){
    var data = [
      {id: 0, label: "COOL", val: Math.floor(Math.random() * 500)},
      {id: 1, label: "LOL",  val: Math.floor(Math.random() * 500)},
      {id: 2, label: "TEST", val: Math.floor(Math.random() * 500)},
      {id: 3, label: "TOTO", val: Math.floor(Math.random() * 500)},
      {id: 4, label: "TUTU", val: Math.floor(Math.random() * 500)},
      {id: 5, label: "TATA", val: Math.floor(Math.random() * 500)},
    ];

    var dataLine = 
      [{
        id: 0,
        points: 
          [{
            id: 0,
            coord:[0, Math.floor(Math.random() * 500)],
            label: "label 1"
            },{
            id: 1,
            coord:[34, Math.floor(Math.random() * 500)],
            label: "label 2"
            },{
            id: 2,
            coord:[75, Math.floor(Math.random() * 500)],
            label: "label 3"
            },{
            id: 3,
            coord:[100, Math.floor(Math.random() * 500)],
            label: "label 4"
          }]
      }];

    var dataDonut = 
      [{
        id: 0,
        label: "LOL",
        val: Math.floor(Math.random() * 500)
      },{
        id: 1,
        label: "COOL",
        val: Math.floor(Math.random() * 500)
      },{
        id: 3,
        label: "WTF",
        val: Math.floor(Math.random() * 500)
      }];
    EzCharts.reDraw("myFirstBar", data);
    EzCharts.reDraw("myFirstLine", dataLine);
    EzCharts.reDraw("myFirstDonut", dataDonut);
  }
});

  Template.hello.helpers({
    dataBarTest: function () {
    var data = [
      {id: 0, label: "Organic Abandonners", val: 350},
      {id: 1, label: "Retargeted Abandonners", val: 20},
      {id: 2, label: "Reengaged People", val: 10},
      {id: 3, label: "Lorem", val: 5},
      {id: 4, label: "LittleVal1", val: 1},
      {id: 5, label: "LittleVal2", val: 2},
      {id: 6, label: "LittleVal3", val: 3},
    ];
      return data;
    },
    dataBarTest2: function () {
    var data = [
      {id: 0, label: "label 1", val: 50},
      {id: 1, label: "label 2", val: 120},
      {id: 2, label: "label 3", val: 310},
      {id: 3, label: "Very long label 4 on two lines", val: 25},
    ];
      return data;
    },
    dataLineTest: function () {
      var data = 
      [{
        id: 0,
        points: 
          [{
            id: 0,
            coord:[12, 46],
            label: "label 1"
            },{
            id: 1,
            coord:[24, 12],
            label: "label 2"
            },{
            id: 2,
            coord:[65, 75],
            label: "label 3"
            },{
            id: 3,
            coord:[87, 54],
            label: "label 4"
          }]
      },{
        id: 1,
        points: 
          [{
            id: 0,
            coord:[22, 16],
            label: "label 1"
            },{
            id: 1,
            coord:[34, 22],
            label: "label 2"
            },{
            id: 2,
            coord:[45, 25],
            label: "label 3"
            },{
            id: 3,
            coord:[57, 74],
            label: "label 4"
          }]
      }];
      return data;
    },
    dataLineTest2: function () {
      var data = 
      [{
        id: 0,
        points: 
          [{
            id: 0,
            coord:[120, 86],
            label: "label 1"
            },{
            id: 1,
            coord:[240, 22],
            label: "label 2"
            },{
            id: 2,
            coord:[650, 45],
            label: "label 3"
            },{
            id: 3,
            coord:[870, 84],
            label: "label 4"
          }]
      }];
      return data;
    },    
    dataDonutTest: function () {
      var data = 
      [{
        id: 0,
        label: "Group 1",
        val: 459
      },{
        id: 1,
        label: "Group 2",
        val: 200
      },{
        id: 3,
        label: "Group 3",
        val: 100
      },{
        id: 4,
        label: "Group 3",
        val: 10
      },{
        id: 5,
        label: "Group 3",
        val: 20
      },{
        id: 6,
        label: "Group 3",
        val: 70
      },{
        id: 7,
        label: "Group 3",
        val: 10
      },{
        id: 8,
        label: "Group 3",
        val: 100
      }];
      return data;
    },
    dataDonutTest2: function () {
      var data = 
      [{
        id: 3,
        label: "Buyers",
        val: 459
      },{
        id: 4,
        label: "All visits",
        val: 200
      },{
        id: 5,
        label: "Others",
        val: 100
      }];
      return data;
    },
    widthTest: function(){return 800;},
    heightTest: function(){return 500;},
    
    //FOR THE NEXT VERSION
    
    // trBarCb: function(data){
    //   return function(data){
    //     var aggregData = new Array();
    //     var Alimit = this.aggregLimit;
    //     this.aggregatedData = new Array();
    //     _.each(data, function(elem, i){
    //       if(elem.val < Alimit){
    //         this.aggregatedData.push(elem);
    //       }
    //     },this);
    //     console.log("val: ", this.aggregatedData.length);
    //     if(this.aggregatedData.length > 1){
    //       var totalAggreg = 0;
    //       _.each(data, function(elem, i){
    //       if(elem.val < Alimit)
    //         totalAggreg += elem.val;
    //       else
    //         aggregData.push(elem);
    //       });
    //       aggregData.push({id: aggregData.length, label: this.aggregLabel, val: totalAggreg, aggregated: true});
    //       data = aggregData;
    //       console.log("data: ", data);
    //     }
    //   }
    // },
    // clBarCb: function(){
    //   return function(){

    //   }
    // }
  });
}
