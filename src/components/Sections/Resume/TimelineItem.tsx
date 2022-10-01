import {FC, memo} from 'react';

import {TimelineItem} from '../../../data/dataDef';

const TimelineItem: FC<{item: TimelineItem}> = memo(({item}) => {
  const {title, date, location, content} = item;
  return (
    <div className="pb-8 text-left last:pb-0">
      <div className="pb-4">
        <h2 className="text-xl font-bold">{location}</h2>
        <div className="flex items-center gap-x-2">
          <span className="text-sm font-medium italic sm:flex-none">{title}</span>
          <span>•</span>
          <span className="text-sm sm:flex-none">{date}</span>
        </div>
      </div>
      {content.map((text, index) => (
        <p className="pb-4 last:pb-0" key={`${text}-${index}`}>
          {text}
        </p>
      ))}
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
