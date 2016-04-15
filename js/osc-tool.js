

function initOSC() {

    osc = new OSC({
        discardLateMessages: true
    });

    // socket event listeners
    osc.on('open', function(cEvent) 
    {
        $('#socket_status').html('online');
    });

    osc.on('close', function(cEvent) 
    {
        $('#socket_status').html('offline');
        $("#socket_start").button("enable");
        // $('#socket_address').prop('disabled', false);
		// $('#socket_port').prop('disabled', false);

        //TODO: disable OSC listen and send message buttons and the individual messages
		$("#socket_stop").button("disable");
    });

    osc.on('error', function(cEvent) 
    {
        $('#socket_status').html('error');
        $("#socket_start").button("enable");
		$("#socket_stop").button("disable");
    });

    $('#socket_start')
        .button()
        .click( function(event)
        {
    		var address = $('#socket_address').val();
    		var port = $('#socket_port').val();
    		$('#socket_status').html('waiting');
            // $('#socket_address').prop('disabled', true);
            // $('#socket_port').prop('disabled', true);
    		$(this).button("disable");
            $("#socket_stop").button("enable");

            //TODO: enable OSC listen and send message buttons
    		osc.connect(address, port);
        });
    
    $('#socket_stop')
        .button(
            {disabled: true}
        )
        .click( function(event)
        {
        	osc.disconnect();
            $(this).button("disable");
            $("#socket_start").button("enable");
        });

    $('#appendOSCOutput')
        .button()
        .click( function(event)
        {
            if (sendIndex < 9) {
                $("#myOutputs").append(
                    '<div class="oscRow">\
                    <input type="text" id="outOSCAddr' + sendIndex + '" value="/out"/>\
                    <input type="text" id="outOSCPattern' + sendIndex + '" value="out"/>\
                    <button id="outOSCenable' + sendIndex + '" onclick="enableOSCMessageOut(' + sendIndex + ')">Enable</button>\
                    <button id="outOSCdisable' + sendIndex + '" onclick="disableOSCMessageOut(' + sendIndex + ')">Disable</button>\
                    <span id="rawOutMessages' + sendIndex + '">-</span>\
                    </div>');

                $("#outOSCenable" + sendIndex).button();
                $("#outOSCdisable" + sendIndex).button({disabled: true});
                sendIndex += 1;
            }
        });

}