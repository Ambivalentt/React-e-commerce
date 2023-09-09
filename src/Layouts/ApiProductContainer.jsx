import { FiStar } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";

const ApiProductContainer = ({ title, images, stock, rating, id }) => {
    return (
      
            <article className='flex flex-col rounded-xl w-80 h-72 shadow-lg font-semibold border-gray-300 border' key={id}>
                <figure className='h-3/4 relative overflow-hidden rounded-t-xl'>
                    <img loading='lazy' className='object-fill h-full w-full' src={images[0]} alt="" />
                    <p className='absolute text-white top-2 left-4 flex items-center bg-red-700 rounded-xl px-2'><FiStar /> {rating}</p>
                    <span className='absolute top-2 right-4 flex text-xl bg-red-700 text-white rounded-xl items-center justify-center px-2 py-1'><FiShoppingCart /></span>
                </figure>
                <div className='text-center h-1/4 flex-col font-semibold items-center flex justify-center'>
                    <p>{title}</p>
                    <span className='text-sm font-light'>stock:{stock}</span>
                </div>
            </article>
    )
}

export default ApiProductContainer