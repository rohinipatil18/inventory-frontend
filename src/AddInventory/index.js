import AddItem from "./AddItem";
import ReviewItems from "./review/ReviewItems";
import SubmitInventory from "./SubmitInventory";

const AddInventory = () => {
    return (
        <>
            <ReviewItems></ReviewItems>
            <AddItem></AddItem>
            <SubmitInventory></SubmitInventory>
        </>
    )
}

export default AddInventory;
