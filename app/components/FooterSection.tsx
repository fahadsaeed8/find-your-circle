import Image from "next/image";

export default function FooterSection() {
  return (
    <footer className="bg-[#F5F2ED] -mt-5 md:mt-0 px-6 pt-6 md:pt-16 md:pb-6 md:px-12">
      <div className="mx-auto max-w-6xl flex flex-col items-center justify-center">
        {/* Logo - Centered at top */}
        <div className="mb-8 md:mb-12 flex items-center justify-center">
          <div
            className="animate-rotate"
            style={{
              animation: "rotate 10s linear infinite",
              display: "inline-block",
              transformOrigin: "center center",
            }}
          >
            <Image
              src="/LOGO CS-01.png"
              width={80}
              height={80}
              alt="Society & The Circle Logo"
              className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
            />
          </div>
        </div>

        {/* Social Media Icons - Centered row */}
        <div className="flex flex-row gap-3 md:gap-0 items-center justify-center">
          <a
            href="#"
            className=" p-2 md:p-2.5 transition hover:opacity-80 flex items-center justify-center"
            aria-label="TikTok"
          >
            <Image
              src="/Vector (17).svg"
              alt="TikTok"
              width={20}
              height={20}
              className="w-6 h-6 md:w-8 md:h-8"
            />
          </a>
          <a
            href="#"
            className=" p-2 md:p-2.5 transition hover:opacity-80 flex items-center justify-center"
            aria-label="Instagram"
          >
            <Image
              src="/Vector (18).svg"
              alt="Instagram"
              width={20}
              height={20}
              className="w-6 h-6 md:w-8 md:h-8"
            />
          </a>
          <a
            href="#"
            className=" p-2 md:p-2.5 transition hover:opacity-80 flex items-center justify-center"
            aria-label="Facebook"
          >
            <Image
              src="/Vector (19).svg"
              alt="Facebook"
              width={20}
              height={20}
              className="w-6 h-6 md:w-8 md:h-8"
            />
          </a>
          {/* <a
            href="#"
            className=" p-2 md:p-2.5 transition hover:opacity-80 flex items-center justify-center"
            aria-label="Twitter"
          >
            <Image
              src="/Vector (20).svg"
              alt="Twitter"
              width={20}
              height={20}
              className="w-4 h-4 md:w-8 md:h-8"
            />
          </a> */}
          {/* <a
            href="#"
            className="p-2 md:p-2.5 transition hover:opacity-80 flex items-center justify-center"
            aria-label="LinkedIn"
          >
            <Image
              src="/Vector (21).svg"
              alt="LinkedIn"
              width={20}
              height={20}
              className="w-4 h-4 md:w-8 md:h-8"
            />
          </a> */}
        </div>

        {/* Policy links - bottom right */}
        <div className="mt-10 mb-5 md:mb-0 md:mt-12 w-full flex flex-wrap items-center justify-center md:justify-end gap-x-4 gap-y-2">
          <a
            href="/terms-and-conditions"
            className="group text-black hover:text-[#BF822E] transition-colors flex items-center gap-1 font-medium md:font-semibold text-sm"
          >
            <span className="text-black group-hover:text-[#BF822E] transition-colors" aria-hidden>•</span>
            Terms &amp; Conditions
          </a>
          <a
            href="/privacy-policy"
            className="group text-black hover:text-[#BF822E] transition-colors flex items-center gap-1 font-medium md:font-semibold text-sm"
          >
            <span className="text-black group-hover:text-[#BF822E] transition-colors" aria-hidden>•</span>
            Privacy Policy
          </a>
          <a
            href="/refund-cancellation-policy"
            className="group text-black hover:text-[#BF822E] transition-colors flex items-center gap-1 font-medium md:font-semibold text-sm"
          >
            <span className="text-black group-hover:text-[#BF822E] transition-colors" aria-hidden>•</span>
            Refund &amp; Cancellation Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
