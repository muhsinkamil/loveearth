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

  console.log({ accContent });

  return (
    <>
      {accContent.map((accItem, i) => (
        <AccordionItem
          i={i}
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
