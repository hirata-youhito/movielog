//Alternative Titles_MOVIES.代替タイトル_映画
export type Title = {
    id:number;
    titles:[
        {
        iso_3166_1:string;
        title:string;
        type:string;
        }
    ];
}

//Credits_MOVIES.クレジット_映画
export type Credit = {
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

//Details_MOVIES.細部_映画

//Movie_Search.映画_捜索

//Person_Search.人_捜索

//Movies_Trending.映画_トレンド

//People_Trending.人_トレンド

//テスト用
export type TitleSearchResponse = {
    total:number;
    total_page:number;
    results:Title[];
  }