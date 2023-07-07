const automation = require('@/pages/candymail.automation');
const candymail = require('candymail');

export default async function handler(req, res) {

    const { slug } = req.query

    candymail.init(automation.workflows, {
        mail: {
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASSWORD,
            },
            tls: {
                rejectUnauthorized: true,
            },
        },
        hosting: {
            url: process.env.HOSTING_URL
        },
        db: {
            reset: true
        },
        debug: {
            trace: true
        },
    })
    .then((e) => {
        candymail.start()
    })

    candymail.runWorkflow('recommend', slug[0])
    res.send('recommendations started')
    
}