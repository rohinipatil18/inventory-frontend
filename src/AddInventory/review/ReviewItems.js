import { useInventoryContext } from '../../InventoryProvider';
import ReviewItem from './ReviewItem';

const ReviewItems = () => {
    const { items } = useInventoryContext();

    if(items.length === 0) return <div>No Items added</div>

    return (
        <>
            <h5>Items added to Inventory</h5>
            {items.map((item, index) => <ReviewItem item={item} key={index}></ReviewItem>)}
        </>
    );
};

export default ReviewItems;
