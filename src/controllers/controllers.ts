import { Request, Response } from 'express';
import { favoritesTableSchema, favoriteT } from '../db/schema';
import { db } from '../config/db';
import { and, eq } from 'drizzle-orm';

const sendFavorites = async (req: Request, res: Response) => {
  try {
    const { userId, recipeId, title, image, cookTime, servings }: favoriteT =
      req.body;

    if (!userId || !recipeId || !title) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const newFavorite = await db
      .insert(favoritesTableSchema)
      .values({
        userId,
        recipeId,
        title,
        image,
        cookTime,
        servings,
      })
      .returning();

    res
      .status(201)
      .json({ message: 'Favorite sent successfully', newFavorite });
  } catch (error) {
    console.error('Error sending favorite:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteFavorite = async (req: Request, res: Response) => {
  try {
    const { userId, recipeId } = req.params;

    await db
      .delete(favoritesTableSchema)
      .where(
        and(
          eq(favoritesTableSchema.userId, String(userId)),
          eq(favoritesTableSchema.recipeId, Number(recipeId))
        )
      );

    res.status(200).json({ message: 'Favorite deleted successfully' });
  } catch (error) {
    console.error('Error deleting favorite:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getFavorites = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const favorites = await db
      .select()
      .from(favoritesTableSchema)
      .where(eq(favoritesTableSchema.userId, String(userId)));

    res.status(200).json({ favorites });
  } catch (error) {
    console.error('Error getting favorites:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const favoritesController = {
  sendFavorites,
  deleteFavorite,
  getFavorites,
};
