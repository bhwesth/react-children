import "./App.css";
import Menu from "./components/Menu";
import MenuItem from "./components/MenuItem";
import MenuWithChildren from "./components/MenuWithChildren";

function App() {
    const menuItems = [
        { name: "Home" },
        { name: "Something" },
        { name: "Something else" },
        { name: "Profile" },
    ];

    return (
        <div className="app">
            <div className="menu-demo">
                <Menu items={menuItems} />
                <MenuWithChildren>
                    {/* <MenuItem name={menuItems[0].name} /> */}
                    {/* <MenuItem name={menuItems[1].name} /> */}
                    {menuItems.map((item) => (
                        <MenuItem name={item.name} />
                    ))}
                </MenuWithChildren>
            </div>
        </div>
    );
}

export default App;
