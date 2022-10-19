import {FC, memo} from 'react';

import {Skill as SkillType} from '../../../data/dataDef';

export const Skill: FC<{skill: SkillType}> = memo(({skill}) => {
  const {title, description} = skill;

  return (
    <div className="pb-8 last:pb-0">
      <h2 className="text-xl font-bold">{title}</h2>
      {description.map((text, index) => (
        <p className="pb-4 last:pb-0" key={`${text}-${index}`}>
          {text}
        </p>
      ))}
    </div>
  );
});

Skill.displayName = 'Skill';
