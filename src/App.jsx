import { useState } from 'react';
import './App.css';
import PasswordForm from './components/PasswordForm';
import PasswordDisplay from './components/PasswordDisplay';
import PasswordStrength from './components/PasswordStrength';

function App() {
  const [length, setLength] = useState(12);
  const [useUppercase, setUseUppercase] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(true);
  const [password, setPassword] = useState('');
  const [copied, setCopied] = useState(false);

  const generatePassword = () => {
    let chars = 'abcdefghijklmnopqrstuvwxyz';
    if (useUppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (useNumbers) chars += '0123456789';
    if (useSymbols) chars += '!@#$%^&*()-_=+[]{};:,.<>?';

    if (chars.length === 0) return setPassword('');

    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    setPassword(result);
    setCopied(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="app">
      <h1>🔐 Генератор паролей</h1>

      <PasswordForm
        length={length}
        setLength={setLength}
        useUppercase={useUppercase}
        setUseUppercase={setUseUppercase}
        useNumbers={useNumbers}
        setUseNumbers={setUseNumbers}
        useSymbols={useSymbols}
        setUseSymbols={setUseSymbols}
        onGenerate={generatePassword}
      />

      <PasswordDisplay
        password={password}
        copied={copied}
        onCopy={copyToClipboard}
      />

      {password && <PasswordStrength password={password} />}
    </div>
  );
}

export default App;

