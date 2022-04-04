//jquery equivalent of document.createElement
//create a new element
let div = $('<div>Hello World!</div>');

let body = $('body');

body.append(div);

div.on('click', function(){
    alert("Hello World!");
});

let div2 = $('<div><canvas id="myChart"></canvas></div>');

body.append(div2);

/*let chart = $("<script>const labels = ['January', 'February','March','April', 'May', 'June',]; const data = {labels: labels,datasets: [{ label: 'My First dataset', backgroundColor: 'rgb(255, 99, 132)', borderColor: 'rgb(255, 99, 132)', data: [0, 10, 5, 2, 20, 30, 45],}]};const config = { type: 'line', data: data, options: {}};</script>");
body.append(chart);

let renderChart = $("<script>const myChart = new Chart( document.getElementById('myChart'), config);</script>");
body.append(renderChart); */

const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];

const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {}
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);

let div3 = $('<div><canvas id="myChart2"></canvas></div>');
body.append(div3);

const data2 = {
    labels: [
      'Eating',
      'Drinking',
      'Sleeping',
      'Designing',
      'Coding',
      'Cycling',
      'Running'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 90, 81, 56, 55, 40],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, {
        label: 'My Second Dataset',
        data: [28, 48, 40, 19, 96, 27, 100],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)'
    }]
};

const config2 = {
    type: 'radar',
    data: data2,
    options: {
        elements: {
        line: {
            borderWidth: 3
            }
        }
    },
};

const myChart2 = new Chart(
    document.getElementById('myChart2'),
    config2
);
