export default function (errorCode) {
  switch (errorCode) {
    case 'auth/invalid-email':
      return 'Invalid e-mail';
    case 'auth/weak-password':
      return 'Weak password';
    case 'auth/wrong-password':
      return 'Wrong password';
    case 'auth/email-already-exists':
      return 'The provided email is already in use by an existing user. Each user must have a unique email.';
    case 'auth/id-token-revoked':
      return 'The Firebase ID token has been revoked.';
    case 'auth/internal-error':
      return 'The Authentication server encountered an unexpected error while trying to process the request.';
    case 'auth/invalid-argument':
      return 'An invalid argument was provided to an Authentication method. The error message should contain additional information.';
    case 'auth/invalid-page-token':
      return 'The provided next page token in listUsers() is invalid. It must be a valid non-empty string.';
    case 'auth/invalid-password':
      return 'The provided value for the password user property is invalid. It must be a string with at least six characters.';
    case 'auth/invalid-user-import':
      return 'The user record to import is invalid.';
    case 'auth/session-cookie-revoked':
      return 'The Firebase session cookie has been revoked.';
    case 'auth/uid-already-exists':
      return 'The provided uid is already in use by an existing user. Each user must have a unique uid.';
    case 'auth/unauthorized-continue-uri':
      return 'The domain of the continue URL is not whitelisted. Whitelist the domain in the Firebase Console.';
    case 'auth/user-not-found':
      return 'There is no existing user record corresponding to the provided identifier.';
    default:
      return 'An unexpected error occurs.';
  }
}
