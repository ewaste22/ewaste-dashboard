import { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  TbDeviceDesktopAnalytics,
  TbMenu2,
  TbNotification,
  TbReportMoney,
  TbTrash,
  TbTruckDelivery,
  TbUsers,
  TbX,
} from 'react-icons/tb';
import UserDropdown from '../dropdowns/UserDropdown';

export default function SideBar() {
  const [collapseShow, setCollapseShow] = useState('hidden');

  return (
    <>
      <nav className="relative z-10 flex flex-wrap items-center justify-between bg-white py-4 px-6 shadow-xl md:fixed md:left-0 md:top-0 md:bottom-0 md:block md:w-64 md:flex-row md:flex-nowrap md:overflow-hidden md:overflow-y-auto">
        <div className="mx-auto flex w-full flex-wrap items-center justify-between px-0 md:min-h-full md:flex-col md:flex-nowrap md:items-stretch">
          {/* Toggler */}
          <button
            className="cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none text-black opacity-50 md:hidden"
            type="button"
            onClick={() => setCollapseShow('bg-white m-2 py-3 px-6')}
          >
            <TbMenu2 />
          </button>
          {/* Brand */}
          <Link
            className="mr-0 inline-block whitespace-nowrap p-4 px-0 text-left text-2xl font-bold text-stone-600 md:block md:pb-2 md:text-5xl"
            to="/"
          >
            E-Waste
          </Link>
          {/* User */}
          <ul className="list-none md:hidden">
            <li className="relative inline-block">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              'absolute top-0 left-0 right-0 z-40 h-auto flex-1 items-center overflow-y-auto overflow-x-hidden rounded shadow md:relative md:mt-4 md:flex md:flex-col md:items-stretch md:opacity-100 md:shadow-none ' +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="mb-4 block border-b border-solid border-stone-200 pb-4 md:hidden md:min-w-full">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="mr-0 inline-block whitespace-nowrap p-4 px-0 text-left text-2xl font-bold text-stone-600 md:block md:pb-2"
                    to="/"
                  >
                    E-Waste
                  </Link>
                </div>
                <div className="flex w-6/12 justify-end">
                  <button
                    type="button"
                    className="cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none text-black opacity-50 md:hidden"
                    onClick={() => setCollapseShow('hidden')}
                  >
                    <TbX />
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="h-12 w-full rounded border border-solid border-stone-500 bg-white px-3 py-2 text-base font-normal leading-snug text-stone-600 placeholder-stone-300 shadow-none outline-none focus:outline-none"
                />
              </div>
            </form>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="block pt-1 pb-4 font-bold uppercase text-stone-500 no-underline md:min-w-full">
              Admin Layout Pages
            </h6>
            {/* Navigation */}

            <ul className="flex list-none flex-col md:min-w-full md:flex-col">
              <li className="items-center">
                <Link
                  className={
                    'flex py-3 text-lg font-bold ' +
                    (window.location.href.indexOf('/') !== -1
                      ? 'text-lightBlue-500 hover:text-lightBlue-600'
                      : 'text-stone-700 hover:text-stone-500')
                  }
                  to="/"
                >
                  <TbDeviceDesktopAnalytics
                    className={
                      'mr-2 text-2xl ' +
                      (window.location.href.indexOf('/') !== -1
                        ? 'opacity-75'
                        : 'text-stone-300')
                    }
                  />{' '}
                  Dashboard
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    'flex py-3 text-lg font-bold ' +
                    (window.location.href.indexOf('/users') !== -1
                      ? 'text-lightBlue-500 hover:text-lightBlue-600'
                      : 'text-stone-700 hover:text-stone-500')
                  }
                  to="/users"
                >
                  <TbUsers
                    className={
                      'fas fa-tools mr-2 text-2xl ' +
                      (window.location.href.indexOf('/users') !== -1
                        ? 'opacity-75'
                        : 'text-stone-300')
                    }
                  />{' '}
                  Management Users
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    'flex py-3 text-lg font-bold ' +
                    (window.location.href.indexOf('/transactions') !== -1
                      ? 'text-lightBlue-500 hover:text-lightBlue-600'
                      : 'text-stone-700 hover:text-stone-500')
                  }
                  to="/transactions"
                >
                  <TbReportMoney
                    className={
                      'fas fa-table mr-2 text-2xl ' +
                      (window.location.href.indexOf('/transactions') !== -1
                        ? 'opacity-75'
                        : 'text-stone-300')
                    }
                  />{' '}
                  Transactions
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    'flex py-3 text-lg font-bold ' +
                    (window.location.href.indexOf('/waste') !== -1
                      ? 'text-lightBlue-500 hover:text-lightBlue-600'
                      : 'text-stone-700 hover:text-stone-500')
                  }
                  to="/waste"
                >
                  <TbTrash
                    className={
                      'fas fa-map-marked mr-2 text-2xl ' +
                      (window.location.href.indexOf('/waste') !== -1
                        ? 'opacity-75'
                        : 'text-stone-300')
                    }
                  />{' '}
                  Waste
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    'flex py-3 text-lg font-bold ' +
                    (window.location.href.indexOf('/pickup') !== -1
                      ? 'text-lightBlue-500 hover:text-lightBlue-600'
                      : 'text-stone-700 hover:text-stone-500')
                  }
                  to="/pickup"
                >
                  <TbTruckDelivery
                    className={
                      'fas fa-map-marked mr-2 text-2xl ' +
                      (window.location.href.indexOf('/pickup') !== -1
                        ? 'opacity-75'
                        : 'text-stone-300')
                    }
                  />{' '}
                  Pickup
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
