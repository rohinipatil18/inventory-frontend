import { useRef } from 'react';
import { useInventoryContext } from '../InventoryProvider';
import itemList from './items';

const AddItem = () => {
    const nameRef = useRef();
    const sellInDaysRef = useRef();
    const qualityRef = useRef();
    const { items, setItems } = useInventoryContext();

    const update = () => {
        setItems([
            ...items,
            {
                name: nameRef.current.value,
                sellInDays: sellInDaysRef.current.value,
                quality: qualityRef.current.value,
            }
        ]);
        clearValues();
    }

    const clearValues = () => {
        nameRef.current.value = '';
        sellInDaysRef.current.value = '';
        qualityRef.current.value = '';
    }

    return (
        <>
            <h5>Add Item</h5>
            <div>
                <label>Item Name</label>
                <input type="text" ref={nameRef} list="items" data-testid="name"></input>
                <datalist id="items">
                    {itemList.map(item => <option value={item.name} key={item.name}></option>)}
                </datalist>
            </div>
            <div>
                <label>Sell In Days</label>
                <input type="number" ref={sellInDaysRef} data-testid="sellInDays"></input>
            </div>
            <div>
                <label>Quality</label>
                <input type="number" ref={qualityRef} data-testid="quality"></input>
            </div>
            <input type="button" onClick={update} value="Add"></input>
        </>
    );
};

export default AddItem;
