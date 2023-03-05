const express = require('express');

const ctrl = require('../../controllers/contacts');

const {
  validateAddBody,
  validateUpdateBody,
  validateUpdateFavorite,
  isValidId,
  authenticate,
} = require('../../middlewares');

const { schemas } = require('../../models/contact');

const router = express.Router();

router.get('/', authenticate, ctrl.getAll);

router.get('/:contactId', authenticate, isValidId, ctrl.getById);

router.post('/', authenticate, validateAddBody(schemas.addSchema), ctrl.add);

router.delete('/:contactId', authenticate, isValidId, ctrl.deleteById);

router.put(
  '/:contactId',
  authenticate,
  isValidId,
  validateUpdateBody(schemas.addSchema),
  ctrl.updateById
);

router.patch(
  '/:contactId/favorite',
  authenticate,
  isValidId,
  validateUpdateFavorite(schemas.updateFavoriteSchema),
  ctrl.updateStatusContact
);

module.exports = router;
