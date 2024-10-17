import axios from 'axios';

const UpdateAndGetInventory = async (days) => {
    const response = await axios.get(`http://localhost:8080/items/update?day=${days}`);
    return response.data;
}

export default UpdateAndGetInventory;
