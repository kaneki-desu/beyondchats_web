"use client";

import { useEffect, useState } from "react";
import { useTheme } from "../../theme-context";

export default function PersonaPage() {
  const { theme, toggleTheme } = useTheme();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("persona");
    if (stored) {
      const parsed = JSON.parse(stored);
      setData(parsed);
    }
  }, []);

  if (!data) return <p className="p-4">No data available</p>;

  const d = data; // shorthand

  return (
    <main
      className="min-h-screen flex flex-col justify-center items-center p-4 sm:p-8 relative"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      <button
        className="theme-toggle"
        aria-label="Toggle theme"
        onClick={toggleTheme}
        style={{ position: "absolute", top: 24, right: 24, zIndex: 10 }}
      >
        {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
      </button>
      <div
        className="max-w-6xl w-full rounded-3xl shadow-2xl p-6 sm:p-10 space-y-8"
        style={{
          background: theme === "dark" ? "#18181b" : "#fff",
          boxShadow:
            theme === "dark"
              ? "0 4px 32px 0 rgba(0,0,0,0.7)"
              : "0 4px 32px 0 rgba(0,0,0,0.12)",
          border: theme === "dark" ? "1px solid #222" : "1px solid #eee",
        }}
      >
        <h1
          className="text-4xl font-extrabold text-center mb-4"
          style={{ color: theme === "dark" ? "#fff" : "#222" }}
        >
          <span style={{
            background:  "linear-gradient(90deg,#2563eb,#06b6d4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}>
            Reddit User Persona
          </span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Section title="Username" content={d.reddit_username} theme={theme} />
          <Section title="Name" content={d.name} theme={theme} />
          <Section title="Quote" content={d.quote} theme={theme} />
          <Section title="Age" content={d.demographics.age} theme={theme} />
          <Section title="Occupation" content={d.demographics.occupation} theme={theme} />
          <Section title="Location" content={d.demographics.location} theme={theme} />
          <Section title="Marital Status" content={d.demographics.marital_status} theme={theme} />
          <Section title="Tier" content={d.demographics.tier} theme={theme} />
          <Section title="Archetype" content={d.demographics.archetype} theme={theme} />
        </div>
        <Insight title="Demographic AI Insights" content={d.demographics.AI_insights} theme={theme} />
        <SectionList title="Traits" items={d.traits.content} theme={theme} />
        <Insight title="Trait AI Insights" content={d.traits.AI_insights} theme={theme} />
        <div>
          <h2 className="text-xl font-semibold mb-2" style={{ color: theme === "dark" ? "#a5b4fc" : "#2563eb" }}>Motivations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {d.motivations.content.map((mot: any, idx: number) => {
              const key = Object.keys(mot)[0];
              const value = mot[key];
              return (
                <div key={idx} className="space-y-1">
                  <div className="font-medium" style={{ color: theme === "dark" ? "#fbbf24" : "#2563eb" }}>{key}</div>
                  <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${value * 100}%`, background: theme === "dark" ? "#6366f1" : "#2563eb" }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
          <Insight title="Motivation AI Insights" content={d.motivations.AI_insights} theme={theme} />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2" style={{ color: theme === "dark" ? "#a5b4fc" : "#2563eb" }}>Personality</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {d.personality.content.map((trait: any, idx: number) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between text-sm" style={{ color: theme === "dark" ? "#fbbf24" : "#2563eb" }}>
                  <span>{trait.spectrum_low}</span>
                  <span>{trait.spectrum_high}</span>
                </div>
                <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${trait.fraction_high * 100}%`, background: theme === "dark" ? "#22d3ee" : "#22c55e" }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <Insight title="Personality AI Insights" content={d.personality.AI_insights} theme={theme} />
        </div>
        <SectionList title="Behaviors & Habits" items={d.behaviors_habits.content} theme={theme} />
        <Insight title="Behavior AI Insights" content={d.behaviors_habits.AI_insights} theme={theme} />
        <SectionList title="Goals & Needs" items={d.goals_needs.content} theme={theme} />
        <Insight title="Goals AI Insights" content={d.goals_needs.AI_insights} theme={theme} />
        <SectionList title="Frustation" items={d.pain_points.content} theme={theme} />
        <Insight title="Paint points AI Insights" content={d.pain_points.AI_insights} theme={theme} />
        {d.tools_technology.content?.length > 0 && (
          <>
            <SectionList title="Tools & Technology" items={d.tools_technology.content} theme={theme} />
            <Insight title="Tools AI Insights" content={d.tools_technology.AI_insights} theme={theme} />
          </>
        )}
      </div>

        <button onClick={() => {
                sessionStorage.removeItem("persona");
                window.location.href = "/";
              }}
              className="mt-8 px-6 m-auto  py-3 rounded-xl font-semibold transition-all"
              style={{
                background: theme === "dark" ? "#2563eb" : "#1d4ed8",
                color: "#fff",
                boxShadow: theme === "dark"
                  ? "0 2px 10px rgba(37,99,235,0.6)"
                  : "0 2px 6px rgba(0,0,0,0.1)"
              }}
            >
              🔄 Try Another User
            </button>
    </main>
  );
}

function Section({ title, content, theme }: { title: string; content: string | null; theme: string }) {
  return (
    <div className="rounded-lg p-4 shadow-sm" style={{ background: theme === "dark" ? "#23272f" : "#f1f5f9" }}>
      <h2 className="text-xs uppercase tracking-wide mb-1" style={{ color: theme === "dark" ? "#a5b4fc" : "#2563eb" }}>{title}</h2>
      <p className="text-lg font-semibold" style={{ color: theme === "dark" ? "#fff" : "#222" }}>{content || "-"}</p>
    </div>
  );
}

function SectionList({ title, items, theme }: { title: string; items: string[]; theme: string }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2" style={{ color: theme === "dark" ? "#a5b4fc" : "#2563eb" }}>{title}</h2>
      <ul className="list-disc list-inside space-y-1">
        {items.map((item, idx) => (
          <li key={idx} style={{ color: theme === "dark" ? "#fff" : "#222" }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Insight({ title, content, theme }: { title: string; content: string; theme: string }) {
  return (
    <div className="p-4 rounded-lg" style={{ background: theme === "dark" ? "#23272f" : "#f1f5f9" }}>
      <h3 className="text-xs uppercase tracking-wide mb-1" style={{ color: theme === "dark" ? "#fbbf24" : "#2563eb" }}>{title}</h3>
      <p className="text-sm" style={{ color: theme === "dark" ? "#fff" : "#222" }}>{content || "No AI insight provided."}</p>
    </div>
  );
}
