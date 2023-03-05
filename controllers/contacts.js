const { Contact } = require('../models/contact');
const { HttpError, ctrlWrapper } = require('../helpers');

const getAll = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 20, favorite = false } = req.query;
  const skip = (page - 1) * limit;

  if (favorite === 'true' || !favorite === '') {
    const result = await Contact.aggregate([
      {
        $match: { favorite: true },
      },
    ]);

    return res.json(result);
  }

  const result = await Contact.find({ owner }, '', {
    skip,
    limit,
  });

  res.json(result);
};

const getById = async (req, res) => {
  const id = req.params.contactId;
  const result = await Contact.findById(id);

  if (!result) {
    throw HttpError(404, 'Not found');
  }

  res.json(result);
};

const add = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Contact.create({ ...req.body, owner });

  res.status(201).json(result);
};

const deleteById = async (req, res) => {
  const id = req.params.contactId;
  const result = await Contact.findByIdAndRemove(id);

  if (!result) {
    throw HttpError(404, 'Not found');
  }

  res.json({
    message: 'contact deleted',
  });
};

const updateById = async (req, res) => {
  const id = req.params.contactId;
  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });

  if (!result) {
    throw HttpError(404, 'Not found');
  }

  res.json(result);
};

const updateStatusContact = async (req, res) => {
  const id = req.params.contactId;
  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });

  if (!result) {
    throw HttpError(404, 'Not found');
  }

  res.json(result);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  deleteById: ctrlWrapper(deleteById),
  updateById: ctrlWrapper(updateById),
  updateStatusContact: ctrlWrapper(updateStatusContact),
};
