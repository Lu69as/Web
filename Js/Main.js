// Removes the javascript warning
// If this executes, then the javascript works
document.querySelector(".js-warning").classList.add("invis")

// Variable for the link of the site (Can vary depending on if I )
const url = window.location.href;

// Variable for the root in the css so I can add variables in JS
const root = document.querySelector(":root");

// Declares the height and with variable
// so the site knows the device screen size
let height = innerHeight;
let width = innerWidth;

// Makes the loading screen visible
document.querySelector("#loading").classList.remove("invis");

// A small loading screen
function loading() {
    // Writes down loading
    document.querySelector("#loadingTxt").innerHTML = 'Loading';

    // Writes down loading with dots that show up every 600 milliseconds
    setTimeout(() => { document.querySelector("#loadingTxt").innerHTML = 'Loading.' }, 600);
    setTimeout(() => { document.querySelector("#loadingTxt").innerHTML = 'Loading..' }, 600 * 2);
    setTimeout(() => { document.querySelector("#loadingTxt").innerHTML = 'Loading...' }, 600 * 3);

    // After all the dots have appeared, it goes back to loading with no dots if it hasnt loaded

    // If the page is loaded, it will make the loading screen invisible
    window.onload = () => 
    {
        document.querySelector("#loading").classList.add("invis");
        setTimeout(() => {
            // document.querySelectorAll('.goog-te-combo option').forEach(e => {e.addEventListener('click', alert("Hey"))})
            document.querySelector('.goog-te-combo').setAttribute('onchange', 'languageanimatedbox()')
        }, 2000);
    }
}
loading(); // Calls the loading screen

// Calls the loading screen 40 times after each other
for (let x = 1; x < 40; x++) 
{
    setTimeout(() => { loading() }, 600 * 4 * x);
}

// Function for pasting the footer so I dont have to put in every site, 
// It can automatically paste it into any site that has the id in a div.
if (url.includes("Foto") === false) 
// Only pastes the footer or navbar if your not on the photoes page
{
    document.querySelector("footer").innerHTML =
        `
        <div class="container p-4 pb-0">
        <section class="mb-4">
    
        <!-- Help -->
        <button class="btn text-white btn-floating m-1" style="cursor: help;" onclick="alert('help')">
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
// Does the same as the footer but for the navbar
    document.querySelector("nav").innerHTML =
        `<div class="container-fluid">
            <ul class="navbar-nav">

                <!-- Hjemmesiden -->
                <li class="nav-item">
                    <a class="nav-link active hom" onclick="activepage('home')" href="#"><i class="fas fa-home-alt"></i> Home </a>
                </li>

                <!-- Arbeidserfaring side -->
                <li class="nav-item">
                    <a class="nav-link" id="translate1" href="#work_xp" onclick="activepage('work')"><i class="fa fa-hammer"></i> Work Experience </a>
                </li>

                <!-- Utdanning side -->
                <li class="nav-item">
                    <a class="nav-link" id="translate2" href="#education" onclick="activepage('edu')"><i class="fa fa-book"></i> Education </a>
                </li>

                <!-- Hobbier side -->
                <li class="nav-item">
                    <a class="nav-link" id="translate3" href="#hobbies" onclick="activepage('hobby')"><i class="fas fa-headset"></i> Hobbies </a>
                </li>

                <!-- Other sites -->
                <li class="nav-item">
                    <a class="nav-link" id="translate4" href="#misc" onclick="activepage('misc')"><i class="fa-solid fa-gamepad"></i> Games and other sites </a>
                </li>

                <div class="nav-item" id="google_translate_element"></div>

                <li class="nav-item ">
                    <button class="nav-link" onclick="dark();" id="BtnBorder"> <i class="fa-solid fa-magnifying-glass"></i></button>
                </li>

            </ul>
        </div>
    </div>`
}
// Function for opening the buttons on the hobbies page
function Btn(btn)
{
    let drop = '#Drop';  // Creates an empty drop variable

    document.querySelector(drop + btn).classList.toggle("invis");
}
// Animation for clicking the image of me on the main site
// The animation flips me lol
function flip() {
    switch (Math.floor((Math.random() * 2) + 1)) {
        case 1: document.querySelector("#me").classList.add("meFlipAni1");
            setTimeout(() => { document.querySelector("#me").classList.remove("meFlipAni1") }, 800);
            document.querySelector("#me").classList.toggle("meFlip");
            break;
        case 2: document.querySelector("#me").classList.add("meFlipAni2");
            setTimeout(() => { document.querySelector("#me").classList.remove("meFlipAni2") }, 1600);
            document.querySelector("#me").classList.toggle("meFlip");
            break;
    }
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
// Function for making the page you are on active in the navbar
function activepage(page) // Also takes the page variable to know wich page youre on
{
    //Foreach loop wich de-activates all other sites in the navbar
    [".hom", "#translate1", "#translate2", "#translate3", "#translate4"].forEach((tag) => 
    {                                   //
        document.querySelector(tag).classList.remove("active")
    });
    if (page === 'home' && width > 992)
    // If the page is home: -->
    {
        document.querySelector(".hom").classList.add("active");
    }
    else if (width > 992)
    // If the page isnt home, it will go through all of the pages in a switch
    {
        let pagenr;
        switch (page)
        {
            case 'work':
                pagenr =1;
                break;

            case 'edu':
                pagenr
                 = 2;
                break;

            case 'hobby':
                pagenr = 3;
                break;

            case 'misc':
                pagenr = 4;
                break;
        }
        // Activates the button of the page you are on
        document.querySelector("#translate" + pagenr).classList.add("active");
    }
}

// Function for activating the language change animation and what language its says
function languageanimatedbox() 
{
    let lang = document.querySelector('.goog-te-combo').value;
    document.querySelector(".language-animatedbox-txt").innerHTML = lang;

    document.querySelector(".language-animatedbox").classList.add("language_animation");
    setTimeout(() => { document.querySelector(".language-animatedbox").classList.remove("language_animation") }, 4000);
}

let focus;
focus = document.querySelector(".focus");
document.addEventListener('keydown', (e) => {
    if (e.key === 'n' || e.key === 'N')
        dark();
})
function dark() {
    let hiddenDarkmode = document.querySelectorAll(".easterEgg");
    hiddenDarkmode.forEach(e => {e.classList.remove("invis");})
    let focus;
    document.addEventListener("mousemove", mousemove);
    function mousemove(event) {
        focus = document.querySelector(".focus");
        focus.classList.remove("invis");
        let x = event.clientX; 
        let y = event.clientY;
        focus.style.background = 'radial-gradient(circle at '+ x +'px '+ y +'px, transparent, #000000df 20%)';
    }
    document.addEventListener('click', stopdark) 
    function stopdark() {
        if (!("invis" in focus.classList)) {
            document.removeEventListener("mousemove", mousemove);
            focus.classList.add("invis");
            hiddenDarkmode.forEach(e => {e.classList.add("invis");})
            document.removeEventListener('click', stopdark)
    }}
}