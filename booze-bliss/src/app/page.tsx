import Catalog from "@/components/cocktails/catalogo/Catalog";

export default function Home() {
  return (
    <div className="flex p-8 gap-20">
      <div className="bg-white w-[25%] mt-[120px]">NASHE</div>
      <Catalog/>
    </div>
  );
}
