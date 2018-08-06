/**
 * Example test
 */

import test from 'ava';

// tslint:disable-next-line:typedef
const fn = async () => Promise.resolve('foo');

// tslint:disable-next-line:typedef
test('Example Test', async (t) => {
  t.is(await fn(), 'foo');
});
