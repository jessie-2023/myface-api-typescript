// import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom/extend-expect'
// import PostsPage from './components/PostsPage';
import CreateUser from './components/CreateUser';

test('renders MyFace text', () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/MyFace/i);
  expect(textElement).toBeInTheDocument();
});

describe("CreateUser", () => {
    it("Should render without error", () => {
        render(<CreateUser/>);
    });
});

// describe("CreateUser", () => {

// });