import { Link } from "react-router-dom";

const Book = ({book}) => {
    const {bookId,image,bookName,author,tags,category} = book;
    return (
      <Link to={`/books/${bookId}`}>
         <div className="card bg-base-100 w-96 shadow-xl p-6">
  <figure className="bg-slate-300 py-8 rounded-2xl">
    <img
      src={image}
     className="h-[166px]"
      alt={bookName} />
  </figure>
  <div className="card-body">
    <div className="flex justify-center gap-4">
    {
        tags.map((tag,index) =><button
        key ={index}
        className="btn btn-xs bg-green-600">{tags}</button>)
    }
    </div>
    <h2 className="card-title">
      {bookName}
      <div className="badge badge-secondary">NEW</div>
    </h2>
     <p className="text-left">By :{author}</p>
    <div className="border-t-2 border-dashed"></div>
    
    <div className="card-actions justify-between">
      <div className="badge badge-outline">{category}</div>
      
      <div className="rating">
        <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" defaultChecked />
        <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-300" />
     </div>
    </div>
  </div>
    </div>
      </Link>
    );
};

export default Book;