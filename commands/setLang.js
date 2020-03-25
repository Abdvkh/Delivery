/*CMD
  command: setLang
  help:
  need_reply:
  auto_retry_time:
  folder:
  answer:
  keyboard: Установить язык, Создать организацию, Статистика
  aliases:
CMD*/

uzLang = {
    translations: {
        again: "Yana biror nima qo\'shmoqchimisiz?",
        agr: "Xa",
        disagr: "Yoq",
        basket: "Savat",
        clean: "Tozalash",
        back: "Ortga",
        mainmenu: "Asosiy menyu",
        confirm: "Tasdiqlash",
        cancel: "Bekor qilish",
        lang: "Til"
    },
    choice: "Menyudan biror nima tanlab oling:",
    mainmenu_but: ["Buyurtma berish", "Savatni ko\'rish", "Mening profilim", "Yordam", "Sozlanma"],
    hello: "Assalomu aleykum *" ,
    number: "Iltimos telefon raqamingizni kiriting, bu bizga siz bilan aloqaga chiqishga kerak bo\'ladi! \nMisol: +998901234567",
    error: "Raqamingizni formatga to\'g\'irlab jo\'nating!",
    success: "Raqamingiz muvaffaqiyatli qabul qilindi! Raqam: \n",
    type: {
        text: "Qayerdan yetkazib beriladi?",
        but: ["Kafedan","Magazindan","Boshqa joydan"],
    },
    in_dev: "Rivojlanishda...",
    cafe: {
        text: "Kafedan yetkazib berish xizmatiga xush kelibsiz!",
        choose: "Qaysi kafedan yetkazib beriladi?",
        cafes: ["Everest Burger"],
    },
    basketlist: "Savatingizdagi narsalar:\n\n",
    added: "Narsangiz savatga solindi!",
    order: "Buyurtma berish",
    amount: "1,2,3\n, 4,5,6\n, 7,8,9",
    location: {
        text:"Iltimos yetkazib berish manzilini quyidagi rasmda ko`rsatilganidek jo`nating, yoki yozuv shaklida qoldiring!",
        button: "Mening joylashuvim"
    },
    payment:{
        text: "To`lov turini tanglang!",
        but: "Naqd,\nClick,Payme"
    },
    delivery: "Yetkazib berish narxi - ",//COST MUST BE WRITTEN
    thanks: "Rahmat! Sizning buyurtmangiz qabul qilindi! Buyurtmani tasdiqlash uchun operator qo`ng`iroqini kuting. \nBuyurtma raqamingiz: "
};

ruLang = {
    translations: {
        again: "Еще чего нибудь желаете?",
        agr: "Да",
        disagr: "Нет",
        basket: "Корзина",
        clean: "Очистить",
        back: "Назад",
        mainmenu: "Главное меню",
        confirm: "Подтвердить",
        cancel: "Отменить",
        lang: "Язык",
        choice: "Выберите продукты из меню"
    },
    super_admin: {
      text: "Добро пожаловать в админку",
      buttons: ["Установить язык", "Создать организацию", "Статистика"]
    },
    admin: {
      text: "Добро пожаловать в админку организации",
      buttons: ["Новые продукты", "Удалить продукт", "Статистика"]
    },
    mainmenu_but: ["Заказать", "Корзина", "Мой профиль", "Помощь", "Настройки"],
    hello: "Здравствуйте *",
    number: "Пожалуйстa, наберите ваш номер тлефона, это необходимо для дальнейшей связи с вами! \nПример: `+998901234567`",
    error: "Перепроверьте и отправьте свой номер заново!",
    success: "Ваш номер был успешно получен! \nНомер: ",
    type: {
        text: " Откуда доставляем?",
        but: ["Кафе","Магазин","Другое"],
        commands: ["cafe, shop", "others"]
    },
    in_dev: "В разработке...",
    cafe: {
        text: "Добро пожаловать в доставку из кафе!",
        choose: "Выберите кафе, откуда производится доставка.",
        cafes: ["Everest Burger"],
    },
    basketlist: "Корзина:\n\n",
    added: "Добавлено в корзину!",
    order: "Доставить",
    amount: "1,2,3\n, 4,5,6\n, 7,8,9",
    location: {
        text: "Пожалуста отправьте вашу геолокация, как показано на данном рисунке, или просто напишите адрес куда осуществляется доставка!",
        button: "Моё местоположение"
    },
    payment: {
        text: "Выберите вид оплаты",
        but: "Наличка,\nClick,Payme",
    },
    delivery: "Стоимость доставки - ",//COST MUST BE WRITTEN
    thanks: "Спасибо! Ваша заявка принята, ждите звонка оператора!\n Номер заказа: ",
};

Libs.Lang.setup("uz", uzLang);
Libs.Lang.setup("ru", ruLang);

Bot.sendMessage("Languages are successfully set!");
Bot.runCommand("/admin");
