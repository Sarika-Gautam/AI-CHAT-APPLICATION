import ai from "../config/gemini.js";

export const generateAIResponse = async (prompt) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Service Error:", error);
    throw error;
  }
};