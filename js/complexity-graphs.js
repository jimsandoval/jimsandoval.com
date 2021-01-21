(function() {

  'use strict';

angular.module('app', [])

.directive("test", function() {

    return {
        restrict: 'A',
        template: 
          '<h2>Basic Chart</h2>',
    };
})
.directive("basicChart", function() {

    return {
        restrict: 'A',
        template: 
          '<div id="basic-chart"></div>'+
          '<span class="caption text-muted">3 phases: prep, build, and stagnation.</span>',
        controller: function($rootScope, $scope) {
          var vm = this;
          var basicChart = c3.generate({
              bindto: '#basic-chart',
              data: {
                xs: {
                  normal: 'normal_x',
                },
                columns: [
                  ['normal_x', 0, 1, 2, 4],
                  ['normal', 0, 30, 250, 300],
                ],
                types: {normal: 'spline'}
              },
              legend: {show: false},
              axis: {
                  x: {
                      tick: { 
                          format: function(x) { return '';},
                          count: 0
                      },
                      label: {text: 'Time', position: 'outer-middle'},
                  },
                  y: {
                      tick: { format: function(x) { return '';}},
                      label: {text: 'Functionality', position: 'outer-middle'}
                  }
              }
          });

          d3.select("#basic-chart svg").append("text")
              .attr("x", 50 )
              .attr("y", 235)
              .text("Prep");

          d3.select("#basic-chart svg").append("text")
              .attr("x", 50 )
              .attr("y", 150)
              .text("Build");

          d3.select("#basic-chart svg").append("text")
              .attr("x", 50 )
              .attr("y", 30)
              .text("Stagnate");

        },
        controllerAs: 'vm'
    };
})
.directive("comparisonChart", function() {

    return {
        restrict: 'A',
        template: 
          '<div id="comp-chart"></div>'+
          '<span class="caption text-muted">Good vs bad development groups</span>',
        controller: function($rootScope, $scope) {
          var vm = this;

          var compChart = c3.generate({
              bindto: '#comp-chart',
              data: {
                xs: {
                  normal: 'normal_x',
                  good: 'good_x',
                  bad: 'bad_x',
                },
                colors: {
                  normal: 'blue', 
                  good: 'green', 
                  bad: 'red'
                },
                columns: [
                  ['normal_x', 0, 1, 2, 4],
                  ['normal', 0, 30, 250, 300],
                  ['good_x', 0, 1.25, 2.5, 5],
                  ['good',   0, 20,  650, 750],
                  ['bad_x', 0, .75, 1.75, 2.5],
                  ['bad',    0, 50, 180, 200],
                ],
                types: {normal: 'spline', good: 'spline', bad: 'spline'}
              },
              axis: {
                  x: {
                      tick: { 
                          format: function(x) { return '';},
                          count: 0
                      },
                      label: {text: 'Time', position: 'outer-middle'},
                  },
                  y: {
                      tick: { format: function(x) { return '';}},
                      label: {text: 'Functionality', position: 'outer-middle'}
                  }
              }
          });
        },
        controllerAs: 'vm'
    };
})
.directive("cheatChart", function() {

    return {
        restrict: 'A',
        template: 
          '<div id="cheat-chart"></div>'+
          '<span class="caption text-muted">One way to fake it</span>',
        controller: function($rootScope, $scope) {
          var vm = this;
          var cheatChart = c3.generate({
              bindto: '#cheat-chart',
              data: {
                xs: {
                  one: 'one_x',
                  two: 'two_x',
                  three: 'three_x',
                  four: 'four_x',
                },
                columns: [
                  ['one_x', 0, 1, 2, 3],
                  ['one', 0, 30, 250, 300],
                  ['two_x', 3, 4, 5, 6],
                  ['two', 0, 30, 250, 300],
                  ['three_x', 6,7,8,9],
                  ['three', 0, 30, 250, 300],
                  ['four_x', 9,10,11,12],
                  ['four', 0, 30, 250, 300],
                ],
                types: {one: 'spline', two: 'spline', three: 'spline', four: 'spline'}
              },
              axis: {
                  x: {
                      tick: { 
                          format: function(x) { return '';},
                          count: 0
                      },
                      label: {text: 'Time', position: 'outer-middle'},
                  },
                  y: {
                      tick: { format: function(x) { return '';}},
                      label: {text: 'Functionality', position: 'outer-middle'}
                  }
              }
          });
       },
        controllerAs: 'vm'
    };
})

.directive("reengineeringChart", function() {

    return {
        restrict: 'A',
        template: 
          '<div id="reeng-chart"></div>'+
          '<span class="caption text-muted">Continuous reinvestment</span>',
        controller: function($rootScope, $scope) {
          var vm = this;
          var reengChart = c3.generate({
              bindto: '#reeng-chart',
              data: {
                xs: {
                  normal: 'normal_x',
                  reeng: 'reeng_x',
                },
                columns: [
                  ['normal_x', 0, 1, 2, 4],
                  ['normal', 0, 30, 250, 300],
                  ['reeng_x', 2, 3, 4, 6],
                  ['reeng', 300, 330, 650, 700],
                ],
                types: {normal: 'spline', reeng: 'spline'}
              },
              axis: {
                  x: {
                      tick: { 
                          format: function(x) { return '';},
                          count: 0
                      },
                      label: {text: 'Time', position: 'outer-middle'},
                  },
                  y: {
                      tick: { format: function(x) { return '';}},
                      label: {text: 'Functionality', position: 'outer-middle'}
                  }
              }
          });

       },
        controllerAs: 'vm'
    };
})

.directive("nEqualsFour", function() {

    return {
        restrict: 'A',
        template: 
          '<div id="n-equals-four">'+
              '<svg width="400" height="300"></svg>'+
          '</div>',
        controller: function($rootScope, $scope) {
          var vm = this;
          var svg = d3.select("#n-equals-four svg"),
              width = +svg.attr("width"),
              height = +svg.attr("height");


          var pts = [
            { "x": 60,   "y": 70 },
            { "x": 220,  "y": 70},
            { "x": 220,  "y": 230},
            { "x": 60,   "y": 230},
            ];

          svg.append("line").attr("x1", pts[0].x).attr("y1", pts[0].y).attr("x2", pts[1].x).attr("y2", pts[1].y).attr("stroke-width", 2).attr("stroke", "black");
          svg.append("line").attr("x1", pts[0].x).attr("y1", pts[0].y).attr("x2", pts[2].x).attr("y2", pts[2].y).attr("stroke-width", 2).attr("stroke", "black");
          svg.append("line").attr("x1", pts[0].x).attr("y1", pts[0].y).attr("x2", pts[3].x).attr("y2", pts[3].y).attr("stroke-width", 2).attr("stroke", "black");
          svg.append("line").attr("x1", pts[1].x).attr("y1", pts[1].y).attr("x2", pts[2].x).attr("y2", pts[2].y).attr("stroke-width", 2).attr("stroke", "black");
          svg.append("line").attr("x1", pts[1].x).attr("y1", pts[1].y).attr("x2", pts[3].x).attr("y2", pts[3].y).attr("stroke-width", 2).attr("stroke", "black");
          svg.append("line").attr("x1", pts[2].x).attr("y1", pts[2].y).attr("x2", pts[3].x).attr("y2", pts[3].y).attr("stroke-width", 2).attr("stroke", "black");


          var circles = svg.selectAll("circle")
                         .data(pts)
                         .enter()
                         .append("circle");


          circles.attr("cx", function (d) { return d.x; })
                       .attr("cy", function (d) { return d.y; })
                       .attr("r", function (d) { return 10; })
                       .style("fill", function(d) { return "gray"; });


       },
        controllerAs: 'vm'
    };
})
.directive("nEqualsEight", function() {

    return {
        restrict: 'A',
        template: 
          '<div id="n-equals-eight">'+
            '<svg width="400" height="300"></svg>'+
          '</div>',
        controller: function($rootScope, $scope) {
          var vm = this;
          var svg = d3.select("#n-equals-eight svg"),
              width = +svg.attr("width"),
              height = +svg.attr("height");

          var pts = [
            { "x": 188,   "y": 58},
            { "x": 112,   "y": 58},
            { "x": 58,   "y": 112},
            { "x": 58,   "y": 188},
            { "x": 112,   "y": 242},
            { "x": 188,   "y": 242},
            { "x": 242,   "y": 188},
            { "x": 242,   "y": 112},
            ];

          svg.append("line").attr("x1", pts[0].x).attr("y1", pts[0].y).attr("x2", pts[1].x).attr("y2", pts[1].y).attr("stroke-width", 2).attr("stroke", "black");
          svg.append("line").attr("x1", pts[0].x).attr("y1", pts[0].y).attr("x2", pts[2].x).attr("y2", pts[2].y).attr("stroke-width", 2).attr("stroke", "black");
          svg.append("line").attr("x1", pts[0].x).attr("y1", pts[0].y).attr("x2", pts[3].x).attr("y2", pts[3].y).attr("stroke-width", 2).attr("stroke", "black");
          svg.append("line").attr("x1", pts[0].x).attr("y1", pts[0].y).attr("x2", pts[4].x).attr("y2", pts[4].y).attr("stroke-width", 2).attr("stroke", "black");
          svg.append("line").attr("x1", pts[0].x).attr("y1", pts[0].y).attr("x2", pts[5].x).attr("y2", pts[5].y).attr("stroke-width", 2).attr("stroke", "black");
          svg.append("line").attr("x1", pts[0].x).attr("y1", pts[0].y).attr("x2", pts[6].x).attr("y2", pts[6].y).attr("stroke-width", 2).attr("stroke", "black");
          svg.append("line").attr("x1", pts[0].x).attr("y1", pts[0].y).attr("x2", pts[7].x).attr("y2", pts[7].y).attr("stroke-width", 2).attr("stroke", "black");

          svg.append("line").attr("x1", pts[1].x).attr("y1", pts[1].y).attr("x2", pts[2].x).attr("y2", pts[2].y).attr("stroke-width", 2).attr("stroke", "black");
          svg.append("line").attr("x1", pts[1].x).attr("y1", pts[1].y).attr("x2", pts[3].x).attr("y2", pts[3].y).attr("stroke-width", 2).attr("stroke", "black");
          svg.append("line").attr("x1", pts[1].x).attr("y1", pts[1].y).attr("x2", pts[4].x).attr("y2", pts[4].y).attr("stroke-width", 2).attr("stroke", "black");
          svg.append("line").attr("x1", pts[1].x).attr("y1", pts[1].y).attr("x2", pts[5].x).attr("y2", pts[5].y).attr("stroke-width", 2).attr("stroke", "black");
          svg.append("line").attr("x1", pts[1].x).attr("y1", pts[1].y).attr("x2", pts[6].x).attr("y2", pts[6].y).attr("stroke-width", 2).attr("stroke", "black");
          svg.append("line").attr("x1", pts[1].x).attr("y1", pts[1].y).attr("x2", pts[7].x).attr("y2", pts[7].y).attr("stroke-width", 2).attr("stroke", "black");

          svg.append("line").attr("x1", pts[2].x).attr("y1", pts[2].y).attr("x2", pts[3].x).attr("y2", pts[3].y).attr("stroke-width", 2).attr("stroke", "black");
          svg.append("line").attr("x1", pts[2].x).attr("y1", pts[2].y).attr("x2", pts[4].x).attr("y2", pts[4].y).attr("stroke-width", 2).attr("stroke", "black");
          svg.append("line").attr("x1", pts[2].x).attr("y1", pts[2].y).attr("x2", pts[5].x).attr("y2", pts[5].y).attr("stroke-width", 2).attr("stroke", "black");
          svg.append("line").attr("x1", pts[2].x).attr("y1", pts[2].y).attr("x2", pts[6].x).attr("y2", pts[6].y).attr("stroke-width", 2).attr("stroke", "black");
          svg.append("line").attr("x1", pts[2].x).attr("y1", pts[2].y).attr("x2", pts[7].x).attr("y2", pts[7].y).attr("stroke-width", 2).attr("stroke", "black");

          svg.append("line").attr("x1", pts[3].x).attr("y1", pts[3].y).attr("x2", pts[4].x).attr("y2", pts[4].y).attr("stroke-width", 2).attr("stroke", "black");
          svg.append("line").attr("x1", pts[3].x).attr("y1", pts[3].y).attr("x2", pts[5].x).attr("y2", pts[5].y).attr("stroke-width", 2).attr("stroke", "black");
          svg.append("line").attr("x1", pts[3].x).attr("y1", pts[3].y).attr("x2", pts[6].x).attr("y2", pts[6].y).attr("stroke-width", 2).attr("stroke", "black");
          svg.append("line").attr("x1", pts[3].x).attr("y1", pts[3].y).attr("x2", pts[7].x).attr("y2", pts[7].y).attr("stroke-width", 2).attr("stroke", "black");

          svg.append("line").attr("x1", pts[4].x).attr("y1", pts[4].y).attr("x2", pts[5].x).attr("y2", pts[5].y).attr("stroke-width", 2).attr("stroke", "black");
          svg.append("line").attr("x1", pts[4].x).attr("y1", pts[4].y).attr("x2", pts[6].x).attr("y2", pts[6].y).attr("stroke-width", 2).attr("stroke", "black");
          svg.append("line").attr("x1", pts[4].x).attr("y1", pts[4].y).attr("x2", pts[7].x).attr("y2", pts[7].y).attr("stroke-width", 2).attr("stroke", "black");

          svg.append("line").attr("x1", pts[5].x).attr("y1", pts[5].y).attr("x2", pts[6].x).attr("y2", pts[6].y).attr("stroke-width", 2).attr("stroke", "black");
          svg.append("line").attr("x1", pts[5].x).attr("y1", pts[5].y).attr("x2", pts[7].x).attr("y2", pts[7].y).attr("stroke-width", 2).attr("stroke", "black");

          svg.append("line").attr("x1", pts[6].x).attr("y1", pts[6].y).attr("x2", pts[7].x).attr("y2", pts[7].y).attr("stroke-width", 2).attr("stroke", "black");

          var circles = svg.selectAll("circle")
                         .data(pts)
                         .enter()
                         .append("circle");


          circles.attr("cx", function (d) { return d.x; })
                       .attr("cy", function (d) { return d.y; })
                       .attr("r", function (d) { return 10; })
                       .style("fill", function(d) { return "gray"; });


       },
        controllerAs: 'vm'
    };
})
// this is a copy of above; i'm too lazy to figure out how to parameterize the id
.directive("nEqualsEight2", function() {

    return {
        restrict: 'A',
        template: 
          '<div id="n-equals-eight2">'+
            '<svg width="400" height="300"></svg>'+
          '</div>',
        controller: function($rootScope, $scope) {
          var vm = this;
          var svg = d3.select("#n-equals-eight2 svg"),
              width = +svg.attr("width"),
              height = +svg.attr("height");

          var pts = [
            { "x": 188,   "y": 58},
            { "x": 112,   "y": 58},
            { "x": 58,   "y": 112},
            { "x": 58,   "y": 188},
            { "x": 112,   "y": 242},
            { "x": 188,   "y": 242},
            { "x": 242,   "y": 188},
            { "x": 242,   "y": 112},
            ];

          svg.append("line").attr("x1", pts[0].x).attr("y1", pts[0].y).attr("x2", pts[1].x).attr("y2", pts[1].y).attr("stroke-width", 2).attr("stroke", "black");
          svg.append("line").attr("x1", pts[0].x).attr("y1", pts[0].y).attr("x2", pts[2].x).attr("y2", pts[2].y).attr("stroke-width", 2).attr("stroke", "black");
          svg.append("line").attr("x1", pts[0].x).attr("y1", pts[0].y).attr("x2", pts[3].x).attr("y2", pts[3].y).attr("stroke-width", 2).attr("stroke", "black");
          svg.append("line").attr("x1", pts[0].x).attr("y1", pts[0].y).attr("x2", pts[4].x).attr("y2", pts[4].y).attr("stroke-width", 2).attr("stroke", "black");
          svg.append("line").attr("x1", pts[0].x).attr("y1", pts[0].y).attr("x2", pts[5].x).attr("y2", pts[5].y).attr("stroke-width", 2).attr("stroke", "black");
          svg.append("line").attr("x1", pts[0].x).attr("y1", pts[0].y).attr("x2", pts[6].x).attr("y2", pts[6].y).attr("stroke-width", 2).attr("stroke", "black");
          svg.append("line").attr("x1", pts[0].x).attr("y1", pts[0].y).attr("x2", pts[7].x).attr("y2", pts[7].y).attr("stroke-width", 2).attr("stroke", "black");

          svg.append("line").attr("x1", pts[1].x).attr("y1", pts[1].y).attr("x2", pts[2].x).attr("y2", pts[2].y).attr("stroke-width", 2).attr("stroke", "black");
          svg.append("line").attr("x1", pts[1].x).attr("y1", pts[1].y).attr("x2", pts[3].x).attr("y2", pts[3].y).attr("stroke-width", 2).attr("stroke", "black");
          svg.append("line").attr("x1", pts[1].x).attr("y1", pts[1].y).attr("x2", pts[4].x).attr("y2", pts[4].y).attr("stroke-width", 2).attr("stroke", "black");
          svg.append("line").attr("x1", pts[1].x).attr("y1", pts[1].y).attr("x2", pts[5].x).attr("y2", pts[5].y).attr("stroke-width", 2).attr("stroke", "black");
          svg.append("line").attr("x1", pts[1].x).attr("y1", pts[1].y).attr("x2", pts[6].x).attr("y2", pts[6].y).attr("stroke-width", 2).attr("stroke", "black");
          svg.append("line").attr("x1", pts[1].x).attr("y1", pts[1].y).attr("x2", pts[7].x).attr("y2", pts[7].y).attr("stroke-width", 2).attr("stroke", "black");

          svg.append("line").attr("x1", pts[2].x).attr("y1", pts[2].y).attr("x2", pts[3].x).attr("y2", pts[3].y).attr("stroke-width", 2).attr("stroke", "black");
          svg.append("line").attr("x1", pts[2].x).attr("y1", pts[2].y).attr("x2", pts[4].x).attr("y2", pts[4].y).attr("stroke-width", 2).attr("stroke", "black");
          svg.append("line").attr("x1", pts[2].x).attr("y1", pts[2].y).attr("x2", pts[5].x).attr("y2", pts[5].y).attr("stroke-width", 2).attr("stroke", "black");
          svg.append("line").attr("x1", pts[2].x).attr("y1", pts[2].y).attr("x2", pts[6].x).attr("y2", pts[6].y).attr("stroke-width", 2).attr("stroke", "black");
          svg.append("line").attr("x1", pts[2].x).attr("y1", pts[2].y).attr("x2", pts[7].x).attr("y2", pts[7].y).attr("stroke-width", 2).attr("stroke", "black");

          svg.append("line").attr("x1", pts[3].x).attr("y1", pts[3].y).attr("x2", pts[4].x).attr("y2", pts[4].y).attr("stroke-width", 2).attr("stroke", "black");
          svg.append("line").attr("x1", pts[3].x).attr("y1", pts[3].y).attr("x2", pts[5].x).attr("y2", pts[5].y).attr("stroke-width", 2).attr("stroke", "black");
          svg.append("line").attr("x1", pts[3].x).attr("y1", pts[3].y).attr("x2", pts[6].x).attr("y2", pts[6].y).attr("stroke-width", 2).attr("stroke", "black");
          svg.append("line").attr("x1", pts[3].x).attr("y1", pts[3].y).attr("x2", pts[7].x).attr("y2", pts[7].y).attr("stroke-width", 2).attr("stroke", "black");

          svg.append("line").attr("x1", pts[4].x).attr("y1", pts[4].y).attr("x2", pts[5].x).attr("y2", pts[5].y).attr("stroke-width", 2).attr("stroke", "black");
          svg.append("line").attr("x1", pts[4].x).attr("y1", pts[4].y).attr("x2", pts[6].x).attr("y2", pts[6].y).attr("stroke-width", 2).attr("stroke", "black");
          svg.append("line").attr("x1", pts[4].x).attr("y1", pts[4].y).attr("x2", pts[7].x).attr("y2", pts[7].y).attr("stroke-width", 2).attr("stroke", "black");

          svg.append("line").attr("x1", pts[5].x).attr("y1", pts[5].y).attr("x2", pts[6].x).attr("y2", pts[6].y).attr("stroke-width", 2).attr("stroke", "black");
          svg.append("line").attr("x1", pts[5].x).attr("y1", pts[5].y).attr("x2", pts[7].x).attr("y2", pts[7].y).attr("stroke-width", 2).attr("stroke", "black");

          svg.append("line").attr("x1", pts[6].x).attr("y1", pts[6].y).attr("x2", pts[7].x).attr("y2", pts[7].y).attr("stroke-width", 2).attr("stroke", "black");

          var circles = svg.selectAll("circle")
                         .data(pts)
                         .enter()
                         .append("circle");


          circles.attr("cx", function (d) { return d.x; })
                       .attr("cy", function (d) { return d.y; })
                       .attr("r", function (d) { return 10; })
                       .style("fill", function(d) { return "gray"; });

       },
        controllerAs: 'vm'
    };
})

.directive("encapsulate", function() {

    return {
        restrict: 'A',
        template: 
          '<div id="encapsulate">'+
            '<svg width="400" height="300"></svg>'+
          '</div>',
        controller: function($rootScope, $scope) {
          var vm = this;
          var svg = d3.select("#encapsulate svg"),
              width = +svg.attr("width"),
              height = +svg.attr("height");


          var pts = [
            { "x": 150,   "y": 150},
            { "x": 188,   "y": 58},
            { "x": 112,   "y": 58},
            { "x": 58,   "y": 112},
            { "x": 58,   "y": 188},
            { "x": 112,   "y": 242},
            { "x": 188,   "y": 242},
            { "x": 242,   "y": 188},
            { "x": 242,   "y": 112},
            { "x": 150,   "y": 150},
            ];

          svg.append("line").attr("x1", pts[0].x).attr("y1", pts[0].y).attr("x2", pts[1].x).attr("y2", pts[1].y).attr("stroke-width", 2).attr("stroke", "black");
          svg.append("line").attr("x1", pts[0].x).attr("y1", pts[0].y).attr("x2", pts[2].x).attr("y2", pts[2].y).attr("stroke-width", 2).attr("stroke", "black");
          svg.append("line").attr("x1", pts[0].x).attr("y1", pts[0].y).attr("x2", pts[3].x).attr("y2", pts[3].y).attr("stroke-width", 2).attr("stroke", "black");
          svg.append("line").attr("x1", pts[0].x).attr("y1", pts[0].y).attr("x2", pts[4].x).attr("y2", pts[4].y).attr("stroke-width", 2).attr("stroke", "black");
          svg.append("line").attr("x1", pts[0].x).attr("y1", pts[0].y).attr("x2", pts[5].x).attr("y2", pts[5].y).attr("stroke-width", 2).attr("stroke", "black");
          svg.append("line").attr("x1", pts[0].x).attr("y1", pts[0].y).attr("x2", pts[6].x).attr("y2", pts[6].y).attr("stroke-width", 2).attr("stroke", "black");
          svg.append("line").attr("x1", pts[0].x).attr("y1", pts[0].y).attr("x2", pts[7].x).attr("y2", pts[7].y).attr("stroke-width", 2).attr("stroke", "black");
          svg.append("line").attr("x1", pts[0].x).attr("y1", pts[0].y).attr("x2", pts[8].x).attr("y2", pts[8].y).attr("stroke-width", 2).attr("stroke", "black");

          var circles = svg.selectAll("circle")
                         .data(pts)
                         .enter()
                         .append("circle");

          circles.attr("cx", function (d) { return d.x; })
                       .attr("cy", function (d) { return d.y; })
                       .attr("r", function (d) { return 10; })
                       .style("fill", function(d) { return "gray"; });

       },
        controllerAs: 'vm'
    };
})
.directive("eventbus", function() {

    return {
        restrict: 'A',
        template: 
          '<div id="eventbus">'+
            '<svg width="400" height="300"></svg>'+
          '</div>',
        controller: function($rootScope, $scope) {
          var vm = this;
          var svg = d3.select("#eventbus svg"),
              width = +svg.attr("width"),
              height = +svg.attr("height");

          var pts = [
            { "x": 150,   "y": 58},
            { "x": 150,   "y": 242},

            { "x": 58,    "y": 112},
            { "x": 150,    "y": 112},

            { "x": 58,    "y": 188},
            { "x": 150,    "y": 188},

            { "x": 242,   "y": 58},
            { "x": 150,   "y": 58},

            { "x": 242,   "y": 104},
            { "x": 150,   "y": 104},

            { "x": 242,   "y": 150},
            { "x": 150,   "y": 150},

            { "x": 242,   "y": 196},
            { "x": 150,   "y": 196},

            { "x": 242,   "y": 242},
            { "x": 150,   "y": 242},
            ];

          var dots = [
            { "x": 58,    "y": 112},
            { "x": 58,   "y": 188},
            { "x": 242,   "y": 58},
            { "x": 242,   "y": 104},
            { "x": 242,   "y": 150},
            { "x": 242,   "y": 196},
            { "x": 242,   "y": 242},
            ];

          for (var i=2; i<pts.length; i+=2) {
            svg.append("line").attr("x1", pts[i].x).attr("y1", pts[i].y).attr("x2", pts[i+1].x).attr("y2", pts[i+1].y).attr("stroke-width", 2).attr("stroke", "black");
          }
          svg.append("line").attr("x1", pts[0].x).attr("y1", pts[0].y).attr("x2", pts[1].x).attr("y2", pts[1].y).attr("stroke-width", 12).attr("stroke", "gray");

          var circles = svg.selectAll("circle")
                         .data(dots)
                         .enter()
                         .append("circle");


          circles.attr("cx", function (d) { return d.x; })
                       .attr("cy", function (d) { return d.y; })
                       .attr("r", function (d) { return 10; })
                       .style("fill", function(d) { return "gray"; });
       },
        controllerAs: 'vm'
    };
})
.directive("nTier", function() {

    return {
        restrict: 'A',
        template: 
          '<div id="n-tier">'+
            '<svg width="400" height="300"></svg>'+
          '</div>',
        controller: function($rootScope, $scope) {
          var vm = this;
          var svg = d3.select("#n-tier svg"),
              width = +svg.attr("width"),
              height = +svg.attr("height");

          var pts = [
            { "x": 150,   "y": 58},
            { "x": 150,   "y": 242},

            { "x": 58,    "y": 112},
            { "x": 150,    "y": 112},

            { "x": 58,    "y": 188},
            { "x": 150,    "y": 188},

            { "x": 242,   "y": 58},
            { "x": 150,   "y": 58},

            { "x": 242,   "y": 104},
            { "x": 150,   "y": 104},

            { "x": 242,   "y": 150},
            { "x": 150,   "y": 150},

            { "x": 242,   "y": 196},
            { "x": 150,   "y": 196},

            { "x": 242,   "y": 242},
            { "x": 150,   "y": 242},
            ];

          var pts2 = [
            { "x": 334,   "y": 58},
            { "x": 242,   "y": 104},

            { "x": 334,   "y": 104},
            { "x": 242,   "y": 104},

            { "x": 334,   "y": 150},
            { "x": 242,   "y": 104},
            ];

          var dots = [
            { "x": 58,    "y": 112},
            { "x": 58,   "y": 188},
            { "x": 242,   "y": 58},
            { "x": 242,   "y": 104},
            { "x": 242,   "y": 150},
            { "x": 242,   "y": 196},
            { "x": 242,   "y": 242},
            { "x": 334,   "y": 58},
            { "x": 334,   "y": 104},
            { "x": 334,   "y": 150},
            ];

          for (var i=2; i<pts.length; i+=2) {
            svg.append("line").attr("x1", pts[i].x).attr("y1", pts[i].y).attr("x2", pts[i+1].x).attr("y2", pts[i+1].y).attr("stroke-width", 2).attr("stroke", "black");
          }
          svg.append("line").attr("x1", pts[0].x).attr("y1", pts[0].y).attr("x2", pts[1].x).attr("y2", pts[1].y).attr("stroke-width", 12).attr("stroke", "gray");
          for (var i=0; i<pts2.length; i+=2) {
            svg.append("line").attr("x1", pts2[i].x).attr("y1", pts2[i].y).attr("x2", pts2[i+1].x).attr("y2", pts2[i+1].y).attr("stroke-width", 2).attr("stroke", "black");
          }

          var circles = svg.selectAll("circle")
                         .data(dots)
                         .enter()
                         .append("circle");


          circles.attr("cx", function (d) { return d.x; })
                       .attr("cy", function (d) { return d.y; })
                       .attr("r", function (d) { return 10; })
                       .style("fill", function(d) { return "gray"; });
       },
        controllerAs: 'vm'
    };
})

.directive("foo", function() {

    return {
        restrict: 'A',
        template: 
          '<div id="cheat-chart"></div>'+
          '<span class="caption text-muted">One way to fake it</span>',
        controller: function($rootScope, $scope) {
          var vm = this;
       },
        controllerAs: 'vm'
    };
})

})();
