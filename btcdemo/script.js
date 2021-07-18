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

function maxSpend() {
  const Row4 = document.getElementById('row4');
  const Cell4 = Row4.getElementsByTagName('td');
  const spendBox = document.getElementById('spending');
  let availableamt = parseFloat(Cell4[1].innerText);
  spendBox.setAttribute('max', availableamt);
}

//function collectStats() {
//  const usdbtc = parseInt(document.getElementById('usdbtc').value);
//  const Row1 = document.getElementById('row1');
//  const Row2 = document.getElementById('row2');
//  const Row3 = document.getElementById('row3');
//  const Row4 = document.getElementById('row4');
//  const Row5 = document.getElementById('row5');
//  const Cell1 = Row1.getElementsByTagName('td');
//  const Cell2 = Row2.getElementsByTagName('td');
//  const Cell3 = Row3.getElementsByTagName('td');
//  const Cell4 = Row4.getElementsByTagName('td');
//  const Cell5 = Row5.getElementsByTagName('td');
//  let stakedamt = Cell1[1].innerText;
//  let collateralamt = Cell2[1].innerText;
//  let drawdownamt = Cell3[1].innerText;
//  let availableamt = Cell4[1].innerText;
//  let percentamt = Cell5[1].innerText;
//  return;
//};

//function updateStats() {
//  document.getElementById('stakedamt').innerHTML = newstakedamount.toFixed(4);
//  document.getElementById('collateralamt').innerHTML = newcollateralamt.toFixed(2);
//  document.getElementById('drawdownamt').innerHTML = newdrawdownamt.toFixed(2);
//  document.getElementById('availableamt').innerHTML = newavailableamt.toFixed(2);
//  document.getElementById('percentamt').innerHTML = (newpercent * 100).toFixed(2);
//  updateChart()
//};

function addBtc() {
  const addbtc = document.getElementById('addcrypto').value;
  const margin = 0.75;
  const usdbtc = parseInt(document.getElementById('usdbtc').value);
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
  let newbtc = parseInt(addbtc);
  let collateral = newbtc * usdbtc;
  let available = collateral * margin;
  let newstakedamount = parseFloat(stakedamt) + newbtc;
  let newcollateralamt = parseFloat(collateralamt) + collateral;
  let newavailableamt = parseFloat(availableamt) + available;
  let newdrawdownamt = parseFloat(drawdownamt);
  let newpercent = newdrawdownamt / newcollateralamt;
  document.getElementById('stakedamt').innerHTML = newstakedamount.toFixed(4);
  document.getElementById('collateralamt').innerHTML = newcollateralamt.toFixed(2);
  document.getElementById('drawdownamt').innerHTML = newdrawdownamt.toFixed(2);
  document.getElementById('availableamt').innerHTML = newavailableamt.toFixed(2);
  document.getElementById('percentamt').innerHTML = (newpercent * 100).toFixed(2);
  updateChart();
  maxSpend();
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
  spendboxVisibility();
  updateChart();
  marginWarning();
  maxSpend();
};

// function printIt() {
//   let x = parseInt(document.getElementById('usdbtc').value);
//   alert(x + 10);
// };

function goToWallet() {
  // let nextStepButton = document.getElementById('nextStepButton');
  // let walletButton = document.getElementById('wallet');
  let fluxcardButton = document.getElementById('fluxcard');
  let gaugeBox = document.getElementById('gauge');
  let startBox = document.getElementById('setUsage');
  let barcodeBox = document.getElementById('barcodeBox');
  let addBtcBox = document.getElementById('addBTC');
  gaugeBox.style.display = 'none';
  startBox.style.display = 'none';
  barcodeBox.style.display = 'block';
  addBtcBox.style.display = 'block';
  fluxcardButton.style.display = 'block';
};

function spendboxVisibility() {
  const Row4 = document.getElementById('row4');
  let Cell4 = Row4.getElementsByTagName('td');
  let available = parseFloat(Cell4[1].innerText);
  let spendmoneyBox = document.getElementById('spendMoney');
  if (available > 0) {
    spendmoneyBox.style.display = 'block';
  } else {
    spendmoneyBox.style.display = 'none';
    alert('You have exceeded your credit limit. Your account is closed.')
  }
}

function marginWarning() {
  const Row5 = document.getElementById('row5');
  let Cell5 = Row5.getElementsByTagName('td');
  let utilization = parseFloat(Cell5[1].innerText);
  if (utilization >= 50 && utilization < 75) {
    alert('Credit Utilization is high. You should stake more Bitcoin with the Wallet button below.')
  }
}

function goToFluxCard() {
  let gaugeBox = document.getElementById('gauge');
  let startBox = document.getElementById('setUsage');
  let barcodeBox = document.getElementById('barcodeBox');
  let addBtcBox = document.getElementById('addBTC');
  let scenariosBox = document.getElementById('scenarios');
  gaugeBox.style.display = 'block';
  startBox.style.display = 'none';
  barcodeBox.style.display = 'none';
  addBtcBox.style.display = 'none';
  scenariosBox.style.display = 'flex';
  spendboxVisibility();
}

function btcUp5() {
  const margin = 0.75;
  const usdbtc = parseInt(document.getElementById('usdbtc').value);
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
  let newusdbtc = usdbtc * 1.05;
  let newstakedamount = parseFloat(stakedamt);
  let collateral = newstakedamount * newusdbtc;
  let grossavailable = collateral * margin;
  let drawdown = parseFloat(drawdownamt);
  let available = grossavailable - drawdown;
  let percent = drawdown / collateral;
  document.getElementById('stakedamt').innerHTML = newstakedamount.toFixed(4);
  document.getElementById('collateralamt').innerHTML = collateral.toFixed(2);
  document.getElementById('drawdownamt').innerHTML = drawdown.toFixed(2);
  document.getElementById('availableamt').innerHTML = available.toFixed(2);
  document.getElementById('percentamt').innerHTML = (percent * 100).toFixed(2);
  document.getElementById('usdbtc').value = newusdbtc;
  spendboxVisibility();
  updateChart();
  marginWarning();
  maxSpend();
}

function btcDown5() {
  const margin = 0.75;
  const usdbtc = parseInt(document.getElementById('usdbtc').value);
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
  let newusdbtc = usdbtc * 0.95;
  let newstakedamount = parseFloat(stakedamt);
  let collateral = newstakedamount * newusdbtc;
  let grossavailable = collateral * margin;
  let drawdown = parseFloat(drawdownamt);
  let available = grossavailable - drawdown;
  let percent = drawdown / collateral;
  document.getElementById('stakedamt').innerHTML = newstakedamount.toFixed(4);
  document.getElementById('collateralamt').innerHTML = collateral.toFixed(2);
  document.getElementById('drawdownamt').innerHTML = drawdown.toFixed(2);
  document.getElementById('availableamt').innerHTML = available.toFixed(2);
  document.getElementById('percentamt').innerHTML = (percent * 100).toFixed(2);
  document.getElementById('usdbtc').value = newusdbtc;
  spendboxVisibility();
  updateChart();
  marginWarning();
  maxSpend();
}

function add1Month() {
  let Row2 = document.getElementById('row2');
  let Row3 = document.getElementById('row3');
  let Row4 = document.getElementById('row4');
  //let Row5 = document.getElementById('row5');
  let Row6 = document.getElementById('row6');
  let Cell2 = Row2.getElementsByTagName('td');
  let Cell3 = Row3.getElementsByTagName('td');
  let Cell4 = Row4.getElementsByTagName('td');
  //let Cell5 = Row5.getElementsByTagName('td');
  let Cell6 = Row6.getElementsByTagName('td');
  let interestrate = parseFloat(Cell6[1].innerText);
  let monthinterest = 1 + (interestrate/1200);
  let prevcollateral = Cell2[1].innerText;
  let prevdrawdown = Cell3[1].innerText;
  let prevavailable = Cell4[1].innerText;
  let newdrawdown = parseFloat(prevdrawdown) * monthinterest;
  let spendamt = parseFloat(prevdrawdown) * (monthinterest - 1);
  let newavailable = prevavailable - spendamt;
  let newpercent = newdrawdown / parseFloat(prevcollateral);
  document.getElementById('drawdownamt').innerHTML = newdrawdown.toFixed(2);
  document.getElementById('availableamt').innerHTML = newavailable.toFixed(2);
  document.getElementById('percentamt').innerHTML = (newpercent * 100).toFixed(2);
  spendboxVisibility();
  updateChart();
  marginWarning();
  maxSpend();
}