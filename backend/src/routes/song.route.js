import { Router } from "express";
import {protectRoute,requireAdmin} from '../middleware/auth.middleware.js'
import { getAllSongs, getFeaturedSongs, getMadeForYouSongs, getTrendingsSongs } from "../controllers/song.controller.js";
const router = Router();

router.get('/',getAllSongs)
router.get('/featured',getFeaturedSongs)
router.get('/made-for-you',getMadeForYouSongs)
router.get('/trending',getTrendingsSongs)

export default router;