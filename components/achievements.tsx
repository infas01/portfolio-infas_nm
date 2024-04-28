'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { AchievementData } from '@/lib/data';
import Achievement from './achievement';
import { useSectionInView } from '@/lib/hooks';

export default function Achivements() {
  const { ref } = useSectionInView('Achievements', 0.5);

  return (
    <section ref={ref} className="scroll-mt-28 mb-10" id="achievements">
      <SectionHeading>Achievements & Participations</SectionHeading>
      <div className="">
        {AchievementData.map((achievement, index) => (
          <React.Fragment key={index}>
            <Achievement {...achievement} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
