import svgPaths from "./svg-6m5wqr0aq1";
import { useEffect, useState } from "react";

function Container() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[30px] not-italic relative shrink-0 text-[#171717] text-[20px] tracking-[3px] uppercase whitespace-nowrap">O_Studiio_GD</p>
    </div>
  );
}

function Button() {
  return (
    <a
      href="/"
      className="group content-stretch cursor-pointer flex h-[25px] items-center pb-[4px] relative shrink-0 transition-transform duration-200 hover:-translate-y-[1.5px]"
      data-name="Button"
    >
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px] text-center tracking-[2.1px] uppercase whitespace-nowrap">
        <span className="group-hover:hidden">+ Home</span>
        <span className="hidden group-hover:inline">− Home</span>
      </p>

      <span
        className="
          absolute bottom-0 left-0
          h-px w-0 bg-[#171717]
          transition-all duration-200
          group-hover:w-full
        "
      />
    </a>
  );
}

function Button1() {
  return (
    <a
      href="/profile"
      className="content-stretch cursor-pointer flex h-[25px] items-center pb-[5px] relative shrink-0 w-[89.203px]"
      data-name="Button"
    >
      <div
        aria-hidden
        className="absolute border-b border-black border-solid inset-0 pointer-events-none"
      />

      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#171717] text-[14px] text-center tracking-[2.1px] uppercase whitespace-nowrap">
        + Profile
      </p>
    </a>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0">
      <Button />
      <Button1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative w-full">
      <div className="flex items-center justify-between w-full">
        <Container />
        <Frame2 />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div
      className="
        flex h-[78px] items-center
        w-full
        px-[20px] md:px-[40px] py-[24px]
        relative shrink-0
      "
      data-name="Header"
    >
      <Frame3 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Host_Grotesk:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#737373] text-[0px] w-full max-w-[424px] whitespace-pre-wrap">
        <span className="leading-[24px] text-[16px]">{`I’m `}</span>
        <span className="leading-[24px] text-[#171717] text-[32px] md:text-[40px]">Firda</span>
        <span className="leading-[24px] text-[16px]">{`, a graphic designer. To  me, graphic design is a magical and fascinating world where each individual embarks on a unique journey of exploration.`}</span>
      </p>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="[word-break:break-word] absolute font-['Host_Grotesk:Bold',sans-serif] font-bold leading-[32px] left-0 text-[#171717] text-[24px] top-[-1px] tracking-[0.48px] uppercase whitespace-nowrap">GrAphic designer</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Host_Grotesk:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#737373] text-[14px] top-0 whitespace-nowrap">Cemeto</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[56px] relative shrink-0 w-full md:w-[298.313px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[16px] relative shrink-0 w-[115.609px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Menlo:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#171717] text-[12px] top-0 whitespace-nowrap">[Feb-mar 2026]</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col md:flex-row gap-4 md:gap-0 h-auto md:h-[56px] items-start md:items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Text />
    </div>
  );
}

function Frame() {
  return (
    <div className="flex-[1_0_0] md:h-[360px] w-full md:min-w-px relative">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-between px-[20px] md:pl-[40px] md:pr-[104px] py-[30px] md:py-[40px] relative size-full gap-8 md:gap-0">
          <Paragraph />
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="h-[100.319px] relative shrink-0 w-[240px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="100.319" preserveAspectRatio="none" viewBox="0 0 240 100.319" width="240">
        <g id="Group 1">
          <path d={svgPaths.p216d4080} fill="#CACACA" fillOpacity="0.2" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="h-full relative shrink-0 w-full md:w-[602px]" data-name="Container">
        <div className="flex flex-col items-center md:items-end overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-center md:items-end p-[20px] md:p-[40px] relative size-full">
            <Group />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col md:flex-row items-center relative shrink-0 w-full">
      <Frame />
      <Container4 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start px-[20px] md:px-[40px] py-[20px] md:py-[40px] relative shrink-0 w-full" data-name="Container">
      <Frame1 />
    </div>
  );
}

function Container7() {
  return (
    <div className="relative md:h-[187.188px] shrink-0 w-full md:w-[620.938px]" data-name="Container">
      <div className="[word-break:break-word] md:absolute font-['Host_Grotesk:Medium',sans-serif] font-medium leading-[0] left-0 text-[#171717] text-[48px] md:text-[104px] md:top-[-1px] tracking-[-2.08px] uppercase">
        <p className="mb-0">
          <span className="leading-[1.1] md:leading-[93.6px] text-[#b7bbbd]">{`Let's`}</span>
          <span className="leading-[1.1] md:leading-[93.6px]">{` work`}</span>
        </p>
        <p className="leading-[1.1] md:leading-[93.6px] text-[#b7bbbd]">together.</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div
      className="
        hidden md:block h-[36px] relative shrink-0 w-[302.016px]
        transition-transform duration-300
        ease-[cubic-bezier(0.22,1,0.36,1)]
        group-hover:translate-x-[24px]
      "
      data-name="Text"
    >
      <p className="[word-break:break-word] absolute font-['Host_Grotesk:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#171717] text-[24px] top-[-1px] tracking-[0.48px] uppercase whitespace-nowrap">
        Unlock my potential
      </p>
    </div>
  );
}

function Text2() {
  return (
    <div
      className="absolute h-[36px] left-[4.3px] top-[-2px] w-[23.391px]
                 transition-transform duration-300 ease-out
                 group-hover:-translate-y-[36px]"
      data-name="Text"
    >
      <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[36px] left-0 not-italic text-[#171717] text-[24px] top-[-1px] tracking-[0.48px] uppercase whitespace-nowrap">
        ↗
      </p>
    </div>
  );
}

function Text3() {
  return (
    <div
      className="absolute h-[36px] left-[-18.9px] top-[34px] w-[23px]
                 transition-transform duration-300 ease-out
                 group-hover:-translate-y-[36px]"
      data-name="Text"
    >
      <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[36px] left-[-0.2px] not-italic text-[#171717] text-[24px] top-[-1px] tracking-[0.48px] uppercase whitespace-nowrap">
        ↗
      </p>
    </div>
  );
}

function Container8() {
  return (
    <div
      className="
        overflow-clip relative shrink-0 size-[32px]
        transition-all duration-300
        ease-[cubic-bezier(0.22,1,0.36,1)]
        md:group-hover:opacity-0
        md:group-hover:translate-x-[8px]
      "
      data-name="Container"
    >
      <Text2 />
      <Text3 />
    </div>
  );
}

function Link() {
  return (
    <a
      href="mailto:ofifah13@gmail.com"
      className="
        group relative rounded-[33554400px] shrink-0 block cursor-pointer
        transition-transform duration-300
        ease-[cubic-bezier(0.22,1,0.36,1)]
        hover:-translate-y-[3px]
      "
      data-name="Link"
    >
      {/* Padding diubah: p-[20px] untuk mobile (lingkaran), px/py menyesuaikan desktop */}
      <div className="content-stretch flex md:gap-[16px] items-center justify-center overflow-clip p-[20px] md:px-[32px] md:py-[24px] relative rounded-[inherit] size-full">
        <Text1 />
        <Container8 />
      </div>

      <div
        aria-hidden
        className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[33554400px]"
      />
    </a>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-end justify-between px-[20px] md:px-[40px] py-[40px] md:py-[80px] relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Link />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start p-[0px] md:p-[40px] relative shrink-0 w-full" data-name="Container">
      <Container6 />
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[21px] overflow-clip relative shrink-0 w-[76.109px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[#171717] text-[14px] top-0 tracking-[1.4px] uppercase whitespace-nowrap">LinkedIn</p>
    </div>
  );
}

function Link1() {
  return (
    <a
      href="https://www.linkedin.com/in/firda-aribatul-khofifah"
      target="_blank"
      rel="noopener noreferrer"
      className="content-stretch flex items-start px-[4px] md:px-[8px] relative shrink-0 cursor-pointer"
      data-name="Link"
    >
      <Container11 />
    </a>
  );
}

function Container12() {
  return (
    <div className="h-[21px] overflow-clip relative shrink-0 w-[75.953px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[#171717] text-[14px] top-0 tracking-[1.4px] uppercase whitespace-nowrap">Threads</p>
    </div>
  );
}

function Link2() {
  return (
    <a
      href="https://www.threads.net/@firda.a.kh"
      target="_blank"
      rel="noopener noreferrer"
      className="content-stretch flex items-start px-[4px] md:px-[8px] relative shrink-0 cursor-pointer"
      data-name="Link"
    >
      <Container12 />
    </a>
  );
}

function Container13() {
  return (
    <div className="h-[21px] overflow-clip relative shrink-0 w-[95.563px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[#171717] text-[14px] top-0 tracking-[1.4px] uppercase whitespace-nowrap">Instagram</p>
    </div>
  );
}

function Link3() {
  return (
    <a
      href="https://www.instagram.com/o_studiio"
      target="_blank"
      rel="noopener noreferrer"
      className="content-stretch flex items-start px-[4px] md:px-[8px] relative shrink-0 cursor-pointer"
      data-name="Link"
    >
      <Container13 />
    </a>
  );
}

function Container14() {
  return (
    <div className="h-[21px] overflow-clip relative shrink-0 w-[78.141px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[#171717] text-[14px] top-0 tracking-[1.4px] uppercase whitespace-nowrap">Dribbble</p>
    </div>
  );
}

function Link4() {
  return (
    <a
      href="https://dribbble.com/Ofifah_Production"
      target="_blank"
      rel="noopener noreferrer"
      className="content-stretch flex items-start px-[4px] md:px-[8px] relative shrink-0 cursor-pointer"
      data-name="Link"
    >
      <Container14 />
    </a>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-wrap gap-[16px] md:gap-[40px] items-center relative size-full">
        <Link1 />
        <Link2 />
        <Link3 />
        <Link4 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="Container">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#171717] text-[12px] tracking-[1.4px] uppercase whitespace-nowrap">©O_STudiio 2026</p>
    </div>
  );
}

function Text4() {
  return <div className="bg-black relative rounded-[33554400px] shrink-0 size-[4px]" data-name="Text" />;
}

function Container17() {
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
    <div
      className="content-stretch flex items-center justify-center overflow-clip relative shrink-0"
      data-name="Container"
    >
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#171717] text-[12px] tracking-[1.4px] uppercase whitespace-nowrap">
        Local time {localTime}
      </p>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Container16 />
        <Text4 />
        <Container17 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col md:flex-row gap-4 md:gap-0 items-start md:items-center justify-between px-[20px] md:px-[40px] py-[16px] relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Container15 />
    </div>
  );
}

export default function Profile() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative w-full min-h-screen overflow-x-hidden" data-name="profile">
      <Header />
      <Container1 />
      <Container5 />
      <Container9 />
    </div>
  );
}