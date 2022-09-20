import React from 'react';
import { screen } from '@testing-library/react';
import { FavoritePokemons } from '../pages';
import renderWithRouter from '../renderWithRouter';

describe('Testa o componente FavoritesPokemons', () => {
  it('Teste se é exibida a mensagem No favorite pokemon found', () => {
    renderWithRouter(<FavoritePokemons />);

    const messageNotFound = screen.getByText(/no favorite pokemon found/i);
    expect(messageNotFound).toBeInTheDocument();
  });
});
