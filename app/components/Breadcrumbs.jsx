"use client";

import { useEffect, useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const Breadcrumbs = () => {
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const limit = searchParams.get("limit") || 12;
    const skip = searchParams.get("skip") || 0;

    const isBaseProductsPage =
      !searchParams.has("skip") && !searchParams.has("limit");

    if (isBaseProductsPage) {
      // If on the base "Products" page, reset breadcrumbs
      localStorage.removeItem("breadcrumbs");
      setBreadcrumbs([]);
      return;
    }

    const currentPage = {
      label: `Page ${parseInt(skip) / parseInt(limit) + 1}`,
      href: `?limit=${limit}&skip=${skip}`,
    };

    let storedBreadcrumbs =
      JSON.parse(localStorage.getItem("breadcrumbs")) || [];

    const existingIndex = storedBreadcrumbs.findIndex(
      (breadcrumb) => breadcrumb.href === currentPage.href
    );

    if (existingIndex !== -1) {
      storedBreadcrumbs = storedBreadcrumbs.slice(0, existingIndex + 1);
    } else {
      storedBreadcrumbs.push(currentPage);
    }

    // Keep only the last 4 breadcrumbs
    if (storedBreadcrumbs.length > 4) {
      storedBreadcrumbs = storedBreadcrumbs.slice(-4);
    }

    localStorage.setItem("breadcrumbs", JSON.stringify(storedBreadcrumbs));
    setBreadcrumbs(storedBreadcrumbs);
  }, [searchParams, pathname]);

  return (
    <nav aria-label="breadcrumb">
      <ol className="flex space-x-2">
        {/* Add a link to the base Products page */}
        <li>
          <Link
            href="/products" // Adjust this path based on your routing setup
            className="text-blue-500 hover:underline"
            onClick={() => {
              // Clear breadcrumbs when navigating to the Products page
              localStorage.removeItem("breadcrumbs");
              setBreadcrumbs([]);
            }}
          >
            Products
          </Link>
        </li>
        {breadcrumbs.length > 0 && <span className="mx-1">/</span>}
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={index}>
            <Link
              href={breadcrumb.href}
              className={`${
                index === breadcrumbs.length - 1
                  ? "text-gray-500 cursor-default"
                  : "text-blue-500 hover:underline"
              }`}
            >
              {breadcrumb.label}
            </Link>
            {index < breadcrumbs.length - 1 && <span className="mx-1">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
