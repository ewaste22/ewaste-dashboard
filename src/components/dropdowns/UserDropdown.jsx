import { useState } from 'react';
import { TbUser } from 'react-icons/tb';

export default function UserDropdown() {
  const [dropdownShow, setDropdownShow] = useState(false);

  const openDropdown = () => {
    setDropdownShow(true);
  };

  const closeDropdown = () => {
    setDropdownShow(false);
  };

  return (
    <div className="relative">
      <div
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-stone-200"
        onClick={() => (dropdownShow ? closeDropdown() : openDropdown())}
      >
        <TbUser className="text-2xl" />
      </div>
      <div
        className={
          dropdownShow
            ? 'absolute right-0 z-50 mt-4 w-60 rounded-2xl bg-white p-6 shadow-lg'
            : 'hidden'
        }
      >
        <div className="space-y-4 text-base">
          <div>
            <div className="font-medium">Dida</div>
            <div className="text-gray-400">Administrator</div>
          </div>
          <hr className="my-4 md:min-w-full" />
          <button type="button">Sign Out</button>
        </div>
      </div>
    </div>
  );
}
