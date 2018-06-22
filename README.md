# iot-hub-dm
Azure iot hub device management samples.

## dm-java
>* open cmd (Windows) or terminal (Linux & macOS) to create the project via maven. Please refer to the below command.
    > `mvn archetype:generate -DgroupId=com.mycompany.app -DartifactId=trigger-reboot -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false`
>* Login in the [Azure Portal](https://portal.azure.com) using your Azure account.
>* Create IoT Hub service. 
>* Add IoT device based on the IoT Hub created above.
>* Replace the connection string in App.java separately for simulated-device and trigger-reboot.
    > [!Note]
    > `iotHubConnectionString is iot hub connection string.`
    > `connString is your device connection string.`
>* Compile the project via below command.
    > `mvn clean package -DskipTests`
>* Run this project via below command.
    > `mvn exec:java -Dexec.mainClass="com.mycompany.app.App"`

## dm-node
>* open cmd or powershell (Windows) or terminal (Linux & macOS) to create the project via npm. Please refer to the below command.
    > `npm init`
    > For simulated-device, install the relevant libs via below command.
    > `npm install azure-iot-device azure-iot-device-mqtt --save`
    > For trigger-device, install the relevant libs via below command.
    > `npm install azure-iothub --save`
>* Login in the [Azure Portal](https://portal.azure.com) using your Azure account.
>* Create IoT Hub service. 
>* Add IoT device based on the IoT Hub created above.
>* Replace the connection string in App.java separately for simulated-device and trigger-reboot.
    > [!Note]
    > `connectionString in service.js is iot hub connection string.`
    > `ConnectionString in device.js is your device connection string.`
>* Compile & run the project via below command.
    > `node dmpatterns_getstarted_device.js & node dmpatterns_getstarted_service.js`
