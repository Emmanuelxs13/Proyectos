import { useState } from "react";
import { RiMenu3Fill, RiUser3Line, RiAddLine, RiPieChartLine, RiCloseLine, RiArrowDownSLine } from "react-icons/ri";

// Components
import Sidebar from "./components/shared/sidebar";
import Header from "./components/shared/Header";
import Car from "./components/shared/Car";
import Card from "./components/shared/Card";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  // Function
  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  }


  // Ordena los productos en la vista movil
  const toggleOrders = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
  }

  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      <Car showOrder={showOrder} setShowOrder={setShowOrder}/>
      {/* Menu Movil */}
      <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-4 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button className="p-2">
          <RiUser3Line />
        </button>

        <button className="p-2">
          <RiAddLine />
        </button>

        <button onClick={toggleOrders} className="p-2">
          <RiPieChartLine />
        </button>

        <button onClick={toggleMenu} className="text-white p-2">
          {/* Mostrar icono en el responsive del dispositivo movil */}
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </nav>

      <main className="lg:pl-32 lg:pr-96 pb-20">
        <div className="md:p-8 p-4">
         {/* HEADER */}
         <Header/>

          {/* TITLE CONTENT */}
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-xl text-gray-300">Choose Dishes</h2>
            <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg">
              <RiArrowDownSLine />Dine in
            </button>
          </div>

          {/* CONTENT */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-16">

            <Card img="food.png" description="Speacy seasoned seafood nodles" price="$4,68" inventory="20 Bowls available"/>
            <Card img="food.png" description="Speacy seasoned seafood nodles" price="$4,68" inventory="20 Bowls available"/>
            <Card img="food.png" description="Speacy seasoned seafood nodles" price="$4,68" inventory="20 Bowls available"/>
            <Card img="food.png" description="Speacy seasoned seafood nodles" price="$4,68" inventory="20 Bowls available"/>
            <Card img="food.png" description="Speacy seasoned seafood nodles" price="$4,68" inventory="20 Bowls available"/>
            <Card img="food.png" description="Speacy seasoned seafood nodles" price="$4,68" inventory="20 Bowls available"/>
          
          </div>
        </div>
      </main>
    </div>
  );
}

export default App
