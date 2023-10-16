import { render } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event'
import React from 'react';
import App from '../../src/App';
import testAccount from '../mock/accountsMock';

const mockLocalStorage = () => {
  localStorage.clear();
  localStorage.setItem('accounts', JSON.stringify([testAccount]));
}

describe('Login screen', () => {
  beforeEach(() => {
    mockLocalStorage();
    window.history.pushState({}, '', '/');

    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(), // Deprecated
        removeListener: vi.fn(), // Deprecated
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });
  })

  test('Should be able to see the "registro" in the screen', async () => {
    const screen = render(<App />);
    const registerButton = screen.getByRole('button', {
      name: /criar conta/i
    })
    await userEvent.click(registerButton)
    expect(screen.getByText('Registro')).toBeInTheDocument();
  })
});
