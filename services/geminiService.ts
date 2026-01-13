
import { GoogleGenAI, Type } from "@google/genai";

export async function getAiAudit(restaurantInfo: string) {
  const apiKey = process.env.API_KEY;
  
  if (!apiKey) {
    console.error("Clé API manquante. L'audit IA ne fonctionnera pas sur une version statique GitHub Pages sans configuration backend ou injection de clé.");
    throw new Error("Le service d'audit nécessite une configuration de clé API.");
  }

  const ai = new GoogleGenAI({ apiKey });
  
  try {
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

    let text = response.text || "";
    // Nettoyage au cas où le modèle renverrait du markdown
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    const cleanJson = jsonMatch ? jsonMatch[0] : text;

    return JSON.parse(cleanJson);
  } catch (e) {
    console.error("Erreur lors de l'appel Gemini ou du parsing:", e);
    throw new Error("Une erreur est survenue lors de l'analyse IA.");
  }
}
