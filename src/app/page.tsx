import CategoryList from "@/components/CategoryList";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <main>
      <Slider />
      <div className='mt-24 px4 md:px-8 lg:px-16 xl:32 2xl:px-64'>
        <h1 className='text-2xl'>Featured products</h1>
        <ProductList />
      </div>
      <div className='mt-24 '>
        <h1 className='text-2xl'>Categories</h1>
        <ProductList />
      </div>
      <div className='mt-24 px4 md:px-8 lg:px-16 xl:32 2xl:px-64'>
        <h1 className='text-2xl'>New Products</h1>
        <CategoryList />
      </div>
    </main>
  );
}
