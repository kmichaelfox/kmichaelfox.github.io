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
  $.get( "https://api.github.com/users/kmichaelfox/gists", (data) => {
    for (let i in data){ 
      let gist = data[i];
      if (gist.files && gist.files["test_session"]) {
        document.session_status = gist.id;
        console.log(String.format('found the session! located at id:{0}', document.session_status));
      }
    }
  });
  
  if (document.session_status == null) {
    document.getElementById("content-stream-textarea").value = String.format(
      "There is no known session for this path: \"{0}\"", document.live_text_session_name
    );
  };
};
function getSessionStatus() {
  $.get( "https://api.github.com/repos/kmichaelfox/kmichaelfox.github.io/commits", (data) => {console.log(data)});
};

$(document).ready(function textAreaLoad() {
  var textbox = document.createElement("textarea");
  textbox.id = "content-stream-textarea";
  textbox.value = "";
  document.live_text_session_name = window.location.search.slice(1).replace(new RegExp('%20', 'g'), '_');
  textbox.value += document.live_text_session_name;
  document.getElementById("content-stream").appendChild(textbox);
  initSession();
  //setInterval(function(){
  //    getSessionStatus(); // this will run after every 5 seconds
  //}, 5000);
});
</script>
