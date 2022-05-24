import React, { useState } from 'react';
import AccordionItem from '../AccordionItem';

type AccordionProps = {
  accContent: {
    accName: string;
    category: string;
    expandedContent: string;
  }[];
};

function Accordion({ accContent }: AccordionProps) {
  const [expanded, setExpanded] = useState<false | number>(false);

  return (
    <>
      {accContent.map((accItem, i) => (
        <AccordionItem
          i={i}
          key={i}
          isActive={expanded}
          setActive={setExpanded}
          title={accItem.accName}
          category={accItem.category}
          content={accItem.expandedContent}
        />
      ))}
    </>
  );
}

export default Accordion;
