//DB取得
export type movieInfo = {
    id:number,
    title:string,
}

//MOVIES_Alternative Titles.映画_代替タイトル
export type Titles = {
    id:number;
    titles:[
        {
        iso_3166_1:string;
        title:string;
        type:string;
        }
    ];
}

//MOVIES_Credits.映画_クレジット
export type Credits = {
    id:number;
    cast:[
        {
            adult:boolean;
            gender:number;
            id:number;
            known_for_department:string;
            name:string;
            original_name:string;
            popularity:number;
            profile_path:string;
            cast_id:number;
            character:string;
            credit_id:string;
            order:number;
        }
    ];
    crew:[
        {
            adult:boolean;
            gender:number;
            id:number;
            known_for_department:string;
            name:string;
            original_name:string;
            popularity:number;
            profile_path:string;
            credit_id:string;
            department:string;
            job:string;
        }
    ]
}

//Images_MOVIES.画像_映画
export type Images = {
    backdrops:[
        {
        aspect_ratio:number,
        height:number,
        iso_639_1:string,
        file_path:string,
        vote_average:number,
        vote_count:number,
        width:number,
        }
    ],
    id:number,
    logos:[
        {
        aspect_ratio:number,
        height:number,
        iso_639_1:string,
        file_path:string,
        vote_average:number,
        vote_count:number,
        width:number
        }
    ],
    posters:[
        {
        aspect_ratio:number,
        height:number,
        iso_639_1:string,
        file_path:string,
        vote_average:number,
        vote_count:number,
        width:number
        }
    ]
}
//Details_MOVIES.細部_映画
export type Details = {
    adult:boolean,
    backdrop_path:string,
    belongs_to_collection:string,
    budget:number,
    genres:[
        {
            id:number,
            name:string
        }
    ],
    homepage:string,
    id:number,
    imdb_id:string,
    original_language:string,
    original_title:string,
    overview:string,
    popularity:number,
    poster_path:string,
    production_companies:[
        {
            id:number,
            logo_path:string,
            name:string,
            origin_country:string
        }
    ],
    production_countries:[
        {
            iso_3166_1:string,
            name:string
        }
    ],
    release_date:string,
    revenue:number,
    runtime:number,
    spoken_languages:[
        {
            english_name:string,
            iso_639_1:string,
            name:string
        }
    ],
    status:string,
    tagline:string,
    title:string,
    video:boolean,
    vote_average:number,
    vote_count:number
}

//Details_MOVIES.細部_映画よりジャンル
export type genres = [
    {
        id:number,
        name:string
    }
]

//Movie_Search.映画_捜索

//Person_Search.人_捜索

//Movies_Trending.映画_トレンド

//People_Trending.人_トレンド

//GENRES_Movie List.ジャンル_映画一覧
export type Genres = {
    genres:[
        id:number,
        name:string,
    ]
}

//テスト用
export type TitleSearchResponse = {
    total:number;
    total_page:number;
    results:Titles[];
  }