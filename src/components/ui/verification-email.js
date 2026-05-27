export function verificationEmail({name, otpCode}) {
  const currentYear = new Date().getFullYear();
  return `
    <div style="background-color: #f8fafc; padding: 60px 20px; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #3f3f46; min-height: 100%;">
      <div style="max-width: 480px; margin: 0 auto; background-color: #ffffff; padding: 40px; border: 1px solid #e4e4e7; border-radius: 16px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);">
        
        <!-- Logo / Brand Header -->
        <div style="border-bottom: 1px solid #f4f4f5; padding-bottom: 20px; margin-bottom: 30px; text-align: left;">
          <span style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; font-size: 11px; letter-spacing: 3px; color: #0d9488; text-transform: uppercase; font-weight: 700;">
            Gaber Usef &middot; Auth
          </span>
        </div>

        <!-- Heading -->
        <h2 style="color: #09090b; font-size: 22px; font-weight: 600; margin: 0 0 16px 0; letter-spacing: -0.5px; text-align: left;">
          Confirm Your Account
        </h2>
        
        <!-- Greeting -->
        <p style="color: #18181b; font-size: 15px; font-weight: 500; margin: 0 0 10px 0; text-align: left;">
          Hi ${name},
        </p>
        
        <!-- Description -->
        <p style="color: #52525b; font-size: 14px; line-height: 1.6; margin: 0 0 28px 0; text-align: left;">
          Thank you for registering. Please enter the verification code below on the signup page to activate your account and gain access to the Client Portal.
        </p>
        
        <!-- OTP Code display block -->
        <div style="background-color: #f8fafc; border: 1px solid #e4e4e7; border-radius: 10px; padding: 24px; text-align: center; margin: 28px 0; box-shadow: inset 0 1px 2px rgba(0,0,0,0.01);">
          <span style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; font-size: 38px; font-weight: 700; letter-spacing: 8px; color: #0d9488; display: inline-block; padding-left: 8px;">
            ${otpCode}
          </span>
        </div>
        
        <!-- Security notice -->
        <p style="color: #71717a; font-size: 12px; line-height: 1.5; margin: 24px 0 0 0; text-align: left;">
          This verification code is valid for <strong>10 minutes</strong>. For security reasons, do not share this code. If you did not request this, you can safely ignore this email.
        </p>

        <!-- Elegant Footer -->
        <div style="border-top: 1px solid #f4f4f5; margin-top: 40px; padding-top: 24px; text-align: left;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="color: #8e8e93; font-size: 11px; vertical-align: middle;">
                &copy; ${currentYear} gaberuseff.info
              </td>
              <td style="text-align: right; vertical-align: middle;">
                <a href="https://gaberuseff.info" style="color: #0d9488; text-decoration: none; font-size: 11px; font-weight: 600; border-bottom: 1px dotted #0d9488;">
                  Portfolio
                </a>
              </td>
            </tr>
          </table>
        </div>

      </div>
    </div>
  `;
}

export default verificationEmail;
