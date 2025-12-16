const http = require('http'); // שימוש בספריית http
const app = require('./app'); // ייבוא של קובץ app
const port = 5050; // הפורט שנאזין לו
const srv = http.createServer(app); // יצירת שרת שבתוכו יש את כל האפליקציה app
srv.listen(port,()=>{ // port שבעזרתה אנחנו מאזינים ל srv פונקציה שמשתמשת במשתנה 
  console.log(`The server is up`);
});