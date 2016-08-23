import React from 'react';

const Companies = () => {
  const company = ['Comapny 1', 'Company 2', 'Company 3', 'Company 4'];

  const renderCompanies = company.map((comp) => <div className="company" key={comp}>{comp}</div>);

  return (
    <div className="companies">

    </div>
  );
}

export default Companies;
