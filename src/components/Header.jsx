// import Search from "./Search";
export default function Header({ title }) {
  return (
    <>
      <div className="bg-orange-600 flex justify-between py-3 px-20 items-center ">
        <h1 className="font-semibold text-white text-2xl">{title}</h1>
        {/* <Search></Search> */}
      </div>
    </>
  );
}
