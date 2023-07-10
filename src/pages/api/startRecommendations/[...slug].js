import connectMongo from "@/database/connection";
import { Recommendations } from "@/model/Schema";
const cron = require('cron')
const natural = require('natural');
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

    // Analyze and return base words of recommendations
    const nlpResult = natural.PorterStemmer.tokenizeAndStem(data.subjects.join(",")).join(" ")

    // Schedule paper delivery based on user time preference
    if(data.time === "Daily") {
      cron.schedule('00 00 * * *', () => {
        console.log('Running at ', new Date())
        getData(slug[0], nlpResult, data.platforms)
      })
    }
    else if(data.time === "Every three days") {
      cron.schedule('00 00 * * 1,4', () => {
        console.log('Running at ', new Date())
        getData(slug[0], nlpResult, data.platforms)
      })
    }
    else if(data.time === "Weekly") {
      cron.schedule('00 00 * * 1', () => {
        console.log('Running at ', new Date())
        getData(slug[0], nlpResult, data.platforms)
      })
    }
    else {
      cron.schedule('00 00 7 * *', () => {
        console.log('Running at ', new Date())
        getData(slug[0], nlpResult, data.platforms)
      })
    }

    // 

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

async function getData(user, search, platforms) {
  const urls = [
    `https://api.semanticscholar.org/graph/v1/paper/search?query=${search}&openAccessPdf&fields=title,year,authors,publicationTypes`,
    `${process.env.NEXT_PUBLIC_SPRINGER_URL}/metadata/json?q=keyword:${search}&api_key=${process.env.NEXT_PUBLIC_SPRINGER_API_KEY}`,
    `https://ieeexploreapi.ieee.org/api/v1/search/articles?querytext=${search}&apikey=${process.env.NEXT_PUBLIC_IEEE_API_KEY}`
  ]

  // Get papers randomly from the urls using the generated recommendation search query
  if(platforms === []) {
    // Selects any url automatically if platforms is not set by the user
    const res = await axios.get(urls[Math.floor(Math.random() * 2)])
    .catch(err => {
        console.log('Failed to fetch data')
    })
    sendEmail(user, res.data.data)
  }
  else {
    // Use platforms url set by the user
    const newUrls = []
    if(platforms.indexOf("Semantic Scholar") !== -1) {
      newUrls.push(0)
    }
    if(platforms.indexOf("Springer") !== -1) {
      newUrls.push(1)
    }
    if(platforms.indexOf("IEEE") !== -1) {
      newUrls.push(2)
    }
    else {
      newUrls.push(0)
    }
    
    const res = await axios.get(urls[newUrls[0]])
    .catch(err => {
        console.log('Failed to fetch data')
    })
    sendEmail(user, res.data.data)

  }
}