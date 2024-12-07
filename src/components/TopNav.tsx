import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TopNav = () => {
  return (
    <div className="navbar">
      <Tabs defaultValue="account" className="w-[200px]">
        <TabsList>
          <TabsTrigger value="account">Charging Stations</TabsTrigger>
          <TabsTrigger value="password">Fleet Sizing</TabsTrigger>
          <TabsTrigger value="password">Parking</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
          className="search-input"
        ></input>
      </div>
    </div>
  );
};

export default TopNav;

//   return (
//     <div className="navbar">
//       {/* Left Tabs */}
//       <div className="tabs">
//         <a href="#" className="tab">
//           Charging Stations
//         </a>
//         <a href="#" className="tab">
//           Fleet Sizing
//         </a>
//         <a href="#" className="tab">
//           Parking
//         </a>
//       </div>

//       {/* Right Search Bar */}
//       <div className="search-bar">
//         <input type="text" placeholder="Search" className="search-input" />
//       </div>
//     </div>
//   );
