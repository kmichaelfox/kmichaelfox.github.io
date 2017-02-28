---
layout: page
title: Live Text
permalink: /live_text/
jquery: true
---
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

<div id="content-stream"></div>

<script type="text/javascript">
'use strict';
document.session_status = null;
function initSession(){
  $.get( "https://api.github.com/users/kmichaelfox/gists", (data) => {for (let i in data){ console.log(data[i]);}});
};
function getSessionStatus() {
  $.get( "https://api.github.com/repos/kmichaelfox/kmichaelfox.github.io/commits", (data) => {console.log(data)});
};

$(document).ready(function textAreaLoad() {
var textbox = document.createElement("textarea");
textbox.value = "";
textbox.value += (window.location.search.slice(1));
document.getElementById("content-stream").appendChild(textbox);
initSession();
//setInterval(function(){
//    getSessionStatus(); // this will run after every 5 seconds
//}, 5000);
});
</script>
