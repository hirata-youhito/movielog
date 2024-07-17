//不使用
import { Prisma } from "../tool/Prisma"
import { movieInfo } from "../../type";

export async function getMovieInfo(searchQuery?:string){
    const response:movieInfo[] = await Prisma.movieList.findMany({
        where:{
            title:{
                contains:searchQuery,
            }
        }
    });

    {response.map(async (info) => {
        console.log("Title:"+info.title+",Id:"+info.id);
    })}
    // console.log(await response[0].title)
    

    // コネクト切断は要件等
    // prisma.$disconnect();
    return  response
};
