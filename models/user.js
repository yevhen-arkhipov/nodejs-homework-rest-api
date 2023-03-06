const { Schema, model } = require('mongoose');
const { handleMongooseAddError } = require('../helpers');
const Joi = require('joi');

const emailRegexp = /^\S+@\S+\.\S+$/;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      match: emailRegexp,
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: 6,
    },
    subscription: {
      type: String,
      enum: ['starter', 'pro', 'business'],
      default: 'starter',
    },
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false }
);

userSchema.post('save', handleMongooseAddError);

const singUpSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

const logInSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

const updateSubscriptionSchema = Joi.object({
  subscription: Joi.string().valid('starter', 'pro', 'business').required(),
});

const schemas = {
  singUpSchema,
  logInSchema,
  updateSubscriptionSchema,
};

const User = model('user', userSchema);

module.exports = { User, schemas };
