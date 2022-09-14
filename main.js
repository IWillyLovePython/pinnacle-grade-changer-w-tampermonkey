// ==UserScript==
// @name         Pinnacle | Grades
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Pinnacle | Grades
// @author       You
// @match        https://gb.browardschools.com/Pinnacle/Gradebook/InternetViewer/GradeReport.aspx
// @icon         https://gb.browardschools.com/Pinnacle/Gradebook/Images/favicon.png
// @grant        none
// ==/UserScript==

(function() {

    'use strict';
    /* Styling for Grades */
    let periodStyles = {
        "color": "#007F00",
        "bg-color":"#DAF2DA",
        "hover-effect": "a.letter-container:hover {background-color: inherit; cursor: text; -webkit-user-drag: none;}"
    };


    /* GRADES */

    let periodsHrefs = document.getElementsByClassName("letter-container");
    let periodsLetters = document.getElementsByClassName("letter");
    let periodsPercent = document.getElementsByClassName("percent");
    let gradesSetting = {
        "period1": {"grade": "A", "percent": "100%"},
        "period2": {"grade": "A", "percent": "100%"},
        "period3": {"grade": "A", "percent": "100%"},
        "period4": {"grade": "A", "percent": "100%"},
        "period5": {"grade": "A", "percent": "100%"},
        "period6": {"grade": "A", "percent": "100%"}
    };

    let newStyle = document.createElement("style");

    if (newStyle.styleSheet) {
        newStyle.styleSheet.cssText = periodStyles["hover-effect"];
    } else {
        newStyle.appendChild(document.createTextNode(periodStyles["hover-effect"]));
    }

    document.getElementsByTagName('head')[0].appendChild(newStyle);
    /* Modifying Grades */
    for (let i = 0; i < periodsHrefs.length; i++) {
        periodsHrefs[i].href = "";
    };


    for (let i=0; i < periodsLetters.length; i++) {
        periodsLetters[i].style.color = periodStyles.color;
        periodsLetters[i].style["background-color"] = periodStyles["bg-color"];
        periodsLetters[i].firstChild.innerHTML = gradesSetting["period" + String(i+1)].grade;
    };
    for (let i=0; i<periodsPercent.length; i++) {
        periodsPercent[i].parentElement.innerHTML = gradesSetting["period" + String(i+1)].grade + "<span class=\"percent\">" + gradesSetting["period" + String(i+1)].percent + "</span>";
    };

})();
