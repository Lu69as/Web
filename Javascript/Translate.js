// translates the navbar
// This works the same for all of the translations
if (innerWidth > 1000) {
    if (localStorage.getItem("lang") === "en")
    // If the language is set to english it inserts the translation of every id.
    // The languge gets remembered even if you go out of the site and come back later.

    {

        document.getElementById("translate1").innerHTML = '<i class="fa fa-hammer"></i> Work Experience '

        document.getElementById("translate2").innerHTML = '<i class="fa fa-book"></i> Education '

        document.getElementById("translate3").innerHTML = '<i class="fas fa-headset"></i> Hobbies '
    }
    else
    // If the language is not set to english, this will happen ->

    {
        document.getElementById("translate1").innerHTML = '<i class="fa fa-hammer"></i> Arbeidserfaring ';

        document.getElementById("translate2").innerHTML = '<i class="fa fa-book"></i> Utdanning '

        document.getElementById("translate3").innerHTML = '<i class="fas fa-headset"></i> Hobbier '
    }
}

// translates the home page
if (localStorage.getItem("lang") === "en")
// If language is english this will happen ->

{
    document.getElementById("translate8").innerHTML =
        'Lukas Okkenhaug <br> Birthdate: July 15th 2006 16 years <br> House: 1653 Sellebakk';

    document.getElementById("translate9").innerHTML =
        'Ocupation: Student <br> Program: It and MediaProduction <br> School: Glemmen VGS';
}
else
// If the language isnt english this will happen ->

{
    document.getElementById("translate8").innerHTML =
        'Lukas Okkenhaug <br> Fødselsdato: 15. Juli 2006 16 år <br> Bolig: 1653 Sellebakk';

    document.getElementById("translate9").innerHTML =
        'Okkupasjon: Elev <br> Linje: Ikt og Medieproduksjon <br> Skole: Glemmen VGS'
}



// // translates the work page
if (localStorage.getItem("lang") === "en")
// if language is english this will happen ->

{
    document.getElementById("translate10").innerHTML =
        `Where: Ark<br> When:<span style="opacity: 0;">|</span> 2019<br> Pay:<span style="opacity: 0;">Ha
    </span> 1 270kr<br> Work:<span style="opacity: 0;">A</span>Inventory`;

    document.getElementById("translate11").innerHTML =
        `Where: Selbak<br> When:<span style="opacity: 0;">|</span> 2022<br>
        Pay:<span style="opacity: 0;">Ha</span> 3 400kr<br> Work:<span style="opacity: 0;">A</span>RoofWork`;

    document.getElementById("translate12").innerHTML =
        'Work <i class="fa-solid fa-user-nurse"></i>';

    document.getElementById("translate13").innerHTML = 'Experience <i class="fa-solid fa-clipboard">'

    document.getElementById("translate14").innerHTML = 'Programming'

    document.getElementById("translate15").innerHTML = 'Mediaproduction'

    document.getElementById("translate16").innerHTML = 'Photo'

    document.getElementById("translate17").innerHTML = 'Design'

    document.getElementById("translate18").innerHTML = 'Photo Editing'

    document.getElementById("translate19").innerHTML = 'Video Editing'

    document.getElementById("translate20").innerHTML = 'Language';

    document.getElementById("translate21").innerHTML = 'Norwegian'

    document.getElementById("translate22").innerHTML = 'English'

    document.getElementById("translate23").innerHTML = 'German'

    document.getElementById("translate24").innerHTML = `I started my youtube channel when I was 11 years old in 2017, <br>
        Youtube has given lots of experience with editing vieos and Photoes with adobe Creative Cloud. <br>
        I have most of my experience in gaming videos, but I can also edit other stuff.`

}
else
// If language isnt english, this will happen ->

{
    document.getElementById("translate10").innerHTML = `Hvor: Ark<br> Når:<span style="opacity: 0;">h</span> 2019<br> Lønn: 1 270kr<br>
        Jobb:<span style="opacity: 0;">|</span>Varetelling`;

    document.getElementById("translate11").innerHTML = `Hvor: Selbak<br> Når:<span style="opacity: 0;">h</span> 2022<br> Lønn: 3 400kr<br>
        Jobb:<span style="opacity: 0;">|</span>Takarbeid`;

    document.getElementById("translate12").innerHTML = 'Arbeid <i class="fa-solid fa-user-nurse"></i>';

    document.getElementById("translate13").innerHTML = 'Erfaringer <i class="fa-solid fa-clipboard">';

    document.getElementById("translate14").innerHTML = 'Programmering';

    document.getElementById("translate15").innerHTML = 'Medieproduksjon';

    document.getElementById("translate16").innerHTML = 'Foto';

    document.getElementById("translate17").innerHTML = 'Design'

    document.getElementById("translate18").innerHTML = 'Bilde Redigering';

    document.getElementById("translate19").innerHTML = 'Video Redigering';

    document.getElementById("translate20").innerHTML = 'Språk';

    document.getElementById("translate21").innerHTML = 'Norsk';

    document.getElementById("translate22").innerHTML = 'Engelsk';

    document.getElementById("translate23").innerHTML = 'Tysk';

    document.getElementById("translate24").innerHTML = `Jeg begynte med en youtube kanal da jeg var 11 år gammel i 2017, <br>
        Youtube har gitt meg mye erfaring med å redigere videoer og bilder med adobe Creative Cloud. <br>
        Jeg har mest erfaring innenfor gaming videoer, men kan også redigere andre ting også.`;
}


// Translates the education page
if (localStorage.getItem("lang") === "en")
// If the language is english, this will happen ->

{
    document.getElementById("translate25").innerHTML = 'SafeHome Kindergarden';

    document.getElementById("translate26").innerHTML = 'Safehome is a privat christian kindergarden in Halden. <br>2009 - 2012';

    document.getElementById("translate27").innerHTML = 'Kjolberg School';

    document.getElementById("translate28").innerHTML = 'Kjolberg School is a school in Sellebakk owned by the state. <br>2012 - 2019';

    document.getElementById("translate29").innerHTML = 'Borge secondary school';

    document.getElementById("translate30").innerHTML = 'Borge secondary is a school in northern Sellebakk. <br>2019 - 2022';

    document.getElementById("translate31").innerHTML = 'Glemmen High School';

    document.getElementById("translate32").innerHTML = `Glemmen is the school I am currently in and we are learning about programming and mediaproduction. <br>
        Glemmen lays in the outskirts of Fredrikstad City. <br>2022 - 2024`;
}
else
// If the language isnt english, this will happen ->

{
    document.getElementById("translate25").innerHTML = 'Tryggheim Barnehage';

    document.getElementById("translate26").innerHTML = 'Tryggheim er en privat kristen barnehage i Halden. <br>2009 - 2012';

    document.getElementById("translate27").innerHTML = 'Kjølberg Skole';

    document.getElementById("translate28").innerHTML = 'Kjølberg Skole er en statseid skole i Sellebakk. <br>2012 - 2019';

    document.getElementById("translate29").innerHTML = 'Borge Ungdomskole';

    document.getElementById("translate30").innerHTML = 'Borge Ungdomskole er en skole i nordre Sellebakk. <br>2019 - 2022';

    document.getElementById("translate31").innerHTML = 'Glemmen Videregående';

    document.getElementById("translate32").innerHTML = `Glemmen er skolen jeg går på nå og linjen jeg går på er Ikt og Medier. <br>
        Glemmen ligger i utkanten av Fredrikstad sentrum. <br>2022 - 2024`;
}


// translatest the hobbies page
if (localStorage.getItem("lang") === "en")
// If the language is english, this will happen ->

{
    document.getElementById("translate33").innerHTML =
        `<h2 style="font-family: Kdam Thmor Pro;">Gaming</h2>
                <div style="font-family: Rubik;">
                    <!-- Paragraf -->
                    <h4>
                        I am very much a variety gamer, wich mean that I play everything from <br><a
                            href="https://www.paradoxinteractive.com/games/hearts-of-iron-iv/about" target="_blank">Hearts of Iron</a>
                        to <a href="https://carx-online.com" target="_blank">Carx</a>, from war to drifting, but I mostly
                        allthough its been mostly cars lately. <br>
                        If you want to see all my games, you can go to <a
                            href="https://steamcommunity.com/profiles/76561199016709901/" target="_blank">my steam account </a>
                    </h4>
                    <br>
                    <h3>Under, you have a list of my top 5 games in an Unorganized list.</h3>
                </div>`;


    document.getElementById("translate34").innerHTML =
        `   <button id="Btn" onclick="Btn()">
                <h1>Carx Drift Racing Online <img src="./Images/Carx.png" width="75" style="border-radius: 20px;">
                </h1>
            </button>

            <div id="Drop" class="Drop">
                <h5>
                Carx is an online game where you can drift many different cars. <br> 
                There isn’t much competition or any particular goal, but it’s still very fun. <br> 
                The game has no story, but it’s not necessary because it’s not a game that requires it. <br> 
                I give the game a 6 out of 10, but it’s still my favorite game right now, <br> 
                this is because of its simplicity and just how fun it is to cruise around.
                </h5>
            </div>

            <br>

            <!-- Dropdown paragraf med Informasjon om Forza -->
            <button id="Btn2" onclick="Btn2()">
                <h1>Forza Forizon 5 <span style="opacity: 0;">Lorem Ip</span><img src="./Images/FH5.png" width="75"
                        style="border-radius: 20px;"></h1>
            </button>

            <div id="Drop2" class="Drop2">
                <h5>
                Forza is another online game, but it has one large open world instead of many small ones. <br> 
                The reason both Forza and Carx are here is because Forza is an arcade racer instead of simcade. <br> 
                Forza is so good because of the variety, for example, you can turn an F-150 into a drifting machine. <br> 
                The game has a pretty bad story because you start as a world-famous racing star. <br> 
                All the characters including yourself are happy idiots who don’t understand what’s important. <br> 
                I give the game a 7 out of 10 for all the different cars.
                </h5>
            </div>

            <br>

            <!-- Dropdown paragraf med Informasjon om Bonelab -->
            <button id="Btn3" onclick="Btn3()">
                <h1>Bonelab <span style="opacity: 0;">Lorem Ipsum D-</span><img src="./Images/Bonelab.png"
                        width="75" style="border-radius: 20px;"></h1>
            </button>

            <div id="Drop3" class="Drop3">
                <h5>
                Bonelab is a special VR game because it focuses so heavily on physics. <br> 
                What I mean by that is that the whole world is interactive and can be used for things like fighting. <br> 
                The reason it’s not at the top is because it becomes very janky and buggy. <br> 
                The game has a decent story, but the focus is on the physics and the fun of the game. <br> 
                I give the game a 7 out of 10 for the fantastic physics.
                </h5>
            </div>

            <br>

            <!-- Dropdown paragraf med Informasjon om Skyrim VR -->
            <button id="Btn4" onclick="Btn4()">
                <h1>Skyrim VR <span style="opacity: 0;">Lorem Ipsum-</span><img src="./Images/Skyrim.png"
                        width="75" style="border-radius: 20px;"></h1>
            </button>

            <div id="Drop4" class="Drop4">
                <h5>
                Skyrim VR is a very bad game in its original form, but mods work wonders. <br> 
                Skyrim VR has been shaped by modding and that’s good because the community has a lot of power. <br> 
                But it’s also stupid because Bethesda doesn’t care about their game anymore. <br> 
                The story in Skyrim is very good and the only reason people still mod it. <br> 
                I give the game a 7 out of 10 for all the sick mods out there.
                </h5>
            </div>
            <br>

            <!-- Dropdown paragraf med Informasjon om Hoi4 -->
            <button id="Btn5" onclick="Btn5()">
                <h1>iRacing <span style="opacity: 0;">Lorem Ipsum Dol</span><img src="./Images/iracing.png"
                        width="75" style="border-radius: 20px;"></h1>
            </button>

            <div id="Drop5" class="Drop5">

                <h5>
                Iracing is not like the other car games on this list because it’s a professional simulator. <br> 
                Instead of focusing on having the most fun game, they focus on realism. <br> 
                When you race in the game, it’s important to take your time practicing on the track and car. <br> 
                It’s important because you level up by winning but also by driving carefully. <br> 
                I give the game an 8 out of 10. It’s surprisingly more fun than one would think.
                </h5>
            </div>`;


    document.getElementById("translate35").innerHTML =
        `     <div style="font-family: Rubik;">
        <!-- Paragraph -->
        <h4>
            I've become quite fond of cars lately. <br>
            I mostly like old American cars and Japanese JDM cars, <br>
            but there are also other cars that I wouldn't say no to.
        </h4>
        <br>
        <h3>Below is a list of my top 3 cars Unorganized by rating</h3>
    </div>`


    document.getElementById("translate36").innerHTML =
        `<button id="Btn6" onclick="Btn6()">
    <h1>Toyota Supra Mk3 <span style="opacity: 0;">LoremI--</span><img src="./Images/Supra mk3.png"
        width="75" style="border-radius: 20px;"></h1>
            </button>
            <div id="Drop6" class="Drop6">
                <h5>
                    When talking about the Toyota Supra, people often think of the Mk4, <br>
                    but I think the Mk3 model looks much better, it's not too bad either, <br>
                    some of the models actually came from the factory with twin turbos and 230Hp. <br>
                    The car was introduced in 1986 and continued production until '93.
                </h5>
            </div>
            <br>
            <!-- Dropdown paragraph with information about charger -->
            <button id="Btn7" onclick="Btn7()">
                <h1>Dodge Charger '69 <span style="opacity: 0;">Lori|mi-</span><img src="./Images/charger.png"
                    width="75" style="border-radius: 20px;"></h1>
                </button>
                
                <div id="Drop7" class="Drop7">
                    
                    <h5>
                        There's not much to say about this car, I like it because it's good for drifting in Carx. <br>
                        It also looks nice, it's basically the same car that was used in Fast and Furious.<br>
                        Some of the models came from the factory with a strong V8 with 425Hp. <br>
                    </h5>
                </div>
                <br>
                <!-- Dropdown paragraf med Informasjon om NSX -->
                <button id="Btn8" onclick="Btn8()">
                    <h1>Honda NSX R <span style="opacity: 0;">Lori||||||||||m-</span><img
                        src="../Images/NSX.png" width="75" style="border-radius: 20px;"></h1>
            </button>
            
            <div id="Drop8" class="Drop8">
                
                <h5>
                The Honda NSX Type R is a car I discovered not too long ago in Forza Horizon and since then I’ve been in love. <br> 
                Especially the 1992 model is the coolest in my opinion. It came from the factory with 276Hp from a powerful V6 engine. <br> 
                The Honda had the engine in the middle of the car and had rear-wheel drive, which made it difficult to control if you didn’t know how.
                </h5>
            </div>
                `


    document.getElementById("translate37").innerHTML =
        `
    <!-- Formula 1 Heading with Kdam Thmor Pro -->
    <h2 style="font-family: Kdam Thmor Pro;">Formula 1</h2>
    <div style="font-family: Rubik;">
    <!-- Paragraph -->
    <h4>With my recent joy of cars, F1 was impossible to avoid. <br>
    I started with the thought that F1 was stupid because they weren't real cars, <br>
    All those thoughts disappeared after I watched Drive to Survive on Netflix.</h4>
    <br>
    <h3>Below is some information about my favorite driver and his team</h3>
    </div>        
    `


    document.getElementById("translate38").innerHTML =
        `
            <button id="Btn9" onclick="Btn9()">
            <h1>Alpine <span style="opacity: 0;">LoremIpsumDolorSit</span><img
                    src="./Images/Alpine_logo.png" width="75" style="border-radius: 20px;"></h1>
        </button>


        <div id="Drop9" class="Drop9">
            <h5>
                Alpine is a team that did well in 2022 with the fight against Maclaren, <br> 
                But this year Maclaren has fallen off and has the worst car by far. <br> 
                While Alpine has a car that has the potential to get fourth place again. <br><br> 
                Last year Alpine and Maclaren had a quarrel about who should have junior driver Oscar Piastri, <br> 
                It ended with Maclaren getting him, but Alpine got someone who is even better and my favorite driver. <br> 
                Pierre Gasly <i class=“fa-solid fa-arrow-down”></i>
            </h5>
        </div>
        <br>
        <!-- Dropdown paragraf med Informasjon om Gasly -->
        <button id="Btn10" onclick="Btn10()">
            <h1>Pierre Gasly <span style="opacity: 0;">LoremIpsumDol</span><img
                    src="./Images/Gasly.png" width="75" style="border-radius: 20px;"></h1>
        </button>


        <div id="Drop10" class="Drop10">
            <h5>
                Pierre Gasly is a French driver for Alpine F1 team and my favorite. <br> 
                Pierre started his Formula 1 career at Red Bull after Daniel Ricardo moved to Renault in 2019. <br>
                But everything did not go as planned for the Frenchman since he was not confident enough in his driving, <br> 
                He was then moved to Red Bull’s daughter team: “Alpha Tauri” where he would drive with Yuki Tsunoda. <br> 
                But one beautiful day in Monza, Italy he took first place in one of the worst cars.<br> 
                The story of Monza 2020 is legendary and it gave him enough credit to move to Alpine two years later. <br> <br> 
                So far this season Pierre is tied with teammate Esteban Ocon at 10 and 11. <br> 
                But I have faith in the Frenchman this year and hope that he scores big points.
            </h5>
        </div>
    `
}
else
// If the language isnt english, this will happen ->

{
    document.getElementById("translate33").innerHTML =
        '        <h2 style="font-family: Kdam Thmor Pro;">Gaming</h2>' +
        '        <div style="font-family: Rubik;">' +
        '            <!-- Paragraf -->' +
        '            <h4>' +
        '                Jeg er en såkalt variety gamer, som betyr at jeg spiller alt fra <br><a' +
        '                    href="https://www.paradoxinteractive.com/games/hearts-of-iron-iv/about" target="_blank">Hearts of Iron</a>' +
        '                til <a href="https://carx-online.com" target="_blank">Carx</a>, fra Krig til drifting, men jeg' +
        '                spiller mest bilspill nå for tiden. <br>' +
        '                Hvis du vil se alle spillene mine, finner du dpå <a' +
        '                    href="https://steamcommunity.com/profiles/76561199016709901/" target="_blank">steam kontoen' +
        '                    min her</a>' +
        '            </h4>' +
        '            <br>' +
        '            <h3>Under har du en liste med mine topp 5 spill Uorganisert med rating</h3>' +
        '        </div>';


    document.getElementById("translate34").innerHTML =
        `        <button id="Btn" onclick="Btn()">
                <h1>Carx Drift Racing Online <img src="../Images/Carx.png" width="75" style="border-radius: 20px;">
                </h1>
            </button>

            <div id="Drop" class="Drop">

                <h5>
                    Carx er et online spill hvor man drifter mange forskjellige biler. <br>
                    Det er ikke mye konkuransse eller noe særlig mål, men det er fortsatt veldig gøy <br>
                    Spillet har ingen story, men det er ikke nødvendig fordi det er ikke spill som behøver det. <br>
                    Jeg gir spillet en 6 av 10, men det er fortsatt favorittspillet mitt akkuratt nå, <br>
                    dette er på grunn av simpelheten og bare hvor gøy det er å cruise rundt.
                </h5>
            </div>

            <br>

            <!-- Dropdown paragraf med Informasjon om Forza -->
            <button id="Btn2" onclick="Btn2()">
                <h1>Forza Forizon 5 <span style="opacity: 0;">Lorem Ip</span><img src="../Images/FH5.png" width="75"
                        style="border-radius: 20px;"></h1>
            </button>

            <div id="Drop2" class="Drop2">

                <h5>
                    Forza er enda et online spill, men det har 1 stor åpen verden istedet for mange små. <br>
                    Grunnen til at både forza og Carx er her er fordi Forza er en arcade racer istedet for simcade <br>
                    Forza er så bra på grunn av variasjonen, du kan feks. gjøre en pickup til en drifte maskin. <br>
                    Spillet har en helt forferdelig story fordi du starter som en verdensberømt racing-stjerne <br>
                    Alle karakterene inkludert deg selv er jovialle idioter som ikke kjønner hva som er viktig. <br>
                    Jeg gir spillet en 7 av 10 for alle de forskjellige bilene.
                </h5>
            </div>

            <br>

            <!-- Dropdown paragraf med Informasjon om Bonelab -->
            <button id="Btn3" onclick="Btn3()">
                <h1>Bonelab <span style="opacity: 0;">Lorem Ipsum D-</span><img src="../Images/Bonelab.png"
                        width="75" style="border-radius: 20px;"></h1>
            </button>

            <div id="Drop3" class="Drop3">

                <h5>
                    Bonelab er et spesielt VR spill fordi det fokuserer så heavy på fysikker, <br>
                    det jeg mener med det er at hele verden er interactable og kan brukes til feks. slossing <br>
                    Grunnen til at det ikke er på topp er fordi det blir for veldig Janky og Buggy. <br>
                    Spillet har en grei story, men fokuset ligger i fysikkene og morroa med spillet.<br>
                    Jeg gir spillet en 7 av 10 for de fantastiske fysikkene.
                </h5>
            </div>

            <br>

            <!-- Dropdown paragraf med Informasjon om Skyrim VR -->
            <button id="Btn4" onclick="Btn4()">
                <h1>Skyrim VR <span style="opacity: 0;">Lorem Ipsum-</span><img src="../Images/Skyrim.png"
                        width="75" style="border-radius: 20px;"></h1>
            </button>

            <div id="Drop4" class="Drop4">

                <h5>
                    Skyrim VR er et veldig dålig spill i utgangspunktet, men mods gjør mirakler. <br>
                    Skyrim Vr har blitt formet av modding og det er bra fordi felleskapet har mye makt, <br>
                    Men det er også dumt fordi bethesda ikke bryr seg om spillet sitt lenger. <br>
                    Storyen i skyrim er jo veldig bra og den eneste grunnen til at folk fortsatt spiller. <br>
                    Jeg gir spillet en 7 av 10 for alle de syke modsene der ute.
                </h5>
            </div>
            <br>

            <!-- Dropdown paragraf med Informasjon om Hoi4 -->
            <button id="Btn5" onclick="Btn5()">
                <h1>iRacing <span style="opacity: 0;">Lorem Ipsum Dol</span><img src="../Images/iracing.png"
                        width="75" style="border-radius: 20px;"></h1>
            </button>

            <div id="Drop5" class="Drop5">

                <h5>
                    Iracing er ikke som de andre bilspillene på denne listen, fordi dette er en proff simulator.
                    <br>
                    Istedenfor å fokusere på å ha det morsomste spillet, fokuserer de heller på realisme. <br>
                    Når du skal race i spillet er det viktig å ta sin tid på å øve på banen og bilen, <br>
                    det er viktig fordi du kommer opp i level for å vinne men også å kjøre forsiktig. <br>
                    Jeg gir spillet en 8 av 10. Det overaskende morsommere enn en skulle tro.
                </h5>
            </div>`


    document.getElementById("translate35").innerHTML =
        `  <div style="font-family: Rubik;">
            <!-- Paragraf -->
            <h4>
                Jeg er blitt ganske glad i biler i det siste. <br>
                jeg liker mest gamle ameriksanske biler og japanske jdm biler, <br>
                men det er også andre biler som jeg ikke hadde sagt nei til.
            </h4>
            <br>
            <h3>Under har du en liste med mine topp 3 biler uorganisert med rating</h3>
        </div>`


    document.getElementById("translate36").innerHTML =
        `<button id="Btn6" onclick="Btn6()">
                <h1>Toyota Supra Mk3 <span style="opacity: 0;">LoremI--</span><img src="../Images/Supra mk3.png"
                    width="75" style="border-radius: 20px;"></h1>
        </button>

        <div id="Drop6" class="Drop6">
            
            <h5>
                Når man snakker om Toyota Supra tenker man ofte på Mk4, <br>
                men jeg synes mk3 modellen ser mye bedre ut, den er ikke så verst heller, <br>
                noen av modellene kom faktisk fra fabrikken med twin turbos og 230Hk. <br>
                Bilen ble introdusert i 1986 og fortsatte produksjon fram til '93.
            </h5>
        </div>
        <br>
        <!-- Dropdown paragraf med Informasjon om charger -->
        <button id="Btn7" onclick="Btn7()">
            <h1>Dodge Charger '69 <span style="opacity: 0;">Lori|mi-</span><img src="../Images/charger.png"
                width="75" style="border-radius: 20px;"></h1>
            </button>
            
            <div id="Drop7" class="Drop7">
                
                <h5>
                    Det er ikke så mye å si om denne bilen, jeg liker den fordi den er god å drifte i Carx. <br>
                    Den ser jo også fin ut da, det er basically samme bilen som ble brukt i fast and furius.<br>
                    Noen av modellene kom fra fabrikken med en sterk V8 med 425Hk. <br>
                </h5>
            </div>
            <br>
            <!-- Dropdown paragraf med Informasjon om NSX -->
            <button id="Btn8" onclick="Btn8()">
                <h1>Honda NSX R <span style="opacity: 0;">Lori||||||||||m-</span><img
                    src="../Images/NSX.png" width="75" style="border-radius: 20px;"></h1>
        </button>
        
        <div id="Drop8" class="Drop8">
            
            <h5>
                Honda NSX type R er en bil jeg fant for ikke så lenge siden i Forza Horizon og siden da har jeg vært forelsket. <br>
                Spesielt 1992 modellen er den kuleste i min mening. Den kom fra fabrikken med 276Hk som kom fra en krafig V6 motor. <br>
                Hondaen hadde motoren midt i bilen og hadde bakhjulsdrift, som gjorde den vanskelig å kontrollere hvis du ikke visste hvordan.
            </h5>
        </div>
            `


    document.getElementById("translate37").innerHTML =
        `
    <!-- Formel 1 Overskrift med Kdam Thmor Pro -->
    <h2 style="font-family: Kdam Thmor Pro;">Formel 1</h2>
    <div style="font-family: Rubik;">
        <!-- Paragraf -->
        <h4>
            Med min nylige glede med biler, var F1 umulig å unngå. <br>
            Jeg startet med tanken om at F1 var dumt fordi det ikke var ordentlige biler, <br>
            Alle de tankene forsvant etter at jeg så på Drive to Survive på netflix
        </h4>
        <br>
        <h3>Under har du litt info om min favoritt sjåfør og hans lag</h3>
    </div>
    `


    document.getElementById("translate38").innerHTML =
        `
            <button id="Btn9" onclick="Btn9()">
            <h1>Alpine <span style="opacity: 0;">LoremIpsumDolorSit</span><img
                    src="../Images/Alpine_logo.png" width="75" style="border-radius: 20px;"></h1>
        </button>


        <div id="Drop9" class="Drop9">
            <h5>
                Alpine er et lag som gjorde det greit i 2022 med kampen mot Maclaren, <br>
                Men i år har Maclaren falt av og har den desidert dårligste bilen. <br>
                Mens Alpine har en bil som har muligheten til å få fjerde plassen igjen. <br><br>
                I fjord hadde Alpine og Maclaren en krangel om hvem som skulle ha junior sjåfør Oscar
                Piastri, <br>
                Det endte med at Maclaren fikk han, men Alpine fikk noen som er enda bedre og min
                favoritt
                sjåfør. <br>
                Pierre Gasly <i class="fa-solid fa-arrow-down"></i>
            </h5>
        </div>
        <br>
        <!-- Dropdown paragraf med Informasjon om Gasly -->
        <button id="Btn10" onclick="Btn10()">
            <h1>Pierre Gasly <span style="opacity: 0;">LoremIpsumDol</span><img
                    src="../Images/Gasly.png" width="75" style="border-radius: 20px;"></h1>
        </button>


        <div id="Drop10" class="Drop10">
            <h5>
                Pierre Gasly er en fransk sjårfør får Alpine F1 team og min favoritt. <br>
                Pierre begynte Formel 1 karieren sin hos Red Bull etter at Daniel Ricardo flyttet til Renault i 2019. <br>
                Men alt gikk ikke helt som planlagt for franskmannen etter som han ikke var sikker nokk på kjøringen sin, <br>
                Han ble da flyttet til datterlaget til Red Bull: "Alpha Tauri" hvor han skulle kjøre med Yuki Tsunoda. <br>
                Men en vakker dag i Monza, Italia stakk han av med første plass i en av de dårligste bilene.<br>
                Historien om Monza 2020 er legendarisk og det ga han nokk cred til å to år senere flytte til Alpine. <br> <br>
                Så langt denne sessongen ligger Pierre likt sammen med lagkameraten Esteban Ocon på 10 og 11. <br>
                Men jeg har trua på at franskmannen i år og håper at han skårer store poeng.
            </h5>
        </div>
    `
}