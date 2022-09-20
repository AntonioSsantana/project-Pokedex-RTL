import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste se o topo da aplicação contém um conjunto fixo de links de navegação', () => {

    it('Teste se a aplicação possui um link com o nome "Home"', () => {
        renderWithRouter(<App />);

        const linkHome = screen.getByRole('link', { name: /home/i });
        expect(linkHome).toBeInTheDocument;
    });

    it('Teste se a aplicação possui um link com o nome "About"', () => {
        renderWithRouter(<App />);

        const linkAbout = screen.getByRole('link', { name: /about/i });
        expect(linkAbout).toBeInTheDocument();
    });

    it('Teste se a aplicação possui um link com o nome "Favorites Pokémons"', () => {
        renderWithRouter(<App />);

        const linkFavorite = screen.getByRole('link', { name: /favorite pokémons/i });
        expect(linkFavorite).toBeInTheDocument();
    });
});
