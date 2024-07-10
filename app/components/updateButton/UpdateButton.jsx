"use client"
import { useSession } from "next-auth/react";
const UpdateButton = ({ category, title, id }) => {
    const {data: session} = useSession();
    return (
        <>
        {session && 
            <a 
            className='block px-4 py-2.5 text-sm text-center text-white font-bold bg-blue-500 hover:bg-blue-400 focus:ring-4 focus:ring-blue-300 rounded-full'
            style={{float: 'right'}}
            href={`/blog/${category}/${title}/${id}`}>Update Post</a>
            
        }
        </>
    )
}

export default UpdateButton;