import { keyboardFragment, keyboardKeys } from './keyboardLayout.js';

class Keyboard {
  constructor() {
    this.caps = false;
    this.lang = localStorage.getItem('lang') === 'lt' ? 'lt' : 'en';
  }

  init() {
    // Create main elements
    this.wrapper = document.createElement('main');
    this.textArea = document.createElement('textarea');
    this.keyboard = document.createElement('div');
    const keyboardRow = document.createElement('div');
    this.language = document.createElement('p');

    // Setup main elements
    this.wrapper.classList.add('wrapper');

    this.textArea.autofocus = true;
    this.textArea.classList.add('text');

    this.keyboard.classList.add('keyboard');
    keyboardRow.classList.add('keyboard__row');

    this.language.classList.add('info');
    this.language.textContent = 'Press Ctrl+Alt to switch ENG/LT languages.';

    // Add to DOM
    this.keyboard.appendChild(keyboardFragment);
    this.showLanguage(this.lang);

    this.wrapper.appendChild(this.textArea);
    this.wrapper.appendChild(this.keyboard);
    this.wrapper.appendChild(this.language);

    document.body.appendChild(this.wrapper);

    this.createListeners();
  }

  createListeners() {
    this.textArea.addEventListener('blur', () => {
      setTimeout(() => {
        this.textArea.focus();
      }, 0);
    });

    document.addEventListener('keydown', (e) => {
      e.stopImmediatePropagation();

      const key = document.getElementById(e.code);
      if (!key) {
        e.preventDefault();
        return;
      }

      if (e.code === 'CapsLock' && !e.repeat) {
        e.preventDefault();
        this.caps = !this.caps;

        const addRemove = this.caps ? 'add' : 'remove';
        key.classList[addRemove]('active');

        this.switchCaps(e.shiftKey);
      } else {
        key.classList.add('active');

        if (e.ctrlKey && e.altKey && !e.repeat) {
          e.preventDefault();
          this.lang = this.lang === 'lt' ? 'en' : 'lt';
          localStorage.setItem('lang', this.lang);
          this.showLanguage(this.lang, e.shiftKey);
        } else if (!keyboardKeys[e.code].func) {
          e.preventDefault();
          this.insertText(key.textContent);
        } else if (e.key === 'Shift' && !e.repeat) {
          e.preventDefault();
          this.switchCaps(e.shiftKey);
        } else if (e.code === 'Tab') {
          e.preventDefault();
          this.insertText('\t');
        } else if (e.code === 'Enter') {
          e.preventDefault();
          this.insertText('\n');
        } else if (e.code === 'Backspace') {
          e.preventDefault();
          this.pressBackspace();
        } else if (e.code === 'Delete') {
          e.preventDefault();
          this.pressDelete();
        } else if (e.code === 'ArrowUp' && !e.isTrusted) {
          this.arrowUp();
        } else if (e.code === 'ArrowDown' && !e.isTrusted) {
          this.arrowDown();
        } else if (e.code === 'ArrowLeft' && !e.isTrusted) {
          this.arrowLeft();
        } else if (e.code === 'ArrowRight' && !e.isTrusted) {
          this.arrowRight();
        }
      }
    });

    document.addEventListener('keyup', (e) => {
      e.stopImmediatePropagation();

      const key = document.getElementById(e.code);
      if (!key) {
        e.preventDefault();
        return;
      }

      if (e.code !== 'CapsLock') {
        key.classList.remove('active');
        if (e.key === 'Shift') {
          e.preventDefault();
          this.switchCaps(e.shiftKey);
        }
      }
    });

    this.keyboard.addEventListener('click', (e) => {
      this.textArea.focus();
      const eventKeyDown = new KeyboardEvent('keydown', {
        bubbles: true,
        cancelable: true,
        code: e.target.id,
        view: window,
      });
      document.dispatchEvent(eventKeyDown);

      this.textArea.focus();
      const eventKeyUp = new KeyboardEvent('keyup', {
        bubbles: true,
        cancelable: true,
        code: e.target.id,
        view: window,
      });
      document.dispatchEvent(eventKeyUp);
    });
  }

  arrowUp() {
    this.textArea.selectionStart = 0;
    this.textArea.selectionEnd = this.textArea.selectionStart;
  }

  arrowDown() {
    this.textArea.selectionEnd = this.textArea.textLength;
    this.textArea.selectionStart = this.textArea.selectionEnd;
  }

  arrowLeft() {
    this.textArea.selectionStart = Math.max(0, this.textArea.selectionStart - 1);
    this.textArea.selectionEnd = this.textArea.selectionStart;
  }

  arrowRight() {
    this.textArea.selectionStart = Math.min(
      this.textArea.textLength,
      this.textArea.selectionEnd + 1,
    );
    this.textArea.selectionEnd = this.textArea.selectionStart;
  }

  insertText(chars) {
    const cursorAt = this.textArea.selectionStart;

    this.textArea.value = this.textArea.value.slice(0, cursorAt)
    + chars + this.textArea.value.slice(this.textArea.selectionEnd);

    this.textArea.selectionStart = cursorAt + chars.length;
    this.textArea.selectionEnd = this.textArea.selectionStart;
  }

  pressBackspace() {
    if (this.textArea.selectionStart !== this.textArea.selectionEnd) {
      this.insertText('');
    } else {
      const cursorAt = Math.max(0, this.textArea.selectionStart - 1);

      this.textArea.value = this.textArea.value.slice(0, cursorAt)
      + this.textArea.value.slice(this.textArea.selectionEnd);

      this.textArea.selectionStart = cursorAt;
      this.textArea.selectionEnd = this.textArea.selectionStart;
    }
  }

  pressDelete() {
    if (this.textArea.selectionStart !== this.textArea.selectionEnd) {
      this.insertText('');
    } else {
      const cursorAt = this.textArea.selectionStart;

      this.textArea.value = this.textArea.value.slice(0, cursorAt)
        + this.textArea.value.slice(cursorAt + 1);

      this.textArea.selectionStart = cursorAt;
      this.textArea.selectionEnd = this.textArea.selectionStart;
    }
  }

  showLanguage(lang, shift = false) {
    this.keyboard.querySelectorAll('.keyboard__key').forEach(
      (e) => {
        e.textContent = keyboardKeys[e.id][lang];
      },
    );

    this.switchCaps(shift);
  }

  switchCaps(shiftKey) {
    const showUpperCase = (this.caps && !shiftKey) || (!this.caps && shiftKey);
    const toCase = showUpperCase ? 'toUpperCase' : 'toLowerCase';
    Array.from(this.keyboard.querySelectorAll('.keyboard__key')).forEach(
      (e) => {
        if (!keyboardKeys[e.id].func) {
          switch (`${e.id} ${this.lang}`) {
            case 'Backquote en': case 'Backquote lt':
              e.textContent = shiftKey ? '~' : '`';
              break;
            case 'Digit1 en':
              e.textContent = shiftKey ? '!' : '1';
              break;
            case 'Digit2 en':
              e.textContent = shiftKey ? '@' : '2';
              break;
            case 'Digit3 en':
              e.textContent = shiftKey ? '#' : '3';
              break;
            case 'Digit4 en':
              e.textContent = shiftKey ? '$' : '4';
              break;
            case 'Digit5 en':
              e.textContent = shiftKey ? '%' : '5';
              break;
            case 'Digit6 en':
              e.textContent = shiftKey ? '^' : '6';
              break;
            case 'Digit7 en':
              e.textContent = shiftKey ? '&' : '7';
              break;
            case 'Digit8 en':
              e.textContent = shiftKey ? '*' : '8';
              break;
            case 'Digit9 en': case 'Digit9 lt':
              e.textContent = shiftKey ? '(' : '9';
              break;
            case 'Digit0 en': case 'Digit0 lt':
              e.textContent = shiftKey ? ')' : '0';
              break;
            case 'Minus en': case 'Minus lt':
              e.textContent = shiftKey ? '_' : '-';
              break;
            case 'Equal en':
              e.textContent = shiftKey ? '+' : '=';
              break;
            case 'BracketLeft en': case 'BracketLeft lt':
              e.textContent = shiftKey ? '{' : '[';
              break;
            case 'BracketRight en': case 'BracketRight lt':
              e.textContent = shiftKey ? '}' : ']';
              break;
            case 'Backslash en': case 'Backslash lt':
              e.textContent = shiftKey ? '|' : '\\';
              break;
            case 'Semicolon en': case 'Semicolon lt':
              e.textContent = shiftKey ? ':' : ';';
              break;
            case 'Quote en': case 'Quote lt':
              e.textContent = shiftKey ? '"' : "'";
              break;
            case 'Comma en': case 'Comma lt':
              e.textContent = shiftKey ? '<' : ',';
              break;
            case 'Period en': case 'Period lt':
              e.textContent = shiftKey ? '>' : '.';
              break;
            case 'Slash en': case 'Slash lt':
              e.textContent = shiftKey ? '?' : '/';
              break;
            default:
              e.textContent = e.textContent[toCase]();
              break;
          }
        }
      },
    );
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const keyboard = new Keyboard();
  keyboard.init();
});
