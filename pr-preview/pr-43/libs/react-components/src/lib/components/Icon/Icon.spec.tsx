import { render } from '@testing-library/react';

import Icon from './index';

describe('Icon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon className="fa fa-home" />);
    expect(baseElement).toBeTruthy();
  });
});
