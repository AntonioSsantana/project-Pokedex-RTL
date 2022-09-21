import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testa a aplicação', () => {
  it('Testa se a página contém um heading com o texto "Encountered pokémons"', () => {
    renderWithRouter(<App />);
    const heading = screen.getByRole('heading', { name: /encountered pokémons/i });
    expect(heading).toBeInTheDocument();
  });

  it('Teste se possui um tipo de botão para cada tipo de pokémon', () => {
    renderWithRouter(<App />);

    const ALL = screen.getByRole('button', { name: /all/i });
    expect(ALL).toBeInTheDocument();

    const ELECTRIC = screen.getByRole('button', { name: /electric/i });
    expect(ELECTRIC).toBeInTheDocument();

    const FIRE = screen.getByRole('button', { name: /fire/i });
    expect(FIRE).toBeInTheDocument();

    const BUG = screen.getByRole('button', { name: /bug/i });
    expect(BUG).toBeInTheDocument();

    const POISON = screen.getByRole('button', { name: /poison/i });
    expect(POISON).toBeInTheDocument();

    const PSYCHIC = screen.getByRole('button', { name: /psychic/i });
    expect(PSYCHIC).toBeInTheDocument();

    const NORMAL = screen.getByRole('button', { name: /normal/i });
    expect(NORMAL).toBeInTheDocument();

    const DRAGON = screen.getByRole('button', { name: /dragon/i });
    expect(DRAGON).toBeInTheDocument();
  });

  it('Testa se todos os botões possuem o mesmo data-testid', () => {
    renderWithRouter(<App />);

    const buttons = screen.getAllByTestId('pokemon-type-button');
    const buttonsLegth = 7;

    expect(buttons.length).toBe(buttonsLegth);
  });

  it('Testa se existe um botão para resetar um filtro', () => {
    renderWithRouter(<App />);

    const button = screen.getByRole('button', { name: /all/i });
    expect(button).toBeInTheDocument();

    userEvent.click(button);

    const buttonReset = screen.getByRole('img', { name: /pikachu sprite/i });
    expect(buttonReset).toBeInTheDocument();
  });
});
