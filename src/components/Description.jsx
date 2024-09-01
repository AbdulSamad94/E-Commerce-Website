import React from 'react'

function Description() {
  return (
    <div className='mt-16'>
        <div className='flex'>
            <p className='tex-sm font-medium text-center py-2 px-4 border border-gray-300'>Description</p>
            <p className='tex-sm text-center py-2 px-4 border border-gray-300'>Reviews</p>
        </div>
        <div className='flex flex-col py-5 gap-4 text-sm text-gray-500 border border-gray-300 px-6'>
            <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</p>
            <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
        </div>
    </div>
  )
}

export default Description