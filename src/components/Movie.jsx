export default function Movie({ Title, image, year }) {
  return (
    <>
      <div className="container my-10 mx-auto shadow-lg shadow-slate-500">
        {/* <div className="my-8">
          <h1 className="px-8 font-medium text-2xl">
            Show your favorite movies
          </h1>
        </div> */}
        <div className="bg-slate-600 w-full h-[500px]">
          <img src={image} alt="" className="h-96 w-full" />
          <div className="items-center mt-6 text-white">
            <h3 className="text-center">{Title}</h3>
            <h3 className="text-center">Edisi tahun: {year}</h3>
          </div>
        </div>
      </div>
    </>
  );
}
