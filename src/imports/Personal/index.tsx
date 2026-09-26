import { useState, useEffect } from "react";
import imgImage5 from "./8f83114889689993ea186891897232348f84a060.png";
import imgImage27 from "./a1e54827478eb34a758cda0499d4d1d0c41bace7.png";
import imgImage26 from "./39e64e37d17b33943cee5c44a09c92734d3523b5.png";
import imgImage31 from "./137ae31b542f57919da247cefab2daadfac3af2c.png";
import imgIPhone16Pro from "./7e7b06545a4c5ea7c0d89b70399fa9042a934272.png";
import imgImage32 from "./667144e376f63b7d8566ab4a13d908a1b55f8a3f.png";
import imgImage33 from "./4bd7e3f33b3d5f42c15d8503ffd96a489653b824.png";
import imgImage28 from "./b879c33508cbe4b3412027fc34fc21f3406bc446.png";

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
    <div className="content-stretch flex h-[78px] items-center justify-between px-[20px] lg:px-[40px] py-[20px] lg:py-[24px] relative shrink-0 w-full" data-name="Header">
      <Frame1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="w-full sm:w-[calc(50%-8px)] lg:w-auto min-h-[150px] lg:min-h-0 lg:col-[2/span_3] content-stretch flex flex-col items-center justify-center justify-self-stretch relative lg:row-3 self-stretch shrink-0" data-name="Container">
      <p className="[word-break:break-word] font-['Host_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#222] text-[28px] md:text-[36px] lg:text-[40px] tracking-[-2.08px] uppercase whitespace-nowrap text-center">Personal Coffee Roastery</p>
    </div>
  );
}

function LinkMetaMaskRewards() {
  return (
    <div className="w-full sm:w-[calc(50%-8px)] lg:w-[258px] min-h-[250px] lg:min-h-0 lg:col-4 justify-self-start mix-blend-difference overflow-clip relative lg:row-[1/span_2] self-stretch shrink-0" data-name="Link - MetaMask Rewards">
      <div className="absolute inset-0 lg:inset-auto w-full h-full lg:h-[367px] lg:left-[-44.53px] lg:top-0 lg:w-[368px]" data-name="image 5">
        <img alt="" className="absolute inset-0 w-full h-full object-cover lg:max-w-none pointer-events-none lg:size-full" src={imgImage5} />
      </div>
    </div>
  );
}

function ContainerTranslate() {
  return <div className="w-full h-full lg:h-[158.391px] relative shrink-0 lg:w-[262.844px]" data-name="Container:translate" />;
}

function Container4() {
  return (
    <div className="absolute inset-0 lg:inset-auto w-full h-full lg:h-[156.391px] items-start lg:left-[-1px] lg:top-[-1px] lg:w-[260.844px]" data-name="Container">
      <ContainerTranslate />
    </div>
  );
}

function Container3() {
  return (
    <div className="w-full sm:w-[calc(50%-8px)] lg:w-[259px] min-h-[240px] lg:min-h-0 lg:col-1 lg:h-[240px] overflow-clip relative lg:row-2 self-end shrink-0" data-name="Container">
      <Container4 />
      <div className="absolute inset-0 lg:inset-auto w-full h-full translate-x-0 lg:-translate-x-1/2 lg:h-[299px] lg:left-[calc(50%-0.34px)] lg:top-[0.22px] lg:w-[260px]" data-name="image 27">
        <img alt="" className="absolute inset-0 w-full h-full object-cover lg:max-w-none pointer-events-none lg:size-full" src={imgImage27} />
      </div>
    </div>
  );
}

function ContainerTranslate1() {
  return <div className="w-full h-full lg:h-[158.391px] relative shrink-0 lg:w-[262.844px]" data-name="Container:translate" />;
}

function Container6() {
  return (
    <div className="absolute inset-0 lg:inset-auto w-full h-full lg:h-[156.391px] items-start lg:left-[-1px] lg:top-[-1px] lg:w-[260.844px]" data-name="Container">
      <ContainerTranslate1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="w-full sm:w-[calc(50%-8px)] lg:w-[259px] min-h-[240px] lg:min-h-0 lg:col-2 lg:h-[240px] overflow-clip relative lg:row-1 shrink-0" data-name="Container">
      <Container6 />
      <div className="absolute inset-0 lg:inset-auto w-full h-full lg:h-[299px] lg:left-[-1px] lg:top-[-14.17px] lg:w-[260px]" data-name="image 26">
        <img alt="" className="absolute inset-0 w-full h-full object-cover lg:max-w-none pointer-events-none lg:size-full" src={imgImage26} />
      </div>
    </div>
  );
}

function LinkPatrickMahomes() {
  return (
    <div className="w-full sm:w-[calc(50%-8px)] lg:w-auto min-h-[200px] lg:min-h-0 lg:col-5 justify-self-stretch overflow-clip relative lg:row-2 self-stretch shrink-0" data-name="Link - Patrick Mahomes">
      <div className="absolute inset-0 lg:inset-auto w-full h-full translate-x-0 translate-y-0 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:h-[157px] lg:left-[calc(50%-0.42px)] lg:top-[calc(50%+0.13px)] lg:w-[264px]" data-name="image 31">
        <img alt="" className="absolute inset-0 w-full h-full object-cover lg:max-w-none pointer-events-none lg:size-full" src={imgImage31} />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="w-full sm:w-[calc(50%-8px)] lg:w-[259px] min-h-[240px] lg:min-h-0 lg:col-4 lg:h-[240px] overflow-clip relative lg:row-4 self-start shrink-0" data-name="Container">
      <div className="absolute inset-0 lg:inset-auto w-full h-full translate-x-0 lg:-translate-x-1/2 lg:bottom-[-19.83px] lg:h-[260px] lg:left-[calc(50%-0.53px)] lg:w-[347px]" data-name="iPhone 16 Pro">
        <img alt="" className="absolute inset-0 w-full h-full object-cover lg:max-w-none pointer-events-none lg:size-full" src={imgIPhone16Pro} />
      </div>
    </div>
  );
}

function LinkTelemetric() {
  return (
    <div className="w-full sm:w-[calc(50%-8px)] lg:w-[259px] min-h-[250px] lg:min-h-0 lg:col-2 justify-self-start overflow-clip relative lg:row-[4/span_2] self-stretch shrink-0" data-name="Link - Telemetric">
      <div className="absolute inset-0 lg:inset-auto w-full h-full lg:h-[321px] lg:left-[-0.38px] lg:top-[-0.39px] lg:w-[259px]" data-name="image 32">
        <img alt="" className="absolute inset-0 w-full h-full object-cover lg:max-w-none pointer-events-none lg:size-full" src={imgImage32} />
      </div>
    </div>
  );
}

function LinkLegend() {
  return (
    <div className="bg-[#171717] w-full sm:w-[calc(50%-8px)] lg:w-[258.844px] min-h-[160px] lg:min-h-0 lg:col-1 justify-self-start overflow-clip relative lg:row-4 self-stretch shrink-0" data-name="Link - Legend">
      <div className="absolute inset-0 lg:inset-auto w-full h-full lg:h-[124px] lg:left-[10.63px] lg:top-[14.83px] lg:w-[238px]" data-name="image 33">
        <img alt="" className="absolute inset-0 w-full h-full object-cover lg:max-w-none pointer-events-none lg:size-full" src={imgImage33} />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="w-full sm:w-[calc(50%-8px)] lg:w-[258.844px] min-h-[180px] lg:min-h-0 lg:col-5 lg:h-[154.391px] overflow-clip relative lg:row-4 shrink-0" data-name="Container">
      <div className="absolute inset-0 lg:inset-auto w-full h-full lg:h-[446px] lg:left-[-155.53px] lg:top-[-154.17px] lg:w-[569px]" data-name="image 28">
        <img alt="" className="absolute inset-0 w-full h-full object-cover lg:max-w-none pointer-events-none lg:size-full" src={imgImage28} />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap lg:grid gap-4 lg:gap-x-[12px] lg:gap-y-[12px] lg:grid-cols-[_____258.84px_258.84px_258.84px_258.84px_258.84px] lg:grid-rows-[_____154.39px_154.39px_154.39px_154.39px_154.39px] p-[20px] lg:p-[40px] relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <LinkMetaMaskRewards />
      <Container3 />
      <Container5 />
      <LinkPatrickMahomes />
      <Container7 />
      <LinkTelemetric />
      <LinkLegend />
      <Container8 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="Container">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#171717] text-[10px] md:text-[12px] tracking-[1.4px] uppercase whitespace-nowrap">©O_STudiio 2026</p>
    </div>
  );
}

function Text() {
  return <div className="bg-black relative rounded-[33554400px] shrink-0 size-[4px]" data-name="Text" />;
}

function Container12() {
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

function Container10() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] md:gap-[16px] items-center relative size-full">
        <Container11 />
        <Text />
        <Container12 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex h-auto md:h-[55px] items-center justify-center px-[20px] lg:px-[40px] py-[16px] relative shrink-0 w-full" data-name="Container">
      <Container10 />
    </div>
  );
}

export default function Personal() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative size-full overflow-x-hidden" data-name="personal">
      <Header />
      <Container1 />
      <Container9 />
    </div>
  );
}