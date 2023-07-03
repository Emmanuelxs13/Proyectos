import { useState } from "react";
import { RiMenu3Fill, RiUser3Line, RiAddLine, RiPieChartLine, RiCloseLine, RiSearch2Line, RiArrowDownSLine, RiDeleteBin6Line } from "react-icons/ri";
// Components
import Sidebar from "./components/shared/sidebar";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  // Function
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }



  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      {/* Menu Movil */}
      <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-4 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button className="p-2">
          <RiUser3Line />
        </button>

        <button className="p-2">
          <RiAddLine />
        </button>

        <button className="p-2">
          <RiPieChartLine />
        </button>

        <button onClick={toggleMenu} className="text-white p-2">
          {/* Mostrar icono en el responsive del dispositivo movil */}
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </nav>

      <main className="lg:pl-32 grid grid-cols-1 lg:grid-cols-8 p-4 pb-20">
        <div className="lg:col-span-6 md:p-8">
          {/* HEADER */}
          <header>
            {/* TITLE AND SEARCH */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
              <div>
                <h1 className="text-2xl text-gray-300">La variante</h1>
                <p className="text-gray-500">05 de Mayo 2023</p>
              </div>

              <form>
                {/* BUSCADOR */}
                <div className="w-full relative">
                  <RiSearch2Line className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
                  <input
                    type="text"
                    className="bg-[#1F1D2B] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none"
                    placeholder="Search"
                  />
                </div>
              </form>
            </div>

            {/* TABS */}
            <nav className="text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6">
              <a href="#" className="relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[1px] text-[#ec7c6a]">Hot dishes</a>
              <a href="#" className="py-2 pr-4">Cold dishes</a>
              <a href="#" className="py-2 pr-4">Soup</a>
              <a href="#" className="py-2">Grill</a>
            </nav>
          </header>


          {/* TITLE CONTENT */}
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-xl text-gray-300">Choose Dishes</h2>
            <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg">
              <RiArrowDownSLine />Dine in
            </button>
          </div>

          {/* CONTENT */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* CARD */}
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
              <img src="food.png" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" />
              <p className="text-xl">Speacy seasoned seafood nodles</p>
              <span className="text-gray-400">$4,68</span>
              <p className="text-gray-600">20 Bowls Available</p>
            </div>

            {/* CARD */}
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
              <img src="food.png" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" />
              <p className="text-xl">Speacy seasoned seafood nodles</p>
              <span className="text-gray-400">$4,68</span>
              <p className="text-gray-600">20 Bowls Available</p>
            </div>

            {/* CARD */}
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
              <img src="food.png" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" />
              <p className="text-xl">Speacy seasoned seafood nodles</p>
              <span className="text-gray-400">$4,68</span>
              <p className="text-gray-600">20 Bowls Available</p>
            </div>

            {/* CARD */}
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
              <img src="food.png" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" />
              <p className="text-xl">Speacy seasoned seafood nodles</p>
              <span className="text-gray-400">$4,68</span>
              <p className="text-gray-600">20 Bowls Available</p>
            </div>

            {/* CARD */}
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
              <img src="food.png" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" />
              <p className="text-xl">Speacy seasoned seafood nodles</p>
              <span className="text-gray-400">$4,68</span>
              <p className="text-gray-600">20 Bowls Available</p>
            </div>

            {/* CARD */}
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
              <img src="food.png" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" />
              <p className="text-xl">Speacy seasoned seafood nodles</p>
              <span className="text-gray-400">$4,68</span>
              <p className="text-gray-600">20 Bowls Available</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 fixed lg:static right-0 top-0 bg-[#1F1D2B] w-full h-full">
          {/* ORDERS */}
          <div className="relative pt-16 text-gray-300 p-8 h-full overflow-y-scroll">
            <RiCloseLine className="absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl" />
            <h1 className="text-2xl my-4">Orders #625712</h1>

            {/* PILLS */}
            <div className="flex items-center gap-4 flex-wrap">
              <button className="bg-[#ec7c6a] text-white py-2 px-4 rounded-xl">Dine In</button>

              <button className="text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500">To Go</button>

              <button className="text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500">Delivery</button>
            </div>

            {/* CAR */}
            <div>
              <div className="grid grid-cols-6 mb-4 p-4">
                <h5 className="col-span-4">Item</h5>
                <h5>Qty</h5>
                <h5>Price</h5>
              </div>

              {/* PRODUCTS */}
              <div className="bg-[#262837] p-4  rounded-xl mb-4">
                <div className="grid grid-cols-6 mb-4">
                  {/* PRODUCT DESCRIPTION */}
                  <div className="col-span-4 flex items-center gap-3">
                    <img src="food.png" className="w-10 h-10 object-cover"/>
                    <div>
                      <h5 className="text-sm">Spaicy seasoned...</h5>
                      <p className="text-xs text-gray-500">$8.69</p>
                    </div>
                  </div>

                  {/* QTY */}
                  <div>
                    <span>3</span>
                  </div>

                  {/* PRICE */}
                  <div>
                    <span>26,07</span>
                  </div>
                </div>

                {/* NOTE */}
                <div className="grid grid-cols-6 items-center gap-2">
                    <form className="col-span-5">
                        <input 
                        type="text" 
                        className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none"
                        placeholder="Add note..."/>
                    </form>

                    <div>
                      <button className="border border-red-500 p-2 rounded-lg">
                        <RiDeleteBin6Line  className="text-red-500"/>
                      </button>
                    </div>
                </div>
              </div>

              <div className="bg-[#262837] p-4  rounded-xl mb-4">
                <div className="grid grid-cols-6 mb-4">
                  {/* PRODUCT DESCRIPTION */}
                  <div className="col-span-4 flex items-center gap-3">
                    <img src="food.png" className="w-10 h-10 object-cover"/>
                    <div>
                      <h5 className="text-sm">Spaicy seasoned...</h5>
                      <p className="text-xs text-gray-500">$8.69</p>
                    </div>
                  </div>

                  {/* QTY */}
                  <div>
                    <span>3</span>
                  </div>

                  {/* PRICE */}
                  <div>
                    <span>26,07</span>
                  </div>
                </div>

                {/* NOTE */}
                <div className="grid grid-cols-6 items-center gap-2">
                    <form className="col-span-5">
                        <input 
                        type="text" 
                        className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none"
                        placeholder="Add note..."/>
                    </form>

                    <div>
                      <button className="border border-red-500 p-2 rounded-lg">
                        <RiDeleteBin6Line  className="text-red-500"/>
                      </button>
                    </div>
                </div>
              </div>

              <div className="bg-[#262837] p-4  rounded-xl mb-4">
                <div className="grid grid-cols-6 mb-4">
                  {/* PRODUCT DESCRIPTION */}
                  <div className="col-span-4 flex items-center gap-3">
                    <img src="food.png" className="w-10 h-10 object-cover"/>
                    <div>
                      <h5 className="text-sm">Spaicy seasoned...</h5>
                      <p className="text-xs text-gray-500">$8.69</p>
                    </div>
                  </div>

                  {/* QTY */}
                  <div>
                    <span>3</span>
                  </div>

                  {/* PRICE */}
                  <div>
                    <span>26,07</span>
                  </div>
                </div>

                {/* NOTE */}
                <div className="grid grid-cols-6 items-center gap-2">
                    <form className="col-span-5">
                        <input 
                        type="text" 
                        className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none"
                        placeholder="Add note..."/>
                    </form>

                    <div>
                      <button className="border border-red-500 p-2 rounded-lg">
                        <RiDeleteBin6Line  className="text-red-500"/>
                      </button>
                    </div>
                </div>
              </div>

            </div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400">Discount</span>
                <span>$0</span>
              </div>

              <div className="flex items-center justify-between mb-6">
                <span className="text-gray-400">Subtotal</span>
                <span>$26,07</span>
              </div>

              <div>
                <button className="bg-[#ec7c6a] w-full py-2 px-4 rounded-lg">Continue to payment</button>
              </div>
            </div>
            {/* SUBMIT PAYMENT */}
            <div className="bg-[#262837] absolute w-full bottom-0 left-0 p-4">
          </div>
        </div>
      </main>
    </div>
  );
}

export default App
