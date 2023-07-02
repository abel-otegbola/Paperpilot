import connectMongo from "@/database/connection";
import { Recommendations } from "@/model/Schema"

export default async function handler(req, res) {
    await connectMongo().catch(error => {
        return res.status(400).json({error: "Connection Failed"})
    })

    const { slug } = req.query

    return res.json(await Recommendations.find({ 'user': slug[0] }).catch(err => res.status(404).json(err)))
}