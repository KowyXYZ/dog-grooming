import Scheduling from "@models/scheduling"
import { connectToDB } from "@utils/database"


export const GET = async(req, res) => {
    
    try {
        await connectToDB()
        const appointments = await Scheduling.find({})
        return new Response(JSON.stringify(appointments), {status: 201})
    } catch (error) {
       return new Response('Failed to fetch', {status: 500})
    }
}