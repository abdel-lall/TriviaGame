$( document ).ready(function() {

    var question1 ={
        q : "Which US agency is tasked with investigating federal crimes?",
        guesses :{
            g1 : "CIA",
            g2 : "DHS" ,
            g3 : "NSA" ,
            g4 : "FBI" ,
        },
        answer : "FBI"
    }
    var question2 ={
        q : "What is the correct spelling of a word describing something that is free from blemishes or stains?",
        guesses :{
            g1 : "immacculate",
            g2 : "immaculate" ,
            g3 : "imaculate" ,
            g4 : "imaccualte" ,
        },
        answer : "immaculate",
    }
    var question3 ={
        q : "The cross between a lion and a tiger is called ?",
        guesses :{
            g1 : "Gerli",
            g2 : "Striped mountain cat" ,
            g3 : "No such animal exists" ,
            g4 : "Liger" ,
        },
        answer : "Liger",
    }
    var question4 ={
        q : "More people are killed in Africa evey year by........ than any other animal?",
        guesses :{
            g1 : "Crocodiles",
            g2 : "Lions" ,
            g3 : "Buffalo" ,
            g4 : "Hippos" ,
        },
        answer : "Hippos",
    }
    var question5 ={
        q : "What is the name of the island prison where, Nelson Mandela was imprisioned?",
        guesses :{
            g1 : "Seal Island",
            g2 : "Penal Colony Island" ,
            g3 : "Rikers Island" ,
            g4 : "Robben Island" ,
        },
        answer : "Robben Island",
    }
    var question6 ={
        q : "In which country is the Kruger National Park?",
        guesses :{
            g1 : "Australia",
            g2 : "Botswana" ,
            g3 : "South Africa" ,
            g4 : "Zimbabwe" ,
        },
        answer : "South Africa",
    }
    var question7 ={
        q : "What is glass mainly made up of?",
        guesses :{
            g1 : "Crystals",
            g2 : "Highly compressed water" ,
            g3 : "Sand" ,
            g4 : "Plutonium" ,
        },
        answer : "Sand",
    }
    var question8 ={
        q : "Diamonds are made from highly compressed?",
        guesses :{
            g1 : "Emeralds",
            g2 : "Coal" ,
            g3 : "Crystals" ,
            g4 : "Mud" ,
        },
        answer : "Coal",
    }
    
    
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unanswerd = 0 ;
    var questionNumber = 1;
    var timeUp = false;
    var counter = 15;
    var timer;
    var timerRun =false;

    $(".start").click(function(){  
        
        // after clicking start show line under start button
      $(".start").after("<img src=assets/images/line.png id=lineb >")
      $("#lineb").hide();
      $("#lineb").show("slide");
      // hiding start button
      setTimeout(function(){  
        $("#lineb").remove();
        $(".start").hide();
        $("#messagesr").hide();
        }, 800);
      
        setTimeout(function(){insertQuestion(questionNumber);}, 800);
        showTimer();

  
    });
   
        // guessing the answer
    $("#guess1").click(function(){
            $("#guess1 > div > span").after("<img src= assets/images/line.png id= line />")
            $("#line").hide();
            $("#line").width($("#gs1").width());
            $("#line").show("slide");
            setTimeout(function(){$("#lineb").remove();}, 800);
            var gues =1;
            timeUp = false;
            setTimeout(function(){
            checkAnswer(questionNumber, gues, timeUp);
             questionNumber++;
             stop();
           
            setTimeout(function(){
            if (questionNumber !== 9){
            insertQuestion(questionNumber);
            counter = 15;
            showTimer(); 
            }else{
                reset();
            }
            }, 1500);
            }, 800);        
    });
    $("#guess2").click(function(){
        $("#guess2 > div > span").after("<img src= assets/images/line.png id= line />")
        $("#line").hide();
        $("#line").width($("#gs2").width());
        $("#line").show("slide");
        setTimeout(function(){$("#lineb").remove();}, 800);
        var gues =2;
        timeUp = false;
        setTimeout(function(){
        checkAnswer(questionNumber, gues, timeUp);
         questionNumber++;
         stop();
       
        setTimeout(function(){
        if (questionNumber !== 9){
        insertQuestion(questionNumber);
        counter = 15;
        showTimer(); 
        }else{
            reset();
        }
        }, 1500);
        }, 800);        
    });
    $("#guess3").click(function(){
        $("#guess3 > div > span").after("<img src= assets/images/line.png id= line />")
        $("#line").hide();
        $("#line").width($("#gs3").width());
        $("#line").show("slide");
        setTimeout(function(){$("#lineb").remove();}, 800);
        var gues =3;
        timeUp = false;
        setTimeout(function(){
        checkAnswer(questionNumber, gues, timeUp);
         questionNumber++;
         stop();
       
        setTimeout(function(){
        if (questionNumber !== 9){
        insertQuestion(questionNumber);
        counter = 15;
        showTimer(); 
        }else{
            reset();
        }
        }, 1500);
        }, 800);        
    });
    $("#guess4").click(function(){
        $("#guess4 > div > span").after("<img src= assets/images/line.png id= line />")
        $("#line").hide();
        $("#line").width($("#gs4").width());
        $("#line").show("slide");
        setTimeout(function(){$("#lineb").remove();}, 800);
        var gues =4;
        timeUp = false;
        setTimeout(function(){
        checkAnswer(questionNumber, gues, timeUp);
         questionNumber++;
         stop();
       
        setTimeout(function(){
        if (questionNumber !== 9){
        insertQuestion(questionNumber);
        counter = 15;
        showTimer(); 
        }else{
            reset();
        }
        }, 1500);
        }, 800);        
});
    

    
    function insertQuestion(n){
        var question = "";
        var gu1 = "";
        var gu2 = "";
        var gu3 = "";
        var gu4 = "";
        if (n == 1){
            question = question1.q;
            gu1 = question1.guesses.g1 ;
            gu2 = question1.guesses.g2 ;
            gu3 = question1.guesses.g3 ;
            gu4 = question1.guesses.g4 ;
        }
        if (n == 2){
            question = question2.q;
            gu1 = question2.guesses.g1 ;
            gu2 = question2.guesses.g2 ;
            gu3 = question2.guesses.g3 ;
            gu4 = question2.guesses.g4 ;
        }
        if (n == 3){
            question = question3.q;
            gu1 = question3.guesses.g1 ;
            gu2 = question3.guesses.g2 ;
            gu3 = question3.guesses.g3 ;
            gu4 = question3.guesses.g4 ;
        }
        if (n == 4){
            question = question4.q;
            gu1 = question4.guesses.g1 ;
            gu2 = question4.guesses.g2 ;
            gu3 = question4.guesses.g3 ;
            gu4 = question4.guesses.g4 ;
        }
        if (n == 5){
            question = question5.q;
            gu1 = question5.guesses.g1 ;
            gu2 = question5.guesses.g2 ;
            gu3 = question5.guesses.g3 ;
            gu4 = question5.guesses.g4 ;
        }
        if (n == 6){
            question = question6.q;
            gu1 = question6.guesses.g1 ;
            gu2 = question6.guesses.g2 ;
            gu3 = question6.guesses.g3 ;
            gu4 = question6.guesses.g4 ;
        }
        if (n == 7){
            question = question7.q;
            gu1 = question7.guesses.g1 ;
            gu2 = question7.guesses.g2 ;
            gu3 = question7.guesses.g3 ;
            gu4 = question7.guesses.g4 ;
        }
        if (n == 8){
            question = question8.q;
            gu1 = question8.guesses.g1 ;
            gu2 = question8.guesses.g2 ;
            gu3 = question8.guesses.g3 ;
            gu4 = question8.guesses.g4 ;
        }
        

        $("#question").html("<p>"+question+"</p>");
        $("#guess1").html("<div class= col guess ><span id= gs1>"+gu1+"</span></div>");  
        $("#guess2").html("<div class= col guess ><span id= gs2>"+gu2+"</span></div>");
        $("#guess3").html("<div class= col guess ><span id= gs3>"+gu3+"</span></div>");
        $("#guess4").html("<div class= col guess ><span id= gs4>"+gu4+"</span></div>");
    }
    function checkAnswer(q,g,t){
        
        
        $("#question").empty();
        $("#guess1").empty();
        $("#guess2").empty();
        $("#guess3").empty();
        $("#guess4").empty();
        if(q == 1){
          var  question = question1;
        }
        if(q == 2){
           var question = question2;
        }
        if(q == 3){
          var  question = question3;
        }
        if(q == 4){
           var question = question4;
        }
        if(q == 5){
           var question = question5;
        }
        if(q == 6){
           var question = question6;
        }
        if(q == 7){
          var  question = question7;
        }
        if(q == 8){
           var question = question8;
        }
        if(g == 1){
           var guess = question.guesses.g1
        }
        if(g == 2){
           var guess = question.guesses.g2
        }
        if(g == 3){
           var guess = question.guesses.g3
        }
        if(g == 4){
           var guess = question.guesses.g4
        }
        console.log(question.answer);
        console.log(guess);
        if(guess == question.answer){
            $("#messagesr").show();
            $("#messagesr").html("<p id=answer >Correct Answer !</p>");
            if(questionNumber < 9){
            correctAnswers++;}
            setTimeout(function(){$("#messagesr").empty()},1500)
        }
        if(t){
            $("#messagesr").show();
            $("#messagesr").html("<p id=answer >Time out ! <br> correct answer :"+question.answer+"</p>");
            if(questionNumber < 9){
            unanswerd++;}
            setTimeout(function(){$("#messagesr").empty()},1500)
        }
        if(guess !== question.answer && t == false){
            $("#messagesr").show();
            $("#messagesr").html("<p id=answer >Wrong Answer ! <br> correct answer :"+question.answer+"</p>");
            if(questionNumber < 9){
            wrongAnswers++;}
            setTimeout(function(){$("#messagesr").empty()},1500)
        }

    }
    function showTimer(){
        if (timerRun == false) {
        counter = 15 ;
        timer = setInterval(decrement, 1000); 
        timerRun = true;
        }
    }
    function decrement() {
        
        counter--;
        $("#counter").text(counter);
        if (counter == 0) {
           
            setTimeout(function(){
                
                
                 
                 timeUp = true;
                 stop();
                 var gues = 0;
                 checkAnswer(questionNumber, gues, timeUp);
                 questionNumber++;
                 console.log(questionNumber);
                setTimeout(function(){
                if(questionNumber !== 9){
                insertQuestion(questionNumber);
                counter = 15;
                showTimer(); 
                
                }
                if(questionNumber == 9){
                    reset();
                
                }
                }, 1500);
                }, 800);
           
        }	
    }
    function stop() {
        timerRun = false;
        clearInterval(timer);
    }
    function reset(){
        if (questionNumber == 9){
            $("#messagesr").hide();
            $("#messagesr").html("<div class= col id = final resault><p id= finalres >Final Score <br> Correct anwsers :"+correctAnswers+"<br> Wrong answers :"+wrongAnswers+"<br> Unanwsered questions :"+unanswerd+"<br></p><p id= resbtn >Click here to play again</p></div>");
            $("#resbtn").attr("class","reset");
            $("#messagesr").show();
           questionNumber = 1;
           correctAnswers = 0;
           wrongAnswers = 0;
           unanswerd = 0 ;
            $(".reset").click(function(){
                console.log('clicked');
                $("#resbtn").after("<img src=assets/images/line.png id=lineb >")
              $("#lineb").hide();
              $("#lineb").show("slide");
              
              setTimeout(function(){  
                $("#lineb").remove();
                $("#messagesr").hide();
                }, 800);
                
        
                setTimeout(function(){insertQuestion(questionNumber);}, 800);
                showTimer();
        
            });
        }
    }

});