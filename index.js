'use strict';

document.documentElement.lang = 'en';
document.title = 'Valimo Business';

const meta = document.createElement('meta');
meta.name = 'viewport';
meta.content = 'width=device-width, initial-scale=1';
document.head.append(meta);

const style = document.createElement('style');
style.textContent = `
  * { box-sizing: border-box; }
  html, body { width: 100%; min-height: 100%; margin: 0; }
  body {
    min-height: 100vh;
    display: grid;
    place-items: center;
    overflow: hidden;
    background:
      radial-gradient(circle at 50% 42%, rgba(42, 122, 255, .18), transparent 34%),
      linear-gradient(135deg, #05070b 0%, #0a1019 52%, #020408 100%);
    color: #f4f8ff;
    font-family: Inter, "Segoe UI", system-ui, sans-serif;
  }
  body::before {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    opacity: .18;
    background-image:
      linear-gradient(rgba(92, 168, 255, .12) 1px, transparent 1px),
      linear-gradient(90deg, rgba(92, 168, 255, .12) 1px, transparent 1px);
    background-size: 48px 48px;
    mask-image: radial-gradient(circle at center, black, transparent 72%);
  }
  main {
    position: relative;
    z-index: 1;
    text-align: center;
    padding: 3rem;
  }
  h1 {
    margin: 0;
    font-size: clamp(2.5rem, 8vw, 7rem);
    font-weight: 300;
    letter-spacing: .16em;
    text-transform: uppercase;
    text-shadow: 0 0 28px rgba(112, 184, 255, .38);
  }
  .signal {
    width: 5rem;
    height: 1px;
    margin: 1.5rem auto 0;
    background: #9bd0ff;
    box-shadow: 0 0 14px #63b6ff;
  }
`;
document.head.append(style);

const main = document.createElement('main');
const title = document.createElement('h1');
const signal = document.createElement('div');

title.textContent = 'Valimo Business';
signal.className = 'signal';
signal.setAttribute('aria-hidden', 'true');

main.append(title, signal);
document.body.append(main);
