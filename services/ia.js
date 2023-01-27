const COHERE_API_KEY = "NWNonsdhK6r4XljUt9FsrBgDwK4KUTEi0e87fGfX";
const COHERE_API_GENERATE_URL = "https://api.cohere.ai/generate";

/*
PROMPT:
Generate a short creative name for a web domain using the following words: domain, idea
Example 1: www.domainidea.com
Example 2: www.ideadomain.org
Generate new example 
*/

export async function domainNameGenerator() {
  const data = {
    model: "command-xlarge-20221108",
    prompt: `Generate a short creative name for a web domain using the following words: domain, idea
    Example 1: www.domainidea.com
    Example 2: www.ideadomain.org
    Generate new example`,
    max_tokens: 25,
    temperature: 1,
    k: 0,
    p: 0.75,
    frequency_penalty: 1,
    presence_penalty: 0,
    stop_sequences: ["--"],
    return_likelihoods: "NONE",
  };
  const response = await fetch(COHERE_API_GENERATE_URL, {
    method: "POST",
    headers: {
      Authorization: `BEARER ${COHERE_API_KEY}`,
      "Content-Type": "application/json",
      "Cohere-Version": "2022-12-06",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());

  console.log(response);

  const { text } = response.generations[0];
  return text;
}
