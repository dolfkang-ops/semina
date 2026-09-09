// ==========================================================================
//  가평·양평 숲체험 × 캠핑 융합사업 세미나 JavaScript
//  Scroll Spy, Program Matching, Mobile Simulator, Tabs, Form Registration
// ==========================================================================

// --- 1. Offline-Resilient Vector Graphics & Mock Database (From TQ_Project_3) ---
const svgNaturalDye = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" width="100%" height="100%">
  <defs>
    <linearGradient id="dyeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4a3f6b"/>
      <stop offset="100%" stop-color="#8a5a83"/>
    </linearGradient>
  </defs>
  <rect width="400" height="240" fill="url(#dyeGrad)"/>
  <circle cx="120" cy="120" r="70" fill="#f8d7da" opacity="0.25"/>
  <circle cx="280" cy="120" r="85" fill="#d1e7dd" opacity="0.25"/>
  <!-- Dye Fabric Handkerchief -->
  <rect x="130" y="55" width="140" height="130" rx="8" fill="#fff9db" transform="rotate(-6 200 120)" opacity="0.95"/>
  <path d="M150,90 Q 200,60 250,95 Q 230,140 160,150 Z" fill="#d63384" opacity="0.45"/>
  <path d="M170,110 Q 210,130 240,115 Q 220,165 180,155 Z" fill="#0d6efd" opacity="0.4"/>
  <!-- Leaf pattern on fabric -->
  <path d="M200,100 Q 215,85 220,105 Q 205,120 200,100 Z" fill="#198754" opacity="0.7"/>
  <rect x="20" y="20" width="110" height="28" rx="14" fill="rgba(0,0,0,0.35)"/>
  <text x="75" y="39" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">천연염색</text>
</svg>`);

const svgForestCommentary = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" width="100%" height="100%">
  <defs>
    <linearGradient id="commGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#144d32"/>
      <stop offset="100%" stop-color="#2d7a4f"/>
    </linearGradient>
  </defs>
  <rect width="400" height="240" fill="url(#commGrad)"/>
  <circle cx="200" cy="200" r="130" fill="#20c997" opacity="0.25"/>
  <!-- Winding Path & Trees -->
  <path d="M160,240 Q 180,160 240,110 Q 270,80 300,50" fill="none" stroke="#d4a373" stroke-width="26" stroke-linecap="round"/>
  <polygon points="90,70 65,130 115,130" fill="#75b798"/>
  <polygon points="90,105 55,170 125,170" fill="#198754"/>
  <rect x="85" y="170" width="10" height="30" fill="#0b3d20"/>
  <polygon points="310,90 285,150 335,150" fill="#75b798"/>
  <polygon points="310,125 275,185 345,185" fill="#198754"/>
  <rect x="305" y="185" width="10" height="30" fill="#0b3d20"/>
  <!-- Magnifying glass icon -->
  <circle cx="190" cy="95" r="28" fill="rgba(255,255,255,0.2)" stroke="#ffffff" stroke-width="4"/>
  <line x1="210" y1="115" x2="235" y2="140" stroke="#ffffff" stroke-width="6" stroke-linecap="round"/>
  <rect x="20" y="20" width="110" height="28" rx="14" fill="rgba(0,0,0,0.35)"/>
  <text x="75" y="39" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">국가인증 숲해설</text>
</svg>`);

const svgCarbonForest = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" width="100%" height="100%">
  <defs>
    <linearGradient id="carbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0b3d2c"/>
      <stop offset="100%" stop-color="#1f7a5b"/>
    </linearGradient>
  </defs>
  <rect width="400" height="240" fill="url(#carbGrad)"/>
  <circle cx="200" cy="120" r="70" fill="#69db7c" opacity="0.2"/>
  <!-- Eco Leaves and Carbon Absorption Symbol -->
  <path d="M200,60 Q 250,90 240,140 Q 200,180 160,140 Q 150,90 200,60 Z" fill="#20c997" opacity="0.85"/>
  <path d="M200,70 L 200,165 M 200,105 Q 220,95 230,110 M 200,130 Q 180,120 170,135" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
  <circle cx="110" cy="80" r="22" fill="rgba(255,255,255,0.15)"/>
  <text x="110" y="85" fill="#a9e34b" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">CO₂↓</text>
  <circle cx="290" cy="80" r="22" fill="rgba(255,255,255,0.15)"/>
  <text x="290" y="85" fill="#69db7c" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">O₂↑</text>
  <rect x="20" y="20" width="110" height="28" rx="14" fill="rgba(0,0,0,0.35)"/>
  <text x="75" y="39" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">탄소중립 숲</text>
</svg>`);

const svgFootTalkKit = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" width="100%" height="100%">
  <defs>
    <linearGradient id="footGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2b4736"/>
      <stop offset="100%" stop-color="#52796f"/>
    </linearGradient>
  </defs>
  <rect width="400" height="240" fill="url(#footGrad)"/>
  <!-- Spa Bowl & Herbal Steam -->
  <ellipse cx="200" cy="155" rx="110" ry="42" fill="#354f52" stroke="#84a98c" stroke-width="4"/>
  <ellipse cx="200" cy="148" rx="95" ry="32" fill="#2f3e46"/>
  <ellipse cx="200" cy="148" rx="85" ry="26" fill="#52796f" opacity="0.7"/>
  <!-- Pine Needles floating -->
  <line x1="165" y1="145" x2="185" y2="148" stroke="#a7c957" stroke-width="3" stroke-linecap="round"/>
  <line x1="215" y1="144" x2="235" y2="149" stroke="#a7c957" stroke-width="3" stroke-linecap="round"/>
  <!-- Warm Aroma Steam -->
  <path d="M175,125 Q 165,100 175,80" fill="none" stroke="#cad2c5" stroke-width="3" stroke-linecap="round" opacity="0.6"/>
  <path d="M200,120 Q 210,95 200,75" fill="none" stroke="#cad2c5" stroke-width="4" stroke-linecap="round" opacity="0.75"/>
  <path d="M225,125 Q 235,100 225,80" fill="none" stroke="#cad2c5" stroke-width="3" stroke-linecap="round" opacity="0.6"/>
  <rect x="20" y="20" width="110" height="28" rx="14" fill="rgba(0,0,0,0.35)"/>
  <text x="75" y="39" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">족욕 테라피 키트</text>
</svg>`);

const svgEcoAdventure = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" width="100%" height="100%">
  <defs>
    <linearGradient id="ecoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f5132"/>
      <stop offset="100%" stop-color="#2d8659"/>
    </linearGradient>
  </defs>
  <rect width="400" height="240" fill="url(#ecoGrad)"/>
  <circle cx="80" cy="220" r="140" fill="#146c43" opacity="0.4"/>
  <circle cx="320" cy="230" r="150" fill="#198754" opacity="0.3"/>
  <polygon points="120,70 90,140 150,140" fill="#20c997" opacity="0.8"/>
  <polygon points="120,110 80,180 160,180" fill="#198754"/>
  <rect x="114" y="180" width="12" height="30" fill="#0b3d20"/>
  <polygon points="200,50 170,120 230,120" fill="#75b798"/>
  <polygon points="200,90 160,170 240,170" fill="#146c43"/>
  <rect x="194" y="170" width="12" height="35" fill="#0b3d20"/>
  <polygon points="280,80 250,145 310,145" fill="#20c997" opacity="0.9"/>
  <polygon points="280,120 240,185 320,185" fill="#198754"/>
  <rect x="274" y="185" width="12" height="25" fill="#0b3d20"/>
  <rect x="20" y="20" width="110" height="28" rx="14" fill="rgba(0,0,0,0.35)"/>
  <text x="75" y="39" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">가족 숲체험</text>
</svg>`);

const svgRopeAdventure = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" width="100%" height="100%">
  <defs>
    <linearGradient id="ropeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#b84318"/>
      <stop offset="100%" stop-color="#ff7a45"/>
    </linearGradient>
  </defs>
  <rect width="400" height="240" fill="url(#ropeGrad)"/>
  <circle cx="340" cy="60" r="90" fill="#ff9c6e" opacity="0.3"/>
  <rect x="60" y="30" width="28" height="210" rx="4" fill="#612500" opacity="0.85"/>
  <rect x="310" y="30" width="28" height="210" rx="4" fill="#612500" opacity="0.85"/>
  <path d="M74,90 Q 200,140 324,90" fill="none" stroke="#fff" stroke-width="4" stroke-dasharray="6,4"/>
  <path d="M74,130 Q 200,170 324,130" fill="none" stroke="#ffe7ba" stroke-width="5"/>
  <line x1="130" y1="110" x2="130" y2="150" stroke="#fff" stroke-width="2"/>
  <line x1="170" y1="125" x2="170" y2="162" stroke="#fff" stroke-width="2"/>
  <line x1="210" y1="130" x2="210" y2="165" stroke="#fff" stroke-width="2"/>
  <line x1="250" y1="125" x2="250" y2="162" stroke="#fff" stroke-width="2"/>
  <line x1="290" y1="110" x2="290" y2="150" stroke="#fff" stroke-width="2"/>
  <rect x="20" y="20" width="100" height="28" rx="14" fill="rgba(0,0,0,0.35)"/>
  <text x="70" y="39" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">산림레포츠</text>
</svg>`);

const svgFlyingDisc = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" width="100%" height="100%">
  <defs>
    <linearGradient id="discGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#184a78"/>
      <stop offset="100%" stop-color="#3688d8"/>
    </linearGradient>
  </defs>
  <rect width="400" height="240" fill="url(#discGrad)"/>
  <polygon points="0,240 100,110 240,240" fill="#0d2b45" opacity="0.6"/>
  <polygon points="120,240 260,80 400,240" fill="#133d63" opacity="0.7"/>
  <polygon points="200,240 320,130 400,240" fill="#205f96" opacity="0.5"/>
  <path d="M50,180 Q 200,60 330,110" fill="none" stroke="#69c0ff" stroke-width="3" stroke-dasharray="8,6"/>
  <ellipse cx="330" cy="110" rx="36" ry="12" fill="#ffc069" transform="rotate(-15 330 110)"/>
  <ellipse cx="330" cy="110" rx="26" ry="7" fill="#ffa940" transform="rotate(-15 330 110)"/>
  <rect x="20" y="20" width="100" height="28" rx="14" fill="rgba(0,0,0,0.35)"/>
  <text x="70" y="39" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">숲트레킹</text>
</svg>`);

const svgHammockStay = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" width="100%" height="100%">
  <defs>
    <linearGradient id="hammockGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e4d2b"/>
      <stop offset="100%" stop-color="#4e8c56"/>
    </linearGradient>
  </defs>
  <rect width="400" height="240" fill="url(#hammockGrad)"/>
  <rect x="80" y="20" width="24" height="220" rx="4" fill="#3e2723" opacity="0.9"/>
  <rect x="300" y="20" width="24" height="220" rx="4" fill="#3e2723" opacity="0.9"/>
  <path d="M92,100 Q 200,180 312,100" fill="#a7d7c5" stroke="#333" stroke-width="2"/>
  <path d="M92,100 Q 200,165 312,100" fill="#84b6a3"/>
  <circle cx="200" cy="125" r="14" fill="#ffe0b2"/>
  <rect x="20" y="20" width="100" height="28" rx="14" fill="rgba(0,0,0,0.35)"/>
  <text x="70" y="39" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">해먹 치유</text>
</svg>`);

const svgWoodLampKit = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" width="100%" height="100%">
  <defs>
    <linearGradient id="lampGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#241a3a"/>
      <stop offset="100%" stop-color="#4d3568"/>
    </linearGradient>
  </defs>
  <rect width="400" height="240" fill="url(#lampGrad)"/>
  <circle cx="200" cy="125" r="85" fill="#ffe58f" opacity="0.25"/>
  <circle cx="200" cy="125" r="55" fill="#ffd666" opacity="0.35"/>
  <!-- Wooden Lamp Frame -->
  <rect x="155" y="65" width="90" height="120" rx="6" fill="#d4a373" stroke="#8d5b4c" stroke-width="4"/>
  <rect x="165" y="75" width="70" height="100" rx="3" fill="#fffbe6" opacity="0.85"/>
  <!-- Constellation LED Dots -->
  <circle cx="180" cy="95" r="3" fill="#faad14"/>
  <circle cx="215" cy="105" r="4" fill="#ff7a45"/>
  <circle cx="195" cy="135" r="3" fill="#fa8c16"/>
  <circle cx="220" cy="150" r="3" fill="#faad14"/>
  <line x1="180" y1="95" x2="215" y2="105" stroke="#faad14" stroke-width="1.5" stroke-dasharray="3,3"/>
  <line x1="215" y1="105" x2="195" y2="135" stroke="#faad14" stroke-width="1.5" stroke-dasharray="3,3"/>
  <rect x="20" y="20" width="110" height="28" rx="14" fill="rgba(0,0,0,0.35)"/>
  <text x="75" y="39" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">원목 무드등 키트</text>
</svg>`);

const svgBarefootTrekking = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" width="100%" height="100%">
  <defs>
    <linearGradient id="bareGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#194833"/>
      <stop offset="100%" stop-color="#3b7a57"/>
    </linearGradient>
  </defs>
  <rect width="400" height="240" fill="url(#bareGrad)"/>
  <path d="M80,240 Q 180,130 320,50" fill="none" stroke="#a07855" stroke-width="40" stroke-linecap="round"/>
  <circle cx="150" cy="170" r="8" fill="#523926" opacity="0.6"/>
  <circle cx="145" cy="155" r="3" fill="#523926" opacity="0.6"/>
  <circle cx="153" cy="154" r="3" fill="#523926" opacity="0.6"/>
  <circle cx="160" cy="157" r="3" fill="#523926" opacity="0.6"/>
  <circle cx="215" cy="120" r="8" fill="#523926" opacity="0.6"/>
  <circle cx="210" cy="105" r="3" fill="#523926" opacity="0.6"/>
  <circle cx="218" cy="104" r="3" fill="#523926" opacity="0.6"/>
  <circle cx="225" cy="107" r="3" fill="#523926" opacity="0.6"/>
  <rect x="20" y="20" width="100" height="28" rx="14" fill="rgba(0,0,0,0.35)"/>
  <text x="70" y="39" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">맨발 트레킹</text>
</svg>`);

const svgZiplineFly = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" width="100%" height="100%">
  <defs>
    <linearGradient id="zipGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#a03b12"/>
      <stop offset="100%" stop-color="#e86e30"/>
    </linearGradient>
  </defs>
  <rect width="400" height="240" fill="url(#zipGrad)"/>
  <!-- High canopy trees -->
  <rect x="50" y="10" width="22" height="230" fill="#422006"/>
  <rect x="330" y="10" width="22" height="230" fill="#422006"/>
  <!-- Zipline wire -->
  <line x1="60" y1="50" x2="340" y2="150" stroke="#ffffff" stroke-width="4"/>
  <!-- Pulley and adventurous flyer -->
  <rect x="190" y="92" width="20" height="12" rx="3" fill="#212529"/>
  <line x1="200" y1="104" x2="200" y2="135" stroke="#f8f9fa" stroke-width="3"/>
  <circle cx="200" cy="138" r="8" fill="#ffd166"/>
  <path d="M190,150 L 210,145 L 200,170 Z" fill="#06d6a0"/>
  <rect x="20" y="20" width="110" height="28" rx="14" fill="rgba(0,0,0,0.35)"/>
  <text x="75" y="39" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">숲밧줄 짚라인</text>
</svg>`);

const svgForestYoga = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" width="100%" height="100%">
  <defs>
    <linearGradient id="yogaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3c1b52"/>
      <stop offset="100%" stop-color="#803b9b"/>
    </linearGradient>
  </defs>
  <rect width="400" height="240" fill="url(#yogaGrad)"/>
  <circle cx="200" cy="110" r="55" fill="#ffd666" opacity="0.75"/>
  <polygon points="30,240 90,130 150,240" fill="#220e30" opacity="0.7"/>
  <polygon points="250,240 310,120 370,240" fill="#220e30" opacity="0.7"/>
  <circle cx="200" cy="120" r="14" fill="#ffffff"/>
  <path d="M200,136 Q 200,165 200,185 M 175,160 L 225,160 M 165,190 Q 200,175 235,190" fill="none" stroke="#ffffff" stroke-width="8" stroke-linecap="round"/>
  <rect x="20" y="20" width="100" height="28" rx="14" fill="rgba(0,0,0,0.35)"/>
  <text x="70" y="39" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">산림치유 요가</text>
</svg>`);

// Full 12 Experience Programs from TQ_Project_3 Database with rich metadata
const ForestPrograms = [
    {
        id: "prg01",
        title: "[특화] 자연에 물들다 (천연염색체험)",
        category: "산림교육",
        region: "가평군",
        target: ["family", "kids", "healing"],
        mode: "캠핑장 방문형",
        price: 5000,
        duration: 120,
        minPeople: 1,
        maxPeople: 30,
        runDays: ["토", "일"],
        runTime: "10:00",
        provider: "국립춘천숲체원 협력단",
        location: "경기도 가평군 및 강원 춘천권역",
        description: "자연의 식물 염료에 대해 알아보고 손수건 천연염색 체험을 통해 자신만의 감수성을 천으로 표현하는 자연 친화적 산림교육 프로그램입니다.",
        preparations: "손수건을 담아갈 지퍼백, 가벼운 활동복",
        rainPolicy: "실내 공예체험관 또는 캠핑장 쉘터에서 정상 운영됩니다.",
        cancelPolicy: "예약 2일 전 100% 환불, 1일 전 50%, 당일 취소 불가",
        imageUrl: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=600",
        fallbackUrl: svgNaturalDye
    },
    {
        id: "prg02",
        title: "[인증] 숲을 그리다 (전문 숲해설)",
        category: "숲체험",
        region: "가평군",
        target: ["family", "healing", "kids"],
        mode: "캠핑장 방문형",
        price: 3000,
        duration: 120,
        minPeople: 10,
        maxPeople: 100,
        runDays: ["화", "수", "목", "금", "토"],
        runTime: "14:00",
        provider: "가평 산림복지교육회",
        location: "경기도 가평군 북면 및 가평 일대",
        description: "전문 숲해설가와 함께 캠핑장 숲을 산책하며 오감을 통해 계절의 변화를 체험하고 생태적 감수성을 증진하는 국가 인증 숲해설 프로그램입니다.",
        preparations: "편안한 운동화, 모자, 개인 식수",
        rainPolicy: "우천 시 실내 시각자료 활용 숲 체험으로 대체 진행됩니다.",
        cancelPolicy: "예약 1일 전까지 100% 취소 가능, 당일 취소 불가",
        imageUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=600",
        fallbackUrl: svgForestCommentary
    },
    {
        id: "prg03",
        title: "[인증] 탄소를 먹고 자라는 숲, 수토리",
        category: "숲체험",
        region: "가평군",
        target: ["kids", "family"],
        mode: "캠핑장 방문형",
        price: 4000,
        duration: 120,
        minPeople: 15,
        maxPeople: 80,
        runDays: ["화", "목", "금"],
        runTime: "10:00",
        provider: "경기 산림환경교육센터",
        location: "경기도 가평군 일대 산림 휴양지",
        description: "숲길과 시원한 계곡을 걸으며 이산화탄소를 흡수하고 산소를 공급하는 산림의 소중한 역할과 가치를 재미있게 배우는 탄소중립 숲체험입니다.",
        preparations: "운동화 필수, 땀을 닦을 수건",
        rainPolicy: "호우 경보 시 실내 시청각 기후환경 교육으로 변경 진행됩니다.",
        cancelPolicy: "예약 1일 전까지 100% 취소 가능",
        imageUrl: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=600",
        fallbackUrl: svgCarbonForest
    },
    {
        id: "prg04",
        title: "[키트형] 풋톡(Foot-Talk) 솔잎 족욕 테라피",
        category: "자연공예",
        region: "가평·양평 공통",
        target: ["healing", "family"],
        mode: "키트 제공형",
        price: 7000,
        duration: 30,
        minPeople: 1,
        maxPeople: 200,
        runDays: ["월", "화", "수", "목", "금", "토", "일"],
        runTime: "자율",
        provider: "한국산림복지진흥원 파트너스",
        location: "가평·양평 전 권역 캠핑장 (키트 배송/현장 수령)",
        description: "잣나무/솔잎과 편백오일 등 숲의 천연 재료를 믹스해 족욕을 즐길 수 있는 셀프 힐링 키트입니다. 텐트 사이트나 카라반에서 편리하게 휴식할 수 있습니다.",
        preparations: "뜨거운 물, 족욕 대야",
        rainPolicy: "키트 상품으로 날씨에 무관하게 텐트/실내에서 개별 체험 가능합니다.",
        cancelPolicy: "키트 수령(출고) 전 100% 취소 가능, 출고 후 반품 불가",
        imageUrl: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=600",
        fallbackUrl: svgFootTalkKit
    },
    {
        id: "prg05",
        title: "숲속 가족 생태 어드벤처",
        category: "숲체험",
        region: "가평군",
        target: ["family", "kids"],
        mode: "캠핑장 방문형",
        price: 10000,
        duration: 90,
        minPeople: 5,
        maxPeople: 25,
        runDays: ["토", "일"],
        runTime: "11:00",
        provider: "가평 산림복지교육회",
        location: "경기도 가평군 북면 일대",
        description: "전문 생태 교육 강사님이 직접 캠핑장으로 방문하여 캠핑장 내부 정원과 인근 숲속 산책로에서 곤충 및 식물을 함께 탐색하는 가족 맞춤형 숲 탐험 프로그램입니다.",
        preparations: "모자, 편한 운동화, 모기 기피제",
        rainPolicy: "우천 시 캠핑장 실내 대피소 또는 야외 천막 아래서 숲 부산물을 이용한 액자 만들기로 변경 진행됩니다.",
        cancelPolicy: "3일 전 100%, 1일 전 50% 환불, 당일 환불 불가",
        imageUrl: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&q=80&w=600",
        fallbackUrl: svgEcoAdventure
    },
    {
        id: "prg06",
        title: "신나는 밧줄놀이터 체험",
        category: "산림레포츠",
        region: "가평군",
        target: ["kids", "sports"],
        mode: "캠핑장 방문형",
        price: 12000,
        duration: 120,
        minPeople: 8,
        maxPeople: 20,
        runDays: ["금", "토", "일"],
        runTime: "10:00",
        provider: "가평 산림레포츠 연합",
        location: "경기도 가평군 가평읍 일대",
        description: "캠핑장에 자라나는 큰 나무 사이에 튼튼한 로프를 연결하여 짚라인, 로프 그네, 흔들다리 등 어린이 맞춤형 친환경 모험 놀이터를 구성하는 모험 스포츠 프로그램입니다.",
        preparations: "긴 팔, 긴 바지, 미끄러지지 않는 운동화 필수",
        rainPolicy: "비가 올 경우 로프 마찰 및 미끄러짐 위험으로 안전을 위해 100% 자동 취소 및 환불됩니다.",
        cancelPolicy: "예약 1일 전까지 수수료 없이 취소 가능",
        imageUrl: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=600",
        fallbackUrl: svgRopeAdventure
    },
    {
        id: "prg07",
        title: "다이내믹 플라잉 디스크 트레킹",
        category: "산림레포츠",
        region: "양평군",
        target: ["sports", "family"],
        mode: "외부 체험장 이동형",
        price: 8000,
        duration: 120,
        minPeople: 10,
        maxPeople: 50,
        runDays: ["화", "수", "목", "금", "토", "일"],
        runTime: "15:00",
        provider: "양평 숲스포츠클럽",
        location: "경기도 양평군 단월면 일대",
        description: "숲길을 가볍게 트레킹하며 코스별로 설치된 특수 바스켓 골대에 소프트 플라잉 디스크를 던져 넣는, 남녀노소 즐겁게 내기할 수 있는 숲 스포츠 프로그램입니다.",
        preparations: "활동하기 쉬운 캐주얼 운동복, 선글라스",
        rainPolicy: "가벼운 보슬비는 진행 가능하며, 폭우 예보 시 사전 조율 후 취소 및 전액 환불처리 됩니다.",
        cancelPolicy: "체험일 전날 18시 이전까지 100% 환불",
        imageUrl: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=600",
        fallbackUrl: svgFlyingDisc
    },
    {
        id: "prg08",
        title: "숲속 그린 스테이 (해먹 치유)",
        category: "숲체험",
        region: "양평군",
        target: ["healing", "family"],
        mode: "외부 체험장 이동형",
        price: 6000,
        duration: 120,
        minPeople: 5,
        maxPeople: 30,
        runDays: ["수", "목", "금", "토", "일"],
        runTime: "13:00",
        provider: "양평 산림치유원",
        location: "경기도 양평군 양동면 일대",
        description: "소나무가 가득한 치유의 숲지대에 1인용 해먹을 직접 설치하고, 나무 그늘 아래 누워 전문 산림치유사의 힐링 사운드와 함께 피톤치드 명상을 즐기는 웰니스 프로그램입니다.",
        preparations: "체온을 지킬 수 있는 겉옷 또는 담요, 개인 돗자리",
        rainPolicy: "우천 시 야외 숲 공간 특성상 진행 불가하여 전액 환불됩니다.",
        cancelPolicy: "체험 2일 전 100% 환불, 당일 불가",
        imageUrl: "forest_hammock.png",
        fallbackUrl: svgHammockStay
    },
    {
        id: "prg09",
        title: "[키트형] 편백 나무향 감성 무드등 만들기",
        category: "자연공예",
        region: "가평·양평 공통",
        target: ["kids", "family", "healing"],
        mode: "키트 제공형",
        price: 15000,
        duration: 60,
        minPeople: 1,
        maxPeople: 100,
        runDays: ["월", "화", "수", "목", "금", "토", "일"],
        runTime: "자율",
        provider: "산림복지 목공예협동조합",
        location: "가평·양평 전 권역 캠핑장 (키트 배송/현장 수령)",
        description: "편백나무와 잣나무 원목 조각들을 손으로 맞춘 뒤, 은하수 LED 전구를 넣어 피톤치드 향과 무드를 함께 누리는 고품격 핸드메이드 무드등 공예 키트입니다.",
        preparations: "물티슈 (키트 내 목공 풀 등 모든 도구 포함)",
        rainPolicy: "날씨 제한 없음. 캠핑 텐트 안이나 거실에서 편리하게 즐길 수 있습니다.",
        cancelPolicy: "포장 배송 발송 전 언제든지 100% 환불 가능",
        imageUrl: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=600",
        fallbackUrl: svgWoodLampKit
    },
    {
        id: "prg10",
        title: "태고의 숲길 피톤치드 맨발 트레킹",
        category: "숲트레킹",
        region: "양평군",
        target: ["healing", "sports"],
        mode: "외부 체험장 이동형",
        price: 20000,
        duration: 180,
        minPeople: 5,
        maxPeople: 25,
        runDays: ["금", "토", "일"],
        runTime: "09:30",
        provider: "양평 숲치유학교",
        location: "경기도 양평군 일대 자연휴양림",
        description: "천연 원시림 숲길을 맨발로 천천히 걸으며 황토의 혈류 개선 효과를 맛보고 깊은 산림의 피톤치드 산소를 온몸으로 호흡하는 친환경 명품 트레킹입니다.",
        preparations: "트레킹 후 발을 닦을 작은 타올, 가벼운 신발(이동용)",
        rainPolicy: "우천 시 돌 및 바닥 미끄럼 낙상 방지를 위해 체험이 취소되고 자동 환불됩니다.",
        cancelPolicy: "3일 전 100%, 1일 전 30%, 당일 환불 불가",
        imageUrl: "https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?auto=format&fit=crop&q=80&w=600",
        fallbackUrl: svgBarefootTrekking
    },
    {
        id: "prg11",
        title: "숲밧줄 타고 숲 속 날기 (짚라인&어드벤처)",
        category: "산림레포츠",
        region: "가평군",
        target: ["sports", "kids", "family"],
        mode: "캠핑장 방문형",
        price: 15000,
        duration: 120,
        minPeople: 5,
        maxPeople: 30,
        runDays: ["토", "일"],
        runTime: "11:00",
        provider: "한국산림레포츠진흥회",
        location: "경기도 가평군 북면 및 설악면 일대",
        description: "숲길 중간에 조성된 친환경 로프 어드벤처 구역에서 안전 헬멧과 보조줄을 장착하고 나무 사이를 스릴 있게 통과하는 청정 산림 액티비티 체험입니다.",
        preparations: "활동이 편한 옷차림, 코팅 장갑(현장 대여 가능)",
        rainPolicy: "우천 예보 시 안전을 위해 사전 취소 후 전액 환불됩니다.",
        cancelPolicy: "2일 전까지 취소 가능",
        imageUrl: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=600",
        fallbackUrl: svgZiplineFly
    },
    {
        id: "prg12",
        title: "산림 휴식형 스트레칭과 심신 요가",
        category: "숲체험",
        region: "가평군",
        target: ["healing", "family"],
        mode: "캠핑장 방문형",
        price: 10000,
        duration: 90,
        minPeople: 4,
        maxPeople: 15,
        runDays: ["토", "일"],
        runTime: "07:30",
        provider: "가평 요가앤숲 아카데미",
        location: "경기도 가평군 가평읍 일대 캠핑장",
        description: "캠핑장의 상쾌한 아침을 열어주는 방문형 스트레칭 교실입니다. 싱그러운 새벽 공기와 피톤치드를 호흡하며 몸의 정렬과 피로를 푸는 심신 웰빙 프로그램입니다.",
        preparations: "개인 매트 또는 돗자리, 따뜻한 겉옷",
        rainPolicy: "우천 시 각 텐트 내에서 할 수 있는 힐링 스트레칭 강의(온라인/서적 배포) 또는 캠핑장 내 방풍 쉘터에서 축소 운영됩니다.",
        cancelPolicy: "체험 당일 2시간 전까지 수수료 없이 취소 가능",
        imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600",
        fallbackUrl: svgForestYoga
    }
];

// --- 2. Initialize App and Elements ---
document.addEventListener("DOMContentLoaded", () => {
    initFirebase();
    initScrollSpy();
    initCounterAnimations();
    initProgramMatcher();
    initProgramDetailModalEvents();
    initCamperSimulator();
    initStakeholderTabs();
    initSurveyForm();
    initProgramRegistration();
});

// --- 3. Scroll Spy (Active Menu Indicator) ---
function initScrollSpy() {
    const mainContent = document.getElementById("content-main");
    const navLinks = document.querySelectorAll("#sidebar-nav .nav-link");
    const sections = document.querySelectorAll(".content-main .section");

    mainContent.addEventListener("scroll", () => {
        let currentSectionId = "";
        const scrollPosition = mainContent.scrollTop + 150; // offset

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute("id");
            }
        });

        if (currentSectionId) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${currentSectionId}`) {
                    link.classList.add("active");
                }
            });
        }
    });
}

// --- 4. Counter Animation on Scroll ---
function initCounterAnimations() {
    const statNums = document.querySelectorAll(".stat-num");
    
    const countUp = (element) => {
        const target = parseInt(element.getAttribute("data-val"));
        let count = 0;
        const duration = 1500; // ms
        const stepTime = Math.max(Math.floor(duration / target), 15);
        
        const timer = setInterval(() => {
            if (target === 2026) {
                count += 46;
                if (count >= target) {
                    element.innerText = target;
                    clearInterval(timer);
                } else {
                    element.innerText = count;
                }
            } else {
                count++;
                element.innerText = count;
                if (count >= target) {
                    clearInterval(timer);
                }
            }
        }, stepTime);
    };

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                countUp(entry.target);
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statNums.forEach(num => observer.observe(num));
}

// --- 5. Program Matcher Simulator ---
function initProgramMatcher() {
    const regionRadios = document.querySelectorAll('input[name="sim-region"]');
    const targetSelect = document.getElementById("sim-target");
    const modeSelect = document.getElementById("sim-mode");

    const triggerMatch = () => {
        let selectedRegion = "all";
        regionRadios.forEach(radio => {
            if (radio.checked) selectedRegion = radio.value;
        });

        const selectedTarget = targetSelect.value;
        const selectedMode = modeSelect.value;

        // Filtering logic
        const filtered = ForestPrograms.filter(prg => {
            // 1. Region filter
            if (selectedRegion !== "all") {
                if (selectedRegion === "gapyeong" && !prg.region.includes("가평") && prg.mode !== "키트 제공형") return false;
                if (selectedRegion === "yangpyeong" && !prg.region.includes("양평") && prg.mode !== "키트 제공형") return false;
            }
            
            // 2. Target demographic filter
            if (selectedTarget !== "all" && !prg.target.includes(selectedTarget)) {
                return false;
            }

            // 3. Mode filter
            if (selectedMode !== "all") {
                if (selectedMode === "visit" && prg.mode !== "캠핑장 방문형") return false;
                if (selectedMode === "move" && prg.mode !== "외부 체험장 이동형") return false;
                if (selectedMode === "kit" && prg.mode !== "키트 제공형") return false;
            }

            return true;
        });

        renderMatchCards(filtered);
    };

    // Attach listeners
    regionRadios.forEach(r => r.addEventListener("change", triggerMatch));
    targetSelect.addEventListener("change", triggerMatch);
    modeSelect.addEventListener("change", triggerMatch);

    // Initial render
    triggerMatch();
}

function renderMatchCards(programs) {
    const container = document.getElementById("matched-programs-container");
    const matchCountDisplay = document.getElementById("match-count");
    
    matchCountDisplay.innerText = programs.length;
    container.innerHTML = "";

    if (programs.length === 0) {
        container.innerHTML = `
            <div class="sim-empty-state">
                <i class="fa-solid fa-tree-slash"></i>
                <h4>매칭되는 프로그램이 없습니다.</h4>
                <p>필터 조건을 다른 옵션으로 변경해 보세요.</p>
            </div>
        `;
        return;
    }

    programs.forEach(prg => {
        const card = document.createElement("div");
        card.className = "sim-program-card";
        card.setAttribute("title", "클릭하여 상세 내용 및 운영 규정 확인");
        card.onclick = () => openProgramDetailModal(prg.id);

        card.innerHTML = `
            <div class="sim-img-box">
                <img src="${prg.imageUrl}" alt="${prg.title}" loading="lazy" onerror="this.onerror=null; if('${prg.fallbackUrl}') this.src='${prg.fallbackUrl}';">
                <span class="sim-cat-tag">${prg.category}</span>
                <span class="sim-mode-tag">${prg.mode}</span>
            </div>
            <div class="sim-card-body">
                <div>
                    <h4>${prg.title}</h4>
                    <p>${prg.description}</p>
                </div>
                <div class="sim-card-footer">
                    <span><i class="fa-solid fa-circle-user"></i> ${prg.provider}</span>
                    <div class="sim-price">
                        ${prg.price.toLocaleString()}<span>원/인</span>
                    </div>
                </div>
                <div style="display: flex; justify-content: flex-end; margin-top: 10px;">
                    <span class="btn-card-detail-hint"><i class="fa-solid fa-circle-info"></i> 상세정보 보기</span>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// --- Program Detail Modal Functions (Reference TQ_Project_3) ---
window.openProgramDetailModal = function(programOrId) {
    let prg = null;
    if (typeof programOrId === "object" && programOrId !== null) {
        prg = programOrId;
    } else {
        prg = ForestPrograms.find(p => p.id === programOrId) || RegisteredPrograms.find(p => p.id === programOrId);
    }
    if (!prg) return;

    const modal = document.getElementById("program-detail-modal");
    const titleEl = document.getElementById("modal-prg-title");
    const categoryEl = document.getElementById("modal-prg-category");
    const bodyEl = document.getElementById("modal-prg-body");

    if (!modal || !titleEl || !categoryEl || !bodyEl) return;

    titleEl.textContent = prg.title;
    categoryEl.textContent = prg.category;

    const runDaysText = prg.runDays ? prg.runDays.join(", ") : "상시 운영";
    const runTimeText = prg.runTime || "시간 협의";
    const minP = prg.minPeople || 1;
    const maxP = prg.maxPeople || 50;

    let modeDescription = "";
    if (prg.mode === "키트 제공형") {
        modeDescription = "체험키트 (캠핑장 현장 수령 또는 텐트 배송)";
    } else if (prg.mode === "캠핑장 방문형") {
        modeDescription = "전문 강사/지도사 캠핑장 직접 방문 파견";
    } else {
        modeDescription = "캠핑장 인근 외부 체험장/자연휴양림 이동 (차량 15~30분 내)";
    }

    const providerName = prg.provider || prg.orgName || "산림복지전문업";
    const priceFormatted = Number(prg.price) === 0 ? "무료" : Number(prg.price).toLocaleString() + "원 / 1인";
    const locationText = prg.location || '권역 내 협력 캠핑장';

    bodyEl.innerHTML = `
        <div class="details-summary-section">
            <div class="details-image-box">
                <img src="${prg.imageUrl}" alt="${prg.title}" onerror="this.onerror=null; if('${prg.fallbackUrl}') this.src='${prg.fallbackUrl}';">
            </div>
            <div class="details-headline">
                <div class="badge-row">
                    <span class="badge-category">${prg.category}</span>
                    <span class="badge-mode">${prg.mode}</span>
                </div>
                <h4>${prg.title}</h4>
                <p class="org-info"><i class="fa-solid fa-landmark"></i> <strong>운영기관:</strong> ${providerName}</p>
                <p class="details-desc-short">${prg.description}</p>
            </div>
        </div>

        <h5 class="details-section-title"><i class="fa-solid fa-circle-info"></i> 프로그램 세부 운영 스펙</h5>
        <div class="details-grid">
            <div class="details-item">
                <strong>활동 권역 및 위치</strong>
                <span>${prg.region} (${locationText})</span>
            </div>
            <div class="details-item">
                <strong>운영 형태</strong>
                <span>${modeDescription}</span>
            </div>
            <div class="details-item">
                <strong>소요시간 및 진행 일정</strong>
                <span>${prg.duration}분 | 매주 [${runDaysText}] (${runTimeText})</span>
            </div>
            <div class="details-item">
                <strong>회당 참여 정원</strong>
                <span>${minP}명 ~ ${maxP}명 (최소~최대)</span>
            </div>
            <div class="details-item">
                <strong>체험 참가비</strong>
                <span style="color: var(--accent); font-weight: 800;">${priceFormatted}</span>
            </div>
            <div class="details-item">
                <strong>최소 운영 비용 (회당)</strong>
                <span style="color: var(--primary-dark); font-weight: 800;">${prg.minCost ? Number(prg.minCost).toLocaleString() + '원' : '별도 협의 (기본 정원 기준)'}</span>
            </div>
            <div class="details-item">
                <strong>우천 시 운영 대안</strong>
                <span>${prg.rainPolicy || '실내 공간 대체 또는 100% 자동 환불'}</span>
            </div>
        </div>

        <h5 class="details-section-title"><i class="fa-solid fa-clipboard-check"></i> 준비물 및 운영 규정</h5>
        <div class="details-paragraphs">
            <p><strong><i class="fa-solid fa-suitcase"></i> 필수 준비물:</strong> ${prg.preparations || '편안한 복장 및 운동화'}</p>
            <p><strong><i class="fa-solid fa-clock-rotate-left"></i> 예약 취소 및 환불:</strong> ${prg.cancelPolicy || '체험일 1일 전까지 100% 취소 가능'}</p>
            <div class="details-callout">
                <i class="fa-solid fa-shield-halved"></i> <strong>진흥원 지원 보증:</strong> 본 프로그램은 한국산림복지진흥원 시범사업 협력 모델로 안전 가이드라인 및 전문 자격을 갖춘 산림복지사가 진행합니다.
            </div>
        </div>
    `;

    modal.style.display = "flex";
};

window.closeProgramDetailModal = function() {
    const modal = document.getElementById("program-detail-modal");
    if (modal) modal.style.display = "none";
};

function initProgramDetailModalEvents() {
    const modal = document.getElementById("program-detail-modal");
    const btnClose = document.getElementById("btn-close-prg-modal");
    const btnCloseBottom = document.getElementById("btn-close-prg-modal-bottom");

    if (btnClose) {
        btnClose.addEventListener("click", window.closeProgramDetailModal);
    }
    if (btnCloseBottom) {
        btnCloseBottom.addEventListener("click", window.closeProgramDetailModal);
    }

    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                window.closeProgramDetailModal();
            }
        });
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal && modal.style.display === "flex") {
            window.closeProgramDetailModal();
        }
    });
}

// --- 6. Camper Phone Simulator Booking Calculation ---
function initCamperSimulator() {
    const checkPrg1 = document.getElementById("check-prg-1");
    const checkPrg2 = document.getElementById("check-prg-2");
    
    const qtySelector1 = document.querySelector("#app-opt-1 .opt-qty-selector");
    const qtySelector2 = document.querySelector("#app-opt-2 .opt-qty-selector");
    
    const calcRow1 = document.getElementById("app-calc-prg-1");
    const calcRow2 = document.getElementById("app-calc-prg-2");

    const qtyVal1 = document.getElementById("qty-1");
    const qtyVal2 = document.getElementById("qty-2");

    const calcQty1 = document.getElementById("calc-qty-1");
    const calcQty2 = document.getElementById("calc-qty-2");

    const calcPrice1 = document.getElementById("calc-price-1");
    const calcPrice2 = document.getElementById("calc-price-2");

    const finalTotal = document.getElementById("app-final-total");
    const btnAppPay = document.querySelector(".btn-app-pay");

    const baseCampingPrice = 50000;
    const prg1UnitPrice = 10000;
    const prg2UnitPrice = 12000;

    const recalculatePrice = () => {
        let total = baseCampingPrice;
        
        // Option 1 calc
        if (checkPrg1.checked) {
            qtySelector1.style.display = "flex";
            calcRow1.style.display = "flex";
            const q1 = parseInt(qtyVal1.innerText);
            const subtotal1 = q1 * prg1UnitPrice;
            calcQty1.innerText = q1;
            calcPrice1.innerText = subtotal1.toLocaleString();
            total += subtotal1;
        } else {
            qtySelector1.style.display = "none";
            calcRow1.style.display = "none";
        }

        // Option 2 calc
        if (checkPrg2.checked) {
            qtySelector2.style.display = "flex";
            calcRow2.style.display = "flex";
            const q2 = parseInt(qtyVal2.innerText);
            const subtotal2 = q2 * prg2UnitPrice;
            calcQty2.innerText = q2;
            calcPrice2.innerText = subtotal2.toLocaleString();
            total += subtotal2;
        } else {
            qtySelector2.style.display = "none";
            calcRow2.style.display = "none";
        }

        finalTotal.innerText = `${total.toLocaleString()} 원`;
        btnAppPay.innerText = `${total.toLocaleString()}원 안전 결제하기`;
    };

    // Checkbox Listeners
    checkPrg1.addEventListener("change", recalculatePrice);
    checkPrg2.addEventListener("change", recalculatePrice);

    // Qty plus minus buttons
    document.querySelectorAll(".qty-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = btn.getAttribute("data-target");
            const targetSpan = document.getElementById(targetId);
            let currentVal = parseInt(targetSpan.innerText);

            if (btn.classList.contains("qty-plus")) {
                currentVal = Math.min(currentVal + 1, 10); // cap at 10 for simulation
            } else if (btn.classList.contains("qty-minus")) {
                currentVal = Math.max(currentVal - 1, 1);
            }

            targetSpan.innerText = currentVal;
            recalculatePrice();
        });
    });
}

// --- 7. Stakeholder Tab Switching ---
function initStakeholderRoles() {
    // Left empty for logical segmentation, implemented in initStakeholderTabs
}

function initStakeholderTabs() {
    const tabButtons = document.querySelectorAll("#stakeholder-tabs .tab-btn");
    const tabPanes = document.querySelectorAll(".tabs-content-wrapper .tab-pane");

    tabButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const targetTab = btn.getAttribute("data-tab");
            
            // Remove active classes
            tabButtons.forEach(b => b.classList.remove("active"));
            tabPanes.forEach(p => p.classList.remove("active"));

            // Add active classes
            btn.classList.add("active");
            document.getElementById(`tab-${targetTab}`).classList.add("active");
        });
    });
}

// --- 8. Survey Intent Registration Form & Admin Authentication ---
const ADMIN_PASSWORD = "Net0521";
let isAdminLoggedIn = sessionStorage.getItem("tq_admin_logged") === "true";
const SubmittedPrograms = [];
const RegisteredPrograms = [];

// --- Firebase Realtime Database Configuration (Cross-Device Cloud Sync) ---
// Load custom Firebase configuration from localStorage if administrator configured it
const DEFAULT_FIREBASE_CONFIG = {
    apiKey: "AIzaSyB_tq_pilot_ready_key_2026",
    authDomain: "tq-pilot-sync.firebaseapp.com",
    databaseURL: "https://tq-pilot-sync-default-rtdb.firebaseio.com",
    projectId: "tq-pilot-sync",
    storageBucket: "tq-pilot-sync.appspot.com",
    messagingSenderId: "109876543210",
    appId: "1:109876543210:web:abcdef1234567890"
};

function getActiveFirebaseConfig() {
    const saved = localStorage.getItem("tq_custom_firebase_cfg");
    if (saved) {
        try {
            return JSON.parse(saved);
        } catch (e) {
            console.error("Invalid custom Firebase config in storage:", e);
        }
    }
    return DEFAULT_FIREBASE_CONFIG;
}

let firebaseApp = null;
let firebaseDb = null;
let isFirebaseConnected = false;

function initFirebase() {
    const activeCfg = getActiveFirebaseConfig();
    try {
        if (typeof firebase !== "undefined") {
            if (!firebase.apps.length) {
                firebaseApp = firebase.initializeApp(activeCfg);
            } else {
                firebaseApp = firebase.app();
            }
            firebaseDb = firebase.database();

            // Update status indicator
            const statusBadge = document.getElementById("cloud-cfg-status");
            if (statusBadge) {
                const isCustom = !!localStorage.getItem("tq_custom_firebase_cfg");
                statusBadge.innerText = isCustom ? "사용자 클라우드 DB 연결됨" : "공용 클라우드 동기화 준비됨";
                statusBadge.style.background = isCustom ? "#e3f2fd" : "#e8f5e9";
                statusBadge.style.color = isCustom ? "#1565c0" : "#2e7d32";
            }

            // Check connection state
            const connectedRef = firebaseDb.ref(".info/connected");
            connectedRef.on("value", (snap) => {
                isFirebaseConnected = (snap.val() === true);
                updateCloudSyncBadge(isFirebaseConnected);
            });

            // Listen to real-time changes for Submitted Programs
            const subRef = firebaseDb.ref("tq_submitted_programs");
            subRef.on("value", (snapshot) => {
                const data = snapshot.val();
                if (data) {
                    const list = Array.isArray(data) ? data : Object.values(data);
                    SubmittedPrograms.length = 0;
                    list.forEach(p => {
                        if (p) {
                            if (!p.id) p.id = "sub_" + Date.now() + "_" + Math.random().toString(36).substring(2, 6);
                            if (!p.submittedAt) p.submittedAt = "등록 완료";
                            SubmittedPrograms.push(p);
                        }
                    });
                    // Backup to localStorage
                    localStorage.setItem("tq_submitted_programs", JSON.stringify(SubmittedPrograms));
                    if (isAdminLoggedIn) renderSubmittedPrograms();
                }
            });

            // Listen to real-time changes for Registered Custom Programs
            const prgRef = firebaseDb.ref("tq_registered_custom_programs");
            prgRef.on("value", (snapshot) => {
                const data = snapshot.val();
                if (data) {
                    const list = Array.isArray(data) ? data : Object.values(data);
                    RegisteredPrograms.length = 0;
                    list.forEach(p => {
                        if (p) {
                            if (!p.id) p.id = "cprg_" + Date.now() + "_" + Math.random().toString(36).substring(2, 6);
                            RegisteredPrograms.push(p);
                        }
                    });
                    // Backup to localStorage
                    localStorage.setItem("tq_registered_custom_programs", JSON.stringify(RegisteredPrograms));
                    if (isAdminLoggedIn) renderAdminProgramList();
                }
            });
        }
    } catch (e) {
        console.warn("Firebase realtime sync initialized in offline/fallback mode:", e);
        updateCloudSyncBadge(false);
    }
}

// --- Google Sheets Webhook Configuration (Option 2: Cloud Sync) ---
// 웹서버 배포 시 여기에 구글 웹앱 URL(https://script.google.com/...)을 적어두시면, 
// 사이트에 접속하는 모든 사용자(스마트폰/PC)의 신청 데이터가 구글 시트로 즉시 자동 취합됩니다.
const DEFAULT_GOOGLE_SHEETS_WEBHOOK_URL = "";

function getActiveGoogleSheetsWebhookUrl() {
    return localStorage.getItem("tq_google_sheets_webhook_url") || DEFAULT_GOOGLE_SHEETS_WEBHOOK_URL || "";
}

function sendToGoogleSheetsWebhook(payload) {
    const webhookUrl = getActiveGoogleSheetsWebhookUrl();
    if (!webhookUrl) return;

    try {
        // Asynchronously post to Google Apps Script Webhook without blocking UI
        fetch(webhookUrl, {
            method: "POST",
            mode: "no-cors", // Google Apps Script Web Apps require no-cors for preflight bypass
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        }).then(() => {
            console.log("Google Sheets Webhook dispatched successfully:", payload.type);
        }).catch(err => {
            console.warn("Google Sheets Webhook dispatch notice:", err);
        });
    } catch (e) {
        console.warn("Google Sheets Webhook error:", e);
    }
}

// GUI Admin Config Management for Google Sheets Webhook
window.toggleCloudSettingsPanel = function() {
    const body = document.getElementById("cloud-settings-body");
    const arrow = document.getElementById("cloud-cfg-arrow");
    const input = document.getElementById("custom-sheets-webhook-url");
    if (!body) return;

    if (body.style.display === "none" || !body.style.display) {
        body.style.display = "block";
        if (arrow) arrow.innerHTML = '<i class="fa-solid fa-chevron-up"></i> 설정 닫기';
        if (input) {
            input.value = getActiveGoogleSheetsWebhookUrl();
        }
    } else {
        body.style.display = "none";
        if (arrow) arrow.innerHTML = '<i class="fa-solid fa-chevron-down"></i> 설정 열기';
    }
};

window.saveGoogleSheetsWebhookUrl = function() {
    const input = document.getElementById("custom-sheets-webhook-url");
    if (!input) return;
    const rawUrl = input.value.trim();

    if (rawUrl && !rawUrl.startsWith("http")) {
        alert("올바른 Google Apps Script 웹앱 배포 URL(https://...)을 입력해 주세요.");
        return;
    }

    if (rawUrl) {
        localStorage.setItem("tq_google_sheets_webhook_url", rawUrl);
        updateCloudSyncBadge(true);
        alert("Google 스프레드시트 Webhook URL이 성공적으로 저장되었습니다!\n이제부터 제출되는 모든 신청 내역이 구글 시트에 실시간 자동 기록됩니다.");
    } else {
        localStorage.removeItem("tq_google_sheets_webhook_url");
        updateCloudSyncBadge(false);
        alert("Google 스프레드시트 Webhook URL이 초기화되었습니다.");
    }
    updateCloudSettingsStatus();
};

window.copyGoogleAppsScriptCode = function() {
    const textarea = document.getElementById("gas-script-template");
    if (!textarea) return;
    textarea.select();
    navigator.clipboard.writeText(textarea.value).then(() => {
        showToast("구글 시트 Apps Script 코드가 클립보드에 복사되었습니다!");
    }).catch(() => {
        document.execCommand("copy");
        showToast("구글 시트 Apps Script 코드가 복사되었습니다!");
    });
};

window.testGoogleSheetsWebhook = function() {
    const webhookUrl = getActiveGoogleSheetsWebhookUrl();
    if (!webhookUrl) {
        alert("먼저 위 입력창에 Google Apps Script 웹앱 Webhook URL을 입력하고 저장해 주세요.");
        return;
    }

    const testPayload = {
        type: "company",
        submittedAt: new Date().toLocaleString(),
        orgName: "[연동테스트] 숲체험협동조합",
        repName: "홍길동",
        contact: "010-1234-5678",
        address: "경기도 가평군",
        region: "가평·양평 전체",
        staffCount: 5,
        specialty: ["숲해설", "산림치유"],
        desc: "구글 시트 실시간 Webhook 연동 정상 작동 테스트 데이터입니다."
    };

    sendToGoogleSheetsWebhook(testPayload);
    alert("구글 시트로 테스트 데이터 전송 요청을 보냈습니다!\n구글 스프레드시트에 [참여신청업체] 시트가 생성되고 데이터가 들어왔는지 확인해 보세요.");
};

function updateCloudSettingsStatus() {
    const statusBadge = document.getElementById("cloud-cfg-status");
    if (!statusBadge) return;
    const url = getActiveGoogleSheetsWebhookUrl();
    if (url) {
        statusBadge.innerText = "구글 시트 실시간 연동 중";
        statusBadge.style.background = "#e8f5e9";
        statusBadge.style.color = "#2e7d32";
    } else {
        statusBadge.innerText = "Webhook URL 등록 필요";
        statusBadge.style.background = "#fff3e0";
        statusBadge.style.color = "#e65100";
    }
}

function updateCloudSyncBadge(connected) {
    const badge = document.getElementById("cloud-sync-badge");
    if (!badge) return;
    const url = getActiveGoogleSheetsWebhookUrl();
    if (url || connected) {
        badge.className = "cloud-sync-badge";
        badge.innerHTML = '<i class="fa-solid fa-file-excel"></i> 구글 시트 실시간 동기화 중';
    } else {
        badge.className = "cloud-sync-badge offline";
        badge.innerHTML = '<i class="fa-solid fa-file-excel"></i> 구글 시트 URL 등록 대기';
    }
}

// --- CSV (Excel) Export Helpers ---
window.exportCompaniesToCSV = function() {
    loadSubmittedPrograms();
    if (SubmittedPrograms.length === 0) {
        showToast("다운로드할 참여 신청 업체 내역이 없습니다.");
        return;
    }

    const headers = ["신청일시", "업체명", "대표자명", "연락처", "소재지", "활동희망지역", "전문인력수", "전문분야", "소개글"];
    const rows = SubmittedPrograms.map(p => {
        const specs = Array.isArray(p.specialty) ? p.specialty.join("; ") : (p.specialty || "");
        const addr = p.address || (p.sido ? `${p.sido} ${p.sigungu || ''}` : p.region);
        return [
            `"${p.submittedAt || ''}"`,
            `"${(p.orgName || '').replace(/"/g, '""')}"`,
            `"${(p.repName || '').replace(/"/g, '""')}"`,
            `"${(p.contact || '').replace(/"/g, '""')}"`,
            `"${(addr || '').replace(/"/g, '""')}"`,
            `"${(p.region || '').replace(/"/g, '""')}"`,
            `"${p.staffCount || 1}"`,
            `"${specs.replace(/"/g, '""')}"`,
            `"${(p.desc || '').replace(/"/g, '""')}"`
        ];
    });

    const csvContent = "\uFEFF" + [headers.join(","), ...rows.map(r => r.join(","))].join("\r\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `가평양평_시범사업_참여업체명단_${new Date().toISOString().slice(0,10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    showToast("참여 신청 업체 목록이 엑셀(CSV) 파일로 다운로드되었습니다!");
};

window.exportProgramsToCSV = function() {
    loadRegisteredPrograms();
    if (RegisteredPrograms.length === 0) {
        showToast("다운로드할 등록 체험 프로그램 내역이 없습니다.");
        return;
    }

    const headers = ["등록일시", "프로그램명", "분야", "운영형태", "권역", "공급업체", "연락처", "진행장소", "소요시간(분)", "참가비(원)", "최소운영비(원)", "정원(최소~최대)", "운영요일", "시간대", "소개글", "준비물", "우천대안", "취소규정"];
    const rows = RegisteredPrograms.map(p => {
        const days = Array.isArray(p.runDays) ? p.runDays.join("; ") : (p.runDays || "상시");
        return [
            `"${p.registeredAt || ''}"`,
            `"${(p.title || '').replace(/"/g, '""')}"`,
            `"${(p.category || '').replace(/"/g, '""')}"`,
            `"${(p.mode || '').replace(/"/g, '""')}"`,
            `"${(p.region || '').replace(/"/g, '""')}"`,
            `"${(p.provider || '').replace(/"/g, '""')}"`,
            `"${(p.contact || '').replace(/"/g, '""')}"`,
            `"${(p.location || '').replace(/"/g, '""')}"`,
            `"${p.duration || 60}"`,
            `"${p.price || 0}"`,
            `"${p.minCost || 0}"`,
            `"${p.minPeople || 1}~${p.maxPeople || 20}명"`,
            `"${days}"`,
            `"${(p.runTime || '').replace(/"/g, '""')}"`,
            `"${(p.description || '').replace(/"/g, '""')}"`,
            `"${(p.preparations || '').replace(/"/g, '""')}"`,
            `"${(p.rainPolicy || '').replace(/"/g, '""')}"`,
            `"${(p.cancelPolicy || '').replace(/"/g, '""')}"`
        ];
    });

    const csvContent = "\uFEFF" + [headers.join(","), ...rows.map(r => r.join(","))].join("\r\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `가평양평_시범사업_등록체험프로그램_${new Date().toISOString().slice(0,10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    showToast("등록 프로그램 목록이 엑셀(CSV) 파일로 다운로드되었습니다!");
};

function updateCloudSyncBadge(connected) {
    const badge = document.getElementById("cloud-sync-badge");
    if (!badge) return;
    if (connected) {
        badge.className = "cloud-sync-badge";
        badge.innerHTML = '<i class="fa-solid fa-cloud"></i> 실시간 클라우드 동기화 중';
    } else {
        badge.className = "cloud-sync-badge offline";
        badge.innerHTML = '<i class="fa-solid fa-cloud-arrow-up"></i> 로컬+클라우드 대기 중';
    }
}

function loadSubmittedPrograms() {
    const saved = localStorage.getItem("tq_submitted_programs");
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            SubmittedPrograms.length = 0;
            if (Array.isArray(parsed)) {
                parsed.forEach(p => {
                    if (!p.id) p.id = "sub_" + Date.now() + "_" + Math.random().toString(36).substring(2, 6);
                    if (!p.submittedAt) p.submittedAt = "등록 완료";
                    SubmittedPrograms.push(p);
                });
            }
        } catch (e) {
            console.error("Failed to load submitted programs from localStorage", e);
        }
    }
}

function saveSubmittedPrograms(newItem) {
    // 1. Local backup
    localStorage.setItem("tq_submitted_programs", JSON.stringify(SubmittedPrograms));

    // 2. Google Sheets Webhook Dispatch
    if (newItem) {
        sendToGoogleSheetsWebhook({
            type: "company",
            ...newItem
        });
    }

    // 3. Optional Cloud DB sync
    if (firebaseDb) {
        try {
            firebaseDb.ref("tq_submitted_programs").set(SubmittedPrograms).catch((err) => {
                console.warn("Firebase sync push error:", err);
            });
        } catch (e) {
            console.warn("Firebase sync error:", e);
        }
    }
}

function loadRegisteredPrograms() {
    const saved = localStorage.getItem("tq_registered_custom_programs");
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            RegisteredPrograms.length = 0;
            if (Array.isArray(parsed)) {
                parsed.forEach(p => {
                    if (!p.id) p.id = "cprg_" + Date.now() + "_" + Math.random().toString(36).substring(2, 6);
                    RegisteredPrograms.push(p);
                });
            }
        } catch (e) {
            console.error("Failed to load registered custom programs from localStorage", e);
        }
    }
}

function saveRegisteredPrograms(newPrgItem) {
    // 1. Local backup
    localStorage.setItem("tq_registered_custom_programs", JSON.stringify(RegisteredPrograms));

    // 2. Google Sheets Webhook Dispatch
    if (newPrgItem) {
        sendToGoogleSheetsWebhook({
            type: "program",
            ...newPrgItem
        });
    }

    // 3. Optional Cloud DB sync
    if (firebaseDb) {
        try {
            firebaseDb.ref("tq_registered_custom_programs").set(RegisteredPrograms).catch((err) => {
                console.warn("Firebase sync push error:", err);
            });
        } catch (e) {
            console.warn("Firebase sync error:", e);
        }
    }
}

function updateAdminUI() {
    const authBox = document.getElementById("admin-modal-auth-box");
    const loggedContent = document.getElementById("admin-modal-content-box");
    const regCount = document.getElementById("admin-modal-reg-count");
    const prgCount = document.getElementById("admin-modal-prg-count");
    const authError = document.getElementById("admin-auth-error");
    const pwInput = document.getElementById("admin-password");

    // Re-sync latest data from localStorage
    loadSubmittedPrograms();
    loadRegisteredPrograms();
    updateCloudSyncBadge(isFirebaseConnected);
    updateCloudSettingsStatus();

    if (isAdminLoggedIn) {
        if (authBox) authBox.style.display = "none";
        if (loggedContent) loggedContent.style.display = "block";
        if (regCount) regCount.innerText = SubmittedPrograms.length;
        if (prgCount) prgCount.innerText = RegisteredPrograms.length;
        if (authError) authError.style.display = "none";
        if (pwInput) pwInput.value = "";
        renderSubmittedPrograms();
        renderAdminProgramList();
    } else {
        if (authBox) authBox.style.display = "block";
        if (loggedContent) loggedContent.style.display = "none";
        if (pwInput) pwInput.value = "";
    }
}

function renderSubmittedPrograms() {
    const container = document.getElementById("mock-preview-result");
    const regCount = document.getElementById("admin-modal-reg-count");
    if (regCount) regCount.innerText = SubmittedPrograms.length;
    
    if (!container) return;

    if (SubmittedPrograms.length === 0) {
        container.classList.remove("has-items");
        container.innerHTML = `
            <div class="mock-card-empty-state">
                <i class="fa-solid fa-folder-open"></i>
                <p>현재 등록된 전문업체 신청 내역이 없습니다.</p>
            </div>
        `;
        return;
    }

    container.classList.add("has-items");
    container.innerHTML = "";

    // Render in reverse chronological order (newest first)
    for (let i = SubmittedPrograms.length - 1; i >= 0; i--) {
        const prg = SubmittedPrograms[i];
        const specialties = Array.isArray(prg.specialty) 
            ? prg.specialty 
            : (prg.specialty ? String(prg.specialty).split(",").map(s => s.trim()) : ["산림복지"]);
        const specialtyBadges = specialties.map(s => `<span class="sub-cat">${s}</span>`).join(" ");
        const addressDisplay = prg.address || (prg.sido ? `${prg.sido} ${prg.sigungu || ''}` : (prg.region || '미입력'));

        const cardHtml = `
            <div class="submitted-card" data-id="${prg.id}">
                <div class="submitted-card-hdr">
                    <div style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
                        <span class="sub-org">${prg.orgName}</span>
                        ${specialtyBadges}
                        <span class="sub-date"><i class="fa-regular fa-clock"></i> ${prg.submittedAt}</span>
                    </div>
                    <button class="btn-delete-card" onclick="deleteSubmittedProgram('${prg.id}')" title="업체 정보 삭제"><i class="fa-solid fa-trash"></i></button>
                </div>
                <div class="submitted-card-body">
                    <h4>대표자/담당자: ${prg.repName}</h4>
                    <p class="sub-desc" style="margin-top: 8px;">${prg.desc}</p>
                    <div class="sub-meta-grid" style="grid-template-columns: repeat(3, 1fr);">
                        <div class="meta-field">소재지(군·구) <span>${addressDisplay}</span></div>
                        <div class="meta-field">활동희망지역 <span>${prg.region}</span></div>
                        <div class="meta-field">전문인력 <span>${prg.staffCount}명</span></div>
                    </div>
                    <div class="sub-contact-row">
                        <i class="fa-solid fa-phone"></i> 연락처: <span>${prg.contact}</span>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += cardHtml;
    }
}

// Global deletion function bound to window (deletes ONLY when admin clicks trash icon & confirms)
window.deleteSubmittedProgram = function(target) {
    let idx = -1;
    if (typeof target === "number") {
        idx = target;
    } else {
        idx = SubmittedPrograms.findIndex(p => p.id === target);
    }
    if (idx < 0 || idx >= SubmittedPrograms.length) return;

    const title = SubmittedPrograms[idx].orgName;
    if (confirm(`'${title}' 업체의 시범사업 참여 신청 정보를 완전히 삭제하시겠습니까?\n(삭제 후에는 복원할 수 없습니다.)`)) {
        SubmittedPrograms.splice(idx, 1);
        saveSubmittedPrograms();
        renderSubmittedPrograms();
        const regCount = document.getElementById("admin-modal-reg-count");
        if (regCount) regCount.innerText = SubmittedPrograms.length;
        showToast(`'${title}' 업체 정보가 삭제되었습니다.`);
    }
};

// Render registered custom experience programs in admin modal tab 2
function renderAdminProgramList() {
    const container = document.getElementById("admin-prg-list-result");
    const prgCount = document.getElementById("admin-modal-prg-count");
    if (prgCount) prgCount.innerText = RegisteredPrograms.length;

    if (!container) return;

    if (RegisteredPrograms.length === 0) {
        container.classList.remove("has-items");
        container.innerHTML = `
            <div class="mock-card-empty-state">
                <i class="fa-solid fa-folder-open"></i>
                <p>현재 등록된 체험 프로그램 내역이 없습니다.</p>
            </div>
        `;
        return;
    }

    container.classList.add("has-items");
    container.innerHTML = "";

    // Reverse chronological order (newest first)
    for (let i = RegisteredPrograms.length - 1; i >= 0; i--) {
        const prg = RegisteredPrograms[i];
        const daysText = Array.isArray(prg.runDays) ? prg.runDays.join(", ") : (prg.runDays || "상시");
        const priceText = Number(prg.price) === 0 ? "무료" : Number(prg.price).toLocaleString() + "원/인";
        const providerText = prg.provider || prg.orgName || "산림복지전문업체";

        const cardHtml = `
            <div class="admin-prg-card" data-prgid="${prg.id}">
                <div class="admin-prg-hdr">
                    <div class="admin-prg-title-group">
                        <span class="sub-cat">${prg.category || "체험"}</span>
                        <span class="sub-cat" style="background-color: #f1f3f5; color: #495057;">${prg.mode || "방문형"}</span>
                        <span class="admin-prg-title">${prg.title}</span>
                    </div>
                    <button class="btn-delete-card" onclick="deleteRegisteredProgram('${prg.id}')" title="프로그램 삭제">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
                <div class="admin-prg-body">
                    <div class="admin-prg-provider">
                        <i class="fa-solid fa-landmark"></i> <strong>공급업체:</strong> ${providerText}
                        ${prg.contact ? `&nbsp;|&nbsp; <i class="fa-solid fa-phone"></i> ${prg.contact}` : ''}
                    </div>
                    <p class="admin-prg-desc">${prg.description || ''}</p>
                    <div class="sub-meta-grid" style="grid-template-columns: repeat(5, 1fr);">
                        <div class="meta-field">지역/장소 <span>${prg.region} (${prg.location || '협력캠핑장'})</span></div>
                        <div class="meta-field">운영일시 <span>[${daysText}] ${prg.runTime || ''}</span></div>
                        <div class="meta-field">정원/소요 <span>${prg.minPeople || 1}~${prg.maxPeople || 20}명 / ${prg.duration || 60}분</span></div>
                        <div class="meta-field">참가비 <span>${priceText}</span></div>
                        <div class="meta-field">최소운영비 <span>${prg.minCost ? Number(prg.minCost).toLocaleString() + '원' : '-'}</span></div>
                    </div>
                    <div class="admin-prg-actions">
                        <button type="button" class="btn-preview-prg" onclick="openRegisteredProgramDetailById('${prg.id}')">
                            <i class="fa-solid fa-circle-info"></i> 숲체험 상세 팝업 미리보기
                        </button>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += cardHtml;
    }
}

// Global preview function for registered custom programs
window.openRegisteredProgramDetailById = function(id) {
    loadRegisteredPrograms();
    const found = RegisteredPrograms.find(p => p.id === id);
    if (found) {
        openProgramDetailModal(found);
    } else {
        showToast("해당 프로그램 정보를 찾을 수 없습니다.");
    }
};

// Global delete function for registered custom programs
window.deleteRegisteredProgram = function(target) {
    let idx = -1;
    if (typeof target === "number") {
        idx = target;
    } else {
        idx = RegisteredPrograms.findIndex(p => p.id === target);
    }
    if (idx < 0 || idx >= RegisteredPrograms.length) return;

    const title = RegisteredPrograms[idx].title;
    if (confirm(`'${title}' 체험 프로그램을 완전히 삭제하시겠습니까?\n(삭제 후 복원할 수 없습니다.)`)) {
        RegisteredPrograms.splice(idx, 1);
        saveRegisteredPrograms();
        renderAdminProgramList();
        const prgCount = document.getElementById("admin-modal-prg-count");
        if (prgCount) prgCount.innerText = RegisteredPrograms.length;
        showToast(`'${title}' 프로그램이 삭제되었습니다.`);
    }
};

function initSurveyForm() {
    const form = document.getElementById("intent-form");
    const adminModal = document.getElementById("admin-modal");
    const btnOpenAdminModal = document.getElementById("btn-open-admin-modal");
    const btnCloseAdminModal = document.getElementById("btn-close-admin-modal");
    const adminLoginForm = document.getElementById("admin-login-form");
    const adminLogoutBtn = document.getElementById("btn-admin-logout");
    const adminAuthError = document.getElementById("admin-auth-error");
    const adminPasswordInput = document.getElementById("admin-password");
    
    // Load stored items from localStorage
    loadSubmittedPrograms();
    loadRegisteredPrograms();

    // Cross-tab real-time sync for localStorage
    window.addEventListener("storage", (e) => {
        if (e.key === "tq_submitted_programs") {
            loadSubmittedPrograms();
            if (isAdminLoggedIn) {
                renderSubmittedPrograms();
            }
        } else if (e.key === "tq_registered_custom_programs") {
            loadRegisteredPrograms();
            if (isAdminLoggedIn) {
                renderAdminProgramList();
            }
        }
    });

    // Admin Modal Tab Switching
    const adminTabs = document.querySelectorAll("#admin-tabs .admin-nav-tab-btn");
    const paneCompanies = document.getElementById("admin-pane-companies");
    const panePrograms = document.getElementById("admin-pane-programs");

    adminTabs.forEach(tabBtn => {
        tabBtn.addEventListener("click", () => {
            adminTabs.forEach(b => b.classList.remove("active"));
            tabBtn.classList.add("active");
            const target = tabBtn.getAttribute("data-admin-tab");
            if (target === "programs") {
                if (paneCompanies) paneCompanies.style.display = "none";
                if (panePrograms) panePrograms.style.display = "block";
                renderAdminProgramList();
            } else {
                if (paneCompanies) paneCompanies.style.display = "block";
                if (panePrograms) panePrograms.style.display = "none";
                renderSubmittedPrograms();
            }
        });
    });

    // Open modal popup
    if (btnOpenAdminModal && adminModal) {
        btnOpenAdminModal.addEventListener("click", () => {
            adminModal.style.display = "flex";
            updateAdminUI();
            if (!isAdminLoggedIn && adminPasswordInput) {
                setTimeout(() => adminPasswordInput.focus(), 100);
            }
        });
    }

    // Close modal popup
    const closeModal = () => {
        if (adminModal) adminModal.style.display = "none";
    };

    if (btnCloseAdminModal) {
        btnCloseAdminModal.addEventListener("click", closeModal);
    }

    // Close on clicking backdrop
    if (adminModal) {
        adminModal.addEventListener("click", (e) => {
            if (e.target === adminModal) {
                closeModal();
            }
        });
    }

    // Close on Escape key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && adminModal && adminModal.style.display === "flex") {
            closeModal();
        }
    });

    // Admin login form handler
    if (adminLoginForm) {
        adminLoginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const enteredPw = adminPasswordInput.value.trim();

            if (enteredPw === ADMIN_PASSWORD) {
                isAdminLoggedIn = true;
                sessionStorage.setItem("tq_admin_logged", "true");
                if (adminAuthError) adminAuthError.style.display = "none";
                updateAdminUI();
                showToast("관리자 인증 성공! 등록업체 목록을 조회합니다.");
            } else {
                if (adminAuthError) {
                    adminAuthError.style.display = "block";
                }
                adminPasswordInput.value = "";
                adminPasswordInput.focus();
                showToast("관리자 비밀번호가 일치하지 않습니다.");
            }
        });
    }

    // Admin logout button handler
    if (adminLogoutBtn) {
        adminLogoutBtn.addEventListener("click", () => {
            isAdminLoggedIn = false;
            sessionStorage.removeItem("tq_admin_logged");
            updateAdminUI();
            showToast("관리자 로그아웃 되었습니다.");
        });
    }

    // Applicant submission form handler
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            // Get text and select values
            const orgName = document.getElementById("survey-org-name").value.trim();
            const repName = document.getElementById("survey-rep-name").value.trim();
            const contact = document.getElementById("survey-contact").value.trim();
            const sido = document.getElementById("survey-address-sido") ? document.getElementById("survey-address-sido").value : "";
            const sigungu = document.getElementById("survey-address-sigungu") ? document.getElementById("survey-address-sigungu").value.trim() : "";
            const staffCount = parseInt(document.getElementById("survey-staff-count").value) || 1;
            const region = document.getElementById("survey-region").value;
            const desc = document.getElementById("survey-description").value.trim();

            // Get multi-selected specialties
            const selectedCheckboxes = Array.from(document.querySelectorAll('input[name="survey-specialty"]:checked'));
            const specialtyError = document.getElementById("specialty-error");

            if (selectedCheckboxes.length === 0) {
                if (specialtyError) specialtyError.style.display = "flex";
                showToast("주요 전문 분야를 최소 1개 이상 선택해 주세요.");
                return;
            } else {
                if (specialtyError) specialtyError.style.display = "none";
            }

            const selectedSpecialties = selectedCheckboxes.map(cb => cb.value);
            const fullAddress = sido ? `${sido} ${sigungu}` : sigungu;

            // Formatted timestamp
            const now = new Date();
            const formattedDate = `${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, '0')}.${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

            // Build data structure with unique ID and permanent timestamp
            const newItem = {
                id: "sub_" + Date.now() + "_" + Math.random().toString(36).substring(2, 6),
                orgName,
                repName,
                contact,
                sido,
                sigungu,
                address: fullAddress,
                staffCount,
                specialty: selectedSpecialties,
                region,
                desc,
                submittedAt: formattedDate
            };

            // Reload latest before pushing to avoid overwriting multi-tab submissions
            loadSubmittedPrograms();

            // Add, save permanently to localStorage, and update view
            SubmittedPrograms.push(newItem);
            saveSubmittedPrograms(newItem);
            
            if (isAdminLoggedIn) {
                renderSubmittedPrograms();
            }

            // Clear all input fields
            document.getElementById("survey-org-name").value = "";
            document.getElementById("survey-rep-name").value = "";
            document.getElementById("survey-contact").value = "";
            if (document.getElementById("survey-address-sigungu")) {
                document.getElementById("survey-address-sigungu").value = "";
            }
            document.getElementById("survey-staff-count").value = "";
            document.getElementById("survey-description").value = "";
            
            // Reset specialty checkboxes (set first one checked)
            document.querySelectorAll('input[name="survey-specialty"]').forEach((cb, idx) => {
                cb.checked = (idx === 0);
            });

            // Show toast confirmation
            showToast(`'${orgName}' 산림복지 전문업체 참여 신청이 영구 저장되었습니다!`);
        });
    }
}

// --- 9. Forest Welfare Experience Program Registration (Section 14) ---
let currentVerifiedCompany = null;

function initProgramRegistration() {
    const phoneInput = document.getElementById("auth-phone-input");
    const programForm = document.getElementById("custom-program-form");
    if (!phoneInput && !programForm) return;

    const btnVerifyPhone = document.getElementById("btn-verify-phone");
    const successBanner = document.getElementById("auth-success-banner");
    const failBanner = document.getElementById("auth-fail-banner");
    const btnResetAuth = document.getElementById("btn-reset-phone-auth");
    
    const companyNameEl = document.getElementById("auth-company-name");
    const repNameEl = document.getElementById("auth-rep-name");
    const locationEl = document.getElementById("auth-location");
    const contactNumEl = document.getElementById("auth-contact-num");
    
    const lockedPlaceholder = document.getElementById("reg-locked-placeholder");
    const activeFormWrapper = document.getElementById("reg-active-form-wrapper");
    const regProviderName = document.getElementById("reg-provider-name");

    // Helper to clean phone digits for matching
    const cleanDigits = (str) => String(str || "").replace(/[^0-9]/g, "");

    const lockProgramForm = () => {
        currentVerifiedCompany = null;
        if (successBanner) successBanner.style.display = "none";
        if (failBanner) failBanner.style.display = "none";
        if (lockedPlaceholder) lockedPlaceholder.style.display = "block";
        if (activeFormWrapper) activeFormWrapper.style.display = "none";
        if (phoneInput) {
            phoneInput.disabled = false;
            phoneInput.value = "";
        }
    };

    const unlockProgramForm = (company) => {
        currentVerifiedCompany = company;
        if (failBanner) failBanner.style.display = "none";
        if (successBanner) successBanner.style.display = "block";
        if (lockedPlaceholder) lockedPlaceholder.style.display = "none";
        if (activeFormWrapper) activeFormWrapper.style.display = "block";

        if (companyNameEl) companyNameEl.innerText = company.orgName;
        if (repNameEl) repNameEl.innerText = company.repName;
        const addrDisplay = company.address || (company.sido ? `${company.sido} ${company.sigungu || ''}` : company.region);
        if (locationEl) locationEl.innerText = addrDisplay;
        if (contactNumEl) contactNumEl.innerText = company.contact;
        if (regProviderName) regProviderName.innerText = company.orgName;

        if (phoneInput) phoneInput.disabled = true;
    };

    // Verify Phone Button Handler
    if (btnVerifyPhone && phoneInput) {
        btnVerifyPhone.addEventListener("click", () => {
            const rawPhone = phoneInput.value.trim();
            const phoneDigits = cleanDigits(rawPhone);

            if (!phoneDigits || phoneDigits.length < 8) {
                showToast("올바른 전화번호를 입력해 주세요 (최소 8자리 이상).");
                phoneInput.focus();
                return;
            }

            // Sync latest submissions from storage
            loadSubmittedPrograms();

            // Find matching company by contact digits or raw text match
            const matched = SubmittedPrograms.find(p => {
                const compDigits = cleanDigits(p.contact);
                return compDigits === phoneDigits || (p.contact && p.contact.includes(rawPhone));
            });

            if (matched) {
                unlockProgramForm(matched);
                showToast(`'${matched.orgName}' 전문업체 인증 성공! 프로그램 등록 폼이 열렸습니다.`);
            } else {
                currentVerifiedCompany = null;
                if (successBanner) successBanner.style.display = "none";
                if (failBanner) failBanner.style.display = "block";
                if (lockedPlaceholder) lockedPlaceholder.style.display = "block";
                if (activeFormWrapper) activeFormWrapper.style.display = "none";
                showToast("등록된 참여 신청 내역을 찾을 수 없습니다. 번호를 확인해 주세요.");
            }
        });

        // Trigger verify on Enter in phoneInput
        phoneInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                btnVerifyPhone.click();
            }
        });
    }

    // Reset Auth Button Handler
    if (btnResetAuth) {
        btnResetAuth.addEventListener("click", () => {
            lockProgramForm();
            if (phoneInput) phoneInput.focus();
            showToast("전화번호 인증이 초기화되었습니다.");
        });
    }

    // Preset thumbnail image dictionary
    const presetImages = {
        dye: {
            url: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600",
            fallback: svgNaturalDye
        },
        tree: {
            url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=600",
            fallback: svgForestCommentary
        },
        rope: {
            url: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=600",
            fallback: svgZiplineFly
        },
        trail: {
            url: "https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?auto=format&fit=crop&q=80&w=600",
            fallback: svgBarefootTrekking
        }
    };

    // Custom Program Form Submission
    if (programForm) {
        programForm.addEventListener("submit", (e) => {
            e.preventDefault();

            if (!currentVerifiedCompany) {
                showToast("먼저 STEP 1에서 등록 전문업체 전화번호를 인증해 주세요.");
                return;
            }

            // Collect selected days
            const dayCheckboxes = Array.from(document.querySelectorAll('input[name="prg-days"]:checked'));
            const selectedDays = dayCheckboxes.length > 0 ? dayCheckboxes.map(cb => cb.value) : ["상시"];

            // Collect selected image preset
            const selectedImgRadio = document.querySelector('input[name="prg-reg-img"]:checked');
            const imgKey = selectedImgRadio ? selectedImgRadio.value : "dye";
            const imgData = presetImages[imgKey] || presetImages.dye;

            const title = document.getElementById("prg-reg-title").value.trim();
            const category = document.getElementById("prg-reg-category").value;
            const mode = document.getElementById("prg-reg-mode").value;
            const region = document.getElementById("prg-reg-region").value;
            const targetVal = document.getElementById("prg-reg-target").value;
            const location = document.getElementById("prg-reg-location").value.trim();
            const duration = parseInt(document.getElementById("prg-reg-duration").value) || 60;
            const price = parseInt(document.getElementById("prg-reg-price").value) || 0;
            const minCost = parseInt(document.getElementById("prg-reg-min-cost").value) || 0;
            const minPeople = parseInt(document.getElementById("prg-reg-min-people").value) || 1;
            const maxPeople = parseInt(document.getElementById("prg-reg-max-people").value) || 20;
            const runTime = document.getElementById("prg-reg-run-time").value.trim();
            const desc = document.getElementById("prg-reg-desc").value.trim();
            const prep = document.getElementById("prg-reg-prep").value.trim();
            const rain = document.getElementById("prg-reg-rain").value.trim();
            const cancel = document.getElementById("prg-reg-cancel").value.trim();

            const targetArray = (targetVal === "all") ? ["family", "kids", "healing", "sports"] : [targetVal];

            // Formatted timestamp
            const now = new Date();
            const formattedDate = `${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, '0')}.${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

            const newProgram = {
                id: "cprg_" + Date.now() + "_" + Math.random().toString(36).substring(2, 6),
                title,
                category,
                mode,
                region,
                target: targetArray,
                location,
                duration,
                price,
                minCost,
                minPeople,
                maxPeople,
                runDays: selectedDays,
                runTime,
                description: desc,
                preparations: prep,
                rainPolicy: rain,
                cancelPolicy: cancel,
                imageUrl: imgData.url,
                fallbackUrl: imgData.fallback,
                provider: currentVerifiedCompany.orgName,
                companyId: currentVerifiedCompany.id,
                contact: currentVerifiedCompany.contact,
                repName: currentVerifiedCompany.repName,
                registeredAt: formattedDate
            };

            // Reload latest programs from storage before saving
            loadRegisteredPrograms();
            RegisteredPrograms.push(newProgram);
            saveRegisteredPrograms(newProgram);

            // If admin is open/logged in, refresh
            if (isAdminLoggedIn) {
                renderAdminProgramList();
            }

            // Reset form fields
            document.getElementById("prg-reg-title").value = "";
            document.getElementById("prg-reg-location").value = "";
            document.getElementById("prg-reg-desc").value = "";
            
            showToast(`'${title}' 체험 프로그램이 성공적으로 등록되어 영구 저장되었습니다!`);
        });
    }
}

// --- 10. Toast Popup Helper ---
function showToast(text) {
    const toast = document.getElementById("toast");
    const toastText = document.getElementById("toast-text");

    toastText.innerText = text;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3500);
}

