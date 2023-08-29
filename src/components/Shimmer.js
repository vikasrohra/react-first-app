const Shimmer = () => {
    return (
        <div className="restaurant-list">
            {Array(10).fill("").map((card, index) => {
                return <div key={"Card " + index} className="shimmer-card"></div>
            })}
        </div>
    );
}

export default Shimmer;