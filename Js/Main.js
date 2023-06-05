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
    }
}

// Calls the loading screen
loading();

// Calls the loading screen 40 times after each other
for (let x = 1; x < 40; x++) 
{
    setTimeout(() => { loading() }, 600 * 4 * x);
}

// Warning for devices with a small width
if (localStorage.getItem("warned") === null) 
// If you havent been warned, it will just save that
{
    localStorage.setItem("warned", 'no')
}
if (localStorage.getItem("warned") === 'no' && width < 1200)
// If you havent been warned about your screen size, this will happen
{
    alert(
        `Although functional,
            This Site is not made for your device size.
            You may continue browsing, but a wider display is adviced.`);

    // Creates a variable with the desicion of if you want to be warned abain
    let dec = confirm("Would you like to remove this message from showing up?");
    if (dec === true) 
    // If you dont want to be warned again, it will save that
    {
        localStorage.setItem("warned", 'yes')
    }
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
                    <a class="nav-link" id="translate1" href="#work_xp" onclick="activepage('work')"></a>
                </li>

                <!-- Utdanning side -->
                <li class="nav-item">
                    <a class="nav-link" id="translate2" href="#education" onclick="activepage('edu')"></a>
                </li>

                <!-- Hobbier side -->
                <li class="nav-item">
                    <a class="nav-link" id="translate3" href="#hobbies" onclick="activepage('hobby')"></a>
                </li>

                <!-- Other sites -->
                <li class="nav-item">
                    <a class="nav-link" id="translate4" href="#misc" onclick="activepage('misc')"></a>
                </li>

                <li class="nav-item ">
                    <button class="nav-link translatebtn" onclick="translatebtn();" id="BtnBorder"> <i class="fa-solid fa-language"></i></button>
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
// Changes the language of the site
// It remembers what language you last were on and uses just that
function changelang(lang) 
{
    // If the navbar is too small for the language box
    if (innerWidth < 993)
    {
        // Variable for the language currently active
        let langu = localStorage.getItem("lang");

        switch (langu)
        {
            case 'en':
                localStorage.setItem("lang", 'no');
                break;
            
            case 'no':
                localStorage.setItem("lang", 'de');
                break;
            
            case 'de':
                localStorage.setItem("lang", 'ch');
                break;

            case 'ch':
                localStorage.setItem("lang", 'sp');
                break;

            case 'sp':
                localStorage.setItem("lang", 'en');
                break;
        }//             ______________________
    }//                /                      \
    // If the language is set                  |
    else             //|                       |\\
    {                //|                       |\\
        switch (lang)//|                       |\\
        {            //|                       |\\
           case 'En'://|                       |\\
                localStorage.setItem("lang", 'en');
               break;//|                       |\\
                     //|                       |\\
           case 'No'://|                       |\\
                localStorage.setItem("lang", 'no');
               break;//|                       |\\
                     //|                       |\\
           case 'De'://|                       |\\
                localStorage.setItem("lang", 'de');
               break;//|                       |\\
                     //|                       |\\
           case 'Ch'://|                       |\\
                localStorage.setItem("lang", 'ch');
               break;//|                       |\\
                     //|                       |\\
           case 'Sp'://|                       |\\
                localStorage.setItem("lang", 'sp');
               break;//|                       |\\
        }            //|                       |\\
    }//        ________|_______________________|________
languageanimatedbox();//                       \\
    translate();     //     ___          ___    \\
                    //     <__x>        <__x>    \\
}                  //                             \\
                  //                               \\
// If the language isnt set, it is automatically english
if (localStorage.getItem('lang') === null) {//       \\
    localStorage.setItem('lang', 'en')//              \\
}             //              ____________             \\
             //               \__________/              \\
// Function for opening the buttons on the hobbies page  \\
function Btn(btn)//                                       \\ 
{         //                                               \\
    let drop; // Creates an empty drop variable             \\
    let drop_show; // Creates an empty drop_show variable    \\
       //                                                     \\
    if (btn === 1)//                                           \\
     // If its the first btn: -->                               \\
{   //                                                           \\
drop = '#Drop'; // The button variable is just that               \\
drop_show = 'Drop_show'; //the button_show variable is just that   \\
}//                                                                 \\
//                                                                   \\
else                                                                 //
    // If the number is anything else                                \\
    {                                                                //
        drop = '#Drop' + btn; // the drop variable has the second number after it
        drop_show = 'Drop_show' + btn; // the drop_show variable has the second number after it
    }                                                             //
                                                                 //
    // Toggles if the button is shown or not                     \\
    document.querySelector(drop).classList.toggle(drop_show);    //
}                                                               //
// Animation for clicking the image of me on the main site      \\
// The animation flips me lol                                    \\
function welcome()                                               //
{                                                               //
    document.querySelector("#me").classList.toggle("meFlip");  //
    document.querySelector("#me").classList.add("meFlipAni"); //
    setTimeout(() => { document.querySelector("#me").classList.remove("meFlipAni") }, 700);
}                                                           //
                                                           //
// Button for showing and removing the text aside the pictures of my schools
function toggleinvis(x)                                  //
{                                                       //
    document.querySelector("#invis" + x).classList.toggle("invis");
}                                                     //
                                                     //
// Button for opening the movie ratings table        \\
function togglemovie()                               //
{                                                   //
    document.querySelector("#togglemovie").classList.toggle("invis");
}                                                 //
// Button for opening the series ratings table    \\
function toggletv()                               //
{                                                //
    document.querySelector("#toggletv").classList.toggle("invis");
}                                              //
                                              //
// Function for making the page you are on active in the navbar
function activepage(page) // Also takes the page variable to know wich page youre on
{                                          //
    //Foreach loop wich de-activates all other sites in the navbar
    [".hom", "#translate1", "#translate2", "#translate3", "#translate4"].forEach((tag) => 
    {                                   //
        document.querySelector(tag).classList.remove("active")
    });                               //
                                     //
    if (page === 'home' && width > 992)
    // If the page is home: -->     \\
    {                               //
        document.querySelector(".hom").classList.add("active");
    }                             //
    else if (width > 992)        //
    // If the page isnt home, it will go through all of the pages in a switch
    {                          //
        let pagenr;           //
        switch (page)        //
        {                   //
            case 'work':   //
                pagenr =1;//
                break;   //
                        //
            case 'edu'://
                pagenr//
                 = 2;//
                break;
                   //
            case 'hobby':
                pagenr = 3;
                break;
               //
            case 'misc':
          /*//*/pagenr = 4;
         /*//*/ break;
        } //
         // Activates the button of the page you are on
        document.querySelector("#translate" + pagenr).classList.add("active");
       //
    } //
}    //
    //
   // Function for making the translate animation visible
function showtranslate() { /*
 //
//
/   */

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