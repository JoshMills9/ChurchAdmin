export const VerificationCode = async (value: any): Promise<string | null> => {
    if (!value.phoneNumber || typeof value.phoneNumber !== 'string') {
      console.error('Invalid phone number provided to VerificationCode:', value.phoneNumber);
      return null;
    }
  
    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(value),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        console.error('Server error:', data);
        return null;
      }
  
      console.log('Verification sent:', data);
      return data;
    } catch (error) {
      console.error('Error in VerificationCode:', error);
      return null;
    }
  };
  