import {db} from "$lib/server/db";
import {and, eq} from "drizzle-orm";
import {chatbots} from "$lib/server/db/schema";
import {redirect} from "@sveltejs/kit";

export const load = async ({params, locals}) => {
    // if (!locals.user?.id) redirect(302, '/login')
    if (!params.id) redirect(302, '/chatbot')
    const chatbot = await db?.query.chatbots.findFirst({
        where: and(eq(chatbots.id, params.id), eq(chatbots.userId, locals.user?.id ?? ''))
    })
    return {
        chatbot
    }
}