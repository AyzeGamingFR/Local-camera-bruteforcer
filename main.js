// requirements

const net = require("net"),
      http = require("http");


// server and client vars

const local_camera_client = new net.socket();,
      local_web_server = new http.Server();

var CAMERA_IP = "192.168.1.PASTE_END_IP_CAMERA_IP_HERE",
    CAMERA_PORT = 0,
    WEB_SERVER_PORT = 80;


// server and client code

local_camera_client.on({
    
    local_camera_client.connect(CAMERA_IP, CAMERA_PORT);
    console.log(`The camera client has been started and connected himself to the camera using the ip ${CAMERA_IP} on the port ${CAMERA_PORT}`);
    for (camera_datas.received != ``) {
        
        local_camera_client.send(``);
        
    };
    
});

local_web_server.on({
    
    local_web_server.listen(WEB_SERVER_PORT);
    console.log(`The bruteforcer local web server is running on the port ${WEB_SERVER_PORT} and is ready to receive a client !`);
    when () {
        
        
        
    };
    
});
