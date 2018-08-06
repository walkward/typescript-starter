/**
 * Testing process to ensure consistent environment
 */

import test from 'ava';

test('Process should be using node version specified in package', async (t) => {
  t.is(process.env.npm_config_node_version, process.versions.node);
});
