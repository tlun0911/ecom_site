import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { checkCustomer } from "@/app/lib/checkCustomer";
import ClerkComponent from "./ClerkComponent";
import CartIcon from "./CartIcon";

const Header = async () => {
  checkCustomer();

  return (
    <div className="dark:bg-gray-900 sticky top-0 z-50">
      <div>
        <div className="relative">
          {/* For large screens */}
          <div className="dark:bg-gray-900 bg-gray-50 px-6 py-6">
            <div className="container mx-auto flex items-center justify-between">
              <h1
                className="md:w-2/12 text-2xl cursor-pointer text-gray-800 dark:text-white"
                aria-label="shop Ease"
              >
                <span className="text-sky-400">shop</span>Ease
              </h1>
              <ul
                id="links-list"
                className="hidden w-7/12 md:flex items-center justify-center space-x-8"
              >
                <li>
                  <Link
                    href="/"
                    className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:text-sky-400"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:text-sky-400"
                  >
                    All Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/favorites"
                    className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:text-sky-400"
                  >
                    Favorites
                  </Link>
                </li>
              </ul>
              <div className="flex  ">
                <div className="w-full ml-2">
                    <ClerkComponent>
                      <CartIcon />
                    </ClerkComponent>
                </div>

                <div className="lg:hidden ml-4">
                  <MobileMenu />
                </div>
              </div>
            </div>
          </div>
          {/* For small screen */}
        </div>
      </div>
    </div>
  );
};

export default Header;
