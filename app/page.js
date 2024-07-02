import Image from "next/image";
import Login from "./Login/page";
import HomePage from "./HomePage/page"

export default function Home() {
  return (
    <main className="items-center">
     <div>
    <Login/>
      </div>
    </main>
  );
}
