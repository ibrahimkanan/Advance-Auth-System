export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Your Email</title>
</head>
<body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #d1d5db; background-color: #0a0a0a; margin: 0; padding: 40px 20px;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #171717; border: 1px solid #262626; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.5);">
    <div style="padding: 30px; text-align: center; border-bottom: 1px solid #262626;">
      <h1 style="color: #f3f4f6; margin: 0; font-size: 24px;">Verify Your Email</h1>
    </div>
    <div style="padding: 30px;">
      <p style="color: #d1d5db;">Hello,</p>
      <p style="color: #d1d5db;">Thank you for signing up! Your verification code is:</p>
      <div style="text-align: center; margin: 35px 0;">
        <span style="font-size: 36px; font-weight: bold; letter-spacing: 8px; color: #ffffff; background-color: #262626; padding: 15px 25px; border-radius: 6px; border: 1px solid #404040; display: inline-block;">{verificationCode}</span>
      </div>
      <p style="color: #d1d5db;">Enter this code on the verification page to complete your registration.</p>
      <p style="color: #d1d5db;">This code will expire in 15 minutes for security reasons.</p>
      <p style="color: #d1d5db;">If you didn't create an account with us, please ignore this email.</p>
      <p style="color: #d1d5db; margin-top: 30px;">Best regards,<br><strong style="color: #f3f4f6;">Auth_System</strong></p>
    </div>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #737373; font-size: 12px;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset Successful</title>
</head>
<body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #d1d5db; background-color: #0a0a0a; margin: 0; padding: 40px 20px;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #171717; border: 1px solid #262626; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.5);">
    <div style="padding: 30px; text-align: center; border-bottom: 1px solid #262626;">
      <h1 style="color: #f3f4f6; margin: 0; font-size: 24px;">Password Reset Successful</h1>
    </div>
    <div style="padding: 30px;">
      <p style="color: #d1d5db;">Hello,</p>
      <p style="color: #d1d5db;">We're writing to confirm that your password has been successfully reset.</p>
      <div style="text-align: center; margin: 40px 0;">
        <div style="background-color: #f3f4f6; color: #0a0a0a; width: 60px; height: 60px; line-height: 60px; border-radius: 50%; display: inline-block; font-size: 32px; font-weight: bold; box-shadow: 0 0 15px rgba(243, 244, 246, 0.2);">
          ✓
        </div>
      </div>
      <p style="color: #d1d5db;">If you did not initiate this password reset, please contact our support team immediately.</p>
      <div style="background-color: #0a0a0a; padding: 20px; border-radius: 6px; border: 1px solid #262626; margin: 25px 0;">
        <p style="color: #f3f4f6; margin-top: 0; font-weight: bold;">Security Tips:</p>
        <ul style="color: #d1d5db; margin-bottom: 0; padding-left: 20px;">
          <li style="margin-bottom: 8px;">Use a strong, unique password</li>
          <li style="margin-bottom: 8px;">Enable two-factor authentication if available</li>
          <li>Avoid using the same password across multiple sites</li>
        </ul>
      </div>
      <p style="color: #d1d5db;">Thank you for helping us keep your account secure.</p>
      <p style="color: #d1d5db; margin-top: 30px;">Best regards,<br><strong style="color: #f3f4f6;">Auth_System</strong></p>
    </div>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #737373; font-size: 12px;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Your Password</title>
</head>
<body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #d1d5db; background-color: #0a0a0a; margin: 0; padding: 40px 20px;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #171717; border: 1px solid #262626; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.5);">
    <div style="padding: 30px; text-align: center; border-bottom: 1px solid #262626;">
      <h1 style="color: #f3f4f6; margin: 0; font-size: 24px;">Password Reset</h1>
    </div>
    <div style="padding: 30px;">
      <p style="color: #d1d5db;">Hello,</p>
      <p style="color: #d1d5db;">We received a request to reset your password. If you didn't make this request, please ignore this email.</p>
      <p style="color: #d1d5db;">To reset your password, click the button below:</p>
      <div style="text-align: center; margin: 40px 0;">
        <a href="{resetURL}" style="background-color: #f3f4f6; color: #0a0a0a; padding: 14px 28px; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 16px; display: inline-block; transition: background-color 0.3s;">Reset Password</a>
      </div>
      <p style="color: #737373; font-size: 14px; text-align: center;">This link will expire in 1 hour for security reasons.</p>
      <p style="color: #d1d5db; margin-top: 30px;">Best regards,<br><strong style="color: #f3f4f6;">Auth_System</strong></p>
    </div>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #737373; font-size: 12px;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;
