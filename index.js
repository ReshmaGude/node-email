const nodemailer = require ('nodemailer');

const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth:{
        user:"harshavardhan335@outlook.com",
        pass:"123456789"
    }
})
const options = {
    from : "harshavardhan335@outlook.com",

    // sending to single receiver
    // to : "kasa.saiharshavardhan@gmail.com",

    // sending to multiple receivers 
    // to : "kasa.saiharshavardhan@gmail.com, vardhanharsha8800@gmail.com",

    to : "kasa.saiharshavardhan@gmail.com, vardhanharsha8800@gmail.com",
    subject : "send a mail with node.js",
    text : "wow! That's correct"
}
transporter.sendMail(options, function(err,info){
    if (err){
        console.log(err)
    }
    else{
        console.log("sent: "+ info.response);
    }
    
})