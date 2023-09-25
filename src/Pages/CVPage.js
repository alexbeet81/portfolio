import React from 'react';
import CVSection from '../Components/CV/CVSection';
import { cvData } from '../Components/CV/Data/cv-data';

const CVPage = () => {

  const sections = cvData.forEach(entry => {
    <CVSection header={entry.header} content={entry.content}/>
  })

  return (
    <>
      {sections}
    </>
  );
}

export default CVPage;
