import Image from "next/image";
import Link from "next/link";

const Brand = () => {
  return (
    <Link href="/home">
      <Image src="/images/brand.png" alt="BRAND" height={60} width={190} />
    </Link>
  );
};

export default Brand;
