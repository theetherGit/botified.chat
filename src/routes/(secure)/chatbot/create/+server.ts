import {luciaManager} from "$lib/server/auth/lucia.manager";
import {json} from "@sveltejs/kit";
import type {ChatbotConfig} from "$lib/utils/chatbot.types";
import {db} from "$lib/server/db";
import {chatbots} from "$lib/server/db/schema";
import {generateId} from "lucia";
function allValuesExist(obj: ChatbotConfig) {
    return Object.values(obj).every(value => value !== undefined && value !== null && value !== "");
}
export const POST = async ({request, cookies, locals}) => {
    const config: ChatbotConfig = await request.json()
    if (config) {
        if (allValuesExist(config)) {
            try {
                const data = await db?.insert(chatbots).values({
                    id: generateId(15),
                    userId: locals.user?.id,
                    name: config.name,
                    uniqueId: generateId(15), // Implement user defined names in future
                    config
                }).returning({id: chatbots.id})
                return json({
                    success: true,
                    message: 'Chatbot created successfully.',
                    data: data[0],
                })
            } catch (e) {
                console.error(e)
                return json({
                    success: false,
                    message: 'Error While creating the chatbot.'
                })
            }
        }
    }
    return json({
        success: false,
        message: 'Nhi hua'
    })
}