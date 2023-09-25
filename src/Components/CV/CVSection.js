import React, { useState } from 'react';

const CVSection = ({ header, content}) => {
  const [isOpen, setIsOpen] = useState(false);

  

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>
        {header}
      </button>
      {isOpen && <div>
          {content}
        </div>}
    </>
  )
}

export default CVSection;