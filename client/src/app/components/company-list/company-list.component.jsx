import React from "react";
import CompanyItem from "../company-item/company-item.component";

function CompanyList({ companies }) {
  return (
    <ul>
      {companies.map((company) => (
        <CompanyItem company={company} />
      ))}
    </ul>
  );
}

export default CompanyList;
