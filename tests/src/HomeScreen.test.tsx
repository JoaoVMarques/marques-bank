import { expect, vi } from "vitest";
import { account, testAccountInfo } from "../mock/accountsMock";
import App from '../../src/App';
import { render } from "@testing-library/react";
import React from "react";
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';

const mockLocalStorage = () => {
  localStorage.clear();
  localStorage.setItem('accounts', JSON.stringify([account]));
  localStorage.setItem('info', JSON.stringify([testAccountInfo]))
}

describe('Home screen', () => {
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

  test('Should appear username in the screen', async () => {
    const screen = render(<App />);
    const emailForm = screen.getByLabelText(/endereço de email/i);
    const passwordForm = screen.getByLabelText(/senha/i);
    const loginButton = screen.getByRole('button', {
      name: /login/i
    })

    await userEvent.type(emailForm, account.email);
    await userEvent.type(passwordForm, account.password)

    await userEvent.click(loginButton);
    const username = await screen.findByText(testAccountInfo.username)
    expect(username).toBeInTheDocument()
  })
});