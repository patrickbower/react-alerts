import {createContext} from "react";

const AlertContext = createContext(["toaster", () => {}]);
export default AlertContext;