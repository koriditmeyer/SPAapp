import "./App.css";
import { Navbar, ItemListContainer, Hero, Footer} from "./components";

function App() {
  const data = "Hello !";
  return (
    <>
      {/* Navbar */}
      <div className="bg-gray-600 w-full overflow-hidden">
        <div className="sm:px-16 px-6 flex justify-center items-center">
          <div className="xl:max-width: 1280px w-full"><Navbar/></div>
        </div>
      </div>
      {/* Hero section */}
      <div className="bg-black h-screen overflow-hidden flex justify-center items-center">
        <Hero/>
        <ItemListContainer message={data}/>
        </div>
      {/* Other sections with articles and footer */}
      <div><Footer /></div>
    </>
  );
}
export default App;
