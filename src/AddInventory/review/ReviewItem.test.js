import { render, screen } from '@testing-library/react';
import ReviewItem from './ReviewItem';

test('if item is rendered', () => {
    const item = {
        name: "test",
        sellInDays: 1,
        quality: 1
    };
    render(<ReviewItem item={item}/>);
    expect(screen.getByText(/test/i)).toBeInTheDocument();
})