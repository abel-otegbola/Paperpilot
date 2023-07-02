import connectMongo from "@/database/connection";
import { Recommendations } from "@/model/Schema"

export default async function handler(req, res) {
    const { slug } = req.query

    await connectMongo().catch(error => {
        return res.status(404).json({ error: "Connection Failed"})
    })
    return res.json(await Recommendations.updateOne( { user: slug[0] }, req.body.data, { upsert: true }).catch(err => res.status(400).json(err)))

}