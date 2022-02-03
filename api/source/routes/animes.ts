import express from 'express';
import controller from '../controllers/animes';
const router = express.Router();

router.get('/:id', controller.getAnime);
router.get('/title/:title', controller.fetchAnimes);

export = router;
