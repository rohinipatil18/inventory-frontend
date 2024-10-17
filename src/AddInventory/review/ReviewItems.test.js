import { render, screen } from '@testing-library/react';
import ReviewItems from './ReviewItem';
import { Inventory } from '../../InventoryProvider';

const setItems = jest.fn();

xtest('if items are rendered', () => {
    const items = [{
        name: 'test',
        sellInDays: 1,
        quality: 1
    }];
    render(
        <Inventory.Provider value={{items, setItems}}>
            <ReviewItems/>
        </Inventory.Provider>
    );
    expect(screen.getByText(/test/i)).toBeInTheDocument();
});

xtest('if no data messages displayed', () => {
    const items = [];
    render(
        <Inventory.Provider value={{items, setItems}}>
            <ReviewItems/>
        </Inventory.Provider>
    );
    expect(screen.getByText(/test/i)).toBeInTheDocument();
});
