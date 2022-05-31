const keyboardLayout = [
  [
    {
      code: 'Backquote',
      func: false,
      lang: { en: '`', lt: '`' },
      width: 'regular',
    },
    {
      code: 'Digit1',
      func: false,
      lang: { en: '1', lt: 'ą' },
      width: 'regular',
    },
    {
      code: 'Digit2',
      func: false,
      lang: { en: '2', lt: 'č' },
      width: 'regular',
    },
    {
      code: 'Digit3',
      func: false,
      lang: { en: '3', lt: 'ę' },
      width: 'regular',
    },
    {
      code: 'Digit4',
      func: false,
      lang: { en: '4', lt: 'ė' },
      width: 'regular',
    },
    {
      code: 'Digit5',
      func: false,
      lang: { en: '5', lt: 'į' },
      width: 'regular',
    },
    {
      code: 'Digit6',
      func: false,
      lang: { en: '6', lt: 'š' },
      width: 'regular',
    },
    {
      code: 'Digit7',
      func: false,
      lang: { en: '7', lt: 'ų' },
      width: 'regular',
    },
    {
      code: 'Digit8',
      func: false,
      lang: { en: '8', lt: 'ū' },
      width: 'regular',
    },
    {
      code: 'Digit9',
      func: false,
      lang: { en: '9', lt: '9' },
      width: 'regular',
    },
    {
      code: 'Digit0',
      func: false,
      lang: { en: '0', lt: '0' },
      width: 'regular',
    },
    {
      code: 'Minus',
      func: false,
      lang: { en: '-', lt: '-' },
      width: 'regular',
    },
    {
      code: 'Equal',
      func: false,
      lang: { en: '=', lt: 'ž' },
      width: 'regular',
    },
    {
      code: 'Backspace',
      func: true,
      lang: { en: 'Back', lt: 'Back' },
      width: 'wide',
    },
    {
      code: 'Delete',
      func: true,
      lang: { en: 'Del', lt: 'Del' },
      width: 'wide',
    },
  ],
  [
    {
      code: 'Tab',
      func: true,
      lang: { en: 'Tab', lt: 'Tab' },
      width: 'extra-wide',
    },
    {
      code: 'KeyQ',
      func: false,
      lang: { en: 'q', lt: 'q' },
      width: 'regular',
    },
    {
      code: 'KeyW',
      func: false,
      lang: { en: 'w', lt: 'w' },
      width: 'regular',
    },
    {
      code: 'KeyE',
      func: false,
      lang: { en: 'e', lt: 'e' },
      width: 'regular',
    },
    {
      code: 'KeyR',
      func: false,
      lang: { en: 'r', lt: 'r' },
      width: 'regular',
    },
    {
      code: 'KeyT',
      func: false,
      lang: { en: 't', lt: 't' },
      width: 'regular',
    },
    {
      code: 'KeyY',
      func: false,
      lang: { en: 'y', lt: 'y' },
      width: 'regular',
    },
    {
      code: 'KeyU',
      func: false,
      lang: { en: 'u', lt: 'u' },
      width: 'regular',
    },
    {
      code: 'KeyI',
      func: false,
      lang: { en: 'i', lt: 'i' },
      width: 'regular',
    },
    {
      code: 'KeyO',
      func: false,
      lang: { en: 'o', lt: 'o' },
      width: 'regular',
    },
    {
      code: 'KeyP',
      func: false,
      lang: { en: 'p', lt: 'p' },
      width: 'regular',
    },
    {
      code: 'BracketLeft',
      func: false,
      lang: { en: '[', lt: '[' },
      width: 'regular',
    },
    {
      code: 'BracketRight',
      func: false,
      lang: { en: ']', lt: ']' },
      width: 'regular',
    },
    {
      code: 'Backslash',
      func: false,
      lang: { en: '\\', lt: '\\' },
      width: 'regular',
    },
  ],
  [
    {
      code: 'CapsLock',
      func: true,
      lang: { en: 'Caps', lt: 'Caps' },
      width: 'extra-wide',
    },
    {
      code: 'KeyA',
      func: false,
      lang: { en: 'a', lt: 'a' },
      width: 'regular',
    },
    {
      code: 'KeyS',
      func: false,
      lang: { en: 's', lt: 's' },
      width: 'regular',
    },
    {
      code: 'KeyD',
      func: false,
      lang: { en: 'd', lt: 'd' },
      width: 'regular',
    },
    {
      code: 'KeyF',
      func: false,
      lang: { en: 'f', lt: 'f' },
      width: 'regular',
    },
    {
      code: 'KeyG',
      func: false,
      lang: { en: 'g', lt: 'g' },
      width: 'regular',
    },
    {
      code: 'KeyH',
      func: false,
      lang: { en: 'h', lt: 'h' },
      width: 'regular',
    },
    {
      code: 'KeyJ',
      func: false,
      lang: { en: 'j', lt: 'j' },
      width: 'regular',
    },
    {
      code: 'KeyK',
      func: false,
      lang: { en: 'k', lt: 'k' },
      width: 'regular',
    },
    {
      code: 'KeyL',
      func: false,
      lang: { en: 'l', lt: 'l' },
      width: 'regular',
    },
    {
      code: 'Semicolon',
      func: false,
      lang: { en: ';', lt: ';' },
      width: 'regular',
    },
    {
      code: 'Quote',
      func: false,
      lang: { en: "'", lt: "'" },
      width: 'regular',
    },
    {
      code: 'Enter',
      func: true,
      lang: { en: 'Enter', lt: 'Enter' },
      width: 'extra-wide',
    },
  ],
  [
    {
      code: 'ShiftLeft',
      func: true,
      lang: { en: 'Shift', lt: 'Shift' },
      width: 'extra-wide',
    },
    {
      code: 'KeyZ',
      func: false,
      lang: { en: 'z', lt: 'z' },
      width: 'regular',
    },
    {
      code: 'KeyX',
      func: false,
      lang: { en: 'x', lt: 'x' },
      width: 'regular',
    },
    {
      code: 'KeyC',
      func: false,
      lang: { en: 'c', lt: 'c' },
      width: 'regular',
    },
    {
      code: 'KeyV',
      func: false,
      lang: { en: 'v', lt: 'v' },
      width: 'regular',
    },
    {
      code: 'KeyB',
      func: false,
      lang: { en: 'b', lt: 'b' },
      width: 'regular',
    },
    {
      code: 'KeyN',
      func: false,
      lang: { en: 'n', lt: 'n' },
      width: 'regular',
    },
    {
      code: 'KeyM',
      func: false,
      lang: { en: 'm', lt: 'm' },
      width: 'regular',
    },
    {
      code: 'Comma',
      func: false,
      lang: { en: ',', lt: ',' },
      width: 'regular',
    },
    {
      code: 'Period',
      func: false,
      lang: { en: '.', lt: '.' },
      width: 'regular',
    },
    {
      code: 'Slash',
      func: false,
      lang: { en: '/', lt: '/' },
      width: 'regular',
    },
    {
      code: 'ArrowUp',
      func: true,
      lang: { en: '↑', lt: '↑' },
      width: 'regular',
    },
    {
      code: 'ShiftRight',
      func: true,
      lang: { en: 'Shift', lt: 'Shift' },
      width: 'extra-wide',
    },
  ],
  [
    {
      code: 'ControlLeft',
      func: true,
      lang: { en: 'Ctrl', lt: 'Ctrl' },
      width: 'wide',
    },
    {
      code: 'AltLeft',
      func: true,
      lang: { en: 'Alt', lt: 'Alt' },
      width: 'wide',
    },
    {
      code: 'Space',
      func: false,
      lang: { en: ' ', lt: ' ' },
      width: 'ultra-wide',
    },
    {
      code: 'AltRight',
      func: true,
      lang: { en: 'Alt', lt: 'Alt' },
      width: 'wide',
    },
    {
      code: 'ArrowLeft',
      func: true,
      lang: { en: '←', lt: '←' },
      width: 'regular',
    },
    {
      code: 'ArrowDown',
      func: true,
      lang: { en: '↓', lt: '↓' },
      width: 'regular',
    },
    {
      code: 'ArrowRight',
      func: true,
      lang: { en: '→', lt: '→' },
      width: 'regular',
    },
    {
      code: 'ControlRight',
      func: true,
      lang: { en: 'Ctrl', lt: 'Ctrl' },
      width: 'wide',
    },
  ],
];

const keyboardKeys = {};
const keyboardFragment = document.createDocumentFragment();

keyboardLayout.forEach((line) => {
  const keyboardRow = document.createElement('div');
  keyboardRow.classList.add('keyboard__row');

  line.forEach((key) => {
    keyboardKeys[key.code] = key.lang;
    keyboardKeys[key.code].func = key.func;

    const keyElement = document.createElement('button');
    keyElement.setAttribute('id', key.code);
    keyElement.setAttribute('type', 'button');
    keyElement.classList.add('keyboard__key');
    keyElement.classList.add(`keyboard__key_${key.width}`);

    keyElement.textContent = key.lang.en;
    keyboardRow.appendChild(keyElement);
  });

  keyboardFragment.appendChild(keyboardRow);
});

export { keyboardFragment, keyboardKeys };
