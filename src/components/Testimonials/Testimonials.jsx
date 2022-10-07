import { useContext } from "react";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Avatar from "../../assets/Images/Stock-Avatar.jpg";
import "./Testimonials.css";
import { ActiveNavContext } from "../../context";

const testimonialItems = [
  {
    image: Avatar,
    name: "Client #1",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam officiis sapiente provident incidunt earum, eaque commodi fugiat ex minus, velit eveniet natus unde nam at laborum, dolores corporis quod suscipit.",
  },
  {
    image: Avatar,
    name: "Client #n...",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam officiis sapiente provident incidunt earum, eaque commodi fugiat ex minus, velit eveniet natus unde nam at laborum, dolores corporis quod suscipit.",
  },
];

const Testimonials = () => {
  const { testimonialsRef } = useContext(ActiveNavContext);
  return (
    <section id="testimonials" ref={testimonialsRef}>
      <div className="section__header">
        <h4>(Be My First Client!)</h4>
        <h2>Testimonials</h2>
      </div>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {testimonialItems.map((item, index) => (
          <SwiperSlide className="testimonial" key={index}>
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
