import express from 'express';
import { favoritesController } from '../controllers/controllers';

const router = express.Router();

router.post('/send-favorites', favoritesController.sendFavorites);
router.delete(
  '/delete-favorites/:userId/:recipeId',
  favoritesController.deleteFavorite
);
router.get('/get-favorites/:userId', favoritesController.getFavorites);

export default router;
