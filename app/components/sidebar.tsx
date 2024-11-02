// src/components/Sidebar.js
import React from "react";

const Sidebar = () => {
  return (
    <aside className="bg-zinc-900  w-64 h-full p-4 text-white">
      <h2 className="font-bold">Меню</h2>
      <ul>
        <li className="my-2">
          <a href="#home">Головна</a>
        </li>
        <li className="my-2">
          <a href="#about">Про нас</a>
        </li>
        <li className="my-2">
          <a href="#contact">Контакт</a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
