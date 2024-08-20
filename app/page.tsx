import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <h1 className="font-bold text-teal-500 text-2xl">
      <Hero />
      <Camp />
      <Guide />
      <Features />
      <GetApp />
    </h1>
  )
}