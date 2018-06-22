# iot-hub-dm
Azure iot hub device management samples.

## dm-java
>* open cmd (Windows) or terminal (Linux & macOS) to create the project via maven. Please refer to the below command.
    <br/> `mvn archetype:generate -DgroupId=com.mycompany.app -DartifactId=trigger-reboot -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false`
>* Login in the [Azure Portal](https://portal.azure.com) using your Azure account.
>* Create IoT Hub service. 
>* Add IoT device based on the IoT Hub created above.
>* Replace the connection string in App.java separately for simulated-device and trigger-reboot.
    <br/> `Note`
    <br/> `iotHubConnectionString is iot hub connection string.`
    <br/> `connString is your device connection string.`
>* Compile the project via below command.
    <br/> `mvn clean package -DskipTests`
>* Run this project via below command.
    <br/> `mvn exec:java -Dexec.mainClass="com.mycompany.app.App"`

## dm-node
>* open cmd or powershell (Windows) or terminal (Linux & macOS) to create the project via npm. Please refer to the below command.
    <br/> `npm init`
    <br/> For simulated-device, install the relevant libs via below command.
    <br/> `npm install azure-iot-device azure-iot-device-mqtt --save`
    <br/> For trigger-device, install the relevant libs via below command.
    <br/> `npm install azure-iothub --save`
>* Login in the [Azure Portal](https://portal.azure.com) using your Azure account.
>* Create IoT Hub service. 
>* Add IoT device based on the IoT Hub created above.
>* Replace the connection string in App.java separately for simulated-device and trigger-reboot.
    <br/> `Note`
    <br/> `connectionString in service.js is iot hub connection string.`
    <br/> `ConnectionString in device.js is your device connection string.`
>* Compile & run the project via below command.
    <br/> `node dmpatterns_getstarted_device.js & node dmpatterns_getstarted_service.js`
