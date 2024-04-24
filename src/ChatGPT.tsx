import OpenAI from "openai";

const openai = new OpenAI({apiKey: JSON.parse(localStorage.getItem("MYKEY") || '""'), dangerouslyAllowBrowser: true});


export async function responseDetailed(answer: string[]){
    const completion = await openai.chat.completions.create({
        messages:[{role: "system", content: "You are a Career Advisor"},
        {role: "user", content:'Based on these answer:' +answer + ' what career would you recomment to them'}],
        model: "gpt-3.5-turbo",
    });
    const result = completion.choices[0];
    console.log(completion.choices[0]);
    return(result);
}