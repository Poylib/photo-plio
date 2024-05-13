import Image from "next/image";

import { getJpgContent } from "@/app/aws/jpg/getPost";

export default async function Category({ params, searchParams }) {
  const { category } = searchParams;
  const { path, slug } = params;

  const req = `${path}/${category}/${slug}`;

  const { Contents } = await getJpgContent(req);

  return (
    <section className=" w-[100%] py-[70px] px-6 max-w-screen-md">
      {Contents?.map((el, idx) => {
        if (idx === 0) return;
        return (
          <Image
            src={`https://socon-image.s3.ap-northeast-2.amazonaws.com/${el.Key}`}
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto mb-4"
            alt="photo"
            key={`${idx}`}
            priority={true}
          />
        );
      })}
    </section>
  );
}
