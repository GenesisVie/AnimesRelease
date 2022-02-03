import {Request, Response, NextFunction} from 'express';
import axios, {AxiosResponse} from 'axios';
import {Animes} from "../models/animes";


// fetch animes by title
const fetchAnimes = async (req: Request, res: Response, next: NextFunction) => {
  // get the anime title from the req
  let title: string = req.params.title;
  // get the anime
  let result: AxiosResponse = await axios.get(`https://kitsu.io/api/edge/anime?filter[text]=${title}`);
  let animes: Animes[] = [];
  result.data.data.map((data: any) => {
    animes.push(data.attributes)
  })
  console.log(animes)
  return res.status(200).json({
    message: animes
  });
}

// get a anime
const getAnime = async (req: Request, res: Response, next: NextFunction) => {
  // get the anime title from the req
  let id: string = req.params.id;
  // get the anime
  let result: AxiosResponse = await axios.get(`https://kitsu.io/api/edge/anime/${id}`);
  let animes: Animes = result.data.data.attributes;
  console.log(animes.titles)
  return res.status(200).json({
    message: animes
  });
};

export default {getAnime, fetchAnimes};
