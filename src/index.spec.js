const testContext = require.context('./app', true, /\.spec\.ts/);
testContext.keys().forEach(testContext);