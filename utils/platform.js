import parser from 'ua-parser-js';

export function parseUA(uaStr) {
  return parser(uaStr);
}
