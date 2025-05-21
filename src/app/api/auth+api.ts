// app/api/auth.ts

import { parsePhoneNumberFromString } from 'libphonenumber-js';

export async function POST(req: Request) {
  try {
    const { phoneNumber } = await req.json();

    const isValidPhoneNumber = (phone: string) => {
      const phoneNumber = parsePhoneNumberFromString(phone, "GH");
      phoneNumber?.format('E.164')
      return phoneNumber?.isValid() ?? false;
    };

    if (!phoneNumber) {
      return Response.json({ error: 'Phone number is required' }, { status: 400 });
    }

    if (isValidPhoneNumber(phoneNumber)) {
         // Generate a 6-digit code
      const code = Math.floor(10000 + Math.random() * 90000);

      return Response.json({code})
    } else {
      return Response.json({error: "Invalid number"}, {status: 400});
    }

  } catch (error) {
    console.error('SMS error:', error);
    return Response.json({ error: 'Failed to send SMS' }, { status: 500 });
  }
}
