---
layout: page
title: Live Text
permalink: /live_text/
---

<div id="content-stream"></div>

<script type="text/javascript">
$(document).ready(function textAreaLoad() {
var url = window.location.pathname;
var textbox = document.createElement("textarea");
textbox.value = "";
textbox.value += (url ? url.split('?')[1] : window.location.search.slice(1));
document.getElementsById("content-stream").appendChild(textbox);
});
</script>
