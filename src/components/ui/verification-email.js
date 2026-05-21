export function verificationEmail({name, otpCode}) {
  return `
    <div style="background-color: #09090b; padding: 40px 20px; font-family: sans-serif; text-align: center; color: #f4f4f5; direction: rtl;">
      <div style="max-width: 480px; margin: 0 auto; background-color: #18181b; padding: 32px; rounded-radius: 16px; border: 1px solid #27272a; border-radius: 12px;">
        <h2 style="color: #ffffff; font-size: 24px; margin-bottom: 8px;">Hi ${name}</h2>
        <p style="color: #a1a1aa; font-size: 14px; margin-bottom: 24px;">Thank you for signing up with us. Please use the following verification code to activate your account:</p>
        
        <div style="background-color: #09090b; padding: 16px; border-radius: 8px; border: 1px solid #3f3f46; display: inline-block; letter-spacing: 6px; font-size: 32px; font-weight: bold; color: #ffffff; margin-bottom: 24px;">
          ${otpCode}
        </div>
        
        <p style="color: #71717a; font-size: 12px; margin-top: 16px;">This code is valid for 10 minutes only. If you did not create an account, you can safely ignore this email.</p>
      </div>
    </div>
  `;
}

export default verificationEmail;
