'use client';

import { useRef } from 'react';
import { AchievementData } from '@/lib/data';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

type AchievementProps = (typeof AchievementData)[number];

export default function Achievement({
  title,
  description,
  tags,
  imageUrl,
  Url,
}: AchievementProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group  mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[50rem] text-black border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[25rem]  transition sm:group-even:pl-8 text-white bg-white/10 hover:bg-white/20">
        <a href={Url} target="_blank">
          <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 text-white/70 ">{description}</p>
            <ul className="flex flex-wrap mt-4 gap-2 ">
              {tags.map((tag, index) => (
                <li
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <Image
            src={imageUrl}
            alt="Achievement"
            quality={100}
            className="hidden sm:block  absolute z-[-10]  top-8 -right-40 h-[30rem] w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
          />
        </a>
      </section>
    </motion.div>
  );
}
