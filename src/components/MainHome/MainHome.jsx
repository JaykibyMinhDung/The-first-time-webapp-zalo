import React from "react";

import { ReactComponent as CrowIcon } from "../../icon/crown-svgrepo-com.svg";
import { ReactComponent as GiftIcon } from "../../icon/giftboild.svg";
import { ReactComponent as CartIcon } from "../../icon/cartboild.svg";
import { ReactComponent as DocumentIcon } from "../../icon/documents-check.svg";

const MainHome = () => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute left-24 md:left-96 md:top-100px top-96 w-3/5 ms:w-1/2 h-60  rounded-3xl bg-white">
        {/* Menu */}
        <div className="flex flex-nowrap justify-between text-center mx-8 mt-8">
          <div>
            <span class="inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
              <CartIcon className="w-10 sm:w-14" />
            </span>
            <p>Mua hàng</p>
          </div>
          <div>
            <span class="inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
              <GiftIcon className="w-10 sm:w-14" />
            </span>
            <p>Ưu đãi</p>
          </div>
          <div>
            <span class="inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
              <CrowIcon className="w-10 sm:w-14" />
            </span>
            <p>Quyền lợi thành viên</p>
          </div>
          <div>
            <span class="inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
              <DocumentIcon className="w-10 sm:w-14" />
            </span>
            <p>Lịch sử mua hàng</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHome;
