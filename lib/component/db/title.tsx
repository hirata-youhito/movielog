import { prisma } from "../tool/Prisma"
import { movieInfo } from "../searchMovie/movieList";

export async function getTitle(searchQuery?:string){
    const response:movieInfo[] = await prisma.movieList.findMany({
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
    prisma.$disconnect();
    return  response
};
