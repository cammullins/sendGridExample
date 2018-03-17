const sgMail = require('@sendgrid/mail');
const fs = require('fs');

// Method 1 with Javascript
const sendWithJS = require('./emailTemplate.js');

// Method 2 with html and FS node module
let sendWithHtml = fs.readFileSync('emailHTMLTemplate.html', 'utf8', (err, data) => {
    if (err) throw err;
});

//make sure to import your API key here
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
    to: 'cmullins510@gmail.com',
    from: 'cmullins510@gmail.com',
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    //This is what you would use with method 1
    // html: sendWithJs(),

    // This is what you would use with method 2
    html: sendWithHtml,
};

//this sends the message
sgMail.send(msg);
