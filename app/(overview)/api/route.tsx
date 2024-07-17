export async function getImage(movieId:string) {
  const imageHeaders = new Headers();
  imageHeaders.append("Accept", "application/json");
  imageHeaders.append("Authorization", ` Bearer ${process.env.Access_Token_Auth}`);
  console.log("env",process.env)
  const imageResponse = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/images`,
      {
          method:'GET',
          headers:{'Content-Type':'application/json'}
      }
      
  )
}