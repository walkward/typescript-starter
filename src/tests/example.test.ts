/**
 * Example test
 */

import test from 'ava';

const fn = async () => Promise.resolve('foo');

test('Example Test', async (t) => {
  t.is(await fn(), 'foo');
});
