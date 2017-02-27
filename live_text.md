---
layout: page
title: Live Text
permalink: /live_text/
jquery: true
---
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

<div id="content-stream"></div>

<script type="text/javascript">
$(document).ready(function textAreaLoad() {
var url = window.location.pathname;
var textbox = document.createElement("textarea");
textbox.value = "";
textbox.value += (url ? url.split('?')[1] : window.location.search.slice(1));
document.getElementById("content-stream").appendChild(textbox);
});
</script>
