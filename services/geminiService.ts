import { GoogleGenAI } from "@google/genai";
import { SoftwareItem } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAppExplanation = async (appName: string, language: 'en' | 'pt'): Promise<string> => {
  const prompt = language === 'pt' 
    ? `Explique o que é o software "${appName}" e para que serve, em uma linguagem simples e amigável para iniciantes. Máximo de 2 frases curtas.`
    : `Explain what the software "${appName}" is and what it is used for, in simple, beginner-friendly language. Maximum 2 short sentences.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text || (language === 'pt' ? "Informação indisponível." : "Info unavailable.");
  } catch (error) {
    console.error("Error fetching explanation:", error);
    return language === 'pt' ? "Não foi possível carregar a descrição." : "Could not load description.";
  }
};

export const getAiRecommendations = async (query: string): Promise<string[]> => {
  const prompt = `
    The user asks: "${query}" regarding Windows software.
    Recommend 3-5 specific Windows applications available via Winget that match this request.
    Return ONLY a JSON array of strings, where each string is the likely Winget ID (e.g., "Valve.Steam").
    If you are unsure of the ID, guess the most likely one based on standard naming conventions (Vendor.App).
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json"
      }
    });
    
    const text = response.text;
    if(!text) return [];
    return JSON.parse(text);
  } catch (e) {
    console.error(e);
    return [];
  }
};