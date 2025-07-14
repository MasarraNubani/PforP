import "../styles/style.css";
import "../styles/home.css";
import "../styles/flipcard.css";
import "../styles/navigationMenu.css";
import "../styles/about.css";
import "../styles/form.css";

import { renderCardSetsPage } from "./cardSetsPage.js";
import { renderAboutPage } from "./aboutPage.js";
import { renderHomePage } from "./homePage.js";

const addListenerToNavigation = () => {
  addNavListener("cardSetPage", renderCardSetsPage);
  addNavListener("aboutPage", renderAboutPage);
  addNavListener("homePage", renderHomePage);
};
const addNavListener = (elementId, callback) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.addEventListener("click", callback);
  }
};
renderHomePage();
addListenerToNavigation();
