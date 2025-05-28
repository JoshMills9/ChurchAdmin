// app/api/auth.ts

import { parsePhoneNumberFromString } from 'libphonenumber-js';
import mongoose from 'mongoose';
import User from '../../backend/mongoose';

const MONGO_URI = process.env.MONGODB_KEY;


if (!mongoose.connections[0].readyState) {
  mongoose.connect(MONGO_URI)
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch((err) => console.error('❌ MongoDB connection error:', err));
}

export async function POST(req: Request) {
  try {
    const { phoneNumber, churchName } = await req.json();

    if (!phoneNumber) {
      return Response.json({ error: 'Phone number is required' }, { status: 400 });
    }

    
    /*const isValidPhoneNumber = (phone: string) => {
      const phoneNumber = parsePhoneNumberFromString(phone, "GH");
      return phoneNumber?.isValid() ?? false;
    };*/

    const formatPhone = (raw: string): string | null => {
      const phone = parsePhoneNumberFromString(raw, 'GH');
      return phone?.isValid() ? phone.format('E.164') : null;
    };

    if (!phoneNumber) {
      return Response.json({ error: 'Phone number is required' }, { status: 400 });
    }

    if (formatPhone(phoneNumber)) {
         // Generate a 6-digit code
      const code = Math.floor(10000 + Math.random() * 90000);
      const number = (formatPhone(phoneNumber))

    // Optional: store only unique users or update if they exist
    const existing = await User.findOne({ phone: number });
    if (!existing) {
      const createdUser = new User({ church: churchName, phone: number });
      await createdUser.save();
    }

    const value = {
      code,
      number
    }

    return Response.json(value);
  }} catch (error) {
    console.error('❌ API Error:', error);
    return Response.json({ error: 'Server error' }, { status: 500 });
  }
}

