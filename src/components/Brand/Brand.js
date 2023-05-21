import Image from "next/image";
import Link from "next/link";

const Brand = () => {
  return (
    <div className="min-w-[250px]">

      <Link href="/">
        <Image src="/images/logo.png" alt="BRAND" height={60} width={190} />
      </Link>
    </div>
  );
};

export default Brand;
