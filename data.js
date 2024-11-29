const data =
    [
        {
            "title": "Контакти",
            'img':"assets/herb.png",
            "blocks": [
                {
                    "front": "Бериславський фаховий педагогічний коледж імені В.Ф. Беньковського Херсонського державного університету",
                    "back": "<p>Секретар - Пирожок Ірина Анатоліївна <br/><a href=\"mailto:i.pyrozhok@bpc.ks.ua\">i.pyrozhok@bpc.ks.ua</a> <a href=\"tel:+380959086571\">+380959086571</a></p>\n" +
                        "<p>В. о. директора Юрчук Юрій Юрійович <br/><a href=\"mailto:y.yurchuk@bpc.ks.ua\">y.yurchuk@bpc.ks.ua</a></p>\n" +
                        "<p>Офіційна електронна пошта коледжу: <br/><a href=\"mailto:college-office@bpc.ks.ua\">college-office@bpc.ks.ua</a></p>\n"
                },
                {
                    "front": "Вчена рада",
                    "back": "<p>Голова вченої ради Олексенко Володимир Павлович<br/> <a href=\"mailto:voleksenko@ksu.ks.ua\">voleksenko@ksu.ks.ua</a> <a href=\"tel:+380506525558\">+380506525558</a></p>\n" +
                        "<p>Учена секретарка Воропай Наталія Анатоліївна <br/><a href=\"mailto:nvoropay@ksu.ks.ua\">nvoropay@ksu.ks.ua</a> <a href=\"tel:+380666467300\">+380666467300</a></p>\n"
                },
                {
                    "front": "Генічеський фаховий коледж Херсонського державного університету",
                    "back": "<p>Головченко Ігор Валентинович <a href=\"mailto:igolovchenko@ksu.ks.ua\">igolovchenko@ksu.ks.ua</a> <a href=\"tel:+380661151349\">+380661151349</a></p>\n" +
                        "<p>Осташевська Ольга Вадимівна <a href=\"mailto:genichukmed22@ukr.net\">genichukmed22@ukr.net</a> <a href=\"mailto:gfk@ksu.ks.ua\">gfk@ksu.ks.ua</a></p>\n" +
                        "<p>Контакти для вирішення виробничих питань: <a href=\"tel:+380661151349\">+380661151349</a> (Telegram, WhatsApp, Viber) Головченко Ігор Валентинович, секретар; Цодер Ольга, секретар коледжу <a href=\"tel:+380974722785\">+380974722785</a></p>\n"
                },
                {
                    "front": "Загальний відділ",
                    "back": "<p>Присяжна Світлана Анатоліївна Керівниця відділу <br/><a href=\"mailto:prisyagnaya@ksu.ks.ua\">prisyagnaya@ksu.ks.ua</a> <a href=\"tel:+380668354692\">+380668354692</a></p>\n"
                },
                {
                    "front": "Офіс м. Херсон",
                    "back": "<p>Козаков Олександр Анатолійович, в.о.керівника АГЧ <br/><a href=\"mailto:okozakov@ksu.ks.ua\">okozakov@ksu.ks.ua</a> <a href=\"tel:+380661419476\">+380661419476</a></p>\n" +
                        "<p>Йокіч Ганна Олександрівна, провідна фахівчиня <br/><a href=\"mailto:gyokich@ksu.ks.ua\">gyokich@ksu.ks.ua</a> <a href=\"tel:+380505534342\">+380505534342</a></p>\n"
                },
                {
                    "front": "Відділ «Приймальна комісія»",
                    "back": "<p>Стародубець Надія Павлівна Керівниця відділу <br/><a href=\"mailto:nadia@ksu.ks.ua\">nadia@ksu.ks.ua</a> <a href=\"tel:+380954720711\">+380954720711</a></p>\n"
                },
                {
                    "front": "Завідувачка відділу аспірантури та докторантури",
                    "back": "<p>Денисенко Вероніка В'ячеславівна Завідувачка відділу аспірантури та докторантури <a href=\"tel:+380507581544\">+380507581544</a></p>\n" +
                        "<p><a href=\"mailto:phd@ksu.ks.ua\">phd@ksu.ks.ua</a> - основна пошта відділу</p>\n" +
                        "<p><a href=\"mailto:veronika@ksu.ks.ua\">veronika@ksu.ks.ua</a> - додаткова</p>\n" +
                        "<p>Вебсторінка відділу: <a href=\"https://www.kspu.edu/About/DepartmentAndServices/DDoctorants.aspx\">https://www.kspu.edu/About/DepartmentAndServices/DDoctorants.aspx</a></p>\n"
                },
                {
                    "front": "Відділ з питань інтелектуальної власності",
                    "back": "<p>Блах Валерія Сергіївна, керівниця відділу <a href=\"mailto:blah@ksu.ks.ua\">blah@ksu.ks.ua</a> <a href=\"tel:+380668847406\">+380668847406</a></p>\n" +
                        "<p>Вебсторінка відділу: <a href=\"https://www.kspu.edu/About/DepartmentAndServices/DepartmentOfIntellectualProperty.aspx\">https://www.kspu.edu/About/DepartmentAndServices/DepartmentOfIntellectualProperty.aspx</a></p>"
                },
                {
                    "front": "Відділ забезпечення якості освіти",
                    "back": "<p>Черкашина Тетяна Олександрівна - керівниця відділу<br/> <a href=\"mailto:cherkashina@ksu.ks.ua\">cherkashina@ksu.ks.ua</a> <a href=\"tel:+380958181280\">+380958181280</a></p>\n" +
                        "<p>Вебсторінка відділу: <a href=\"https://www.kspu.edu/About/DepartmentAndServices/QAssurance.aspx\">https://www.kspu.edu/About/DepartmentAndServices/QAssurance.aspx</a></p>\n"
                },
                {
                    "front": "Відділ по роботі з обдарованою молоддю",
                    "back": "<p>Юріна Юлія Миколаївна, керівниця відділу<br/> <a href=\"mailto:julia@ksu.ks.ua\">julia@ksu.ks.ua</a> <a href=\"tel:+380665408157\">+380665408157</a><br/> (дзвінки і повідомлення в застосунках «Вайбер», «Вацап»)</p>\n" +
                        "<p>Вебсторінка відділу:<br/> <a href=\"https://www.kspu.edu/About/DepartmentAndServices/DepartmentTalentedPeople.aspx\">https://www.kspu.edu/About/DepartmentAndServices/DepartmentTalentedPeople.aspx</a></p>\n"
                }, {
                    "front": "Музейно-архівний центр",
                    "back": "<p>Самсакова Ірина Владиленівна - керівниця відділу <br/><a href=\"mailto:samsakova@ksu.ks.ua\">samsakova@ksu.ks.ua</a> <a href=\"tel:+380665730466\">+380665730466</a></p>\n" +
                        "<p>Вебсторінка центру:<br/> <a href=\"https://www.kspu.edu/About/DepartmentAndServices/3.aspx\">https://www.kspu.edu/About/DepartmentAndServices/3.aspx</a></p>\n"
                },
                {
                    "front": "Наукова бібліотека",
                    "back": "<p>Коваль Алла Олександрівна - Директорка наукової бібліотеки <br/><a href=\"mailto:akoval@ksu.ks.ua\">akoval@ksu.ks.ua</a> <a href=\"tel:+380957037578\">+380957037578</a></p>\n" +
                        "<p>Вебсторінка наукової бібліотеки: <br/><a href=\"https://www.kspu.edu/About/DepartmentAndServices/Library/Actual/ProvidesRemoteService.aspx\">https://www.kspu.edu/About/DepartmentAndServices/Library/Actual/ProvidesRemoteService.aspx</a></p>\n"
                },
                {
                    "front": "Навчальний відділ",
                    "back": "<p>Яценко В.Ф., керівниця навчального відділу <a href='mailto:VYatsenko@ksu.ks.ua'>VYatsenko@ksu.ks.ua</a> +380675842565</p><p>Гайдай К.Ю., фахівець І категорії <a href='mailto:KGaiday@ksu.ks.ua'>KGaiday@ksu.ks.ua</a></p><p>Гладко К. С., провідний фахівець <a href='mailto:KGladko@ksu.ks.ua'>KGladko@ksu.ks.ua</a></p><p>Горбаткова І.А., провідний фахівець <a href='mailto:horbatkova@ksu.ks.ua'>horbatkova@ksu.ks.ua</a></p><p>Громовая О.О., провідний фахівець <a href='mailto:OHromovaia@ksu.ks.ua'>OHromovaia@ksu.ks.ua</a></p><p>Жигало О. А., фахівець І категорії <a href='mailto:OZhyhalo@ksu.ks.ua'>OZhyhalo@ksu.ks.ua</a></p><p>Зацаринна В.В., провідний фахівець <a href='mailto:vzatsarynna@ksu.ks.ua'>vzatsarynna@ksu.ks.ua</a></p><p>Захаров О. О., провідний фахівець <a href='mailto:ozaharov@ksu.ks.ua'>ozaharov@ksu.ks.ua</a></p><p>Швець В. А., провідний фахівець <a href='mailto:vshvets@ksu.ks.ua'>vshvets@ksu.ks.ua</a></p>"
                },
                {
                    "front": "Навчально-методичний відділ",
                    "back": "<p>Корнішева Тетяна Леонідівна, Керівниця навчально-методичного відділу <br/><a href=\"mailto:emd@ksu.ks.ua\">emd@ksu.ks.ua</a> <a href=\"tel:+380983542873\">+380983542873</a></p>\n"
                },
                {
                    "front": "Відділ охорони праці",
                    "back": "<p>Бушнєва Валерія Олександрівна, в.о. начальника відділу охорони праці <a href=\"mailto:vbushnieva@ksu.ks.ua\">vbushnieva@ksu.ks.ua</a> <a href=\"tel:+380995578933\">+380995578933</a></p>\n"
                },
                {
                    "front": "Договірний відділ",
                    "back": "<p>Петриняк Діана Іванівна, в.о. керівника договірного відділу<br/> <a href=\"mailto:dpetryniak@ksu.ks.ua\">dpetryniak@ksu.ks.ua</a> <a href=\"tel:+380683721622\">+380683721622</a></p>\n"
                },
                {
                    "front": "Плановий відділ",
                    "back": "<p>Глущенко Олена Олександрівна <a href=\"mailto:gluschenko@ksu.ks.ua\">gluschenko@ksu.ks.ua</a> <a href=\"tel:+380951398095\">+380951398095</a></p>\n"
                },
                {
                    "front": "Студентське містечко",
                    "back": "<p>Малишева Д.О. - директорка<br/> <a href=\"mailto:campus@ksu.ks.ua\">campus@ksu.ks.ua</a> <a href=\"tel:+380502172734\">+380502172734</a></p>\n"
                },
                {
                    "front": "Відділ міжнародних ініціатив та проєктної діяльності ",
                    "back": "<p>Ревенко Євгенія Сергіївна Керівниця відділу міжнародних ініціатив та проєктної діяльності <a href=\"mailto:erevenko@ksu.ks.ua\">erevenko@ksu.ks.ua</a> <a href=\"tel:+380954232797\">+380954232797</a></p>\n" +
                        "<p>Корпоративна пошта відділу: <a href=\"mailto:international@ksu.ks.ua\">international@ksu.ks.ua</a></p>\n" +
                        "<p>Сторінки відділу в соцмережах:</p>\n" +
                        "<p>Фейсбук: <a href=\"https://www.facebook.com/IROUKRAINEKSU\">https://www.facebook.com/IROUKRAINEKSU</a></p>\n" +
                        "<p>Телеграм: <a href=\"https://t.me/international_relations_ksu\">https://t.me/international_relations_ksu</a></p>\n" +
                        "<p>Інстаграм: <a href=\"https://instagram.com/international.ksu?igshid=YmMyMTA2M2Y=\">https://instagram.com/international.ksu?igshid=YmMyMTA2M2Y=</a></p>"
                },
                {
                    "front": "Гуманітарний відділ",
                    "back": "<p>Корпоративна пошта відділу: <a href='mailto:social@ksu.ks.ua'>social@ksu.ks.ua</a></p><p>Сторінки відділу в соцмережах:</p><p>Фейсбук: <a href='https://ksu24.kspu.edu/s/oUiuY'>https://ksu24.kspu.edu/s/oUiuY</a></p><p>Інстаграм: <a href='https://www.instagram.com/gumviddil_ksu/'>https://www.instagram.com/gumviddil_ksu/</a></p>"
                }
            ]
        },
        {
            "title": "Факультет бізнесу і права",

            'img':"assets/logos/business.png",
            "blocks": [{
                "front": "Факультет бізнесу і права",
                "back": "<p>Мельникова Катерина Вікторівна - В.о. декана <br/><a href='mailto:EMelnikova@ksu.ks.ua'>EMelnikova@ksu.ks.ua</a> <a" +
                    " href='tel:+380950418771'>+380950418771</a><br/> <a href='https://www.instagram.com/invites/contact/?i=13yvfe8mht9dh&utm_content=1y468fh'>https://www.instagram.com/invites/contact/?i=13yvfe8mht9dh&utm_content=1y468fh</a></p><p>Веремчук Наталія Олексіївна - Секретар факультету <a href='mailto:fomenko@ksu.ks.ua'>fomenko@ksu.ks.ua</a> <a href='tel:+380958405523'>+380958405523</a><br/> <a href='https://www.facebook.com/businesspravoksu'>https://www.facebook.com/businesspravoksu</a></p>"
            },
                {
                    "front": "Кафедра готельно-ресторанного та туристичного бізнесу ",
                    "back": "<p>Бурак Валентина Геннадіївна - Завідувачка кафедри <br/><a href='mailto:vburak@ksu.ks.ua'>vburak@ksu.ks.ua</a><a href='tel:+380509828332'>+380509828332</a></p><p>Сорокіна Альона Миколаївна - Асистент кафедри <br/><a href='mailto:asorokina@ksu.ks.ua'>asorokina@ksu.ks.ua</a><a href='tel:+38993037896'>+38993037896</a><br/> <a href='https://www.facebook.com/profile.php?id=100093061455707&locale=uk_UA'>https://www.facebook.com/profile.php?id=100093061455707&locale=uk_UA</a></p>"
                },
                {
                    "front": "Кафедра економіки, менеджменту та адміністрування",
                    "back": "<p>Ушкаренко Юлія Вікторівна - Завідувачка кафедри <br/> <a href='mailto:jushkarenko@ksu.ks.ua'>jushkarenko@ksu.ks.ua</a> <a" +
                        " href='tel:+380661404058'>+380661404058</a></p><p>Осипенко Наталія Олександрівна - Старша лаборантка<br/> <a" +
                        " href='mailto:nosipenko@ksu.ks.ua'>nosipenko@ksu.ks.ua</a><br/>  <a href='tel:+380633695036'>+380633695036</a> <a href='https://www.facebook.com/economteoriya'>https://www.facebook.com/economteoriya</a></p>"
                },
                {
                    "front": "Кафедра національного, міжнародного права та правоохоронної діяльності",
                    "back": "<p>Гавловська Аліна Олександрівна - Завідувачка кафедри <br/> <a href='mailto:ahavlovska@ksu.ks.ua'>ahavlovska@ksu.ks.ua</a> <a href='tel:+380958375057'>+380958375057</a></p>"
                },
                {
                    "front": "Кафедра фінансів, обліку та підприємництва",
                    "back": "<p>Петренко Вікторія Сергіївна - Завідувачка кафедри<br/> <a href='mailto:vpetrenko@ksu.ks.ua'>vpetrenko@ksu.ks.ua</a><br/> <a href='tel:+380958183049'>+380958183049</a><br/> <a href='https://www.facebook.com/kfopksu/'>https://www.facebook.com/kfopksu/</a><br/> <a href='https://www.instagram.com/fop_fbip_ksu'>https://www.instagram.com/fop_fbip_ksu</a></p>"
                }

            ]
        },
        {
            "title": "Факультет біології географії та екології",
            "img":"assets/logos/biology.png",
            "blocks": [
                {
                    "front": "Факультет біології географії та екології",
                    "back": "<p>Пилипенко Ігор Олегович, В.о. декана факультету <br/><a href='mailto:pilipenko@ksu.ks.ua'>pilipenko@ksu.ks.ua</a><a" +
                        " href='tel:+380994603642'>+380994603642</a></p><p>Шкуропат Анастасія Вікторівна, помічник декана з навчально роботи та" +
                        " практик, доцентка кафедри біології людини та імунології<br/> <a href='mailto:nastya@ksu.ks.ua'>nastya@ksu.ks.ua</a> <a" +
                        " href='tel:+380662069391'>+380662069391</a></p><p>Нападовська Ганна Юріївна, помічник декана з організаційно-виховної роботи" +
                        " факультету <br/><a href='mailto:gnapadovska@ksu.ks.ua'>gnapadovska@ksu.ks.ua</a> <a" +
                        " href='tel:+380660139405'>+380660139405</a><br/><a href='https://www.instagram.com/fbge_ksu/'>https://www.instagram.com/fbge_ksu/</a><br/><a href='https://www.facebook.com/groups/1639053176424538/'>https://www.facebook.com/groups/1639053176424538/</a></p><p>Головерда Юлія Анатоліївна, секретар факультету <a href='mailto:yupetrova@ksu.ks.ua'>yupetrova@ksu.ks.ua</a> <a href='tel:+380500671525'>+380500671525</a></p>"
                },
                {
                    "front": "Кафедра біології людини та імунології",
                    "back": "<p>Гасюк Олена Миколаївна, Завідувачка кафедри біології людини та імунології <a" +
                        " href='mailto:Gasuk@ksu.ks.ua'>Gasuk@ksu.ks.ua</a></p><p>Горбенко Марина Тарасівна, Старша лаборантка кафедри біології людини" +
                        " та імунології </p><p><a href='mailto:mhorbenko@ksu.ks.ua'>mhorbenko@ksu.ks.ua</a> <a" +
                        " href='tel:+380937909283'>+380937909283</a></p>"
                }, {
                    "front": "Кафедра ботаніки",
                    "back": "<p>Мойсієнко Іван Іванович, завідувач кафедри <a href='mailto:vanvan@ksu.ks.ua'>vanvan@ksu.ks.ua</a></p><p>Загороднюк Наталія Володимирівна, доцент кафедри <a href='mailto:netl@ksu.ks.ua'>netl@ksu.ks.ua</a> <a href='tel:+380990056095'>+380990056095</a></p><p> <a href='tel:+380960852622'>+380960852622</a> Telegram @nataliazagorodniuk (Наталья Загороднюк)</p>"
                }, {
                    "front": "Кафедра географії та екології",
                    "back": "<p>Давидов Олексій Віталійович, завідувач кафедри <a href='mailto:odavydov@ksu.ks.ua'>odavydov@ksu.ks.ua</a></p><p>Іосипчук Анастасія Михайлівна, лаборант кафедри <a href='mailto:aiosypchuk@ksu.ks.ua'>aiosypchuk@ksu.ks.ua</a> <a href='tel:+380661254299'>+380661254299</a></p>"
                }
            ]

        },
        {
            "title": "Факультет комп’ютерних наук, фізики та математики",

            'img':"assets/logos/comp.png",
            "blocks": [{
                "front": "Факультет комп’ютерних наук, фізики та математики",
                "back": "<p>Гончаренко Тетяна Леонідівна, деканеса <a href=\"mailto:tgoncharenko@ksu.ks.ua\">tgoncharenko@ksu.ks.ua</a> @dekanesa</p>\n" +
                    "<p> <a href=\"https://www.facebook.com/groups/fcspmKSU/\">https://www.facebook.com/groups/fcspmKSU</a></p>\n" +
                    "<p> <a href=\"https://t.me/fcspm_ksu\">https://t.me/fcspm_ksu</a></p>\n" +
                    "\n" +
                    "<p>Барболіна Анна Сергіївна, помічниця декана з цифровізації, секретар-друкарка <a href=\"mailto:abarbolina@ksu.ks.ua\">abarbolina@ksu.ks.ua</a> <a href=\"tel:+380975055154\">+380975055154</a> @taeanny</p>\n"
            },

                {
                    "front": "Кафедра алгебри, геометрії та математичного аналізу",
                    "back": "<p>Таточенко Володимир Іванович, завідувач кафедри </p><p> <a href='mailto:tatochenko@ksu.ks.ua'>tatochenko@ksu.ks.ua</a>  <a href='tel:+380674992958'>+380674992958</a></p><p>Вебсторінка кафедри: </p><p> <a href='https://www.kspu.edu/About/Faculty/FPhysicalEduSport/Medbiol.aspx'>https://www.kspu.edu/About/Faculty/FPhysicalEduSport/Medbiol.aspx</a></p>"
                },
                {
                    "front": "Кафедра комп’ютерних наук та програмного забезпечення",
                    "back": "<p>Песчаненко Володимир Сергійович, завідувач кафедри </p><p> <a href='mailto:vladim@ksu.ks.ua'>vladim@ksu.ks.ua</a> </p><p> <a href='tel:+380953241557'>+380953241557</a> @VPSaling</p><p>Михайличенко Людмила Олександрівна, ст. лаборанка кафедри  </p><p><a href='mailto:lmykhaylychenko@ksu.ks.ua'>lmykhaylychenko@ksu.ks.ua</a>  <a href='tel:+380669568720'>+380669568720</a></p>"
                },
                {
                    "front": "Кафедра фізики",
                    "back": "<p>Кузьменков Сергій Георгійович, завідувач кафедри  </p><p><a href='mailto:ksg@ksu.ks.ua'>ksg@ksu.ks.ua</a>  <a href='tel:+380999026010'>+380999026010</a></p><p><a href='https://www.facebook.com/KFMNinKSU/'>https://www.facebook.com/KFMNinKSU/</a></p>"

                }]
        },
        {
            "title": "Медичний факультет",

            'img':"assets/logos/medical.png",
            "blocks": [{
                "front": "Медичний факультет",
                "back": "<p>Головченко Ігор Валентинович, декан</p><p> <a href=\"mailto:igolovchenko@ksu.ks.ua\">igolovchenko@ksu.ks.ua</a>   <a href=\"tel:+380661151349\">+380661151349</a></p><p>Контакти для вирішення виробничих питань:</p><p><a href=\"tel:+380661151349\">+380661151349</a> (Telegram, WhatsApp, Viber)</p><p>Головченко Ігор Валентинович, декан</p><p>Тоніна Тетяна Вікторівна, секретар факультету</p><p> <a href=\"tel:+380502436073\">+380502436073</a></p><p>Васильєва Наталія Олегівна - Заступниця декана факультету з навчально-методичної роботи</p><p> <a href=\"mailto:nvasylieva@ksu.ks.ua\">nvasylieva@ksu.ks.ua</a>  <a href=\"tel:+380661351430\">+380661351430</a></p><p>Солона Юлія Олександрівна - Заступниця декана факультету з організаційно-виховної роботи та працевлаштування</p><p> <a href=\"mailto:yusolona@ksu.ks.ua\">yusolona@ksu.ks.ua</a>  <a href=\"tel:+380955325229\">+380955325229</a></p>"
            },
                {
                    "front": "Кафедра медицини",
                    "back": "<p>Завідувачка кафедри Тарасова Ольга Олександрівна</p><p><a href=\"mailto:tarasova@ksu.ks.ua\">tarasova@ksu.ks.ua</a></p>"
                },
                {
                    "front": "Кафедра фізичної терапії та ерготерапії",
                    "back": "<p>Завідувачка кафедри Лаврикова Оксана Валентинівна</p><p><a href=\"mailto:lavrikova@ksu.ks.ua\">lavrikova@ksu.ks.ua</a></p>"
                },
                {
                    "front": "Кафедра хімії та фармації",
                    "back": "<p>Завідувачка кафедри Попович Тетяна Анатоліївна</p><p> <a href=\"mailto:chemist@ksu.ks.ua\">chemist@ksu.ks.ua</a></p>"
                }]

        },
        {
            "title": "Факультет культури і мистецтв",

            'img':"assets/logos/culture.png",
            "blocks": [{
                "front": "Факультет культури і мистецтв",
                "back": "<p>Терешенко Наталя Віталіївна - В.о. декана</p><p> <a href=\"mailto:tere@ksu.ks.ua\">tere@ksu.ks.ua</a>    <a" +
                    " href=\"tel:+380507231740\">+380507231740</a></p>"
            },
                {
                    "front": "Кафедра культурології",
                    "back": "<p>Лимаренко Лідія Іванівна - В.о. завідувача кафедри</p><p><a href=\"mailto:llymarenko@ksu.ks.ua\">llymarenko@ksu.ks.ua</a> Вайбер, телеграм <a href=\"tel:+380509808588\">+380509808588</a></p>"
                },
                {
                    "front": "Кафедра музичного мистецтва",
                    "back": "<p>Гунько Наталя Олександрівна - Завідувачка кафедри</p><p><a href=\"mailto:ngunko@ksu.ks.ua\">ngunko@ksu.ks.ua</a>  <a href=\"tel:+380506410167\">+380506410167</a></p>"
                }, {
                    "front": "Кафедра образотворчого мистецтва і дизайну",
                    "back": "<p>Мельник Євгенія Олексіївна - Старша лаборантка <a href=\"mailto:matiss@ksu.ks.ua\">matiss@ksu.ks.ua</a> <br/> <a" +
                        " href=\"tel:+380663242099\">+380663242099</a></p>"
                },
                {
                    "front": "Кафедра хореографічного мистецтва",
                    "back": "<p>Рехліцька Алла Євгенівна - Завідувачка кафедри</p><p><a" +
                        " href=\"mailto:arekhlitska@ksu.ks.ua\">arekhlitska@ksu.ks.ua</a> Телеграм  <a href=\"tel:+380663453461\">+380663453461</a>" +
                        " <br/>Вайбер  <a href=\"tel:+420723029176\">+420723029176</a></p>"
                }]

        },
        {
            "title": "Педагогічний факультет",

            'img':"assets/logos/pedology.png",
            "blocks": [{
                "front": "Педагогічний факультет",
                "back": "<p>Воропай Наталія Анатоліївна, в.о. завідувача кафедри</p><p><a href=\"mailto:nvoropay@ksu.ks.ua\">nvoropay@ksu.ks.ua</a>" +
                    " <a href=\"tel:+380666467300\">+380666467300</a></p>"
            },
                {
                    "front": "Кафедра педагогіки та психології дошкільної та початкової освіти",
                    "back": "<p>Воропай Наталія Анатоліївна, в.о. завідувача кафедри</p><p> <a" +
                        " href=\"mailto:nvoropay@ksu.ks.ua\">nvoropay@ksu.ks.ua</a>  <a href=\"tel:+380666467300\">+380666467300</a></p>"
                },
                {
                    "front": "Кафедра педагогіки, психології й освітнього менеджменту імені професора Євгена Петухова",
                    "back": "<p>Пермінова Людмила Аркадіївна</p><p><a href=\"mailto:lperminova@ksu.ks.ua\">lperminova@ksu.ks.ua</a>  <a" +
                        " href=\"tel:+390997372033\">+390997372033</a><br/><a href=\"mailto:perminova@i.ua\">perminova@i.ua</a></p>"
                },
                {
                    "front": "Кафедра спеціальної освіти",
                    "back": "<p>Кабельнікова Наталія Володимирівна, завідувачка кафедри</p><p><a href=\"mailto:nkabelnikova@ksu.ks.ua\">nkabelnikova@ksu.ks.ua</a></p>"
                },
                {
                    "front": "Кафедра теорії та методики дошкільної та початкової освіти",
                    "back": "<p>Швець Тетяна Анатоліївна, старший викладач кафедри</p><p><a href=\"mailto:tshvets@ksu.ks.ua\">tshvets@ksu.ks.ua</a>" +
                        "  <a href=\"tel:+380662860799\">+380662860799</a></p>"
                }]
        },
        {
            "title": "Факультет психології, історії та соціології",

            'img':"assets/logos/psychology.png",
            "blocks": [
                {
                    "front": "Факультет психології, історії та соціології",
                    "back": "<p>Шапошникова Ірина Василівна, в.о.декана <a" +
                        " href=\"mailto:ishaposhnykova@ksu.ks.ua\">ishaposhnykova@ksu.ks.ua</a>  <a" +
                        " href=\"tel:+380996095165\">+380996095165</a></p><p>Контакти для вирішення виробничих питань:</p><p><a href=\"tel:+380996095165\">+380996095165</a> (Telegram, WhatsApp, Viber) Шапошникова Ірина Василівна, в.о.декана</p><p> <a href=\"tel:+380992270574\">+380992270574</a> (з 9:00 до 17:00) Марквас Катерина Федорівна, фахівець</p><p><a href=\"tel:+380675088802\">+380675088802</a> (з 9:00 до 17:00) Кузьменкова Вікторія Дмитрівна, секретар факультету</p>"
                },
                {
                    "front": "Кафедра історії, археології та методики викладання",
                    "back": "<p>Завідувач кафедри - Кузовова Наталя Миколаївна</p><p>Контакти для вирішення виробничих питань:</p><p><a href=\"tel:+380996095165\">+380996095165</a> (Telegram, WhatsApp, Viber) Шапошникова Ірина Василівна, в.о.декана</p><p> <a href=\"tel:+380992270574\">+380992270574</a> (з 9:00 до 17:00) Марквас Катерина Федорівна, фахівець</p><p> <a href=\"tel:+380675088802\">+380675088802</a> (з 9:00 до 17:00) Кузьменкова Вікторія Дмитрівна, секретар факультету</p>"
                },
                {
                    "front": "Кафедра психології",
                    "back": "<p>Завідувач кафедри - Тавровецька Наталія Іванівна <a" +
                        " href=\"mailto:ntavrovetska@ksu.ks.ua\">ntavrovetska@ksu.ks.ua</a> <a" +
                        " href=\"tel:+380951882181\">+380951882181</a></p><p>Контакти для вирішення виробничих питань:</p><p><a href=\"tel:+380996095165\">+380996095165</a> (Telegram, WhatsApp, Viber) Шапошникова Ірина Василівна, в.о.декана</p><p><a href=\"tel:+380992270574\">+380992270574</a> (з 9:00 до 17:00) Марквас Катерина Федорівна, фахівець</p><p><a href=\"tel:+380675088802\">+380675088802</a> (з 9:00 до 17:00) Кузьменкова Вікторія Дмитрівна, секретар факультету</p>"
                },
                {
                    "front": "Кафедра філософії, соціології та соціальної роботи",
                    "back": "<p>Завідувач кафедри Костючков Сергій Карпович</p><p> <a href=\"mailto:skostiuchkov@ksu.ks.ua\">skostiuchkov@ksu.ks.ua</a></p><p>Контакти для вирішення виробничих питань:</p><p> <a href=\"tel:+380996095165\">+380996095165</a> (Telegram, WhatsApp, Viber) Шапошникова Ірина Василівна, в.о.декана</p><p><a href=\"tel:+380992270574\">+380992270574</a> (з 9:00 до 17:00) Марквас Катерина Федорівна, фахівець</p><p><a href=\"tel:+380675088802\">+380675088802</a> (з 9:00 до 17:00) Кузьменкова Вікторія Дмитрівна, секретар факультету</p>"
                }
            ]
        },
        {
            "title": "Факультет української й іноземної філології та журналістики",

            'img':"assets/logos/ukrLanguage.png",
            "blocks": [{
                "front": "Факультет української й іноземної філології та журналістики",
                "back": "<p>Гоштанар Ірина Вікторівна - Деканеса</p><p> <a href=\"mailto:igoshtanar@ksu.ks.ua\">igoshtanar@ksu.ks.ua</a>" +
                    " <a href=\"tel:+380677211012\">+380677211012</a></p><p>Шанько Катерина Єгорівна - Секретарка</p><p><a" +
                    " href=\"mailto:kshanko@ksu.ks.ua\">kshanko@ksu.ks.ua</a>  <a href=\"tel:+380990770177\">+380990770177</a></p>"
            },
                {
                    "front": "Кафедра англійської мови та світової літератури імені професора Олега Мішукова",
                    "back": "<p>Кіщенко Юлія Володимирівна - Завідувачка кафедри</p><p><a" +
                        " href=\"mailto:yukishchenko@ksu.ks.ua\">yukishchenko@ksu.ks.ua</a><a" +
                        " href=\"tel:+380506321208\">+380506321208</a></p><p>Бозняк Марина Юріївна - Старша лаборантка</p><p><a" +
                        " href=\"mailto:mbozniak@ksu.ks.ua\">mbozniak@ksu.ks.ua</a> <a href=\"tel:+380969671542\">+380969671542</a></p>"
                },
                {
                    "front": "Кафедра німецької та романської філології",
                    "back": "<p>Романова Наталя Василівна - В.о. завідувача кафедри</p><p><a" +
                        " href=\"mailto:nromanova@ksu.ks.ua\">nromanova@ksu.ks.ua</a> <a" +
                        " href=\"tel:+380665572417\">+380665572417</a></p><p>Солонина Тетяна Олександрівна - Викладачка</p><p> <a href=\"mailto:tsolonyna@ksu.ks.ua\">tsolonyna@ksu.ks.ua</a>  <a" +
                        " href=\"tel:+380951093741\">+380951093741</a></p>"
                },
                {
                    "front": "Кафедра української і слов’янської філології та журналістики",
                    "back": "<p>Климович Світлана Миколаївна - Завідувачка кафедри</p><p> <a" +
                        " href=\"mailto:sklymovych@ksu.ks.ua\">sklymovych@ksu.ks.ua</a> <a" +
                        " href=\"tel:+380506886340\">+380506886340</a></p><p>Ревенюк" +
                        " Марина Віталіївна - Старша лаборантка кафедри</p><p><a href=\"mailto:mrevenuk@ksu.ks.ua\">mrevenuk@ksu.ks.ua</a> <a" +
                        " href=\"tel:+380957079574\">+380957079574</a></p>"
                }]
        },
        {
            "title": "Факультет фізичного виховання та спорту",

            'img':"assets/logos/sport.png",
            "blocks": [{
                "front": "Факультет фізичного виховання та спорту",
                "back": "<p>Глухов Іван Геннадійович</p><p><a href=\"mailto:igluhov@ksu.ks.ua\">igluhov@ksu.ks.ua</a> <a" +
                    " href=\"tel:+380505387397\">+380505387397</a> <a" +
                    " href=\"https://www.facebook.com/profile.php?id=100057456489008\">https://www.facebook.com/profile.php?id=100057456489008\</a></p><p>Воліченко Ірина Володимирівна</p><p><a" +
                    " href=\"mailto:ivolichenko@ksu.ks.ua\">ivolichenko@ksu.ks.ua</a> <a href=\"tel:+380994832697\">+380994832697</a></p>"
            },
                {
                    "front": "Кафедра медико-біологічних основ фізичного виховання та спорту",
                    "back": "<p>Голяка Сергій Кіндратович, завідувач кафедри</p><p><a href=\"mailto:golyaka@ksu.ks.ua\">golyaka@ksu.ks.ua</a> <br/><a" +
                        " href=\"tel:+380996249118\">+380996249118</a> <br/><a" +
                        " href=\"https://www.kspu.edu/About/Faculty/FPhysicalEduSport/Medbiol.aspx\">https://www.kspu.edu/About/Faculty/FPhysicalEduSport/Medbiol.aspx\</a></p>"
                },
                {
                    "front": "Кафедра теорії та методики фізичного виховання",
                    "back": "<p>Грабовський Юрій Антонович</p><p> <a href=\"mailto:turik@ksu.ks.ua\">turik@ksu.ks.ua</a><br/> <a" +
                        " href=\"tel:+380504940696\">+380504940696</a><br/><a href=\"https://www.facebook.com/profile.php?id=61559715098419\">https://www.facebook.com/profile.php?id=61559715098419\</a></p>"
                },
                {
                    "front": "Кафедра олімпійського та професійного спорту",
                    "back": "<p>Дробот Катерина Володимирівна<br/><a href=\"mailto:kdrobot@ksu.ks.ua\">kdrobot@ksu.ks.ua</a><br/> <a" +
                        " href=\"tel:+380500761279\">+380500761279</a><br/><a href=\"https://www.facebook.com/profile.php?id=61558696216981\">https://www.facebook.com/profile.php?id=61558696216981\</a></p>"
                }]
        }
    ]
