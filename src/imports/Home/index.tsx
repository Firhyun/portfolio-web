import imgContainer from "@/imports/mom.png";
import imgImage3 from "./c999e8e152b9557dd9bf3398b7a773c366cab7ce.png";
import imgImage5 from "./8f83114889689993ea186891897232348f84a060.png";
import imgBillboards from "./0df58f1ac070310dbc566768dffb1a674a7263c8.png";
import imgDreamina202602241511ReferenceImage1EnhanceToUltraReal3 from "@/imports/sae.png";
import imgContainer1 from "./5670410287bfb8d897bb08403ecffdc28f26b329.png";
import imgImage7 from "./2b57d431bdf66d4d94fcd5c882528050506740e6.png";

function Container() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[30px] not-italic relative shrink-0 text-[#171717] text-[20px] tracking-[3px] uppercase whitespace-nowrap">O_Studiio_GD</p>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex h-[25px] items-center pb-[5px] relative shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-b border-black border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px] text-center tracking-[2.1px] uppercase whitespace-nowrap">+ Home</p>
    </div>
  );
}

function Button1() {
  return (
    <a className="content-stretch cursor-pointer flex h-[25px] items-center pb-[4px] relative shrink-0 w-[89.203px]" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px] text-center tracking-[2.1px] uppercase whitespace-nowrap">+ Profile</p>
    </a>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0">
      <Button />
      <Button1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="flex-[1_0_0] max-w-[1440px] min-w-px relative">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] relative size-full">
        <Container />
        <Frame />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex h-[78px] items-center justify-between px-[40px] py-[24px] relative shrink-0 w-full" data-name="Header">
      <Frame1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[154.391px] left-0 overflow-clip top-0 w-[258.844px]" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer} />
      <div className="absolute h-[201px] left-[-61px] top-[-4.78px] w-[379px]" data-name="image 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
    </div>
  );
}

function LinkLegend() {
  return (
    <div className="col-1 justify-self-start overflow-clip relative row-3 self-stretch shrink-0 w-[258.844px]" data-name="Link - Legend">
      <Container2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="col-[2/span_3] content-stretch flex flex-col items-center justify-center justify-self-stretch relative row-3 self-stretch shrink-0" data-name="Container">
      <p className="[word-break:break-word] font-['Host_Grotesk:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#b7bbbd] text-[40px] tracking-[-2.08px] uppercase whitespace-nowrap">
        <span className="leading-[normal]">{`Inventions `}</span>
        <span className="leading-[normal] text-[#222]">Designed</span>
        <span className="leading-[normal]">{` to Perform`}</span>
      </p>
    </div>
  );
}

function LinkMetaMaskRewards() {
  return (
    <div className="col-4 justify-self-start overflow-clip relative row-[1/span_2] self-stretch shrink-0 w-[258px]" data-name="Link - MetaMask Rewards">
      <div className="absolute h-[367px] left-[-44.53px] top-0 w-[368px]" data-name="image 5">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
      </div>
    </div>
  );
}

function LinkRepublicNote() {
  return <div className="col-1 justify-self-start relative row-5 self-stretch shrink-0 w-[258.844px]" data-name="Link - Republic Note" />;
}

function ContainerTranslate() {
  return <div className="h-[158.391px] relative shrink-0 w-[262.844px]" data-name="Container:translate" />;
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col h-[156.391px] items-start left-[-1px] top-[-1px] w-[260.844px]" data-name="Container">
      <ContainerTranslate />
    </div>
  );
}

function Container4() {
  return (
    <div className="col-2 h-[154.391px] overflow-clip relative row-2 shrink-0 w-[258.844px]" data-name="Container">
      <Container5 />
      <div className="absolute h-[161px] left-[-14.84px] top-[-3.39px] w-[288px]" data-name="Billboards">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[133.41%] left-0 max-w-none top-[-8.19%] w-full" src={imgBillboards} />
        </div>
      </div>
    </div>
  );
}

function LinkPatrickMahomes() {
  return (
    <div className="col-3 justify-self-stretch overflow-clip relative row-[4/span_2] self-stretch shrink-0" data-name="Link - Patrick Mahomes">
      <div className="absolute h-[347px] left-[-138.53px] top-[-26.17px] w-[594px]" data-name="dreamina-2026-02-24-1511-Reference Image 1, enhance to ultra-real... 3">
        <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgDreamina202602241511ReferenceImage1EnhanceToUltraReal3} />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[154.391px] left-0 overflow-clip top-0 w-[258.844px]" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer1} />
      <div className="absolute h-[192px] left-[-5.84px] top-[-18.39px] w-[269px]" data-name="image 7">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage7} />
      </div>
    </div>
  );
}

function LinkTelemetric() {
  return (
    <div className="col-5 justify-self-start overflow-clip relative row-4 self-stretch shrink-0 w-[258.844px]" data-name="Link - Telemetric">
      <Container6 />
    </div>
  );
}

function Container1() {
  return (
    <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[_____258.84px_258.84px_258.84px_258.84px_258.84px] grid-rows-[_____154.39px_154.39px_154.39px_154.39px_154.39px] p-[40px] relative shrink-0 w-full" data-name="Container">
      <LinkLegend />
      <Container3 />
      <LinkMetaMaskRewards />
      <LinkRepublicNote />
      <Container4 />
      <LinkPatrickMahomes />
      <LinkTelemetric />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="Container">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#171717] text-[12px] tracking-[1.4px] uppercase whitespace-nowrap">©O_STudiio 2026</p>
    </div>
  );
}

function Text() {
  return <div className="bg-black relative rounded-[33554400px] shrink-0 size-[4px]" data-name="Text" />;
}

function Container10() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="Container">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#171717] text-[12px] tracking-[1.4px] uppercase whitespace-nowrap">Local time 12:00 PM</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Container9 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex h-[55px] items-center justify-center px-[40px] py-[16px] relative shrink-0 w-full" data-name="Container">
      <Container8 />
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative size-full" data-name="home">
      <Header />
      <Container1 />
      <Container7 />
    </div>
  );
}