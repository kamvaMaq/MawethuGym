import { useEffect, useState } from "react";

type IconName =
  | "home"
  | "scan"
  | "users"
  | "register"
  | "wallet"
  | "bell"
  | "settings"
  | "download"
  | "plus"
  | "search"
  | "check"
  | "warning"
  | "clock"
  | "arrow"
  | "camera"
  | "qr"
  | "calendar"
  | "shield"
  | "eye"
  | "menu"
  | "close"
  | "logout"
  | "chevron"
  | "whatsapp"
  | "mail"
  | "trend"
  | "lock"
  | "receipt";

const paths: Record<IconName, React.ReactNode> = {
  home: (
    <>
      <path d="m3 11 9-8 9 8" />
      <path d="M5 10v10h14V10M9 20v-6h6v6" />
    </>
  ),
  scan: (
    <>
      <path d="M4 8V4h4M16 4h4v4M20 16v4h-4M8 20H4v-4" />
      <circle cx="12" cy="10" r="3" />
      <path d="M7.5 18c.8-2.4 2.3-3.6 4.5-3.6s3.7 1.2 4.5 3.6" />
    </>
  ),
  users: (
    <>
      <path d="M16 20c0-3-1.8-5-5-5s-5 2-5 5" />
      <circle cx="11" cy="8" r="4" />
      <path d="M17 11c2.3.2 3.5 1.5 3.5 3.8M17 4.5a3.5 3.5 0 0 1 0 6.5" />
    </>
  ),
  register: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 8h8M8 12h8M8 16h5" />
    </>
  ),
  wallet: (
    <>
      <path d="M3 7h16a2 2 0 0 1 2 2v9H5a2 2 0 0 1-2-2V7Z" />
      <path d="M3 7V5a2 2 0 0 1 2-2h12v4M16 12h5" />
    </>
  ),
  bell: (
    <>
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
      <path d="M10 21h4" />
    </>
  ),
  settings: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3A1.7 1.7 0 0 0 10 3v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z" />
    </>
  ),
  download: (
    <>
      <path d="M12 3v12M7 10l5 5 5-5" />
      <path d="M4 20h16" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m16 16 5 5" />
    </>
  ),
  check: <path d="m5 12 4.5 4.5L19 7" />,
  warning: (
    <>
      <path d="M12 3 2.8 20h18.4L12 3Z" />
      <path d="M12 9v4M12 17h.01" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  arrow: (
    <>
      <path d="m9 18 6-6-6-6" />
    </>
  ),
  camera: (
    <>
      <rect x="3" y="6" width="18" height="14" rx="3" />
      <path d="m8 6 1.5-2h5L16 6" />
      <circle cx="12" cy="13" r="4" />
    </>
  ),
  qr: (
    <>
      <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM15 14h2v2h-2zM19 14h1v3M14 19h3M20 20h-2" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M7 3v4M17 3v4M3 10h18" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5c0 4.7 2.8 8 7 10 4.2-2 7-5.3 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  eye: (
    <>
      <path d="M2.5 12S6 6.5 12 6.5 21.5 12 21.5 12 18 17.5 12 17.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="2.5" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  logout: (
    <>
      <path d="M10 5H4v14h6M14 8l4 4-4 4M8 12h10" />
    </>
  ),
  chevron: <path d="m9 18 6-6-6-6" />,
  whatsapp: (
    <>
      <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.4-4A8 8 0 1 1 20 11.5Z" />
      <path d="M9 8.5c.6 2.5 2 4 4.5 5l1.2-1" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  trend: (
    <>
      <path d="M4 17 9 12l4 3 7-8" />
      <path d="M15 7h5v5" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="10" width="14" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </>
  ),
  receipt: (
    <>
      <path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3Z" />
      <path d="M9 8h6M9 12h6M9 16h3" />
    </>
  ),
};

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}

const Avatar = ({ name, large = false }: { name: string; large?: boolean }) => (
  <div
    className={`avatar ${large ? "avatar-large" : ""}`}
    aria-label={`${name} placeholder avatar`}
  >
    {name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2)}
  </div>
);

function Status({
  type,
  children,
}: {
  type: "active" | "due" | "overdue" | "expired" | "neutral";
  children: React.ReactNode;
}) {
  return (
    <span className={`status status-${type}`}>
      <Icon
        name={type === "active" ? "check" : type === "expired" ? "clock" : "warning"}
        size={14}
      />
      {children}
    </span>
  );
}

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`logo ${compact ? "logo-compact" : ""}`}>
      <span className="logo-mark">M</span>
      {!compact && (
        <span>
          MAWETHU
          <br />
          <b>GYM</b>
        </span>
      )}
    </div>
  );
}

const Button = ({
  children,
  variant = "primary",
  icon,
  onClick,
  className = "",
  type = "button",
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "danger";
  icon?: IconName;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}) => (
  <button type={type} onClick={onClick} className={`button button-${variant} ${className}`}>
    {icon && <Icon name={icon} />}
    <span>{children}</span>
  </button>
);

function TopBar({
  title,
  eyebrow,
  onMenu,
}: {
  title: string;
  eyebrow?: string;
  onMenu?: () => void;
}) {
  return (
    <header className="topbar">
      <button className="icon-button mobile-only" onClick={onMenu} aria-label="Open menu">
        <Icon name="menu" />
      </button>
      <div>
        <p className="eyebrow">{eyebrow || "Staff workspace"}</p>
        <h1>{title}</h1>
      </div>
      <div className="top-actions">
        <button className="icon-button badge-button" aria-label="Notifications">
          <Icon name="bell" />
          <i>3</i>
        </button>
        <Avatar name="Mawethu Sombo" />
        <div className="staff-name">
          <strong>Mawethu Sombo</strong>
          <span>Admin</span>
        </div>
      </div>
    </header>
  );
}

const staffNav: { id: string; label: string; icon: IconName }[] = [
  { id: "dashboard", label: "Dashboard", icon: "home" },
  { id: "scanner", label: "Face scanner", icon: "scan" },
  { id: "members", label: "Members", icon: "users" },
  { id: "register", label: "Gym register", icon: "register" },
  { id: "payments", label: "Payments", icon: "wallet" },
  { id: "reminders", label: "Reminders", icon: "bell" },
  { id: "settings", label: "Settings", icon: "settings" },
];

function Sidebar({
  screen,
  setScreen,
  open,
  close,
}: {
  screen: string;
  setScreen: (s: string) => void;
  open: boolean;
  close: () => void;
}) {
  return (
    <>
      {open && <button className="sidebar-scrim" onClick={close} aria-label="Close menu" />}
      <aside className={`sidebar ${open ? "sidebar-open" : ""}`}>
        <Logo />
        <div className="location">
          <span className="live-dot" />
          <span>
            Front desk online
            <br />
            <b>Open until 21:00</b>
          </span>
        </div>
        <nav>
          {staffNav.map((item) => (
            <button
              key={item.id}
              className={screen === item.id ? "active" : ""}
              onClick={() => {
                setScreen(item.id);
                close();
              }}
            >
              <Icon name={item.icon} />
              <span>{item.label}</span>
              {item.id === "payments" && <em>8</em>}
            </button>
          ))}
        </nav>
        <div className="sidebar-help">
          <Icon name="whatsapp" />
          <div>
            <b>Need help?</b>
            <span>081 338 7620</span>
          </div>
        </div>
        <button className="logout">
          <Icon name="logout" /> Log out
        </button>
      </aside>
    </>
  );
}

function Metric({
  label,
  value,
  note,
  icon,
  tone = "",
}: {
  label: string;
  value: string;
  note: string;
  icon: IconName;
  tone?: string;
}) {
  return (
    <article className={`metric ${tone}`}>
      <div className="metric-icon">
        <Icon name={icon} />
      </div>
      <span>{label}</span>
      <strong>{value}</strong>
      <small>{note}</small>
    </article>
  );
}

function Dashboard({ go }: { go: (s: string) => void }) {
  return (
    <>
      <TopBar title="Good afternoon, Mawethu" />
      <main className="page">
        <section className="hero-strip">
          <div>
            <span className="pill">MONDAY · 9 NOV 2026</span>
            <h2>Your gym is moving.</h2>
            <p>124 members are active this month. Keep the momentum going.</p>
          </div>
          <div className="hero-stat">
            <Icon name="trend" size={26} />
            <strong>+12%</strong>
            <span>visits this week</span>
          </div>
        </section>
        <section className="metrics">
          <Metric label="Checked in today" value="47" note="8 more than yesterday" icon="check" />
          <Metric
            label="In gym now"
            value="18"
            note="Live count"
            icon="users"
            tone="metric-lemon"
          />
          <Metric
            label="Payments overdue"
            value="8"
            note="R2 080 outstanding"
            icon="warning"
            tone="metric-red"
          />
          <Metric
            label="Expiring this week"
            value="14"
            note="Reminders scheduled"
            icon="clock"
            tone="metric-amber"
          />
        </section>
        <section className="section-head">
          <div>
            <p className="eyebrow">Front desk</p>
            <h2>Quick actions</h2>
          </div>
        </section>
        <div className="quick-grid">
          <button className="quick-primary" onClick={() => go("scanner")}>
            <span>
              <Icon name="scan" size={32} />
            </span>
            <div>
              <b>Scan face</b>
              <small>Start a quick check-in</small>
            </div>
            <Icon name="arrow" />
          </button>
          <button className="quick" onClick={() => go("new-member")}>
            <Icon name="plus" />
            <span>Add member</span>
          </button>
          <button className="quick" onClick={() => go("register")}>
            <Icon name="register" />
            <span>View register</span>
          </button>
          <button className="quick" onClick={() => go("register")}>
            <Icon name="download" />
            <span>Download register</span>
          </button>
        </div>
        <div className="content-grid">
          <section className="card">
            <div className="card-head">
              <div>
                <p className="eyebrow">Live activity</p>
                <h3>Recent check-ins</h3>
              </div>
              <button className="text-button" onClick={() => go("register")}>
                View register <Icon name="arrow" size={16} />
              </button>
            </div>
            <div className="activity-list">
              {[
                ["Thabo Mokoena", "17:42", "Face"],
                ["Nomvula Khumalo", "17:36", "QR"],
                ["Sipho Baloyi", "17:28", "Manual"],
              ].map((r, i) => (
                <div className="activity-row" key={r[0]}>
                  <Avatar name={r[0]} />
                  <div>
                    <b>{r[0]}</b>
                    <span>
                      MG-{24018 + i} · {r[2]}
                    </span>
                  </div>
                  <time>{r[1]}</time>
                  <Status type={i === 2 ? "due" : "active"}>
                    {i === 2 ? "Due soon" : "Active"}
                  </Status>
                </div>
              ))}
            </div>
          </section>
          <section className="card attention-card">
            <div className="card-head">
              <div>
                <p className="eyebrow">Follow up</p>
                <h3>Needs attention</h3>
              </div>
              <span className="count">8</span>
            </div>
            <div className="attention-item">
              <span className="attention-icon">
                <Icon name="warning" />
              </span>
              <div>
                <b>Sipho Baloyi</b>
                <span>Payment 7 days overdue · R260</span>
              </div>
              <button className="icon-button">
                <Icon name="arrow" />
              </button>
            </div>
            <div className="attention-item">
              <span className="attention-icon amber">
                <Icon name="clock" />
              </span>
              <div>
                <b>6 memberships</b>
                <span>Expire in the next 3 days</span>
              </div>
              <button className="icon-button">
                <Icon name="arrow" />
              </button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

type ScanState = "scanning" | "active" | "overdue" | "unknown" | "error" | "manual";

function Scanner({ go }: { go: (s: string) => void }) {
  const [state, setState] = useState<ScanState>("scanning");
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    if (state !== "scanning") return;
    const t = window.setTimeout(() => setState("active"), 2400);
    const i = window.setInterval(() => setSeconds((s) => s + 1), 700);
    return () => {
      clearTimeout(t);
      clearInterval(i);
    };
  }, [state]);
  return (
    <div className="scanner-page">
      <div className="scanner-top">
        <Logo />
        <div className="scanner-live">
          <span className="live-dot" />
          Camera live
        </div>
        <div className="scanner-clock">
          <strong>17:42</strong>
          <span>Monday, 9 Nov</span>
        </div>
        <div className="scanner-count">
          <Icon name="users" />
          <span>
            <b>18</b> in gym now
          </span>
        </div>
        <Button variant="secondary" icon="search" onClick={() => setState("manual")}>
          Manual check-in
        </Button>
        <button className="icon-button" onClick={() => go("dashboard")} aria-label="Close scanner">
          <Icon name="close" />
        </button>
      </div>
      <div className="camera-stage">
        <div className="camera-grid" />
        {state === "scanning" && (
          <div className="scan-center">
            <div className="face-guide">
              <span className="corner c1" />
              <span className="corner c2" />
              <span className="corner c3" />
              <span className="corner c4" />
              <div className="face-silhouette">
                <Icon name="users" size={90} />
              </div>
              <div className="scan-line" />
            </div>
            <div className="scan-copy">
              <div className="pulse-dot" />
              <h2>{seconds > 1 ? "Blink to confirm" : "Look at the camera"}</h2>
              <p>
                {seconds > 1
                  ? "This quick check confirms it is really you."
                  : "Keep your face inside the oval."}
              </p>
            </div>
          </div>
        )}
        {state === "active" && (
          <div className="match-card match-active">
            <div className="success-orb">
              <Icon name="check" size={48} />
            </div>
            <Avatar name="Thabo Mokoena" large />
            <p className="eyebrow">Face matched</p>
            <h2>Welcome, Thabo!</h2>
            <span className="member-number">MG-24018 · 1 Month plan</span>
            <Status type="active">Membership active</Status>
            <p className="validity">
              Valid until <b>12 Dec 2026</b>
            </p>
            <div className="checked-message">
              <Icon name="check" />
              <span>
                <b>Checked in 17:42</b>Added to today’s register
              </span>
            </div>
            <div className="reset-bar">
              <i />
              <span>Ready for next member in 4 seconds</span>
            </div>
            <Button onClick={() => go("register")} icon="register">
              View register
            </Button>
          </div>
        )}
        {state === "overdue" && (
          <div className="match-card match-overdue">
            <div className="warning-orb">
              <Icon name="warning" size={34} />
            </div>
            <Avatar name="Sipho Baloyi" large />
            <p className="eyebrow">Face matched · MG-24020</p>
            <h2>Sipho Baloyi</h2>
            <Status type="overdue">Payment 7 days overdue</Status>
            <div className="amount-due">
              <span>Amount due</span>
              <strong>R260</strong>
              <small>Was due 2 Nov 2026</small>
            </div>
            <Button icon="wallet" onClick={() => go("record-payment")}>
              Record payment
            </Button>
            <Button variant="secondary" icon="check" onClick={() => setState("active")}>
              Allow entry once
            </Button>
            <p className="helper">
              <Icon name="shield" size={16} /> Override will be logged in the register
            </p>
          </div>
        )}
        {state === "unknown" && (
          <div className="match-card">
            <div className="unknown-orb">
              <Icon name="search" size={34} />
            </div>
            <p className="eyebrow">No match found</p>
            <h2>We don’t recognise this face</h2>
            <p className="muted">Move into better light and keep your face inside the guide.</p>
            <Button icon="scan" onClick={() => setState("scanning")}>
              Try again
            </Button>
            <Button variant="secondary" icon="search" onClick={() => setState("manual")}>
              Search member
            </Button>
            <button className="text-button centered" onClick={() => go("new-member")}>
              Register new member <Icon name="arrow" size={16} />
            </button>
          </div>
        )}
        {state === "error" && (
          <div className="match-card">
            <div className="warning-orb">
              <Icon name="camera" size={34} />
            </div>
            <p className="eyebrow">Camera needs attention</p>
            <h2>It’s too dark to scan</h2>
            <p className="muted">Turn on more lights or move the member towards the camera.</p>
            <div className="error-list">
              <span>
                <Icon name="camera" /> Camera blocked
              </span>
              <span>
                <Icon name="users" /> More than one face
              </span>
              <span>
                <Icon name="warning" /> Low light
              </span>
            </div>
            <Button onClick={() => setState("scanning")}>Try camera again</Button>
            <div className="offline-note">
              <Icon name="check" /> Offline check-ins are saved on this device and will sync when
              online.
            </div>
          </div>
        )}
        {state === "manual" && (
          <div className="manual-panel">
            <button className="panel-close" onClick={() => setState("scanning")}>
              <Icon name="close" />
            </button>
            <p className="eyebrow">Manual fallback</p>
            <h2>Find a member</h2>
            <div className="searchbox">
              <Icon name="search" />
              <input autoFocus placeholder="Name, phone or member number" />
            </div>
            <button className="qr-scan">
              <span>
                <Icon name="qr" size={32} />
              </span>
              <div>
                <b>Scan member QR code</b>
                <small>Use the front camera</small>
              </div>
              <Icon name="arrow" />
            </button>
            <p className="small-label">Recent members</p>
            {["Thabo Mokoena", "Nomvula Khumalo", "Sipho Baloyi"].map((n, i) => (
              <button
                className="member-result"
                key={n}
                onClick={() => setState(i === 2 ? "overdue" : "active")}
              >
                <Avatar name={n} />
                <span>
                  <b>{n}</b>
                  <small>MG-{24018 + i}</small>
                </span>
                <Status type={i === 2 ? "overdue" : "active"}>
                  {i === 2 ? "Overdue" : "Active"}
                </Status>
              </button>
            ))}
          </div>
        )}
        <div className="scan-state-dock">
          <span>Demo states</span>
          {(["scanning", "active", "overdue", "unknown", "error"] as ScanState[]).map((s) => (
            <button key={s} className={state === s ? "selected" : ""} onClick={() => setState(s)}>
              {s === "unknown" ? "Not recognised" : s}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function NewMember({ go }: { go: (s: string) => void }) {
  const [step, setStep] = useState(1);
  const [consent, setConsent] = useState(false);
  const labels = ["Details", "Plan", "Face enrolment", "Consent", "Done"];
  return (
    <>
      <TopBar title="Register new member" eyebrow="Members" />
      <main className="page narrow-page">
        <div className="stepper">
          {labels.map((l, i) => (
            <div key={l} className={step >= i + 1 ? "step-on" : ""}>
              <span>{step > i + 1 ? <Icon name="check" size={16} /> : i + 1}</span>
              <b>{l}</b>
            </div>
          ))}
        </div>
        {step === 1 && (
          <section className="form-card">
            <p className="eyebrow">Step 1 of 4</p>
            <h2>Member details</h2>
            <p className="muted">Let’s start with the basics.</p>
            <div className="form-grid">
              <label>
                First name
                <input defaultValue="Nomvula" />
              </label>
              <label>
                Last name
                <input defaultValue="Khumalo" />
              </label>
              <label>
                Phone number
                <input placeholder="0XX XXX XXXX" />
              </label>
              <label>
                Email address <small>Optional</small>
                <input type="email" placeholder="name@example.com" />
              </label>
              <label className="span-2">
                Emergency contact
                <input placeholder="Name and phone number" />
              </label>
            </div>
            <div className="form-actions">
              <Button variant="secondary" onClick={() => go("members")}>
                Cancel
              </Button>
              <Button onClick={() => setStep(2)}>
                Choose plan <Icon name="arrow" size={17} />
              </Button>
            </div>
          </section>
        )}
        {step === 2 && (
          <section className="form-card">
            <p className="eyebrow">Step 2 of 4</p>
            <h2>Choose a membership</h2>
            <div className="plan-grid">
              {[
                ["1 Month", "R260", "Most flexible"],
                ["3 Months", "R480", "Save R300"],
                ["6 Months", "R900", "Best value"],
              ].map((p, i) => (
                <button className={`plan-card ${i === 1 ? "selected" : ""}`} key={p[0]}>
                  <span>{i === 1 ? "POPULAR" : "MEMBERSHIP"}</span>
                  <h3>{p[0]}</h3>
                  <strong>{p[1]}</strong>
                  <small>{p[2]}</small>
                  <i>{i === 1 ? <Icon name="check" /> : ""}</i>
                </button>
              ))}
            </div>
            <div className="form-actions">
              <Button variant="secondary" onClick={() => setStep(1)}>
                Back
              </Button>
              <Button onClick={() => setStep(3)}>Continue to face capture</Button>
            </div>
          </section>
        )}
        {step === 3 && (
          <section className="form-card capture-card">
            <p className="eyebrow">Step 3 of 4</p>
            <h2>Set up face check-in</h2>
            <p className="muted">We’ll take three secure face scans. No photos are stored.</p>
            <div className="capture-layout">
              <div className="capture-view">
                <div className="capture-ring">
                  <Avatar name="Nomvula Khumalo" large />
                </div>
                <span>
                  <Icon name="check" /> Straight
                </span>
                <span className="current">2 &nbsp; Turn left</span>
                <span>3 &nbsp; Turn right</span>
              </div>
              <div className="capture-guide">
                <h3>Slowly turn your head left</h3>
                <p>Keep your shoulders still and follow the dot.</p>
                <div className="capture-progress">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="privacy-note">
                  <Icon name="shield" />
                  <span>
                    <b>Private by design</b>Your face scan is turned into a secure template, not
                    stored as a photo.
                  </span>
                </div>
              </div>
            </div>
            <div className="form-actions">
              <Button variant="secondary" onClick={() => setStep(2)}>
                Back
              </Button>
              <Button onClick={() => setStep(4)}>Complete capture</Button>
            </div>
          </section>
        )}
        {step === 4 && (
          <section className="form-card consent-card">
            <div className="consent-title">
              <span>
                <Icon name="shield" size={30} />
              </span>
              <div>
                <p className="eyebrow">Step 4 of 4</p>
                <h2>Your face data, your choice</h2>
              </div>
            </div>
            <p>
              Face check-in is optional. You can always use your QR code or ask staff to check you
              in.
            </p>
            <div className="consent-grid">
              <div>
                <b>What we collect</b>
                <span>
                  A secure face template made from your scan. We do not keep the camera photos.
                </span>
              </div>
              <div>
                <b>Why we collect it</b>
                <span>Only to recognise you and add your visit to the gym register.</span>
              </div>
              <div>
                <b>Who can see it</b>
                <span>Authorised Magnificent Mawethu Gym admins only.</span>
              </div>
              <div>
                <b>How long we keep it</b>
                <span>While you are a member, then deleted within 30 days.</span>
              </div>
            </div>
            <p className="withdraw-copy">
              You can withdraw consent any time in Profile → My face data, or ask staff. Your face
              data will be deleted and you can keep using QR or manual check-in.
            </p>
            <label className="consent-check">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
              />
              <span>
                <b>I agree to face check-in</b>I understand how my face data will be used and kept.{" "}
                <em>Required</em>
              </span>
            </label>
            <div className="form-actions split">
              <button className="text-button" onClick={() => setStep(5)}>
                No thanks, I’ll use QR / manual check-in
              </button>
              <Button onClick={() => consent && setStep(5)} className={!consent ? "disabled" : ""}>
                Agree and finish
              </Button>
            </div>
          </section>
        )}
        {step === 5 && (
          <section className="form-card success-card">
            <div className="success-orb">
              <Icon name="check" size={48} />
            </div>
            <p className="eyebrow">Member registered</p>
            <h2>Welcome to the gym, Nomvula!</h2>
            <p className="muted">Membership is active until 9 Feb 2027.</p>
            <div className="member-qr">
              <div className="fake-qr">
                <Icon name="qr" size={100} />
              </div>
              <b>MG-24019</b>
              <span>Backup check-in QR code</span>
            </div>
            <div className="success-actions">
              <Button onClick={() => go("members")}>View member</Button>
              <Button
                variant="secondary"
                onClick={() => {
                  setStep(1);
                  setConsent(false);
                }}
              >
                Add another member
              </Button>
            </div>
          </section>
        )}
      </main>
    </>
  );
}

const rows = [
  ["17:42", "Thabo Mokoena", "MG-24018", "1 Month", "Active", "Face", "—"],
  ["17:36", "Nomvula Khumalo", "MG-24019", "3 Months", "Active", "QR", "—"],
  ["17:28", "Sipho Baloyi", "MG-24020", "1 Month", "Overdue", "Manual", "Allowed once"],
  ["16:54", "Lerato Dlamini", "MG-24014", "6 Months", "Active", "Face", "—"],
  ["16:41", "Anele Jacobs", "MG-24009", "3 Months", "Due soon", "Face", "—"],
];

function Register() {
  const [download, setDownload] = useState(false);
  const [done, setDone] = useState(false);
  return (
    <>
      <TopBar title="Gym register" />
      <main className="page">
        <div className="page-title-row">
          <div>
            <p className="eyebrow">Monday, 9 Nov 2026</p>
            <h2>Today’s check-ins</h2>
          </div>
          <Button icon="download" onClick={() => setDownload(true)}>
            Download register
          </Button>
        </div>
        <div className="mini-metrics">
          <div>
            <span>Total check-ins</span>
            <b>47</b>
            <small>+8 vs yesterday</small>
          </div>
          <div>
            <span>Unique members</span>
            <b>41</b>
            <small>6 repeat visits</small>
          </div>
          <div>
            <span>Peak hour</span>
            <b>17:00</b>
            <small>12 check-ins</small>
          </div>
        </div>
        <section className="card table-card">
          <div className="filter-row">
            <div className="chips">
              <button className="on">Today</button>
              <button>This week</button>
              <button>This month</button>
              <button>
                <Icon name="calendar" size={16} /> Custom
              </button>
            </div>
            <div className="searchbox compact">
              <Icon name="search" />
              <input placeholder="Search register" />
            </div>
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Time in</th>
                  <th>Member</th>
                  <th>Member no.</th>
                  <th>Plan</th>
                  <th>Payment</th>
                  <th>Method</th>
                  <th>Override</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r[1]}>
                    {r.map((c, i) => (
                      <td key={i}>
                        {i === 1 ? (
                          <span className="person-cell">
                            <Avatar name={c} />
                            <b>{c}</b>
                          </span>
                        ) : i === 4 ? (
                          <Status
                            type={c === "Active" ? "active" : c === "Overdue" ? "overdue" : "due"}
                          >
                            {c}
                          </Status>
                        ) : i === 5 ? (
                          <span className="method">
                            <Icon
                              name={c === "Face" ? "scan" : c === "QR" ? "qr" : "users"}
                              size={16}
                            />
                            {c}
                          </span>
                        ) : i === 6 && c !== "—" ? (
                          <span className="override">
                            <Icon name="warning" size={14} />
                            {c}
                          </span>
                        ) : (
                          c
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="table-footer">
            <span>Showing 5 of 47 check-ins</span>
            <div>
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>
                <Icon name="arrow" size={16} />
              </button>
            </div>
          </div>
        </section>
        <section className="card recent-downloads">
          <div className="card-head">
            <div>
              <p className="eyebrow">Files</p>
              <h3>Recent downloads</h3>
            </div>
            <label className="toggle-label">
              <span>Email me the daily register at 21:00</span>
              <input type="checkbox" defaultChecked />
              <i />
            </label>
          </div>
          <div className="file-row">
            <span>
              <Icon name="register" />
            </span>
            <div>
              <b>Register · 2–8 Nov 2026.xlsx</b>
              <small>Downloaded 8 Nov · 48 KB</small>
            </div>
            <Button variant="ghost" icon="download">
              Download
            </Button>
          </div>
        </section>
        {download && (
          <div className="modal-layer">
            <button className="modal-scrim" onClick={() => setDownload(false)} aria-label="Close" />
            <div className="side-panel">
              <div className="panel-head">
                <div>
                  <p className="eyebrow">Export</p>
                  <h2>Download register</h2>
                </div>
                <button className="icon-button" onClick={() => setDownload(false)}>
                  <Icon name="close" />
                </button>
              </div>
              {done ? (
                <div className="download-success">
                  <div className="success-orb">
                    <Icon name="check" size={40} />
                  </div>
                  <h3>Your register is ready</h3>
                  <p>Register · 9 Nov 2026.xlsx</p>
                  <Button icon="download" onClick={() => setDownload(false)}>
                    Save file
                  </Button>
                </div>
              ) : (
                <>
                  <label>
                    Date range
                    <select defaultValue="today">
                      <option value="today">Today · 9 Nov 2026</option>
                      <option>This week</option>
                      <option>This month</option>
                    </select>
                  </label>
                  <div className="field">
                    <span>Format</span>
                    <div className="format-grid">
                      {["Excel", "CSV", "PDF"].map((x, i) => (
                        <button className={i === 0 ? "selected" : ""} key={x}>
                          <Icon name="register" />
                          <b>{x}</b>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="field check-list">
                    <span>Columns to include</span>
                    {[
                      "Time in",
                      "Member name",
                      "Member number",
                      "Plan",
                      "Payment status",
                      "Check-in method",
                      "Override flag",
                    ].map((x) => (
                      <label key={x}>
                        <input type="checkbox" defaultChecked />
                        {x}
                      </label>
                    ))}
                  </div>
                  <Button icon="download" onClick={() => setDone(true)}>
                    Create download
                  </Button>
                </>
              )}
            </div>
            {done && (
              <div className="toast">
                <Icon name="check" />
                <span>
                  <b>Download ready</b>Your register was created successfully.
                </span>
              </div>
            )}
          </div>
        )}
      </main>
    </>
  );
}

function Members() {
  return (
    <>
      <TopBar title="Members" />
      <main className="page">
        <div className="page-title-row">
          <div>
            <p className="eyebrow">124 total members</p>
            <h2>Your community</h2>
          </div>
          <Button icon="plus">Add member</Button>
        </div>
        <section className="card table-card">
          <div className="filter-row">
            <div className="searchbox">
              <Icon name="search" />
              <input placeholder="Search name, phone or member number" />
            </div>
            <div className="chips">
              <button className="on">All</button>
              <button>Active</button>
              <button>Due soon</button>
              <button>Overdue</button>
              <button>Expired</button>
            </div>
          </div>
          <div className="member-cards">
            {["Thabo Mokoena", "Nomvula Khumalo", "Sipho Baloyi"].map((n, i) => (
              <article key={n}>
                <div className="member-cover" />
                <Avatar name={n} large />
                <div className="member-card-copy">
                  <h3>{n}</h3>
                  <span>
                    MG-{24018 + i} · 081 234 567{i}
                  </span>
                  <Status type={i === 2 ? "overdue" : "active"}>
                    {i === 2 ? "7 days overdue" : "Active"}
                  </Status>
                  <div className="member-stats">
                    <span>
                      <b>{[18, 12, 9][i]}</b>Visits this month
                    </span>
                    <span>
                      <b>{i === 2 ? "R260" : "12 Dec"}</b>
                      {i === 2 ? "Amount due" : "Valid until"}
                    </span>
                  </div>
                  <Button variant="secondary">View profile</Button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

function Payments({ activate }: { activate?: () => void }) {
  const [record, setRecord] = useState(Boolean(activate));
  const [saved, setSaved] = useState(false);
  return (
    <>
      <TopBar title="Payments" />
      <main className="page">
        <div className="page-title-row">
          <div>
            <p className="eyebrow">R2 080 outstanding</p>
            <h2>Payment follow-up</h2>
          </div>
          <Button icon="plus" onClick={() => setRecord(true)}>
            Record payment
          </Button>
        </div>
        <div className="tab-bar">
          <button className="on">
            Overdue <b>8</b>
          </button>
          <button>
            Due soon <b>14</b>
          </button>
          <button>Paid</button>
        </div>
        <section className="card payment-list">
          {["Sipho Baloyi", "Zanele Ndlovu", "Bongani Nkosi"].map((n, i) => (
            <div className="payment-row" key={n}>
              <Avatar name={n} />
              <div>
                <b>{n}</b>
                <span>MG-2402{i} · 1 Month plan</span>
              </div>
              <div>
                <strong>R260</strong>
                <Status type="overdue">{7 - i * 2} days overdue</Status>
              </div>
              <Button variant="secondary" onClick={() => setRecord(true)}>
                Record payment
              </Button>
              <Button variant="ghost" icon="mail">
                Send reminder
              </Button>
            </div>
          ))}
        </section>
        {record && (
          <div className="modal-layer">
            <button className="modal-scrim" onClick={() => setRecord(false)} />
            <div className="modal">
              <div className="panel-head">
                <div>
                  <p className="eyebrow">Sipho Baloyi · MG-24020</p>
                  <h2>Record payment</h2>
                </div>
                <button className="icon-button" onClick={() => setRecord(false)}>
                  <Icon name="close" />
                </button>
              </div>
              {saved ? (
                <div className="download-success">
                  <div className="success-orb">
                    <Icon name="check" size={40} />
                  </div>
                  <h3>Payment recorded</h3>
                  <p>Sipho is active until 9 Dec 2026.</p>
                  <Button
                    onClick={() => {
                      setRecord(false);
                      activate?.();
                    }}
                  >
                    Done
                  </Button>
                </div>
              ) : (
                <>
                  <div className="amount-field">
                    <span>Amount paid</span>
                    <div>
                      <small>R</small>
                      <input defaultValue="260" />
                    </div>
                    <p>1 Month membership</p>
                  </div>
                  <div className="form-grid">
                    <label>
                      Payment method
                      <select>
                        <option>Cash</option>
                        <option>EFT</option>
                        <option>Card</option>
                      </select>
                    </label>
                    <label>
                      Date
                      <input defaultValue="9 Nov 2026" />
                    </label>
                    <label className="span-2">
                      Reference <small>Optional</small>
                      <input placeholder="e.g. EFT reference" />
                    </label>
                  </div>
                  <label className="toggle-label modal-toggle">
                    <span>
                      <b>Email receipt</b>
                      <small>Send a copy to Sipho</small>
                    </span>
                    <input type="checkbox" defaultChecked />
                    <i />
                  </label>
                  <Button className="full" onClick={() => setSaved(true)}>
                    Save payment · Activate member
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </main>
    </>
  );
}

function ReminderSettings() {
  return (
    <>
      <TopBar title="Reminder settings" />
      <main className="page settings-grid">
        <section className="form-card">
          <p className="eyebrow">Automatic schedule</p>
          <h2>When to remind members</h2>
          <p className="muted">Choose when payment reminders are sent.</p>
          <div className="rule-list">
            {[
              ["7 days before", true],
              ["3 days before", true],
              ["On the due date", true],
              ["3 days after", true],
              ["7 days after", false],
            ].map(([x, on]) => (
              <label className="rule" key={String(x)}>
                <span className={on ? "rule-icon on" : ""}>
                  <Icon name={on ? "check" : ("plus" as IconName)} />
                </span>
                <b>{x}</b>
                <input type="checkbox" defaultChecked={Boolean(on)} />
                <i />
              </label>
            ))}
          </div>
          <div className="form-grid">
            <label>
              Send time
              <select>
                <option>09:00</option>
                <option>12:00</option>
                <option>18:00</option>
              </select>
            </label>
            <div className="field">
              <span>Channels</span>
              <label className="check-inline">
                <input type="checkbox" defaultChecked /> Email
              </label>
              <label className="check-inline">
                <input type="checkbox" defaultChecked /> In-app at login
              </label>
            </div>
          </div>
        </section>
        <section className="form-card">
          <p className="eyebrow">Message</p>
          <h2>Keep it warm and clear</h2>
          <label>
            Reminder message
            <textarea
              defaultValue={
                "Heads up, {{first_name}}! Your membership is due on {{due_date}} – {{amount}}. Keep your momentum going."
              }
            />
          </label>
          <div className="message-preview">
            <span>LIVE PREVIEW</span>
            <div className="preview-bubble">
              <Logo compact />
              <p>
                Heads up, Thabo! Your membership is due on 12 Nov – R260. Keep your momentum going.
              </p>
              <Button>How to pay</Button>
            </div>
          </div>
          <Button className="full">Save reminder settings</Button>
        </section>
      </main>
    </>
  );
}

function Settings() {
  return (
    <>
      <TopBar title="Settings" />
      <main className="page settings-grid">
        <section className="form-card">
          <p className="eyebrow">People & access</p>
          <h2>Staff accounts</h2>
          {[
            ["Mawethu Sombo", "Admin"],
            ["Front Desk", "Front Desk"],
          ].map((n) => (
            <div className="staff-row" key={n[0]}>
              <Avatar name={n[0]} />
              <span>
                <b>{n[0]}</b>
                <small>{n[1]}</small>
              </span>
              <button className="icon-button">
                <Icon name="arrow" />
              </button>
            </div>
          ))}
          <Button variant="secondary" icon="plus">
            Add staff account
          </Button>
        </section>
        <section className="form-card">
          <p className="eyebrow">Face check-in</p>
          <h2>Camera & privacy</h2>
          <label>
            Camera sensitivity
            <input type="range" defaultValue="60" />
          </label>
          <div className="range-label">
            <span>More flexible</span>
            <span>More precise</span>
          </div>
          <label>
            Face data retention
            <select>
              <option>Delete 30 days after membership ends</option>
              <option>Delete immediately</option>
            </select>
          </label>
          <button className="settings-link">
            <Icon name="shield" />
            <span>
              <b>Privacy and consent wording</b>
              <small>Review the text shown to members</small>
            </span>
            <Icon name="arrow" />
          </button>
          <button className="settings-link">
            <Icon name="camera" />
            <span>
              <b>Test front desk camera</b>
              <small>Camera 1 · Connected</small>
            </span>
            <Icon name="arrow" />
          </button>
          <Button>Save settings</Button>
        </section>
      </main>
    </>
  );
}

function StaffApp({ switchMode }: { switchMode: (m: string) => void }) {
  const [screen, setScreen] = useState("dashboard");
  const [menu, setMenu] = useState(false);
  if (screen === "scanner") return <Scanner go={setScreen} />;
  return (
    <div className="staff-app">
      <Sidebar screen={screen} setScreen={setScreen} open={menu} close={() => setMenu(false)} />
      <div className="staff-content">
        <div className="prototype-switch">
          <button className="on">Staff app</button>
          <button onClick={() => switchMode("member")}>Member app</button>
          <button onClick={() => switchMode("gallery")}>Emails & UI kit</button>
        </div>
        {screen === "dashboard" && <Dashboard go={setScreen} />}
        {screen === "new-member" && <NewMember go={setScreen} />}
        {screen === "register" && <Register />}
        {screen === "members" && <Members />}
        {screen === "payments" && <Payments />}
        {screen === "record-payment" && <Payments activate={() => setScreen("scanner")} />}
        {screen === "reminders" && <ReminderSettings />}
        {screen === "settings" && <Settings />}
      </div>
    </div>
  );
}

function MemberHeader({
  title,
  back,
  go,
  unread = true,
}: {
  title?: string;
  back?: boolean;
  go: (s: string) => void;
  unread?: boolean;
}) {
  return (
    <header className="member-header">
      {back ? (
        <button className="icon-button" onClick={() => go("home")}>
          <Icon name="chevron" />
        </button>
      ) : (
        <Logo compact />
      )}
      <b>{title}</b>
      <button className="icon-button badge-button" onClick={() => go("notifications")}>
        <Icon name="bell" />
        {unread && <i>3</i>}
      </button>
    </header>
  );
}

function MemberNav({ screen, go }: { screen: string; go: (s: string) => void }) {
  return (
    <nav className="member-nav">
      {[
        ["home", "home", "Home"],
        ["attendance", "calendar", "Visits"],
        ["payments", "wallet", "Payments"],
        ["profile", "users", "Profile"],
      ].map((n) => (
        <button key={n[0]} className={screen === n[0] ? "on" : ""} onClick={() => go(n[0])}>
          <Icon name={n[1] as IconName} />
          <span>{n[2]}</span>
        </button>
      ))}
    </nav>
  );
}

function ReminderModal({
  variant = "due",
  close,
  pay,
}: {
  variant?: "due" | "today" | "overdue";
  close: () => void;
  pay: () => void;
}) {
  const copy =
    variant === "overdue"
      ? [
          "Payment overdue",
          "Your membership was due 7 days ago – R260. Pay now to keep checking in.",
        ]
      : variant === "today"
        ? ["Due today", "Your R260 membership payment is due today."]
        : ["Heads up, Thabo!", "Your membership is due on 12 Nov – R260."];
  return (
    <div className="member-modal-layer">
      <div className={`reminder-modal reminder-${variant}`}>
        <button className="panel-close" onClick={close}>
          <Icon name="close" />
        </button>
        <div className="reminder-icon">
          <Icon name={variant === "overdue" ? "warning" : "clock"} size={30} />
        </div>
        <p className="eyebrow">
          {variant === "overdue"
            ? "Action needed"
            : variant === "today"
              ? "Due today"
              : "3 days to go"}
        </p>
        <h2>{copy[0]}</h2>
        <p>{copy[1]}</p>
        <Button onClick={pay}>How to pay</Button>
        <Button variant="secondary" onClick={close}>
          Remind me later
        </Button>
        <button className="text-button centered" onClick={close}>
          I’ve already paid
        </button>
        <div className="variant-dots">
          <i />
          <i />
          <i />
        </div>
      </div>
    </div>
  );
}

function MemberHome({ go }: { go: (s: string) => void }) {
  const [reminder, setReminder] = useState(true);
  return (
    <>
      <MemberHeader go={go} />
      <main className="member-page">
        <div className="member-greeting">
          <div>
            <p>Good afternoon,</p>
            <h1>Thabo</h1>
          </div>
          <Avatar name="Thabo Mokoena" large />
        </div>
        <section className="membership-card">
          <div className="membership-top">
            <Logo compact />
            <Status type="due">Due soon</Status>
          </div>
          <p>1 MONTH MEMBERSHIP</p>
          <h2>3 days left</h2>
          <div className="membership-meta">
            <span>
              Next payment<b>12 Nov 2026</b>
            </span>
            <span>
              Amount<b>R260</b>
            </span>
          </div>
          <div className="membership-bar">
            <i />
          </div>
          <small>Member no. MG-24018</small>
        </section>
        <button className="reminder-banner" onClick={() => setReminder(true)}>
          <span>
            <Icon name="clock" />
          </span>
          <div>
            <b>Payment due in 3 days</b>
            <small>R260 due on 12 Nov. Keep your streak going.</small>
          </div>
          <Icon name="arrow" />
        </button>
        <section>
          <div className="member-section-title">
            <div>
              <p className="eyebrow">Shortcuts</p>
              <h2>What do you need?</h2>
            </div>
          </div>
          <div className="member-actions">
            <button onClick={() => go("pay")}>
              <span>
                <Icon name="wallet" />
              </span>
              <b>How to pay</b>
            </button>
            <button>
              <span>
                <Icon name="whatsapp" />
              </span>
              <b>WhatsApp gym</b>
            </button>
            <button onClick={() => go("qr")}>
              <span>
                <Icon name="qr" />
              </span>
              <b>My QR code</b>
            </button>
          </div>
        </section>
        <section className="streak-card">
          <div>
            <span>
              <Icon name="trend" />
            </span>
            <div>
              <p className="eyebrow">Visit streak</p>
              <h3>4 weeks strong</h3>
              <small>You’ve visited 3 times this week.</small>
            </div>
          </div>
          <div className="week-dots">
            {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
              <span key={i} className={i < 3 ? "done" : ""}>
                {i < 3 ? <Icon name="check" size={13} /> : d}
              </span>
            ))}
          </div>
        </section>
        <section>
          <div className="member-section-title">
            <h2>Recent visits</h2>
            <button onClick={() => go("attendance")}>View all</button>
          </div>
          <div className="visit-list">
            <div>
              <span>
                <Icon name="check" />
              </span>
              <div>
                <b>Today</b>
                <small>17:42 · Face check-in</small>
              </div>
              <strong>56 min</strong>
            </div>
            <div>
              <span>
                <Icon name="check" />
              </span>
              <div>
                <b>7 Nov 2026</b>
                <small>08:16 · Face check-in</small>
              </div>
              <strong>1h 12m</strong>
            </div>
          </div>
        </section>
      </main>
      <MemberNav screen="home" go={go} />
      {reminder && <ReminderModal close={() => setReminder(false)} pay={() => go("pay")} />}
    </>
  );
}

function Pay({ go }: { go: (s: string) => void }) {
  const [sent, setSent] = useState(false);
  return (
    <>
      <MemberHeader title="How to pay" back go={go} />
      <main className="member-page">
        <div className="pay-hero">
          <span>
            <Icon name="wallet" size={30} />
          </span>
          <p>Amount due</p>
          <h1>R260</h1>
          <Status type="due">Due 12 Nov 2026</Status>
        </div>
        <section className="member-card">
          <div className="number-title">1</div>
          <div>
            <h3>Pay cash at the gym</h3>
            <p>Visit the front desk any day between 06:00 and 21:00. We’ll email your receipt.</p>
          </div>
        </section>
        <section className="member-card eft-card">
          <div className="number-title">2</div>
          <div>
            <h3>Pay by EFT</h3>
            <p>Use your member number as the reference.</p>
            <dl>
              <div>
                <dt>Bank</dt>
                <dd>Placeholder Bank</dd>
              </div>
              <div>
                <dt>Account name</dt>
                <dd>Magnificent Mawethu Gym</dd>
              </div>
              <div>
                <dt>Account number</dt>
                <dd>000 000 0000</dd>
              </div>
              <div className="highlight">
                <dt>Your reference</dt>
                <dd>MG-24018</dd>
              </div>
            </dl>
          </div>
        </section>
        <Button className="full whatsapp-button" icon="whatsapp" onClick={() => setSent(true)}>
          Send proof on WhatsApp
        </Button>
        <p className="secure-copy">
          <Icon name="shield" /> Only send proof to 081 338 7620
        </p>
        {sent && (
          <div className="toast member-toast">
            <Icon name="check" />
            <span>
              <b>Opening WhatsApp</b>Your reference is ready to send.
            </span>
          </div>
        )}
      </main>
    </>
  );
}

function Notifications({ go }: { go: (s: string) => void }) {
  return (
    <>
      <MemberHeader title="Notifications" back go={go} unread={false} />
      <main className="member-page">
        <div className="page-title-row member-title">
          <div>
            <p className="eyebrow">3 unread</p>
            <h1>Stay in the loop</h1>
          </div>
          <button className="text-button">Mark all read</button>
        </div>
        <div className="notification-list">
          {[
            [
              "warning",
              "Payment due soon",
              "Your R260 membership payment is due on 12 Nov.",
              "Today · 09:00",
            ],
            [
              "check",
              "You checked in",
              "Another visit added. You’re on a 4-week streak.",
              "Today · 17:42",
            ],
            [
              "receipt",
              "Payment received",
              "Thanks! Your receipt for R480 is ready.",
              "12 Aug · 14:26",
            ],
            [
              "trend",
              "Keep going, Thabo",
              "Two visits this week. One more to hit your goal.",
              "6 Nov · 18:00",
            ],
          ].map((n, i) => (
            <button className={i < 3 ? "unread" : ""} key={n[1]}>
              <span>
                <Icon name={n[0] as IconName} />
              </span>
              <div>
                <b>{n[1]}</b>
                <p>{n[2]}</p>
                <small>{n[3]}</small>
              </div>
              {i < 3 && <i />}
            </button>
          ))}
        </div>
      </main>
      <MemberNav screen="" go={go} />
    </>
  );
}

function Attendance({ go }: { go: (s: string) => void }) {
  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  return (
    <>
      <MemberHeader title="My attendance" go={go} />
      <main className="member-page">
        <section className="attendance-hero">
          <p className="eyebrow">November 2026</p>
          <div>
            <h1>8 visits</h1>
            <Status type="active">+2 vs last month</Status>
          </div>
          <p>You’re building a strong routine.</p>
        </section>
        <section className="calendar-card">
          <div className="calendar-head">
            <button>
              <Icon name="chevron" />
            </button>
            <b>November 2026</b>
            <button>
              <Icon name="arrow" />
            </button>
          </div>
          <div className="calendar-grid">
            {["M", "T", "W", "T", "F", "S", "S"].map((x, i) => (
              <strong key={i}>{x}</strong>
            ))}
            {days.map((d) => (
              <span key={d} className={[2, 4, 7, 9, 14, 18, 21, 25].includes(d) ? "visit-day" : ""}>
                {d}
              </span>
            ))}
          </div>
          <div className="calendar-key">
            <i /> Gym visit
          </div>
        </section>
        <div className="member-section-title">
          <h2>This month</h2>
          <span>8 visits · 9h 24m</span>
        </div>
        <div className="visit-list">
          <div>
            <span>
              <Icon name="check" />
            </span>
            <div>
              <b>Today, 9 Nov</b>
              <small>17:42–18:38 · Face</small>
            </div>
            <strong>56 min</strong>
          </div>
          <div>
            <span>
              <Icon name="check" />
            </span>
            <div>
              <b>Saturday, 7 Nov</b>
              <small>08:16–09:28 · Face</small>
            </div>
            <strong>1h 12m</strong>
          </div>
        </div>
      </main>
      <MemberNav screen="attendance" go={go} />
    </>
  );
}

function MemberPayments({ go }: { go: (s: string) => void }) {
  return (
    <>
      <MemberHeader title="Payments" go={go} />
      <main className="member-page">
        <section className="upcoming-card">
          <p>UPCOMING PAYMENT</p>
          <div>
            <h1>R260</h1>
            <Status type="due">Due in 3 days</Status>
          </div>
          <span>12 Nov 2026 · 1 Month plan</span>
          <Button onClick={() => go("pay")}>How to pay</Button>
        </section>
        <div className="member-section-title">
          <h2>Payment history</h2>
        </div>
        <div className="receipt-list">
          {[
            ["12 Oct 2026", "R260", "Cash"],
            ["12 Sep 2026", "R260", "EFT"],
            ["12 Aug 2026", "R480", "Card"],
          ].map((r) => (
            <div key={r[0]}>
              <span>
                <Icon name="receipt" />
              </span>
              <div>
                <b>{r[0]}</b>
                <small>{r[2]} · Paid</small>
              </div>
              <strong>{r[1]}</strong>
              <button>
                <Icon name="download" />
              </button>
            </div>
          ))}
        </div>
      </main>
      <MemberNav screen="payments" go={go} />
    </>
  );
}

function Profile({ go }: { go: (s: string) => void }) {
  const [confirm, setConfirm] = useState(false);
  return (
    <>
      <MemberHeader title="Profile & privacy" go={go} />
      <main className="member-page">
        <div className="profile-head">
          <Avatar name="Thabo Mokoena" large />
          <h2>Thabo Mokoena</h2>
          <span>MG-24018</span>
          <Button variant="secondary">Edit details</Button>
        </div>
        <p className="settings-section-label">YOUR ACCOUNT</p>
        {[
          ["users", "Personal details", "Phone, email and emergency contact"],
          ["bell", "Notification preferences", "Email and in-app"],
          ["qr", "My backup QR code", "For check-in without face scan"],
        ].map((x) => (
          <button
            className="profile-link"
            key={x[1]}
            onClick={() => x[1].includes("QR") && go("qr")}
          >
            <span>
              <Icon name={x[0] as IconName} />
            </span>
            <div>
              <b>{x[1]}</b>
              <small>{x[2]}</small>
            </div>
            <Icon name="arrow" />
          </button>
        ))}
        <p className="settings-section-label">PRIVACY</p>
        <section className="face-data-card">
          <div className="face-data-title">
            <span>
              <Icon name="shield" />
            </span>
            <div>
              <h3>My face data</h3>
              <Status type="active">Consent active</Status>
            </div>
          </div>
          <dl>
            <div>
              <dt>Consent given</dt>
              <dd>12 Aug 2026</dd>
            </div>
            <div>
              <dt>Used for</dt>
              <dd>Gym check-in only</dd>
            </div>
            <div>
              <dt>Storage</dt>
              <dd>Secure face template</dd>
            </div>
          </dl>
          <p>
            You can withdraw at any time. You’ll still be able to use your QR code or manual
            check-in.
          </p>
          <Button variant="danger" onClick={() => setConfirm(true)}>
            Withdraw consent and delete face data
          </Button>
        </section>
        <div className="gym-info">
          <Logo compact />
          <div>
            <b>Magnificent Mawethu Gym</b>
            <span>
              Block 1 Job Creation, Mfuleni
              <br />
              Cape Town, 7100
            </span>
          </div>
        </div>
      </main>
      <MemberNav screen="profile" go={go} />
      {confirm && (
        <div className="member-modal-layer">
          <div className="confirm-dialog">
            <div className="warning-orb">
              <Icon name="warning" />
            </div>
            <h2>Delete your face data?</h2>
            <p>
              This cannot be undone. You can still check in with your QR code or ask the front desk.
            </p>
            <Button variant="danger" onClick={() => setConfirm(false)}>
              Yes, delete my face data
            </Button>
            <Button variant="secondary" onClick={() => setConfirm(false)}>
              Keep face check-in
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function QrScreen({ go }: { go: (s: string) => void }) {
  return (
    <>
      <MemberHeader title="My QR code" back go={go} />
      <main className="member-page qr-page">
        <div className="member-qr big">
          <Logo />
          <div className="fake-qr">
            <Icon name="qr" size={180} />
          </div>
          <h2>Thabo Mokoena</h2>
          <b>MG-24018</b>
          <Status type="active">Membership active</Status>
        </div>
        <p>Show this code at the front desk to check in. Don’t share it with anyone.</p>
      </main>
    </>
  );
}

function MemberLogin({ login }: { login: () => void }) {
  return (
    <div className="member-login">
      <div className="login-art">
        <Logo />
        <span className="login-ring">
          <Icon name="trend" size={50} />
        </span>
        <h1>Stronger together.</h1>
        <p>Your membership, payments and visits — all in one place.</p>
      </div>
      <div className="login-form">
        <p className="eyebrow">Welcome back</p>
        <h2>Log in to your gym</h2>
        <label>
          Email or phone
          <input defaultValue="081 234 5678" />
        </label>
        <label>
          Password
          <div className="password-field">
            <input type="password" defaultValue="12345678" />
            <Icon name="eye" />
          </div>
        </label>
        <button className="forgot">Forgot password?</button>
        <Button className="full" onClick={login}>
          Log in
        </Button>
        <div className="or">
          <span />
          OR
          <span />
        </div>
        <Button className="full" variant="secondary">
          Send me a one-time code
        </Button>
        <p className="login-help">
          Need help? WhatsApp <b>081 338 7620</b>
        </p>
      </div>
    </div>
  );
}

function MemberApp({ switchMode }: { switchMode: (m: string) => void }) {
  const [screen, setScreen] = useState("login");
  return (
    <div className="member-demo-wrap">
      <div className="prototype-switch member-switch">
        <button onClick={() => switchMode("staff")}>Staff app</button>
        <button className="on">Member app</button>
        <button onClick={() => switchMode("gallery")}>Emails & UI kit</button>
      </div>
      <div className="phone-shell">
        <div className="phone-status">
          <span>17:42</span>
          <i />
          <span>5G &nbsp; 89%</span>
        </div>
        {screen === "login" && <MemberLogin login={() => setScreen("home")} />}{" "}
        {screen === "home" && <MemberHome go={setScreen} />}{" "}
        {screen === "pay" && <Pay go={setScreen} />}{" "}
        {screen === "notifications" && <Notifications go={setScreen} />}{" "}
        {screen === "attendance" && <Attendance go={setScreen} />}{" "}
        {screen === "payments" && <MemberPayments go={setScreen} />}{" "}
        {screen === "profile" && <Profile go={setScreen} />}{" "}
        {screen === "qr" && <QrScreen go={setScreen} />}
      </div>
      <div className="phone-caption">
        <span>390 × 844</span>
        <b>Member / {screen[0].toUpperCase() + screen.slice(1)}</b>
        <button onClick={() => setScreen("login")}>Restart flow</button>
      </div>
    </div>
  );
}

function EmailTemplate({ type }: { type: "due" | "overdue" | "received" }) {
  const data =
    type === "due"
      ? [
          "Payment due in 3 days",
          "Keep your momentum going, Thabo",
          "Your 1 Month membership is due soon.",
          "R260",
          "12 Nov 2026",
          "due",
        ]
      : type === "overdue"
        ? [
            "Payment overdue",
            "Let’s get you active again, Thabo",
            "Your membership payment is now 7 days overdue.",
            "R260",
            "2 Nov 2026",
            "overdue",
          ]
        : [
            "Payment received",
            "Thanks for your payment, Thabo",
            "Your membership is active and your receipt is ready.",
            "R260",
            "9 Nov 2026",
            "received",
          ];
  return (
    <article className="email-frame">
      <header>
        <Logo />
      </header>
      <div className={`email-accent ${data[5]}`}>
        <span>
          <Icon
            name={type === "received" ? "check" : type === "overdue" ? "warning" : "clock"}
            size={28}
          />
        </span>
        <p>{data[0]}</p>
      </div>
      <main>
        <p className="eyebrow">HI THABO</p>
        <h2>{data[1]}</h2>
        <p>{data[2]}</p>
        <div className="email-amount">
          <span>
            {type === "received" ? "Amount paid" : "Amount due"}
            <b>{data[3]}</b>
          </span>
          <span>
            {type === "received" ? "Paid on" : "Due date"}
            <b>{data[4]}</b>
          </span>
        </div>
        <p className="member-ref">
          Member number <b>MG-24018</b>
        </p>
        <Button>{type === "received" ? "View receipt" : "Log in to view"}</Button>
        <div className="email-instructions">
          <h3>{type === "received" ? "Your payment" : "How to pay"}</h3>
          <p>
            {type === "received"
              ? "Method: Cash · Reference: RCPT-10982"
              : "Pay cash at the gym, or EFT using your member number as the reference."}
          </p>
          <a>
            <Icon name="whatsapp" size={16} /> WhatsApp 081 338 7620
          </a>
        </div>
      </main>
      <footer>
        Magnificent Mawethu Gym
        <br />
        Block 1 Job Creation, Mfuleni, Cape Town, 7100
        <br />
        <a>Manage preferences</a>
      </footer>
    </article>
  );
}

function Gallery({ switchMode }: { switchMode: (m: string) => void }) {
  const [tab, setTab] = useState("emails");
  return (
    <div className="gallery">
      <header className="gallery-header">
        <Logo />
        <div className="prototype-switch">
          <button onClick={() => switchMode("staff")}>Staff app</button>
          <button onClick={() => switchMode("member")}>Member app</button>
          <button className="on">Emails & UI kit</button>
        </div>
      </header>
      <main>
        <div className="gallery-title">
          <div>
            <p className="eyebrow">Mawethu Gym Access</p>
            <h1>{tab === "emails" ? "Member emails" : "Design system"}</h1>
            <p>Dark, welcoming and built for everyday community use.</p>
          </div>
          <div className="tab-bar">
            <button className={tab === "emails" ? "on" : ""} onClick={() => setTab("emails")}>
              Email templates
            </button>
            <button className={tab === "kit" ? "on" : ""} onClick={() => setTab("kit")}>
              UI kit
            </button>
          </div>
        </div>
        {tab === "emails" ? (
          <div className="email-gallery">
            <div>
              <span>Email / Payment due in 3 days</span>
              <EmailTemplate type="due" />
            </div>
            <div>
              <span>Email / Payment overdue</span>
              <EmailTemplate type="overdue" />
            </div>
            <div>
              <span>Email / Payment received – receipt</span>
              <EmailTemplate type="received" />
            </div>
          </div>
        ) : (
          <div className="kit-grid">
            <section className="kit-section">
              <p className="eyebrow">FOUNDATIONS</p>
              <h2>Colour & type</h2>
              <div className="swatches">
                {[
                  ["#0E0F11", "Ink"],
                  ["#1E2124", "Charcoal"],
                  ["#2F3338", "Slate"],
                  ["#D4E84A", "Lemon"],
                  ["#F5A623", "Amber"],
                  ["#E05252", "Red"],
                ].map((x) => (
                  <div key={x[0]}>
                    <i style={{ background: x[0] }} />
                    <b>{x[1]}</b>
                    <span>{x[0]}</span>
                  </div>
                ))}
              </div>
              <div className="type-sample">
                <h1>Move with purpose.</h1>
                <h2>Membership active</h2>
                <p>Poppins makes every message clear, friendly and easy to scan.</p>
              </div>
            </section>
            <section className="kit-section">
              <p className="eyebrow">COMPONENTS</p>
              <h2>Actions & status</h2>
              <div className="component-row">
                <Button>Primary action</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="danger">Delete data</Button>
              </div>
              <div className="component-row">
                <Status type="active">Active</Status>
                <Status type="due">Due soon</Status>
                <Status type="overdue">Overdue</Status>
                <Status type="expired">Expired</Status>
              </div>
              <div className="component-row">
                {["Thabo Mokoena", "Nomvula Khumalo", "Sipho Baloyi"].map((n) => (
                  <Avatar key={n} name={n} />
                ))}
              </div>
              <label className="kit-input">
                Member search
                <div className="searchbox">
                  <Icon name="search" />
                  <input placeholder="Name, phone or member number" />
                </div>
              </label>
            </section>
            <section className="kit-section full-kit">
              <p className="eyebrow">STATES</p>
              <h2>Empty, loading & error</h2>
              <div className="state-grid">
                <div>
                  <span>
                    <Icon name="register" size={28} />
                  </span>
                  <h3>No visits yet</h3>
                  <p>Check-ins will appear here.</p>
                </div>
                <div>
                  <span className="spinner" />
                  <h3>Loading members</h3>
                  <p>This should only take a moment.</p>
                </div>
                <div>
                  <span className="error-state">
                    <Icon name="warning" size={28} />
                  </span>
                  <h3>Couldn’t load register</h3>
                  <p>Check your connection and try again.</p>
                  <Button variant="secondary">Try again</Button>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>
    </div>
  );
}

export default function App() {
  const [mode, setMode] = useState("staff");
  return mode === "staff" ? (
    <StaffApp switchMode={setMode} />
  ) : mode === "member" ? (
    <MemberApp switchMode={setMode} />
  ) : (
    <Gallery switchMode={setMode} />
  );
}
