import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const TechnologiesWeSupport = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollPosition = 0;
    const scrollSpeed = 1;

    const autoScroll = () => {
      scrollPosition -= scrollSpeed;
      if (scrollPosition <= -scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.style.transform = `translateX(${scrollPosition}px)`;
      requestAnimationFrame(autoScroll);
    };

    const animationFrameId = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const icons = [
    { src: '/images/Cisco.svg', alt: 'Cisco Networks' },
    { src: '/images/Juniper.svg', alt: 'Juniper Networks' },
    { src: '/images/Arista.svg', alt: 'Arista Networks' },
    { src: '/images/Hpe.svg', alt: 'HPE Aruba Networking' },
    { src: '/images/Huawei.svg', alt: 'Huawei' },
    { src: '/images/meraki.png', alt: 'Meraki' },
    { src: '/images/TPLINK.svg', alt: 'TP-Link' },
    { src: '/images/Cradlepoint.png', alt: 'Cradlepoint' },
  ].map(icon => ({ ...icon }));

  return (
    <div>
      <h3 style={{ color: "var(--tt-color)" }} className="text-center mb-2 mt-5">Technologies We Support</h3>
      <div className="d-flex justify-content-center mb-5">
        <div style={{ width: "80px", height: "4px", backgroundColor: "var(--primary-color)" }}></div>
      </div>
      <div className="position-relative overflow-hidden">
        <motion.div
          ref={scrollRef}
          className="d-flex"
          style={{
            width: 'max-content',
            animation: 'scroll 20s linear infinite',
          }}
        >
          {[...icons, ...icons].map((icon, index) => (
            <motion.div
              key={index}
              className="mx-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <img
                src={icon.src}
                alt={icon.alt}
                style={{ height: '40px', width: 'auto' }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  );
};

export default TechnologiesWeSupport;