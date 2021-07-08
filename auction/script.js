var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['8.59','8.60','8.65','8.70','8.75','8.80'],
        datasets: [{
            label: 'Shares',
            data: [650000,
                0,
                0,
                0,
                0,
                0
            ],
            backgroundColor: ['green', 'green', 'green', 'green', 'green', 'green']
        }]
    },
    options:{}
});
function updateChart(){
    var price = document.getElementById('price').value;
    var shares = document.getElementById('shares').value;
    var total = price * shares;
    alert('Investment amount: USDC ' + total);
    var pos0 = myChart.data.datasets[0].data[0];
    var pos1 = myChart.data.datasets[0].data[1];
    var pos2 = myChart.data.datasets[0].data[2];
    var pos3 = myChart.data.datasets[0].data[3];
    var pos4 = myChart.data.datasets[0].data[4];
    var pos5 = myChart.data.datasets[0].data[5];
    var posinitial = pos0 + pos1 + pos2 + pos3 + pos4 + pos5;
    var sharesbid = parseInt(shares) + posinitial;
    document.getElementById('sharesbid').innerHTML = sharesbid;
    //var max1 = document.getElementById('shares').max;
    //var newmax = 650000 - max1;
    if (price == 8.6) {
        var update1 = parseInt(shares) + pos1;
        myChart.data.datasets[0].data[1] = update1;
        myChart.update();
    } else if (price == 8.65) {
        var update2 = parseInt(shares) + pos2;
        myChart.data.datasets[0].data[2] = update2;
        myChart.update();
    } else if (price == 8.7) {
        var update3 = parseInt(shares) + pos3;
        myChart.data.datasets[0].data[3] = update3;
        myChart.update();
    } else if (price == 8.75) {
        var update4 = parseInt(shares) + pos4;
        myChart.data.datasets[0].data[4] = update4;
        myChart.update();
    } else if (price == 8.8) {
        var update5 = parseInt(shares) + pos5;
        myChart.data.datasets[0].data[5] = update5;
        myChart.update();
    };
    changeBarColor();
    reduceReserve();
    updateSharesBid();
};

function changeBarColor() {
    var posa0 = myChart.data.datasets[0].data[0];
    var posa1 = myChart.data.datasets[0].data[1];
    var posa2 = myChart.data.datasets[0].data[2];
    var posa3 = myChart.data.datasets[0].data[3];
    var posa4 = myChart.data.datasets[0].data[4];
    var posa5 = myChart.data.datasets[0].data[5];
    var posatotal0 = posa0 + posa1 + posa2 + posa3 + posa4 + posa5;
    var posatotal1 = posatotal0 - posa0;
    var posatotal2 = posatotal1 - posa1;
    var posatotal3 = posatotal2 - posa2;
    var posatotal4 = posatotal3 - posa3;
    if (posa5 >= 650000) {
        myChart.data.datasets[0].backgroundColor[0] = 'silver';
        myChart.data.datasets[0].backgroundColor[1] = 'silver';
        myChart.data.datasets[0].backgroundColor[2] = 'silver';
        myChart.data.datasets[0].backgroundColor[3] = 'silver';
        myChart.data.datasets[0].backgroundColor[4] = 'silver';
        myChart.data.datasets[0].backgroundColor[5] = 'silver';
        document.getElementById('clearprice').innerHTML = '8.80';
        myChart.update();
     } else if (posatotal4 >= 650000) {
        myChart.data.datasets[0].backgroundColor[0] = 'silver';
        myChart.data.datasets[0].backgroundColor[1] = 'silver';
        myChart.data.datasets[0].backgroundColor[2] = 'silver';
        myChart.data.datasets[0].backgroundColor[3] = 'silver';
        myChart.data.datasets[0].backgroundColor[4] = 'silver';
        document.getElementById('clearprice').innerHTML = '8.75';
        myChart.update();
     } else if (posatotal3 >= 650000) {
        myChart.data.datasets[0].backgroundColor[0] = 'silver';
        myChart.data.datasets[0].backgroundColor[1] = 'silver';
        myChart.data.datasets[0].backgroundColor[2] = 'silver';
        myChart.data.datasets[0].backgroundColor[3] = 'silver';
        document.getElementById('clearprice').innerHTML = '8.70';
        myChart.update();
     } else if (posatotal2 >= 650000) {
        myChart.data.datasets[0].backgroundColor[0] = 'silver';
        myChart.data.datasets[0].backgroundColor[1] = 'silver';
        myChart.data.datasets[0].backgroundColor[2] = 'silver';
        document.getElementById('clearprice').innerHTML = '8.65';
        myChart.update();
     } else if (posatotal1 >= 650000) {
        myChart.data.datasets[0].backgroundColor[0] = 'silver';
        myChart.data.datasets[0].backgroundColor[1] = 'silver';
        document.getElementById('clearprice').innerHTML = '8.60';
        myChart.update();
     } else if (posatotal0 >= 650000) {
        myChart.data.datasets[0].backgroundColor[0] = 'silver';
        myChart.update();
     }
};

function reduceReserve() {
    var sharesb = document.getElementById('shares').value;
    var posb0 = myChart.data.datasets[0].data[0];
    var posb1 = myChart.data.datasets[0].data[1];
    var posb2 = myChart.data.datasets[0].data[2];
    var posb3 = myChart.data.datasets[0].data[3];
    var posb4 = myChart.data.datasets[0].data[4];
    var posb5 = myChart.data.datasets[0].data[5];
    var posbtotal0 = posb0 + posb1 + posb2 + posb3 + posb4 + posb5;
    var posbtotal1 = posbtotal0 - posb0;
    var posbtotal2 = posbtotal1 - posb1;
    var posbtotal3 = posbtotal2 - posb2;
    var posbtotal4 = posbtotal3 - posb3;
    if (posb0 > 0 && posb0 > sharesb) {
        myChart.data.datasets[0].data[0] = posb0 - sharesb;
        myChart.update();
    } else if (posb0 > 0 && posb0 <= sharesb) {
        myChart.data.datasets[0].data[0] = 0;
        myChart.data.datasets[0].data[1] = posb1 + posb0 - sharesb;
        myChart.update();
    } else if (posb0 == 0 && posb1 > 0 && posb1 > sharesb) {
        myChart.data.datasets[0].data[1] = posb1 - sharesb;
        myChart.update();
    } else if (posb0 == 0 && posb1 > 0 && posb1 <= sharesb) {
        myChart.data.datasets[0].data[1] = 0;
        myChart.data.datasets[0].data[2] = posb2 + posb1 - sharesb;
        myChart.update();
    } else if (posb1 == 0 && posb2 > 0 && posb2 > sharesb) {
        myChart.data.datasets[0].data[2] = posb2 - sharesb;
        myChart.update();
    } else if (posb1 == 0 && posb2 > 0 && posb2 <= sharesb) {
        myChart.data.datasets[0].data[2] = 0;
        myChart.data.datasets[0].data[3] = posb3 + posb2 - sharesb;
        myChart.update();
    } else if (posb2 == 0 && posb3 > 0 && posb3 > sharesb) {
        myChart.data.datasets[0].data[3] = posb3 - sharesb;
        myChart.update();
    } else if (posb2 == 0 && posb3 > 0 && posb3 <= sharesb) {
        myChart.data.datasets[0].data[3] = 0;
        myChart.data.datasets[0].data[4] = posb4 + posb3 - sharesb;
        myChart.update();
    } else if (posb3 == 0 && posb4 > 0 && posb4 > sharesb) {
        myChart.data.datasets[0].data[4] = posb4 - sharesb;
        myChart.update();
    } else if (posb3 == 0 && posb4 > 0 && posb4 <= sharesb) {
        myChart.data.datasets[0].data[4] = 0;
        myChart.data.datasets[0].data[5] = posb5 + posb4 - sharesb;
        myChart.update();
    }
};

function updateSharesBid () {
    var posb0 = myChart.data.datasets[0].data[0];
    var posb1 = myChart.data.datasets[0].data[1];
    var posb2 = myChart.data.datasets[0].data[2];
    var posb3 = myChart.data.datasets[0].data[3];
    var posb4 = myChart.data.datasets[0].data[4];
    var posb5 = myChart.data.datasets[0].data[5];
    var posbtotal0 = posb0 + posb1 + posb2 + posb3 + posb4 + posb5;
    document.getElementById('sharesbid').innerHTML = posbtotal0;
}
