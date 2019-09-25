import React from 'react';
import { useState } from 'react';
import domainListContext from '../../context/domainListContext';

const DomainListProvider = domainListContext.Provider;
export default ({ children }) => {
  const [ domainList, updateDomainList ] = useState([]);
  const addToDomainList = async domain => {
    console.log('in addToDomainList', {domain});    
    const res = await fetch(`https://company-stream.clearbit.com/v2/companies/find?domain=${domain}`, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer sk_30240e2d1dfc1d73d26ab80390d1fd49',
      },
    });
    if (res.ok) {
      const newDomain = await res.json();
      console.log({newDomain, domainList});
      
      updateDomainList(() => ([
        ...domainList,
        newDomain,
      ]))
    } else {
      alert(`Error adding domain ${domain}`)
    };
  };
  return (
    <DomainListProvider value={{domainList, addToDomainList}}>
      {children}
    </DomainListProvider>
  );
};