import {Request, Response, NextFunction} from 'express';
import axios, {AxiosResponse} from 'axios';
import {Animes} from "../models/animes";


// fetching a anime
const getAnime = async (req: Request, res: Response, next: NextFunction) => {
  // get the anime title from the req
  let title: string = req.params.title;
  // get the anime
  let result: AxiosResponse = await axios.get(`https://kitsu.io/api/edge/anime?filter[text]=${title}`);
  let animes: Animes = result.data.data[0].attributes;
  return res.status(200).json({
    message: animes
  });
};

export default {getAnime};
