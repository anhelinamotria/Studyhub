export function isUniversityEmail(email) {
  return /^[^\s@]+@([a-z0-9-]+\.)*uzhnu\.edu\.ua$/i.test(String(email).trim());
}
