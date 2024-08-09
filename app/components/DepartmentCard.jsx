import React from "react";
import Link from "next/link";

const DepartmentCard = ({ department }) => {
  return (
    <div className="container mx-auto">
      <Link href={`/departments/${department.name}`}>
        <div className="bg-white p-4 shadow-md hover:shadow-xl rounded-md space-y-2">
          <h3 className="text-lg font-semibold">{department.name}</h3>
          <h3 className="text-base text-gray-900">{department.description}</h3>
        </div>
      </Link>
    </div>
  );
};

export default DepartmentCard;
