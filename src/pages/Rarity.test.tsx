import React from 'react';
import { render, screen } from '@testing-library/react';
import Rarity from 'app/pages/Rarity';

describe('Rarity Page', () => {
  it('render rarity page', async () => {
    render(<Rarity />);
    expect(screen.getByText('Rarity')).toBeInTheDocument();
  });
});
