// Function for pasting the footer so I dont have to put in every site, 
// It can automatically paste it into any site that has the id in a div.
let url = window.location.href;
if (url == "https://lu69as.github.io/Nettside-V2/" || url == "http://127.0.0.1:5500/")
{
    window.location.href = "https://lu69as.github.io/Nettside-V2/index.html"
}

function footer() 
{
    document.getElementById("footer").innerHTML =
        '<div class="container p-4 pb-0">' +
        '<section class="mb-4">' +

        '<!-- Mail -->' +
        ' <a class="btn text-white btn-floating m-1" style="background-color: #da1a1a;" href="mailto:lukasokken@gmail.com"' +
        'role="button" target="_blank">' +
        '<i class="fab fa-at"></i></a>' +

        '<!-- Github -->' +
        '<a class="btn text-white btn-floating m-1" style="background-color: #333333;" href="https://github.com/Lu69as"' +
        'role="button" target="_blank">' +
        '<i class="fab fa-github"></i></a>' +

        '<!-- Youtube -->' +
        '<a class="btn text-white btn-floating m-1" style="background-color: #fd0000;"' +
        'href="https://www.youtube.com/channel/UCjASemWCGsjDuEH-CaF7wOg" role="button" target="_blank">' +
        '<i class="fab fa-youtube"></i>' +

        '<!-- Discord -->' +
        '<a class="btn text-white btn-floating m-1" style="background-color: #5865f2;"' +
        'href="https://discord.gg/FsJtzSpUSM" role="button" target="_blank">' +
        '<i class="fab fa-discord"></i>' +

        '<!-- Steam -->' +
        '<a class="btn text-white btn-floating m-1" style="background-color: #171a21;"' +
        'href="https://steamcommunity.com/profiles/76561199016709901/" role="button" target="_blank">' +
        '<i class="fab fa-steam"></i>' +

        '<!-- Reddit -->' +
        '<a class="btn text-white btn-floating m-1" style="background-color: #ff4500;"' +
        'href="https://www.reddit.com/user/Ok_Veterinarian_4691" role="button" target="_blank">' +
        '<i class="fab fa-reddit"></i></a>' +

        '<!-- Instagram -->' +
        '<a class="btn text-white btn-floating m-1" style="background-color: #ac2bac;"' +
        'href="https://www.instagram.com/lu69as/" role="button" target="_blank">' +
        '<i class="fab fa-instagram"></i></a>' +

        '<button class="btn text-white btn-floating m-1" onclick="alert(care)">' +
        '<i class="fa-solid fa-bug"></i>' +
        '</button>' +

        '</section>' +
        '</div>' +

        '<!-- Copyright -->' +
        '<div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">' +
        '© 2023 Copyright: Lukas Okkenhaug' +
        '</div>'
}

// Function that does the same as the last but for the navbar
function navbar() 
{
    let url = window.location.href;
    if (url.includes("index")) 
    {
    // If the url has index it pastes this navbar
        document.getElementById("navbar").innerHTML =
            '       <div class="container-fluid">' +
            '       <ul class="navbar-nav">' +

            '      <!-- Hjemmesiden -->' +
            '      <li class="nav-item active">' +
            '        <a class="nav-link active" id="site1N" aria-current="page" href="#"><i class="fas fa-home-alt"></i> Home </a>' +
            '      </li>' +

            '      <!-- Arbeidserfaring side -->' +
            '        <li class="nav-item">' +
            '        <a class="nav-link" href="./Html/Arbeidserfaring.html" id="translate1"><i class="fa fa-hammer"></i> Arbeidserfaring' +
            '        </a>' +
            '      </li>' +

            '      <!-- Utdanning side -->' +
            '      <li class="nav-item">' +
            '        <a class="nav-link" href="./Html/Utdanning.html" id="translate2"><i class="fa fa-book"></i> Utdanning </a>' +
            '      </li>' +

            '      <!-- Hobbier side -->' +
            '      <li class="nav-item">' +
            '        <a class="nav-link" href="./Html/Hobbier.html" id="translate3"><i class="fas fa-headset"></i> Hobbier </a>' +
            '      </li>' +

            '      <!-- Fotografi side -->' +
            '      <li class="nav-item">' +
            '        <a class="nav-link" href="./Html/Foto.html" id="translate4"><i class="fa-solid fa-camera-retro"></i> Fotografi </a>' +
            '      </li>' +
            '      <li class="nav-item dropdown">' +
            '        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"' +
            '          id="translate5">' +
            '          <i class="fa-solid fa-circle-notch"></i> Andre Nettsider' +
            '        </a>' +
            '        <ul class="dropdown-menu">' +
            '          <li><a class="dropdown-item" href="https://www.lukas.busposten.com" target="_blank" id="translate6">Luxas' +
            '              Nyheter</a></li>' +
            '          <li><a class="dropdown-item" href="https://lu69as.github.io/Lukas/" target="_blank" id="translate7">Gamle' +
            '              Nettsiden</a></li>' +
            '          <li>' +
            '            <hr class="dropdown-divider">' +
            '          </li>' +
            '          <li><a class="dropdown-item" href="https://lu69as.github.io/Love-Machine/" target="_blank">Love Machine</a>' +
            '          </li>' +
            '          <li><a class="dropdown-item" href="https://lu69as.github.io/Dice-game/" target="_blank">Dice Game</a></li>' +
            '          <li><a class="dropdown-item" href="https://lu69as.github.io/Drum-Kit/" target="_blank">Drum Kit</a></li>' +
            '        <li><a class="dropdown-item" href="https://lu69as.github.io/Simon-Game/" target="_blank">Simon Game</a></li>' +
            '        </ul>' +
            '      </li>' +
            '      <li class="nav-item" id="site1B">' +
            '        <button onclick="translateHome()" id="BtnBorder" style="margin-top: 5%;">Translate Page</button>' +
            '      </li>' +
            '    </ul>' +
            '   </div>' +
            '  </div>'

            // Calling the footer function
            footer();
    }
    else
    // If the site has any other link than index it pastes this navbar 
    {
        document.getElementById("navbar").innerHTML =
            '    <div class="container-fluid">' +
            '    <ul class="navbar-nav">' +

            '      <!-- Hjemmesiden -->' +
            '      <li class="nav-item">' +
            '        <a class="nav-link" id="site1N" aria-current="page" href="../index.html"><i class="fas fa-home-alt"></i> Home </a>' +
            '      </li>' +

            '      <!-- Arbeidserfaring side -->' +
            '        <li class="nav-item">' +
            '        <a class="nav-link" href="./Arbeidserfaring.html" id="translate1"><i class="fa fa-hammer"></i> Arbeidserfaring' +
            '        </a>' +
            '      </li>' +

            '      <!-- Utdanning side -->' +
            '      <li class="nav-item">' +
            '        <a class="nav-link" href="./Utdanning.html" id="translate2"><i class="fa fa-book"></i> Utdanning </a>' +
            '      </li>' +

            '      <!-- Hobbier side -->' +
            '      <li class="nav-item">' +
            '        <a class="nav-link" href="./Hobbier.html" id="translate3"><i class="fas fa-headset"></i> Hobbier </a>' +
            '      </li>' +

            '      <!-- Fotografi side -->' +
            '      <li class="nav-item">' +
            '        <a class="nav-link" href="./Foto.html" id="translate4"><i class="fa-solid fa-camera-retro"></i> Fotografi </a>' +
            '      </li>' +
            '      <li class="nav-item dropdown">' +
            '        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"' +
            '          id="translate5">' +
            '          <i class="fa-solid fa-circle-notch"></i> Andre Nettsider' +
            '        </a>' +
            '        <ul class="dropdown-menu">' +
            '          <li><a class="dropdown-item" href="https://www.lukas.busposten.com" target="_blank" id="translate6">Luxas' +
            '              Nyheter</a></li>' +
            '          <li><a class="dropdown-item" href="https://lu69as.github.io/Lukas/" target="_blank" id="translate7">Gamle' +
            '              Nettsiden</a></li>' +
            '          <li>' +
            '            <hr class="dropdown-divider">' +
            '          </li>' +
            '          <li><a class="dropdown-item" href="https://lu69as.github.io/Love-Machine/" target="_blank">Love Machine</a>' +
            '          </li>' +
            '          <li><a class="dropdown-item" href="https://lu69as.github.io/Dice-game/" target="_blank">Dice Game</a></li>' +
            '          <li><a class="dropdown-item" href="https://lu69as.github.io/Drum-Kit/" target="_blank">Drum Kit</a></li>' +
            '        <li><a class="dropdown-item" href="https://lu69as.github.io/Simon-Game/" target="_blank">Simon Game</a></li>' +
            '        </ul>' +
            '      </li>' +
            '      <li class="nav-item" id="siteT">' +
            '        <button onclick="" id="BtnBorder" style="margin-top: 5%;">Translate Page</button>' +
            '      </li>' +
            '    </ul>' +
            '   </div>' +
            '  </div>'

        // Creates a variable for the value of the translate button
        let tranS = document.getElementById("siteT")

        // If the link includes work experience it pastes this that button into the navbar and calls footer function
        if (url.includes("Arbeidserfaring")) 
        {
            document.getElementById("translate1").classList.toggle("active");
            tranS.innerHTML = '<button onclick="translateArbeidserfaring()" id="BtnBorder" style="margin-top: 5%;">Translate Page</button>';
            footer();
        }
        // If the link includes education it pastes this that button into the navbar and calls footer function
        else if (url.includes("Utdanning")) 
        {
            document.getElementById("translate2").classList.toggle("active");
            tranS.innerHTML = '<button onclick="translateUtdanning()" id="BtnBorder" style="margin-top: 5%;">Translate Page</button>';
            footer();
        }
        // If the link includes hobbies it pastes this that button into the navbar and calls footer function
        else if (url.includes("Hobbier")) 
        {
            document.getElementById("translate3").classList.toggle("active");
            tranS.innerHTML = '<button onclick="translateHobbier()" id="BtnBorder" style="margin-top: 5%;">Translate Page</button>';
            footer();
        }
        // If the link includes photoes it pastes this that button into the navbar
        else if (url.includes("Foto")) 
        {
            document.getElementById("translate4").classList.toggle("active");
            tranS.innerHTML = '<button onclick="translateFoto()" id="BtnBorder" style="margin-top: 5%;">Translate Page</button>';
        }
    }
}

// Calls the navbar function
navbar();

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

// If the width of the device is smaller than the height, it gives a warning
if (window.innerWidth < window.innerHeight) 
{
    alert("Warning, this website is designed for bigger screen sizes in mind. "
        + " Please use a computer or in a worst case, use landscape on your phone.")
}

// Small little easter egg
function welcome() 
{
    alert("Hi, I'm Lukas");

    let name = prompt("Whats your name?");

    alert("Hello " + name + ", And welcome to my website!");

    alert("I'm going to send this to Meta headquarters. Thank you for your service");

    window.location.href = 'https://about.meta.com/';
}

// Button for showing and removing the text aside the pictures of my schools
function toggleinvis(x) 
{
    document.getElementById("invis" + x).classList.toggle("invis")
}

// Bug report value
let care = "I don't really care, take it with HR"