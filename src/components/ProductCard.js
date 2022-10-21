import { Link } from 'react-router-dom'
import LikeButton from './Like'


export default function ProductCard(props) {
    return (
        
        <div className='bg-slate-100 w-1/4  mt-2 p-4 hover:shadow-2xl rounded-lg flex flex-wrap justify-between hover:border-blue-600'>
            <img src={props.product.imageUrl} alt="product image" className="h-36  mx-auto rounded-md " /><br/><hr />
            <div className='text-center'>
             <Link to ={`/blogs/${props.product.id}`}><h3 className='font-bold text-black my-4 hover:underline text-lg mx-auto'>{props.product.title}</h3></Link>
             <p className="text-gray-700 text-base ml-6">
                {props.product.summary}</p>
            <hr />
            </div> 
            
            <div className='mx-auto'><LikeButton/></div>
            
        </div>

    )
}