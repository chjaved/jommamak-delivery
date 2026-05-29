import { useEffect, useRef, useState } from "react";
import logo from "@/assets/jommamak-logo-intro.png";

interface NeonIntroProps {
  onComplete: () => void;
}

const NeonIntro = ({ onComplete }: NeonIntroProps) => {
  const [isLeaving, setIsLeaving] = useState(false);
  const completedRef = useRef(false);

  useEffect(() => {
    const complete = () => {
      if (completedRef.current) return;
      completedRef.current = true;
      setIsLeaving(true);
      window.setTimeout(onComplete, 560);
    };

    const timer = window.setTimeout(complete, 3600);
    return () => window.clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`jm-intro${isLeaving ? " is-leaving" : ""}`}
      aria-hidden="true"
    >
      <div className="jm-intro-grain" />
      <div className="jm-intro-wash" />
      <div className="jm-intro-lockup">
        <div className="jm-intro-logo-shell">
          <span className="jm-intro-line jm-intro-line-top" />
          <span className="jm-intro-line jm-intro-line-bottom" />
          <img className="jm-intro-logo" src={logo} alt="" draggable={false} />
        </div>
        <p className="jm-intro-tagline">Your Fav Mamak, We Delivered It</p>
      </div>
    </div>
  );
};

export default NeonIntro;
