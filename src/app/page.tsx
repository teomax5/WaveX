import { Metadata } from "next";

export const metadata: Metadata = {
  title: "WaveX - Pure. Raw. Immersive.",
  description: "WaveX delivers uncompressed audio streams that capture the subtle nuances of every instrument, exactly as the artist intended.",
};

// Audio quality icon component
function AudioQualityIcon() {
  return (
    <svg
      width="24"
      height="26"
      viewBox="0 0 24 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

// Download icon component
function DownloadIcon() {
  return (
    <svg
      width="24"
      height="26"
      viewBox="0 0 24 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 14H22L12 24L2 14H5V4H19V14Z"
        fill="currentColor"
      />
    </svg>
  );
}

// No ads icon component
function NoAdsIcon() {
  return (
    <svg
      width="24"
      height="26"
      viewBox="0 0 24 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="13" r="10" fill="currentColor" />
      <path
        d="M8 13L11 16L16 10"
        stroke="#0E0E0E"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Check icon for pricing
function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 8L7 11L12 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-full flex flex-col">
      {/* Navigation Bar */}
      <nav
        className="bg-[#0E0E0E] border-b"
        style={{ borderColor: 'rgba(29, 42, 29, 0.3)' }}
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <span
                className="text-[32px] font-extrabold tracking-wide"
                style={{
                  background: "linear-gradient(90deg, #FFA9F9 0%, #FFD6FC 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                WaveX
              </span>
            </div>

            {/* Nav Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-[14px] font-medium hover:text-[#FFA9F9] transition-colors" style={{ color: '#BCB9B7' }}>
                Features
              </a>
              <a href="#" className="text-[14px] font-medium hover:text-[#FFA9F9] transition-colors" style={{ color: '#BCB9B7' }}>
                Pricing
              </a>
              <a href="#" className="text-[14px] font-medium hover:text-[#FFA9F9] transition-colors" style={{ color: '#BCB9B7' }}>
                About
              </a>
              <a href="#" className="text-[14px] font-medium hover:text-[#FFA9F9] transition-colors" style={{ color: '#BCB9B7' }}>
                Contact
              </a>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center gap-4">
              <button
                className="px-5 py-2 rounded-full font-bold text-xs tracking-widest uppercase transition-all duration-300"
                style={{
                  backgroundColor: '#f67feeff',
                  color: '#000000ff',
                }}
              >
                Sign Up
              </button>
              <button
                className="hidden sm:block px-5 py-2 rounded-full font-bold text-xs tracking-wide transition-all duration-300 border"
                style={{
                  backgroundColor: 'transparent',
                  color: '#141312ff',
                  borderColor: 'rgba(61, 74, 61, 0.3)',
                }}
              >
                Log In
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section className="relative overflow-hidden" style={{ backgroundColor: '#0E0E0E' }}>
          {/* Gradient Overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, rgba(255, 169, 249, 0.1) 0%, rgba(255, 169, 249, 0) 50%, #131313 100%)',
            }}
          />

          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
            style={{
              backgroundImage: "url('/images/sonic-bg.jpg')",
            }}
          />

          {/* Dark Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(14,14,14,0.72) 0%, rgba(14,14,14,0.82) 45%, rgba(14,14,14,0.96) 100%)",
            }}
          />

          {/* Pink Glow Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at center, rgba(255,169,249,0.16) 0%, transparent 60%)",
              mixBlendMode: "screen",
            }}
          />

          {/* Sonic Abstract Rings */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">

            <div
              className="absolute top-1/2 left-1/2 rounded-full border border-pink-300/10 animate-pulse"
              style={{
                width: "900px",
                height: "900px",
                transform: "translate(-50%, -50%)",
              }}
            />

            <div
              className="absolute top-1/2 left-1/2 rounded-full border border-pink-300/10"
              style={{
                width: "700px",
                height: "700px",
                transform: "translate(-50%, -50%)",
              }}
            />

            <div
              className="absolute top-1/2 left-1/2 rounded-full border border-pink-300/15"
              style={{
                width: "500px",
                height: "500px",
                transform: "translate(-50%, -50%)",
              }}
            />

            <div
              className="absolute top-1/2 left-1/2 rounded-full border border-pink-300/20"
              style={{
                width: "300px",
                height: "300px",
                transform: "translate(-50%, -50%)",
              }}
            />

            {/* Center Glow */}
            <div
              className="absolute top-1/2 left-1/2 rounded-full"
              style={{
                width: "180px",
                height: "180px",
                transform: "translate(-50%, -50%)",
                background:
                  "radial-gradient(circle, rgba(255,169,249,0.35) 0%, rgba(255,169,249,0.12) 40%, transparent 75%)",
                filter: "blur(12px)",
              }}
            />

            {/* Floating Glow */}
            <div
              className="absolute top-[20%] left-[15%] w-40 h-40 rounded-full blur-3xl"
              style={{
                background: "rgba(255,169,249,0.08)",
              }}
            />

            <div
              className="absolute bottom-[15%] right-[10%] w-52 h-52 rounded-full blur-3xl"
              style={{
                background: "rgba(255,169,249,0.08)",
              }}
            />
          </div>

          {/* Hero Content */}
          <div className="relative max-w-[1280px] mx-auto px-6 py-[140px] flex flex-col items-center text-center">
            {/* Heading 1 */}
            <h1 className="text-[64px] md:text-[80px] font-bold tracking-tight leading-tight text-[#E5E3E2] mb-8">
              High-fidelity sound,
              <br />
              <span style={{ color: '#FFA9F9' }}>tailored for you.</span>
            </h1>

            {/* Description */}
            <p className="text-[16px] md:text-[18px] font-medium leading-relaxed max-w-[672px] mb-12" style={{ color: '#BCB9B7' }}>
              Experience music in its purest form with WaveX. Sign up today for a premium experience
              that transforms every note into a masterpiece.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              {/* Primary Button */}
              <button
                className="px-10 py-5 rounded-full font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:shadow-lg"
                style={{
                  backgroundColor: '#fa84f2ff',
                  color: '#0a010bff',
                  boxShadow: '0 4px 6px rgba(255, 169, 249, 0.2), 0 10px 15px rgba(255, 169, 249, 0.2)',
                }}
              >
                START YOUR FREE TRIAL
              </button>

              {/* Secondary Button */}
              <button
                className="px-10 py-5 rounded-full font-bold text-sm tracking-wide transition-all duration-300 border"
                style={{
                  backgroundColor: '#2A2A2A',
                  color: '#E5E3E2',
                  borderColor: 'rgba(61, 74, 61, 0.3)',
                }}
              >
                Explore Features
              </button>
            </div>
          </div>
        </section>

        {/* 5-Second Value Prop Section */}
        <section
          className="bg-[#0E0E0E] border-t border-b"
          style={{ borderColor: 'rgba(61, 74, 61, 0.3)' }}
        >
          <div className="max-w-[1280px] mx-auto px-6 py-[120px]">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Left side - Heading */}
              <div className="flex-1">
                <div className="pb-4">
                  <h2 className="text-[48px] font-bold tracking-tight leading-none text-[#E5E3E2]">
                    Pure.
                    <br />
                    Raw.
                    <br />
                    <span style={{ color: '#FFA9F9' }}>Immersive.</span>
                  </h2>
                </div>
              </div>

              {/* Right side - Description with vertical border */}
              <div className="flex-1 flex items-center">
                <div
                  className="pl-6 py-4 border-l-4"
                  style={{ borderColor: '#FFA9F9' }}
                >
                  <p className="text-[24px] font-bold leading-relaxed" style={{ color: '#BCB9B7' }}>
                    WaveX delivers uncompressed audio
                    <br />
                    streams that capture the subtle
                    <br />
                    nuances of every instrument, exactly as
                    <br />
                    the artist intended.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-[#0E0E0E]">
          <div className="max-w-[1280px] mx-auto px-6 py-[120px]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1: Studio Quality Audio */}
              <div className="flex flex-col">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-6"
                  style={{ backgroundColor: 'rgba(255, 169, 249, 0.1)' }}
                >
                  <div className="text-[#FFA9F9]">
                    <AudioQualityIcon />
                  </div>
                </div>
                <h3 className="text-[24px] font-bold mb-4 text-[#E5E3E2]">
                  Studio Quality Audio
                </h3>
                <p className="text-[18px] leading-relaxed" style={{ color: '#BCB9B7' }}>
                  Stream in 24-bit/192kHz resolution. Hear the breath between lyrics and the strike of every string in crystal clarity.
                </p>
              </div>

              {/* Feature 2: Offline Anywhere */}
              <div className="flex flex-col">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-6"
                  style={{ backgroundColor: 'rgba(255, 169, 249, 0.1)' }}
                >
                  <div className="text-[#FFA9F9]">
                    <DownloadIcon />
                  </div>
                </div>
                <h3 className="text-[24px] font-bold mb-4 text-[#E5E3E2]">
                  Offline Anywhere
                </h3>
                <p className="text-[18px] leading-relaxed" style={{ color: '#BCB9B7' }}>
                  Download your favorite playlists and albums. Keep your music with you even when you're off the grid, without losing fidelity.
                </p>
              </div>

              {/* Feature 3: Ad-Free Immersion */}
              <div className="flex flex-col">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-6"
                  style={{ backgroundColor: 'rgba(255, 169, 249, 0.1)' }}
                >
                  <div className="text-[#FFA9F9]">
                    <NoAdsIcon />
                  </div>
                </div>
                <h3 className="text-[24px] font-bold mb-4 text-[#E5E3E2]">
                  Ad-Free Immersion
                </h3>
                <p className="text-[18px] leading-relaxed" style={{ color: '#BCB9B7' }}>
                  No interruptions. No breaks. Just a continuous flow of music that keeps you in the zone from the first track to the last.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section
          className="bg-[#0E0E0E]"
          style={{
            background: 'linear-gradient(180deg, rgba(61, 74, 61, 0.3) 0%, #0E0E0E 100%)',
          }}
        >
          <div className="max-w-[1280px] mx-auto px-6 py-[120px]">
            {/* Pricing Heading */}
            <div className="text-center mb-12">
              <h2 className="text-[32px] font-bold mb-4 text-[#E5E3E2]">
                Choose Your Experience
              </h2>
              <p className="text-[18px] max-w-[500px] mx-auto" style={{ color: '#BCB9B7' }}>
                Select the plan that fits your listening style
              </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
              {/* Free Plan */}
              <div
                className="rounded-2xl p-8 flex flex-col"
                style={{
                  backgroundColor: '#1A1A1A',
                  border: '1px solid rgba(61, 74, 61, 0.3)',
                }}
              >
                <h3 className="text-[24px] font-bold text-[#E5E3E2] mb-2">Free</h3>
                <div className="mb-6">
                  <span className="text-[40px] font-bold text-[#E5E3E2]">$0</span>
                  <span className="text-[16px] ml-2" style={{ color: '#BCB9B7' }}>/month</span>
                </div>
                <ul className="flex-1 space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-[16px]" style={{ color: '#BCB9B7' }}>
                    <span className="text-[#FFA9F9]"><CheckIcon /></span>
                    Standard quality streaming
                  </li>
                  <li className="flex items-center gap-3 text-[16px]" style={{ color: '#BCB9B7' }}>
                    <span className="text-[#FFA9F9]"><CheckIcon /></span>
                    Ad-supported experience
                  </li>
                  <li className="flex items-center gap-3 text-[16px]" style={{ color: '#BCB9B7' }}>
                    <span className="text-[#FFA9F9]"><CheckIcon /></span>
                    Limited skips per hour
                  </li>
                </ul>
                <button
                  className="w-full py-4 rounded-full font-bold text-sm tracking-widest uppercase transition-all duration-300 border"
                  style={{
                    backgroundColor: 'transparent',
                    color: '#E5E3E2',
                    borderColor: 'rgba(61, 74, 61, 0.3)',
                  }}
                >
                  Get Started
                </button>
              </div>

              {/* Premium Plan */}
              <div
                className="rounded-2xl p-8 flex flex-col relative overflow-hidden"
                style={{
                  backgroundColor: '#1A1A1A',
                  border: '2px solid #FFA9F9',
                }}
              >
                {/* Popular badge */}
                <div
                  className="absolute top-0 right-0 px-4 py-2 text-xs font-bold uppercase tracking-widest"
                  style={{
                    backgroundColor: '#FFA9F9',
                    color: '#000000ff',
                    borderBottomLeftRadius: '12px',
                  }}
                >
                  Most Popular
                </div>

                <h3 className="text-[24px] font-bold text-[#E5E3E2] mb-2">Premium</h3>
                <div className="mb-6">
                  <span className="text-[40px] font-bold text-[#E5E3E2]">$12</span>
                  <span className="text-[16px] ml-2" style={{ color: '#BCB9B7' }}>/month</span>
                </div>
                <ul className="flex-1 space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-[16px]" style={{ color: '#BCB9B7' }}>
                    <span className="text-[#FFA9F9]"><CheckIcon /></span>
                    24-bit/192kHz lossless audio
                  </li>
                  <li className="flex items-center gap-3 text-[16px]" style={{ color: '#BCB9B7' }}>
                    <span className="text-[#FFA9F9]"><CheckIcon /></span>
                    Ad-free listening
                  </li>
                  <li className="flex items-center gap-3 text-[16px]" style={{ color: '#BCB9B7' }}>
                    <span className="text-[#FFA9F9]"><CheckIcon /></span>
                    Offline downloads
                  </li>
                  <li className="flex items-center gap-3 text-[16px]" style={{ color: '#BCB9B7' }}>
                    <span className="text-[#FFA9F9]"><CheckIcon /></span>
                    Unlimited skips
                  </li>
                </ul>
                <button
                  className="w-full py-4 rounded-full font-bold text-sm tracking-widest uppercase transition-all duration-300"
                  style={{
                    backgroundColor: '#FFA9F9',
                    color: '#000000ff',
                  }}
                >
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        className="bg-[#0E0E0E] border-t py-12"
        style={{ borderColor: 'rgba(61, 74, 61, 0.3)' }}
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <h4 className="text-[20px] font-bold text-[#E5E3E2] mb-4">WaveX</h4>
              <p className="text-[14px]" style={{ color: '#BCB9B7' }}>
                Pure. Raw. Immersive.
              </p>
            </div>

            {/* Links */}
            <div>
              <h5 className="text-[14px] font-bold uppercase tracking-widest text-[#E5E3E2] mb-4">Product</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-[14px] hover:text-[#FFA9F9] transition-colors" style={{ color: '#BCB9B7' }}>Features</a></li>
                <li><a href="#" className="text-[14px] hover:text-[#FFA9F9] transition-colors" style={{ color: '#BCB9B7' }}>Pricing</a></li>
                <li><a href="#" className="text-[14px] hover:text-[#FFA9F9] transition-colors" style={{ color: '#BCB9B7' }}>Download</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-[14px] font-bold uppercase tracking-widest text-[#E5E3E2] mb-4">Company</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-[14px] hover:text-[#FFA9F9] transition-colors" style={{ color: '#BCB9B7' }}>About</a></li>
                <li><a href="#" className="text-[14px] hover:text-[#FFA9F9] transition-colors" style={{ color: '#BCB9B7' }}>Careers</a></li>
                <li><a href="#" className="text-[14px] hover:text-[#FFA9F9] transition-colors" style={{ color: '#BCB9B7' }}>Contact</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-[14px] font-bold uppercase tracking-widest text-[#E5E3E2] mb-4">Legal</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-[14px] hover:text-[#FFA9F9] transition-colors" style={{ color: '#BCB9B7' }}>Privacy</a></li>
                <li><a href="#" className="text-[14px] hover:text-[#FFA9F9] transition-colors" style={{ color: '#BCB9B7' }}>Terms</a></li>
                <li><a href="#" className="text-[14px] hover:text-[#FFA9F9] transition-colors" style={{ color: '#BCB9B7' }}>Licenses</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t" style={{ borderColor: 'rgba(61, 74, 61, 0.3)' }}>
            <p className="text-center text-[14px]" style={{ color: '#BCB9B7' }}>
              © 2026 WaveX. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}