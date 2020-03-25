let LIB_PREFIX = 'my_lib_';

function backFunction(command,text,keyboards,message){
    let trn = Libs.Lang.get().translations;
    if(message == trn.back){
        Bot.sendKeyboard( keyboards , text );
        Bot.runCommand(command);
    } else if(message == trn.mainmenu){
        Bot.runCommand('menu');
    };
};

function backKeys(cmd, txt, keys){
    let back = {
        cmd: cmd,
        txt: txt,
        keys: keys,
    };
    User.setProperty('back', back,'Object');
};

function makeKeyboard(array){
    let keyboard = '';
    let lang = Libs.Lang.get();

    for (let i = 1; i <= array.length; i++){

        keyboard += array[i-1] + ',' ;

        if ( i % 2 == 0 ){
            keyboard += '\n,';
        };
    };

    keyboard += '\n' + lang.translations.back + ',' + lang.translations.mainmenu ;
    return keyboard;
};

function returnBasket() {
    let details = User.getProperty('curOrder');

    if(details.msg == undefined){ details.msg =  'Ваш заказ из кафе *Everest Burger*:' };
    if(details.sum == undefined){ details.sum = 0 };

    for (var i = 0; i < details.purchases.length; i++ ){
        details.msg += '\n*' + details.purchases[i] + '*\n' + '\n' + details.amount[i] + 'x' + details.price[i] + ' = ' + details.amount[i] * details.price[i];
        details.sum += details.amount[i] * details.price[i];
    };

    User.setProperty('curOrder', details, 'Object');
};

function create_organization(details){
  let orgs = Bot.getProperty('orgs');
  let new_org_info = orgs.orgs_info[orgs.amount];

  new_org_info.name = details[0];
  new_org_info.password = details[1];
  new_org_info.type = details[2];
  new_org_info.admin = details[3];
  new_org_info.orders_recieved = 0;
  new_org_info.products = {};

  orgs.amount += 1;

  Bot.setProperty('orgs', orgs, 'Object');
};

function passwordValid(password){
  let orgs = Bot.getProperty('orgs');

  for(let i=0; i < orgs.amount; i++){
    let org_password = orgs.orgs_info[i]['password'];

    if(password==org_password){break;}
  }

  return i;
}

function get_orgs_by_type(type){
   let orgs = Bot.getProperty('orgs');
   let orgs_amount = orgs.amount;
   let type_orgs = [];

   for(i=0; i < orgs_amount; i++){
      let org = orgs.orgs_info[i];
      let org_type = org['type'];

      if(org_type==type){
         type_orgs.push(org);
      }
   }
   return type_orgs;
}

function get_org_by_name(name, type){
   let type_orgs = get_orgs_by_type(type);

   for(i=0; i < type_orgs.length; i++){
      let org = type_orgs[i];
      let org_name = org['name'];

      if(org_name == name){
         break;
      }

      return org;
   }
}

publish({
  cr_org: create_organization,
  get_cafe_by_name: get_cafe_by_name,
  get_cafes: get_cafes,
  pValid: passwordValid,
  back: backFunction,
  bKeys: backKeys,
  mKeys: makeKeyboard,
  rBasket: returnBasket,
});
