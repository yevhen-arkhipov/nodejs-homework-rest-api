const express = require('express');

const ctrl = require('../../controllers/contacts');

const {
  validateAddBody,
  validateUpdateBody,
  validateUpdateFavorite,
  isValidId,
} = require('../../middlewares');

const { schemas } = require('../../models/contact');

const router = express.Router();

router.get('/', ctrl.getAll);

router.get('/:contactId', isValidId, ctrl.getById);

router.post('/', validateAddBody(schemas.addSchema), ctrl.add);

router.delete('/:contactId', isValidId, ctrl.deleteById);

router.put(
  '/:contactId',
  isValidId,
  validateUpdateBody(schemas.addSchema),
  ctrl.updateById
);

router.patch(
  '/:contactId/favorite',
  isValidId,
  validateUpdateFavorite(schemas.updateFavoriteSchema),
  ctrl.updateStatusContact
);

module.exports = router;
