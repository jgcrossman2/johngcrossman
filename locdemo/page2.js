window.addEventListener('load', () => {
    const addbtc = localStorage.getItem('ADDCRYPTO');
    const usdbtc = 35000;
    const margin = 0.75;
    let newbtc = parseInt(addbtc);
    let collateral = newbtc * usdbtc;
    let available = collateral * margin;
    document.getElementById('stakedamt').innerHTML = newbtc.toFixed(4);
    document.getElementById('collateralamt').innerHTML = collateral.toFixed(2);
    document.getElementById('availableamt').innerHTML = available.toFixed(2);
})