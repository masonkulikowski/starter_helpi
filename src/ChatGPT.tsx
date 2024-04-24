import OpenAI from "openai";

const openai = new OpenAI({apiKey: JSON.parse(localStorage.getItem("MYKEY") || '""'), dangerouslyAllowBrowser: true});


export async function responseDetailed(){
    const completion = await openai.chat.completions.create({
        messages:[{role: "system", content: "You are a helpful assistant"},
        {role: "user", content:"what is hello in spanish"}],
        model: "gpt-3.5-turbo",
    });
    const result = completion.choices[0];
    console.log(completion.choices[0]);
    return(result);
}