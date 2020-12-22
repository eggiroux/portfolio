import llgSrc from "../Assets/img/llg_img.png";

import css from "../Assets/icons/Stack/css.svg";
import git from "../Assets/icons/Stack/git.svg";
import html from "../Assets/icons/Stack/html.svg";
import javascript from "../Assets/icons/Stack/javascript.svg";
import mongodb from "../Assets/icons/Stack/mongodb.svg";
import nodejs from "../Assets/icons/Stack/nodejs.svg";
import react from "../Assets/icons/Stack/react.svg";
import vscode from "../Assets/icons/Stack/vscode.svg";

export const projectsData = [
  {
    name: "Looseleaf Galaxy",
    imageSrc: llgSrc,
    description:
      "Web trading game combining clicker game mechanics and stock market system for all sorts of goods, in space!",
    url: "http://www.looseleafgalaxy.space",
    stack: [javascript, react, nodejs, mongodb],
  },
  {
    name: "project 2",
    imageSrc: llgSrc,
    description: "test2",
    url: "some url",
    stack: [css, git, html, vscode],
  },
];
