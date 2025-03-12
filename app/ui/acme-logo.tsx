import { lusitana } from "@/app/ui/fonts";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

const AcmeLogo = () => {
  return (
    <div
      className={`${lusitana.className} loading-none flex flex-row items-center text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Acme</p>
    </div>
  );
};

export default AcmeLogo;

