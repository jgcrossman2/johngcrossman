window.addEventListener('load', () => {
    const prevstaked = parseFloat(localStorage.getItem('STAKEDAMT'));
    const prevcollateral = parseFloat(localStorage.getItem('COLLATERALAMT'));
    const prevdrawdown = parseFloat(localStorage.getItem('DRAWDOWNAMT'));
    const prevavailable = parseFloat(localStorage.getItem('AVAILABLEAMT'));
    const prevpercent = parseFloat(localStorage.getItem('PERCENTAMT'));
    // const usdbtc = 35000;
    // const margin = 0.75;
    // let newbtc = parseInt(addbtc);
    // let collateral = newbtc * usdbtc;
    // let available = collateral * margin;
    document.getElementById('stakedamt').innerHTML = prevstaked.toFixed(4);
    document.getElementById('collateralamt').innerHTML = prevcollateral.toFixed(2);
    document.getElementById('drawdownamt').innerHTML = prevdrawdown.toFixed(2);
    document.getElementById('availableamt').innerHTML = prevavailable.toFixed(2);
    document.getElementById('percentamt').innerHTML = prevpercent.toFixed(2);
})