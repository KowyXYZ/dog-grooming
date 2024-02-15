import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google'

import { connectToDB } from "@utils/database";
import User from "@models/user";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        })
    ],

    callbacks: {
        async session({session}) {
            const sessionUser = await User.findOne({
                email: session.user.email
            })

            session.user.id = sessionUser._id.toString()
            return session
        },

        async signIn({profile}) {
            
              

                try {
                    await connectToDB()

                    const userExists = await User.findOne({
                        emaill: profile.email
                    })

                    if(!userExists) {
                        await User.create({
                            username: profile.name.replace(" ", "").toLocaleLowerCase(),
                            email: profile.email,
                            image: profile.image
                        })
                    }

                } catch (error) {
                    console.log(error)
                }


             
            
        }
    }
})

export {handler as GET, handler as POST}