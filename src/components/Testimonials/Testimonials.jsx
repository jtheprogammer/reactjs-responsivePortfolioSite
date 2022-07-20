import React from "react";
import "./Testimonials.css";
import Avatar from "../../assets/Images/Stock-Avatar.jpg";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const testimonialItems = [
  {
    id: 1,
    image: Avatar,
    name: "Client Name",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam officiis sapiente provident incidunt earum, eaque commodi fugiat ex minus, velit eveniet natus unde nam at laborum, dolores corporis quod suscipit.",
  },
  {
    id: 2,
    image: Avatar,
    name: "Client Name",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam officiis sapiente provident incidunt earum, eaque commodi fugiat ex minus, velit eveniet natus unde nam at laborum, dolores corporis quod suscipit.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h4>(Be My First Client!)</h4>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {testimonialItems.map((item) => (
          <SwiperSlide className="testimonial" key={item.id}>
            <div className="client__avatar">
              <img src={item.image} alt="Default Avatar" />
            </div>
            <h3 className="client__name">{item.name}</h3>
            <p className="client__review">{item.review}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
