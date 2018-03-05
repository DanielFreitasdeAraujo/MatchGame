var contodd = 0;
var contdois = 0;
var conttres = 0;
var contum = 0;
var contquatro = 0;

$(document).ready(function() {

    $('.um').click(function(){
      if(contum < 1000){
      contum++

      if (contum % 2 == 0){
        /*$(this).css('color','darkblue')*/
        contodd=contodd-1
      }
      else{$(this).css('color','white')
          contodd++};
      }
    });
});

$(document).ready(function() {
    $('.dois').click(function(){
      if(contdois < 1000){
      contdois++
      if (contdois % 2 == 0){
        /*$(this).css('color','darkblue')*/
        contodd=contodd-1
      }
      else{$(this).css('color','white')
          contodd++};
        }
      ;
    });
});

$(document).ready(function() {
    $('.tres').click(function(){
      if(conttres < 1000){
      conttres++
      if (conttres % 2 == 0){
        /*$(this).css('color','darkblue')*/
        contodd=contodd-1
      }
      else{$(this).css('color','white')
          contodd++};
      }
    });
});


$(document).ready(function() {
    $('.quatro').click(function(){
      if(contquatro < 1000){
        contquatro++
        if (contquatro % 2 == 0){
          /*$(this).css('color','darkblue')*/
          contodd=contodd-1
        }
        else{$(this).css('color','white')
            contodd++};
      }
    });
});


$(document).ready(function() {
    $('.card span').click(function(){
      /*if($(this).('span').css('background-color')!="rgb(85,85,85)"){*/

        if(contodd >1){

          if(contum % 2 == 1 && contdois % 2 == 1){

            contum++;
            contdois++;
            setTimeout($('.um').css('color','darkblue'),2000);
            setTimeout($('.dois').css('color','darkblue'),2000);
            setTimeout(alert('erou!'),2000);
          };
          if(contum % 2 == 1 && contquatro % 2 == 1){

            contum++;
            contquatro++;
            $('.um').css('color','darkblue');
            $('.quatro').css('color','darkblue');
            alert('erou!');
          };
          if(contdois % 2 == 1 && conttres % 2 == 1){

            conttres++;
            contdois++;
            $('.tres').css('color','darkblue');
            $('.dois').css('color','darkblue');
            alert('erou!');
          };
          if(conttres % 2 == 1 && contquatro % 2 == 1){

            conttres++;
            contquatro++;
            $('.tres').css('color','darkblue');
            $('.quatro').css('color','darkblue');
            alert('erou!');
          };
          if(conttres % 2 == 1 && contum % 2 == 1){

            $('.tres').css('background-color','rgb(85,85,85)');
            $('.um').css('background-color','rgb(85,85,85)');
            $('.card1').css('background-color','rgb(85,85,85)');
            $('.card3').css('background-color','rgb(85,85,85)');
            contum = 1000;
            conttres = 1000;
            alert('acertou otario!');
          };
          if(contdois % 2 == 1 && contquatro % 2 == 1){

            $('.dois').css('background-color','rgb(85,85,85)');
            $('.quatro').css('background-color','rgb(85,85,85)');
            $('.card2').css('background-color','rgb(85,85,85)');
            $('.card4').css('background-color','rgb(85,85,85)');
            contdois = 1000;
            contquatro = 1000;
            alert('acertou otario!');

          };
          if(contum == 1000 && contdois == 1000 && conttres == 1000 && contquatro == 1000){
            alert('GANHOU OTARIO!');
            contodd = 1;
          };


          /*alert(contum % 2);
          alert(contodd);
          /*alert(contodd);*/

        };
      /*};*/

    });
});
