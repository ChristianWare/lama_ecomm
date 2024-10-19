// "use client";

import CategoryList from "@/components/CategoryList";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import { useWixClient } from "@/hooks/useWixClient";
import { wixClientServer } from "@/lib/wixClientServer";
import { Suspense, useEffect } from "react";

const HomePage = async () => {
  // const wixClient = useWixClient();

  // useEffect(() => {
  //   const getProducts = async () => {
  //     const res = await wixClient.products.queryProducts().find();

  //     console.log(res);
  //   };
  //   getProducts();
  // }, [wixClient]);

  // const wixClient = await wixClientServer();

  // const res = await wixClient.products.queryProducts().find();

  // console.log(res);

  return (
    <main>
      <Slider />
      <div className='mt-24 px4 md:px-8 lg:px-16 xl:32 2xl:px-64'>
        <h1 className='text-2xl'>Featured products</h1>
        <Suspense fallback='Loading...'>
          <ProductList
            categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID!}
            limit={4}
          />
        </Suspense>
      </div>
      <div className='mt-24 '>{/* <ProductList /> */}</div>
      <div className='mt-24 px4 md:px-8 lg:px-16 xl:32 2xl:px-64'>
        <h1 className='text-2xl'>Categories</h1>
        <br />
        <Suspense fallback='Loading...'>
          <CategoryList />
        </Suspense>
      </div>
    </main>
  );
};

export default HomePage;
