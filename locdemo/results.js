window.addEventListener('load', () => {
    const addbtc = localStorage.getItem('ADDCRYPTO');
    const usdbtc = 35000;
    document.getElementById('result-addbtc').innerHTML = parseInt(addbtc);
})