'use strict'
// ==UserScript==
// @name         Faction Recruitment helper
// @author       Skipper [390936]
// @version      0.0.1
// @description  Removes those already in a faction from advanced search
// @updateURL    https://github.com/kristen-colquhoun/torn-scripts/raw/master/faction-recruitment.user.js
// @include      *.torn.com/userlist.php?*
// ==/UserScript==

function removeMembers() {
    document.querySelectorAll('.user-info-list-wrap > li').forEach(element => {

        if (element.querySelector('#icon9') || element.querySelector('#icon74')) {
            element.style.display = 'none';
        }
    });
}

window.addEventListener('load', function () {
    removeMembers();
}, false);

var pagination = document.getElementsByClassName('pagination-wrap');

for (let i = 0; i < pagination.length; i++) {
    pagination[i].addEventListener("click", function () {
        removeMembers();
    })
}