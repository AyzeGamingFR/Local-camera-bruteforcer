// requirements

const net = require("net");


// server and client vars

const local_web_server = new net.Server();
const local_camera_client = new net.socket();

var CAMERA_IP = "127.0.0.x";
var CAMERA_PORT = 0;


// server and client code

local_camera_client.on({
    
    local_camera_client.connect(CAMERA_IP, CAMERA_PORT);
    
});
