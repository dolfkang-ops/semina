// ==========================================================================
//  가평·양평 숲체험 × 캠핑 융합사업 세미나 JavaScript
//  Scroll Spy, Program Matching, Mobile Simulator, Tabs, Form Registration
// ==========================================================================

// --- 1. Mock Database (Derived from TQ_Project_3) ---
const ForestPrograms = [
    {
        id: "prg_05",
        title: "숲속 가족 생태 어드벤처",
        category: "숲체험",
        region: "가평군",
        target: ["family", "kids"],
        mode: "캠핑장 방문형",
        price: 10000,
        duration: 90,
        provider: "가평 산림복지교육회",
        description: "전문 생태 교육 강사님이 직접 캠핑장으로 방문하여 캠핑장 내부 정원과 인근 숲속 산책로에서 곤충 및 식물을 함께 탐색하는 가족 맞춤형 숲 탐험 프로그램입니다.",
        imageUrl: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: "prg_06",
        title: "신나는 밧줄놀이터 체험",
        category: "산림레포츠",
        region: "가평군",
        target: ["kids"],
        mode: "캠핑장 방문형",
        price: 12000,
        duration: 120,
        provider: "가평 산림레포츠 연합",
        description: "캠핑장에 자라나는 큰 나무 사이에 튼튼한 로프를 연결하여 짚라인, 로프 그네, 흔들다리 등 어린이 맞춤형 친환경 모험 놀이터를 구성하는 모험 스포츠 프로그램입니다.",
        imageUrl: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: "prg_07",
        title: "다이내믹 플라잉 디스크 트레킹",
        category: "산림레포츠",
        region: "양평군",
        target: ["sports"],
        mode: "외부 체험장 이동형",
        price: 8000,
        duration: 120,
        provider: "양평 숲스포츠클럽",
        description: "숲길을 가볍게 트레킹하며 코스별로 설치된 특수 바스켓 골대에 소프트 플라잉 디스크를 던져 넣는, 남녀노소 즐겁게 내기할 수 있는 숲 스포츠 프로그램입니다.",
        imageUrl: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: "prg_08",
        title: "숲속 그린 스테이 (해먹 치유)",
        category: "숲체험",
        region: "양평군",
        target: ["family", "healing"],
        mode: "외부 체험장 이동형",
        price: 6000,
        duration: 120,
        provider: "양평 산림치유원",
        description: "소나무가 가득한 치유의 숲지대에 1인용 해먹을 직접 설치하고, 나무 그늘 아래 누워 전문 산림치유사의 힐링 사운드와 함께 피톤치드 명상을 즐기는 웰니스 프로그램입니다.",
        imageUrl: "forest_hammock.png"
    },
    {
        id: "prg_12",
        title: "산림 휴식형 스트레칭과 심신 요가",
        category: "숲체험",
        region: "가평군",
        target: ["healing", "family"],
        mode: "캠핑장 방문형",
        price: 10000,
        duration: 90,
        provider: "가평 요가앤숲 아카데미",
        description: "캠핑장의 상쾌한 아침을 열어주는 방문형 스트레칭 교실입니다. 싱그러운 새벽 공기와 피톤치드를 호흡하며 몸의 정렬과 피로를 푸는 심신 웰빙 프로그램입니다.",
        imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400"
    }
];

// --- 2. Initialize App and Elements ---
document.addEventListener("DOMContentLoaded", () => {
    initScrollSpy();
    initCounterAnimations();
    initProgramMatcher();
    initCamperSimulator();
    initStakeholderTabs();
    initSurveyForm();
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
                if (selectedRegion === "gapyeong" && prg.region !== "가평군") return false;
                if (selectedRegion === "yangpyeong" && prg.region !== "양평군") return false;
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
        const cardHtml = `
            <div class="sim-program-card">
                <div class="sim-img-box">
                    <img src="${prg.imageUrl}" alt="${prg.title}" loading="lazy">
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
                </div>
            </div>
        `;
        container.innerHTML += cardHtml;
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

// --- 8. Survey Intent Registration Form ---
const SubmittedPrograms = [];

function loadSubmittedPrograms() {
    const saved = localStorage.getItem("tq_submitted_programs");
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            SubmittedPrograms.length = 0;
            parsed.forEach(p => SubmittedPrograms.push(p));
        } catch (e) {
            console.error("Failed to load submitted programs", e);
        }
    }
}

function saveSubmittedPrograms() {
    localStorage.setItem("tq_submitted_programs", JSON.stringify(SubmittedPrograms));
}

function renderSubmittedPrograms() {
    const container = document.getElementById("mock-preview-result");
    
    if (SubmittedPrograms.length === 0) {
        container.classList.remove("has-items");
        container.innerHTML = `
            <div class="mock-card-empty-state">
                <i class="fa-solid fa-arrows-spin fa-spin"></i>
                <p>왼쪽 폼을 입력하고 제출하시면 여기에 가상 등록 전문업체 프로필 카드가 누적 렌더링됩니다.</p>
            </div>
        `;
        return;
    }

    container.classList.add("has-items");
    container.innerHTML = "";

    // Render in reverse chronological order (newest first)
    for (let i = SubmittedPrograms.length - 1; i >= 0; i--) {
        const prg = SubmittedPrograms[i];
        const cardHtml = `
            <div class="submitted-card" data-index="${i}">
                <div class="submitted-card-hdr">
                    <span class="sub-org">${prg.orgName}</span>
                    <span class="sub-cat">${prg.specialty}</span>
                    <button class="btn-delete-card" onclick="deleteSubmittedProgram(${i})" title="업체 삭제"><i class="fa-solid fa-trash"></i></button>
                </div>
                <div class="submitted-card-body">
                    <h4>대표자/담당자: ${prg.repName}</h4>
                    <p class="sub-desc" style="margin-top: 8px;">${prg.desc}</p>
                    <div class="sub-meta-grid" style="grid-template-columns: repeat(2, 1fr);">
                        <div class="meta-field">활동지역 <span>${prg.region}</span></div>
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

// Global deletion function bound to window
window.deleteSubmittedProgram = function(index) {
    if (confirm("등록된 전문업체 정보를 삭제하시겠습니까?")) {
        const title = SubmittedPrograms[index].orgName;
        SubmittedPrograms.splice(index, 1);
        saveSubmittedPrograms();
        renderSubmittedPrograms();
        showToast(`'${title}' 업체 정보가 삭제되었습니다.`);
    }
};

function initSurveyForm() {
    const form = document.getElementById("intent-form");
    
    // Load and render stored items initially
    loadSubmittedPrograms();
    renderSubmittedPrograms();

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Get values
        const orgName = document.getElementById("survey-org-name").value;
        const repName = document.getElementById("survey-rep-name").value;
        const contact = document.getElementById("survey-contact").value;
        const staffCount = parseInt(document.getElementById("survey-staff-count").value) || 1;
        const specialty = document.getElementById("survey-specialty").value;
        const region = document.getElementById("survey-region").value;
        const desc = document.getElementById("survey-description").value;

        // Build data structure
        const newItem = {
            orgName,
            repName,
            contact,
            staffCount,
            specialty,
            region,
            desc
        };

        // Add, save, and render
        SubmittedPrograms.push(newItem);
        saveSubmittedPrograms();
        renderSubmittedPrograms();

        // Clear all fields
        document.getElementById("survey-org-name").value = "";
        document.getElementById("survey-rep-name").value = "";
        document.getElementById("survey-contact").value = "";
        document.getElementById("survey-staff-count").value = "";
        document.getElementById("survey-description").value = "";

        // Show toast confirmation
        showToast(`'${orgName}' 전문업체 참여 신청이 가상 접수되었습니다!`);
    });
}

// --- 9. Toast Popup Helper ---
function showToast(text) {
    const toast = document.getElementById("toast");
    const toastText = document.getElementById("toast-text");

    toastText.innerText = text;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3500);
}
