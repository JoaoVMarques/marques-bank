import { fireEvent, render, waitFor } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event'
import React from 'react';
import App from '../../src/App';

describe('Login screen', () => {  
  beforeEach(() => {
    window.history.pushState({}, '', '/');
  });

  test('Should be able to see the website name on the screen', () => {
    const { getByText } = render(<App />);
    expect(getByText('Marques-Bank')).toBeInTheDocument();
  });

  test('Should be able to login and go to home page', async () => {
    const screen = render(<App />);
    const emailForm = screen.getByLabelText(/endereço de email/i);
    const passwordForm = screen.getByLabelText(/senha/i);
    const termsButton = screen.getByLabelText(/concordo com os termos de uso/i);
    const loginButton = screen.getByRole('button', {
      name: /login/i
  })

    await userEvent.type(emailForm, 'email@email.com');
    await userEvent.type(passwordForm, 'password');
    await userEvent.click(termsButton);
    await userEvent.click(loginButton);

    const homePage = await screen.findByText(/homepage/i);
    expect(homePage).toBeInTheDocument();
  })

  test('Not should be able to login without valid email', async () => {
    const screen = render(<App />);
    const passwordForm = screen.getByLabelText(/senha/i);
    const termsButton = screen.getByLabelText(/concordo com os termos de uso/i);
    const loginButton = screen.getByRole('button', {
      name: /login/i
    })

    await userEvent.type(passwordForm, 'password');
    await userEvent.click(termsButton);
    await userEvent.click(loginButton);

    const invalidEmail = await screen.findByText(/email is a required field/i)
    const invalidPassword = screen.queryByText(/password is a required field/i)
    expect(invalidEmail).toBeInTheDocument();
    expect(invalidPassword).toBeNull();
  })

  test('Not should be able to login without valid password', async () => {
    const screen = render(<App />);
    const emailForm = screen.getByLabelText(/endereço de email/i);
    const termsButton = screen.getByLabelText(/concordo com os termos de uso/i);
    const loginButton = screen.getByRole('button', {
      name: /login/i
    })

    await userEvent.type(emailForm, 'email@email.com  ');
    await userEvent.click(termsButton);
    await userEvent.click(loginButton);

    const invalidPassword = await screen.findByText(/password is a required field/i)
    const invalidEmail = screen.queryByText(/email is a required field/i)
    expect(invalidPassword).toBeInTheDocument();
    expect(invalidEmail).toBeNull();
  })

  test('Not should be able to go to home page without confirm the terms button', async () => {
    const screen = render(<App />);
    const emailForm = screen.getByLabelText(/endereço de email/i);
    const passwordForm = screen.getByLabelText(/senha/i);
    const termsButton = screen.getByLabelText(/concordo com os termos de uso/i);
    const loginButton = screen.getByRole('button', {
      name: /login/i
  })

    await userEvent.type(emailForm, 'email@email.com');
    await userEvent.type(passwordForm, 'password');
    await userEvent.click(loginButton);

    const homePage = screen.queryByText(/homepage/i);
    expect(homePage).toBeNull();
  })
});