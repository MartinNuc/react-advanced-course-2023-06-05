import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { Joke } from "./joke";
import axios from 'axios';
import { RouterProvider, createMemoryRouter } from "react-router-dom";

jest.mock('axios');
const mockedAxios = axios as unknown as jest.Mocked<typeof axios>;

beforeEach(() => {
  mockedAxios.get.mockResolvedValue({
    data: {
      value: 'This is very funny joke'
    }
  });
})

it('displays Load next button', async () => {
  render(<Joke />);
  expect(screen.getByRole('button', { name: 'Load next joke' })).toBeInTheDocument();
  await waitFor(() => expect(screen.getByTestId('joke')).not.toHaveTextContent(''))
});

it('displays joke fetched from the server', async () => {
  render(<Joke />);
  expect(await screen.findByText('This is very funny joke')).toBeInTheDocument();
});

it('button load next joke loads another one', async () => {
  render(<Joke />);
  expect(await screen.findByText('This is very funny joke')).toBeInTheDocument();

  mockedAxios.get.mockResolvedValueOnce({
    data: {
      value: 'This is second joke'
    }
  });

  const buttonEl = screen.getByRole('button', { name: 'Load next joke' });
  fireEvent.click(buttonEl);

  expect(await screen.findByText('This is second joke')).toBeInTheDocument();
});

it('button is disabled while fetching', async () => {
  render(<Joke />);
  expect(screen.getByRole('button', { name: 'Load next joke' })).toBeDisabled()
  // await waitFor(() =>
  // );

  // to get rid of the act error 
  await waitFor(() => expect(screen.getByTestId('joke')).not.toHaveTextContent(''))
});

it('fetches joke by category', async () => {
  const router = createMemoryRouter([
    {
      path: '/:category',
      element: <Joke />
    }
  ], {
    initialEntries: ['/random']
  })
  const {debug} = render(
    <RouterProvider router={router} />
  );

  await waitFor(() => expect(screen.getByTestId('joke')).not.toHaveTextContent(''))
  
  expect(await screen.findByTestId('joke')).toHaveTextContent('This is very funny joke')
});
