import axios from 'axios';

const PostInventory = (items) => {
    axios.post('http://localhost:8080/items/add', items);
}

export default PostInventory;
