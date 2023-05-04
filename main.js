import './style.css'

const randQuotes = '{"_id":"xdwmubQ3Sh49","content":"Our doubts are traitors and make us lose the good we often might win, by fearing to attempt.","author":"Jane Addams","tags":["Famous Quotes"],"authorSlug":"jane-addams","length":92,"dateAdded":"2020-11-10","dateModified":"2023-04-14"}';

const quotes = JSON.parse(randQuotes);

const p1 = document.createElement('p');
const p2 = document.createElement('p');
const div = document.querySelector('.card-content');

p1.classList.add('title');
p2.classList.add('subtitle');

p1.textContent = `"${quotes.content}"`;
p2.textContent = quotes.author

div.appendChild(p1);
div.appendChild(p2);