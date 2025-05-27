import SideNav from "./Layout/SideNav";
import Header from "./Layout/Header";
import MainDashBoard from "./DashBoard/MainDashBoard";

const App = () => {
  return (
     <div className="flex h-screen overflow-hidden bg-primary text-gray-900 font-[Inter] m-2  rounded-4xl  ">
      {/* Sidebar (fixed width) */}
      <aside className="w-[250px] bg-[#F9FBFD] border-r border-gray-200 shadow-sm ">
        <SideNav />
      </aside>

      {/* Right content area */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header */}
        <Header />

        {/* Main Dashboard content */}
        <main className="flex-1 overflow-y-auto ml-3">
          <MainDashBoard />
        </main>
      </div>
   </div>
  );
};

export default App;
