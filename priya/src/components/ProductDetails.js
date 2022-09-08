import {useParams} from 'react-router-dom'
const ProductDetails = ()=>{
    const params = useParams();
    return <div >
        This is ProductDetails page
        <p>{params.productId}</p>
    </div>
}

export default ProductDetails;