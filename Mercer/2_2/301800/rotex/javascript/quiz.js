// JavaScript Document

<script language="javascript" type="text/javascript">
var ckey = new Array(3);
ckey[0] = "3";
ckey[1] = "4";
ckey[2] = "4";
ckey[3] = "2";
ckey[4] = "3";



function sendMe() {
	var QiD = ""; //string of answers
	var radioName = ""; //current radio field name
	var radioValid = ""; //""=field still pending; "yes"=current field passed; "no"= entire quiz (just one field) failed
	for (i=0;i<document.quiz.elements.length;i++) { //run through every field on form
		if (radioValid != "no") { // quiz hasn't failed yet
			if (radioName == "") {radioName = document.quiz.elements[i].name;} //field is still pending
			if (document.quiz.elements[i].checked) { //this field is checked
				radioValid = "yes"; //field passes
				QiD += document.quiz.elements[i].value; //add answer to answer string
			}
			if (document.quiz.elements.length == (i+1)) {var nextName = "";} else {var j = (i+1); var nextName = document.quiz.elements[j].name;} //this is so the last field of the form can validate or fail properly
			if (radioName != nextName) { //all elements of this radio array have been tested
				if (radioValid == "") { //no radios were checked
					radioValid = "no"; //quiz fails
				} else { //field already passed
					radioValid = ""; //reset the test var
					radioName = nextName; //reset the name var
				}
			}
		}
	}
	if (radioValid == "no") {
	alert("Please complete all fields on this form before submitting.");
	} else {
	var trimdUrl = trimUrl();
	var myURL = trimdUrl + "?QiD=" + QiD;
	document.location.href = myURL;
//	pageInit(QiD);
	}
}

function delineate(str) {
	theleft = str.indexOf("=") + 1;
	theright = str.length;
	return(str.substring(theleft, theright));
}

function trimUrl () {
	var qPos = document.URL.indexOf('?'); // gets position of "?" in the URL, returns '-1' if not found
	if (qPos != -1) { // was there a ? in the URL
		var trimdUrl = document.URL.substring(0, qPos); // makes a string out of the URL from the beginning position (0) up until the '?' (qPos)
		return trimdUrl;
	} else { // there wasn't a '?' in the URL
		return document.URL;
	}
}

function quizReset() {
	for (i=0;i<document.quiz.elements.length;i++) { //run through every radio button on form
		document.quiz.elements[i].checked = false; //uncheck the radio button
	}
	var trimdUrl = trimUrl();
	document.location.href = trimdUrl; // reloads the current page
}

function pageInit() { //        (QiD)
	var qTotal = 0; // total questions on quiz
	var scoreNum = 0; // total correct answers from user
	var is_input = document.URL.indexOf('?'); // tests if there's a ? in the URL
	if (is_input != -1) { // there is a ? in the URL
		var locate = window.location; // convert a method into a string
		document.pass.answ.value = locate; // not sure why the string has to get juggled this extra time
		var text = document.pass.answ.value; // but it kept breaking on me when i took it out
		document.pass.answ.value = delineate(text); //isolate the string of user answers
		var ansKey = document.pass.answ.value;
		var akey = ansKey.split(""); //put user answer string into array
		for (i=0;i<document.quiz.elements.length;i++) { //run through every radio button on form
			var ansName = document.quiz.elements[i].name; //gets radio button name
			var ansPos = ansName.substring(1); // gets question array number- starts at 0 (not radio button number)
			var curAns = document.quiz.elements[i].value; //gets the current radio button value
			var curId = "ht" + ansPos; //the id of the hidden text
			var curAr = "har" + ansPos; // hidden answer for right
			var curAw = "haw" + ansPos; //hidden answer for wrong
			var curCid = "I" + ansPos + curAns; //the id of the list item
			if (curAns == akey[ansPos]) { //current radio answer matches user input
				document.quiz.elements[i].checked = true; //check the radio button with user input
				qTotal++; // add to the total question count
				identity=document.getElementById(curId);
				identity.className= "show";
				if (curAns == ckey[ansPos]) { //current radio answer matches correct answer
					scoreNum++;
				identity=document.getElementById(curAr);
				identity.className= "show";
				} else {
					identity=document.getElementById(curAw);
					identity.className= "show";
				}
			} //else {
				//identity=document.getElementById(curCid);
				//identity.className= "hide";
			//}
		}
		// this creates a message that can be inserted into the page, but we don't need it this time
		//var topMsg = "You correctly answered " + scoreNum + " out of " + qTotal + " questions.";
		identity=document.getElementById('submit');
		identity.className= "hide";
		//identity=document.getElementById('dyn03');
		//identity.className= "hide";
	} else {
	var topMsg = "Please complete all questions before submitting your answers.";
	identity=document.getElementById('footers');
	identity.className= "hide";
	}
		identity=document.getElementById(enter);
		identity.className= "hide";		
	// this would insert the topMsg into dyn01 div, but we don't need it this time
	//var newText = document.createTextNode(topMsg);
	//var para = document.getElementById("dyn01");
	//para.appendChild(newText);
}


function printPage() {
        if (window.print) {
                setTimeout('window.print();',200);
        }
        else if ((navigator.platform.substring(0,3)) == "Mac") {
                alert("Press 'Cmd+p' on your keyboard to print this page.");
        }
        else {
                alert("Press 'Ctrl+p' on your keyboard to print this page.")
        }
}
// print Page-->
</script>

<!--<script language="javascript" src="http://www.mercerhrs.com/mhrs_shared/scripts/library.js" type="text/javascript"></script>-->
<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-3734784-22']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script> 