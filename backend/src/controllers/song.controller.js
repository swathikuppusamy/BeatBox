import {Song} from '../models/song.model.js'

export const getAllSongs=async(req,res,next)=>{
    try {
        const songs=await Song.find().sort({createdAt: -1})
        res.json(songs)
    } catch (error) {
        next(error)   
    }
}

export const getFeaturedSongs=async(req,res,next)=>{
try {
    const songs = await Song.aggregate([  //aggregation pipeline to fetch random songs
        {
            $sample:{size:9},
        },
        {
            $project:{
                _id:1,
                title:1,
                artist:1,
                imageUrl:1,
                audioUrl:1.
            },
        }
    ])
    res.json(songs)
} catch (error) {
    next(error)
}
}

export const getMadeForYouSongs=async(req,res,next)=>{
    try {
        const songs = await Song.aggregate([  //aggregation pipeline to fetch random songs
            {
                $sample:{size:8},
            },
            {
                $project:{
                    _id:1,
                    title:1,
                    artist:1,
                    imageUrl:1,
                    audioUrl:1.
                },
            }
        ])
        res.json(songs)
    } catch (error) {
        next(error)
    }
}

export const getTrendingsSongs=async(req,res,next)=>{
    
    try {
        const songs = await Song.aggregate([  //aggregation pipeline to fetch random songs
            {
                $sample:{size:10},
            },
            {
                $project:{
                    _id:1,
                    title:1,
                    artist:1,
                    imageUrl:1,
                    audioUrl:1.
                },
            }
        ])
        res.json(songs)
    } catch (error) {
        next(error)
    }
}