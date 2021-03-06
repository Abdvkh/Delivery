let LIB_PREFIX = 'my_lib_';

function backFunction(command, text, keyboards, message){
   let lang = Libs.Lang.get();
   let trn = lang.translations;

   if(message == trn.back){
      Bot.sendKeyboard(keyboards, text);
      Bot.runCommand(command);
   } else if(message == trn.mainmenu){
      Bot.runCommand('/menu');
   }
}

function backKeys(cmd, txt, keys){
   let back = {
      cmd: cmd,
      txt: txt,
      keys: keys
   };
   User.setProperty('back', back,'Object');
}

function makeKeyboard(array){
   let keyboard = '';
   let lang = Libs.Lang.get();

   for(i = 1; i <= array.length; i++){
      if (array.length==1) {
         keyboard += array[i-1];
      } else {
         keyboard += array[i-1] + ',' ;
      }
      if(i % 2 == 0){
         keyboard += '\n,';
      }
   }

   keyboard += '\n' + lang.translations.back + ',' + lang.translations.mainmenu ;
   return keyboard;
}

function returnBasket(){
   let details = User.getProperty('curOrder');

   if(details.msg == ''){ details.msg =  'Ваш заказ из кафе *Everest Burger*:' }
   if(details.sum == 0){ details.sum = 0 }

   for (var i = 0; i < details.purchases.length; i++){
      details.msg += '\n*' + details.purchases[i] + '*\n' + '\n' + details.amount[i] + 'x' + details.price[i] + ' = ' + details.amount[i] * details.price[i];
      details.sum += details.amount[i] * details.price[i];
   }

   User.setProperty('curOrder', details, 'Object');
}

function createOrganization(details){
   let orgs = Bot.getProperty('orgs');
   let new_org_info = {limits:{},products:{}};

   new_org_info.name = details[0];
   new_org_info.password = details[1];
   new_org_info.type = details[2];
   new_org_info.admin = details[3];
   new_org_info['limits']['categ'] = details[4];
   new_org_info['limits']['items'] = details[5];
   new_org_info.orders_recieved = 0;

   orgs.amount = parseInt(orgs.amount) + 1;

   orgs.orgs_info.push(new_org_info);
   Bot.setProperty('orgs', orgs, 'Object');
}

function passwordValid(password){
   let orgs = Bot.getProperty('orgs');

   for(i=0; i < parseInt(orgs.amount); i++){
      let org_password = orgs.orgs_info[i]['password'];

      if(password==org_password){return i;}
   }

   return -1;
}

function get_orgs_by_type(type){
   let orgs = Bot.getProperty('orgs');
   let type_orgs = [];

   for(i=0; i < parseInt(orgs.amount); i++){
      let org = orgs.orgs_info[i];

      if(org['type'] == type){
         type_orgs.push(org);
      }
   }
   return type_orgs;
}

function get_org_by_name(name){
   let orgs = Bot.getProperty('orgs');
   let orgs_info = orgs.orgs_info;
   let org = new Object();

   for(i=0; i < orgs_info.length; i++){
      let org = orgs_info[i];
      let org_name = org['name'];

      if(org_name == name){
         return org;
      }
   }
   return org;
}

function get_type_orgs_names(type){
   let type_orgs = get_orgs_by_type(type);
   let type_orgs_names = [];

   for(i=0; i < type_orgs.length; i++){
      let type_org = type_orgs[i];

      type_orgs_names.push(type_org['name']);
   }
   return type_orgs_names;
}

function getOrgById(id){
   let orgs = Bot.getProperty('orgs');
   if (id < parseInt(orgs.amount)) {
      return orgs.orgs_info[id];
   } else {
      return 0;
   }
}

function productsToObj(productsString) {
   let productsArr = productsString.split('!');
   let productsObj = new Object();

   for(i=1; i<=productsArr.length; i++){
      if(i%2 == 0){
         productsObj[productsArr[i-2]] = JSON.parse(productsArr[i-1]);
      }
   }
   return productsObj;
}

function isAdmin(id) {
   let orgs = Bot.getProperty('orgs');

   for (var i = 0; i < orgs.orgs_info.length; i++) {
      if (orgs.orgs_info[i]['admin'] == id) {
         return true;
      }
   }
   return false;
}

publish({
   back: backFunction,
   bKeys: backKeys,
   createOrg: createOrganization,
   get_org_by_name: get_org_by_name,
   get_orgs_by_type: get_orgs_by_type,
   get_type_orgs_names: get_type_orgs_names,
   getOrgById: getOrgById,
   isAdmin: isAdmin,
   pValid: passwordValid,
   productsToObj: productsToObj,
   rBasket: returnBasket,
   mKeys: makeKeyboard
});
