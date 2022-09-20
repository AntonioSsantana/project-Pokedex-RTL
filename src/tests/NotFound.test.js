import React from 'react';
import { screen } from '@testing-library/react';
import { NotFound } from '../pages';
import renderWithRouter from '../renderWithRouter';

describe('Testa o componente NotFound.js', () => {
  it('Teste se a página contém um heading com o texto Page requested not found', () => {
    renderWithRouter(<NotFound />);

    const heading = screen.getByRole(
      'heading',
      { name: /page requested not found/i, level: 2 },
    );
    expect(heading).toBeInTheDocument();
  });

  it('Teste se a página contém a url de imagem na página', () => {
    renderWithRouter(<NotFound />);

    const screenImage = screen.getByRole('img');
    expect(screenImage).toBeInTheDocument();
    expect(screenImage).toHaveAttribute(
      'src',
      expect.stringContaining(
        'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif',
      ),
    );
  });
});
