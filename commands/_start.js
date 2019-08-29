/*CMD
  command: /start
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 🇷🇺Выберите язык | 🇺🇿Til tanlang
  keyboard: 🇷🇺Русский, 🇺🇿O'zbekcha
  aliases: 
CMD*/

uzLang = {
    translations: {
        basket: 'Savat',
        clean: 'Tozalash',
        back: 'Ortga',
        mainmenu: 'Asosiy menyu',
        confirm: 'Tasdiqlash',
        cancel: 'Bekor qilish'
    },
    hello: "Assalomu aleykum *" ,
    number: "Iltimos telefon raqamingizni kiriting, bu bizga siz bilan aloqaga chiqishga kerak bo'ladi! \nMisol: +998901234567",
    error: "Raqamingizni formatga to`g'irlab jo`nating!",
    success: "Raqamingiz muvaffaqiyatli qabul qilindi! Raqam: \n",
    type: {
        text: 'Qayerdan dostavka qilinadi?',
        but: ['Kafedan','Magazindan','Boshqa joydan'],
    },
    in_dev: 'Rivojlanishda...',
    cafe: {
        text: 'Kafedan dostavkaga ho`sh kelibsiz!',
        choose: 'Qaysi kafedan dostavka qilinadi?',
        cafes: ['Everest Burger'],
    },
    eb: {
        text: 'Menyudan biror nima tanlab oling:',        
        menu: { 
            'Burgerlar': {
            'Чизбургер': 13000,
            'Биг бургер': 18000,
            'Биг чиз': 22000,
            'Chiken бургер': 10000,
            'Chiken чиз': 12000,
            'Chiken биг': 17000,
            'Chiken биг чиз': 23000,
            'Нон кабоб': 12000,
            'Нон кабоб +': 15000,
            "Гамбургер мини": 9000,
            'Гамбургер': 12000,
            'Гамбургер заказной': 15000
            },
            'Zakuskaga': {
            'Фри': 6000,
            'Куриный шарик': 13000,
            'Донар блюда': 22000,
            'Куриные ножки': 14000,
            'Куриные крылышки': 14000,
            'Клаб сендвич': 15000,
            'Хагги': 12000,
            'Хот дог': 4000,
            'Чиз дог': 6000,
            'Хот дог королевский':6000,
            'Фри сосиска': 10000,
            },
            "Salatlar": {
            'Греческий': 8000,
            'Греческий Куриный': 8000,
            },
            "Lavashlar": {
            'Лаваш мини':9000,
            'Лаваш': 12000,
            'Лаваш с сыром': 14000,
            'Лаваш заказной': 15000,
            'Лаваш острый': 12000,
            'Лаваш Everest': 20000,
            'Лаваш Куриный мини': 8000,
            'Лаваш Куриный':  11000,
            'Лаваш Куриный с сыром': 13000,
            'Лаваш Куриный заказной': 14000,
            'Лаваш Куриный Everest': 19000
            },
            "Tez yidigan": {
            'Самса с мясом': 4000,
            'Самса с курицей': 3500,
            'Самса с картошкой': 2000,
            'Блинчик с мясом': 4000,
            'Блинчик с творогом': 4000,
            'Пицца': 4000,
            },
            "Desertga": {
            'Фруктовый': 9000,
            'Симфония': 9000, 
            'Картошка': 4000,
            'При-чуда': 10000,
            'Сникерс': 9000,
            'Киевский': 9000,
            'Тотр Standart': 55000,
            'Тотр Shanti': 40000,
            "Тотр Snickers/Фруктовый эксклюзив": 79000,
            },
            "Ichimliklar": {
            'Кола, Фанта 1.5': 7500,
            'Кола, Фанта 1': 6500,
            'Кола, Фанта 0.5': 4500,
            'Пепси 1.5': 7000,
            'Пепси 1': 6000,
            'Пепси 0.5': 3500,
            'Fuse tea 0.5': 4000,
            'Hydrolife 1.5': 2500,
            'Hydrolife 1': 2000,
            'Red Bull': 11000,
            'Flash': 9000 
            },
            "Kokteylar": {
                'Кофейный': 4000,
                'Молочный': 4000,
                'Клубничный': 4000,
                'Банановый': 4000,
                'Шоколадный': 4000,
            },
            "Boshqa ichimliklar": {
                'Кофе молочный': 2000,
                'Кофе черный': 2000,
                'Чай с лимоном': 4000,
                'Чай фруктовый': 4000,
                'Чай': 1500,
                'Айс ти персик': 4000,
                'Айс ти яблоко': 4000,
                'Сок Вико 1л': 9000,
                'Сок Обычный': 7500,
                'Компот графин': 7000,
                'Компот стакан': 3500,
            },
        }
        
    },
    basketlist: 'Savatingizdagi narsalar:\n\n',
    added: 'Narsangiz savatga solindi!',
    order: 'Buyurtma berish',
    amount: '1,2,3\n, 4,5,6\n, 7,8,9',
    location: 'Iltimos yetkazib berish manzilini quyidagi rasmda ko`rsatilganidek jo`nating, yoki yozuv shaklida qoldiring!',
    payment:{
        text: 'To`lov turini tanglang!',
        but: 'Naqd,\nClick,Payme'
    },
    delivery: 'Yetkazib berish narxi - ',//COST MUST BE WRITTEN
    thanks: 'Rahmat! Sizning buyurtmangiz qabul qilindi! Buyurtmani tasdiqlash uchun operator qo`ng`iroqini kuting. \nBuyurtma raqamingiz: '
}
ruLang = { 
    translations: {
        basket: 'Корзина',
        clean: 'Очистить',
        back: 'Назад',
        mainmenu: 'Главное меню',
        confirm: 'Подтвердить',
        cancel: 'Отменить'
    },
    hello: "Здравствуйте *",
    number: "Пожалуйстa, наберите ваш номер тлефона, это необходимо для дальнейшей связи с вами! \nПример: +998901234567",
    error: "Перепроверьте и отправьте свой номер заново!",
    success: 'Ваш номер был успешно получен! \nНомер: ',
    type: {
        text: ' Откуда доставляем?',
        but: ['Кафе','Магазин','\nДругое'],
    },
    in_dev: 'В разработке...',
    cafe: {
        text: 'Добро пожаловать в доставку из кафе!',
        choose: 'Выберите кафе, откуда производится доставка.',
        cafes: 'Everest Burger'
    },
    eb: {
        text: 'Выберите продукты из меню:',
        menu: { 
            'Бургеры': {
            'Чизбургер': 13000,
            'Биг бургер': 18000,
            'Биг чиз': 22000,
            'Chiken бургер': 10000,
            'Chiken чиз': 12000,
            'Chiken биг': 17000,
            'Chiken биг чиз': 23000,
            'Нон кабоб': 12000,
            'Нон кабоб +': 15000,
            "Гамбургер мини": 9000,
            'Гамбургер': 12000,
            'Гамбургер заказной': 15000
            },
            'Закуски': {
            'Фри': 6000,
            'Куриный шарик': 13000,
            'Донар блюда': 22000,
            'Куриные ножки': 14000,
            'Куриные крылышки': 14000,
            'Клаб сендвич': 15000,
            'Хагги': 12000,
            'Хот дог': 4000,
            'Чиз дог': 6000,
            'Хот дог королевский':6000,
            'Фри сосиска': 10000,
            },
            "Салаты": {
            'Греческий': 8000,
            'Греческий Куриный': 8000,
            },
            "Лаваши": {
            'Лаваш мини':9000,
            'Лаваш': 12000,
            'Лаваш с сыром': 14000,
            'Лаваш заказной': 15000,
            'Лаваш острый': 12000,
            'Лаваш Everest': 20000,
            'Лаваш Куриный мини': 8000,
            'Лаваш Куриный':  11000,
            'Лаваш Куриный с сыром': 13000,
            'Лаваш Куриный заказной': 14000,
            'Лаваш Куриный Everest': 19000
            },
            "Быстрая пища": {
            'Самса с мясом': 4000,
            'Самса с курицей': 3500,
            'Самса с картошкой': 2000,
            'Блинчик с мясом': 4000,
            'Блинчик с творогом': 4000,
            'Пицца': 4000,
            },
            "Десерты": {
            'Фруктовый': 9000,
            'Симфония': 9000, 
            'Картошка': 4000,
            'При-чуда': 10000,
            'Сникерс': 9000,
            'Киевский': 9000,
            'Тотр Standart': 55000,
            'Тотр Shanti': 40000,
            "Тотр Snickers/Фруктовый эксклюзив": 79000,
            },
            "Безалкогольные напитки": {
            'Кола, Фанта 1.5': 7500,
            'Кола, Фанта 1': 6500,
            'Кола, Фанта 0.5': 4500,
            'Пепси 1.5': 7000,
            'Пепси 1': 6000,
            'Пепси 0.5': 3500,
            'Fuse tea 0.5': 4000,
            'Hydrolife 1.5': 2500,
            'Hydrolife 1': 2000,
            'Red Bull': 11000,
            'Flash': 9000 
            },
            "Коктейли": {
                'Кофейный': 4000,
                'Молочный': 4000,
                'Клубничный': 4000,
                'Банановый': 4000,
                'Шоколадный': 4000,
            },
            "Другие напитки": {
                'Кофе молочный': 2000,
                'Кофе черный': 2000,
                'Чай с лимоном': 4000,
                'Чай фруктовый': 4000,
                'Чай': 1500,
                'Айс ти персик': 4000,
                'Айс ти яблоко': 4000,
                'Сок Вико 1л': 9000,
                'Сок Обычный': 7500,
                'Компот графин': 7000,
                'Компот стакан': 3500,
            },
        }
    },
    basketlist: 'Корзина:\n\n',
    added: 'Добавлено в корзину!',
    order: 'Доставить',
    amount: '1,2,3\n, 4,5,6\n, 7,8,9',
    location: 'Пожалуста отправьте вашу геолокация, как показано на данном рисунке, или просто напишите адрес куда осуществляется доставка!',
    payment: {
        text: 'Выберите вид оплаты',
        but: 'Наличка,\nClick,Payme'
    },
    delivery: 'Стоимость доставки - ',//COST MUST BE WRITTEN
    thanks: 'Спасибо! Ваша заявка принята, ждите звонка оператора!\n Номер заказа: '
}

if ( message == "🇷🇺Русский") {
   
    Libs.Lang.setup("ru", ruLang);
    Libs.Lang.user.setLang("ru")

} else if ( message == "🇺🇿O'zbekcha") {
    
    Libs.Lang.setup("uz", uzLang);
    Libs.Lang.user.setLang("uz")
    
} else {
  
    Bot.sendMessage('Error')

};

lang = Libs.Lang.get();

Bot.sendMessage(Libs.Lang.get().hello + user.first_name + "*!");
Bot.sendKeyboard( lang.translations.back , Libs.Lang.get().number );
Bot.runCommand("number");
