import OpenAI from "openai";
import saveKeyData from"./App";

const openai = new OpenAI(
    {apiKey: "sk-", dangerouslyAllowBrowser: true}
);

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

main();
