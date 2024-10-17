const ReviewItem = ({ item }) => {
    return (
        <div>
            <span style={{margin: '5px'}}>{item?.name}</span>
            <span style={{margin: '5px'}}>{item?.sellInDays}</span>
            <span style={{margin: '5px'}}>{item?.quality}</span>
        </div>
    );
};

export default ReviewItem;
