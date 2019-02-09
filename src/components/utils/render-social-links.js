import React from 'react';

export default settings => {
  return settings.socialLinks && settings.socialLinks.map(item => {
    return (
      <li key={item.name}>
        <a href={item.url}>
          <i className={item.className}/>
        </a>
      </li>
    )
  });
};
