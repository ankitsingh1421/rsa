import Confirmation from '../models/confirmation.js';
import { v4 as uuidv4 } from 'uuid';

export const createConfirmation = async (req, res) => {
  try {
    const { policyType, amount, expiryDate, customerId } = req.body;

    const policyNumber = 'RSA-' + uuidv4().split('-')[0].toUpperCase();

    const confirmation = new Confirmation({
      policyNumber,
      policyType,
      amount,
      expiryDate,
      customerId
    });

    const savedConfirmation = await confirmation.save();
    res.status(201).json(savedConfirmation);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
