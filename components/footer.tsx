import { FaCopyright } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <main className="py-5">
      <div className="container mx-auto flex items-center justify-center gap-3 opacity-80">
        <FaCopyright />
        {year} All Rights Reserved
      </div>
    </main>
  );
}
