const COHERE_API_KEY = import.meta.env.VITE_COHERE_API_KEY;
const COHERE_API_GENERATE_URL = "https://api.cohere.ai/generate";

export async function domainNameGenerator(
  words,
  example1,
  example2,
  randomness
) {
  try {
    const data = {
      model: "command-xlarge-20221108",
      prompt: `Generate a very short creative name for a web domain using the following words: ${words}
      Example 1: ${example1}
      Example 2: ${example2}
      Generate new example`,
      max_tokens: 20,
      temperature: randomness,
      k: 0,
      p: 0.75,
      frequency_penalty: 1,
      presence_penalty: 1,
      return_likelihoods: "NONE",
      truncate: "END",
    };
    const response = await fetch(COHERE_API_GENERATE_URL, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Cohere-Version": "2022-12-06",
        "Content-Type": "application/json",
        authorization: `Bearer ${COHERE_API_KEY}`,
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());
    const { text } = response.generations[0];
    return text;
  } catch (error) {
    console.error(error);
  }
}
