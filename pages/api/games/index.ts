import { connectDB } from "@/utils/database";
import { NextApiRequest, NextApiResponse } from "next";
// type
import { GameType } from "@/interface";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const db = (await connectDB).db('game-pick')
    // POST
    if(req.method === 'POST') {
        try {
            const formData : GameType = req.body
            const result = await db.collection('games').insertOne(formData)
            
            console.log(formData)

            return res.status(200).json(result)

        } catch(err) {
            return res.status(500)
        }
    }
}