import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Header from './index';
import IHeader from './interface';

describe('<Header />', () => {
  test('is truthy', () => {
    expect(Header).toBeTruthy();
  });
});
