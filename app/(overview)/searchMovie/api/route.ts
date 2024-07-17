import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { movieInfo } from '@/lib/type';
import { Prisma } from "../../../../lib/component/tool/Prisma";

export async function GET (req: NextRequest)  {
  console.log("GETメソッド開始")
  try{
    
    const searchParams = req.nextUrl.searchParams;
    const searchQuery = searchParams.get('searchQuery')
    console.log("searchQuery:")
    console.log(searchQuery)
    let data:movieInfo[];
    
    if(!searchQuery){
      console.log("条件値なし")
      data = await Prisma.movieList.findMany()
      
    } else  {
      console.log("条件値あり")
      data = await Prisma.movieList.findMany({
        where:{
          title:{
            contains:searchQuery,
          }
        },
        select:{
          id:true,
          title:true,
        }
      })
    }
    console.log("取得データ")
    console.log(data)
    // コネクト切断は要件等
    // Prisma.$disconnect();
    console.log(NextResponse.json(data))
    return NextResponse.json(data)
  } catch(err){
    
    return NextResponse.json(
      { message: 'Internal Server Error TEST' },
      { status: 500 },
    )
  }
}