import {json, type RequestHandler} from "@sveltejs/kit";

export const POST: RequestHandler = async ({request, params, platform}) => {
    const {question} = await request.json()
    if (!question) {
        return json({
            success: false,
            message: "invalid  question"
        })
    }

    const embeddings = await platform?.env.AI.run('@cf/baai/bge-large-en-v1.5', { text: question })

    const vectors = embeddings.data[0]

    const SIMILARITY_CUTOFF = 0.75
    const vectorQuery = await platform?.env.BOTIFIED_VECTOR.query(vectors, { topK: 1 });
    const vecIds = vectorQuery.matches
        .filter(vec => vec.score > SIMILARITY_CUTOFF)
        .map(vec => vec.id)

    return json({})
}