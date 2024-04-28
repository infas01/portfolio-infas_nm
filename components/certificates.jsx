'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import SectionHeading from './section-heading';
import Image from 'next/image';
import cer1 from '@/public/certificates/web_des.png';
import cer2 from '@/public/certificates/int_cloud.png';
import cer3 from '@/public/certificates/int_web.png';
import cer4 from '@/public/certificates/git_github.png';
import cer5 from '@/public/certificates/mob_app.png';
import cer6 from '@/public/certificates/ver_control.png';
import cer7 from '@/public/certificates/web_dev.jpg';

const images = [cer1, cer2, cer3, cer4, cer5, cer6, cer7];

const Certificates = () => {
  const { ref } = useSectionInView('Certificates');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const slideVariants = {
    hiddenRight: {
      x: '100%',
      opacity: 0,
    },
    hiddenLeft: {
      x: '-100%',
      opacity: 0,
    },
    visible: {
      x: '0',
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    },
  };
  const slidersVariants = {
    hover: {
      scale: 1.2,
      backgroundColor: '#ff00008e',
    },
  };
  const dotsVariants = {
    initial: {
      y: 0,
    },
    animate: {
      y: -10,
      scale: 1.2,
      transition: { type: 'spring', stiffness: 1000, damping: '10' },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 },
    },
  };

  const handleNext = () => {
    setDirection('right');
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection('left');

    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? 'right' : 'left');
    setCurrentIndex(index);
  };

  return (
    <div className="carousel" ref={ref} id="certificates">
      <div className="carousel-images">
        <SectionHeading>Certificates</SectionHeading>
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            initial={direction === 'right' ? 'hiddenRight' : 'hiddenLeft'}
            animate="visible"
            exit="exit"
            variants={slideVariants}
          >
            <Image
              src={images[currentIndex]}
              alt={`Certificate ${currentIndex + 1}`}
            />
          </motion.div>
        </AnimatePresence>
        <div className="slide_direction">
          <motion.div
            variants={slidersVariants}
            whileHover="hover"
            className="left"
            onClick={handlePrevious}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40"
              viewBox="0 96 960 960"
              width="40"
              style={{ marginLeft: '-5px', marginTop: '-6px' }}
            >
              <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
            </svg>
          </motion.div>
          <motion.div
            variants={slidersVariants}
            whileHover="hover"
            className="right"
            onClick={handleNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40"
              viewBox="0 96 960 960"
              width="40"
              style={{ marginLeft: '-5px', marginTop: '-6px' }}
            >
              <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
            </svg>
          </motion.div>
        </div>
      </div>
      <div className="carousel-indicator">
        {images.map((_, index) => (
          <motion.div
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
            initial="initial"
            animate={currentIndex === index ? 'animate' : ''}
            whileHover="hover"
            variants={dotsVariants}
          ></motion.div>
        ))}
      </div>
    </div>
  );
};
export default Certificates;
