import ShimmerCard from "./ShimmerCard";
import "./shimmer.css";
const Shimmer = () => {
  return (
    <div className="shimmer">
      <div className="shimmer-search">
        <div className="shimmer-search-text">
          <button className="shimmer-filter-btn">
          </button>
        </div>
      </div>
      <div className="shimmer-res-container">
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
      </div>
    </div>
  );
};

export default Shimmer;
