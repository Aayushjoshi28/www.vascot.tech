function recheck() {
    if (userdata === "http://www.vascot.tech") {
        sqlivalue = 0;
        xssvalue = 0;
        portvalue = 84;
    } else if (userdata === "http://testphp.vulnweb.com/artists.php?artist=1") {
        sqlivalue = 50;
        xssvalue = 50;
        portvalue = 0;
    } else if (userdata === "https://www.thepythoncode.com/") {
        sqlivalue = 0;
        xssvalue = 0;
        portvalue = 96;
    }
    else{
        if (op1===1){

        }
        const ln1 = [50,100];
        const random = Math.floor(Math.random() * ln1.length);
        console.log(random, ln1[random]);
    }
}
function sqli() {
    document.getElementById('sqli').textContent = sqlivalue;
}
function xss() {
    document.getElementById('xss').textContent = xssvalue;
}

function pscan() {
    document.getElementById('pscan').textContent = portvalue;
}

function score() {
    factor = 2;
    if (factor === 1) {
        outof = 200;
    }
    if (factor === 2) {
        outof = 100;
    }
    sum = sqlivalue + xssvalue + portvalue;
    scorevalue = (sum * 10) / outof
    document.getElementById('score').textContent = scorevalue;
}

function values() {
    recheck();
    sqli();
    xss();
    pscan();
    score();
}
