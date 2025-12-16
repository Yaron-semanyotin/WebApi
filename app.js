require('dotenv').config(); //.env הפעלת פונקציה שמשלבת את משתני הסביבה מתוך הקובץ
const express = require('express'); // חיבור לספריית express
const app = express(); // אובייקט מסוג express
const productRouter = require('./api/v1/routes/product'); //כדי שנוכל להשתמש בניתובים שלו באפליקציה product ייבוא של קובץ 
const categoryRouter = require('./api/v1/routes/category'); //כדי שנוכל להשתמש בניתובים שלו באפליקציה category ייבוא של קובץ 
const orderRouter = require('./api/v1/routes/order'); //כדי שנוכל להשתמש בניתובים שלו באפליקציה order ייבוא של קובץ 
const userRouter = require('./api/v1/routes/user'); //כדי שנוכל להשתמש בניתובים שלו באפליקציה user ייבוא של קובץ 
const morgan = require('morgan'); // http לניטור בקשות morgan חיבור לספריית
const ipFilter = require('./api/v1/middlewares/ipFilter'); //ip לסינון כתובות middleware ייבוא
app.use(morgan('dev')); //developer בפורמט http לניטור בקשות morgan שימוש ב
const mongoUser = process.env.MONGO_USER; //.env יצירת משתנה שלוקח את המידע שנמצא בקובץ
const mongoPass = process.env.MONGO_PASS; //.env יצירת משתנה שלוקח את המידע שנמצא בקובץ
const mongoServer = process.env.MONGO_SERVER; //.env יצירת משתנה שלוקח את המידע שנמצא בקובץ
const mongoConnStr = `mongodb+srv://${mongoUser}:${mongoPass}@${mongoServer}/?appName=Ecomm`; //mongodb מחרוזת התחברות ל
// היא שכבת ביניים או שכבת תיווך middleware
app.use(ipFilter); //באפליקציה middlewareרישום ה 

app.use('/product',productRouter); //ינתב אותו לנתיב הפנימי productRouter אז ה /pruduct  אם הנתיב הוא
app.use('/category',categoryRouter); //ינתב אותו לנתיב הפנימי categoryRouter אז ה /category  אם הנתיב הוא
app.use('/order',orderRouter); //ינתב אותו לנתיב הפנימי orderRouter אז ה /order  אם הנתיב הוא
app.use('/user',userRouter); //ינתב אותו לנתיב הפנימי userRouter אז ה /user  אם הנתיב הוא

app.use((req,res)=>{ // הגדרת שכבה אחרונה עבוד הודעה 404 לא נמצא
  res.status(404).json({message: `Path not found`});
});
module.exports = app; // ייצוא קובץ app

