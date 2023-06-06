// Function for translating the entire page
function translate()
{
    // Language variable to easily know what language is being used
    let language = localStorage.getItem("lang");

    try
    // Tries the entire code
    {
    // translates the navbar
    // This works the same for all of the translations
    {
        if (language === "en")
        // If the language is set to english it inserts the translation of every id.
        // The languge gets remembered even if you go out of the site and come back later.

        {
            document.querySelector("#translate1").innerHTML = '<i class="fa fa-hammer"></i> Work Experience '

            document.querySelector("#translate2").innerHTML = '<i class="fa fa-book"></i> Education '

            document.querySelector("#translate3").innerHTML = '<i class="fas fa-headset"></i> Hobbies '

            document.querySelector("#translate4").innerHTML = '<i class="fa-solid fa-gamepad"></i> Games and other sites '
        }
        else if (language === "no")
        {
            document.querySelector("#translate1").innerHTML = '<i class="fa fa-hammer"></i> Arbeidserfaring ';

            document.querySelector("#translate2").innerHTML = '<i class="fa fa-book"></i> Utdanning '

            document.querySelector("#translate3").innerHTML = '<i class="fas fa-headset"></i> Hobbier '

            document.querySelector("#translate4").innerHTML = '<i class="fa-solid fa-gamepad"></i> Spill og andre sider '
        }
        else if (language === "de")
        {
            document.querySelector("#translate1").innerHTML = '<i class="fa fa-hammer"></i> Berufserfahrung';

            document.querySelector("#translate2").innerHTML = '<i class="fa fa-book"></i> Bildung';

            document.querySelector("#translate3").innerHTML = '<i class="fas fa-headset"></i> Hobbys';

            document.querySelector("#translate4").innerHTML = '<i class="fa-solid fa-gamepad"></i> Spiele und andere Websites';
        }
        else if (language === "ch")
        {
            document.querySelector("#translate1").innerHTML = '<i class="fa fa-hammer"></i> 工作经历';
            document.querySelector("#translate2").innerHTML = '<i class="fa fa-book"></i> 教育 ';
            document.querySelector("#translate3").innerHTML = '<i class="fas fa-headset"></i> 爱好 ';
            document.querySelector("#translate4").innerHTML = '<i class="fa-solid fa-gamepad"></i> 游戏和其他网站 '
        }
        else if (language === "sp")
        {
            document.querySelector("#translate1").innerHTML = '<i class="fa fa-hammer"></i> Experiencia laboral';
            document.querySelector("#translate2").innerHTML = '<i class="fa fa-book"></i> Educación ';
            document.querySelector("#translate3").innerHTML = '<i class="fas fa-headset"></i> Pasatiempos ';
            document.querySelector("#translate4").innerHTML = '<i class="fa-solid fa-gamepad"></i> Juegos y otros sitios '
        }
    }

    // translates the home page
    {
        if (language === "en")
        // If language is english this will happen ->
    
        {
            document.querySelector("#translate8").innerHTML =
                'Lukas Okkenhaug <br> Birthdate: July 15th 2006 16 years <br> House: 1653 Sellebakk';
    
            document.querySelector("#translate9").innerHTML =
                'Ocupation: Student <br> Program: It and MediaProduction <br> School: Glemmen VGS';
        }
        else if (language === "no")
        {
            document.querySelector("#translate8").innerHTML =
                'Lukas Okkenhaug <br> Fødselsdato: 15. Juli 2006 16 år <br> Bolig: 1653 Sellebakk';
    
            document.querySelector("#translate9").innerHTML =
                'Okkupasjon: Elev <br> Linje: Ikt og Medieproduksjon <br> Skole: Glemmen VGS'
        }
        else if (language === "de")
        {
            document.querySelector("#translate8").innerHTML =
                'Lukas Okkenhaug <br> Geburtsdatum: 15. Juli 2006 16 Jahre <br> Haus: 1653 Sellebakk';
    
            document.querySelector("#translate9").innerHTML =
                'Besetzung: Schüler <br> Programm: IT und Medienproduktion <br> Schule: Glemmen VGS';
        }
        else if (language === "ch")
        {
            document.querySelector("#translate8").innerHTML = 
                'Lukas Okkenhaug <br> 出生日期：2006 年 7 月 15 日 16 岁 <br> 房子：1653 Sellebakk';
            document.querySelector("#translate9").innerHTML = 
                '职业：学生 <br>项目：它 和 媒体制作 <br>学校：Glemmen VGS';
        }
        else if (language === "sp")
        {
            document.querySelector("#translate8").innerHTML = 'Lukas Okkenhaug <br> Fecha de nacimiento: 15 de julio de 2006 16 años <br> Casa: 1653 Sellebakk';
            document.querySelector("#translate9").innerHTML = 'Ocupación: Estudiante <br> Programa: Producción de TI y medios <br> Escuela: Glemmen VGS';
        }

    }

    // // translates the work page
    {
        if (language === "en")
        // if language is english this will happen ->
    
        {
            document.querySelector("#translate10").innerHTML =
                `Where: Ark<br> When:<span style="opacity: 0;">|</span> 2019<br> Pay:<span style="opacity: 0;">Ha
            </span> 116$<br> Work:<span style="opacity: 0;">A</span>Inventory`;
    
            document.querySelector("#translate11").innerHTML =
                `Where: Selbak<br> When:<span style="opacity: 0;">|</span> 2022<br>
                Pay:<span style="opacity: 0;">Ha</span> 311$<br> Work:<span style="opacity: 0;">A</span>RoofWork`;
    
            document.querySelector("#translate12").innerHTML =
                'Work <i class="fa-solid fa-user-nurse"></i>';
    
            document.querySelector("#translate13").innerHTML = 'Experience <i class="fa-solid fa-clipboard">'
    
            document.querySelector("#translate14").innerHTML = 'Programming'
    
            document.querySelector("#translate15").innerHTML = 'Mediaproduction'
    
            document.querySelector("#translate16").innerHTML = 'Photo'
    
            document.querySelector("#translate17").innerHTML = 'Design'
    
            document.querySelector("#translate18").innerHTML = 'Photo Editing'
    
            document.querySelector("#translate19").innerHTML = 'Video Editing'
    
            document.querySelector("#translate20").innerHTML = 'Language';
    
            document.querySelector("#translate21").innerHTML = 'Norwegian'
    
            document.querySelector("#translate22").innerHTML = 'English'
    
            document.querySelector("#translate23").innerHTML = 'German'
    
            document.querySelector("#translate24").innerHTML = `I started my youtube channel when I was 11 years old in 2017, <br>
                Youtube has given lots of experience with editing vieos and Photoes with adobe Creative Cloud. <br>
                I have most of my experience in gaming videos, but I can also edit other stuff.`
    
        }
        else if (language === "no")
        {
            document.querySelector("#translate10").innerHTML = `Hvor: Ark<br> Når:<span style="opacity: 0;">h</span> 2019<br> Lønn: 1 270kr<br>
                Jobb:<span style="opacity: 0;">|</span>Varetelling`;
    
            document.querySelector("#translate11").innerHTML = `Hvor: Selbak<br> Når:<span style="opacity: 0;">h</span> 2022<br> Lønn: 3 400kr<br>
                Jobb:<span style="opacity: 0;">|</span>Takarbeid`;
    
            document.querySelector("#translate12").innerHTML = 'Arbeid <i class="fa-solid fa-user-nurse"></i>';
    
            document.querySelector("#translate13").innerHTML = 'Erfaringer <i class="fa-solid fa-clipboard">';
    
            document.querySelector("#translate14").innerHTML = 'Programmering';
    
            document.querySelector("#translate15").innerHTML = 'Medieproduksjon';
    
            document.querySelector("#translate16").innerHTML = 'Foto';
    
            document.querySelector("#translate17").innerHTML = 'Design'
    
            document.querySelector("#translate18").innerHTML = 'Bilde Redigering';
    
            document.querySelector("#translate19").innerHTML = 'Video Redigering';
    
            document.querySelector("#translate20").innerHTML = 'Språk';
    
            document.querySelector("#translate21").innerHTML = 'Norsk';
    
            document.querySelector("#translate22").innerHTML = 'Engelsk';
    
            document.querySelector("#translate23").innerHTML = 'Tysk';
    
            document.querySelector("#translate24").innerHTML = `Jeg begynte med en youtube kanal da jeg var 11 år gammel i 2017, <br>
                Youtube har gitt meg mye erfaring med å redigere videoer og bilder med adobe Creative Cloud. <br>
                Jeg har mest erfaring innenfor gaming videoer, men kan også redigere andre ting også.`;
        }
        else if (language === "de")
        {
            document.querySelector("#translate10").innerHTML =
            `Wo: Ark<br> Wann:<span style="opacity: 0;">|</span> 2019<br> Bezahlung: 107€<br> Arbeit: Bestandsaufnahme`;
    
            document.querySelector("#translate11").innerHTML =
            `Wo: Selbak<br> Wann:<span style="opacity: 0;">|</span> 2022<br>
                        Bezahlung: 288€<br> Arbeit: Dacharbeiten`;
    
            document.querySelector("#translate12").innerHTML = 'Arbeit <i class="fa-solid fa-user-nurse"></i>';
    
            document.querySelector("#translate13").innerHTML = 'Erfahrung <i class="fa-solid fa-clipboard">'
    
            document.querySelector("#translate14").innerHTML = 'Programmierung'
    
            document.querySelector("#translate15").innerHTML = 'Medienproduktion'
    
            document.querySelector("#translate16").innerHTML = 'Foto'
    
            document.querySelector("#translate17").innerHTML = 'Design'
    
            document.querySelector("#translate18").innerHTML = 'Fotobearbeitung'
    
            document.querySelector("#translate19").innerHTML = 'Videobearbeitung'
    
            document.querySelector("#translate20").innerHTML = 'Sprache';
    
            document.querySelector("#translate21").innerHTML = 'Norwegisch'
    
            document.querySelector("#translate22").innerHTML = 'Englisch'
    
            document.querySelector("#translate23").innerHTML = 'Deutsch'
    
            document.querySelector("#translate24").innerHTML = `Ich habe 2017 mit 11 Jahren meinen Youtube-Kanal gestartet. <br>
                        Youtube hat mir viel Erfahrung im Bearbeiten von Videos und Fotos mit Adobe Creative Cloud gegeben. <br>
                        Ich habe die meiste Erfahrung in Gaming-Videos, aber ich kann auch andere Dinge bearbeiten.`
        }
        else if (language === "ch")
        {
            document.querySelector("#translate10").innerHTML = 
            `在哪里: 床单<br> 什么时候:<span style="opacity: 0;">|</span> 2019<br> 支付:<span style="opacity: 0;">哈 </span> 116$<br> 工作：<span style="opacity: 0;">A</span>库存`;

            document.querySelector("#translate11").innerHTML =
            `在哪里: 塞尔巴克<br> 什么时候:<span style="opacity: 0;">|</span> 2022<br>支付:<span style="opacity: 0;">Ha</span> 311$<br> 工程：<span style="opacity: 0;">A</span>屋顶工程`;

            document.querySelector("#translate12").innerHTML ='工作 <i class="fa-solid fa-user-nurse"></i>';
            
            document.querySelector("#translate13").innerHTML = '经验 <i class="fa-solid fa-clipboard">';

            document.querySelector("#translate14").innerHTML = '编程';
            
            document.querySelector("#translate15").innerHTML = '媒体制作';document.querySelector("#translate16").innerHTML = '照片';

            document.querySelector("#translate17").innerHTML = '设计';
            
            document.querySelector("#translate18").innerHTML = '图片编辑';document.querySelector("#translate19").innerHTML = '视频编辑';

            document.querySelector("#translate20").innerHTML = '语言';
            
            document.querySelector("#translate21").innerHTML = '挪威语';document.querySelector("#translate22").innerHTML = '英语';

            document.querySelector("#translate23").innerHTML = '德语';

            document.querySelector("#translate24").innerHTML = 
            `我在 2017 年 11 岁时开始了我的 youtube 频道，<br>Youtube 提供了很多使用 adobe 创意云 编辑视频和照片的经验。 <br>我在游戏视频方面拥有大部分经验，但我也可以编辑其他内容。`;
        }
        else if (language === "sp")
        {
            document.querySelector("#translate10").innerHTML =
                `Dónde: Arca<br> Cuándo:<span style="opacity: 0;">|</span> 2019<br> Pago:<span style="opacity: 0;">Ha</span> 107€<br> Trabajo:<span style="opacity: 0;">A</span>Inventario`;
            document.querySelector("#translate11").innerHTML =

                `Dónde: Selbak<br> Cuándo:<span style="opacity: 0;">|</span> 2022<br>Pago:<span style="opacity: 0;">Ha</span> 288€<br> Obra:<span style="opacity: 0;">A</span>techado`;
            
            document.querySelector("#translate12").innerHTML ='Trabajo <i class="fa-solid fa-user-nurse"></i>';

            document.querySelector("#translate13").innerHTML = 'Experiencia <i class="fa-solid fa-clipboard">';
            
            document.querySelector("#translate14").innerHTML = 'Programación';
            
            document.querySelector("#translate15").innerHTML = 'Producción de medios';
            
            document.querySelector("#translate16").innerHTML = 'Foto';
            
            document.querySelector("#translate17").innerHTML = 'Diseño';
            
            document.querySelector("#translate18").innerHTML = 'Edición de fotos';
            
            document.querySelector("#translate19").innerHTML = 'Edición de video';
            
            document.querySelector("#translate20").innerHTML = 'Idioma';
            
            document.querySelector("#translate21").innerHTML = 'Noruego';
            
            document.querySelector("#translate22").innerHTML = 'Inglés';
            
            document.querySelector("#translate23").innerHTML = 'Alemán';
            
            document.querySelector("#translate24").innerHTML = `Comencé mi canal de YouTube cuando tenía 11 años en 2017, <br>YouTube me ha brindado mucha experiencia en la edición de videos y fotografías con Adobe Creative Cloud. <br>Tengo la mayor parte de mi experiencia en videos de juegos, pero también puedo editar otras cosas.`
        }
    }

    // Translates the education page
    {
        if (language === "en")
        // If the language is english, this will happen ->
    
        {
            document.querySelector("#translate25").innerHTML = 'SafeHome Kindergarden';
    
            document.querySelector("#translate26").innerHTML = 'Safehome is a private christian kindergarden in Halden. <br>2009 - 2012';
    
            document.querySelector("#translate27").innerHTML = 'Kjolberg School';
    
            document.querySelector("#translate28").innerHTML = 'Kjolberg School is a school in Sellebakk owned by the state. <br>2012 - 2019';
    
            document.querySelector("#translate29").innerHTML = 'Borge secondary school';
    
            document.querySelector("#translate30").innerHTML = 'Borge secondary is a school in northern Sellebakk. <br>2019 - 2022';
    
            document.querySelector("#translate31").innerHTML = 'Glemmen High School';
    
            document.querySelector("#translate32").innerHTML = `Glemmen is the school I am currently in and we are learning about programming and mediaproduction. <br>
                Glemmen lays in the outskirts of Fredrikstad City. <br>2022 - 2024`;
        }
        else if (language === "no")
        {
            document.querySelector("#translate25").innerHTML = 'Tryggheim Barnehage';
    
            document.querySelector("#translate26").innerHTML = 'Tryggheim er en privat kristen barnehage i Halden. <br>2009 - 2012';
    
            document.querySelector("#translate27").innerHTML = 'Kjølberg Skole';
    
            document.querySelector("#translate28").innerHTML = 'Kjølberg Skole er en statseid skole i Sellebakk. <br>2012 - 2019';
    
            document.querySelector("#translate29").innerHTML = 'Borge Ungdomskole';
    
            document.querySelector("#translate30").innerHTML = 'Borge Ungdomskole er en skole i nordre Sellebakk. <br>2019 - 2022';
    
            document.querySelector("#translate31").innerHTML = 'Glemmen Videregående';
    
            document.querySelector("#translate32").innerHTML = `Glemmen er skolen jeg går på nå og linjen jeg går på er Ikt og Medier. <br>
                Glemmen ligger i utkanten av Fredrikstad sentrum. <br>2022 - 2024`;
        }
        else if (language === "de")
        {
            document.querySelector("#translate25").innerHTML = 'SicherZuhause Kindergarten';
    
            document.querySelector("#translate26").innerHTML = 'SicherZuhause ist ein privater christlicher Kindergarten in Halden. <br>2009 - 2012';
                
            document.querySelector("#translate27").innerHTML = 'Kjolberg-Schule';
                
            document.querySelector("#translate28").innerHTML = 'Die Kjolberg-Schule ist eine Schule in Sellebakk im Besitz des Staates. <br>2012 - 2019';
                
            document.querySelector("#translate29").innerHTML = 'Borge weiterführende Schule';
                
            document.querySelector("#translate30").innerHTML = 'Die Borge weiterführende Schule liegt im Norden von Sellebakk. <br>2019 - 2022';
                
            document.querySelector("#translate31").innerHTML = 'Glemmen Gymnasium';
                
            document.querySelector("#translate32").innerHTML = `Glemmen ist die Schule, die ich derzeit besuche, und wir lernen über Programmierung und Medienproduktion. <br>
                Glemmen liegt am Stadtrand von Fredrikstad. <br>2022 - 2024`;
        }
        else if (language === "ch")
        {
            document.querySelector("#translate25").innerHTML = '安全之家幼儿园';
            document.querySelector("#translate26").innerHTML = '安全之家 是哈尔登的一所私立基督教幼儿园。 <br>2009 - 2012';document.querySelector("#translate27").innerHTML = 'Kjolberg 学校';
            document.querySelector("#translate28").innerHTML = 'Kjolberg 学校是 Sellebakk 的一所国有学校。 <br>2012 - 2019';document.querySelector("#translate29").innerHTML = '博尔赫中学';
            document.querySelector("#translate30").innerHTML = 'Borge 中学是 Sellebakk 北部的一所学校。 <br>2019 - 2022';document.querySelector("#translate31").innerHTML = '格莱门高中';
            document.querySelector("#translate32").innerHTML = `Glemmen 是我目前就读的学校，我们正在学习编程和媒体制作。 <br>Glemmen 位于腓特烈斯塔市的郊区。 <br>2022 - 2024`;
        }
        else if (language === "sp")
        {
            document.querySelector("#translate25").innerHTML = 'Hogar seguro jardín de infancia';
            
            document.querySelector("#translate26").innerHTML = 'Hogar seguro es un jardín de infancia cristiano privado en Halden. <br>2009 - 2012';
            
            document.querySelector("#translate27").innerHTML = 'Escuela Kjolberg';
            
            document.querySelector("#translate28").innerHTML = 'Kjolberg School es una escuela en Sellebakk propiedad del estado. <br>2012 - 2019';
            
            document.querySelector("#translate29").innerHTML = 'Escuela secundaria de Borge';
            
            document.querySelector("#translate30").innerHTML = 'La secundaria Borge es una escuela en el norte de Sellebakk. <br>2019 - 2022';
            
            document.querySelector("#translate31").innerHTML = 'Glemmen High School';
            
            document.querySelector("#translate32").innerHTML =
                `Glemmen es la escuela en la que estoy actualmente y estamos aprendiendo sobre programación y producción de medios. <br>Glemmen se encuentra en las afueras de la ciudad de Fredrikstad. <br>2022 - 2024`;
        }
    }

    // translatest the hobbies page
    {
        if (language === "en")
        // If the language is english, this will happen ->
    
        {
            document.querySelector("#translate33").innerHTML =
            `
                <h2 style="font-family: Kdam Thmor Pro;">Gaming</h2>
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
                </div>
            `;
    
    
            document.querySelector("#translate34").innerHTML =
            `   
                <button id="Btn" onclick="Btn(1)">
                        <h1>Carx Drift Racing Online <img src="./Images/Carx.jpg"  >
                        </h1>
                    </button>
    
                    <div id="Drop" class="invis">
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
                    <button id="Btn" onclick="Btn(2)">
                        <h1>Forza Forizon 5 <span style="opacity: 0;">Lorem Ip</span><img src="./Images/FH5.jpg" width="75"
                                style="border-radius: 20px;"></h1>
                    </button>
    
                    <div id="Drop2" class="invis">
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
                    <button id="Btn" onclick="Btn(3)">
                        <h1>Bonelab <span style="opacity: 0;">Lorem Ipsum D-</span><img src="./Images/Bonelab.jpg"
                                 ></h1>
                    </button>
    
                    <div id="Drop3" class="invis">
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
                    <button id="Btn" onclick="Btn(4)">
                        <h1>Skyrim VR <span style="opacity: 0;">Lorem Ipsum-</span><img src="./Images/Skyrim.png"
                                 ></h1>
                    </button>
    
                    <div id="Drop4" class="invis">
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
                    <button id="Btn" onclick="Btn(5)">
                        <h1>iRacing <span style="opacity: 0;">Lorem Ipsum Dol</span><img src="./Images/iracing.jpg"
                                 ></h1>
                    </button>
    
                    <div id="Drop5" class="invis">
    
                        <h5>
                        Iracing is not like the other car games on this list because it’s a professional simulator. <br> 
                        Instead of focusing on having the most fun game, they focus on realism. <br> 
                        When you race in the game, it’s important to take your time practicing on the track and car. <br> 
                        It’s important because you level up by winning but also by driving carefully. <br> 
                        I give the game an 8 out of 10. It’s surprisingly more fun than one would think.
                        </h5>
                    </div>
                `;
    
    
            document.querySelector("#translate35").innerHTML =
            `     
            <div style="font-family: Rubik;">
                <!-- Paragraph -->
                <h4>
                    I've become quite fond of cars lately. <br>
                    I mostly like old American cars and Japanese JDM cars, <br>
                    but there are also other cars that I wouldn't say no to.
                </h4>
                <br>
                <h3>Below is a list of my top 3 cars Unorganized by rating</h3>
            </div>
            `;
    
    
            document.querySelector("#translate36").innerHTML =
                `<button id="Btn" onclick="Btn(6)">
            <h1>Toyota Supra Mk3 <span style="opacity: 0;">LoremI--</span><img src="./Images/Supra mk3.jpg"
                 ></h1>
                    </button>
                    <div id="Drop6" class="invis">
                        <h5>
                            When talking about the Toyota Supra, people often think of the Mk4, <br>
                            but I think the Mk3 model looks much better, it's not too bad either, <br>
                            some of the models actually came from the factory with twin turbos and 230Hp. <br>
                            The car was introduced in 1986 and continued production until '93.
                        </h5>
                    </div>
                    <br>
                    <!-- Dropdown paragraph with information about charger -->
                    <button id="Btn" onclick="Btn(7)">
                        <h1>Dodge Charger '69 <span style="opacity: 0;">Lori|mi-</span><img src="./Images/charger.jpg"
                             ></h1>
                        </button>
                        
                        <div id="Drop7" class="invis">
                            
                            <h5>
                                There's not much to say about this car, I like it because it's good for drifting in Carx. <br>
                                It also looks nice, it's basically the same car that was used in Fast and Furious.<br>
                                Some of the models came from the factory with a strong V8 with 425Hp. <br>
                            </h5>
                        </div>
                        <br>
                        <!-- Dropdown paragraf med Informasjon om NSX -->
                        <button id="Btn" onclick="Btn(8)">
                            <h1>Honda NSX R <span style="opacity: 0;">Lori||||||||||m-</span><img
                                src="./Images/NSX.png"  ></h1>
                    </button>
                    
                    <div id="Drop8" class="invis">
                        
                        <h5>
                        The Honda NSX Type R is a car I discovered not too long ago in Forza Horizon and since then I’ve been in love. <br> 
                        Especially the 1992 model is the coolest in my opinion. It came from the factory with 276Hp from a powerful V6 engine. <br> 
                        The Honda had the engine in the middle of the car and had rear-wheel drive, which made it difficult to control if you didn’t know how.
                        </h5>
                    </div>
                `;
    
    
            document.querySelector("#translate37").innerHTML =
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
            `;
    
    
            document.querySelector("#translate38").innerHTML =
                `
                    <button id="Btn" onclick="Btn(9)">
                    <h1>Alpine <span style="opacity: 0;">LoremIpsumDolorSit</span><img
                            src="./Images/Alpine_logo.jpg"  ></h1>
                </button>
    
    
                <div id="Drop9" class="invis">
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
                <button id="Btn" onclick="Btn(10)">
                    <h1>Pierre Gasly <span style="opacity: 0;">LoremIpsumDol</span><img
                            src="./Images/Gasly.png"  ></h1>
                </button>
    
    
                <div id="Drop10" class="invis">
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
            `;
    
            document.querySelector("#translate39").innerHTML = `Movies`;
    
            document.querySelector("#translate40").innerHTML = `TV Series`;
    
            document.querySelector("#translate71").innerHTML = `Here are some other sites I have made`;
        }
        else if (language === "no")
        {
            document.querySelector("#translate33").innerHTML =
            `
                <h2 style="font-family: Kdam Thmor Pro;">Gaming</h2>
                <div style="font-family: Rubik;">
                    <!-- Paragraf -->
                    <h4>
                        Jeg er en såkalt variety gamer, som betyr at jeg spiller alt fra <br><a
                            href="https://www.paradoxinteractive.com/games/hearts-of-iron-iv/about" target="_blank">Hearts of Iron</a>
                        til <a href="https://carx-online.com" target="_blank">Carx</a>, fra Krig til drifting, men jeg
                        spiller mest bilspill nå for tiden. <br>
                        Hvis du vil se alle spillene mine, finner du dpå <a
                            href="https://steamcommunity.com/profiles/76561199016709901/" target="_blank">steam kontoen
                            min her</a>
                    </h4>
                    <br>
                    <h3>Under har du en liste med mine topp 5 spill Uorganisert med rating</h3>
                </div>
            `;
    
    
            document.querySelector("#translate34").innerHTML =
                `        
                <button id="Btn" onclick="Btn(1)">
                        <h1>Carx Drift Racing Online <img src="./Images/Carx.jpg"  >
                        </h1>
                    </button>
    
                    <div id="Drop" class="invis">
    
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
                    <button id="Btn" onclick="Btn(2)">
                        <h1>Forza Forizon 5 <span style="opacity: 0;">Lorem Ip</span><img src="./Images/FH5.jpg" width="75"
                                style="border-radius: 20px;"></h1>
                    </button>
    
                    <div id="Drop2" class="invis">
    
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
                    <button id="Btn" onclick="Btn(3)">
                        <h1>Bonelab <span style="opacity: 0;">Lorem Ipsum D-</span><img src="./Images/Bonelab.jpg"
                                 ></h1>
                    </button>
    
                    <div id="Drop3" class="invis">
    
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
                    <button id="Btn" onclick="Btn(4)">
                        <h1>Skyrim VR <span style="opacity: 0;">Lorem Ipsum-</span><img src="./Images/Skyrim.png"
                                 ></h1>
                    </button>
    
                    <div id="Drop4" class="invis">
    
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
                    <button id="Btn" onclick="Btn(5)">
                        <h1>iRacing <span style="opacity: 0;">Lorem Ipsum Dol</span><img src="./Images/iracing.jpg"
                                 ></h1>
                    </button>
    
                    <div id="Drop5" class="invis">
    
                        <h5>
                            Iracing er ikke som de andre bilspillene på denne listen, fordi dette er en proff simulator.
                            <br>
                            Istedenfor å fokusere på å ha det morsomste spillet, fokuserer de heller på realisme. <br>
                            Når du skal race i spillet er det viktig å ta sin tid på å øve på banen og bilen, <br>
                            det er viktig fordi du kommer opp i level for å vinne men også å kjøre forsiktig. <br>
                            Jeg gir spillet en 8 av 10. Det overaskende morsommere enn en skulle tro.
                        </h5>
                    </div>
                `;
    
    
            document.querySelector("#translate35").innerHTML =
            `  
                <div style="font-family: Rubik;">
                    <!-- Paragraf -->
                    <h4>
                        Jeg er blitt ganske glad i biler i det siste. <br>
                        jeg liker mest gamle ameriksanske biler og japanske jdm biler, <br>
                        men det er også andre biler som jeg ikke hadde sagt nei til.
                    </h4>
                    <br>
                    <h3>Under har du en liste med mine topp 3 biler uorganisert med rating</h3>
                </div>
            `;
    
    
            document.querySelector("#translate36").innerHTML =
                `<button id="Btn" onclick="Btn(6)">
                        <h1>Toyota Supra Mk3 <span style="opacity: 0;">LoremI--</span><img src="./Images/Supra mk3.jpg"
                             ></h1>
                </button>
    
                <div id="Drop6" class="invis">
                    
                    <h5>
                        Når man snakker om Toyota Supra tenker man ofte på Mk4, <br>
                        men jeg synes mk3 modellen ser mye bedre ut, den er ikke så verst heller, <br>
                        noen av modellene kom faktisk fra fabrikken med twin turbos og 230Hk. <br>
                        Bilen ble introdusert i 1986 og fortsatte produksjon fram til '93.
                    </h5>
                </div>
                <br>
                <!-- Dropdown paragraf med Informasjon om charger -->
                <button id="Btn" onclick="Btn(7)">
                    <h1>Dodge Charger '69 <span style="opacity: 0;">Lori|mi-</span><img src="./Images/charger.jpg"
                         ></h1>
                    </button>
                    
                    <div id="Drop7" class="invis">
                        
                        <h5>
                            Det er ikke så mye å si om denne bilen, jeg liker den fordi den er god å drifte i Carx. <br>
                            Den ser jo også fin ut da, det er basically samme bilen som ble brukt i fast and furius.<br>
                            Noen av modellene kom fra fabrikken med en sterk V8 med 425Hk. <br>
                        </h5>
                    </div>
                    <br>
                    <!-- Dropdown paragraf med Informasjon om NSX -->
                    <button id="Btn" onclick="Btn(8)">
                        <h1>Honda NSX R <span style="opacity: 0;">Lori||||||||||m-</span><img
                            src="./Images/NSX.png"  ></h1>
                </button>
                
                <div id="Drop8" class="invis">
                    
                    <h5>
                        Honda NSX type R er en bil jeg fant for ikke så lenge siden i Forza Horizon og siden da har jeg vært forelsket. <br>
                        Spesielt 1992 modellen er den kuleste i min mening. Den kom fra fabrikken med 276Hk som kom fra en krafig V6 motor. <br>
                        Hondaen hadde motoren midt i bilen og hadde bakhjulsdrift, som gjorde den vanskelig å kontrollere hvis du ikke visste hvordan.
                    </h5>
                </div>
            `;
    
    
            document.querySelector("#translate37").innerHTML =
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
            `;
    
    
            document.querySelector("#translate38").innerHTML =
                `
                    <button id="Btn" onclick="Btn(9)">
                    <h1>Alpine <span style="opacity: 0;">LoremIpsumDolorSit</span><img
                            src="./Images/Alpine_logo.jpg"  ></h1>
                </button>
    
    
                <div id="Drop9" class="invis">
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
                <button id="Btn" onclick="Btn(10)">
                    <h1>Pierre Gasly <span style="opacity: 0;">LoremIpsumDol</span><img
                            src="./Images/Gasly.png"  ></h1>
                </button>
    
    
                <div id="Drop10" class="invis">
                    <h5>
                        Pierre Gasly er en fransk sjåfør får Alpine F1 team og min favoritt. <br>
                        Pierre begynte Formel 1 karieren sin hos Red Bull etter at Daniel Ricardo flyttet til Renault i 2019. <br>
                        Men alt gikk ikke helt som planlagt for franskmannen etter som han ikke var sikker nokk på kjøringen sin, <br>
                        Han ble da flyttet til datterlaget til Red Bull: "Alpha Tauri" hvor han skulle kjøre med Yuki Tsunoda. <br>
                        Men en vakker dag i Monza, Italia stakk han av med første plass i en av de dårligste bilene.<br>
                        Historien om Monza 2020 er legendarisk og det ga han nokk cred til å to år senere flytte til Alpine. <br> <br>
                        Så langt denne sessongen ligger Pierre likt sammen med lagkameraten Esteban Ocon på 10 og 11. <br>
                        Men jeg har trua på at franskmannen i år og håper at han skårer store poeng.
                    </h5>
                </div>
            `;
    
            document.querySelector("#translate39").innerHTML = `Filmer`;
    
            document.querySelector("#translate40").innerHTML = `TV Serier`;
    
            document.querySelector("#translate71").innerHTML = `Her er noen andre sider jeg har laget`;
        }
        else if (language === "de")
        {
            document.querySelector("#translate33").innerHTML =
             `
                 <h2 style="font-family: Kdam Thmor Pro;">Gaming</h2>
                         <div style="font-family: Rubik;">
                             <!-- Paragraf -->
                             <h4>
                                 Ich bin ein Vielseitigkeitsspieler, was bedeutet, dass ich alles von <br><a spiele
                                     href="https://www.paradoxinteractive.com/games/hearts-of-iron-iv/about" target="_blank">Hearts of Iron</a>
                                 zu <a href="https://carx-online.com" target="_blank">Carx</a>, vom Krieg bis zum Driften, aber meistens ich
                                 obwohl es in letzter Zeit hauptsächlich Autos waren. <br>
                                 Wenn Sie alle meine Spiele sehen möchten, können Sie zu <a gehen
                                     href="https://steamcommunity.com/profiles/76561199016709901/" target="_blank">mein Steam-Konto </a>
                             </h4>
                         <br>
                     <h3>Unten finden Sie eine Liste meiner Top-5-Spiele in einer unorganisierten Liste.</h3>
                 </div>
             `;
    
    
             document.querySelector("#translate34").innerHTML =
             `
                 <button id="Btn" onclick="Btn(1)">
                         <h1>Carx Drift Racing Online <img src="./Images/Carx.jpg"  >
                         </h1>
                     </button>
    
                     <div id="Drop" class="invis">
                         <h5>
                         Carx ist ein Online-Spiel, in dem Sie viele verschiedene Autos driften lassen können. <br>
                         Es gibt nicht viel Konkurrenz oder ein bestimmtes Ziel, aber es macht trotzdem sehr viel Spaß. <br>
                         Das Spiel hat keine Geschichte, aber sie ist nicht notwendig, weil es kein Spiel ist, das sie erfordert. <br>
                         Ich gebe dem Spiel 6 von 10 Punkten, aber es ist im Moment immer noch mein Lieblingsspiel, <br>
                         Das liegt an seiner Einfachheit und daran, wie viel Spaß es macht, herumzufahren.
                         </h5>
                     </div>
    
                     <br>
    
                     <!-- Dropdown-Absatz mit Informationen zu Forza -->
                     <button id="Btn" onclick="Btn(2)">
                         <h1>Forza Forizon 5 <span style="opacity: 0;">Lorem Ip</span><img src="./Images/FH5.jpg" width="75"
                                 style="border-radius: 20px;"></h1>
                     </button>
    
                     <div id="Drop2" class="invis">
                         <h5>
                         Forza ist ein weiteres Online-Spiel, aber es hat eine große offene Welt anstelle vieler kleiner. <br>
                         Der Grund, warum sowohl Forza als auch Carx hier sind, ist, dass Forza ein Arcade-Racer und kein Simcade ist. <br>
                         Forza ist aufgrund der Vielfalt so gut, dass man beispielsweise eine F-150 in eine Driftmaschine verwandeln kann. <br>
                         Das Spiel hat eine ziemlich schlechte Geschichte, weil man als weltberühmter Rennstar beginnt. <br>
                         Alle Charaktere, Sie eingeschlossen, sind fröhliche Idioten, die nicht verstehen, worauf es ankommt. <br>
                         Ich gebe dem Spiel für die verschiedenen Autos eine 7 von 10 Punkten.
                         </h5>
                     </div>
    
                     <br>
    
                     <!-- Dropdown-Absatz mit Informationen zu Bonelab -->
                     <button id="Btn" onclick="Btn(3)">
                         <h1>Bonelab <span style="opacity: 0;">Lorem Ipsum D-</span><img src="./Images/Bonelab.jpg"
                                  ></h1>
                     </button>
    
                     <div id="Drop3" class="invis">
                         <h5>
                         Bonelab ist ein besonderes VR-Spiel, weil es sich so stark auf die Physik konzentriert. <br>
                         Damit meine ich, dass die ganze Welt interaktiv ist und für Dinge wie Kämpfen genutzt werden kann. <br>
                         Der Grund dafür, dass es nicht ganz oben ist, liegt darin, dass es sehr ruckelig und fehlerhaft wird. <br>
                         Das Spiel hat eine ordentliche Story, der Fokus liegt jedoch auf der Physik und dem Spielspaß. <br>
                         Ich gebe dem Spiel 7 von 10 Punkten für die fantastische Physik.
                         </h5>
                     </div>
    
                     <br>
    
                     <!-- Dropdown-Absatz mit Informationen zu Skyrim VR -->
                     <button id="Btn" onclick="Btn(4)">
                         <h1>Skyrim VR <span style="opacity: 0;">Lorem Ipsum-</span><img src="./Images/Skyrim.png"
                                  ></h1>
                     </button>
    
                     <div id="Drop4" class="invis">
                         <h5>
                         Skyrim VR ist in seiner ursprünglichen Form ein sehr schlechtes Spiel, aber Mods wirken Wunder. <br>
                         Skyrim VR wurde durch Modding geprägt und das ist gut so, denn die Community hat viel Power. <br>
                         Aber es ist auch dumm, weil Bethesda sich nicht mehr um ihr Spiel kümmert. <br>
                         Die Geschichte in Skyrim ist sehr gut und der einzige Grund, warum die Leute es immer noch modifizieren. <br>
                         Ich gebe dem Spiel 7 von 10 Punkten für all die schlechten Mods da draußen.
                         </h5>
                     </div>
                     <br>
    
                     <!-- Dropdown-Absatz mit Informationen zu Hoi4 -->
                     <button id="Btn" onclick="Btn(5)">
                         <h1>iRacing <span style="opacity: 0;">Lorem Ipsum Dol</span><img src="./Images/iracing.jpg"
                                  ></h1>
                     </button>
    
                     <div id="Drop5" class="invis">
    
                         <h5>
                         Iracing ist nicht wie die anderen Autospiele auf dieser Liste, weil es ein professioneller Simulator ist. <br>
                         Anstatt sich darauf zu konzentrieren, das unterhaltsamste Spiel zu haben, legen sie Wert auf Realismus. <br>
                         Wenn Sie im Spiel Rennen fahren, ist es wichtig, dass Sie sich Zeit zum Üben auf der Strecke und im Auto nehmen. <br>
                         Das ist wichtig, denn man steigt durch Siege, aber auch durch vorsichtiges Fahren auf. <br>
                         Ich gebe dem Spiel 8 von 10 Punkten. Es macht überraschenderweise mehr Spaß, als man denken würde.
                         </h5>
                     </div>
                 `;
    
    
             document.querySelector("#translate35").innerHTML =
             `
             <div style="font-family: Rubik;">
                 <!-- Absatz -->
                 <h4>
                     Ich habe in letzter Zeit eine große Vorliebe für Autos entwickelt. <br>
                     Ich mag vor allem alte amerikanische Autos und japanische JDM-Autos, <br>
                     Aber es gibt auch andere Autos, zu denen ich nicht nein sagen würde.
                 </h4>
                 <br>
                 <h3>Unten finden Sie eine Liste meiner Top-3-Autos, ungeordnet nach Bewertung</h3>
             </div>
             `;
    
    
             document.querySelector("#translate36").innerHTML =
                 `<button id="Btn" onclick="Btn(6)">
             <h1>Toyota Supra Mk3 <span style="opacity: 0;">LoremI--</span><img src="./Images/Supra mk3.jpg"
                  ></h1>
                     </button>
                     <div id="Drop6" class="invis">
                         <h5>
                             Wenn man vom Toyota Supra spricht, denkt man oft an den Mk4, <br>
                             Aber ich denke, das Mk3-Modell sieht viel besser aus, es ist auch nicht schlecht, <br>
                             Einige der Modelle kamen tatsächlich ab Werk mit Twin-Turbos und 230 PS. <br>
                             Das Auto wurde 1986 eingeführt und bis 1993 weiter produziert.
                         </h5>
                     </div>
                     <br>
                     <!-- Dropdown-Absatz mit Informationen zum Ladegerät -->
                     <button id="Btn" onclick="Btn(7)">
                         <h1>Dodge Charger '69 <span style="opacity: 0;">Lori|mi-</span><img src="./Images/charger.jpg"
                              ></h1>
                         </button>
                        
                         <div id="Drop7" class="invis">
                            
                             <h5>
                                 Zu diesem Auto gibt es nicht viel zu sagen, ich mag es, weil es sich gut zum Driften im Carx eignet. <br>
                                 Es sieht auch gut aus, es ist im Grunde das gleiche Auto, das in Fast and Furious verwendet wurde.<br>
                                 Einige der Modelle waren ab Werk mit einem starken V8 mit 425 PS ausgestattet. <br>
                             </h5>
                         </div>
                         <br>
                         <!-- Dropdown-Absatz mit NSX-Informationen -->
                         <button id="Btn" onclick="Btn(8)">
                             <h1>Honda NSX R <span style="opacity: 0;">Lori||||||||||m-</span><img
                                 src="./Images/NSX.png"  ></h1>
                     </button>
                    
                     <div id="Drop8" class="invis">
                        
                         <h5>
                         Der Honda NSX Type R ist ein Auto, das ich vor nicht allzu langer Zeit in Forza Horizon entdeckt habe und seitdem bin ich verliebt. <br>
                         Besonders das Modell von 1992 ist meiner Meinung nach das coolste. Er kam ab Werk mit 276 PS und einem leistungsstarken V6-Motor. <br>
                         Der Honda hatte den Motor in der Mitte des Wagens und verfügte über Hinterradantrieb, was die Kontrolle erschwerte, wenn man nicht wusste, wie.
                         </h5>
                     </div>
                 `;
    
                 document.querySelector("#translate37").innerHTML =
                 `
             <!-- Formel 1 unterwegs mit Kdam Thmor Pro -->
             <h2 style="font-family: Kdam Thmor Pro;">Formel 1</h2>
             <div style="font-family: Rubik;">
             <!-- Absatz -->
             <h4>Angesichts meiner jüngsten Freude an Autos war die Formel 1 unumgänglich. <br>
             Ich begann mit dem Gedanken, dass die Formel 1 dumm sei, weil es keine echten Autos seien, <br>
             All diese Gedanken verschwanden, nachdem ich „Drive to Survive“ auf Netflix gesehen hatte.</h4>
             <br>
             <h3>Unten finden Sie einige Informationen über meinen Lieblingsfahrer und sein Team</h3>
             </div>
             `;
    
    
             document.querySelector("#translate38").innerHTML =
                 `
                     <button id="Btn" onclick="Btn(9)">
                     <h1>Alpine <span style="opacity: 0;">LoremIpsumDolorSit</span><img
                             src="./Images/Alpine_logo.jpg"  ></h1>
                 </button>
    
    
                 <div id="Drop9" class="invis">
                     <h5>
                         Alpine ist ein Team, das im Jahr 2022 mit dem Kampf gegen Maclaren gut abgeschnitten hat, <br>
                         Aber dieses Jahr ist Maclaren zurückgefallen und hat mit Abstand das schlechteste Auto. <br>
                         Während Alpine ein Auto hat, das das Potenzial hat, erneut den vierten Platz zu belegen. <br><br>
                         Letztes Jahr hatten Alpine und Maclaren einen Streit darüber, wer den Nachwuchsfahrer Oscar Piastri bekommen sollte, <br>
                         Es endete damit, dass Maclaren ihn holte, aber Alpine bekam jemanden, der noch besser ist und mein Lieblingsfahrer. <br>
                         Pierre Gasly <i class=“fa-solid fa-arrow-down“></i>
                     </h5>
                 </div>
                 <br>
                 <!-- Dropdown-Absatz mit Informationen zu Gasly -->
                 <button id="Btn" onclick="Btn(10)">
                     <h1>Pierre Gasly <span style="opacity: 0;">LoremIpsumDol</span><img
                             src="./Images/Gasly.png"  ></h1>
                 </button>
    
    
                 <div id="Drop10" class="invis">
                     <h5>
                         Pierre Gasly ist ein französischer Fahrer des Alpine F1-Teams und mein Favorit. <br>
                         Pierre begann seine Formel-1-Karriere bei Red Bull, nachdem Daniel Ricardo 2019 zu Renault wechselte. <br>
                         Doch für den Franzosen lief nicht alles wie geplant, da ihm das Fahrkönnen fehlte, <br>
                         Anschließend wechselte er zum Tochterteam von Red Bull: „Alpha Tauri“, wo er mit Yuki Tsunoda fuhr. <br>
                         Aber eines schönen Tages in Monza, Italien, belegte er in einem der schlechtesten Autos den ersten Platz.<br>
                         Die Geschichte von Monza 2020 ist legendär und sie verschaffte ihm genug Anerkennung, um zwei Jahre später zu Alpine zu wechseln. <br> <br>
                         Bisher liegt Pierre in dieser Saison mit seinem Teamkollegen Esteban Ocon auf den Plätzen 10 und 11 gleichauf. <br>
                         Aber ich habe dieses Jahr Vertrauen in den Franzosen und hoffe, dass er große Punkte holt.
                     </h5>
                 </div>
             `;
    
             document.querySelector("#translate39").innerHTML = `Filme`;
    
             document.querySelector("#translate40").innerHTML = `TV Series`;
    
             document.querySelector("#translate71").innerHTML = `Hier sind einige andere Websites, die ich erstellt habe`;
        }
        else if (language === "ch")
        {
            document.querySelector("#translate33").innerHTML =
         `
             <h2 style="font-family: Kdam Thmor Pro;">游戏</h2>
                     <div style="font-family: Rubik;">
                         <!-- 段落 -->
                         <h4>
                             我是一个非常多变的玩家，这意味着我玩 <br><a
                                 href="https://www.paradoxinteractive.com/games/hearts-of-iron-iv/about" target="_blank">钢铁雄心</a>
                             到 <a href="https://carx-online.com" target="_blank">Carx</a>，从战争到漂流，但我主要
                             尽管最近主要是汽车。 <br>
                             如果你想看我所有的游戏，你可以去 <a
                                 href="https://steamcommunity.com/profiles/76561199016709901/" target="_blank">我的 steam 帐户</a>
                         </h4>
                     <br>
                 <h3>下面，你有一个未组织列表中我排名前 5 的游戏列表。</h3>
             </div>
         `;


         document.querySelector("#translate34").innerHTML =
            `<button id="Btn" onclick="Btn(1)">
            <h1>Carx Drift Racing Online <img src="./Images/Carx.jpg"  >
            </h1></button><div id="Drop" class="invis"><h5>
            Carx 是一款在线游戏，您可以在其中漂移许多不同的汽车。 <br>
            没有太多的竞争或任何特定的目标，但它仍然非常有趣。 <br>
            游戏没有故事，但这不是必需的，因为它不是需要它的游戏。 <br>
            我给这款游戏打 6 分（满分 10 分），但它现在仍然是我最喜欢的游戏，<br>
            这是因为它的简单性以及四处巡游的乐趣。</h5></div><br>
            <!-- 极限竞速中的信息下拉段落 -->
            <button id="Btn" onclick="Btn(2)">
            <h1>Forza Forizon 5 <img src="./Images/FH5.jpg" width="75"
            style="border-radius: 20px;"></h1>
            </button><div id="Drop2" class="invis"><h5>
            Forza 是另一种在线游戏，但它有一个大的开放世界，而不是许多小的世界。 <br>
            Forza 和 Carx 都在这里的原因是因为 Forza 是街机赛车而不是 simcade。 <br>
            Forza 之所以如此出色，是因为其多样性，例如，您可以将 F-150 变成漂移机。 <br>
            该游戏的故事很糟糕，因为您是世界著名的赛车明星。 <br>
            包括你在内的所有角色都是快乐的白痴，他们不明白什么是重要的。 <br>
            对于所有不同的汽车，我给这款游戏打 7 分（满分 10 分）。</h5></div><br>
            <!-- Dropdown paragraf med Informasjon om Bonelab -->
            <button id="Btn" onclick="Btn(3)">
            <h1>Bonelab <img src="./Images/Bonelab.jpg"
             ></h1>
            </button><div id="Drop3" class="invis"><h5>
            Bonelab 是一款特殊的 VR 游戏，因为它非常注重物理。 <br>
            我的意思是整个世界都是互动的，可以用于战斗等事情。 <br>
            它不在顶部的原因是因为它变得非常笨拙和错误。 <br>
            该游戏有一个不错的故事，但重点是物理和游戏的乐趣。 <br>
            对于出色的物理效果，我给这款游戏打 7 分（满分 10 分）。</h5></div><br>
            <!-- Skyrim VR 中的信息下拉段落 -->
            <button id="Btn" onclick="Btn(4)">
            <h1>Skyrim VR <img src="./Images/Skyrim.png"
             ></h1>
            </button><div id="Drop4" class="invis"><h5>
            Skyrim VR 的原始形式是一款非常糟糕的游戏，但 mods 创造了奇迹。 <br>
            Skyrim VR 已经通过模组塑造，这很好，因为社区有很大的力量。 <br>
            但这也很愚蠢，因为贝塞斯达不再关心他们的游戏了。 <br>
            Skyrim 中的故事非常好，这也是人们仍然修改它的唯一原因。 <br>
            我给这款游戏打了 7 分（满分 10 分），因为那里的所有变态模组都是如此。</h5></div><br>
            <!-- 下拉段落 med Informasjon om Hoi4 -->
            <button id="Btn" onclick="Btn(5)">
            <h1>iRacing <img src="./Images/iracing.jpg"
             ></h1>
            </button><div id="Drop5" class="invis"><h5>
            Iracing 与此列表中的其他汽车游戏不同，因为它是专业模拟器。 <br>
            他们没有专注于拥有最有趣的游戏，而是专注于现实主义。 <br>
            当您参加比赛时，花时间在赛道和赛车上练习很重要。 <br>
            这很重要，因为您可以通过获胜来升级，也可以通过谨慎驾驶来升级。 <br>我给这款游戏打 8 分（满分 10 分）。它比人们想象的要有趣得多。</h5></div> `;

            document.querySelector("#translate35").innerHTML =
                `<div style="font-family: Rubik;">
                <!-- 段落 --><h4>
                我最近变得非常喜欢汽车。 <br>
                我最喜欢美国老车和日本JDM车，<br>
                但也有其他汽车我不会拒绝。</h4><br>
                <h3>以下是我排名前三的汽车列表，未按评级排序</h3>
                </div>`;document.querySelector("#translate36").innerHTML =
                `<button id="Btn" onclick="Btn(6)">
                <h1>丰田 Supra Mk3 <img src="./Images/Supra mk3.jpg" width="75"
                style="border-radius: 20px;"></h1>
                </button><div id="Drop6" class="invis">
                <h5>谈到丰田 Supra，人们通常会想到 Mk4，<br>
                但我认为 Mk3 模型看起来好多了，也不错，<br>
                一些模型实际上来自带有双涡轮增压器和 230Hp 的工厂。 <br>
                该车于 1986 年推出，一直生产到 93 年。</h5></div><br>
                <!-- 带有充电器信息的下拉段落 -->
                <button id="Btn" onclick="Btn(7)">
                <h1>Dodge Charger '69 <img src="./Images/charger.jpg"
                 ></h1>
                </button><div id="Drop7" class="invis"><h5>
                这辆车没什么好说的，我喜欢它是因为它在Carx漂移很好。 <br>
                它看起来也不错，它基本上是速度与激情中使用的同一辆车。<br>
                一些型号出厂时配备强劲的 V8 发动机，功率为 425 马力。 <br></h5></div><br>
                <!-- 下拉段落 med Informasjon om NSX -->
                <button id="Btn" onclick="Btn(8)">
                <h1>本田 NSX R <img
                src="./Images/NSX.png"  ></h1>
                </button><div id="Drop8" class="invis"><h5>
                本田 NSX Type R 是我不久前在 Forza Horizon 中发现的一辆汽车，从那时起我就爱上了它。 <br>
                尤其是1992款在我看来是最酷的。 它来自工厂，功率为 276 马力，来自强大的 V6 发动机。 <br>
                本田的发动机位于汽车中间并采用后轮驱动，如果您不知道如何操作，则很难控制。
                </h5></div>`;document.querySelector("#translate37").innerHTML = `<!-- Formula 1 Heading with Kdam Thmor Pro -->
                <h2 style="font-family: Kdam Thmor Pro;">一级方程式赛车</h2>
                <div style="font-family: Rubik;">
                <!-- 段落 -->
                <h4>我最近对汽车很感兴趣，F1 是无法避免的。 <br>
                一开始我认为 F1 很愚蠢，因为它们不是真正的汽车，<br>
                在 Netflix 上观看 Drive to Survive 后，所有这些想法都消失了。</h4><br>
                <h3>以下是我最喜欢的车手和他的团队的一些信息</h3>
                </div>`; document.querySelector("#translate38").innerHTML = `<button id="Btn" onclick="Btn(9)">
                <h1>Alpine <img
                src="./Images/Alpine_logo.jpg"  ></h1>
                </button><div id="Drop9" class="invis"><h5>
                Alpine 是一支在 2022 年与 Maclaren 的比赛中表现出色的球队，<br>
                但今年 Maclaren 已经下滑，拥有迄今为止最差的汽车。 <br>
                而Alpine有一辆有潜力再次获得第四名的车。 <br><br>
                去年，Alpine 和 Maclaren 就谁应该拥有初级车手 Oscar Piastri 发生争执，<br>
                它以 Maclaren 得到他而告终，但 Alpine 得到了一个更好的人，也是我最喜欢的车手。 <br>
                皮埃尔·加斯利 <i class=“fa-solid fa-arrow-down”></i></h5></div><br>
                <!-- Dropdown paragraf med Informasjon om Gasly -->
                <button id="Btn" onclick="Btn(10)">
                <h1>Pierre Gasly <img
                src="./Images/Gasly.png"  ></h1>
                </button><div id="Drop10" class="invis"><h5>
                Pierre Gasly 是 Alpine F1 车队的法国车手，也是我的最爱。 <br>
                在丹尼尔里卡多于 2019 年转会雷诺后，皮埃尔在红牛开始了他的一级方程式职业生涯。<br>
                但是对于这位法国人来说，一切都没有按计划进行，因为他对自己的驾驶不够自信，<br>
                然后他被转移到红牛的女儿团队：“Alpha Tauri”，在那里他将与 Yuki Tsunoda 一起驾驶。 <br>
                但是在意大利蒙扎的一个美好的一天，他驾驶着一辆最差的车获得了第一名。<br>
                Monza 2020 的故事充满传奇色彩，这让他在两年后转会到 Alpine。 <br><br>
                本赛季到目前为止，皮埃尔与队友埃斯特万·奥康并列第 10 位和第 11 位。<br>
                但我今年对法国人有信心，希望他能拿下高分。
                </h5></div>`;document.querySelector("#translate39").innerHTML = `电影`;
                document.querySelector("#translate40").innerHTML = `电视剧`;
                document.querySelector("#translate71").innerHTML = `这是我制作的其他一些网站`;
        }
        else if (language === "sp")
        {
            document.querySelector("#translate33").innerHTML =
         `
             <h2 style="font-family: Kdam Thmor Pro;">Juegos</h2>
                     <div style="font-family: Rubik;">
                         <!-- Párrafo -->
                         <h4>
                             Soy un gran jugador de variedad, lo que significa que juego todo desde <br><a
                                 href="https://www.paradoxinteractive.com/games/hearts-of-iron-iv/about" target="_blank">Corazones de Hierro</a>
                             a <a href="https://carx-online.com" target="_blank">Carx</a>, de la guerra a la deriva, pero sobre todo
                             aunque últimamente han sido sobre todo coches. <br>
                             Si quieres ver todos mis juegos, puedes ir a <a
                                 href="https://steamcommunity.com/profiles/76561199016709901/" target="_blank">mi cuenta de Steam</a>
                         </h4>
                     <br>
                 <h3>Debajo, tienes una lista de mis 5 mejores juegos en una lista No organizada.</h3>
             </div>
         `;


         document.querySelector("#translate34").innerHTML =
            `
                <button id="Btn" onclick="Btn(1)">
                <h1>Carx Drift Racing en línea <img src="./Images/Carx.jpg" >
                </h1></button><div id="Drop" class="invis"><h5>
                Carx es un juego en línea en el que puedes derrapar muchos autos diferentes. <br>
                No hay mucha competencia ni ningún objetivo en particular, pero sigue siendo muy divertido. <br>
                El juego no tiene historia, pero no es necesario porque no es un juego que lo requiera. <br>
                Le doy al juego un 6 sobre 10, pero sigue siendo mi juego favorito en este momento, <br>
                esto se debe a su simplicidad y lo divertido que es navegar.</h5></div><br>

                <!-- Párrafo desplegable con información sobre la fuerza -->
                <button id="Btn" onclick="Btn(2)">
                <h1>Forza Forizon 5 <span style="opacity: 0;">Lorem Ip</span><img src="./Images/FH5.jpg" width="75"
                style="borde-radio: 20px;"></h1>
                </button><div id="Drop2" class="invis"><h5>
                Forza es otro juego en línea, pero tiene un gran mundo abierto en lugar de muchos pequeños. <br>
                La razón por la que tanto Forza como Carx están aquí es porque Forza es un juego de carreras arcade en lugar de Simcade. <br>
                Forza es tan bueno debido a la variedad, por ejemplo, puedes convertir un F-150 en una máquina de derrape. <br>
                El juego tiene una historia bastante mala porque comienzas como una estrella de carreras de fama mundial. <br>
                Todos los personajes, incluyéndote a ti, son idiotas felices que no entienden lo que es importante. <br>
                Le doy al juego un 7 sobre 10 para todos los autos diferentes.</h5></div><br>
                <!-- Párrafo desplegable con información de Bonelab -->
                <button id="Btn" onclick="Btn(3)">
                <h1>Bonelab <span style="opacity: 0;">Lorem Ipsum D-</span><img src="./Images/Bonelab.jpg"
                ></h1>
                </button><div id="Drop3" class="invis"><h5>
                Bonelab es un juego de realidad virtual especial porque se enfoca mucho en la física. <br>
                Lo que quiero decir con eso es que todo el mundo es interactivo y puede usarse para cosas como pelear. <br>
                La razón por la que no está en la parte superior es porque se vuelve muy irregular y con errores. <br>
                El juego tiene una historia decente, pero la atención se centra en la física y la diversión del juego. <br>
                Le doy al juego un 7 sobre 10 por la fantástica física.</h5></div><br>
                <!-- Párrafo desplegable con información sobre Skyrim VR -->
                <button id="Btn" onclick="Btn(4)">
                <h1>Skyrim VR <span style="opacity: 0;">Lorem Ipsum-</span><img src="./Images/Skyrim.png"
                ></h1>
                </button><div id="Drop4" class="invis"><h5>
                Skyrim VR es un juego muy malo en su forma original, pero las modificaciones hacen maravillas. <br>
                Skyrim VR ha sido moldeado por modding y eso es bueno porque la comunidad tiene mucho poder. <br>
                Pero también es estúpido porque a Bethesda ya no le importa su juego. <br>
                La historia en Skyrim es muy buena y la única razón por la que la gente todavía la modifica. <br>
                Le doy al juego un 7 sobre 10 por todas las modificaciones enfermizas que existen.</h5></div><br>
                <!-- Párrafo desplegable con información sobre Hoi4 -->
                <button id="Btn" onclick="Btn(5)">
                <h1>iRacing <span style="opacity: 0;">Lorem Ipsum Dol</span><img src="./Images/iracing.jpg"
                ></h1>
                </button><div id="Drop5" class="invis"><h5>
                Iracing no es como los otros juegos de coches de esta lista porque es un simulador profesional. <br>
                En lugar de centrarse en tener el juego más divertido, se centran en el realismo. <br>
                Cuando compites en el juego, es importante que te tomes tu tiempo para practicar en la pista y en el auto. <br>
                Es importante porque subes de nivel ganando pero también conduciendo con cuidado. <br>Le doy al juego un 8 sobre 10. Sorprendentemente, es más divertido de lo que uno pensaría.</h5></div> 
            `;
            document.querySelector("#translate35").innerHTML =
            `
                <div style="font-family: Rubik;">
                <!-- Párrafo --><h4>
                Últimamente me he vuelto bastante aficionado a los coches. <br>
                Me gustan sobre todo los coches americanos antiguos y los coches japoneses JDM, <br>
                pero también hay otros coches a los que no diría que no.</h4><br>
                <h3>A continuación se muestra una lista de mis 3 mejores autos sin organizar por clasificación</h3>
                </div>`;
                document.querySelector("#translate36").innerHTML =
                `<button id="Btn" onclick="Btn(6)">
                <h1>Toyota Supra Mk3 <span style="opacity: 0;">LoremI--</span><img src="./Images/Supra mk3.jpg" width="75"
                estilo="borde-radio: 20px;"></h1>
                </button><div id="Drop6" class="invis">
                <h5>Cuando se habla del Toyota Supra, la gente suele pensar en el Mk4, <br>
                pero creo que el modelo Mk3 se ve mucho mejor, tampoco esta tan mal, <br>
                algunos de los modelos en realidad venían de fábrica con doble turbo y 230Hp. <br>
                El automóvil se introdujo en 1986 y continuó la producción hasta el '93.</h5></div><br>
                <!-- Párrafo desplegable con información sobre el cargador -->
                <button id="Btn" onclick="Btn(7)">
                <h1>Dodge Charger '69 <span style="opacity: 0;">Lori|mi-</span><img src="./Images/charger.jpg"
                ></h1>
                </button><div id="Drop7" class="invis"><h5>
                No hay mucho que decir sobre este auto, me gusta porque es bueno para derrapar en Carx. <br>
                También se ve bien, es básicamente el mismo auto que se usó en Fast and Furious.<br>
                Algunos de los modelos venían de fábrica con un potente V8 de 425 CV. <br></h5></div><br>
                <!-- Párrafo desplegable con información sobre NSX -->
                <button id="Btn" onclick="Btn(8)">
                <h1>Honda NSX R <span style="opacity: 0;">Lori||||||||||m-</span><img
                src="./Images/NSX.png" ></h1>
                </button><div id="Drop8" class="invis"><h5>
                El Honda NSX Type R es un coche que descubrí no hace mucho en Forza Horizon y desde entonces estoy enamorado. <br>
                Especialmente el modelo de 1992 es el más genial en mi opinión. Venía de fábrica con 276Hp de un potente motor V6. <br>
                El Honda tenía el motor en el medio del auto y tenía tracción trasera, lo que dificultaba su control si no sabías cómo.
                </h5></div>`;
                document.querySelector("#translate37").innerHTML = `<!-- Título de Fórmula 1 con Kdam Thmor Pro -->
                <h2 style="font-family: Kdam Thmor Pro;">Fórmula 1</h2>
                <div style="font-family: Rubik;">
                <!-- Párrafo -->
                <h4>Con mi reciente alegría por los autos, la F1 era imposible de evitar. <br>
                Empecé con la idea de que la F1 era una estupidez porque no eran coches de verdad, <br>
                Todos esos pensamientos desaparecieron después de ver Drive to Survive en Netflix.</h4><br>
                <h3>A continuación hay información sobre mi piloto favorito y su equipo</h3>
                </div>`; 
                document.querySelector("#translate38").innerHTML = `<button id="Btn" onclick="Btn(9)">
                <h1>Alpina <span style="opacity: 0;">LoremIpsumDolorSit</span><img
                src="./Images/Alpine_logo.jpg" ></h1>
                </button><div id="Drop9" class="invis"><h5>
                Alpine es un equipo que lo hizo bien en 2022 con la lucha contra Maclaren, <br>
                Pero este año Maclaren se ha caído y tiene el peor auto con diferencia. <br>
                Mientras que Alpine tiene un coche que tiene potencial para volver a conseguir el cuarto puesto. <br><br>
                El año pasado, Alpine y Maclaren discutieron sobre quién debería tener al piloto junior Oscar Piastri, <br>
                Terminó con Maclaren consiguiéndolo, pero Alpine consiguió a alguien que es aún mejor y mi piloto favorito. <br>
                Pierre Gasly <i class=“fa-solid fa-arrow-down”></i></h5></div><br>
                <!-- Párrafo desplegable con información de Gasly -->
                <button id="Btn" onclick="Btn(10)">
                <h1>Pierre Gasly <span style="opacity: 0;">LoremIpsumDol</span><img
                src="./Images/Gasly.png" ></h1>
                </button><div id="Drop10" class="invis"><h5>
                Pierre Gasly es un piloto francés del equipo Alpine F1 y mi favorito. <br>
                Pierre comenzó su carrera en la Fórmula 1 en Red Bull después de que Daniel Ricardo se mudara a Renault en 2019. <br>
                Pero no todo salió según lo planeado para el francés ya que no tenía la confianza suficiente en su conducción, <br>
                Luego fue trasladado al equipo de la hija de Red Bull: "Alpha Tauri", donde conduciría con Yuki Tsunoda. <br>
                Pero un hermoso día en Monza, Italia, obtuvo el primer lugar en uno de los peores autos.<br>
                La historia de Monza 2020 es legendaria y le dio suficiente crédito para mudarse a Alpine dos años después. <br> <br>
                En lo que va de temporada, Pierre está empatado con su compañero de equipo Esteban Ocon en 10 y 11. <br>
                Pero tengo fe en el francés este año y espero que sume muchos puntos.
                </h5></div>
            `;
            document.querySelector("#translate39").innerHTML = `Películas`;
            document.querySelector("#translate40").innerHTML = `Serie de TV`;
            document.querySelector("#translate71").innerHTML = `Aquí hay algunos otros sitios que he creado`;
        }
    }

    }
    // If there is an error with the translation, this message will appear
    catch (error)
    {
        alert("Translation Failed")
        alert("Please leave a comment on my github to get this fixed")
    };
};

// Translation button animation activation
function translatebtn()
{
    if (innerWidth > 992)
    // The animation only happends if the width is higher than 992px
    {
        document.querySelector(".translatebtn").classList.toggle("active");
        showtranslate();
    }
    else 
    {
    // If the width is smaller than 992px a smaller animation with the button itself plays
        changelang('null');
        document.querySelector(".translatebtn").classList.toggle("active");
        setTimeout(() => { document.querySelector(".translatebtn").classList.toggle("active"); }, 750);
    }
}

translate();

// --------------------------------------------------------------------  ||
//                                                                       \\
//                 Templates for putting in more languages                ||
//                                                                       //
//  -------------------------------------------------------------------- ||

/* 1st translation
document.querySelector("#translate1").innerHTML = '<i class="fa fa-hammer"></i> Work Experience';
document.querySelector("#translate2").innerHTML = '<i class="fa fa-book"></i> Education ';
document.querySelector("#translate3").innerHTML = '<i class="fas fa-headset"></i> Hobbies ';
document.querySelector("#translate4").innerHTML = '<i class="fa-solid fa-gamepad"></i> Games and other sites '
*/

/* 2nd translation
document.querySelector("#translate8").innerHTML = 'Lukas Okkenhaug <br> Birthdate: July 15th 2006 16 years <br> House: 1653 Sellebakk';
document.querySelector("#translate9").innerHTML = 'Ocupation: Student <br> Program: It and MediaProduction <br> School: Glemmen VGS';
*/

/* 3rd translation
document.querySelector("#translate10").innerHTML = `Where: Ark<br> When:<span style="opacity: 0;">|</span> 2019<br> Pay:<span style="opacity: 0;">Ha </span> 116$<br> Work:<span style="opacity: 0;">A</span>Inventory`;
document.querySelector("#translate11").innerHTML =`Where: Selbak<br> When:<span style="opacity: 0;">|</span> 2022<br>Pay:<span style="opacity: 0;">Ha</span> 311$<br> Work:<span style="opacity: 0;">A</span>RoofWork`;
document.querySelector("#translate12").innerHTML ='Work <i class="fa-solid fa-user-nurse"></i>';document.querySelector("#translate13").innerHTML = 'Experience <i class="fa-solid fa-clipboard">';
document.querySelector("#translate14").innerHTML = 'Programming';document.querySelector("#translate15").innerHTML = 'Mediaproduction';document.querySelector("#translate16").innerHTML = 'Photo';
document.querySelector("#translate17").innerHTML = 'Design';document.querySelector("#translate18").innerHTML = 'Photo Editing';document.querySelector("#translate19").innerHTML = 'Video Editing';
document.querySelector("#translate20").innerHTML = 'Language';document.querySelector("#translate21").innerHTML = 'Norwegian';document.querySelector("#translate22").innerHTML = 'English';
document.querySelector("#translate23").innerHTML = 'German';
document.querySelector("#translate24").innerHTML = `I started my youtube channel when I was 11 years old in 2017, <br>Youtube has given lots of experience with editing vieos and Photoes with adobe Creative Cloud. <br>I have most of my experience in gaming videos, but I can also edit other stuff.`
*/

/* 4th translation
document.querySelector("#translate25").innerHTML = 'SafeHome Kindergarden';
document.querySelector("#translate26").innerHTML = 'Safehome is a private christian kindergarden in Halden. <br>2009 - 2012';document.querySelector("#translate27").innerHTML = 'Kjolberg School';
document.querySelector("#translate28").innerHTML = 'Kjolberg School is a school in Sellebakk owned by the state. <br>2012 - 2019';document.querySelector("#translate29").innerHTML = 'Borge secondary school';
document.querySelector("#translate30").innerHTML = 'Borge secondary is a school in northern Sellebakk. <br>2019 - 2022';document.querySelector("#translate31").innerHTML = 'Glemmen High School';
document.querySelector("#translate32").innerHTML = `Glemmen is the school I am currently in and we are learning about programming and mediaproduction. <br>Glemmen lays in the outskirts of Fredrikstad City. <br>2022 - 2024`;
*/

/* 5th translation
document.querySelector("#translate33").innerHTML =
        `
            <h2 style="font-family: Kdam Thmor Pro;">Gaming</h2>
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
            </div>
        `;


        document.querySelector("#translate34").innerHTML =
`<button id="Btn" onclick="Btn(1)">
<h1>Carx Drift Racing Online <img src="./Images/Carx.jpg"  >
</h1></button><div id="Drop" class="invis"><h5>
Carx is an online game where you can drift many different cars. <br> 
There isn’t much competition or any particular goal, but it’s still very fun. <br> 
The game has no story, but it’s not necessary because it’s not a game that requires it. <br> 
I give the game a 6 out of 10, but it’s still my favorite game right now, <br> 
this is because of its simplicity and just how fun it is to cruise around.</h5></div><br>
<!-- Dropdown paragraf med Informasjon om Forza -->
<button id="Btn" onclick="Btn(2)">
<h1>Forza Forizon 5 <span style="opacity: 0;">Lorem Ip</span><img src="./Images/FH5.jpg" width="75"
style="border-radius: 20px;"></h1>
</button><div id="Drop2" class="invis"><h5>
Forza is another online game, but it has one large open world instead of many small ones. <br> 
The reason both Forza and Carx are here is because Forza is an arcade racer instead of simcade. <br> 
Forza is so good because of the variety, for example, you can turn an F-150 into a drifting machine. <br> 
The game has a pretty bad story because you start as a world-famous racing star. <br> 
All the characters including yourself are happy idiots who don’t understand what’s important. <br> 
I give the game a 7 out of 10 for all the different cars.</h5></div><br>
<!-- Dropdown paragraf med Informasjon om Bonelab -->
<button id="Btn" onclick="Btn(3)">
<h1>Bonelab <span style="opacity: 0;">Lorem Ipsum D-</span><img src="./Images/Bonelab.jpg"
 ></h1>
</button><div id="Drop3" class="invis"><h5>
Bonelab is a special VR game because it focuses so heavily on physics. <br> 
What I mean by that is that the whole world is interactive and can be used for things like fighting. <br> 
The reason it’s not at the top is because it becomes very janky and buggy. <br> 
 The game has a decent story, but the focus is on the physics and the fun of the game. <br> 
I give the game a 7 out of 10 for the fantastic physics.</h5></div><br>
<!-- Dropdown paragraf med Informasjon om Skyrim VR -->
<button id="Btn" onclick="Btn(4)">
<h1>Skyrim VR <span style="opacity: 0;">Lorem Ipsum-</span><img src="./Images/Skyrim.png"
 ></h1>
</button><div id="Drop4" class="invis"><h5>
Skyrim VR is a very bad game in its original form, but mods work wonders. <br> 
Skyrim VR has been shaped by modding and that’s good because the community has a lot of power. <br> 
But it’s also stupid because Bethesda doesn’t care about their game anymore. <br> 
The story in Skyrim is very good and the only reason people still mod it. <br> 
I give the game a 7 out of 10 for all the sick mods out there.</h5></div><br>
<!-- Dropdown paragraf med Informasjon om Hoi4 -->
<button id="Btn" onclick="Btn(5)">
<h1>iRacing <span style="opacity: 0;">Lorem Ipsum Dol</span><img src="./Images/iracing.jpg"
 ></h1>
</button><div id="Drop5" class="invis"><h5>
Iracing is not like the other car games on this list because it’s a professional simulator. <br> 
Instead of focusing on having the most fun game, they focus on realism. <br> 
When you race in the game, it’s important to take your time practicing on the track and car. <br> 
It’s important because you level up by winning but also by driving carefully. <br>I give the game an 8 out of 10. It’s surprisingly more fun than one would think.</h5></div> `;
*/

/* 6th translation
document.querySelector("#translate35").innerHTML =
`<div style="font-family: Rubik;">
<!-- Paragraph --><h4>
I've become quite fond of cars lately. <br>
I mostly like old American cars and Japanese JDM cars, <br>
but there are also other cars that I wouldn't say no to.</h4><br>
<h3>Below is a list of my top 3 cars Unorganized by rating</h3>
</div>`;document.querySelector("#translate36").innerHTML =
`<button id="Btn" onclick="Btn(6)">
<h1>Toyota Supra Mk3 <span style="opacity: 0;">LoremI--</span><img src="./Images/Supra mk3.jpg" width="75"
style="border-radius: 20px;"></h1>
</button><div id="Drop6" class="invis">
<h5>When talking about the Toyota Supra, people often think of the Mk4, <br>
but I think the Mk3 model looks much better, it's not too bad either, <br>
some of the models actually came from the factory with twin turbos and 230Hp. <br>
The car was introduced in 1986 and continued production until '93.</h5></div><br>
<!-- Dropdown paragraph with information about charger -->
<button id="Btn" onclick="Btn(7)">
<h1>Dodge Charger '69 <span style="opacity: 0;">Lori|mi-</span><img src="./Images/charger.jpg"
 ></h1>
</button><div id="Drop7" class="invis"><h5>
There's not much to say about this car, I like it because it's good for drifting in Carx. <br>
It also looks nice, it's basically the same car that was used in Fast and Furious.<br>
Some of the models came from the factory with a strong V8 with 425Hp. <br></h5></div><br>
<!-- Dropdown paragraf med Informasjon om NSX -->
<button id="Btn" onclick="Btn(8)">
<h1>Honda NSX R <span style="opacity: 0;">Lori||||||||||m-</span><img
src="./Images/NSX.png"  ></h1>
</button><div id="Drop8" class="invis"><h5>
The Honda NSX Type R is a car I discovered not too long ago in Forza Horizon and since then I’ve been in love. <br> 
Especially the 1992 model is the coolest in my opinion. It came from the factory with 276Hp from a powerful V6 engine. <br> 
The Honda had the engine in the middle of the car and had rear-wheel drive, which made it difficult to control if you didn’t know how.
</h5></div>`;document.querySelector("#translate37").innerHTML = `<!-- Formula 1 Heading with Kdam Thmor Pro -->
<h2 style="font-family: Kdam Thmor Pro;">Formula 1</h2>
<div style="font-family: Rubik;">
<!-- Paragraph -->
<h4>With my recent joy of cars, F1 was impossible to avoid. <br>
I started with the thought that F1 was stupid because they weren't real cars, <br>
All those thoughts disappeared after I watched Drive to Survive on Netflix.</h4><br>
<h3>Below is some information about my favorite driver and his team</h3>
</div>`; document.querySelector("#translate38").innerHTML = `<button id="Btn" onclick="Btn(9)">
<h1>Alpine <span style="opacity: 0;">LoremIpsumDolorSit</span><img
src="./Images/Alpine_logo.jpg"  ></h1>
</button><div id="Drop9" class="invis"><h5>
Alpine is a team that did well in 2022 with the fight against Maclaren, <br> 
But this year Maclaren has fallen off and has the worst car by far. <br> 
While Alpine has a car that has the potential to get fourth place again. <br><br> 
Last year Alpine and Maclaren had a quarrel about who should have junior driver Oscar Piastri, <br> 
It ended with Maclaren getting him, but Alpine got someone who is even better and my favorite driver. <br> 
Pierre Gasly <i class=“fa-solid fa-arrow-down”></i></h5></div><br>
<!-- Dropdown paragraf med Informasjon om Gasly -->
<button id="Btn" onclick="Btn(10)">
<h1>Pierre Gasly <span style="opacity: 0;">LoremIpsumDol</span><img
src="./Images/Gasly.png"  ></h1>
</button><div id="Drop10" class="invis"><h5>
Pierre Gasly is a French driver for Alpine F1 team and my favorite. <br> 
Pierre started his Formula 1 career at Red Bull after Daniel Ricardo moved to Renault in 2019. <br>
But everything did not go as planned for the Frenchman since he was not confident enough in his driving, <br> 
He was then moved to Red Bull’s daughter team: “Alpha Tauri” where he would drive with Yuki Tsunoda. <br> 
But one beautiful day in Monza, Italy he took first place in one of the worst cars.<br> 
The story of Monza 2020 is legendary and it gave him enough credit to move to Alpine two years later. <br> <br> 
So far this season Pierre is tied with teammate Esteban Ocon at 10 and 11. <br> 
But I have faith in the Frenchman this year and hope that he scores big points.
</h5></div>`;document.querySelector("#translate39").innerHTML = `Movies`;
document.querySelector("#translate40").innerHTML = `TV Series`;
document.querySelector("#translate71").innerHTML = `Here are some other sites I have made`;
*/