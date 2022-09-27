import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente pokemon.js', () => {
  it('Testa se a imagem possui o src correto', () => {
    renderWithRouter(<App />);

    const image = screen.getByRole('img', { name: /pikachu sprite/i });

    expect(image).toHaveAttribute(
      'src',
      'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png',
    );
  });

  it('Testa se a imagem possui uma alt com o texto <name> sprite', () => {
    renderWithRouter(<App />);

    const image = screen.getByRole('img', { name: /pikachu sprite/i });

    expect(image).toHaveAttribute(
      'Alt',
      'Pikachu sprite',
    );
  });

  it('Testa se o botão de favoritos possui um src contento /star-icon.svg', () => {
    renderWithRouter(<App />);

    const details = screen.getByRole(
      'link',
      { name: /more details/i },
    );

    userEvent.click(details);

    const checked = screen.getByRole(
      'checkbox',
      { name: /pokémon favoritado\?/i },
    );

    userEvent.click(checked);

    const starChecked = screen.getByRole(
      'img',
      { name: /pikachu is marked as favorite/i },
    );

    expect(starChecked).toHaveAttribute('src', '/star-icon.svg');
  });

  it('Testa se é exibido na tela um texto com o tipo do pokemon', () => {
    renderWithRouter(<App />);

    const PokemonID = screen.getByTestId('pokemon-type');

    expect(PokemonID.innerHTML).toBe('Electric');
  });
});
