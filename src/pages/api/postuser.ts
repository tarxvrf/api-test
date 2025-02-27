import { PrismaClient } from "@prisma/client";
import { NextApiRequest,NextApiResponse } from "next";
import { Middleware } from "./middleware";

const prisma = new PrismaClient();
export default async function handler(req:NextApiRequest, res: NextApiResponse){
 Middleware(req,res)
if (req.method === 'POST'){
   const {username,password} = req.body
   const user = await prisma.user.create({
    data:{
        username:username as string,
        password:password as string
    }   
   })
   if(!user) return null
   if(!user){
       return res.status(400).json({message:"User not found"})
   }
   if(user){
    return res.status(200).json({message:"User created successfully",user})
   }
   
}



}