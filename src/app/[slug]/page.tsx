import Add from "@/components/Add";
import CustomizeProducts from "@/components/CustomizeProducts";
import ProductImages from "@/components/ProductImages";

const SingleProductPage = () => {
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16'>
      {" "}
      {/* Image Here */}
      <div className='w-full lg:w-1/2 lg:sticky top-20 h-max'>
        <ProductImages />
      </div>
      {/* Texts Here */}
      <div className='w-full lg:w-1/2 flex flex-col gap-6'>
        <h1 className='text-4xl font-medium'>Product Name</h1>
        <p className='text-gray-500'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et vitae
          necessitatibus, nemo nobis accusantium, aliquam, aut iste sunt magnam
          consequatur ducimus! Quia, atque iste dolore quae sapiente nihil.
          Beatae, reprehenderit.
        </p>
        <br />
        <h2 className='line-through'>$59</h2>
        <h3 className='font-medium text-2xl'>$49</h3>
        <br />
        options here
        <br />
        {/* <CustomizeProducts /> */}
        quantity + add to cart button here
        {/* <Add /> */}
        <br />
        <h4>Title</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          perspiciatis natus et impedit pariatur, rerum nulla tenetur
          accusantium obcaecati repellendus praesentium harum reiciendis dolores
          eaque optio fuga commodi beatae officia!
        </p>
        <br />
        <h4>Title</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          perspiciatis natus et impedit pariatur, rerum nulla tenetur
          accusantium obcaecati repellendus praesentium harum reiciendis dolores
          eaque optio fuga commodi beatae officia!
        </p>
        <br />
        <h4>Title</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          perspiciatis natus et impedit pariatur, rerum nulla tenetur
          accusantium obcaecati repellendus praesentium harum reiciendis dolores
          eaque optio fuga commodi beatae officia!
        </p>
        <br />
      </div>
    </div>
  );
};
export default SingleProductPage;
