import { useQuery } from 'react-query';
import UpdateAndGetInventory from '../api/UpdateAndGetInventory';

const UpdatedInventory = ({ days }) => {
    const {data: inventories, error, isLoading} = useQuery(
        [days],
        () => UpdateAndGetInventory(days),
    );
    
    if (isLoading) return <div>Updating inventories...</div>;
    if (error) return <div>An error occurred: {error.message}</div>;

    return (
        <>
            {inventories.map(inventory => <div>{inventory}</div>)}
        </>
    )
};

export default UpdatedInventory;
