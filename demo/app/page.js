"use client"
import MainLayout from "@/components/MainLayout";
import { Context } from "@/context/Context";
import { useContext } from "react";


export default function Home() {
  const { show } = useContext(Context);
  return (
  <div className={`main-layout ${show ? "blurred" : ""}`}>
  <MainLayout/>
  </div>
  );
}
