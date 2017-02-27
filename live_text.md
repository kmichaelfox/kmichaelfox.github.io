---
layout: page
title: Live Text
permalink: /live_text/
---

<script type="text/javascript">
$(function () {
var url = window.location.pathname;
var textbox = document.createElement("textarea");
textbox.value = "";
textbox.value += (url ? url.split('?')[1] : window.location.search.slice(1));
document.getElementById("page-content").appendChild(textbox);
});
</script>
