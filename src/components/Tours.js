import { useState } from 'react';
import { tours } from "../data";
import Title from "./Title";
import Tour from "./Tour";

function Tours() {
  const [toursData, setToursData] = useState(tours);

  // Rest of your component logic...

  return (
    <div>
			<section className="section" id="tours">
				<Title title="featured" span="tours" />
				<div className="section-center featured-center">
					{tours.map((tour) => (
						<Tour key={tour.id} {...tour} />
					))}
				</div>
			</section>
		</div>
  );
}

export default Tours;