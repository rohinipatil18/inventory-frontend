import { useMutation } from 'react-query';
import { useInventoryContext } from '../InventoryProvider';
import PostInventory from '../api/PostInventory'

const SubmitInventory = () => {
    const { items } = useInventoryContext();
    const mutation = useMutation(PostInventory)

    const submit = () => mutation.mutate(items);

    if (mutation.isLoading) {
        return <div>Submitting...</div>;
    }

    if (mutation.isError) {
        return <div>Error: {mutation.error.message}</div>;
    }

    if (mutation.isSuccess) {
        return <div>Inventory submitted!</div>;
    }

    return (
        <div>
            <input type="submit" value="Submit Inventory" onClick={submit}></input>
        </div>
    );
}

export default SubmitInventory;
