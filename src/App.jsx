import { useState } from "react";
import { reviewsData } from "../public/data/reviewsData";
import "./App.css";
import Button from "./components/ButtonComponent/ButtonComponent";
import Card from "./components/Card/Card";
import Header from "./components/HeaderComponent/HeaderComponent";

function App() {
  // Default page size (6 items per page)
  const itemsPerPage = 6;

  // State to keep track of the data being shown
  const [showPage, setShowPage] = useState(1);

  // Get the data for the current page
  const currentData = reviewsData.slice(0, showPage * itemsPerPage);

  // Handle the "Show More" button click
  const handleShowMore = () => {
    setShowPage(showPage + 1);
  };
  return (
    <main>
      {/* Header Component */}
      <Header />

      {/* Card Component */}
      <section className="w-11/12 mx-auto px-4 pt-10 pb-5 lg:px-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold ">Recent Activity</h3>
          {/* Button Component */}
          <Button
            text="Share a Review"
            colorStyle="border-2 border-sky-500 font-bold text-gray-700"
          />
        </div>

        {/* list of all the card components */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {currentData.map((item, index) => {
            return <Card key={index} data={item} />;
          })}
        </div>
      </section>

      {/* Show More button */}
      {currentData.length < reviewsData.length && (
        <div className="text-center my-5 ">
          <button
            onClick={handleShowMore}
            className="px-4 py-2 bg-slate-900 text-white rounded-md cursor-pointer"
          >
            Show More
          </button>
        </div>
      )}
    </main>
  );
}

export default App;
