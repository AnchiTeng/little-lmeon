import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './components/BookingForm';


test('renders the occasion select element with options', () => {
  render(<BookingForm />);
  const occasionSelectElement = screen.getByLabelText('Occasion');

  expect(occasionSelectElement).toBeInTheDocument();
  expect(occasionSelectElement).toHaveValue('Other');

  // const options = occasionSelectElement.querySelectorAll('option');
  // expect(options).toHaveLength(4);
  // expect(options[0]).toHaveValue('');
  // expect(options[1]).toHaveValue('Birthday');
  // expect(options[2]).toHaveValue('Anniversary');
  // expect(options[3]).toHaveValue('Other');

  fireEvent.change(occasionSelectElement, { target: { value: 'Birthday' } });
  expect(occasionSelectElement).toHaveValue('Birthday');
});
