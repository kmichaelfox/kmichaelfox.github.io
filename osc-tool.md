---
layout: osc-header
title: "OSC Tool"
permalink: /osc-tool/
---

In-progress

Execute:

	python http://kmichaelfox.com/assets/pythonBridge/udpToWebsocketBridge.py

<!-- osc =================================================================================== -->
<div id="oscPanel" title="OSC Websocket">
    <p>OSC Websocket</p>
    <input type="text" id="socket_address" value="localhost" class="hide" />
    <input type="text" id="socket_port" value="8000" class="hide" />
    <input type="submit" id="socket_start" value="Start" />
    <input type="submit" id="socket_stop" value="Stop" />
    <span id="socket_status">offline</span>
    <p>Listening to - localhost:8000</p>
    <div id="myInputs">
        <input type="submit" id="appendOSCInput" value="Add Input" />
        <br />
        <br />
    </div>
    <p>Sending to - localhost:7600</p>
    <div id="myOutputs">
        <input type="submit" id="appendOSCOutput" value="Add Output" />
        <br />
        <br />
    </div>
</div>