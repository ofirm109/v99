var myPageNum = 1;
var EndPageNum = 0;
var mytochenNum = 0;
var myCodeGame = 0;
var thisgame = [];
var myName = "";
var Alldiscripsion = [];
var myDiscripsion = [];
var countDiscripsion = 0;
var disNum = 0;
var firstTime = true;
var firstTime2 = true;
var myQuetionThis = false;

$(document).ready(function () {

    //$(document).on('swipeleft', 'body', function (event) {
    //    alert("swipeleft");
    //    return false;
    //});

    //$(document).on('swiperight', 'body', function (event) {
    //    alert("swiperight");
    //    return false;
    //});


    $("h1").hide();
    $("#myName").show();
    $("#myCode").hide();
    $("#pageOrgin").hide();
    $("#QuizPage").hide();
    $("#TheEnd").hide();
    $(".mavar").hide();
    $(".swipUp").hide();
    $(".swipLr").hide();
    $("#OPtecher").hide();
    $("#lerenTecher").hide();
    $("#startAgin").hide();
    $(".myTheEndPage").hide();
    $(".myVideo").hide();
    $(".theEndMavar").hide();
    $(".NoSticky").hide();
    $("#codeGame").hide();
    $("label[for='codeGame']").hide();

    

    //מסך פתיחה
    $("#student").click(function () {
        $("#navOp").fadeOut(500);
        myCodSowe();

    });

    //$("#NameStudent").focusin(function () {
    //    $(".sticky").fadeOut(500);
    //});
    //$("#NameStudent").focusout(function () {
    //    $(".sticky").fadeIn(500);
    //});
    //$("#codeGame").focusin(function () {
    //    $(".sticky").fadeOut(500);
    //});
    //$("#codeGame").focusout(function () {
    //    $(".sticky").fadeIn(500);
    //});
    //$("#pass").focusin(function () {
    //    $(".sticky").fadeOut(500);
    //});
    //$("#pass").focusout(function () {
    //    $(".sticky").fadeIn(500);
    //});


   
        //$("#navOp").fadeOut(500);
        ////כניסה למורה
        //var time = setInterval(function () {
        //    $("#OPtecher").fadeIn(500);
        //    clearInterval(time);
        //}, 500);
        //$("#perTchPass").click(function () {

        //    $("#OPtecher").fadeOut(500);
        //    //כניסה למורה
        //    var time = setInterval(function () {
        //        $("#navOp").fadeIn(500);
        //        clearInterval(time);
        //    }, 500);


        //});





        $("#techer").click(function () {
            $("#navOp").fadeOut(500);
                $("#OPtecher").fadeOut(500);
                $(".sticky").fadeOut(500);
                //סיסמה נכונה
                var time = setInterval(function () {
                    $("#lerenTecher").fadeIn(500);
                    $(".NoSticky").fadeIn(500);
                    clearInterval(time);
                }, 500);
                $("#perTch").click(function () {
                    $("#lerenTecher").fadeOut(500);
                    $(".NoSticky").fadeOut(500);
                    //חזרה
                    var time = setInterval(function () {
                        $("#navOp").fadeIn(500);
                        $(".sticky").fadeIn(500);
                        clearInterval(time);
                    }, 500);

                });

            


       




    });
    //קוד
    $("#start").click(function () {
        //var valCode = $("#codeGame").val();
        var valCode = 105;
        //טעינת הקודים
        $.getJSON("json.json", function (json) {
            var myRusalt = false;
            var myObject = json.allApp.games._gameNum;
            for (i = 0; i < myObject; i++) {
                if (valCode == json.allApp.games.game[i]._code) {

                    valCode = json.allApp.games.game[i]._id;

                    var NumPage = (json.allApp.games.game[i].page).length;
                    for (z = 0; z < NumPage; z++) {
                        var ThisPage = [];
                        var q1 = [];
                        var q2 = [];
                        var q3 = [];
                        Alldiscripsion[z] = json.allApp.games.game[i].page[z].discripsion;
                        ThisPage[0] = json.allApp.games.game[i].page[z]._id;
                        ThisPage[1] = json.allApp.games.game[i].page[z]._quiz;
                        ThisPage[2] = json.allApp.games.game[i].page[z].tochen._tape;
                        ThisPage[3] = json.allApp.games.game[i].page[z].tochen.__text;
                        if (ThisPage[1] == "true") {
                            q1[0] = json.allApp.games.game[i].page[z].myseala[0]._tayp;
                            q1[1] = json.allApp.games.game[i].page[z].myseala[0].__text;
                            q1[2] = json.allApp.games.game[i].page[z].myseala[0]._linke;
                            ThisPage[4] = q1;
                            q2[0] = json.allApp.games.game[i].page[z].myseala[1]._tayp;
                            q2[1] = json.allApp.games.game[i].page[z].myseala[1].__text;
                            q2[2] = json.allApp.games.game[i].page[z].myseala[1]._linke;
                            ThisPage[5] = q2;
                            if (3 == (json.allApp.games.game[i].page[z].myseala).length) {
                                q3[0] = json.allApp.games.game[i].page[z].myseala[2]._tayp;
                                q3[1] = json.allApp.games.game[i].page[z].myseala[2].__text;
                                q3[2] = json.allApp.games.game[i].page[z].myseala[2]._linke;
                                ThisPage[6] = q3;
                            }
                            EndPageNum = (json.allApp.games.game[i].page).length;
                        }


                        thisgame[z] = ThisPage;

                        if (z == (NumPage - 1)) {
                            myName = $("#NameStudent").val();
                            if (myName == "") {
                                //alert("רשום את שימך")
                                $("#myEror").html("רשום את שמך");
                                $("#EROR").modal();
                            } else {
                                //תחילת המשחק
                                StartGame();
                            }
                        }
                    }




                    myRusalt = true;
                } else if (i == myObject - 1 && myRusalt == false) {
                    //alert("טעות בקוד");
                    $("#myEror").html("טעות בקוד");
                    $("#EROR").modal();

                }
            }
        });
    });
});
function myCodSowe() {

    var time = setInterval(function () {
        $("#myCode").fadeIn(500);
        clearInterval(time)
    }, 500);
    $("#perchi").click(function () {

        $("#myCode").fadeOut(500);
        var time = setInterval(function () {
            $("#navOp").fadeIn(500);
            clearInterval(time)
        }, 500);
    });




}
//אתר של המורה
function myTecherSite() {

}

//המשך למשחק
function StartGame() {
    $("footer").hide();

    $("#op").fadeOut(500);
    //לבנות את הממשק
    $("#myCode").fadeOut(500);
    nextPage(myPageNum);
    $('body').css('background-color', '#000000');
    //myCodeGame = valCode-1;
    //nextPage(myPageNum);
    $(".myVideo").fadeIn(500);
}
//דף הבא
function nextPage(num) {
    
    mavePageSkufit();
    var time = setInterval(function () {
        $("#pageOrgin").fadeIn(500);
        
        clearInterval(time)
    }, 500);
    
    //var thisimage1 = "images/" + thisgame[num - 1][3];
    //$("#Myimage").attr("src", thisimage1);
    var Shela = false;
    
    while (Shela == false) {


        if (thisgame[num - 1] != null) {



            //alert(thisgame[num - 1][2]);
            if (thisgame[num - 1][1] == "true") {
                Shela = true;
                if (myPageNum >= EndPageNum) {
                    //End();
                    $(".theEndMavar").fadeIn(500);
                    myPageNum = num;
                } else {
                    Myquize(num)
                }
            } else if (thisgame[num - 1][2]=="img") {
                var img = $('<img />', {
                    src: "images/" + thisgame[num - 1][3],
                    class: ' imageOnePage',
                    height: '100%',
                    width: '100%'
                });
                img.appendTo($('#imagepage'));
                if (disNum < num) {

                    disNum = num;
                    dis(num, false);
                }
                num++;
                myPageNum = num;

            } else if (thisgame[num - 1][2] == "video") {
                var vedo = '<iframe class="video imageOnePage" height="450px" width="100%" id="' + num + '" src="" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
                //vedo.appendTo($('#imagepage'));
                $('.thisVideo').html(vedo);
                var linkVideo = thisgame[num - 1][3].split("watch?v=");
                var linkVideo2 = linkVideo[0] + "embed/" + linkVideo[1] + '?rel=0&autoplay=1';
                //alert(linkVideo2);
                $("#" + num).attr('src', linkVideo2);
                num++;
                myPageNum = num;

            }
            
        } else {
            Shela = true;
        }
    }

}
//לשאלה
function Myquize(num) {
    
    mavePageSkufit();
    myPageNum = num;
    if (disNum < num) {

        disNum = num;
        dis(num, true);
    }
    $("#QutisionBut").click(function () {
        myQuetionThis = true;
        $(".tutorialQuit").click(function () {
            swipLR();
        });

        $("#pageOrgin").fadeOut(500);
        if (myPageNum >= EndPageNum) {
            //End();
            $(".theEndMavar").fadeIn(500);

        } else {
            var time = setInterval(function () {
                $("#QuizPage").fadeIn(500);
                clearInterval(time)
            }, 500);
        }
    });

    var img = $('<img />', {
        src: "images/" + thisgame[num - 1][3],
        class: ' imageTwoPage',
        height: '100%',
        width: '100%'
    });
    img.appendTo($('#imageQuiz'));

    //לשים לב לזה
    //http://labs.rampinteractive.co.uk/touchSwipe/demos/Swipe_status.html
    $(document).on('swiperight', document, function (event) {
        if (myQuetionThis == true) {
            firstTime2 = false;
            num = myPageNum;
            myPageNum = thisgame[num - 1][4][2];

            mavar();
            myQuetionThis = false;
            return false;

        }
    });
    $("#Q1p").click(function () {
        if (myQuetionThis == true) {
            
            firstTime2 = false;
            num = myPageNum;
            myPageNum = thisgame[num - 1][4][2];
            mavar();
            myQuetionThis = false;
            return false;
        }
    });
    
    $(document).on('swipeleft', document, function (event) {
        if (myQuetionThis == true) {
            
            firstTime2 = false;
            num = myPageNum;
            myPageNum = thisgame[num - 1][5][2];
            mavar();
            myQuetionThis = false;
            return false;
        }
    });
    $("#Q2p").click(function () {
        if (myQuetionThis == true) {
            
            firstTime2 = false;
            num = myPageNum;
            myPageNum = thisgame[num - 1][5][2];
            mavar();
            myQuetionThis = false;
            return false;
        }
    });



    //$("#Q1").html(thisgame[num - 1][4][1]);
    $("#Q1p").html(thisgame[num - 1][4][1]);
    //$("#Q1").click(function () {
    //    myPageNum = thisgame[num - 1][4][2];
    //    mavar();
    //});
    //$("#Q2").html(thisgame[num - 1][5][1]);
    $("#Q2p").html(thisgame[num - 1][5][1]);

    //$("#Q2").click(function () {
    //    myPageNum = thisgame[num - 1][5][2];
    //    mavar();
    //});

    //if (thisgame[num - 1].length == 7) {
    //    $("#Q3").html(thisgame[num - 1][6][1]);
    //    $("#Q3").click(function () {
    //        myPageNum = thisgame[num - 1][6][2]
    //        mavar();
    //    });
    //} else {
    //    $("#Q3").hide();
    //}

}

//תכנת מעבר
function mavar() {
    $("#QuizPage").fadeOut(500);

    $(".imageOnePage").remove();
    $(".imageTwoPage").remove();

    if (myPageNum > EndPageNum) {
        //End();
        $(".theEndMavar").fadeIn(500);
    } else {
        nextPage(myPageNum); 
    }
}

//סוף
function End() {
    $(".theEndMavar").fadeOut(500);
    mavePageSkufit();
    $('body').css('background-color', '#618AE8');
    //$('body').css('background-color', 'rgba(97, 138, 232, 0.3)');
    var time = setInterval(function () {
        $("#TheEnd").fadeIn(500);
        clearInterval(time)
    }, 500);
    $("#op").show();
    $("#op").addClass("myButEnd");
    var fuulName = "היי " + myName + "<br/>" + "רצינו לסכם בשבילך מה בחרת"
    $(".firstTxt").html(fuulName);
    var myMasovEnd = "";
    for (i = 0; i < myDiscripsion.length; i++) {
        if (myDiscripsion[i][0] != "") {
            myMasovEnd += myDiscripsion[i][0] + "@";
        }
        if (myDiscripsion[i][1] == true) {
            myMasovEnd += "@";
        }

    }
    //alert(myMasovEnd);
    myTxt = myMasovEnd;
    typeWriter();
    //$("#Masov").html(myMasovEnd);




}
//תיאור
function dis(numDis, sela) {
    numDis--;
    var disZmani = [];
    disZmani[0] = Alldiscripsion[numDis];
    disZmani[1] = sela;
    myDiscripsion[countDiscripsion] = disZmani
    countDiscripsion++;
}

var Tik = 0;
var speed = 10;
var myTxt = "";
var myMasovText = "";
var myLayer = 0;
function typeWriter() {
    
    if (Tik < myTxt.length) {
        if ((myTxt.charAt(Tik) == "@" && myTxt.charAt(Tik + 1) == "@" && myMasovText!="")) {
            var bdika = document.getElementById("Masov").innerHTML;
            $("#Masov").html(bdika + "<br/>");
            myMasovText += ' ';
            if (myMasovText != " " && myLayer>2) {
                var myHtml = '<div class="row message-body" id="'+Tik+'">';
                myHtml += '<div class="col-sm-12 message-main-sender">';
                myHtml += '<div class="sender2">';
                myHtml += '<div class="message-text">';
                myHtml += myMasovText.toString();
                myHtml += '</div>';
                myHtml += '</div>';
                myHtml += '</div>';
                myHtml += '</div>';
                $("#myMasov").append(myHtml);
                $("#" + Tik + "").hide();
                $("#" + Tik + "").fadeIn(500);
                myMasovText = "";
                myLayer = 0;
            }
            myLayer++;
            Tik++;
        }
        //else if (myTxt.charAt(Tik) == "@" && myTxt.charAt(Tik + 1) != "@") {
        //    myMasovText += ' ';
        //}
        else {
            document.getElementById("Masov").innerHTML += myTxt.charAt(Tik);
            if (myTxt.charAt(Tik) == "@" && myTxt.charAt(Tik + 1) ) {
                //alert(myTxt.charAt(Tik - 1) + myTxt.charAt(Tik) + myTxt.charAt(Tik + 1))
                myMasovText += " ";
            } else {
                if ((Tik) == myTxt.length - 1) {
                    myMasovText += " ";
                } else {
                    myMasovText += myTxt.charAt(Tik);
                }
                
            }
            
            Tik++;
        }
        if (Tik == myTxt.length) {
            if (myMasovText != "") {

                var myHtml = '<div class="row message-body" id="' + Tik + '">';
                myHtml += '<div class="col-sm-12 message-main-sender">';
                myHtml += '<div class="sender2">';
                myHtml += '<div class="message-text">';
                myHtml += myMasovText.toString();
                myHtml += '</div>';
                myHtml += '</div>';
                myHtml += '</div>';
                myHtml += '</div>';
                $("#myMasov").append(myHtml);
                $("#" + Tik + "").hide();
                $("#" + Tik + "").fadeIn(500);
                myMasovText = "";
                myLayer = 0;
            }
            $("#startAgin").fadeIn(1000);
            $("#startAgin").click(function () {
                EndTheEnd();
            });
        }
        setTimeout(typeWriter, speed);
    }
}

function mavePageSkufit() {
    $(".mavar").fadeIn(200);
    var time = setInterval(function () {
        $(".mavar").fadeOut(500);
        //swipUp();
        clearInterval(time)
    }, 700);

}
function swipUp() {
    if (firstTime == true) {
        $(".swipUp").fadeIn(200);
        var time = setInterval(function () {
            $(".swipUp").fadeOut(500);
            firstTime = false;
            clearInterval(time);
        }, 3000);
    }

}
function swipLR() {
    if (firstTime2 == true) {
        var time2 = setInterval(function () {
            if (firstTime2 == true) {
                $(".swipLr").fadeIn(200);

                var time = setInterval(function () {
                    $(".swipLr").fadeOut(500);
                    firstTime2 = false;
                    clearInterval(time)
                }, 10000);
            }
            clearInterval(time2);

            var time = setInterval(function () {
                if (firstTime2 == false) {
                    $(".swipLr").fadeOut(500);
                    clearInterval(time)
                }

            }, 100);


        }, 100);

    }
}
function EndTheEnd() {

    $(".myTheEndPage").fadeIn(200);

    var time = setInterval(function () {
        location.reload();
        clearInterval(time);
    }, 5000);
}
function myVideoOp() {
    $(".myVideo").fadeOut(500);
    $(".video").attr('src', " ");
}