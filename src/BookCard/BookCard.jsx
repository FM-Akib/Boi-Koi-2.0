
const BookCard = ({bookg}) => {
    // console.log(book);
    const {name,authorName,img,price,type}=bookg;
    return (
        <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-200 dark:text-gray-800">
        <img src="https://source.unsplash.com/random/300x300/?1" alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
        <div className="mt-6 mb-2">
            <span className="block text-xs font-medium tracki uppercase dark:text-violet-600">{type}</span>
            <h2 className="text-xl font-semibold tracki">{name}</h2>
        </div>
        <p className="dark:text-gray-600">{authorName}</p>
        <p className="dark:text-gray-600">{price}</p>
        <button type="button" className=" bottom-0 flex items-center justify-center w-full p-3 font-semibold tracki rounded-md dark:bg-violet-400 dark:text-gray-900">Read more</button>
    </div>
    );
};

export default BookCard;