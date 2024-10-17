"use client";

import Image from "next/image";

const CartModal = () => {
  const cartItems = true;

  return (
    <div className='w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20'>
      {!cartItems ? (
        <div>Cart Is empty</div>
      ) : (
        <>
          <Image
            src='https://images.pexels.com/photos/27637391/pexels-photo-27637391/free-photo-of-vase-with-dried-twigs-and-a-candle-burning-in-an-old-fashioned-candlestick-holder.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
            alt=''
            width={96}
            height={96}
            className='object-cover rounded-md'
          />
          <div className='flex flex-col justify-between w-full'>
            {/* TOP */}
            <div className=''>
              {/* TITLE */}
              <div className='flex items-center justify-between gap-8'>
                <h3 className='font-semibold'>Product Name</h3>
                <div className='p-1 bg-gray-50 rounded-sm flex items-center gap-2'>
                  <div className='text-xs text-green-500'>item.quantity</div>
                  $price
                </div>
              </div>
              {/* DESC */}
              <div className='text-sm text-gray-500'>avaialbility</div>
            </div>
            {/* BOTTOM */}
            <div className='flex justify-between text-sm'>
              <span className='text-gray-500'>Qty.</span>
              <span
                className='text-blue-500'
                // style={{ cursor: isLoading ? "not-allowed" : "pointer" }}
                // onClick={() => removeItem(wixClient, item._id!)}
              >
                Remove
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default CartModal;
