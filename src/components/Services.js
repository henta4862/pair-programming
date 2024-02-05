import { useState } from 'react';
import { services } from "../data";
import Service from "./Service";
import Title from "./Title";

function Services() {
  const [servicesData, setServicesData] = useState(services);

  // Rest of your component logic...

  return (
    <div>
			<section className="section services" id="services">
				<Title title="our" span="services" />
				<div className="section-center services-center">
					{services.map((service) => (
						<Service key={service.id} {...service} />
					))}
				</div>
			</section>
		</div>
  );
}

export default Services;
