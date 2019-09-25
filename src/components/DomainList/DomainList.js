import React, { useContext } from 'react';
import domainListContext from '../../context/domainListContext';
import DomainRow from '../DomainRow';

export default () => {
  const { domainList } = useContext(domainListContext);
  return (
    <div className='domain-list'>
      {domainList.map(domainData => <DomainRow domainData={domainData} key={domainData.id} />)}
    </div>
  );
}