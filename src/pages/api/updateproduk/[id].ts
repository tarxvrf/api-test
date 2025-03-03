import { PrismaClient } from "@prisma/client";
import { NextApiRequest,NextApiResponse } from "next";
import { Middleware } from "../middleware";


const prisma = new PrismaClient()
export default async function handler(req:NextApiRequest, res: NextApiResponse){
Middleware(req,res)
if (req.method === 'PATCH'){
    const {id} = req.query
    const {nama,harga,stok}= req.body
    const data = await prisma.stokproduk.update({where:{
      id:parseInt(id as string )
    },
    data:{
        nama:nama as string,
        harga:parseFloat(harga),
        stok:parseInt(stok) 
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