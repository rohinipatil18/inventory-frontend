import axios from 'axios';
import PostInventory from './PostInventory';

test('if invenory is posted', () => {
    const spy = jest.spyOn(axios, 'post');
    PostInventory([]);
    expect(spy).toHaveBeenCalledTimes(1);
})