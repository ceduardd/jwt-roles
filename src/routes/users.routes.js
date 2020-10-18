import { Router } from 'express';
const router = Router();

import * as userCtrl from '../controllers/users.controller';
import { verifyToken, isAdmin } from '../middlewares/authJwt';
import {
  checkRolesExisted,
  checkDuplicateUsernameOrEmail,
} from '../middlewares/verifySignUp';

router.post(
  '/',
  [verifyToken, isAdmin, checkRolesExisted, checkDuplicateUsernameOrEmail],
  userCtrl.createUser
);

export default router;
