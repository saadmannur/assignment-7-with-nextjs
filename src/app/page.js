import Friends from "@/Components/Friends";
import Header from "@/Components/Header";
import { Suspense } from "react";


export default function Home() {
  const friendsPromise = fetch("friends.json").then(res => res.json())
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-4xl flex-col items-center justify-between bg-white dark:bg-black sm:items-start">
        <Header></Header>
        <Suspense fallback={<div className="text-center"><span className="loading loading-spinner text-info"></span></div>}>
          <Friends friendsPromise={friendsPromise}></Friends>
        </Suspense>
        
        
      </main>
    </div>
  );
}
