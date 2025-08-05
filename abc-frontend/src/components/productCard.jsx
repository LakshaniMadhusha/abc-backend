export default function ProductCard(props) {
  console.log(props);
  return (
    <div className="max-w-sm bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 p-4 transition-transform transform hover:scale-105">
      <img src={props.image} alt={props.name} className="w-full h-48 object-cover mb-4 rounded-md" />
      <h1 className="text-xl font-semibold text-gray-800 mb-2">{props.name}</h1>
      <p className="text-gray-600 text-base mb-4">Price: ${props.price}</p>
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
        View More
      </button>
    </div>
  );
}
