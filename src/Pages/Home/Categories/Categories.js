
import { useQuery } from '@tanstack/react-query';


import Category from './Category';

const Categories = () => {
//    const [categories,setCategories] =useState([]);
   const {data:categories=[]} = useQuery({
    queryKey:['categories'],
    queryFn:()=>fetch('http://localhost:5000/categories')
    .then(res=>res.json())
   });
//    useEffect(()=>{
//     fetch('http://localhost:5000/categories')
//     .then(res=>res.json())
//     .then(data=>setCategories(data))
//    },[])
    return (
       <section>
        {/* <p className='font-bold text-2xl text-primary mt-11'>{categories.length}</p> */}
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3 mt-11'>
        {
            categories.map(category=><Category key={category._id} category={category}></Category>)
        }
        </div>
       </section>
    );
};

export default Categories;