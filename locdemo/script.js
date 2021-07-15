// for gauge
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        // labels: ["Used", "Unused"],
        datasets: [{
            backgroundColor: ['rgb(0, 99, 132)', '#c0c0c0'],
            borderColor: ['rgb(0, 99, 132)', 'black'],
            data: [0, 100],
        }]
    },
    options:{
      circumference: 180,
      rotation: -90,
      cutout: '80%'
    }
  });
function updateChart() {
  let Row5 = document.getElementById('row5');
  let Cell5 = Row5.getElementsByTagName('td');
  let newpercent = Cell5[1].innerText;
  var usage = newpercent;
  // alert(usage + '%');
  var remaining = 100 - parseInt(usage);
  myChart.data.datasets[0].data[0] = usage;
  myChart.data.datasets[0].data[1] = remaining;
  var readout = usage + '%';
  document.getElementById('gaugeReadout').innerHTML = readout;
  if (usage >= 75) {
    myChart.data.datasets[0].backgroundColor[0] = 'red';
  } else if (50 <= usage && usage < 75) {
    myChart.data.datasets[0].backgroundColor[0] = 'yellow';
  } else if (usage < 50) {
    myChart.data.datasets[0].backgroundColor[0] = 'rgb(0, 99, 132)';
  }
  myChart.update();
};

function addBtc() {
  const addcrypto = document.getElementById('addcrypto').value;
  localStorage.setItem("ADDCRYPTO", addcrypto);
  return;
};

function collectStats() {
  const Row1 = document.getElementById('row1');
  const Row2 = document.getElementById('row2');
  const Row3 = document.getElementById('row3');
  const Row4 = document.getElementById('row4');
  const Row5 = document.getElementById('row5');
  const Cell1 = Row1.getElementsByTagName('td');
  const Cell2 = Row2.getElementsByTagName('td');
  const Cell3 = Row3.getElementsByTagName('td');
  const Cell4 = Row4.getElementsByTagName('td');
  const Cell5 = Row5.getElementsByTagName('td');
  let stakedamt = Cell1[1].innerText;
  let collateralamt = Cell2[1].innerText;
  let drawdownamt = Cell3[1].innerText;
  let availableamt = Cell4[1].innerText;
  let percentamt = Cell5[1].innerText;
  localStorage.setItem("STAKEDAMT", stakedamt);
  localStorage.setItem("COLLATERALAMT", collateralamt);
  localStorage.setItem("DRAWDOWNAMT", drawdownamt);
  localStorage.setItem("AVAILABLEAMT", availableamt);
  localStorage.setItem("PERCENTAMT", percentamt);
  return;
};

function updateSpend() {
  // collect data for calculation
  let spendamt = document.getElementById('spending').value;
  let Row2 = document.getElementById('row2');
  let Row3 = document.getElementById('row3');
  let Row4 = document.getElementById('row4');
  let Row5 = document.getElementById('row5');
  let Cell2 = Row2.getElementsByTagName('td');
  let Cell3 = Row3.getElementsByTagName('td');
  let Cell4 = Row4.getElementsByTagName('td');
  let Cell5 = Row5.getElementsByTagName('td');
  let prevcollateral = Cell2[1].innerText;
  let prevdrawdown = Cell3[1].innerText;
  let prevavailable = Cell4[1].innerText;
  let newdrawdown = parseFloat(prevdrawdown) + parseFloat(spendamt);
  let newavailable = prevavailable - spendamt;
  let newpercent = newdrawdown / parseFloat(prevcollateral);
  document.getElementById('drawdownamt').innerHTML = newdrawdown.toFixed(2);
  document.getElementById('availableamt').innerHTML = newavailable.toFixed(2);
  document.getElementById('percentamt').innerHTML = (newpercent * 100).toFixed(2);
  updateChart();
};