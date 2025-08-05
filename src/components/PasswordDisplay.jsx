import './PasswordDisplay.css';

function PasswordDisplay({ password, onCopy, copied }) {
  return (
    <div className="password-display">
      <input type="text" value={password} readOnly />
      <button className="copy-button" onClick={onCopy}>
        {copied ? 'Скопировано!' : '📋 Копировать'}
      </button>
    </div>
  );
}

export default PasswordDisplay;
