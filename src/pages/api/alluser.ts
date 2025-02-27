import { Middleware } from "./middleware";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest,NextApiResponse } from "next";

const prisma = new PrismaClient()

export default async function handler(req:NextApiRequest, res: NextApiResponse){
  Middleware(req,res)   

if (req.method === 'GET'){
   const alluser= await prisma.user.findMany()

   if(!alluser){
      return res.status(404).json({message: 'No user found'})
   }else{
      return res.status(200).json(alluser)
   }
}



}