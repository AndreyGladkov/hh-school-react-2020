import React from "react";
const path = require("path");
const paths = { imagesPath: path.join(__dirname, "/images/") };

export const GlobalContext = React.createContext(paths);
