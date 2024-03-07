import { Billboard as BillboardType } from "@/types";
import Image from "next/image";

interface BillboardProps {
  data: BillboardType;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="h-screen w-screen relative">
      <Image
        src={data?.imageUrl}
        fill
        alt=""
        className="object-cover object-center"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center gap-y-8 bg-white/50">
        <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-neutral-700">
          Mike Wazauwski
        </div>
        <p className="font-bold text-sm text-neutral-700">{data.label}</p>
      </div>
    </div>
  );
};

export default Billboard;
