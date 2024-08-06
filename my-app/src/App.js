import css from "./App.module.css";
// import NavBarSimple from "./components/NavBarSimple";
import Sidebar from "./components/Sidebar";
import NavBarForm from "./components/NavBarForm";
//import Content from "./components/Content";
//import { SearchBar } from './components/SearchBar';
import ContentHooks from "./components/ContentHooks";

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <NavBarForm />
      <Sidebar />
      {/* <Content />*/}
      <ContentHooks/>

    </div>
  );
}

export default App;
