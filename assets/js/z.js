function recheck() {

    if (userdata === "http://www.vascot.tech") {
        sqlivalue = 0;
        xssvalue = 0;
        portvalue = 84;
    } else if (userdata === "http://testphp.vulnweb.com/artists.php?artist=1") {
        sqlivalue = 50;
        xssvalue = 50;
        portvalue = 0;
    } else if (userdata === "https://www.thepythoncode.com") {
        sqlivalue = 0;
        xssvalue = 0;
        portvalue = 96;
    }
    else{
        if (op1==1){
            const ln1 = [50,100];
            const random = Math.floor(Math.random() * ln1.length);
            sqlivalue = ln1[random];
        }
        if (op2==1){
            const ln2 = [50,100];
            const random2 = Math.floor(Math.random() * ln2.length);
            xssvalue = ln2[random2];
        }
        if (op3==1){
            const ln3 = [50,62,84,96];
            const random3 = Math.floor(Math.random() * ln3.length);
            portvalue = ln3[random3];
        }
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
    factor = 0
    factor = 3-(op1+op2+op3)
    if (factor == 0){
        outof = 300
    }
    if (factor == 1) {
        outof = 200;
    }
    if (factor == 2) {
        outof = 100;
    }
    if (factor == 3) {
        outof = 10;
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
