import { getPosts } from "@/data/jpg/get-contents";
import PhotoGrid from "../components/category/PhotoGrid";

export default async function Category() {
  // const data = (await getPosts("jpg")).filter((e) => e.thumbnail === "1.jpg");

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-[70px] px-6 w-[100%] max-w-[1024px]">
      {/* <PhotoGrid data={data} /> */}
      <p>test</p>
    </section>
  );
}
