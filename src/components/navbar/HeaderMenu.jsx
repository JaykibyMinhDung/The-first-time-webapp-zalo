import React from "react";
import { ReactComponent as StartIcon } from "../../icon/star.svg";
import { ReactComponent as GiftIcon } from "../../icon/gift.svg";
import { ReactComponent as CartIcon } from "../../icon/cartIcon.svg";
import { ReactComponent as ContactIcon } from "../../icon/contact.svg";

const HeaderMenu = () => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute left-24 md:left-96 top-40 md:top-40 md:w-3/5 w-3/5 h-56 md:h-60 drop-shadow-5xl rounded-3xl bg-white z-10">
        <input
          type="text"
          className="w-full h-1/5 border-b-2 text-center outline-0 rounded-t-3xl"
        />
        {/* Menu */}
        <div className="flex flex-nowrap justify-between text-center mx-8 mt-8">
          <div>
            <span class="inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
              <StartIcon className="w-10 sm:w-14" />
            </span>
            <p>Tích điểm</p>
          </div>
          <div>
            <span class="inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
              <GiftIcon className="w-10 sm:w-14" />
            </span>
            <p>Đổi thưởng</p>
          </div>
          <div>
            <span class="inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
              <CartIcon className="w-10 sm:w-14" />
            </span>
            <p>Đặt hàng</p>
          </div>
          <div>
            <span class="inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
              <ContactIcon className="w-10 sm:w-14" />
            </span>
            <p>Liên hệ</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
