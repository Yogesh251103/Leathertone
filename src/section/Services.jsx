import styles from "../css/service.module.css";
import * as React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomCard from "../components/CustomCard";

export const Services = () => {
  const data = [
    {
      src:'/tanning.png',
      title:'Tanners and Finishers',
      content:'We provide high-quality chemicals and materials for the leather tanning and finishing process.'
    },
    {
      src:'/dye.png',
      title:'Textile Mill Supplies',
      content:'We supply specialized products for textile mills, including chemicals, dyes, and finishing agents.'
    },
    {
      src:'/yarn.png',
      title:'Manufacturers of Leather Sundries',
      content:'We offer a range of leather sundries, including threads, yarns, and other accessories.'
    },
    {
      src:'/forging.png',
      title:'Friction Liners for Heavy Forging',
      content:' Our friction liners are designed for heavy forging applications, providing improved efficiency and safety.'
    },
    {
      src:'/refractory.png',
      title:'Refractories',
      content:'We manufacture and supply refractory materials for high-temperature applications.'
    },
    {
      src:'/washers.png',
      title:'Chrome Composite Ginning Washers',
      content:'Our chrome composite ginning washers are designed for efficient and durable performance in textile processing.'
    },
  ]

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    },
  };

  return (
    <div className={styles.parent} id="services-section">
      <div className={styles.leftContainer}>
        <h1 className={styles.title}>Our Services</h1>
        <p className={styles.sub}>
          In a nutshell, we manufacture quality leather without a compromise in
          the authenticity in raw material.
        </p>
      </div>
      <div className={styles.rightContainer}>
      <Carousel responsive={responsive} swipeable={true} containerClass={styles.carousel} >
        {
          data.map((item)=>(
            <CustomCard src={item.src} title={item.title} content={item.content}/>
          ))
        }
      </Carousel>
      </div>
    </div>
  );
};
