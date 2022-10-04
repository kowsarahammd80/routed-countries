import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Counties = () => {
  let counties = useLoaderData()
  return (
    <div>
        <h2>This is Counteries: {counties.length}</h2>
        {
          counties.map(country => <li key={country.cca3}><Link  to={`/country/${country.name.common}`}>{country.name.common}</Link></li>)
        }
    </div>
  );
};

export default Counties;