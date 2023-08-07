import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Card from './components/Card'

function App() {

  return (
    <div className='min-h-screen flex flex-col'>
      <Header />

      <main className='h-[90vh] flex gap-8 p-8 pt-0'>
        {/* Sidebar */}
        <Sidebar />

        {/* Content */}
        <div className='flex-1 h-full overflow-y-scroll'>
        {/* <div className='flex-1 h-full'> */}

          {/* Portada */}
          <div className='rounded-2xl mb-4'>
            <img src='https://www.gamerfocus.co/wp-content/uploads/2017/02/ClFCL8fWgAAc0-Y.jpg-orig.jpg'
              className='w-full h-[500px] object-cover object-right md:object-top rounded-2xl' />
          </div>

          {/* Card */}
          <div className='flex md:grid md:grid-cols-2 lg:flex items-center justify-around lg:justify-between flex-wrap gap-6'>
            <Card
              img='https://image.api.playstation.com/vulcan/ap/rnd/202009/3021/B2aUYFC0qUAkNnjbTHRyhrg3.png'
              title='Marvel Spider-Man'
              category='PS5'
              price='51' />

            <Card
              img='https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png'
              title='God of War Ragnaök'
              category='PS5'
              price='55' />

            <Card
              img='https://sm.ign.com/t/ign_es/screenshot/default/got-keyart-80677_3tev.1280.jpg'
              title='Ghost of Tsushima'
              category='PS5'
              price='53' />

            <Card
              img='https://image.api.playstation.com/vulcan/ap/rnd/202101/0812/FkzwjnJknkrFlozkTdeQBMub.png'
              title='Resident Evil-Village'
              category='PS5'
              price='57' />

            <Card
              img='https://image.api.playstation.com/vulcan/img/rnd/202010/2618/w48z6bzefZPrRcJHc7L8SO66.png'
              title='The Last of Us II'
              category='PS5'
              price='48' />
              
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
