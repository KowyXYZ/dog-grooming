import Scheduling from "@models/scheduling"
import { connectToDB } from "@utils/database"


export const POST = async(req, res) => {
    const {name, number, id} = await req.json()

    try {
        await connectToDB()
        const newScheduling = new Scheduling({
            name: name,
            number: number,
            id: id
        })

        await newScheduling.save()

        return new Response(JSON.stringify(newScheduling), {status: 201})
    } catch (error) {
        console.log(error)
        return new Response('Failed to create a new prompt', {stauts: 500})
    }
}