const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const sendWelcomeEmail = (email,name)=>{
    sgMail.send({
        to:email,
        from:'himangi.hs@live.com',
        subject: 'Welcome to the Task-Manager',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app :)`
    })
}
const sendCancellationEmail = (email,name)=>{
    sgMail.send({
        to:email,
        from:'himangi.hs@live.com',
        subject: 'We are happy to have served you',
        text: `Goodbye, ${name}. I was really great to serve you. Let me know how you get along with the app :)`
    })
}

module.exports={
    sendWelcomeEmail,
    sendCancellationEmail
}