

const FeatureCard = ({title,content,btnTag}) => {
    return (
        <div className="card w-fit bg-gray-200 shadow-md p-2">
        {/* <figure className="px-10 pt-10">
          <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
        </figure> */}
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{content}</p>
          <div className="card-actions">
            <button className="btn bg-slate-800 text-white hover:bg-slate-600">{btnTag}</button>
          </div>
        </div>
      </div>
    );
};

export default FeatureCard;