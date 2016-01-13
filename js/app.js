var data1 = ['Location 1', 4, 5, 4.5, 7, 6, 5];
var data2 = ['Location 2', 1.5, 3, 2, 4.5, 2.5, 3.5];
var data3 = ['Location 3', .5, 2, 1, 8, 1.5, 2.5];

var dates = [
  'x',
  new Date('2013-01-01'),
  new Date('2013-01-02'),
  new Date('2013-01-03'),
  new Date('2013-01-04'),
  new Date('2013-01-05'),
  new Date('2013-01-06')
];

var chart;

function initChart() {
  chart = c3.generate({
    bindto: '.chart',
    data: {
      x: 'x',
      xFormat: '%Y %m% d',
      columns: [
        dates,
        data1,
        data2,
        data3
      ],
      types: {
        'Location 1': 'area-spline',
        'Location 2': 'area-spline',
        'Location 3': 'area-spline'
      },
      colors: {
        'Location 1': '#5d51a5',
        'Location 2': '#6bc1a3',
        'Location 3': '#e7f490'
      }
    },
    size: {
      height: 500
    },
    padding: {
      top: 40,
      right: 60,
      bottom: 80,
      left: 60,
    },
    legend: {
      position: 'bottom',
      inset: {
          anchor: 'bottom-left',
          x: 0,
          y: -300,
          step: 3
        }
    },
    axis: {
      x: {
        type: 'timeseries',
        tick: {
          format: "%d %b %Y" // https://github.com/mbostock/d3/wiki/Time-Formatting#wiki-format
        },
        padding: { // tick padding
          left: 0,
          right: 0
        }
      },
      y: {
        label: { // ADD
          text: 'CO Levels',
          position: 'outer-middle'
        },
        padding: {
          top: 20,
          bottom: 0
        }
      }
    },
    transition: {
      duration: 500
    }
  });
}

function mediumSized() {
  chart.resize({
    height: 300
  });
}

function sizeChart() {
  var vh = window.innerWidth;
  var minH = 300;
  var newH = vh * .390625;
  if (newH < minH) newH = minH;
  chart.resize({
    height: newH
  });
}

window.onresize = function(event) {
  sizeChart();
};

initChart();
sizeChart();