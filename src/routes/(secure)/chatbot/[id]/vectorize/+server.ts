import { CheerioWebBaseLoader } from "langchain/document_loaders/web/cheerio";
import { HtmlToTextTransformer } from "@langchain/community/document_transformers/html_to_text";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

import {json, type RequestHandler} from "@sveltejs/kit";
import {CloudflareVectorizeStore, CloudflareWorkersAIEmbeddings} from "@langchain/cloudflare";
import {generateId} from "lucia";

const generateIdList = (listLength: number) => {
    const idList = [];
    for (let i = 0; i < listLength; i++) {
        // Generate a random ID using the generateRandomId function
        const randomId = generateId(10); // Adjust ID length as needed
        idList.push(randomId);
    }

    return idList;
};
export const POST: RequestHandler = async ({request, params, locals, platform}) => {
    const {url}: { url: string } = await request.json()
    const loader = new CheerioWebBaseLoader(
        url
    );
    const docs = await loader.load();
    const splitter = RecursiveCharacterTextSplitter.fromLanguage("html");
    const transformer = new HtmlToTextTransformer();

    const sequence = splitter.pipe(transformer);

    const newDocuments = await sequence.invoke(docs);

    const additionalInfo = {
        userId: locals.user?.id,
        chatbot: params.id,
        loc: []
    }

    for (let i = 0; i < newDocuments.length; i++) {
        const document = newDocuments[i];
        console.log(document.metadata.loc)
        document.metadata = {
            ...document.metadata,
            ...additionalInfo,
        };
    }
    const embeddings = new CloudflareWorkersAIEmbeddings({
        binding: platform?.env.AI as Fetcher,
        model: "@cf/baai/bge-large-en-v1.5",
    });

    const store = new CloudflareVectorizeStore(embeddings, {
        index: platform?.env.BOTIFIED_VECTOR as VectorizeIndex,
    });
    console.log(store)

    const d = await store.addDocuments(newDocuments, generateIdList(newDocuments.length))
    console.log(d)
    return json({})
}