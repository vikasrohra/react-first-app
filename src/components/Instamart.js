import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
    return (
        <div className="border border-black p-2 m-2">
            <h3 className="font-bold text-xl">{title}</h3>
            {!isVisible && <button className="underline" onClick={() => setIsVisible(true)}>Show</button>}
            {isVisible && <button className="underline" onClick={() => setIsVisible(false)}>Hide</button>}
            {isVisible && <p>{description}</p>}
        </div>
    );
}

const Instamart = () => {
    const [visibleSection, setVisibleSection] = useState("about");
    return (
        <div>
            <h1 className="text-3xl font-bold p-2 m-2">Instamart</h1>
            <Section isVisible={visibleSection === "about"} setIsVisible={(flag) =>
                flag ? setVisibleSection("about") : setVisibleSection("")
            } title={"About Instamart"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"} />
            <Section isVisible={visibleSection === "team"} setIsVisible={(flag) =>
                flag ? setVisibleSection("team") : setVisibleSection("")} title={"Team Instamart"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"} />
            <Section isVisible={visibleSection === "careers"} setIsVisible={(flag) =>
                flag ? setVisibleSection("careers") : setVisibleSection("")} title={"Careers"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"} />
        </div>
    );
}

export default Instamart;