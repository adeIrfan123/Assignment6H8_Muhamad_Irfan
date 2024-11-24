export default function Search({ onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.querySelector("input").value;
    onSearch(query);
  };

  return (
    <>
      <div className="flex items-center bg-pink-700 overflow-hidden rounded-md">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Search..." className="p-2" />
          <button
            type="submit"
            className="bg-black px-4 py-2 font-medium text-white"
          >
            SEARCH
          </button>
        </form>
      </div>
    </>
  );
}
