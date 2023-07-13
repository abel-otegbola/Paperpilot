import connectMongo from "@/database/connection";
import { Recommendations } from "@/model/Schema";
const cron = require('cron').CronJob;
const { EmailTemplate } = require("@/utils/templates/emailTemplate");
import { render } from '@react-email/render';
import nodemailer from 'nodemailer';
import axios from "axios";
const Email = require('email-templates')

export default async function handler(req, res) {
    const { slug } = req.query

    await connectMongo().catch(error => {
        return res.status(404).json({ error: "Connection Failed"})
    })

    // Get user recommendations from database
    const data =  await Recommendations.findOne( { user: slug[0] })

    // 
    getData(slug[0], data.subjects[0])

    // Schedule paper delivery based on user time preference
    let setTime = "00 00 00 * * 1"
    if(data.time === "Daily") {
      setTime = '00 00 00 * * *'
    }
    else if(data.time === "Every three days") {
      setTime = '00 00 00 * * 1,4'
    }
    else if(data.time === "Weekly") {
      setTime = '00 00 00 * * 1'
    }
    else {
      setTime = '00 00 00 7 * *'
    }
      const job = new cron(setTime, () => {
        console.log('Running at ', new Date())
        getData(slug[0], nlpResult)
      }, null, true)
      job.start()


}

//Email sending implementation
function sendEmail(user, data) {
    const transporter = nodemailer.createTransport({
      service: "hotmail",
      auth: {
        user: process.env.NEXT_PUBLIC_MAIL_USER,
        pass: process.env.NEXT_PUBLIC_MAIL_PASSWORD,
      },
    });

    const emailHtml = render(EmailTemplate({ data })); //Change the template to html to send

    const options = {
      from: process.env.NEXT_PUBLIC_MAIL_USER,
      to: user,
      subject: 'New Research recommendations',
      html: emailHtml,
    };

    transporter.sendMail(options, (err, info) => {
      if(err){
        console.log(err);
        return;
      }
      console.log(info.response)
    });
}

async function getData(user, search) {
    const res = await axios.get(`https://api.semanticscholar.org/graph/v1/paper/search?query=${search}&openAccessPdf&fields=title,year,authors,publicationTypes`)
    .catch(err => {
        console.log('Failed to fetch data')
    })
    if(res.data) {
      sendEmail(user, res.data.data)
    }
}
