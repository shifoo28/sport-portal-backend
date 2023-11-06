import admin from 'firebase-admin';
import { serviceAccount } from './serviceAccountKey';
import { UserRecord } from 'firebase-admin/lib/auth/user-record';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export const sendOTP = async (phoneNumber: string):Promise<UserRecord> => {
  try {
    const user = await admin.auth().createUser({
      phoneNumber: phoneNumber,
    });
    console.log(`OTP sent to ${phoneNumber}: ${user.toJSON()}`);
    return user
  } catch (error) {
    console.log(error);
    return error
  }
};
