import Image from "next/image";


function App() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Cube />
    </Canvas>
  );
}

export default App;





export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
       <div className="bg-orange-500">
SALUT !
       </div>
      </div>
    </main>
  );
}
