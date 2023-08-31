import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import App from '../../src/App';

describe('Login screen', () => {
  test('Should be able to see the website name on the screen', () => {
    const { getByText } = render(<App />);
    expect(getByText('Marques-Bank')).toBeInTheDocument();
  });
});
