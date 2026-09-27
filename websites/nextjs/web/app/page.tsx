"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(
        new Intl.DateTimeFormat("vi-VN", {
          hour: "2-digit",
          minute: "2-digit",
        }).format(new Date())
      );
    };

    update();
    const timer = setInterval(update, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#08110d] text-white">
      {/* ambient lights */}
      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-emerald-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-green-300/[0.06] blur-[130px]" />

      {/* subtle noise */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.7'/%3E%3C/svg%3E\")",
        }}
      />

      {/* top */}
      <header className="relative z-10 flex items-center justify-between px-6 py-6 md:px-10">
        <div className="text-sm text-white/35">
          Friday · 25 September
        </div>

        <div className="font-mono text-sm text-white/40">
          {time}
        </div>
      </header>

      {/* room */}
      <section className="relative z-10 flex min-h-[calc(100vh-88px)] items-center justify-center px-6 pb-20">
        <div className="w-full max-w-4xl">
          {/* window */}
          <div className="relative mx-auto h-[430px] max-w-3xl overflow-hidden rounded-[2rem] border border-white/[0.07] bg-[#0b1811] shadow-2xl shadow-black/40">
            {/* night sky */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#07100d] via-[#102319] to-[#17291d]" />

            {/* moon */}
            <div className="absolute right-[15%] top-[15%] h-16 w-16 rounded-full bg-[#d9e5cf]/80 blur-[1px] shadow-[0_0_60px_rgba(220,240,210,0.12)]" />

            {/* distant lights */}
            <div className="absolute bottom-24 left-[10%] h-1.5 w-1.5 rounded-full bg-yellow-100/50 shadow-[0_0_18px_rgba(255,240,180,.5)]" />
            <div className="absolute bottom-32 left-[34%] h-1 w-1 rounded-full bg-emerald-200/40" />
            <div className="absolute bottom-20 right-[27%] h-1.5 w-1.5 rounded-full bg-yellow-100/40" />

            {/* window frame */}
            <div className="absolute inset-0">
              <div className="absolute left-1/2 top-0 h-full w-px bg-white/[0.05]" />
              <div className="absolute left-0 top-1/2 h-px w-full bg-white/[0.05]" />
            </div>

            {/* glass */}
            <div className="absolute inset-0 bg-white/[0.015] backdrop-blur-[1px]" />

            {/* desk */}
            <div className="absolute bottom-0 left-0 h-20 w-full bg-[#0a130e]/90" />

            {/* lamp */}
            <div className="absolute bottom-20 left-[14%]">
              <div className="mx-auto h-28 w-1 bg-[#111b15]" />
              <div className="h-12 w-20 -translate-x-1/2 rounded-t-[50%] bg-[#c4a96d]/10 blur-sm" />
              <div className="absolute left-1/2 top-5 h-3 w-3 -translate-x-1/2 rounded-full bg-[#d8b866]/70 shadow-[0_0_35px_12px_rgba(216,184,102,.12)]" />
            </div>

            {/* plant */}
            <div className="absolute bottom-14 right-[14%] text-5xl opacity-50">
              🌿
            </div>

            {/* center message */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-xs uppercase tracking-[0.35em] text-white/25">
                take a breath
              </p>

              <h1 className="mt-5 text-center text-4xl font-light tracking-[-0.04em] text-white/85 md:text-6xl">
                nghỉ một chút.
              </h1>

              <p className="mt-4 text-sm text-white/30">
                không cần phải vội.
              </p>
            </div>
          </div>

          {/* controls */}
          <div className="mt-6 flex justify-center">
            <div className="flex items-center gap-2 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-2 backdrop-blur-xl">
              <button className="rounded-xl px-4 py-2 text-sm text-white/40 transition hover:bg-white/[0.06] hover:text-white/80">
                🎵
              </button>

              <button className="rounded-xl px-4 py-2 text-sm text-white/40 transition hover:bg-white/[0.06] hover:text-white/80">
                🌧️
              </button>

              <button className="rounded-xl px-4 py-2 text-sm text-white/40 transition hover:bg-white/[0.06] hover:text-white/80">
                🌿
              </button>

              <div className="mx-1 h-5 w-px bg-white/[0.08]" />

              <button className="rounded-xl px-4 py-2 text-sm text-white/40 transition hover:bg-white/[0.06] hover:text-white/80">
                💬
              </button>
            </div>
          </div>

          <p className="mt-5 text-center text-xs text-white/15">
            stay a little longer
          </p>
        </div>
      </section>
    </main>
  );
}
