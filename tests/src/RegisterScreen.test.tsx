import { RenderResult, render } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event'
import React from 'react';
import App from '../../src/App';
import testAccount from '../mock/accountsMock';

function mockLocalStorage() {
  localStorage.clear();
  localStorage.setItem('accounts', JSON.stringify([testAccount]));
}

const VALID_ACCOUNT = {
  username: 'usernameTest',
  password: 'passwordT',
  email: 'emailTest@email.com'
}

async function enterInRegisterPage(screen: RenderResult) {
  const registerButton = screen.getByRole('button', {
    name: /criar conta/i
  })
  await userEvent.click(registerButton)
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
    await enterInRegisterPage(screen)
    expect(screen.getByText('Registro')).toBeInTheDocument();
  })

  test('Not should be able to login without accept terms', async () => {
    const screen = render(<App />);
    await enterInRegisterPage(screen)
    
    const usernameForm = screen.getByRole('textbox', {
      name: /nome de usuario/i
    })
    const emailForm = screen.getByRole('textbox', {
      name: /endereço de email/i
    })
    const passwordForm = screen.getByLabelText(/senha/i)

    await userEvent.type(usernameForm, VALID_ACCOUNT.username);
    await userEvent.type(emailForm, VALID_ACCOUNT.email);
    await userEvent.type(passwordForm, VALID_ACCOUNT.password);

    const loginButton = screen.getByRole('button', {
      name: /login/i
    })

    await userEvent.click(loginButton)
    expect(screen.getByText('Registro')).toBeInTheDocument();
  })
});
