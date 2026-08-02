// The production hostname is a hardcoded constant on purpose: the robots.txt
// host-guard compares the build's SITE_URL against this value, and a guard an
// env var can disable is not a guard.
export const PRODUCTION_ORIGIN = 'https://majiphaneer.com';

export const SITE_NAME = 'Maji Phaneer';
