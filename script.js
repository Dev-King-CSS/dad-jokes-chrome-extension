const jokeDisplayer = document.querySelector("#jokeDisplayer")
const button = document.querySelector("#generateJoke")

const generateJoke = async () => {
  const URI = "https://icanhazdadjoke.com/slack"
  const data = await (await fetch(URI)).json()
  const joke = await data.attachments[0].text

  jokeDisplayer.innerText = joke
}
generateJoke()

const copyToClipboard = async () => {
  await navigator.clipboard.writeText(jokeDisplayer.innerText)
  jokeDisplayer.classList.add("copied")
  setTimeout(() => jokeDisplayer.classList.remove("copied"), 1000)
}

button.addEventListener("click", generateJoke, { passive: true })
jokeDisplayer.addEventListener("click", copyToClipboard)
