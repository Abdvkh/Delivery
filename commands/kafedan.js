/*CMD
  command: kafedan
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

//waits for an answer
//from the cafes
lang = Libs.Lang.get();
keyboard = '';
opt = { 
    purchases: [],
    amount: [],
    price: [],
    basket: function () {
        if ( !this.msg ){ this.msg =  'Ваш заказ из кафе *Everest Burger*:' };
        if( !this.sum ){ this.sum = 0 };
        for (var i = 0; i < this.purchases.length; i++ ){
        this.msg += '\n*' + this.purchases[i] + '*\n' +
        '\n' + this.amount[i] + 'x' + this.price[i] +
        ' = ' + this.amount[i] * this.price[i];
        this.sum += this.amount[i] * this.price[i];
        return msg, sum;
        };
    }
};


if ( message == 'Everest Burger') {
    opt.code = 'eb' 
    };

User.setProperty( 'curOrder', opt, 'Object' );

types = Object.getOwnPropertyNames( lang.eb.menu );
for ( var i = 0; i < types.length; i++ ){
    keyboard += types[i] ;
    if (i % 2 == 0 ){
            keyboard += '\n' ;
        };
};

keyboard += lang.translations.mainmenu ;

Bot.sendKeyboard( keyboard, lang.eb.text );
Bot.runCommand('choice');
