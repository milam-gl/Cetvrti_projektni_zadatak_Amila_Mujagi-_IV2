const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('get-joke-btn');

jokeBtn.addEventListener('click', generateJoke);

generateJoke();

async function generateJoke() {
  const config = {
    headers: {
      'Accept': 'application/json'
    }
  };

  const res = await fetch('https://icanhazdadjoke.com/', config);

  const data = await res.json();

  const template = Handlebars.compile(document.getElementById('joke-template').innerHTML);
  jokeEl.innerHTML = template(data);
}
