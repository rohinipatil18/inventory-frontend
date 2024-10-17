import { useState } from 'react';

import UpdatedInventory from './UpdatedInvetory';

const UpdateInventory = () => {
    const [days, setDays] = useState(0);
    const [updateInventory, setUpdateInventory] = useState(false);
    const update = () => {
        setUpdateInventory(true);
    }
    return (
        <>
            <h5>Update Inventory</h5>
            <label>Days</label>
            <input type="number" onChange={e => setDays(e.target.value)}></input>
            <input type="submit" value="Update" onClick={update}></input>
            {updateInventory && <UpdatedInventory days={days}></UpdatedInventory>}
        </>
    )
};

export default UpdateInventory;
