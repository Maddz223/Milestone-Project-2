import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactUs from '../pages/ContactUs';

describe('ContactUs Component', () => {
  beforeEach(() => {
    // Render component fresh before each test
    render(<ContactUs />);
  });

  test('renders all input fields and button', () => {
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });

  test('shows validation errors when submitting empty form', async () => {
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    expect(await screen.findByText(/name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/message is required/i)).toBeInTheDocument();
  });

  test('shows email invalid error for wrong email format', async () => {
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'invalid-email' } });
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    expect(await screen.findByText(/email is invalid/i)).toBeInTheDocument();
  });

  test('clears error when input value changes', async () => {
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    const nameError = await screen.findByText(/name is required/i);
    expect(nameError).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John' } });
    expect(screen.queryByText(/name is required/i)).not.toBeInTheDocument();
  });

  test('shows success modal on valid submit and clears form', async () => {
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'Hello!' } });

    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    // Wait for modal to appear
    const modalTitle = await screen.findByText(/success!/i);
    expect(modalTitle).toBeInTheDocument();

    // Inputs are cleared
    expect(screen.getByLabelText(/name/i).value).toBe('');
    expect(screen.getByLabelText(/email/i).value).toBe('');
    expect(screen.getByLabelText(/message/i).value).toBe('');
  });

  test('modal close button closes modal', async () => {
    // Submit form to open modal
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'Hello!' } });
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    // Wait for modal
    await screen.findByText(/success!/i);

    // Click close button
    fireEvent.click(screen.getByRole('button', { name: /close/i }));

    // Modal should disappear
    await waitFor(() => {
      expect(screen.queryByText(/success!/i)).not.toBeInTheDocument();
    });
  });

  test('escape key closes modal', async () => {
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'Hello!' } });
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    await screen.findByText(/success!/i);

    fireEvent.keyDown(document, { key: 'Escape' });

    await waitFor(() => {
      expect(screen.queryByText(/success!/i)).not.toBeInTheDocument();
    });
  });
});