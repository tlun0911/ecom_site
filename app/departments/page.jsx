import React from "react";
import DepartmentCard from "../components/DepartmentCard";
import { db } from "@/app/lib/db";

export const dynamic = 'force-dynamic';

const DepartmentsListPage = async () => {

  const departments = await db.category.findMany();

  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-4xl font-semibold text-gray-900 text-center">Department</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
        {departments?.map((department) => (
          <div key={department.id}>
            <DepartmentCard department={department} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentsListPage;
