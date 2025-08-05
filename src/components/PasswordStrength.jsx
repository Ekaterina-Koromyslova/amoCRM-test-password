import './PasswordStrength.css';
import { useEffect, useRef, useState } from 'react';
import sadHamster from '../assets/sadHamster.gif';
import gigachad from '../assets/gigachad.gif';
import sadHamsterSound from '../assets/sad-hamster.mp3';
import coffinDance from '../assets/coffinDance.gif';
import coffinDanceSound from '../assets/coffinDance.mp3';
import coolSound from '../assets/coolSound.mp3';

function getStrength(password) {
  let score = 0;
  if (password.length >= 12) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (score <= 1) return 'weak';
  if (score === 2 || score === 3) return 'medium';
  return 'strong';
}

function PasswordStrength({ password }) {
  const strength = getStrength(password);
  const sadAudioRef = useRef(null);
  const coolAudioRef = useRef(null);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    if (strength === 'weak') {
      if (sadAudioRef.current) {
        sadAudioRef.current.currentTime = 0;
        sadAudioRef.current.play().catch(() => {});
      }

      const timeout = setTimeout(() => {
        setShowOverlay(true);
        setTimeout(() => setShowOverlay(false), 4000);
      }, 1000);

      return () => clearTimeout(timeout);
    }

    if (strength === 'strong') {
      if (coolAudioRef.current) {
        coolAudioRef.current.currentTime = 0;
        coolAudioRef.current.play().catch(() => {});
      }
    }
  }, [strength]);

  const strengthLabel = {
    weak: 'Слабый',
    medium: 'Средний',
    strong: 'Сильный',
  }[strength];

  return (
    <div className="password-strength">
      <strong>Сила пароля:</strong>{' '}
      <span className={strength}>{strengthLabel}</span>

      <div className="strength-bar">
        <div className={`strength-fill ${strength}`}></div>
      </div>

      {strength === 'weak' && (
        <>
          <img
            src={sadHamster}
            alt="грустный хомяк"
            className="strength-meme"
          />
          <audio ref={sadAudioRef} src={sadHamsterSound} preload="auto" />
        </>
      )}

      {strength === 'strong' && (
        <>
          <img
            src={gigachad}
            alt="гигачад"
            className="strength-meme"
          />
          <audio ref={coolAudioRef} src={coolSound} preload="auto" />
        </>
      )}

      {showOverlay && (
        <div className="meme-overlay">
          <img src={coffinDance} alt="мемная крутилка" />
          <audio src={coffinDanceSound} autoPlay />
        </div>
      )}
    </div>
  );
}

export default PasswordStrength;



