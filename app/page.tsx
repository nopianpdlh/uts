"use client"; // Jika menggunakan Next.js
import { useState } from "react";
import Hero from "./components/hero";
import RiwayatPendidikan from "./components/riwayatpendidikan";
import RiwayatPekerjaan from "./components/riwayatpekerjaan";
import Skill from "./components/skill";
import Info from "./components/info";
import Hobby from "./components/hobby";
import Contact from "./components/contact";
import Color from "./components/color";

import "./sahna-style.css";

export default function MyApp() {
  const [warna, setWarna] = useState("light"); // Menambahkan state untuk warna

  return (
    <section
      className={`min-h-screen p-4 transition-colors duration-300 ${
        warna === "dark"
          ? "bg-black text-white"
          : warna === "light"
          ? "bg-white text-black"
          : "bg-green-300 text-gray-900"
      }`}
    >
      <Hero />
      <RiwayatPendidikan />
      <RiwayatPekerjaan />
      <Skill />
      <Info />
      <Hobby />
      <Contact />
      <Color setWarna={setWarna} />
    </section>
  );
}
