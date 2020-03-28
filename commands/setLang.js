/*CMD
  command: setLang
  help:
  need_reply:
  auto_retry_time:
  folder:
  answer:
  keyboard: Установить язык, \nСоздать организацию, \nСтатистика, Главное меню
  aliases: Установить язык
CMD*/

let uzLang = {
   bots_stat: 'Botning statistikasi',
   choice: "Menyudan biror nima tanlab oling:",
   choose: "Qaysi biridan yetkazib beriladi?",
   org_limit:'Siz korxonangiz limiti tugagan, kopaytirish uchun adminga[@Abduvakhidov] murojat qiling!',
   translations: {
      again: "Yana biror nima qo`shmoqchimisiz?",
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
   super_admin: {
     text: "Adminkaga xush kelibsiz",
     buttons: ["Til urnatish", "Korxona yaratish", "Statistika"]
   },
   admin: {
     text: "Korxona adminksiga xish kelibsiz",
     buttons: ["Kategoriya yaratish", 'Narsalar qushish', "Narsa uchirish", "Statistika"]
   },
    mainmenu_but: ["Buyurtma berish", "Savatni ko`rish", "Mening profilim", "Yordam", "Sozlanma"],
    hello: "Assalomu aleykum *" ,
    number: "Iltimos telefon raqamingizni kiriting, bu bizga siz bilan aloqaga chiqishga kerak bo'ladi! \nMisol: +998901234567",
    error: "Raqamingizni formatga to'g'irlab jo'nating!",
    success: "Raqamingiz muvaffaqiyatli qabul qilindi! Raqam: \n",
   type: {
      text: "Qayerdan yetkazib beriladi?",
      but: ["Kafedan","Magazindan","Boshqa joydan"],
      commands: ["cafe", "shop", "others"]
   },
    in_dev: "Rivojlanishda...",
    cafe: {
        text: "Kafedan yetkazib berish xizmatiga xush kelibsiz!",
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
    thanks: "Rahmat! Sizning buyurtmangiz qabul qilindi! Buyurtmani tasdiqlash uchun operator qo`ng'iroqini kuting. \nBuyurtma raqamingiz: "
};

let ruLang = {
   bots_stat: "Статистика по боту",
   translations: {
      again: "Еще чего нибудь желаете?",
      agr: "Да",
      back: "Назад",
      basket: "Корзина",
      cancel: "Отменить",
      choice: "Выберите продукты из меню",
      clean: "Очистить",
      confirm: "Подтвердить",
      disagr: "Нет",
      lang: "Язык",
      mainmenu: "Главное меню",
   },
   super_admin: {
   text: "Добро пожаловать в админку",
   buttons: ["Установить язык", "Создать организацию", "Статистика"]
   },
   admin: {
   text: "Добро пожаловать в админку организации",
   buttons: ["Добавить категорию", 'Добавить продукты', "Удалить продукт", "Статистика"]
   },
    org_limit: "Вы достигли выделенного лимита! Пожалуйста обратитесь в администрацию за повышением лимита @Abduvakhidov",
    choice: "Выберите категорию",
    choose: "Выберите организацию откуда производится доставка.",
    mainmenu_but: ["Заказать", "Корзина", "Мой профиль", "Помощь", "Настройки"],
    hello: "Здравствуйте *",
    number: "Пожалуйстa, наберите ваш номер тлефона, это необходимо для дальнейшей связи с вами! \nПример: `+998901234567`",
    error: "Перепроверьте и отправьте свой номер заново!",
    success: "Ваш номер был успешно получен! \nНомер: ",
   type: {
      text: " Откуда доставляем?",
      but: ["Кафе","Магазин","Другое"],
      commands: ["cafe", "shop", "others"]
   },
    in_dev: "В разработке...",
    cafe: {
        text: "Добро пожаловать в доставку из кафе!",
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

let level = User.getGroup();

if(level == "Boss"){
Libs.Lang.setup("uz", uzLang);
Libs.Lang.setup("ru", ruLang);

Bot.sendMessage("Languages are successfully set!");
Bot.runCommand("admin");
}
