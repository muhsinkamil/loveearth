import React, { useRef, useState, useLayoutEffect, useCallback } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
} from 'framer-motion';
import './styles.scss';
import { Accordion, Header, Navbar } from '..';
import Footer from '../Footer';

import aboutSwiperImg1 from '../../../assets/aboutSwiper/aboutSwiper1.webp';
import aboutSwiperImg2 from '../../../assets/aboutSwiper/aboutSwiper2.webp';
import aboutSwiperImg3 from '../../../assets/aboutSwiper/aboutSwiper3.webp';
import aboutSwiperImg4 from '../../../assets/aboutSwiper/aboutSwiper4.webp';
import aboutSwiperImg5 from '../../../assets/aboutSwiper/aboutSwiper5.webp';
import aboutSwiperImg6 from '../../../assets/aboutSwiper/aboutSwiper6.webp';
import aboutSwiperImg7 from '../../../assets/aboutSwiper/aboutSwiper7.webp';
import SwiperVerticalMode from '../SwiperVerticalMode';
import { jobHirings } from '../../translations/brandsWorked';

import Person1 from '../../../assets/teams/person-1.jpg';
import Person2 from '../../../assets/teams/person-2.jpg';
import Person3 from '../../../assets/teams/person-3.jpg';
import Person4 from '../../../assets/teams/person-4.jpg';
import Person6 from '../../../assets/teams/person-6.jpg';
import Person7 from '../../../assets/teams/person-7.jpg';

import gallery1 from '../../../assets/gallery/gallery1.webp';
import gallery2 from '../../../assets/gallery/gallery2.webp';
import gallery3 from '../../../assets/gallery/gallery3.webp';
import gallery4 from '../../../assets/gallery/gallery4.webp';
import gallery5 from '../../../assets/gallery/gallery5.webp';

import TeamMember from '../TeamMember';
import AboutFloatingImage from '../../components/AboutFloatingImage';

const swiperImages = [
  aboutSwiperImg1,
  aboutSwiperImg2,
  aboutSwiperImg3,
  aboutSwiperImg4,
  aboutSwiperImg5,
  aboutSwiperImg6,
  aboutSwiperImg7,
];

const teamMembersPics = [
  {
    memberImg: Person1,
    memberName: 'Jos Butler',
  },
  {
    memberImg: Person2,
    memberName: 'Simona Halep',
  },
  {
    memberImg: Person4,
    memberName: 'Monica',
  },
  {
    memberImg: Person3,
    memberName: 'Richard Ugo',
  },
  {
    memberImg: Person6,
    memberName: 'Christina',
  },
  {
    memberImg: Person7,
    memberName: 'Gabriel Silverio',
  },
];

const SmoothScroll = ({ children }: any) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const ghostRef = useRef(null);
  const [scrollRange, setScrollRange] = useState(0);
  const [viewportW, setViewportW] = useState(0);

  useLayoutEffect(() => {
    if (scrollRef && scrollRef.current) {
      setScrollRange(scrollRef.current.scrollWidth);
    }
  }, [scrollRef]);

  const onResize = useCallback((entries: ResizeObserverEntry[]) => {
    for (let entry of entries) {
      setViewportW(entry.contentRect.width);
    }
  }, []);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => onResize(entries));
    if (ghostRef.current) {
      resizeObserver.observe(ghostRef.current);
    }
    return () => resizeObserver.disconnect();
  }, [onResize]);

  const { scrollYProgress } = useViewportScroll();
  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -scrollRange + viewportW],
  );
  const physics = { damping: 15, mass: 0.27, stiffness: 55 };
  const spring = useSpring(transform, physics);

  const galleryItems = [gallery1, gallery2, gallery3, gallery4, gallery5];

  const repeatedItems = [galleryItems, galleryItems, galleryItems];

  const points = [
    [11, 2, 12, 2],
    [18, 12, 10, 1],
    [32, 5, 12, 3],
    [16, 7, 13, 3],
    [30, 14, 12, 2],
  ];

  const images = repeatedItems.map((galleryItems, index) =>
    galleryItems.map((url, elementIndex) => (
      <AboutFloatingImage
        key={url}
        src={url}
        index={elementIndex}
        points={points}
        columnOffset={index * 14}
      />
    )),
  );

  return (
    <>
      <div className="scroll-container">
        <motion.section
          ref={scrollRef}
          style={{ x: spring }}
          className="thumbnails-container"
        >
          <div className="thumbnails">
            {children}
            <section className="gallery-section">
              <div className="content">
                <div className="gallery">
                  {images}
                  <div
                    className="behind-text fill"
                    data-scroll
                    data-scroll-speed
                  >
                    Capture the moments
                  </div>
                  <div />
                </div>
              </div>
            </section>
          </div>

          <section className="team-section">
            <h2 className="team-heading">Team</h2>

            <div className="team-img-container">
              {teamMembersPics.map((teamMember) => (
                <TeamMember
                  imageSrc={teamMember.memberImg}
                  key={teamMember.memberImg}
                  memberName={teamMember.memberName}
                />
              ))}
            </div>
          </section>
          <section className="hiring">
            <h2 className="hiring-heading">
              <span className="hvr-underln-anim">Come join our team</span>
            </h2>
            <Accordion accContent={jobHirings} />
          </section>

          <div className="about-swiper-container">
            <section className="about-team-swipe">
              <SwiperVerticalMode slideImages={swiperImages} />
            </section>
          </div>

          <Footer
            nextPageProps={{
              nextPageLabel: 'work',
              nextPageLink: '/work',
            }}
            isAboutPage
          />
        </motion.section>
      </div>
      <div ref={ghostRef} style={{ height: scrollRange }} className="ghost" />
    </>
  );
};

export default SmoothScroll;
