import Image from "next/image";
import Login from "./Login/page";
import HomePage from "./HomePage/page"
import Signup from "./Signup/page"

export default function Home() {
  return (
    <main className="">
     <div>
    <Login/>
      </div>
    </main>
  );
}
