import { PrismaClient } from "@prisma/client";
import { NextApiRequest,NextApiResponse } from "next";
import { Middleware } from "./middleware";

const prisma = new PrismaClient();
export default async function handler(req:NextApiRequest, res: NextApiResponse){
 Middleware(req,res)
if (req.method === 'POST'){
   const {nama,harga,stok} = req.body
   const stokproduk = await prisma.stokproduk.create({
    data:{
        nama: nama as string,
        harga:Number(harga),
        stok:Number(stok),        
    }   
   })
   if(!stokproduk) return null
   if(!stokproduk){
       return res.status(400).json({message:"stokproduk not found"})
   }
   if(stokproduk){
    return res.status(200).json({message:"User created successfully",stokproduk})
   }
   
}



}