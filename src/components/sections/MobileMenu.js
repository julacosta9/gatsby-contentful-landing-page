import React, { Fragment } from "react";
import { Link } from "gatsby";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XCircleIcon } from "@heroicons/react/solid";

const MobileMenu = ({ data }) => {
  return (
    <div className="flex md:hidden">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button>
              {open ? (
                <XCircleIcon className="h-10 w-10 text-white" />
              ) : (
                <MenuIcon className="h-10 w-10 text-white" />
              )}
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 w-screen max-w-xs px-2 mt-3 right-0 sm:px-0 lg:max-w-3xl">
                <nav className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                    {data.contentfulMainNavigation.navigationLinks.map(
                      (link) => (
                        <Link
                          key={link.text}
                          to={link.url}
                          className="flex items-center px-2 py-1 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-100"
                        >
                          <div className="">
                            <p className="text-sm font-bold text-gray-900">
                              {link.text}
                            </p>
                            <p className="text-sm text-gray-500">
                              {link.description}
                            </p>
                          </div>
                        </Link>
                      )
                    )}
                  </div>
                  <div className="p-4 transition bg-bracketsBlue hover:bg-bracketsBlue-dark">
                    <Link
                      to={data.contentfulMainNavigation.ctaUrl}
                      className="flow-root px-2 py-1 transition duration-150 ease-in-out rounded-md"
                    >
                      <span className="flex items-center">
                        <span className="text-base font-bold text-white">
                          {data.contentfulMainNavigation.ctaText}
                        </span>
                      </span>
                    </Link>
                  </div>
                </nav>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};

export default MobileMenu;
