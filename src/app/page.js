
import Friends from "@/Components/homepage/Friends";
import Header from "@/Components/homepage/Header";



export default function Home() {
  
  return (
    <div className=" mx-auto  flex flex-col justify-center">
      <main className=" mx-auto max-w-5xl">
        <Header></Header>
        <Friends></Friends>
        
        
        
      </main>
    </div>
  );
}
