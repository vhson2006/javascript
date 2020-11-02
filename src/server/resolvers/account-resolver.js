import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import { model } from '../models';

export const authenticateResolver = async (parent, args, context) => {
  const account = await model.account.findOne({
    where: {
      email: args.username,
      password: crypto.createHash('md5').update(args.password).digest('hex'),
    },
  });

  if (account) {
    context.res.cookie(
      'token',
      jwt.sign({ username: account.email, id: account.id }, process.env.JWT_SERECT),
      {
        domain: 'localhost', path: '/', maxAge: 900000, httpOnly: false, secure: false, sameSite: 'Strict',
      },
    );
    return jwt.sign({ username: account.email, id: account.id }, process.env.JWT_SERECT);
  }
  return '';
};

export const registerResolver = async (parent, args) => {
  const account = await model.account.create({
    name: args.name,
    email: args.email,
    password: crypto.createHash('md5').update(args.password).digest('hex'),
    phone: args.phone,
    address: args.address,
    status: 'active',
    checkIn: '09:00',
    checkOut: '18:00',
    fixDevice: '1',
    joinDate: new Date(),
  });
  await account.save();

  return true;
};

export const resetPasswordResolver = async (parent, args) => false;

export const activateAccountResolver = async (parent, args) => true;

export const getDetailResolver = async (parent, args, context) => {
  const account = await model.account.findOne({
    where: {
      email: context.req.user.username,
    },
  });

  return account;
};

export const updateAccountResolver = async (parent, args, context) => {
  let account = await model.account.findOne({
    where: {
      email: context.req.user.username,
    },
  });

  account = Object.assign(account, {
    name: args.name,
    email: args.email,
    phone: args.phone,
    address: args.address,
    fixDevice: args.fixDevice,
    checkIn: args.checkIn,
    checkOut: args.checkOut,
    ipAddress: args.ipAddress,
    latitude: args.latitude,
    longitude: args.longitude,
  });

  await account.save();

  return account;
};
