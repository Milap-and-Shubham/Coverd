import { render, screen } from '@testing-library/react';
import NavBar from '../src/components/NavBar';

describe('group', () => {
    it('Should render all the buttom in the nav bar', () => {
        render(<NavBar />);
        expect(screen.getByRole('button', { name: 'Home' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Explore' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'About Us' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Contact' })).toBeInTheDocument();
    })
})