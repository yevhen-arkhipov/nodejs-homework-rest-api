const express = require('express');

const ctrl = require('../../controllers/contacts');

const { validateAddBody, validateUpdateBody } = require('../../middlewares/');

const schemas = require('../../schemas/contacts');

const router = express.Router();

router.get('/', ctrl.getAll);

router.get('/:contactId', ctrl.getById);

router.post('/', validateAddBody(schemas.addSchema), ctrl.add);

router.delete('/:contactId', ctrl.deleteById);

router.put(
  '/:contactId',
  validateUpdateBody(schemas.updateSchema),
  ctrl.updateById
);

module.exports = router;
