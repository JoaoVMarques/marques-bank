import { expect, vi } from "vitest";
import { account, testAccountInfo } from "../mock/accountsMock";
import App from '../../src/App';
import { RenderResult, render } from "@testing-library/react";
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

  const login = async (screen: RenderResult) => {
    const emailForm = screen.getByLabelText(/endereço de email/i);
    const passwordForm = screen.getByLabelText(/senha/i);
    const loginButton = screen.getByRole('button', {
      name: /login/i
    })

    await userEvent.type(emailForm, account.email);
    await userEvent.type(passwordForm, account.password)

    await userEvent.click(loginButton);
  }

  test('Should appear username in the screen', async () => {
    const screen = render(<App />);
    login(screen);
    const username = await screen.findByText(testAccountInfo.username)
    expect(username).toBeInTheDocument()
  })

  test('Should appear summary with available, deposited, etc..'), async () => {
    const screen = render(<App />);
    login(screen);
    const available = await screen.findAllByText(testAccountInfo.balance.available)
    const deposited = await screen.findAllByText(testAccountInfo.balance.deposited)
    const income = await screen.findAllByText(testAccountInfo.balance.income)
    const withdrawn = await screen.findAllByText(testAccountInfo.balance.withdrawn)

    expect(available).toBeInTheDocument()
    expect(deposited).toBeInTheDocument()
    expect(income).toBeInTheDocument()
    expect(withdrawn ).toBeInTheDocument()
  }
});