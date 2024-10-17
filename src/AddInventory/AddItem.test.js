import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Inventory } from '../InventoryProvider';
import AddItem from './AddItem';

test('if component is rendered', () => {
    const setItems = jest.fn();
    const items = [];
    
    render(
        <Inventory.Provider value={{items, setItems}}>
            <AddItem/>
        </Inventory.Provider>
    );
    expect(screen.getByText(/Add Item/i)).toBeInTheDocument();
});

test('if item added', () => {
    const setItems = jest.fn();
    const items = [];
    
    render(
        <Inventory.Provider value={{items, setItems}}>
            <AddItem/>
        </Inventory.Provider>
    );
    const name = screen.getByTestId('name');
    userEvent.type(name, "test");
    expect(name.value).toBe("test");

    const sellInDays = screen.getByTestId('sellInDays');
    userEvent.type(sellInDays, "1");
    expect(sellInDays.value).toBe("1");

    const quality = screen.getByTestId('quality');
    userEvent.type(quality, "1");
    expect(quality.value).toBe("1");

    userEvent.click(screen.getByRole('button'));

    expect(setItems).toHaveBeenCalledTimes(1);
    expect(setItems).toHaveBeenLastCalledWith([{
        name: "test",
        sellInDays: "1",
        quality: "1"
    }]);
    expect(name.value).toBe("");
    expect(sellInDays.value).toBe("");
    expect(quality.value).toBe("");
});

