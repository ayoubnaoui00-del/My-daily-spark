import { Header } from "./components/header"




function App() {
  return ( 

  <main className="bg-[#FDFCF8]">
  <Header/>
  <div className="w-9/12 mx-auto">

  </div>
  <div>
    <div className="flex justify-center text-2xl font-bold font-sans mx-auto  ">StreakTracker</div>
    <div className="flex justify-center text-2xs text-[#636E72] font-sans font-bold my-5 ">🔥Your Current Streak</div>
    <div className="flex justify-center text-5xl text-[#2D3436] font-bold font-merienda">5</div>
    <div className="flex justify-center text-2xs text-[#636E72] font-sans font-bold my-5 ">Last weak</div>




  </div>
  </main>
  )
}


export default App