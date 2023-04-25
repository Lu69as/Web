// creates a variable for the url of the site
const index = "index.html#";
const url = window.location.href;
if (url === "https://lu69as.github.io/Web/") {
    window.location.href = url + index;
}
else if (url === "http://127.0.0.1:5500/") {
    window.location.href = url + index;
}

// Function for pasting the footer so I dont have to put in every site, 
// It can automatically paste it into any site that has the id in a div.
if (url.includes("Foto") === false) {
    document.getElementById("footer").innerHTML =
        `<div class="container p-4 pb-0">
        <section class="mb-4">
    
        <!-- Help -->
        <button class="btn text-white btn-floating m-1" onclick="alert(help)">
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
        href="https://discord.gg/FsJtzSpUSM" role="button" target="_blank">
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
    
        <button class="btn text-white btn-floating m-1" onclick="alert(care)">
        <i class="fa-solid fa-bug"></i>
        </button>
    
        </section>
        </div>
    
        <!-- Copyright -->
        <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
        © 2023 Copyright: Lukas Okkenhaug
    </div>`
}

// Creates a variable for the "help" message in the footer
let help = `This website has a lot of clicking
If you see a lack of information somewhere
            Just click a lot!`

// Function that does the same as the footer but for the navbar
if (url.includes("index")) {
    // If the url has index it pastes this navbar
    document.getElementById("navbar").innerHTML =
        `<div class="container-fluid">
            <ul class="navbar-nav">

                <!-- Hjemmesiden -->
                <li class="nav-item">
                <a class="nav-link"aria-current="page" href="#"><i class="fas fa-home-alt"></i> Home </a>
                </li>

                <!-- Arbeidserfaring side -->
                <li class="nav-item">
                <a class="nav-link" id="translate1" href="#work_xp"></a>
                </li>

                <!-- Utdanning side -->
                <li class="nav-item">
                <a class="nav-link" id="translate2" href="#education"></a>
                </li>

                <!-- Hobbier side -->
                <li class="nav-item">
                <a class="nav-link" id="translate3" href="#hobbies"></a>
                </li>

                <!-- Other sites -->
                <li class="nav-item">
                <a class="nav-link" id="translate70" href="#misc"></a>
                </li>

                <li class="nav-item">
                <button onclick="changelang();" id="BtnBorder"> <i class="fa-solid fa-language"></i></button>
                </li>
            </ul>
        </div>
    </div>`

    if (innerWidth < 1000) {
        document.getElementById("navbar").innerHTML =
            `
            <div class="container-fluid">
            <ul class="navbar-nav">
                <!-- Hjemmesiden -->
                <li class="nav-item">
                <a class="nav-link"aria-current="page" href="#"><i class="fas fa-home-alt"></i> Home 
                <button onclick="changelang();" id="BtnBorder"> <i class="fa-solid fa-language"></i></button></a>
                </li>
            </ul>
        </div>
    </div>
    `
    }
}
else if (url.includes("Foto"))
// If you are on the Photoes site, it gives a less distracting navbar that just has the "home" button
{
    document.getElementById("navbar").innerHTML =
        `<div class="container-fluid">
        <ul class="navbar-nav">
            <!-- Hjemmesiden -->
            <li class="nav-item">
            <a class="nav-link" id="site1N" aria-current="page" href="../index.html"><i class="fas fa-home-alt"></i> Home </a>
            </li>
        </ul>
    </div>`
}

// Changes the language of the site
// It remembers what language you last were on and uses just that
function changelang() {
    if (localStorage.getItem('lang') === 'en') {
        localStorage.setItem('lang', 'no')
    }
    else {
        localStorage.setItem("lang", "en")
    }
    location.reload();
}
// If the language isnt set, it is automatically english
if (localStorage.getItem('lang') === null) {
    localStorage.setItem('lang', 'en')
}

/* All the different drop buttons for the "hobbies" site */
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

// Small little easter egg
function welcome() {
    alert("Hi, I'm Lukas");

    if (localStorage.getItem("name") === null) {
        localStorage.setItem("name", prompt("Whats your name? Please say the full"));

        alert("Hello " + localStorage.getItem("name") + ", And welcome to my website!");
        alert("I am going to need a little more info though...")

        localStorage.setItem("place", prompt("Where do you live?"))

        localStorage.setItem("country", prompt("Which country is that in?"))

        alert("Ahh, you live at " + localStorage.getItem("place") + " , and your name is " + localStorage.getItem("name"))

        alert("I'm going to send this to Meta headquarters. Thank you for your service");

        if (localStorage.getItem("country").toLowerCase() === "norway" && localStorage.getItem("lang") === "en" ||
            localStorage.getItem("country").toLowerCase() === "no" && localStorage.getItem("lang") === "en") {
            alert("Jeg valgte å bytte språk siden du er fra norge")
            changelang()
        }
    }
    else {
        alert("You still live at " + localStorage.getItem("place") + ` Wich is in ` + localStorage.getItem("country") + `,
        and your name is still ` + localStorage.getItem("name") + `
        No there are still no Female F1 drivers
        Your information is still at Meta Headquarters.`)
    }

}

// Button for showing and removing the text aside the pictures of my schools
function toggleinvis(x) {
    document.getElementById("invis" + x).classList.toggle("invis")
}

// Bug report value
let care = "I don't really care, take it with HR"

// If you are in landscape mode in the "photoes" page this class will activate
if (innerWidth > innerHeight && url.includes("oto")) {
    document.getElementById("translate8").classList.toggle("LandscapeMargin")
}