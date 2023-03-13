const express = require('express');

const ctrl = require('../../controllers/auth');

const {
  validateAuthError,
  validateUpdateSubscription,
  authenticate,
  upload,
  jimpImageResizer,
} = require('../../middlewares');

const { schemas } = require('../../models/user');

const router = express.Router();

router.post('/signup', validateAuthError(schemas.singUpSchema), ctrl.singUp);

router.post('/login', validateAuthError(schemas.logInSchema), ctrl.logIn);

router.post('/logout', authenticate, ctrl.logOut);

router.get('/current', authenticate, ctrl.getCurrent);

router.patch(
  '/',
  authenticate,
  validateUpdateSubscription(schemas.updateSubscriptionSchema),
  ctrl.updateStatusUser
);

router.patch(
  '/avatars',
  authenticate,
  upload.single('avatar'),
  jimpImageResizer,
  ctrl.updateAvatar
);

module.exports = router;
