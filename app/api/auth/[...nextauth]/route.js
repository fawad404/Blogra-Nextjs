import Admin from '@/app/utilis/model/admin';
import { connectToDB } from '@/app/utilis/mongodb';
import NextAuth from 'next-auth';
import CredentialsProvider  from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt'
const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},

            async authorize(credentials){
                const { email, password } = credentials;
                try{
                    await connectToDB();
                    const user = await Admin.findOne({ email });

                    if(!user){
                        return null;
                    }

                    const passwordsMatch = await bcrypt.compare(password, user.password);

                    if(!passwordsMatch) {
                        return null;
                    }

                    return user;
                }catch(error){
                    console.log("Error: " , error);
                }
                // const user = { id: "1" };
                return user;
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/"
    }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
