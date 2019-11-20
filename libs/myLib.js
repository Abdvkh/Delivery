let LIB_PREFIX = 'my_lib_';

function backFunction(command,text,keyboards,message){
    let trn = Libs.Lang.get().translations;
    if ( message == trn.back){
        Bot.sendKeyboard( keyboards , text );
        Bot.runCommand(command);
    } else if ( message == trn.mainmenu){
        Bot.runCommand('menu');
    };
};

function backKeys(cmd, txt, keys){
    back = {
        cmd: cmd,
        txt: txt,
        keys: keys,
    };
    User.setProperty('back',back,'Object');
};

function makeKeyboard(array){
    keyboard = '';

    for (var i = 0; i < array.length; i++){
        
        keyboard += array[i] + ',' ;
        
        if ( i % 2 == 0 ){
            keyboard += '\n,';
        };
    };
    
    keyboard += '\n' + lang.translations.back + ',' + lang.translations.mainmenu ;
    return keyboard;
};

function returnBasket(details) {
    if ( !details.msg ){ details.msg =  'Ваш заказ из кафе *Everest Burger*:' };
    if( !details.sum ){ details.sum = 0 };
    for (var i = 0; i < details.purchases.length; i++ ){
    details.msg += '\n*' + details.purchases[i] + '*\n' +
    '\n' + details.amount[i] + 'x' + details.price[i] +
    ' = ' + details.amount[i] * details.price[i];
    details.sum += details.amount[i] * details.price[i];
    return msg, sum;
    };
};

publish({
back: backFunction,
bKeys: backKeys,
mKeys: makeKeyboard,
rBasket: returnBasket,
});

