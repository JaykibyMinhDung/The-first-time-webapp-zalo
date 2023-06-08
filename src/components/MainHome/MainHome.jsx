import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as CrowIcon } from "../../icon/crown-svgrepo-com.svg";
import { ReactComponent as GiftIcon } from "../../icon/giftboild.svg";
import { ReactComponent as CartIcon } from "../../icon/cartboild.svg";
import { ReactComponent as DocumentIcon } from "../../icon/documents-check.svg";

const MainHome = () => {
  return (
    <main className="relative w-full h-full">
      <div className="absolute left-12 md:left-24 lg:left-20% 2xl:left-96 md:top-100px top-96 w-4/5 md:w-4/5 lg:w-3/5 h-60 rounded-3xl bg-white">
        {/* Menu */}
        <div className="flex flex-nowrap justify-between text-center mx-8 mt-8">
          <NavLink to="#">
            <span className="inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
              <CartIcon className="w-10 sm:w-14" />
            </span>
            <p>Mua hàng</p>
          </NavLink>
          <NavLink to="">
            <span class="inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
              <GiftIcon className="w-10 sm:w-14" />
            </span>
            <p>Ưu đãi</p>
          </NavLink>
          <NavLink to="#">
            <span class="inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
              <CrowIcon className="w-10 sm:w-14" />
            </span>
            <p className="w-16 sm:w-20">Quyền lợi thành viên</p>
          </NavLink>
          <NavLink to="#">
            <span class="inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
              <DocumentIcon className="w-10 sm:w-14" />
            </span>
            <p className="w-16 sm:w-20">Lịch sử mua hàng</p>
          </NavLink>
        </div>
      </div>
    </main>
  );
};

export default MainHome;
