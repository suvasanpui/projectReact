import React, { useState } from "react";
import ClickEvent from "./components/event/ClickEvent";
import MouseEvent from "./components/event/MouseEvent";
import ChangeEvent from "./components/event/ChangeEvent";
import KeyPressEvent from "./components/event/KeyPressEvent";
import SubmitEvent from "./components/event/SubmitEvent";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/route/Home";
import About from "./components/route/About";
import Profile from "./components/route/Profile";
import Counter from "./components/hook/Counter";
import Timer from "./components/hook/Timer";
import FocusInput from "./components/hook/FocusInput";
import MemoExample from "./components/hook/MemoExample";
import CallbackExample from "./components/hook/CallbackExample";

const App: React.FC = () => {
  const [eventType, setEventType] = useState<string>("");
  const [activeSection, setActiveSection] = useState<string>("");

  const renderEventComponent = () => {
    switch (eventType) {
      case "click":
        return <ClickEvent />;
      case "mouse":
        return <MouseEvent />;
      case "change":
        return <ChangeEvent />;
      case "keypress":
        return <KeyPressEvent />;
      case "submit":
        return <SubmitEvent />;
      default:
        return <p>Select an event to see it in action.</p>;
    }
  };

  return (
    <div className="p-4 text-center">
      <div className="mb-4 space-x-4">
        <button
          onClick={() => setActiveSection("events")}
          className={`px-4 py-2 rounded ${
            activeSection === "events" ? "bg-blue-600" : "bg-blue-400"
          } text-white`}
        >
          Events
        </button>
        <button
          onClick={() => setActiveSection("router")}
          className={`px-4 py-2 rounded ${
            activeSection === "router" ? "bg-blue-600" : "bg-blue-400"
          } text-white`}
        >
          Router
        </button>
        <button
          onClick={() => setActiveSection("hooks")}
          className={`px-4 py-2 rounded ${
            activeSection === "hooks" ? "bg-blue-600" : "bg-blue-400"
          } text-white`}
        >
          Hooks
        </button>
      </div>

      {activeSection === "events" && (
        <div>
          <h1 className="text-2xl font-bold mb-4">
            Event Handling in React (TypeScript)
          </h1>

          <div className="mb-4 space-x-2">
            <button
              onClick={() => setEventType("click")}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Click Event
            </button>
            <button
              onClick={() => setEventType("mouse")}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Mouse Event
            </button>
            <button
              onClick={() => setEventType("change")}
              className="bg-yellow-500 text-white px-4 py-2 rounded"
            >
              Change Event
            </button>
            <button
              onClick={() => setEventType("keypress")}
              className="bg-purple-500 text-white px-4 py-2 rounded"
            >
              Key Press Event
            </button>
            <button
              onClick={() => setEventType("submit")}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Submit Event
            </button>
          </div>

          <div className="border p-4 rounded shadow-md">
            {renderEventComponent()}
          </div>
        </div>
      )}

      {activeSection === "router" && (
        <div>
          <Router>
            <div className="p-4 space-y-2">
              <nav className="space-x-4">
                <Link to="/" className="text-blue-500">
                  Home
                </Link>
                <Link to="/about" className="text-blue-500">
                  About
                </Link>
              </nav>

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/profile/:id" element={<Profile />} />
              </Routes>
            </div>
          </Router>
        </div>
      )}

      {activeSection === "hooks" && (
        <div>
          <h1 className="text-2xl font-bold mb-4">React Hooks Examples</h1>
          <Counter />
          <Timer />
          <FocusInput />
          <MemoExample />
          <CallbackExample />
        </div>
      )}
    </div>
  );
};

export default App;
