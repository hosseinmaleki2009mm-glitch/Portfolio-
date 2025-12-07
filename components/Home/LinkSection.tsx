import Link from "next/link";
import React from "react";
import Icon from "../ui/Icon";
import { twMerge } from "tailwind-merge";

const LinkSection = ({ className }: { className?: string }) => {
  const links = [
    {
      href: "https://github.com/AmirmAfzal",
      icon: "lineicons:github",
      label: "GitHub",
    },

    {
      href: "https://t.me/Amirm_afzal2",
      icon: "lineicons:telegram",
      label: "Telegram",
    },
    {
      href: "mailto:amirrrez70@gmail.com",
      icon: "mynaui:at",
      label: "Email",
    },
    {
      href: "https://leetcode.com/u/amirmAfzal/",
      icon: "hugeicons:leetcode",
      label: "LeetCode",
    },
  ];
  return (
    <div className={twMerge("flex flex-row flex-wrap gap-2", className)}>
      {links.map((link) => {
        const isEmail = link.label === "Email";
        const LinkComponent = isEmail ? "a" : Link;
        const linkProps = isEmail
          ? { href: link.href }
          : { href: link.href, target: "_blank" };
        
        return (
          <LinkComponent
            key={link.href}
            {...linkProps}
            className="btn btn-ghost text-base-content/60 hover:text-base-content flex flex-row items-center gap-4 p-4"
            id="social-link"
          >
            <Icon icon={link.icon} width={28} height={28} />
            <div className="flex flex-row items-center gap-1">
              <span className="text-ba32 font-medium">{link.label}</span>
              <Icon icon="mynaui:arrow-up-right" width={24} height={24} />
            </div>
          </LinkComponent>
        );
      })}
    </div>
  );
};

export default LinkSection;
