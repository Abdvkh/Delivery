let LIB_PREFIX = 'my_lib_';

function backFunction(command,text,keyboards){
    let trn = Libs.Lang.get().translations;
    if ( message == trn.back){
    Bot.sendKeyboard( keyboards , text );
    Bot.runCommand(command);
    } else if ( message == trn.mainmenu){
        Bot.runCommand('menu');
    };
};

publish({
back: backFunction
});

