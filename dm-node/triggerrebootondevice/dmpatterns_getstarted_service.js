'use strict';

var Registry = require('azure-iothub').Registry;
var Client = require('azure-iothub').Client;

var connectionString = 'HostName=iotlabshenzhen-de-test.azure-devices.net;SharedAccessKeyName=iothubowner;SharedAccessKey=1Tuq9bnVJR+3ApPWz+ntMyOyUenMS6vDhiwpKu0HPMk=';
var registry = Registry.fromConnectionString(connectionString);
var client = Client.fromConnectionString(connectionString);
var deviceToReboot = 'myTestDevice';

var startRebootDevice = function(twin) {

    var methodName = "reboot";

    var methodParams = {
        methodName: methodName,
        payload: null,
        timeoutInSeconds: 30
    };

    client.invokeDeviceMethod(deviceToReboot, methodParams, function(err, result) {
        if (err) { 
            console.error("Direct method error: "+err.message);
        } else {
            console.log("Successfully invoked the device to reboot.");  
        }
    });
};

var queryTwinLastReboot = function() {

    registry.getTwin(deviceToReboot, function(err, twin){

        if (twin.properties.reported.iothubDM != null)
        {
            if (err) {
                console.error('Could not query twins: ' + err.constructor.name + ': ' + err.message);
            } else {
                var lastRebootTime = twin.properties.reported.iothubDM.reboot.lastReboot;
                console.log('Last reboot time: ' + JSON.stringify(lastRebootTime, null, 2));
            }
        } else 
            console.log('Waiting for device to report last reboot time.');
    });
};

startRebootDevice();
setInterval(queryTwinLastReboot, 2000);