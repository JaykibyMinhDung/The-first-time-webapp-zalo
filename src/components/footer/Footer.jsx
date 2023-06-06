import React from "react";
import { Disclosure } from "@headlessui/react";

import { ReactComponent as PageHome } from "../../icon/iconhome.svg";
import { ReactComponent as ListIcon } from "../../icon/iconlist.svg";
import { ReactComponent as CartIcon } from "../../icon/cartIcon.svg";
import { ReactComponent as ChatText } from "../../icon/chatText.svg";
import { ReactComponent as User } from "../../icon/user.svg";

import "./footer.css";

const navigation = [
  { name: "Trang chủ", href: "#", current: true, icon: <PageHome /> },
  {
    name: "Danh mục",
    href: "/list",
    current: false,
    icon: <ListIcon />,
  },
  { name: "Giỏ hàng", href: "#z", current: false, icon: <CartIcon /> },
  { name: "Tin nhắn", href: "#", current: false, icon: <ChatText /> },
  { name: "Cá nhân", href: "#", current: false, icon: <User /> },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Footer = () => {
  return (
    <Disclosure
      as="nav"
      className=" drop-shadow-4xl absolute top-full bg-slate-50"
    >
      <>
        {/* max-w-7xl */}
        <div className="mx-auto w-screen px-2 sm:px-6 lg:px-8">
          <div className="relative mx-8 flex items-center justify-between">
            {navigation.map((item) => (
              // icon
              <div className="flex-col text-center">
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-slate-50 text-amber-500 "
                      : " text-black hover:bg-slate-50 hover:text-amber-500",
                    "rounded-md px-3 py-2 text-sm font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  <div className="svg">{item.icon}</div>
                  {item.name}
                </a>
              </div>
            ))}
            {/* Drop box  */}
          </div>
        </div>
      </>
    </Disclosure>
  );
};

export default Footer;
