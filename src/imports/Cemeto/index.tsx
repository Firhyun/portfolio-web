import { useState, useEffect } from "react";
import imgBillboards from "./0df58f1ac070310dbc566768dffb1a674a7263c8.png";
import imgGeminiGeneratedImage5Bi2665Bi2665Bi23 from "./7ceafdb213e566cb0a259e72dbc5fe78c986dd50.png";
import imgImage51 from "./f2777eb0ef37246abac17c83bd51ee343e5ad6ab.png";
import imgImage50 from "./76f637c5534c3fd95bb647366ef86a3acaab9c60.png";
import imgImage45 from "./c09854973946850d227766ea843d50b680f55251.png";
import imgImage49 from "./a1c5cb0e8b4a2ae0cd7d9930b953e703af0353d0.png";
import imgLightboxSign from "./8e7463bd745dd44149ddf22dc612ca857ede67f4.png";

function Container() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[30px] not-italic relative shrink-0 text-[#fff] text-[18px] md:text-[20px] tracking-[3px] uppercase whitespace-nowrap">O_Studiio_GD</p>
    </div>
  );
}

function Button() {
  return (
    <a className="content-stretch cursor-pointer flex h-[25px] items-center pb-[5px] relative shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-b border-white border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#fff] text-[12px] md:text-[14px] text-center tracking-[2.1px] uppercase whitespace-nowrap">+ Home</p>
    </a>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex h-[25px] items-center pb-[4px] relative shrink-0 w-auto md:w-[89.203px]" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#fff] text-[12px] md:text-[14px] text-center tracking-[2.1px] uppercase whitespace-nowrap">+ Profile</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[12px] md:gap-[16px] items-center justify-end relative shrink-0">
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
    <div className="bg-white content-stretch flex h-[78px] items-center justify-between px-[20px] lg:px-[40px] py-[20px] lg:py-[24px] relative shrink-0 w-full" data-name="Header">
      <Frame1 />
    </div>
  );
}

function LinkRepublicNote() {
  return <div className="hidden lg:block lg:col-3 justify-self-start relative lg:row-5 self-stretch shrink-0 lg:w-[258.844px]" data-name="Link - Republic Note" />;
}

function ContainerTranslate() {
  return <div className="w-full h-full lg:h-[158.391px] relative shrink-0 lg:w-[262.844px]" data-name="Container:translate" />;
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 lg:inset-auto w-full h-full lg:h-[156.391px] items-start lg:left-[-1px] lg:top-[-1px] lg:w-[260.844px]" data-name="Container">
      <ContainerTranslate />
    </div>
  );
}

function Container2() {
  return (
    <div className="w-full sm:w-[calc(50%-8px)] lg:w-[258.844px] min-h-[200px] lg:min-h-0 lg:col-2 lg:h-[154.391px] mix-blend-difference overflow-clip relative lg:row-2 shrink-0" data-name="Container">
      <Container3 />
      <div className="absolute inset-0 lg:inset-auto w-full h-full lg:h-[161px] lg:left-[-14.84px] lg:top-[-3.39px] lg:w-[288px]" data-name="Billboards">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute inset-0 w-full h-full object-cover lg:h-[133.41%] lg:left-0 lg:max-w-none lg:top-[-8.19%] lg:w-full" src={imgBillboards} />
        </div>
      </div>
    </div>
  );
}

function LinkPatrickMahomes() {
  return (
    <div className="w-full sm:w-[calc(50%-8px)] lg:w-auto min-h-[300px] lg:min-h-0 lg:col-2 justify-self-stretch overflow-clip relative lg:row-[4/span_2] self-stretch shrink-0" data-name="Link - Patrick Mahomes">
      <div className="absolute inset-0 lg:inset-auto w-full h-full translate-x-0 translate-y-0 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:h-[436px] lg:left-[calc(50%-10.27px)] lg:top-[calc(50%+33.44px)] lg:w-[280px]" data-name="Gemini_Generated_Image_5bi2665bi2665bi2 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute inset-0 w-full h-full object-cover lg:h-full lg:left-[0.02%] lg:max-w-none lg:top-0 lg:w-[102.98%]" src={imgGeminiGeneratedImage5Bi2665Bi2665Bi23} />
        </div>
      </div>
    </div>
  );
}

function LinkTelemetric() {
  return (
    <div className="w-full sm:w-[calc(50%-8px)] lg:w-[259px] min-h-[240px] lg:min-h-0 lg:col-1 lg:h-[240px] justify-self-start overflow-clip relative lg:row-4 self-end shrink-0" data-name="Link - Telemetric">
      <div className="absolute inset-0 lg:inset-auto w-full h-full lg:h-[269px] lg:left-0 lg:top-[-22.56px] lg:w-[259px]" data-name="image 51">
        <img alt="" className="absolute inset-0 w-full h-full object-cover lg:max-w-none pointer-events-none lg:size-full" src={imgImage51} />
      </div>
    </div>
  );
}

function LinkMetaMaskRewards() {
  return (
    <div className="w-full sm:w-[calc(50%-8px)] lg:w-[258px] min-h-[300px] lg:min-h-0 lg:col-5 justify-self-start overflow-clip relative lg:row-[1/span_3] self-stretch shrink-0" data-name="Link - MetaMask Rewards">
      <div className="absolute inset-0 lg:inset-auto w-full h-full translate-x-0 lg:-translate-x-1/2 lg:bottom-[0.17px] lg:h-[496px] lg:left-[calc(50%-0.38px)] lg:w-[258px]" data-name="image 50">
        <img alt="" className="absolute inset-0 w-full h-full object-cover lg:max-w-none pointer-events-none lg:size-full" src={imgImage50} />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="w-full sm:w-[calc(50%-8px)] lg:w-[259px] min-h-[240px] lg:min-h-0 lg:col-4 lg:h-[240px] overflow-clip relative lg:row-5 self-end shrink-0" data-name="Container">
      <div className="absolute inset-0 lg:inset-auto w-full h-full translate-x-0 lg:-translate-x-1/2 lg:h-[264px] lg:left-[calc(50%+0.47px)] lg:top-[-11.96px] lg:w-[259px]" data-name="image 45">
        <img alt="" className="absolute inset-0 w-full h-full object-cover lg:max-w-none pointer-events-none lg:size-full" src={imgImage45} />
      </div>
    </div>
  );
}

function LinkTelemetric1() {
  return (
    <div className="w-full sm:w-[calc(50%-8px)] lg:w-[258.844px] min-h-[200px] lg:min-h-0 lg:col-5 justify-self-start overflow-clip relative lg:row-5 self-stretch shrink-0" data-name="Link - Telemetric">
      <div className="absolute inset-0 lg:inset-auto w-full h-full translate-x-0 translate-y-0 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:h-[153px] lg:left-[calc(50%-0.3px)] lg:top-[calc(50%-0.26px)] lg:w-[261px]" data-name="image 49">
        <img alt="" className="absolute inset-0 w-full h-full object-cover lg:max-w-none pointer-events-none lg:size-full" src={imgImage49} />
      </div>
    </div>
  );
}

function LinkLegend() {
  return (
    <div className="w-full sm:w-[calc(50%-8px)] lg:w-[258.844px] min-h-[200px] lg:min-h-0 lg:col-1 justify-self-start overflow-clip relative lg:row-1 self-stretch shrink-0" data-name="Link - Legend">
      <div className="absolute inset-0 lg:inset-auto w-full h-full translate-x-0 translate-y-0 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:h-[160px] lg:left-[calc(50%-0.42px)] lg:top-[calc(50%-0.2px)] lg:w-[262px]" data-name="Lightbox Sign">
        <img alt="" className="absolute inset-0 w-full h-full object-cover lg:max-w-none pointer-events-none lg:size-full" src={imgLightboxSign} />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="w-full sm:w-[calc(50%-8px)] lg:w-auto min-h-[150px] lg:min-h-0 lg:col-3 content-stretch flex flex-col items-center justify-center justify-self-stretch relative lg:row-3 self-stretch shrink-0" data-name="Container">
      <p className="[word-break:break-word] font-['Host_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#222] text-[32px] md:text-[40px] tracking-[-2.08px] uppercase whitespace-nowrap">CEMETO</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap lg:grid gap-4 lg:gap-x-[12px] lg:gap-y-[12px] lg:grid-cols-[_____258.84px_258.84px_258.84px_258.84px_258.84px] lg:grid-rows-[_____154.39px_154.39px_154.39px_154.39px_154.39px] p-[20px] lg:p-[40px] relative shrink-0 w-full" data-name="Container">
      <LinkRepublicNote />
      <Container2 />
      <LinkPatrickMahomes />
      <LinkTelemetric />
      <LinkMetaMaskRewards />
      <Container4 />
      <LinkTelemetric1 />
      <LinkLegend />
      <Container5 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="Container">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#171717] text-[10px] md:text-[12px] tracking-[1.4px] uppercase whitespace-nowrap">©O_STudiio 2026</p>
    </div>
  );
}

function Text() {
  return <div className="bg-black relative rounded-[33554400px] shrink-0 size-[4px]" data-name="Text" />;
}

function Container9() {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const time = new Date().toLocaleTimeString(undefined, {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      setLocalTime(time);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="Container">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#171717] text-[10px] md:text-[12px] tracking-[1.4px] uppercase whitespace-nowrap">
        Local time {localTime || "12:00 PM"}
      </p>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] md:gap-[16px] items-center relative size-full">
        <Container8 />
        <Text />
        <Container9 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex h-auto md:h-[55px] items-center justify-center px-[20px] lg:px-[40px] py-[16px] relative shrink-0 w-full" data-name="Container">
      <Container7 />
    </div>
  );
}

export default function Cemeto() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative size-full overflow-x-hidden" data-name="cemeto">
      <Header />
      <Container1 />
      <Container6 />
    </div>
  );
}