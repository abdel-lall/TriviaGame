$(document).ready(function() {
  var correctAnswers = 0;
  var wrongAnswers = 0;
  var unanswerd = 0;
  var questionNumber = 0;
  var timeUp = false;
  var counter = 15;
  var timer;
  var timerRun = false;
  var clicked = false;
  var questions;
  $.ajax({
    url: "https://opentdb.com/api.php?amount=8&difficulty=medium&type=multiple"
  }).then(function(res) {
    questions = res.results;
    $(".start").click(function() {
      // after clicking start show line under start button
      $(".start").after("<img src=assets/images/line.png id=lineb >");
      $("#lineb").hide();
      $("#lineb").show("slide");
      // hiding start button
      setTimeout(function() {
        $("#lineb").remove();
        $(".start").hide();
        $("#messagesr").hide();
      }, 800);

      setTimeout(function() {
        insertQuestion(questionNumber);
      }, 800);
      showTimer();
    });

    $(".guesses").click(function(e) {
      e.preventDefault();
      if (!clicked) {
        clicked = true;

        $($(this).find("span")).after(
          "<img src= assets/images/line.png id= 'line' />"
        );
        $("#line").hide();
        $("#line").width($($(this).find("span")).width());
        $("#line").show("slide");
        setTimeout(function() {
          $("#lineb").remove();
        }, 800);
        var gues = $($(this).find("span")).text();
        timeUp = false;
        setTimeout(function() {
          checkAnswer(questionNumber, gues, timeUp);
          questionNumber++;
          stop();

          setTimeout(function() {
            if (questionNumber !== 8) {
              insertQuestion(questionNumber);
              counter = 15;
              showTimer();
            } else {
              reset();
            }
            clicked = false;
          }, 2000);
        }, 800);
      }
    });
    function insertQuestion(n) {
      var choices = questions[n].incorrect_answers;
      choices.push(questions[n].correct_answer);
      var allChoises = shuffle(choices);
      var question = questions[n].question;
      var gu1 = allChoises[0];
      var gu2 = allChoises[1];
      var gu3 = allChoises[2];
      var gu4 = allChoises[3];

      $("#question").html("<p>" + question + "</p>");
      $("#guess1").html(
        "<div class= 'col guess' ><span class= gs>" + gu1 + "</span></div>"
      );
      $("#guess2").html(
        "<div class= 'col guess' ><span class= gs>" + gu2 + "</span></div>"
      );
      $("#guess3").html(
        "<div class= 'col guess' ><span class= gs>" + gu3 + "</span></div>"
      );
      $("#guess4").html(
        "<div class= 'col guess' ><span class= gs>" + gu4 + "</span></div>"
      );
    }
    function checkAnswer(q, g, t) {
      $("#question").empty();
      $("#guess1").empty();
      $("#guess2").empty();
      $("#guess3").empty();
      $("#guess4").empty();
      var question = questions[q];
      var guess = g;

      if (guess == question.correct_answer) {
        $("#messagesr").show();
        $("#messagesr").html("<p id=answer >Correct Answer !</p>");
        if (questionNumber < 8) {
          correctAnswers++;
        }
        setTimeout(function() {
          $("#messagesr").empty();
        }, 2000);
      }
      if (t) {
        $("#messagesr").show();
        $("#messagesr").html(
          "<p id=answer >Time out ! <br> correct answer :" +
            question.correct_answer +
            "</p>"
        );
        if (questionNumber < 8) {
          unanswerd++;
        }
        setTimeout(function() {
          $("#messagesr").empty();
        }, 2000);
      }
      if (guess !== question.correct_answer && t == false) {
        $("#messagesr").show();
        $("#messagesr").html(
          "<p id=answer >Wrong Answer ! <br> correct answer :" +
            question.correct_answer +
            "</p>"
        );
        if (questionNumber < 8) {
          wrongAnswers++;
        }
        setTimeout(function() {
          $("#messagesr").empty();
        }, 2000);
      }
    }
    function showTimer() {
      if (timerRun == false) {
        counter = 15;
        timer = setInterval(decrement, 1000);
        timerRun = true;
      }
    }
    function decrement() {
      counter--;
      $("#counter").text(counter);
      if (counter == 0) {
        setTimeout(function() {
          timeUp = true;
          stop();
          var gues = 0;
          checkAnswer(questionNumber, gues, timeUp);
          questionNumber++;
          setTimeout(function() {
            if (questionNumber !== 8) {
              insertQuestion(questionNumber);
              counter = 15;
              showTimer();
            }
            if (questionNumber == 8) {
              reset();
            }
          }, 2000);
        }, 800);
      }
    }
    function stop() {
      timerRun = false;
      clearInterval(timer);
    }
    function reset() {
      if (questionNumber == 8) {
        $("#messagesr").hide();
        $("#messagesr").html(
          "<div class= col id = final resault><p id= finalres >Final Score <br> Correct anwsers :" +
            correctAnswers +
            "<br> Wrong answers :" +
            wrongAnswers +
            "<br> Unanwsered questions :" +
            unanswerd +
            "<br></p><p id= resbtn >Click here to play again</p></div>"
        );
        $("#resbtn").attr("class", "reset");
        $("#messagesr").show();
        questionNumber = 0;
        correctAnswers = 0;
        wrongAnswers = 0;
        unanswerd = 0;
        $(".reset").click(function() {
          $.ajax({
            url:
              "https://opentdb.com/api.php?amount=8&difficulty=medium&type=multiple"
          }).then(function(res) {
            questions = res.results;
            $("#resbtn").after("<img src=assets/images/line.png id=lineb >");
            $("#lineb").hide();
            $("#lineb").show("slide");

            setTimeout(function() {
              $("#lineb").remove();
              $("#messagesr").hide();
            }, 800);

            setTimeout(function() {
              insertQuestion(questionNumber);
            }, 800);
            showTimer();
          });
        });
      }
    }
    function shuffle(a) {
      var j, x, i;
      for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
      }
      return a;
    }
  });
});
