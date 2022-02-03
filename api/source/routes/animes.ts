import express from 'express';
import controller from '../controllers/animes';
const router = express.Router();

router.get('/animes/:title', controller.getAnime);

export = router;
