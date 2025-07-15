'use client';

import { useState } from 'react';
import { useTheme } from '../theme-context';
import { useRouter } from 'next/navigation';
const mockResponse1 = {
    "username": "Hungry-Move-6603",
    "persona": "```json\n{\n  \"persona\": {\n    \"reddit_username\": \"Hungry-Move-6603\",\n    \"name\": null,\n    \"photo_url\": \"\",\n    \"demographics\": {\n      \"age\": null,\n      \"occupation\": \"- Business Owner\",\n      \"location\": \"- Lucknow (LKO)\",\n      \"marital_status\": null,\n      \"tier\": \"Middle to Upper-Middle-Class\",\n      \"archetype\": \"Champion\",\n      \"AI_insights\": \"In Post `id='1lwyhny'`, user mentions being in Lucknow for business purposes, indicating a professional or business owner. In Metadata, user has `verified_email` and `Four-Year Club` trophy, suggesting they are a somewhat established and serious Reddit user.\"\n    },\n    \"quote\": null,\n    \"traits\": {\n      \"content\": [\n        \"Practical\",\n        \"Adaptable\",\n        \"Spontaneous\",\n        \"Active\"\n      ],\n      \"AI_insights\": \"In Post `id='1lwyhny'`, user exhibits practical behavior by suggesting improvements for Lucknow. Comment `id='n2hk3aq'` shows adaptability, and Post `id='1lwyhny'` indicates spontaneity. Regular posting and engagement with others' comments and posts show active behavior.\"\n    },\n    \"motivations\": {\n      \"content\": [\n        {\"Convenience\": 0.85},\n        {\"Wellness\": 0.80},\n        {\"Speed\": 0.75},\n        {\"Preferences\": 0.35},\n        {\"Comfort\": 0.50},\n        {\"Dietary Needs\": 0.95}\n      ],\n      \"AI_insights\": \"Post `id='1lzuq0r'` discusses user's desire for convenience. Comment `id='n2igp7d'` highlights frustration with corruption. Post `id='1lzuq0r'` and Comment `id='n2hx8z7'` emphasize the importance of wellness. Post `id='1lwyhny'` indicates a desire for speed, and Comment `id='n2hk3aq'` shows strong preferences.\"\n    },\n    \"personality\": {\n      \"content\": [\n        {\n          \"spectrum_low\": \"Introvert\",\n          \"spectrum_high\": \"Extrovert\",\n          \"fraction_high\": 0.80\n        },\n        {\n          \"spectrum_low\": \"Intuition\",\n          \"spectrum_high\": \"Sensing\",\n          \"fraction_high\": 0.85\n        },\n        {\n          \"spectrum_low\": \"Feeling\",\n          \"spectrum_high\": \"Thinking\",\n          \"fraction_high\": 0.75\n        },\n        {\n          \"spectrum_low\": \"Perceiving\",\n          \"spectrum_high\": \"Judging\",\n          \"fraction_high\": 0.15\n        }\n      ],\n      \"AI_insights\": \"In Post `id='1lwyhny'`, user exhibits extroverted behavior by expressing themselves openly. Comment `id='n2hk3aq'` shows intuitive tendencies. User's emotional engagement with others' comments and posts, as seen in supporting records, suggests feeling and empathy.\"\n    },\n    \"behaviors_habits\": {\n      \"content\": [\n        \"Regular posting\",\n        \"Engagement with others' comments and posts\",\n        \"Lifelong learning through reading and research\"\n      ],\n      \"AI_insights\": \"User's regular posting and engagement with others' comments and posts indicate a habit of consistent participation. Post `id='1lzuq0r'` mentions reading and researching topics related to Lucknow and its issues, showing a habit of lifelong learning.\"\n    },\n    \"goals_needs\": {\n      \"content\": [\n        \"Improve Lucknow\",\n        \"Exhibit self-expression\",\n        \"Achieve convenience and speed\",\n        \"Prioritize wellness\"\n      ],\n      \"AI_insights\": \"In Post `id='1lwyhny'`, user expresses a desire to make a positive impact on Lucknow. User's engagement with others' comments and posts suggests a need for self-expression. Comment `id='n2igp7d'` and Post `id='1lzuq0r'` highlight the importance of convenience and speed. Post `id='1lzuq0r'` and Comment `id='n2hx8z7'` emphasize the value of wellness.\"\n    },\n    \"pain_points\": {\n      \"content\": [\n        \"Corruption\",\n        \"Lack of change\",\n        \"Frustration with others\",\n        \"Discomfort\"\n      ],\n      \"AI_insights\": \"Comment `id='n2igp7d'` expresses frustration with corruption. Post `id='1lwyhny'` and Comment `id='n2hk3aq'` show a lack of change in Lucknow. Comment `id='n2hx8z7'` indicates frustration with others. Post `id='1lzuqyr'` mentions discomfort with pollution in Lucknow.\"\n    },\n    \"tools_technology\": {\n      \"content\": [],\n      \"AI_insights\": \"\"\n    }\n  }\n}\n```"
}
const mockResponse2= {
    "username": "DemonTotem",
    "persona": "```json\n{\n  \"persona\": {\n    \"reddit_username\": \"DemonTotem\",\n    \"name\": \"DemonTotem\",\n    \"photo_url\": null,\n    \"demographics\": {\n      \"age\": \"19-20 years old\",\n      \"occupation\": null,\n      \"location\": \"California\",\n      \"marital_status\": null,\n      \"tier\": \"Young Adult, Emerging Adult\",\n      \"archetype\": \"The Nurturer, The Creator\",\n      \"AI_insights\": \"In POST `1h5k1me`, DemonTotem mentioned being in California and curious about eye color, suggesting their location and personality type. In POST `1gnrs8v`, they talked about strep throat, showing concern about health and wellness.\"\n    },\n    \"quote\": null,\n    \"traits\": {\n      \"content\": [\"Practical\", \"Adaptable\", \"Spontaneous\", \"Active\"],\n      \"AI_insights\": \"These traits are inferred from POST `1gnrs8v` where DemonTotem shows concern about health and wellness, POST `1h5k1me` illustrates openness to experience, and their Comments and Posts overall show engagement with others.\"\n    },\n    \"motivations\": {\n      \"content\": [\n        {\"Convenience\": 0.85, \"Wellness\": 0.80},\n        {\"Speed\": 0.75, \"Preference\": 0.35},\n        {\"Comfort\": 0.50, \"Dietary Needs\": 0.95}\n      ],\n      \"AI_insights\": \"Post `1gnrs8v` and Comment `n378rsd` highlight DemonTotem's concern about health and wellness, convenience level, and dietary needs. Their openness to experience and curiosity about the world are apparent in POST `1h5k1me` and Comment `lwi4tw8`.\"\n    },\n    \"personality\": {\n      \"content\": [\n        {\n          \"spectrum_low\": \"Introvert\",\n          \"spectrum_high\": \"Extrovert\",\n          \"fraction_high\": 0.80\n        },\n        {\n          \"spectrum_low\": \"Intuition\",\n          \"spectrum_high\": \"Sensing\",\n          \"fraction_high\": 0.85\n        },\n        {\n          \"spectrum_low\": \"Feeling\",\n          \"spectrum_high\": \"Thinking\",\n          \"fraction_high\": 0.75\n        },\n        {\n          \"spectrum_low\": \"Perceiving\",\n          \"spectrum_high\": \"Judging\",\n          \"fraction_high\": 0.15\n        }\n      ],\n      \"AI_insights\": \"DemonTotem tends to be more introverted, intuitive, feeling-type, and perceiving-type, based on POST `1h5k1me` where they show openness to experience, and Comment `n2inopl` where they demonstrate conscientiousness and attention to detail.\"\n    },\n    \"behaviors_habits\": {\n      \"content\": [\n        \"DemonTotem is curious, responsible, active, and health-conscious\",\n        \"They prioritize health and wellness, as shown in POST `1gnrs8v`,\n        \"They are open to learning and experiencing new things, as seen in POST `1h5k1me`, \"\n        \"They are participatory in online communities.\"\n      ],\n      \"AI_insights\": \"These behaviors and habits are inferred from DemonTotem's posts and comments on Reddit, particularly POST `1gnrs8v`, Comment `n378rsd`, and POST `1h5k1me`. They demonstrate engagement with others, curiosity, and concern about health and wellness.\"\n    },\n    \"goals_needs\": {\n      \"content\": [\n        \"Accurate identification\",\n        \"Health, education, and understanding\"\n      ],\n      \"AI_insights\": \"DemonTotem is motivated to correctly identify the spider species, maintain good health, and seek knowledge and understanding, as evident in POST `1lx1nss`, POST `1gnrs8v`, POST `1h5k1me`, Comment `n378rsd` and Comment `lwi4tw8`.\"\n    },\n    \"pain_points\": {\n      \"content\": [\n        \"Uncertainty and misidentification\"\n      ],\n      \"AI_insights\": \"DemonTotem experiences frustration when faced with uncertainty or confusion, as seen in POST `1gnrs8v` and Comment `n2inopl`, and they are bothered by the possibility of misidentifying the spider species, which leads to confusion and frustration.\"\n    },\n    \"tools_technology\": {\n      \"content\": [\n        \"Tools or tech used by DemonTotem\"\n      ],\n      \"AI_insights\": \"DemonTotem uses tools like Reddit itself and possibly other online tools for education and community engagement, as seen in their activities on Reddit.\"\n    }\n  }\n}\n```"
}
export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  function extractPersona(raw: string): any {
  try {
    // Step 1: Remove newlines and backslashes
    let cleaned = raw
      .replace(/\n/g, '')       // remove all newline substrings
      .replace(/\\/g, '')       // remove all backslashes
      .replace(/```json/, '')   // remove ```json
      .replace(/```/, '')       // remove any trailing ```
      .trim();

    // Step 2: Parse the JSON
    console.log(cleaned);
    const parsed = JSON.parse(cleaned);

    return parsed.persona || parsed;
  } catch (err) {
    console.error('❌ Failed to parse persona:', err);
    throw err;
  }
}



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const username = input.includes('/user/')? input.split('/user/')[1].split(/[/?]/)[0]: input.replace(/^u\//, '');
    console.log(username);
    const res = await fetch('https://beyondchats-intern.onrender.com/generate-persona/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({"reddit_username": username}),
    });
    const data = await res.json();
    // const data=mockResponse1;
    console.log('Raw:', data);
    try {
      const personaObj = extractPersona(data.persona);
      console.log(personaObj);
      sessionStorage.setItem('persona', JSON.stringify(personaObj));
      router.push('/persona');
    } catch (err) {
      alert('Failed to parse the persona. Please try again.');
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col justify-center items-center p-4 relative">
      <button
        className="theme-toggle"
        aria-label="Toggle theme"
        onClick={toggleTheme}
        style={{ position: 'absolute', top: 20, right: 20 }}
      >
        {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
      </button>
      <h1 className="text-3xl font-semibold mb-4">Reddit Persona Generator</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter Reddit username or link"
          className="p-3 rounded border border-gray-300"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? <div className="loader animate-spin border-t-4 border-blue-600 rounded-full w-6 h-6 mx-auto" /> : 'Generate Persona'}
        </button>
      </form>
    </main>
  );
}
