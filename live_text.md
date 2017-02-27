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
var textbox = document.createElement("textarea");
textbox.value = "";
textbox.value += (window.location.search.slice(1));
document.getElementById("content-stream").appendChild(textbox);
});
</script>
