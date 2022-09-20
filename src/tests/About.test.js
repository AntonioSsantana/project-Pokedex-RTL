import React from "react";
import { About } from "../pages";
import renderWithRouter from "../renderWithRouter";
import { screen } from '@testing-library/react';

describe('Testa o componente About.js', () => {

    it('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
        renderWithRouter(<About />);

        const heading = screen.getByRole('heading', { name: /about pokédex/i, level: 2 });
        expect(heading).toBeInTheDocument();
    });

    it('Teste se a página contém a url de imagem na pokédex', () => {
        renderWithRouter(<About />);

        const screenImage = screen.getByRole('img', { name: /pokédex/i });
        expect(screenImage).toBeInTheDocument();
        expect(screenImage).toHaveAttribute('src',
            expect.stringContaining(
                'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png'
            ));
    });

})