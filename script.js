let bt = ['Chrome','Firefox','Safari','Opera','Edge','MSIE','Trident'];
let b; userAgent = navigator.userAgent;
for (let i = 0; i < bt.length; i++) {
    if (userAgent.indexOf(bt[i]) != -1) {
        b = bt[i];
        break;
    }

}
if (b == 'MSIE' || b == 'Edge' || b == 'Trident') {
    b = 'Internet Explorer';
}
alert(`You are using ${b} browser`);
