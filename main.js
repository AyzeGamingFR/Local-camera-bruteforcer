// requirements

const net = require("net");


// server and client vars

const local_camera_client = new net.socket();
const local_web_server = new net.Server();

var CAMERA_IP = "192.168.1.PASTE_END_IP_CAMERA_IP_HERE";
var CAMERA_PORT = 0;
var WEB_SERVER_PORT = 80;


// server and client code

local_camera_client.on({
    
    local_camera_client.connect(CAMERA_IP, CAMERA_PORT);
    console.log(`The camera client has been started and connected himself to the camera using the ip ${CAMERA_IP} on the port ${CAMERA_PORT}`);
    
});

local_web_server.on({
    
    local_web_server.listen(WEB_SERVER_PORT);
    console.log(`The camera bruteforcer web server is running on the port ${WEB_SERVER_PORT} and is ready to receive a client !`);
    
});
