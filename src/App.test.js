import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import 'src/js/jquery.1.11.1.js';
import 'src/js/bootstrap.js';
import 'src/js/SmoothScroll.js';
import 'src/js/nivo-lightbox.js';
import 'src/js/jqBootstrapValidation.js';
import 'src/js/contact_me.js';
import 'src/js/main.js';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
