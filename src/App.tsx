import { useState, useEffect } from "react"
import adeImg from "@/imports/ade.png"
import instaGridImg from "@/imports/insta_grid.png"
import ade1Img from "@/imports/ade-1.png"
import cupLatteImg from "@/imports/cup_latte.png"
import logoImg from "@/imports/image_1__1_.png"

function PhotoPlaceholder({ name, className = "" }: { name: string; className?: string }) {
  return (
    <div className={`bg-surface-high flex items-center justify-center border border-outline-var ${className}`}>
      <span className="text-outline text-xs md:text-sm font-medium px-4 text-center">{name}</span>
    </div>
  )
}

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "브랜드 소개", href: "#brand" },
    { label: "메뉴", href: "#menu" },
    { label: "오시는 길", href: "#info" },
  ]

  return (
    <div className="bg-surface text-on-surface min-h-full">

      {/* ─── 1. Header ─────────────────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-surface-low transition-all duration-300 ${
          scrolled ? "border-b border-outline-var" : "border-b border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" aria-label="귤하다 홈">
            <img src={logoImg} alt="귤하다 로고" className="h-10 w-auto" />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-outline hover:text-on-surface transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#info"
              className="hidden sm:inline-block bg-primary-cta text-on-primary text-sm px-5 py-2.5 font-bold rounded-full hover:opacity-90 transition-opacity duration-200"
            >
              매장 위치 확인하기
            </a>
            <button
              className="md:hidden flex flex-col gap-1.5 p-1"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="메뉴 열기"
            >
              <span className={`block w-6 h-0.5 bg-on-surface transition-transform duration-200 origin-center ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block w-6 h-0.5 bg-on-surface transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-0.5 bg-on-surface transition-transform duration-200 origin-center ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-surface-mid border-t border-outline-var px-6 py-5 flex flex-col gap-5">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-base text-on-surface-var"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#info"
              className="bg-primary-cta text-on-primary text-sm px-5 py-3 font-bold rounded-full text-center hover:opacity-90 transition-opacity duration-200"
              onClick={() => setMenuOpen(false)}
            >
              매장 위치 확인하기
            </a>
          </div>
        )}
      </header>

      {/* ─── 2. Hero ────────────────────────────────────────────── */}
      <section className="pt-28 md:pt-36 pb-20 md:pb-28 bg-surface">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_1fr] gap-12 md:gap-16 lg:gap-24 items-center">
            <div>
              <h1 className="text-[2.6rem] md:text-5xl lg:text-[3.5rem] font-bold leading-[1.2] tracking-tight text-on-surface mb-8">
                자연과 비움의디저트, 귤하다입니다.
              </h1>
              <p className="text-base md:text-lg text-on-surface-var leading-[1.85] mb-5">
                제주 카페 '귤하다'는 감귤 본연의 싱그러운 산미를 억지로 지우지 않는
                건강하고 균형 잡힌 디저트를 만듭니다. 맛있겠죠?
              </p>
              <p className="text-base md:text-lg text-on-surface-var leading-[1.85] mb-12">
                자극적인 단맛을 덜어내고 맑은 자연광 속에서 온전히 쉴 수 있는{" "}
                <strong className="text-primary font-semibold">'조용한 30분의 쉼'</strong>
                을 선물합니다. 어서오세요.
              </p>
              <a
                href="#info"
                className="inline-block bg-primary-cta text-on-primary text-sm px-8 py-3.5 font-bold rounded-full hover:opacity-90 transition-opacity duration-200"
              >
                매장 위치 확인하기
              </a>
            </div>
            <div>
              <img
                src={adeImg}
                alt="맑은 자연광 아래 놓인 감귤 에이드"
                className="w-full aspect-[4/5] object-cover rounded-xl bg-surface-high"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. Brand Story ─────────────────────────────────────── */}
      <section id="brand" className="py-20 md:py-28 bg-surface-low">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_1fr] gap-12 md:gap-16 lg:gap-24 items-center">
            <div className="order-2 md:order-1">
              <img
                src={instaGridImg}
                alt="귤하다 브랜드 모음 — 단정한 원목 테이블과 화이트 톤의 매장 내부"
                className="w-full aspect-square object-cover rounded-xl bg-surface-high"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold leading-[1.25] text-on-surface mb-8">
                <span className="block">온전한 쉼이 필요한</span>
                <span className="block">당신에게</span>
              </h2>
              <p className="text-base text-on-surface-var leading-[1.85] mb-6">
                우리는 제주 관광지의 지나치게 달고 무거운 디저트에 피로감을 느끼며,
                편안하고 조용한 휴식을 원하는 20~30대 소규모 여행자들을 위해
                존재합니다.
              </p>
              <p className="text-base text-on-surface-var leading-[1.85]">
                북적이는 인위적인 포토존 대신, 차분한 여백 속에서 나만의 온전한
                시간을 보내고 싶은 분들의 다정한 안식처가 되어 드립니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. Products ────────────────────────────────────────── */}
      <section id="menu" className="py-20 md:py-28 bg-surface">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-14 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold leading-[1.25] text-on-surface mb-6">
              감귤 본연의 맛을 담습니다
            </h2>
            <p className="text-base text-on-surface-var leading-[1.85]">
              껍질까지 모두 식재료로 사용하고 설탕은 최소한으로 줄였습니다.
              감귤 본연의 싱그러운 산미를 억지로 지우지 않는 귤하다의 디저트를
              만나보세요.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-2xl">
            <div className="bg-surface-mid border border-outline-var rounded-lg overflow-hidden" style={{ boxShadow: "0 4px 20px rgba(255, 94, 0, 0.12)" }}>
              <img
                src={ade1Img}
                alt="감귤 에이드 — 얼음과 오렌지 슬라이스, 로즈마리를 올린 감귤 에이드"
                className="w-full aspect-square object-cover"
              />
              <div className="p-4">
                <h3 className="text-base font-bold text-on-surface tracking-tight">감귤 에이드</h3>
              </div>
            </div>
            <div className="bg-surface-mid border border-outline-var rounded-lg overflow-hidden" style={{ boxShadow: "0 4px 20px rgba(255, 94, 0, 0.12)" }}>
              <img
                src={cupLatteImg}
                alt="감귤 라떼 — 귤하다 브랜드 종이컵에 담긴 감귤 라떼, 위에 건조 오렌지와 생크림 토핑"
                className="w-full aspect-square object-cover"
              />
              <div className="p-4">
                <h3 className="text-base font-bold text-on-surface tracking-tight">감귤 라떼</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. Info ────────────────────────────────────────────── */}
      <section id="info" className="py-20 md:py-28 bg-surface-low">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold leading-[1.25] text-on-surface mb-14 md:mb-16">
            <span className="block">귤하다에서 조용한 30분의</span>
            <span className="block">쉼을 만나보세요</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
            <div>
              <dl className="mb-10">
                {[
                  { label: "매장명", value: "귤하다" },
                  { label: "주소", value: "제주 제주시 애월읍" },
                  { label: "영업시간", value: "화~일 오전 10시~오후 5시" },
                  { label: "휴무", value: "매주 월요일" },
                  { label: "연락처", value: "010-0000-0000" },
                  { label: "주차", value: "인근 골목 주차 가능" },
                  { label: "지도/길찾기", value: "[ ]", muted: true },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-6 py-4 border-b border-outline-var last:border-0"
                  >
                    <dt className="text-sm text-outline w-24 shrink-0 leading-relaxed">
                      {item.label}
                    </dt>
                    <dd className={`text-sm leading-relaxed ${item.muted ? "text-outline" : "text-on-surface"}`}>
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <a
                href="#"
                className="inline-block bg-primary-cta text-on-primary text-sm px-8 py-3.5 font-bold rounded-full hover:opacity-90 transition-opacity duration-200"
              >
                매장 위치 확인하기
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <PhotoPlaceholder name="매장 외관" className="w-full aspect-[4/3] rounded-lg" />
              <PhotoPlaceholder name="지도/위치 이미지" className="w-full aspect-[4/3] rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. Footer ──────────────────────────────────────────── */}
      <footer className="py-16 md:py-20 bg-surface-base border-t border-outline-var">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-2xl md:text-3xl font-bold tracking-widest text-on-surface mb-4 uppercase">
              Sweet Day, Sweet Orange.
            </p>
            <p className="text-base text-on-surface-var">
              달콤한 하루, 싱그러운 감귤의 여운을 선물합니다.
            </p>
          </div>
          <div className="border-t border-outline-var pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <img src={logoImg} alt="귤하다" className="h-8 w-auto" />
            <p className="text-sm text-outline">
              귤하다 &middot; 제주 제주시 애월읍 &middot; 010-0000-0000
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
