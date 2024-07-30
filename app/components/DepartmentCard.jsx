import React from "react";
import Link from "next/link";

const DepartmentCard = ({ department }) => {
  return (
    <div className="container mx-auto">
      <div className="bg-white p-4 shadow-md rounded-md">
        <Link href="/">
          <h3 className="text-lg font-semibold">{department}</h3>
        </Link>
      </div>
    </div>
  );
};

export default DepartmentCard;
