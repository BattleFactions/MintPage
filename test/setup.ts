import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/react';

// Mock Global Console to avoid annoying console messages when running tests
Object.assign(global.console, {
  error: jest.fn(),
  warn: jest.fn(),
  info: jest.fn(),
});

process.env.ENV = 'test';

// Log Node Unhandled Behaviours
process.on('uncaughtException', (exception) => {
  fail(exception);
});

process.on('unhandledRejection', (reason) => {
  fail(reason);
});
