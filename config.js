TV//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "260967838144";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://telegra.ph/file/a22200a780671e0e32383.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUNXckkxQ21USzJJRW1MU05JckpGdCt3RWxYeWVXQStwUW9YZi9PbHFrYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVS9Odng1a29udkNHRzdjLyt6VjAvUzZQZjVhU1RMSnZrRG1EYjMrUzQzRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhTGJMa29qK3VYNWYwejBmb2Zlb1dQeXc2b3habEdqTmg1RktDUFJhYjFNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvUzhEREN5c1k0RzlHUG1yd0Iza1pRSm41WlVzVGwyVjNaRUlvR01JMldNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVDdmtsY0ZUOG1wcHhFdVFCMzVhanVxbFBNQXFKUHdhc1crVXAzZ2pqbWc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllHek1MbWdveUdQNFRyalRTc3dtT01WcGgrblM4M2FqRXoyYlFSQWd2Vlk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUJDU2poK1JaZUFaZFdSQUl6bHVrTXpWbkRUc2h0RUwrLzZMSlBYNjdFQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNCt3ZTl2VC92bWlnQTB2RjdnMEJ1emdNRElTSXBSbDE4ekNpbHNKUWJYaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxhWmNVLy85VzIzcSt3S250d0dJV0tsQm1QeE9tUWQ5b0p1RVMwTEVHRmJjdEY2cldGdkpBd1FHRWxaUFVGc3BaUHpoQWtqc2FYTXdkTVQyMDN2TWpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA5LCJhZHZTZWNyZXRLZXkiOiJlM0U4UnV4ZU5iemVFbDR2T3N4djJPUjNsbHhLUGlXWDhLak1ZekdkQ1ZZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJlN1VWeEgyV1IyZVhWbmotMXBOS1h3IiwicGhvbmVJZCI6IjBkMzAzYjFiLTlkOWItNDVhMC05YzQ0LWYyZmQ3ZmU0ODM1MCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLM2JQRmozK0JYQlNENTQzZklyeXpSODgreXc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMDk2ZHE3RHp6TUw4M0l6ZlEyK3kvWExwV24wPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjQ4UkhTQ0xEIiwibWUiOnsiaWQiOiIyNjA5Njc4MzgxNDQ6NzBAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tMQTdwZ0JFTzZacHJnR0dBNGdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ind5UWVURjJTSE16b2NUVXBDTmMzOGJoYkxlbjU1SnFEaHpLT01VRDdaeUE9IiwiYWNjb3VudFNpZ25hdHVyZSI6Im4xT0ptWCtocGhsd2lyZzQ1TmFtQWJWRWltSXUrT3hKUXNyeDZpWjRTRDJaQTl0dW9rTi9XWldBZEl2QWx1RjYrbWtpUzNYeG9vNC95a25Xa0REYURBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ0Qlo3SmZGbTVzNURCOFd1bXFmcDlmTFk1R2g0T1hiaUowdy9DM1NOLzFSbjQwaVNZZ2JKa2lHYUQzVnhkam5ZTm81azZDZ2R0OVNLVEhjbEl1b2Zqdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2MDk2NzgzODE0NDo3MEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjTWtIa3hka2h6TTZIRTFLUWpYTi9HNFd5M3ArZVNhZzRjeWpqRkErMmNnIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI4Njc5MTYzfQ==
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUNXckkxQ21USzJJRW1MU05JckpGdCt3RWxYeWVXQStwUW9YZi9PbHFrYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVS9Odng1a29udkNHRzdjLyt6VjAvUzZQZjVhU1RMSnZrRG1EYjMrUzQzRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhTGJMa29qK3VYNWYwejBmb2Zlb1dQeXc2b3habEdqTmg1RktDUFJhYjFNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvUzhEREN5c1k0RzlHUG1yd0Iza1pRSm41WlVzVGwyVjNaRUlvR01JMldNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVDdmtsY0ZUOG1wcHhFdVFCMzVhanVxbFBNQXFKUHdhc1crVXAzZ2pqbWc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllHek1MbWdveUdQNFRyalRTc3dtT01WcGgrblM4M2FqRXoyYlFSQWd2Vlk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUJDU2poK1JaZUFaZFdSQUl6bHVrTXpWbkRUc2h0RUwrLzZMSlBYNjdFQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNCt3ZTl2VC92bWlnQTB2RjdnMEJ1emdNRElTSXBSbDE4ekNpbHNKUWJYaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxhWmNVLy85VzIzcSt3S250d0dJV0tsQm1QeE9tUWQ5b0p1RVMwTEVHRmJjdEY2cldGdkpBd1FHRWxaUFVGc3BaUHpoQWtqc2FYTXdkTVQyMDN2TWpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA5LCJhZHZTZWNyZXRLZXkiOiJlM0U4UnV4ZU5iemVFbDR2T3N4djJPUjNsbHhLUGlXWDhLak1ZekdkQ1ZZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJlN1VWeEgyV1IyZVhWbmotMXBOS1h3IiwicGhvbmVJZCI6IjBkMzAzYjFiLTlkOWItNDVhMC05YzQ0LWYyZmQ3ZmU0ODM1MCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLM2JQRmozK0JYQlNENTQzZklyeXpSODgreXc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMDk2ZHE3RHp6TUw4M0l6ZlEyK3kvWExwV24wPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjQ4UkhTQ0xEIiwibWUiOnsiaWQiOiIyNjA5Njc4MzgxNDQ6NzBAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tMQTdwZ0JFTzZacHJnR0dBNGdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ind5UWVURjJTSE16b2NUVXBDTmMzOGJoYkxlbjU1SnFEaHpLT01VRDdaeUE9IiwiYWNjb3VudFNpZ25hdHVyZSI6Im4xT0ptWCtocGhsd2lyZzQ1TmFtQWJWRWltSXUrT3hKUXNyeDZpWjRTRDJaQTl0dW9rTi9XWldBZEl2QWx1RjYrbWtpUzNYeG9vNC95a25Xa0REYURBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ0Qlo3SmZGbTVzNURCOFd1bXFmcDlmTFk1R2g0T1hiaUowdy9DM1NOLzFSbjQwaVNZZ2JKa2lHYUQzVnhkam5ZTm81azZDZ2R0OVNLVEhjbEl1b2Zqdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2MDk2NzgzODE0NDo3MEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjTWtIa3hka2h6TTZIRTFLUWpYTi9HNFd5M3ArZVNhZzRjeWpqRkErMmNnIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI4Njc5MTYzfQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "JAVA BOY MR2K TECH",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
