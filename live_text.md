---
layout: page
title: Live Text
permalink: /live_text/
---

<script type="text/javascript">
var textbox = document.getElementById("content_stream");
textbox.value = "";
textbox.value += (url ? url.split('?')[1] : window.location.search.slice(1));
</script>

<textarea id="content_stream"></textarea>
