import { Featured } from "../../componenets/featured/Featured";
import { Header } from "../../componenets/header/Header";
import { Navbar } from "../../componenets/navbar/Navbar";
import { PropertyList } from "../../componenets/propertyList/PropertyList";
import "./home.css";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
      </div>
    </div>
  );
};
export default Home;
