import React from "react";
import { NavLink } from "react-router-dom";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

export default function Blogs1() {
  return (
    <div className="p-5 py-10 flex flex-col items-center gap-16 justify-center">
      <NavLink to='/mnrealty' >
        <FaRegArrowAltCircleLeft className="size-8 fixed top-6 left-6"/>
      </NavLink>
      <h1 className="text-3xl font-bold">Topic- Hyderabad Property Registrations Rise, Defying HYDRA's Demolition
      Efforts.</h1>
       <p className="text-xl">The Hyderabad real estate market is rising, with the number of
      registrations for residential and commercial properties increasing since
      July. In October, 87,785 applications were received for residential
      property registrations, with 794 applications for commercial properties.<br></br><br></br>
      By the end of September, the department recorded ₹7,251 crore in revenue,
      representing 39.78% of the targeted 18,228 crore for the fiscal year. The
      increase in registrations is despite the recent demolition of the
      controversial Durgam Cheruvu reservoir encroachments, also known as the
      "Hydra" project. This project, which involved the demolition of hundreds
      of illegal structures, had initially raised concerns about its impact on
      the real estate market.<br></br><br></br> However, the continued rise in registrations
      suggests that the market is not as affected as initially feared. The
      increase in registrations is likely due to several factors, including:
      Strong economic growth in Hyderabad: The city is experiencing strong
      economic growth, which is driving demand for housing and commercial space.
      Increased affordability: Prices of residential and commercial properties
      have been increasing at a slower pace than in other major cities in India.<br></br><br></br>
      Government initiatives: The government is taking a number of initiatives
      to improve the ease of doing business in Hyderabad, which is attracting
      more investment and creating jobs.<br></br><br></br> The continued strong performance of the
      Hyderabad real estate market is good news for the city's economy. It is
      also a positive sign for the future of the real estate sector in India.</p>
    </div>
  );
}
