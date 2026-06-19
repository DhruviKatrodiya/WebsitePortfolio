/* =========================================================
   SINGLE SOURCE OF TRUTH
   Edit these objects to update both the site and the résumé.
   ========================================================= */
let profile = {
  name: "Dhruvi Katrodiya",
  title: "Senior Software Developer",
  location: "Ahmedabad, India",
  email: "dhruvirasadiya2211@gmail.com",
  links: {
    LinkedIn: "https://www.linkedin.com/in/dhruvi-katrodiya",
    GitHub: "https://github.com/DhruviKatrodiya",
  },
  summary:
    "Senior Software Developer with 4.5 years of experience in the Microsoft technology stack. Skilled in designing, developing, and maintaining web applications, APIs, middleware, and cloud-based integrations using C#, ASP.NET Core, Azure Functions, SQL Server, and Angular. Passionate about building scalable, reliable software, solving challenging integration problems, and continuously learning new technologies.",
};

/* Experience grouped by company (used by timeline + résumé) */
let experience = [
  {
    role: "Software Developer",
    company: "Akkomplish Consulting Services",
    period: "Jun 2025 – Present",
    location: "Ahmedabad",
    blurb:
      "Building Azure Functions for data synchronization, enhancing enterprise APIs and portals, integrating Stripe payments, performing Docker-based deployments, and driving cross-project issue resolution.",
    tags: ["Azure Functions", "Stripe", "Docker", "REST APIs"],
    bullets: [
      "Designed and developed 30+ Azure Functions for data synchronization (GP_Addresses through GP_PricingPromoFree), including database migrations and schema updates.",
      "Enhanced Stripe payment integration by implementing and testing custom payment-processing workflows.",
      "Built and optimized APIs for Email Configuration, Project Management, and Markup Setup; added validation APIs; tuned Log4Net and handled Docker-based deployment.",
      "Implemented attachment management and UI improvements for Purchase Order modules in BCPortal, with end-to-end testing of PO workflows.",
      "Authored a comprehensive user manual with Claude AI and designed User/Owner/Super-Admin UX prototypes in Stitch, backed by US rental-market research.",
      "Resolved cross-project API, integration, and data-synchronization issues through debugging and root-cause analysis.",
    ],
  },
  {
    role: "Software Developer",
    company: "Bigscal Technologies Pvt. Ltd.",
    period: "Jan 2023 – Dec 2024",
    location: "Surat",
    blurb:
      "Developed RESTful Web APIs and led delivery on utility management and fire safety systems for GIFT City — covering workflows, payments, role-based access, and regulatory compliance modules.",
    tags: [".NET Core", "Web API", "MySQL", "JWT", "CCAvenue"],
    bullets: [
      "Developed and maintained RESTful Web APIs for the Supplier Portal, integrating with enterprise applications to automate business workflows.",
      "Enhanced the GIFT City Utilities Management System: meter management, tax invoicing, demand estimation, payment processing, role-based access control, and approval workflows including offline payment reconciliation.",
      "Led the development team for the Fire Safety Management System (GIFT City), building compliance workflows and inspection scheduling/approval modules and delivering milestones on time.",
      "Tech: .NET Core Web API on an N-tier layered architecture with MySQL and JWT authentication; integrated the CCAvenue payment gateway.",
    ],
  },
];

let projects = [
  { icon: "🤝", company: "Bigscal Technologies", title: "Supplier Portal", desc: "Built and maintained RESTful Web APIs enabling seamless data exchange between suppliers and backend systems, integrated with enterprise apps to automate workflows.", tags: [".NET Core", "Web API", "Integration"] },
  { icon: "⚡", company: "Bigscal · GIFT City", title: "Utilities Management System", desc: "Enhanced power & utility services — meter management, tax invoicing, demand estimation, payment processing, role-based access control, and approval workflows.", tags: ["Workflows", "RBAC", "Payments", "Reporting"] },
  { icon: "🔥", company: "Bigscal · GIFT City", title: "Fire Safety Management System", desc: "Led the development team — built fire safety & compliance workflows, inspection scheduling and approval modules, and delivered milestones on time.", tags: ["Team Lead", "Compliance", "Scheduling"] },
  { icon: "📦", company: "Akkomplish", title: "BCPortal", desc: "Implemented attachment management for Purchase Orders, enhanced the Resource Management module UI, and validated end-to-end PO workflows for stability.", tags: ["Purchase Orders", "UI/UX", "Testing"] },
  { icon: "🔄", company: "Akkomplish", title: "CousinMiddleware", desc: "Designed and developed 30+ Azure Functions for data synchronization, ran database migrations, and resolved data-type inconsistencies across source systems.", tags: ["Azure Functions", "Sync", "Migrations"] },
  { icon: "💳", company: "Akkomplish", title: "Ekkaam", desc: "Enhanced Stripe payment workflows, authored a user manual with Claude AI, ran US rental-market research, and designed User/Owner/Admin prototypes in Stitch.", tags: ["Stripe", "Claude AI", "Stitch", "Research"] },
  { icon: "✉️", company: "Akkomplish", title: "Email Management System", desc: "Built APIs for Email Configuration, Project Management & Markup Setup, added validation APIs, tuned Log4Net, and handled Docker-based deployment.", tags: ["REST APIs", "Docker", "Log4Net"] },
  { icon: "🛠️", company: "Akkomplish", title: "Vendor Management", desc: "Diagnosed and resolved user registration workflow issues, managed assembly reference updates and dependency resolution for clean builds and deployments.", tags: ["Debugging", "Builds", "Dependencies"] },
  { icon: "🛒", company: "Built with Claude AI", title: "Sales Application", desc: "Full-stack platform to digitize a distribution business — product catalog, real-time inventory and godown dispatch, customer management, order & payment processing, sales reports/dashboard, and secure JWT auth with email-OTP recovery. Built on ASP.NET Core (.NET 10) and Angular 22, deployed via Docker Compose.", tags: ["Claude AI", ".NET 10", "Angular 22", "SQL Server", "Docker"] },
  { icon: "✈️", company: "Built with Claude AI", title: "Travel Management System", desc: "Full-stack tourism platform for booking and managing travel packages across India, Bhutan & Nepal — customers browse tours, book, pay, and track travel history, while admins manage tours, itineraries, logistics, finances, and reviews. Secure JWT auth with a flexible role/permission framework and real-time reporting. Built on ASP.NET Core Web API, Angular, and SQL Server.", tags: ["Claude AI", "ASP.NET Core", "Angular", "SQL Server", "JWT"] },
];

let skillCategories = [
  { icon: "⚙️", title: "Backend", items: ["C#", "ASP.NET Core Web API", "Azure Functions", "Entity Framework", "REST APIs", "SQL Server"] },
  { icon: "🎨", title: "Frontend", items: ["Angular", "HTML5", "CSS3", "JavaScript", "TypeScript"] },
  { icon: "☁️", title: "Cloud & DevOps", items: ["Microsoft Azure", "Azure Functions", "Docker", "CI/CD Concepts"] },
  { icon: "✅", title: "Testing & Quality", items: ["API Testing", "Debugging"] },
  { icon: "🤖", title: "AI & Productivity", items: ["Claude AI", "Stitch (Google)"] },
  { icon: "🧰", title: "Tools & Platforms", items: ["Git", "GitHub", "Azure DevOps", "Postman", "Log4Net"] },
];

let newSkills = [
  { icon: "📦", label: "Docker" },
  { icon: "🤖", label: "Claude AI" },
  { icon: "🎨", label: "Stitch (Google)" },
  { icon: "🧪", label: "Moq Framework" },
  { icon: "🧭", label: "Angular Walkthrough Wizard" },
];

let education = [
  { degree: "M.Sc. — Information & Communication Technology", school: "Veer Narmad South Gujarat University, Surat", period: "Sep 2021 – Jul 2023" },
  { degree: "Bachelor of Computer Application", school: "Veer Narmad South Gujarat University, Surat", period: "Aug 2018 – Apr 2021" },
];

/* =========================================================
   REACTIVITY
   Any add / edit / delete on the data above re-renders the site
   AND the résumé preview immediately — no page refresh needed.
   Change data live via window.resumeData, e.g.:
     resumeData.projects.push({ icon: "🌟", company: "…", title: "…", desc: "…", tags: [] });
     resumeData.profile.phone = "1234567890";
     resumeData.skillCategories[0].items.push("GraphQL");
   ========================================================= */
let _rerenderQueued = false;
function scheduleRerender() {
  if (_rerenderQueued) return;
  _rerenderQueued = true;
  Promise.resolve().then(() => {
    _rerenderQueued = false;
    renderSite();
    initReveal();
    buildResume();
  });
}

function reactive(target) {
  if (target === null || typeof target !== "object") return target;
  Object.keys(target).forEach((k) => { target[k] = reactive(target[k]); });
  return new Proxy(target, {
    set(obj, prop, value) { obj[prop] = reactive(value); scheduleRerender(); return true; },
    deleteProperty(obj, prop) { delete obj[prop]; scheduleRerender(); return true; },
  });
}

profile = reactive(profile);
experience = reactive(experience);
projects = reactive(projects);
skillCategories = reactive(skillCategories);
newSkills = reactive(newSkills);
education = reactive(education);

// Single handle for live edits (console / future editor UI).
window.resumeData = { profile, experience, projects, skillCategories, newSkills, education };

/* ========================= RENDER SITE ========================= */
function escapeAttr(s) { return String(s).replace(/"/g, "&quot;"); }

function renderSite() {
  document.querySelectorAll("[data-name]").forEach((el) => (el.textContent = profile.name));
  document.title = `${profile.name} — ${profile.title}`;
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("contactEmail").href = `mailto:${profile.email}`;

  document.getElementById("timeline").innerHTML = experience
    .map(
      (e) => `
      <div class="timeline__item reveal">
        <div class="timeline__dot"></div>
        <div class="timeline__content">
          <div class="timeline__head">
            <h3>${e.role}</h3>
            <span class="timeline__company">${e.company}</span>
          </div>
          <p class="timeline__meta">${e.period} · ${e.location}</p>
          <p class="timeline__desc">${e.blurb}</p>
          <ul class="tags">${e.tags.map((t) => `<li>${t}</li>`).join("")}</ul>
        </div>
      </div>`
    )
    .join("");

  document.getElementById("projectsGrid").innerHTML = projects
    .map(
      (p) => `
      <article class="project reveal">
        <div class="project__icon">${p.icon}</div>
        <span class="project__company">${p.company}</span>
        <h3 class="project__title">${p.title}</h3>
        <p class="project__desc">${p.desc}</p>
        <ul class="tags">${p.tags.map((t) => `<li>${t}</li>`).join("")}</ul>
      </article>`
    )
    .join("");

  document.getElementById("skillsGrid").innerHTML = skillCategories
    .map(
      (c) => `
      <div class="skill-cat reveal">
        <h3>${c.icon} ${c.title}</h3>
        <ul>${c.items.map((i) => `<li>${i}</li>`).join("")}</ul>
      </div>`
    )
    .join("");

  document.getElementById("newSkills").innerHTML = newSkills
    .map((s) => `<div class="new-skill"><span>${s.icon}</span><span>${s.label}</span></div>`)
    .join("");

  document.getElementById("socials").innerHTML = [
    `<a href="mailto:${profile.email}">Email</a>`,
    ...Object.entries(profile.links).map(([k, v]) => `<a href="${escapeAttr(v)}" target="_blank" rel="noopener">${k}</a>`),
  ].join("");
}

/* ========================= BUILD RÉSUMÉ ========================= */
function buildResume() {
  const contactBits = [
    profile.location && `📍 ${profile.location}`,
    profile.email && `✉️ ${profile.email}`,
    ...Object.entries(profile.links).map(([k, v]) => (v && v !== "#" ? `🔗 ${k}: ${v.replace(/^https?:\/\//, "")}` : `🔗 ${k}`)),
  ].filter(Boolean);

  const expHtml = experience
    .map(
      (e) => `
      <div class="resume__job">
        <div class="resume__job-head">
          <div><span class="resume__job-title">${e.role}</span> · <span class="resume__job-co">${e.company}</span></div>
          <div class="resume__job-meta">${e.period} · ${e.location}</div>
        </div>
        <ul class="resume__bullets">${e.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>
      </div>`
    )
    .join("");

  const skillsHtml = skillCategories
    .map((c) => `<div class="resume__skill-row"><b>${c.title}:</b> ${c.items.join(", ")}</div>`)
    .join("");

  const projectsHtml = projects
    .map(
      (p) => `
      <div class="resume__job">
        <div class="resume__job-head">
          <div><span class="resume__job-title">${p.title}</span>${p.company ? ` · <span class="resume__job-co">${p.company}</span>` : ""}</div>
        </div>
        <p class="resume__summary" style="margin-top:4px;">${p.desc}</p>
      </div>`
    )
    .join("");

  const eduHtml = education
    .map(
      (e) => `
      <div class="resume__edu-item">
        <div class="resume__edu-deg">${e.degree}</div>
        <div class="resume__edu-meta">${e.school} · ${e.period}</div>
      </div>`
    )
    .join("");

  document.getElementById("resumePaper").innerHTML = `
    <div class="resume__header">
      <div class="resume__name">${profile.name}</div>
      <div class="resume__role">${profile.title}</div>
      <div class="resume__contact">${contactBits.map((c) => `<span>${c}</span>`).join("")}</div>
    </div>

    <div class="resume__section">
      <div class="resume__h">Professional Summary</div>
      <p class="resume__summary">${profile.summary}</p>
    </div>

    <div class="resume__section">
      <div class="resume__h">Technical Skills</div>
      <div class="resume__skills-grid">${skillsHtml}</div>
    </div>

    <div class="resume__section">
      <div class="resume__h">Professional Experience</div>
      ${expHtml}
    </div>

    <div class="resume__section">
      <div class="resume__h">Key Projects</div>
      ${projectsHtml}
    </div>

    <div class="resume__two">
      <div class="resume__section">
        <div class="resume__h">Education</div>
        ${eduHtml}
      </div>
      <div class="resume__section">
        <div class="resume__h">Recently Acquired</div>
        <ul class="resume__bullets" style="padding-left:16px;">
          ${newSkills.map((s) => `<li>${s.label}</li>`).join("")}
        </ul>
      </div>
    </div>
  `;
}

/* ========================= RÉSUMÉ PREVIEW MODAL + PDF ========================= */
function initResume() {
  const modal = document.getElementById("resumeModal");

  const open = () => {
    buildResume(); // always render from the current data
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };
  const close = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  ["navResume"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("click", open);
  });
  modal.querySelectorAll("[data-close]").forEach((el) => el.addEventListener("click", close));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && modal.classList.contains("open")) close(); });
}

/* ========================= INTERACTIONS ========================= */
let _revealObserver;
function initReveal() {
  if (_revealObserver) _revealObserver.disconnect(); // re-runnable after a re-render
  _revealObserver = new IntersectionObserver(
    (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); _revealObserver.unobserve(e.target); } }),
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => _revealObserver.observe(el));
}

function initCounters() {
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || "";
      const decimals = target % 1 !== 0 ? 1 : 0;
      let cur = 0;
      const step = target / 40;
      const tick = () => {
        cur += step;
        if (cur >= target) { el.textContent = target.toFixed(decimals) + suffix; }
        else { el.textContent = cur.toFixed(decimals) + suffix; requestAnimationFrame(tick); }
      };
      tick();
      io.unobserve(el);
    }),
    { threshold: 0.5 }
  );
  document.querySelectorAll(".stat__num").forEach((n) => io.observe(n));
}

function initNav() {
  const nav = document.getElementById("nav");
  const progress = document.getElementById("scrollProgress");
  const burger = document.getElementById("navBurger");
  const links = document.getElementById("navLinks");

  const onScroll = () => {
    nav.classList.toggle("nav--scrolled", window.scrollY > 10);
    const h = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + "%";
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  burger.addEventListener("click", () => { burger.classList.toggle("open"); links.classList.toggle("open"); });
  links.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => { burger.classList.remove("open"); links.classList.remove("open"); }));

  // Scroll-spy: underline the nav link of the section currently in view
  const navLinkEls = Array.from(links.querySelectorAll("a"));
  const spied = navLinkEls
    .map((a) => document.getElementById(a.getAttribute("href").slice(1)))
    .filter(Boolean);
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        navLinkEls.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + id));
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );
  spied.forEach((sec) => spy.observe(sec));
}

/* ========================= INIT ========================= */
renderSite();
initReveal();
initCounters();
initNav();
initResume();
