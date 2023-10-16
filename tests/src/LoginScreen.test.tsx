import { render } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event'
import React from 'react';
import App from '../../src/App';
import testAccount from '../mock/accountsMock';

const HomePageText = 'Marques'
const account = {
  email: 'correctEmail@email.com',
  password: '1234'
}

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
  });
  

  test('Should be able to see the website name on the screen', () => {
    const { getByText } = render(<App />);
    expect(getByText('Marques-Bank')).toBeInTheDocument();
  });

  test('Should be able to login and go to home page only with valid password and email', async () => {
    const screen = render(<App />);
    const emailForm = screen.getByLabelText(/endereço de email/i);
    const passwordForm = screen.getByLabelText(/senha/i);
    const loginButton = screen.getByRole('button', {
      name: /login/i
    })

    const testCredentials = async (email: String, password: String) => {
      await userEvent.type(emailForm, 'incorrectEmail@email.com');
      await userEvent.type(passwordForm, '123a');
      await userEvent.click(loginButton);
      
      const wrongCredentials = await screen.findByText(/email ou senha incorreto/i)
      expect(wrongCredentials).toBeInTheDocument();
      const closeButton = screen.getByRole('button', {
        name: /close/i
      })
      await userEvent.click(closeButton)

      await userEvent.clear(emailForm);
      await userEvent.clear(passwordForm);
  }

    const wrongEmail = 'incorrectEmail@email.com'
    const wrongPassword = '123a'
    
    await testCredentials(wrongEmail, wrongPassword);
    await testCredentials(account.email, wrongPassword);
    
    await userEvent.type(emailForm, account.email);
    await userEvent.type(passwordForm, account.password)

    await userEvent.click(loginButton);
    const homePage = await screen.findByRole('heading', {
      name: HomePageText
    })
    expect(homePage).toBeInTheDocument();
  })

  test('Not should be able to login without valid email', async () => {
    const screen = render(<App />);
    const passwordForm = screen.getByLabelText(/senha/i);
    const loginButton = screen.getByRole('button', {
      name: /login/i
    })

    await userEvent.type(passwordForm, 'password');
    await userEvent.click(loginButton);

    const invalidEmail = await screen.findByText(/email is a required field/i)
    const invalidPassword = screen.queryByText(/password is a required field/i)
    expect(invalidEmail).toBeInTheDocument();
    expect(invalidPassword).toBeNull();
  })

  test('Not should be able to login without valid password', async () => {
    const screen = render(<App />);
    const emailForm = screen.getByLabelText(/endereço de email/i);
    const loginButton = screen.getByRole('button', {
      name: /login/i
    })

    await userEvent.type(emailForm, account.email);
    await userEvent.click(loginButton);

    const invalidPassword = await screen.findByText(/password is a required field/i)
    const invalidEmail = screen.queryByText(/email is a required field/i)
    expect(invalidPassword).toBeInTheDocument();
    expect(invalidEmail).toBeNull();
  })
});