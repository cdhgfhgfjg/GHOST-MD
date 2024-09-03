const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "NmtHALAZ#EnIFZxsezS449TJBFf4pRjQ-XT-8X9EmE__3noWUPjI",
MONGODB: process.env.MONGODB || "mongodb://mongo:hQnSAQRYDOgXnfEqxmNrWSyJaLVdtvCn@junction.proxy.rlwy.net:59503",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/397000a07a1deb7fad9c2.jpg",
ALIVE_MSG: process.env.ALIVE_IMG || "🤖🔰 Hi GHOST-MD Is Online Now 💻\n*💻 Owner* - GHOST-MD\n\n*💻 Owner Number* -94741140620",
SUDO_NB: process.env.SUDO_NB || "94787438929",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE:"true"
};
