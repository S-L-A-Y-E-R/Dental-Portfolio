'use client';

import { Tab, Tabs, Typography, Step, StepLabel, Stepper } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect } from 'react';

import { experienceData, coursesData, skillsData } from '@/lib/data';

const AboutSection = () => {
  const [tabValue, setTabValue] = React.useState(0);
  const controls = useAnimation();
  const reversedExperienceData = [...experienceData].reverse();
  const reversedCoursesData = [...coursesData].reverse();
  const reversedSkillsData = [...skillsData].reverse();
  const [isHovering, setIsHovering] = React.useState(false);

  const handleChange = (event: any, newValue: React.SetStateAction<number>) => {
    setTabValue(newValue);
  };

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      id='about'
      className='bg-[#e8e8e8] py-16 md:py-20'
    >
      <div
        className='text-center mb-6'
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <Typography
          variant='h4'
          className={`font-bold ${isHovering ? 'text-white' : 'text-primary'}`}
          style={{
            position: 'relative',
            display: 'inline-block',
            padding: '0 10px',
          }}
        >
          <span
            className='before-dot'
            style={{
              position: 'absolute',
              top: '50%',
              left: '-8px',
              width: '8px',
              height: '8px',
              backgroundColor: isHovering ? '#2196f3' : '#fff',
              borderRadius: '50%',
              transform: 'translateY(-50%)',
              transition: 'all 0.3s ease',
            }}
          />
          About
          <span
            className='after-dot'
            style={{
              position: 'absolute',
              top: '50%',
              right: '-8px',
              width: '8px',
              height: '8px',
              backgroundColor: isHovering ? '#2196f3' : '#fff',
              borderRadius: '50%',
              transform: 'translateY(-50%)',
              transition: 'all 0.3s ease',
            }}
          />
        </Typography>
      </div>

      <div className='container mx-auto flex flex-col md:flex-row items-center justify-center gap-7 px-3'>
        <div className='basis-full md:basis-1/2 '>
          <Image
            src='/about.jpg'
            alt='about me'
            className='rounded-lg w-full lg:h-[570px] h-full object-cover max-w-[600px] mx-auto md:mt-20'
            width={800}
            height={800}
          />
        </div>

        <div className='basis-full md:basis-1/2'>
          <Tabs
            value={tabValue}
            onChange={handleChange}
            indicatorColor='primary'
            textColor='primary'
          >
            <Tab label='Experience' />
            <Tab label='Courses' />
            <Tab label='Skills' />
          </Tabs>

          <div className='mt-6'>
            {tabValue === 0 && (
              <div>
                <Stepper
                  orientation='vertical'
                  activeStep={experienceData.length}
                >
                  {reversedExperienceData.map((item, index) => (
                    <Step key={index}>
                      <StepLabel>
                        <Typography variant='h6' className='font-semibold'>
                          {item.date}
                        </Typography>
                        <Typography className='opacity-70'>
                          {`${item.role} at ${item.clinic}, ${item.class}`}
                        </Typography>
                      </StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </div>
            )}

            {tabValue === 1 && (
              <div>
                <Stepper orientation='vertical' activeStep={coursesData.length}>
                  {reversedCoursesData.map((item, index) => (
                    <Step key={index}>
                      <StepLabel>
                        <Typography variant='h6' className='font-semibold'>
                          {item.date}
                        </Typography>
                        <Typography className='opacity-70'>
                          {item.course}
                        </Typography>
                      </StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </div>
            )}

            {tabValue === 2 && (
              <div>
                <Stepper orientation='vertical' activeStep={skillsData.length}>
                  {reversedSkillsData.map((item, index) => (
                    <Step key={index}>
                      <StepLabel>
                        <Typography variant='h6'>{item.title}</Typography>
                        {/* <Typography className='opacity-70'>
                          {item.course}
                        </Typography> */}
                      </StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutSection;
