
import { GoogleGenAI, Type } from "@google/genai";

export async function getAiAudit(restaurantInfo: string) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Analysez ce restaurant et donnez 3 conseils RSE concrets et rentables pour un restaurant situé à Grenoble. Restaurant: ${restaurantInfo}`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          recommendations: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                title: { type: Type.STRING },
                description: { type: Type.STRING },
                estimatedSavings: { type: Type.STRING }
              },
              required: ["title", "description", "estimatedSavings"]
            }
          },
          summary: { type: Type.STRING }
        },
        required: ["recommendations", "summary"]
      },
      systemInstruction: "Tu es un consultant expert en RSE (Responsabilité Sociétale des Entreprises) spécialisé dans la restauration et l'hôtellerie pour la startup FreeBoost. Ton ton est professionnel, amical et optimiste. Tu proposes des solutions concrètes, rentables et faciles à mettre en oeuvre."
    }
  });

  return JSON.parse(response.text);
}
