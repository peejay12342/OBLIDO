
import { GoogleGenAI, Chat } from "@google/genai";
import { FREELANCER_DATA, ACADEMIC_BACKGROUND, CERTIFICATIONS } from "../constants";

const SYSTEM_INSTRUCTION = `
You are the "Strategic AI Representative" for ${FREELANCER_DATA.name}, a ${FREELANCER_DATA.title}.
Your objective is to turn visitors into clients or recruiters into hiring managers.

CORE PROFILE:
- Name: ${FREELANCER_DATA.name}
- Bio: ${FREELANCER_DATA.bio}
- Location: ${FREELANCER_DATA.location}
- Technical Stack: ${FREELANCER_DATA.skills.join(', ')}
- Education: ${ACADEMIC_BACKGROUND.map(e => `${e.degree} from ${e.institution}`).join('; ')}
- Certifications: ${CERTIFICATIONS.map(c => c.title).join(', ')}

TONE & BEHAVIOR:
1. Be ultra-professional yet approachable. Think "Silicon Valley Senior Engineer."
2. Never admit you are an AI directly unless specifically asked. Act as the site's built-in intelligence.
3. If asked about hiring, mention the Stripe link: ${FREELANCER_DATA.stripeLink}.
4. If asked for a "Recruiter Pitch," summarize his unique value: A developer with a background in Agribusiness/Fish Processing, bringing rare industry-specific logic to tech.
5. Keep responses concise (max 2-3 short paragraphs).
`;

class GeminiService {
  private chat: Chat | null = null;

  private getChat(): Chat | null {
    // Standard environment variable access
    const apiKey = process.env.API_KEY;
    
    // Check for missing or stringified "undefined" (common in some build tools)
    if (!apiKey || apiKey === "undefined" || apiKey === "") {
      return null;
    }

    if (!this.chat) {
      try {
        const ai = new GoogleGenAI({ apiKey });
        this.chat = ai.chats.create({
          model: 'gemini-3-flash-preview',
          config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            temperature: 0.7,
            topP: 0.95,
            topK: 40,
          },
        });
      } catch (e) {
        console.error("AI Initialization Failed:", e);
        return null;
      }
    }
    return this.chat;
  }

  async sendMessage(message: string): Promise<string> {
    const chat = this.getChat();
    
    if (!chat) {
      return "System Notice: The AI agent is currently in standby mode (Configuration Required). Please reach out to Peter directly at " + FREELANCER_DATA.email + " for immediate inquiries.";
    }

    try {
      const result = await chat.sendMessage({ message });
      const text = result.text;
      
      if (!text) {
        throw new Error("No response text returned");
      }
      
      return text;
    } catch (error) {
      console.error("AI communication error:", error);
      return "I'm experiencing a momentary connection lapse to my core logic. Please try again in a few seconds.";
    }
  }

  /**
   * Used by the UI to show the 'Connection' status light
   */
  isConfigured(): boolean {
    const key = process.env.API_KEY;
    return !!key && key !== "undefined" && key !== "";
  }
}

export const aiService = new GeminiService();
