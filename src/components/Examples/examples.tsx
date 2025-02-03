import React, { useState } from 'react';
import TabButton from './tabButton';
import Section from '../section';
import Tabs from '../tabs';
import { EXPERIENCES } from '../../data/data.ts';

interface Experience {
  title: string;
  description: string;
  bullets: string[];
  technologies?: string;
}

const Experiences: React.FC = () => {
  const [selectedExample, setSelectedExample] = useState<string | null>(null);

  const handleClick = (buttonClicked: string) => {
    setSelectedExample(buttonClicked);
  };

  let tabContent: React.ReactNode = (
    <p>Please select above.</p>
  );

  if (selectedExample) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXPERIENCES[selectedExample]?.title || ''}</h3>
        <p>{EXPERIENCES[selectedExample]?.description || ''}</p>
        <ul>
          {EXPERIENCES[selectedExample]?.bullets?.map((bullet, index) => (
            <li key={index}>{bullet}</li> 
          ))}
        </ul>
        <p>Highlighted Technologies: {EXPERIENCES[selectedExample]?.technologies || ''}</p>
      </div>
    );
  }

  return (
    <Section title="Work Experience" id="experience">
      <p id='summary'>SOFTWARE DEVELOPMENT ENGINEER IN TEST with 17+ years of well-rounded expertise in both
automated and manual quality assurance supporting rapid software development and iteration efforts
in volatile start-up environments. Known as a Swiss Army knife engineer with prior success contributing
to virtually every stage of the software lifecycle, product roadmap, and pipeline. Background as a full-
stack web developer, system administrator, and project manager. Preference for remote roles.</p>
      <Tabs
        buttons={
          <>
            <TabButton isSelected={selectedExample === 'salesloft'} onClick={() => handleClick('salesloft')}>
              Salesloft
            </TabButton>
            <TabButton isSelected={selectedExample === 'davinci_education'} onClick={() => handleClick('davinci_education')}>
              Davinci Education
            </TabButton>
            <TabButton isSelected={selectedExample === 'fibonacci_solutions'} onClick={() => handleClick('fibonacci_solutions')}>
              Fibonacci Solutions
            </TabButton>
            <TabButton isSelected={selectedExample === 'unspecified'} onClick={() => handleClick('unspecified')}>
              Unspecified
            </TabButton>
            <TabButton isSelected={selectedExample === 'ibm'} onClick={() => handleClick('ibm')}>
              IBM
            </TabButton>
            <TabButton isSelected={selectedExample === 'smashing_boxes'} onClick={() => handleClick('smashing_boxes')}>
              Smashing Boxes
            </TabButton>
            <TabButton isSelected={selectedExample === 'allscripts'} onClick={() => handleClick('allscripts')}>
              Allscripts
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
};

export default Experiences;