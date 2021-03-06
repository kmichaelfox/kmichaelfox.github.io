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

window.session_status = null;

String.prototype.format = function()
{
   var content = this;
   for (var i=0; i < arguments.length; i++)
   {
        var replacement = '{' + i + '}';
        content = content.replace(replacement, arguments[i]);
   }
   return content;
};

function initSession(){
  $.get( "https://api.github.com/users/kmichaelfox/gists", (data) => {
    for (let i in data){
      let gist = data[i];
      if (gist.files && gist.files[window.live_text_session_name]) {
        window.session_status = {id:gist["id"], updated_at:0};
        setInterval(function(){
          console.log('running callback');
          updateSession(); // this will run after every 5 seconds
        }, 5000);
        document.getElementById("content-stream-textarea").value = 'Session was found. Syncing...';
      } else if (window.session_status === null) {
        document.getElementById("content-stream-textarea").value =
          'No session was found by the name: \"{0}\"'.format(window.live_text_session_name)
      };
    }
  });
};
function updateSession() {
  $.get( "https://api.github.com/gists/{0}".format(window.session_status.id), (data) => {
    if (data["updated_at"] && data["updated_at"] != window.session_status.updated_at) {
      if (data["files"] && data["files"][window.live_text_session_name]["content"]) {
        document.getElementById("content-stream-textarea").value = data["files"][window.live_text_session_name]["content"];
        window.session_status.updated_at = data["updated_at"];
        document.getElementById("content-stream-info").innerHTML = 'Last received update: '+data["updated_at"];
      }
    }
  });
};

$(document).ready(function textAreaLoad() {
  let update_text, query, textbox;

  textbox = document.createElement("textarea");
  textbox.readonly = true;
  textbox.id = "content-stream-textarea";
  textbox.value = "";
  textbox.setAttribute("wrap", "off");

  query = window.location.search.slice(1).replace(new RegExp('%20', 'g'), '_');
  window.live_text_session_name = "lt_session_"+query;

  textbox.value = "Searching for existing session: "+query;

  update_text = document.createElement("p");
  update_text.id = "content-stream-info";
  document.getElementById("content-stream").appendChild(textbox);
  document.getElementById("content-stream").appendChild(update_text);

  initSession();
});
</script>
