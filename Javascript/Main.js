// creates a variable for the url of the site
const index = "index.html#";
const url = window.location.href;

// If the url is github it makes the link have index.html at the end
if (url === "https://lu69as.github.io/Web/") 
{
    window.location.href = url + index;
}
// Does the same, but for the localhost site
else if (url === "http://127.0.0.1:5500/") 
{
    window.location.href = url + index;
}

// Declares the height and with variable
// so the site knows the device screen size
let height = innerHeight;
let width = innerWidth;

// Function for pasting the footer so I dont have to put in every site, 
// It can automatically paste it into any site that has the id in a div.
if (url.includes("Foto") === false) 
{
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
        <a class="btn text-white btn-floating m-1" style="background-color: #ac2bac; cursor: help;"
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

// Creates a variable for the "help" message in the footer
let help = `This website has a lot of clicking
If you see a lack of information somewhere
            Just click a lot!`

// Function that does the same as the footer but for the navbar
// If the url has index in it and the device width is higher than 1000px it pastes this navbar
if (url.includes("index") && width > 1000) 
{
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

                <li class="nav-item">
                    <button onclick="changelang();" id="BtnBorder"> <i class="fa-solid fa-language"></i></button>
                </li>
            </ul>
        </div>
    </div>`
}
else if (url.includes("Foto"))
// If you are on the Photoes site, it gives a less distracting navbar that just has the "home" button
{
    document.querySelector("#navbar").innerHTML =
        `<div class="container-fluid">
        <ul class="navbar-nav">
            <!-- Hjemmesiden -->
            <li class="nav-item">
            <a class="nav-link active" id="site1N" aria-current="page" href="../index.html"><i class="fas fa-home-alt"></i> Home </a>
            </li>
        </ul>
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
            <button onclick="changelang();" id="BtnBorder"> <i class="fa-solid fa-language"></i></button>
            </li>
        </ul>
    </div>
    </div>
    `
}

// Changes the language of the site
// It remembers what language you last were on and uses just that
function changelang() 
{
    // If the language is set 
    if (localStorage.getItem('lang') === 'en') 
    {
        localStorage.setItem('lang', 'no')
    }
    else 
    {
        localStorage.setItem("lang", "en")
    }
    translate();
}
// If the language isnt set, it is automatically english
if (localStorage.getItem('lang') === null) 
{
    localStorage.setItem('lang', 'en')
}

/* All the different drop buttons for the "hobbies" site */
function Btn() 
{
    document.querySelector("#Drop").classList.toggle("Drop_show");
}

function Btn2() 
{
    document.querySelector("#Drop2").classList.toggle("Drop_show2");
}

function Btn3() 
{
    document.querySelector("#Drop3").classList.toggle("Drop_show3");
}

function Btn4() 
{
    document.querySelector("#Drop4").classList.toggle("Drop_show4");
}

function Btn5() 
{
    document.querySelector("#Drop5").classList.toggle("Drop_show5");
}

function Btn6() 
{
    document.querySelector("#Drop6").classList.toggle("Drop_show6");
}

function Btn7() 
{
    document.querySelector("#Drop7").classList.toggle("Drop_show7");
}

function Btn8() 
{
    document.querySelector("#Drop8").classList.toggle("Drop_show8");
}

function Btn9() 
{
    document.querySelector("#Drop9").classList.toggle("Drop_show9");
}

function Btn10() 
{
    document.querySelector("#Drop10").classList.toggle("Drop_show10");
}

// Small little easter egg
function welcome() 
{
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
        Your information is still at Meta Headquarters.`);
    }

}

// Button for showing and removing the text aside the pictures of my schools
function toggleinvis(x) 
{
    document.querySelector("#invis" + x).classList.toggle("invis");
}

// Bug report value
let care = "I don't really care, take it with HR"

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
    document.querySelector(".hom").classList.remove("active");
    document.querySelector("#translate1").classList.remove("active");
    document.querySelector("#translate2").classList.remove("active");
    document.querySelector("#translate3").classList.remove("active");
    document.querySelector("#translate4").classList.remove("active");
}

// Makes the home button blue in the navbar
function activehome()
{
    refreshnav();
    document.querySelector(".hom").classList.add("active");
}

// Makes the work experience button blue in the navbar
function activework()
{
    refreshnav();
    document.querySelector("#translate1").classList.add("active");
    window.location.href = url + "#work_xp";
}

// Makes the education buttun in the navbar blue
function activeedu()
{
    refreshnav();
    document.querySelector("#translate2").classList.add("active");
}

// Makes the hobbies button blue in the navbar
function activehobby()
{
    refreshnav();
    document.querySelector("#translate3").classList.add("active");
}

// Makes the games and other sites button blue in the navbar
function activemisc()
{
    refreshnav();
    document.querySelector("#translate4").classList.add("active");
}