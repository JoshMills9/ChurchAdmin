export const VerificationCode = async (phoneNumber: string): Promise<string | null> => {
    if (!phoneNumber || typeof phoneNumber !== 'string') {
      console.error('Invalid phone number provided to VerificationCode:', phoneNumber);
      return null;
    }
  
    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        console.error('Server error:', data);
        return null;
      }
  
      console.log('Verification sent:', data);
      return data.code;
    } catch (error) {
      console.error('Error in VerificationCode:', error);
      return null;
    }
  };
  