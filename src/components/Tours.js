import { useState } from 'react';
import { tours } from "../data";
import Title from "./Title";
import Tour from "./Tour";
function Tours() {
  const [toursData, setToursData] = useState(tours);

  const handleDeleteItem = (tourId) => {
    const updatedTours = tours.filter((tour) => tour.id !== tourId);
    setToursData(updatedTours);
  };


  return (
    <div>
      <section className="section" id="tours">
        <Title title="featured" span="tours" />
        <div className="section-center featured-center">
          {toursData.map((tour) => (
            <div key={tour.id}>
              <Tour {...tour} />
              <button onClick={() => handleDeleteItem(tour.id)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Tours;