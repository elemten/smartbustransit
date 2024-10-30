import Banner from "@/components/Banner";
import CurrentAuctions from "@/components/CurrentAuctions";

export default function Home() {
  return (
   <div className=" flex flex-col items-center justify-center w-full align-middle mt-10">
        <Banner/>
        <CurrentAuctions/>
   </div>
  );
}