export default function RobotAnimation() {
  return (
    <svg
      viewBox="0 0 300 330"
      className="error-robot-svg"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Confused robot mascot"
    >
      {/* Floating question marks */}
      <text className="robot-q1" x="78" y="62" fontSize="28" fontWeight="900" fill="#e3549d" fontFamily="Arial,sans-serif">?</text>
      <text className="robot-q2" x="202" y="50" fontSize="22" fontWeight="900" fill="#e3549d" fontFamily="Arial,sans-serif">?</text>

      {/* Feet */}
      <ellipse cx="116" cy="280" rx="28" ry="13" fill="#f4a5c4"/>
      <ellipse cx="184" cy="280" rx="28" ry="13" fill="#f4a5c4"/>
      <line x1="98"  y1="281" x2="134" y2="281" stroke="#c47090" strokeWidth="1.5" opacity="0.5"/>
      <line x1="166" y1="281" x2="202" y2="281" stroke="#c47090" strokeWidth="1.5" opacity="0.5"/>

      {/* Leg stubs */}
      <rect x="104" y="254" width="24" height="22" rx="8" fill="#f4a5c4"/>
      <rect x="172" y="254" width="24" height="22" rx="8" fill="#f4a5c4"/>
      <circle cx="116" cy="269" r="8" fill="#e090b0"/>
      <circle cx="184" cy="269" r="8" fill="#e090b0"/>

      {/* Left arm — rotates from shoulder (52, 172) */}
      <g className="robot-left-arm">
        <rect x="36" y="172" width="32" height="72" rx="16" fill="#172b4d"/>
        <circle cx="43"  cy="241" r="8" fill="#f4a5c4"/>
        <circle cx="53"  cy="246" r="7" fill="#f4a5c4"/>
        <circle cx="63"  cy="241" r="8" fill="#f4a5c4"/>
        <circle cx="52"  cy="190" r="4" fill="#e3549d"/>
      </g>

      {/* Right arm — rotates from shoulder (248, 172) */}
      <g className="robot-right-arm">
        <rect x="232" y="172" width="32" height="72" rx="16" fill="#172b4d"/>
        <circle cx="237" cy="241" r="8" fill="#f4a5c4"/>
        <circle cx="247" cy="246" r="7" fill="#f4a5c4"/>
        <circle cx="257" cy="241" r="8" fill="#f4a5c4"/>
        <circle cx="248" cy="190" r="4" fill="#e3549d"/>
      </g>

      {/* Main body */}
      <ellipse cx="150" cy="168" rx="80" ry="88" fill="#172b4d"/>

      {/* Body speckles */}
      <circle cx="122" cy="118" r="2.5" fill="white" opacity="0.35"/>
      <circle cx="172" cy="103" r="1.5" fill="white" opacity="0.4"/>
      <circle cx="192" cy="144" r="2"   fill="white" opacity="0.3"/>
      <circle cx="108" cy="158" r="1.5" fill="white" opacity="0.35"/>
      <circle cx="163" cy="130" r="1"   fill="white" opacity="0.5"/>
      <circle cx="138" cy="94"  r="2"   fill="white" opacity="0.3"/>
      <circle cx="188" cy="194" r="1.5" fill="white" opacity="0.3"/>
      <circle cx="112" cy="194" r="1.5" fill="white" opacity="0.25"/>
      <circle cx="160" cy="222" r="1"   fill="white" opacity="0.3"/>

      {/* Belly band */}
      <rect x="72" y="197" width="156" height="16" rx="8" fill="#e3549d"/>
      <circle cx="138" cy="205" r="4.5" fill="#172b4d"/>
      <circle cx="150" cy="205" r="4.5" fill="#f4a5c4"/>
      <circle cx="162" cy="205" r="4.5" fill="#172b4d"/>

      {/* Bottom decorative lines */}
      <rect x="104" y="220" width="92" height="5" rx="2.5" fill="#e3549d" opacity="0.85"/>
      <rect x="104" y="229" width="92" height="5" rx="2.5" fill="#e3549d" opacity="0.55"/>
      <rect x="104" y="238" width="92" height="5" rx="2.5" fill="#e3549d" opacity="0.3"/>

      {/* Chest speaker grill */}
      <rect x="128" y="166" width="44" height="26" rx="5" fill="#0f1e38"/>
      <rect x="133" y="171" width="34" height="3.5" rx="1.75" fill="#e3549d"/>
      <rect x="133" y="178" width="34" height="3.5" rx="1.75" fill="#e3549d"/>
      <rect x="133" y="185" width="34" height="3.5" rx="1.75" fill="#e3549d"/>

      {/* Head group — turns left and right */}
      <g className="robot-head">
        {/* Nose */}
        <circle cx="150" cy="161" r="4.5" fill="#e3549d"/>

        {/* Glasses */}
        <circle cx="121" cy="138" r="25" fill="#f4a5c4"/>
        <circle cx="121" cy="138" r="20" fill="#0a1628"/>
        <circle cx="179" cy="138" r="25" fill="#f4a5c4"/>
        <circle cx="179" cy="138" r="20" fill="#0a1628"/>
        <rect x="143" y="134" width="14" height="8" rx="4" fill="#f4a5c4"/>
        <rect x="202" y="135" width="14" height="5" rx="2.5" fill="#f4a5c4"/>

        {/* Ear disc */}
        <circle cx="71" cy="138" r="15" fill="#f4a5c4"/>
        <circle cx="71" cy="138" r="10" fill="#172b4d"/>
        <circle cx="71" cy="138" r="5.5" fill="#e3549d"/>
      </g>

      {/* Shoulder joints (static, decorative) */}
      <circle cx="70"  cy="182" r="14" fill="#f4a5c4"/>
      <circle cx="70"  cy="182" r="9"  fill="#e3549d"/>
      <circle cx="230" cy="182" r="14" fill="#f4a5c4"/>
      <circle cx="230" cy="182" r="9"  fill="#e3549d"/>

      {/* Bow */}
      <path d="M 150,70 C 138,50 108,48 110,68 C 112,83 140,80 150,70 Z" fill="#e3549d"/>
      <path d="M 150,70 C 162,50 192,48 190,68 C 188,83 160,80 150,70 Z" fill="#e3549d"/>
      <path d="M 150,70 C 140,56 118,55 119,68 C 120,77 143,76 150,70 Z" fill="#f06eb0" opacity="0.45"/>
      <path d="M 150,70 C 160,56 182,55 181,68 C 180,77 157,76 150,70 Z" fill="#f06eb0" opacity="0.45"/>
      <ellipse cx="150" cy="70" rx="9" ry="7" fill="#c42d82"/>

      {/* Antenna (wobbles) */}
      <g className="robot-antenna">
        <line x1="118" y1="92" x2="107" y2="62" stroke="#f4a5c4" strokeWidth="4.5" strokeLinecap="round"/>
        <circle cx="106" cy="59" r="8.5" fill="#f4a5c4"/>
        <circle cx="106" cy="59" r="4"   fill="#e3549d"/>
      </g>
    </svg>
  );
}
