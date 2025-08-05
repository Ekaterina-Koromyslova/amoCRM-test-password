import './PasswordForm.css';

function PasswordForm({
  length, setLength,
  useUppercase, setUseUppercase,
  useNumbers, setUseNumbers,
  useSymbols, setUseSymbols,
  onGenerate
}) {
  return (
    <div className="form">
      <label>
        Длина пароля: {length}
        <input
          type="range"
          min="6"
          max="20"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
        />
      </label>

      <div className="checkboxes">
        <label>
          <input
            type="checkbox"
            checked={useUppercase}
            onChange={(e) => setUseUppercase(e.target.checked)}
          /> Заглавные буквы
        </label>
        <label>
          <input
            type="checkbox"
            checked={useNumbers}
            onChange={(e) => setUseNumbers(e.target.checked)}
          /> Цифры
        </label>
        <label>
          <input
            type="checkbox"
            checked={useSymbols}
            onChange={(e) => setUseSymbols(e.target.checked)}
          /> Спецсимволы
        </label>
      </div>

      <button className="generate-btn" onClick={onGenerate}>
        Сгенерировать
      </button>
    </div>
  );
}

export default PasswordForm;
