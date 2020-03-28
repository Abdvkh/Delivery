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
   added: "Narsangiz savatga solindi!",
   admin: {
      text: "Korxona adminksiga xish kelibsiz",
      buttons: ["Kategoriya yaratish", 'Narsalar qushish', "Narsa uchirish", "Statistika"]
   },
   amount: "1,2,3\n, 4,5,6\n, 7,8,9",
   basketlist: "Savatingizdagi narsalar:\n\n",
   bots_stat: 'Botning statistikasi',
   cafe: {
      text: "Kafedan yetkazib berish xizmatiga xush kelibsiz!",
      cafes: ["Everest Burger"],
   },
   categAdded: 'Kategoriya qushildi',
   categExists: "Bunaqa kategoriya mavjud!",
   choice: "Menyudan biror nima tanlab oling:",
   choose: "Qaysi biridan yetkazib beriladi?",
   delivery: "Yetkazib berish narxi - ",//COST MUST BE WRITTEN
   error: "Raqamingizni formatga to'g'irlab jo'nating!",
   exclamation_error: "'!' belgisi quyilmagan, iltimos to`girlang!",
   hello: "Assalomu aleykum *" ,
   in_dev: "Rivojlanishda...",
   itemsToCategAdded: "Kategoriyaga!{narsalar} qushildi",
   location: {
      button: "Mening joylashuvim",
      text:"Iltimos yetkazib berish manzilini quyidagi rasmda ko`rsatilganidek jo`nating, yoki yozuv shaklida qoldiring!",
   },
   mainmenu_but: ["Buyurtma berish", "Savatni ko`rish", "Mening profilim", "Yordam", "Sozlanma"],
   number: "Iltimos telefon raqamingizni kiriting, bu bizga siz bilan aloqaga chiqishga kerak bo'ladi! \nMisol: +998901234567",
   order: "Buyurtma berish",
   org_limit:'Siz korxonangiz limiti tugagan, kopaytirish uchun adminga[@Abduvakhidov] murojat qiling!',
   payment:{
      text: "To`lov turini tanglang!",
      but: "Naqd,\nClick,Payme"
   },
   success: "Raqamingiz muvaffaqiyatli qabul qilindi! Raqam: \n",
   super_admin: {
      text: "Adminkaga xush kelibsiz",
      buttons: ["Til urnatish", "Korxona yaratish", "Statistika"]
   },
   thanks: "Rahmat! Sizning buyurtmangiz qabul qilindi! Buyurtmani tasdiqlash uchun operator qo`ng'iroqini kuting. \nBuyurtma raqamingiz: ",
   translations: {
      again: "Yana biror nima qo`shmoqchimisiz?",
      agr: "Xa",
      back: "Ortga",
      basket: "Savat",
      disagr: "Yoq",
      cancel: "Bekor qilish",
      clean: "Tozalash",
      confirm: "Tasdiqlash",
      mainmenu: "Asosiy menyu",
      lang: "Til"
   },
   type: {
      but: ["Kafedan","Magazindan","Boshqa joydan"],
      commands: ["cafe", "shop", "others"],
      text: "Qayerdan yetkazib beriladi?",
   },
};

let ruLang = {
   added: "Добавлено в корзину!",
   admin: {
      buttons: ["Добавить категорию", 'Добавить продукты', "Удалить продукт", "Статистика"],
      text: "Добро пожаловать в админку организации",
   },
   amount: "1,2,3\n, 4,5,6\n, 7,8,9",
   basketlist: "Корзина:\n\n",
   bots_stat: "Статистика по боту",
   cafe: {
      cafes: ["Everest Burger"],
      text: "Добро пожаловать в доставку из кафе!",
   },
   categAdded: "Категория добавлена",
   categExists: 'Такая категория уже существует!',
   choice: "Выберите категорию",
   choose: "Выберите организацию откуда производится доставка.",
   delivery: "Стоимость доставки - ",//COST MUST BE WRITTEN
   error: "Перепроверьте и отправьте свой номер заново!",
   exclamation_error: "Не введен '!' знак между категорией и продуктами, пожалуйста исправьте!",
   hello: "Здравствуйте *",
   in_dev: "В разработке...",
   itemsToCategAdded: "В Категорию!{Добавлены продукты}",
   location: {
      text: "Пожалуста отправьте вашу геолокация, как показано на данном рисунке, или просто напишите адрес куда осуществляется доставка!",
      button: "Моё местоположение"
   },
   mainmenu_but: ["Заказать", "Корзина", "Мой профиль", "Помощь", "Настройки"],
   number: "Пожалуйстa, наберите ваш номер тлефона, это необходимо для дальнейшей связи с вами! \nПример: `+998901234567`",
   order: "Доставить",
   org_limit: "Вы достигли выделенного лимита! Пожалуйста обратитесь в администрацию за повышением лимита @Abduvakhidov",
   payment: {
      but: "Наличка,\nClick,Payme",
      text: "Выберите вид оплаты",
   },
   success: "Ваш номер был успешно получен! \nНомер: ",
   super_admin: {
      buttons: ["Установить язык", "Создать организацию", "Статистика"],
      text: "Добро пожаловать в админку",
   },
   thanks: "Спасибо! Ваша заявка принята, ждите звонка оператора!\n Номер заказа: ",
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
   type: {
      text: " Откуда доставляем?",
      but: ["Кафе","Магазин","Другое"],
      commands: ["cafe", "shop", "others"]
   },
};

let level = User.getGroup();

if(level == "Boss"){
   Libs.Lang.setup("uz", uzLang);
   Libs.Lang.setup("ru", ruLang);

   Bot.sendMessage("Languages are successfully set!");
   Bot.runCommand("admin");
}
