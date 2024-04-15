<script lang="ts">
    import type {PageServerData} from "./$types";
    import {ScrollArea} from "$lib/components/ui/scroll-area";
    import * as Card from "$lib/components/ui/card";
    import {Label} from "$lib/components/ui/label";
    import {Input} from "$lib/components/ui/input";
    import {Button} from "$lib/components/ui/button";
    import {page} from "$app/stores";
    import {toast} from "svelte-sonner";

    export let data: PageServerData
    let url = ''
    const addToVector = async () => {
        if (new URL(url)) {
            const reponse = await fetch(`/chatbot/${$page.params.id}/vectorize`, {
                method: "POST",
                body: JSON.stringify({url})
            })
            if (reponse.ok) {
                toast.success("Added Successfully")
            }
        }
        toast.error("Please provide a valid link")
    }
</script>

<div class="flex items-center"><h1 class="text-lg font-semibold md:text-2xl">Chatbot: {data.chatbot?.name ?? "The Ether"}</h1></div>
<ScrollArea class="flex flex-1 rounded-md border ">
    <div class="flex flex-col h-full w-full">
        <Card.Root class="mx-5 my-2.5 max-w-[380px]">
            <Card.Header class="items-center">
                <Card.Title class="flex items-center space-x-2">
                    <img src={data.chatbot?.config?.icon} alt={data.chatbot?.name ?? "The Ether"} class="h-6 w-6"/>
                    <span class="ml-1">{data.chatbot?.name ?? "The Ether"}</span>
                </Card.Title>
                <Card.Description>{data.chatbot?.config?.job}</Card.Description>
            </Card.Header>
            <Card.Content>
                <p>Card Content</p>
            </Card.Content>
            <Card.Footer>
                <p>Card Footer</p>
            </Card.Footer>
        </Card.Root>

        <Card.Root class="mx-5 my-2.5 max-w-[380px]">
            <Card.Header class="items-center">
                <Card.Title class="flex items-center space-x-2">
                    Form
                </Card.Title>
                <Card.Description>Add web link to create a vectore store</Card.Description>
            </Card.Header>
            <Card.Content>
                <div class="flex flex-col space-y-1.5">
                    <Label for="url">Link</Label>
                    <Input id="url" bind:value={url} placeholder="https://botified.chat" />
                </div>
            </Card.Content>
            <Card.Footer>
                <Button on:click={() => addToVector()}>Create Vector</Button>
            </Card.Footer>
        </Card.Root>
    </div>
</ScrollArea>