

import { PrismaClient } from "@prisma/client";
import { NextApiRequest,NextApiResponse } from "next";


const prisma = new PrismaClient()
export default async function handler(req:NextApiRequest, res: NextApiResponse){

if (req.method === 'DELETE'){
    const {id} = req.query   
    const data = await prisma.user.delete({where:{
      id:parseInt(id as any)
    } 
    }
    )
    if(!data){
        return res.status(404).json({message:"User not found"})
     }else{
        return res.status(200).json({message:"data berhasil dihapus"})
     }
   
}

}