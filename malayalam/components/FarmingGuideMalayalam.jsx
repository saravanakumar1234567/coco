import React from "react";
import "../components/farmingGuide.css";
import { useNavigate } from "react-router-dom";
import FarmingGuideMalayalam from "../pages/FarmingGuideMalayalam";

const FarmingGuide = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const guideSteps = [
    {
      title: "ഭൂമി തയ്യാറാക്കൽ",
      description: "പുല്ലു കളയുകയും ശരിയായ ജലനിരഗതി ഉറപ്പുവരുത്തുകയും ചെയ്ത് മണ്ണ് തയ്യാറാക്കുക.",
      icon: "🌱",
    },
    {
      title: "തൈ നടൽ",
      description: "ഉയർന്ന നിലവാരമുള്ള തേങ്ങ തൈകൾ തിരഞ്ഞെടുക്കുകയും ആവശ്യമായ അകലം പാലിച്ച് നടുക.",
      icon: "🌴",
    },
    {
      title: "ജലസേചനം",
      description: "പൗരഷക്കാലത്ത് മതിയായ ജലം നൽകിയുള്ളതിനു വഴി ഉറപ്പാക്കി നല്ല വളർച്ച സാധ്യമാക്കുക.",
      icon: "💧",
    },
    {
      title: "എരുവ് പ്രയോഗം",
      description: "ഉണങ്ങിയതോ രാസസങ്കരങ്ങളോ ആയ എരുവുകൾ ഉപയോഗിച്ച് ചെടികളുടെ വളർച്ചയും വിളവുമേറുക.",
      icon: "🌿",
    },
    {
      title: "കീടനാശന നിയന്ത്രണം",
      description: "പച്ചപ്പണിയാനശികൾ, പൊന്നത്തുമ്പികൾ തുടങ്ങിയ കീടങ്ങളെ നിരീക്ഷിച്ച് നിയന്ത്രിക്കുക.",
      icon: "🐛",
    },
    {
      title: "വിളവെടുപ്പ്",
      description: "മഴു തന്ന തേങ്ങകൾ 45-60 ദിവസത്തോളം ഇടവേളകളിൽ കൊയ്യുക.",
      icon: "🥥",
    },
  ];

  return (
    <section className="farming-guide">
      <div className="guide-header">
        <h2>തേങ്ങാ കൃഷി മാർഗനിർദ്ദേശം</h2>
        <p>ആരോഗ്യകരമായ തേങ്ങാ തോട്ടങ്ങൾ വളർത്താനും പരിപാലിക്കാനും ആവശ്യമായ പ്രാഥമിക ഘട്ടങ്ങൾ അറിയുക.</p>
      </div>

      {/* Know More Button */}

      <div className="guide-steps">
        {guideSteps.map((step, index) => (
          <div className="guide-card" key={index}>
            <div className="guide-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>

      {/* "Know More" Button */}
      <div className="know-more-btn-container">
        <button
          className="know-more-btn"
          onClick={() => navigate("fg")} // Navigate to the 'fg' page
        >
          കൂടുതൽ അറിയുക
        </button>
      </div>
    </section>
  );
};

export default FarmingGuideMalayalam;
