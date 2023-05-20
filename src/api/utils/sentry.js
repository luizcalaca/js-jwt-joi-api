const Sentry = require('@sentry/node');
// or use es6 import statements
// import * as Sentry from '@sentry/node';

Sentry.init({
  // eslint-disable-next-line max-len
  dsn: 'https://f9fbc9fd8e844872b6a9d8863f5b2337@o4505217752432640.ingest.sentry.io/4505217791033344',

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

const transaction = Sentry.startTransaction({
    op: 'System',
    name: 'Calaça',
});

module.exports = { transaction, Sentry };