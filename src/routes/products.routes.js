import { Router } from 'express';
const router = Router();

import * as productsCtrl from '../controllers/products.controller';
import { verifyToken, isModerator, isAdmin } from '../middlewares/authJwt';

router.post('/', [verifyToken, isModerator], productsCtrl.createProduct);
router.get('/', productsCtrl.getProducts);
router.get('/:productId', productsCtrl.getProductById);
router.put(
  '/:productId',
  [verifyToken, isModerator],
  productsCtrl.updateProductById
);
router.delete(
  '/:productId',
  [verifyToken, isAdmin],
  productsCtrl.deleteProductById
);

export default router;
