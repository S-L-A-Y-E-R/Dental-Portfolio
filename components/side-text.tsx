import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";

export default function SideText() {
  return (
    <div className="basis-[48%] self-center">
      <h5 className="text-xl font-bold my-2">Let&apos;s Connect</h5>
      <p className="text-opacity-70 mb-4 max-w-md">
        {" "}
        I&apos;m currently looking for new opportunities, my inbox is always
        open. Whether you have a question, I&apos;ll try my best to get back to
        you!
      </p>
      <div className="socials flex flex-row gap-4">
        <Link href="https://wa.me/01025590501" target="_blank">
          <FaWhatsapp className="w-10 h-10" />
        </Link>
        <Link
          href="https://www.facebook.com/profile.php?id=61550792942725"
          target="_blank"
        >
          <FaFacebook className="w-10 h-10" />
        </Link>
      </div>
    </div>
  );
}
