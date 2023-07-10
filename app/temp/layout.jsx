import Waves from "./components/waves";

export default function TempLayout({ children }) {
  return (
    <main className="relative bg-[#3B2273] px-[180px] h-[900px] flex items-center justify-center gap-[35px]">
      <section className="z-20">{children}</section>
      <Waves />
    </main>
  );
}
