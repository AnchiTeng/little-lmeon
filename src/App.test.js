import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './components/BookingForm';
import Heading from './components/Heading';
import Order from './components/Order';


test('renders the occasion select element with options', () => {
  // render(<Order />);
  // expect(screen.getByRole("img")).toBeInTheDocument();

  render(<Heading/>)

  const headingElement = screen.getByText("Promotion code: happy10off");
  expect(headingElement).toBeInTheDocument();
 
});
