"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Image from "next/image";
import Overlay from "./Overlay";

import "swiper/css";
import "swiper/css/pagination";
import { data } from "@/data/categoryImages";
import SectionTitle from "./SectionTitle";
import CategorySliderItem from "./CategorySliderItem";

// import "./styles.css";

const Category = () => {
  return (
    <section className="py-20">
      <SectionTitle subTitle="Categories" title="Browse All Categories" />
      <div className="w-full h-[50vh]">
        <Swiper
          grabCursor={true}
          speed={750}
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          loop={true}
          modules={[Pagination]}
          className="mySwiper w-full h-full"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <CategorySliderItem
                image={item.src}
                alt={item.alt}
                name={item.name}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Category;
