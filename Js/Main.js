// Variable for the link of the site (Can vary depending on if I )
const url = window.location.href;

// Variable for the root in the css so I can add variables in JS
const root = document.querySelector(":root");

// Declares the height and with variable
// so the site knows the device screen size
let height = innerHeight;
let width = innerWidth;


// A small loading screen
function loading() {
    document.querySelector("#loadingTxt").innerHTML = 'Loading';

    setTimeout(() => { document.querySelector("#loadingTxt").innerHTML = 'Loading.' }, 600);
    setTimeout(() => { document.querySelector("#loadingTxt").innerHTML = 'Loading..' }, 600 * 2);
    setTimeout(() => { document.querySelector("#loadingTxt").innerHTML = 'Loading...' }, 600 * 3);

    window.onload = () => {
        loop = false
        document.querySelector("#loading").classList.add("invis");
    }
}
loading();
for (let x = 1; x < 40; x++) {
    setTimeout(() => { loading() }, 600 * 4 * x);
}

// Warning for devices with a small width
if (localStorage.getItem("warned") === null) {
    localStorage.setItem("warned", 'no')
}
if (localStorage.getItem("warned") === 'no' && width < 1200) {
    alert(
        `Although functional,
            This Site is not made for your device size.
            You may continue browsing, but a wider display is adviced.`);

    let dec = confirm("Would you like to remove this message from showing up?");
    if (dec === true) {
        localStorage.setItem("warned", 'yes')
    }
}

// Function for pasting the footer so I dont have to put in every site, 
// It can automatically paste it into any site that has the id in a div.
if (url.includes("Foto") === false) {
    document.querySelector("#footer").innerHTML =
        `
        <div class="container p-4 pb-0">
        <section class="mb-4">
    
        <!-- Help -->
        <button class="btn text-white btn-floating m-1" style="cursor: help;" onclick="alert(help)">
        <i class="fa-solid fa-circle-question"></i>
        </button>
    
        <!-- Mail -->
        <a class="btn text-white btn-floating m-1" style="background-color: #da1a1a;" href="mailto:lukasokken@gmail.com"
        role="button" target="_blank">
        <i class="fab fa-at"></i></a>
    
        <!-- Github -->
        <a class="btn text-white btn-floating m-1" style="background-color: #333333;" href="https://github.com/Lu69as"
        role="button" target="_blank">
        <i class="fab fa-github"></i></a>
    
        <!-- Youtube -->
        <a class="btn text-white btn-floating m-1" style="background-color: #fd0000;"
        href="https://www.youtube.com/channel/UCjASemWCGsjDuEH-CaF7wOg" role="button" target="_blank">
        <i class="fab fa-youtube"></i>
    
        <!-- Discord -->
        <a class="btn text-white btn-floating m-1" style="background-color: #5865f2;"
        href="https://discord.gg/Pr2XTf3WPP" role="button" target="_blank">
        <i class="fab fa-discord"></i>
    
        <!-- Steam -->
        <a class="btn text-white btn-floating m-1" style="background-color: #171a21;"
        href="https://steamcommunity.com/profiles/76561199016709901/" role="button" target="_blank">
        <i class="fab fa-steam"></i>
    
        <!-- Reddit -->
        <a class="btn text-white btn-floating m-1" style="background-color: #ff4500;"
        href="https://www.reddit.com/user/Ok_Veterinarian_4691" role="button" target="_blank">
        <i class="fab fa-reddit"></i></a>
    
        <!-- Instagram -->
        <a class="btn text-white btn-floating m-1" style="background-color: #ac2bac;"
        href="https://www.instagram.com/lu69as/" role="button" target="_blank">
        <i class="fab fa-instagram"></i></a>
    
        <button class="btn text-white btn-floating m-1" style="cursor: help;"
        onclick="alert('I dont really care, take it with HR')">
        <i class="fa-solid fa-bug"></i>
        </button>
    
        </section>
        </div>
    
        <!-- Copyright -->
        <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
        © 2023 Copyright: Lukas Okkenhaug
    </div>
`
}


// Function that does the same as the footer but for the navbar
// If the url has index in it and the device width is higher than 1000px it pastes this navbar
if (url.includes("oto") === false) {
    if (width > 1000) {
        document.querySelector("#navbar").innerHTML =
            `<div class="container-fluid">
                <ul class="navbar-nav">
    
                    <!-- Hjemmesiden -->
                    <li class="nav-item">
                        <a class="nav-link active hom" onclick="activehome()" href="#"><i class="fas fa-home-alt"></i> Home </a>
                    </li>
    
                    <!-- Arbeidserfaring side -->
                    <li class="nav-item">
                        <a class="nav-link" id="translate1" href="#work_xp" onclick="activework()"></a>
                    </li>
    
                    <!-- Utdanning side -->
                    <li class="nav-item">
                        <a class="nav-link" id="translate2" href="#education" onclick="activeedu()"></a>
                    </li>
    
                    <!-- Hobbier side -->
                    <li class="nav-item">
                        <a class="nav-link" id="translate3" href="#hobbies" onclick="activehobby()"></a>
                    </li>
    
                    <!-- Other sites -->
                    <li class="nav-item">
                        <a class="nav-link" id="translate4" href="#misc" onclick="activemisc()"></a>
                    </li>
    
                    <li class="nav-item ">
                        <button class="nav-link translatebtn" onclick="showtranslate(); translatebtn();" id="BtnBorder"> <i class="fa-solid fa-language"></i></button>
                    </li>

                    <div class="translatediv invis">
                        <div onclick="changelang('En')">En</div>
                        <div onclick="changelang('No')">No</div>
                        <div onclick="changelang('De')">De</div>
                        <div onclick="changelang('Ch')">Ch</div>
                        <div onclick="changelang('Sp')">Sp</div>
                    </div>
                </ul>
            </div>
        </div>`
    }
    else
    // If the device has a smaller width than 1000, the navbar will be minimized.
    {
        document.querySelector("#navbar").innerHTML =
            `
        <div class="container-fluid">
            <ul class="navbar-nav">
                <!-- Hjemmesiden -->
                <li class="nav-item">
                <a class="nav-link active"aria-current="page" href="#"><i class="fas fa-home-alt"></i> Home </a>
                </li>
                <li class="nav-item">
                <button class="nav-link translatebtn" onclick="changelang('null'); translatebtn();" id="BtnBorder"> <i class="fa-solid fa-language"></i></button>
                </li>
            </ul>
        </div>
        </div>`
    }
}
// Changes the language of the site
// It remembers what language you last were on and uses just that
function changelang(lang) {
    // If the navbar is too small for the language box
    if (lang === 'null') {
        // Variable for the language currently active
        let langu = localStorage.getItem("lang");

        if (langu === "en") {
            localStorage.setItem("lang", 'no');
        }
        else if (langu === "no") {
            localStorage.setItem("lang", 'de');
        }
        else if (langu === "de") {
            localStorage.setItem("lang", 'ch');
        }
        else if (langu === "ch") {
            localStorage.setItem("lang", 'sp');
        }
        else if (langu === "sp") {
            localStorage.setItem("lang", 'en')
        }
    }
    // If the language is set
    else if (lang === "En")//  _________________
    {//                   |                 |
        localStorage.setItem("lang", 'en');//   |
    }//                   |                 |
    else if (lang === "No")//               |
    {//                   |                 |
        localStorage.setItem("lang", 'no');//   |
    }//                   |                 |
    else if (lang === "De")//     POG       |
    {//                   |                 |
        localStorage.setItem("lang", 'de');//   |
    }//                   |                 |
    else if (lang === "Ch")//               |
    {//                   |                 |
        localStorage.setItem("lang", 'ch');//   |
    }//         __________|_________________|__________
    else if (lang === "Sp")//               \\
    {                    //                 \\
        localStorage.setItem("lang", 'sp')// \\
    }                  //                     \\
    languageanimatedbox();//                       \\
    translate();         //     ___          ___    \\
    //     <_x_>        <_x_>    \\
}                  //                             \\
//                               \\
// If the language isnt set, it is automatically english
if (localStorage.getItem('lang') === null) {//       \\
    localStorage.setItem('lang', 'en')//              \\
}             //              ____________             \\         __
//               \__________/              \\       /*/
/* All the different drop buttons for the "hobbies" site \\     /*/
function Btn() {//                                        \\   /*/
    document.querySelector("#Drop").classList.toggle("Drop_show");
}        //                                                 \\*/
//                                                  /\\
function Btn2() {//                                        /*/\\
    document.querySelector("#Drop2").classList.toggle("Drop_show2");
}    //                                                  /*/    \\
//                                                  /*/      \\
function Btn3() {//                                    /*/        \\
/*//*/document.querySelector("#Drop3").classList.toggle("Drop_show3");
}//                                                  /*/            \\
//                                                  /*/              \\
function Btn4() {//                                /*/               //
    document.querySelector("#Drop4").classList.toggle("Drop_show4");//
}                                                                  //
//
function Btn5() {//                                              //
    document.querySelector("#Drop5").classList.toggle("Drop_show5");
}                                                              //
//
function Btn6() {//                                          //
    document.querySelector("#Drop6").classList.toggle("Drop_show6");
}                                                          //
//
function Btn7() {//                                      //
    document.querySelector("#Drop7").classList.toggle("Drop_show7");
}                                                      //
//
function Btn8() {//                                  //
    document.querySelector("#Drop8").classList.toggle("Drop_show8");
}                                                  //
//
function Btn9() {                                //
/*//*/document.querySelector("#Drop9").classList.toggle("Drop_show9");
}//              \\                            //
//                \\                          //
function Btn10() {//                         //
    document.querySelector("#Drop10").classList.toggle("Drop_show10");
}   //                                     //
//                                        //
// ----------------------------------- __[x]
// Easter Egg Code Right here:        |  __|
// -----------------------------------[x]
function welcome() {                  //
    document.querySelector("#me").classList.add("hitanimation");
    setTimeout(() => { document.querySelector("#me").classList.remove("hitanimation") }, 1000);
}                                  //
                                  //
// Button for showing and removing the text aside the pictures of my schools
function toggleinvis(x) {       //
    document.querySelector("#invis" + x).classList.toggle("invis");
}                             //
                             //
// If you are in landscape mode in the "photoes" page this class will activate
if (height > height && url.includes("oto")) 
{
    document.querySelector("#translate8").classList.toggle("LandscapeMargin");
}
// Button for opening the movie ratings table
function togglemovie()
{
    document.querySelector("#togglemovie").classList.toggle("invis");
}
// Button for opening the series ratings table
function toggletv() 
{
    document.querySelector("#toggletv").classList.toggle("invis");
}

// Function for resetting the active blue color when you click a new link
function refreshnav() 
{
    [".hom", "#translate1", "#translate2", "#translate3", "#translate4"].forEach((tag) => {
        document.querySelector(tag).classList.remove("active")
    })
}

// Makes the home button blue in the navbar
function activehome() {
    if (width > 1000) {
        refreshnav();
        document.querySelector(".hom").classList.add("active");
    }
}

// Makes the work experience button blue in the navbar
function activework() {
    if (width > 1000) {
        refreshnav();
        document.querySelector("#translate1").classList.add("active");
    }
}

// Makes the education buttun blue in the navbar
function activeedu() {
    if (width > 1000) {
        refreshnav();
        document.querySelector("#translate2").classList.add("active");
    }
}

// Makes the hobbies button blue in the navbar
function activehobby() {
    if (width > 1000) {
        refreshnav();
        document.querySelector("#translate3").classList.add("active");
    }
}

// Makes the games and other sites button blue in the navbar
function activemisc() {
    if (width > 1000) {
        refreshnav();
        document.querySelector("#translate4").classList.add("active");
    }
}

// Function for making the translate animation visible
function showtranslate() {
    document.querySelector(".translatediv").classList.toggle("invis");
}

// Function for activating the language change animation and what language its says
function languageanimatedbox() 
{
    switch (localStorage.getItem("lang"))
    {
        case 'en':
        document.querySelector(".language-animatedbox-txt").innerHTML = "English";
        break;
        
        case 'no':
        document.querySelector(".language-animatedbox-txt").innerHTML = "Norsk";
        break;

        case 'de':
        document.querySelector(".language-animatedbox-txt").innerHTML = "Deutch";
        break;

        case 'ch':
        document.querySelector(".language-animatedbox-txt").innerHTML = "Chinese";
        break;

        case 'sp':
        document.querySelector(".language-animatedbox-txt").innerHTML = "Spanish";
        break;

        default: 
        document.querySelector(".language-animatedbox-txt").innerHTML = "English";
        break;
    }

    document.querySelector(".language-animatedbox").classList.add("language_animation");
    setTimeout(() => { document.querySelector(".language-animatedbox").classList.remove("language_animation") }, 4000);
}