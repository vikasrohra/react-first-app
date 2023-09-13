import { createContext } from "react";

const UserContext = createContext({
    user: {
        name: "Dummy Name",
        email: "dummy@gmail.com"
    }
});

UserContext.displayName = "UserContext"; //Not required, it can be used only for react developer tools to identify the user context if we've many contexts (But not required)

export default UserContext;