import { signOut } from "next-auth/react";
import Link from "next/link";

const Button = ({ link, role, text, type, icon }) => {
  return (
    <>
      <Link
        href={link}
        onClick={() => role ? signOut() : ""}
        className={`flex items-center gap-2 px-6 w-fit bg-slate-300/[0.1] rounded ${
          type === "primary"
            ? "bg-gradient-to-b from-fuchsia-600 to-primary text-white p-[12px]"
            : "text-primary bg-primary/[0.1] p-[11px] border border-primary"
        } hover:bg-primary hover:text-white `}
      >
        { icon ? icon : "" }
        <span>{text}</span>
      </Link>
    </>
  );
};

export default Button;
