'use strict';

document.documentElement.lang = 'en';
document.title = 'Valimo Business';

const meta = document.createElement('meta');
meta.name = 'viewport';
meta.content = 'width=device-width, initial-scale=1';
document.head.append(meta);

const main = document.createElement('main');
const title = document.createElement('h1');
title.textContent = 'Valimo Business';
main.append(title);
document.body.append(main);
