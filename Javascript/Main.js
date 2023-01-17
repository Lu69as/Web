/* Alle de forskjellige Drop Knappene */
function Btn() {
    document.getElementById("Drop").classList.toggle("Drop_show");
}
function Btn2() {
    document.getElementById("Drop2").classList.toggle("Drop_show2");
}
function Btn3() {
    document.getElementById("Drop3").classList.toggle("Drop_show3");
}
function Btn4() {
    document.getElementById("Drop4").classList.toggle("Drop_show4");
}
function Btn5() {
    document.getElementById("Drop5").classList.toggle("Drop_show5");
}
function Btn6() {
    document.getElementById("Drop6").classList.toggle("Drop_show6");
}
function Btn7() {
    document.getElementById("Drop7").classList.toggle("Drop_show7");
}
function Btn8() {
    document.getElementById("Drop8").classList.toggle("Drop_show8");
}
function Btn9() {
    document.getElementById("Drop9").classList.toggle("Drop_show9");
}
function Btn10() {
    document.getElementById("Drop10").classList.toggle("Drop_show10");
}
function BtnBorder() {
    document.getElementById("DropBorder").classList.toggle("Drop_showBorder");
}
function bmiCalculator(weight, height){
    var bmi = (weight / height^2);
    alert (bmi);
}
bmiCalculator(65, 1.8);