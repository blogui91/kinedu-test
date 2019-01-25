export default function (key, fallback = null) {
  if (typeof process.env[key] !== 'undefined') {
    return process.env[key];
  }
  return fallback;
}
