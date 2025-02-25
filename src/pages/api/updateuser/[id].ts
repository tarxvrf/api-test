

import { PrismaClient } from "@prisma/client";
import { NextApiRequest,NextApiResponse } from "next";


const prisma = new PrismaClient()
export default async function handler(req:NextApiRequest, res: NextApiResponse){

if (req.method === 'PATCH'){
    const {id} = req.query
    const {username,password}= req.body
    const data = await prisma.user.update({where:{
      id:parseInt(id as string )
    },
    data:{
        username:username as string,
        password:password as string
    }
    }
    )
    if(!data){
        return res.status(404).json({message:"User not found"})
     }else{
        return res.status(200).json({message:'data berhasil diubah',data})
     }
   
}

}