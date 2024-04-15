<script lang="ts">
    import * as Sheet from "$lib/components/ui/sheet/index.js";
    import { Button } from "$lib/components/ui/button/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import { Label } from "$lib/components/ui/label/index.js";
    import type {ChatbotConfig} from "$lib/utils/chatbot.types";
    import {Textarea} from "$lib/components/ui/textarea";
    import {toast} from "svelte-sonner";
    import {goto} from "$app/navigation";

    let chatbotConfig: ChatbotConfig = {
        preconfiguredQuestions: "",
        name: "The Ether",
        conversationBgColor: "",
        conversationTextColor: "",
        headerColor: "",
        headerTextColor: "",
        icon: "https://cdn.botified.chat/logo.svg",
        welcomeMessage: "",
        job: ""
    }

    async function createChatbot() {
        const response = await fetch('/chatbot/create', {
            method: "POST",
            body: JSON.stringify(chatbotConfig)
        })
        if (response.ok) {
            const jsonResponse = await response.json()
            if (jsonResponse?.success) {
                toast.success(jsonResponse.message)
                return goto(`/chatbot/${jsonResponse.data.id}`)
            }
            return toast.error(jsonResponse.message)
        }
        return toast.error('Server Side Error: Please try again later.')
    }
</script>

<div
        data-x-chunk-name="dashboard-02-chunk-1"
        data-x-chunk-description="An empty state showing no chatbots with a heading, description and a call to action to add a chatbot."
        class="flex flex-1 items-center justify-center rounded-lg border shadow-sm"
>
    <div class="flex flex-col items-center gap-1 text-center">
        <h3 class="text-2xl font-bold tracking-tight">You have no chatbots</h3>
        <p class="text-sm text-muted-foreground">You can start chatting as soon as you add a chatbot.</p>
        <Sheet.Root>
            <Sheet.Trigger asChild let:builder>
                <Button builders={[builder]} >Create Chatbot</Button>
            </Sheet.Trigger>
            <Sheet.Content side="right">
                <Sheet.Header>
                    <Sheet.Title>New Chatbot</Sheet.Title>
                    <Sheet.Description>
                        Create a new journey for your visitors.
                    </Sheet.Description>
                </Sheet.Header>
                <div class="grid gap-4 py-4">
                    <div class="my-3 mx-auto">
                        <img src={chatbotConfig.icon} alt={chatbotConfig.name}/>
                    </div>
                    <div class="grid grid-cols-1 items-center gap-4">
                        <Label for="icon" class="text-left">Chatbot Logo</Label>
                        <Input disabled id="icon" class="col-span-3" bind:value={chatbotConfig.icon}/>
                    </div>
                    <div class="grid grid-cols-1 items-center gap-4">
                        <Label for="name" class="text-left">Name</Label>
                        <Input id="name" class="col-span-3" bind:value={chatbotConfig.name}/>
                    </div>
                    <div class="grid grid-cols-1 items-center gap-4">
                        <Label for="preconfiguredQuestions" class="text-left">Pre Configured Question</Label>
                        <Textarea id="preconfiguredQuestions" class="col-span-3" bind:value={chatbotConfig.preconfiguredQuestions}/>
                    </div>
                    <div class="grid grid-cols-1 items-center gap-4">
                        <Label for="welcomeMessage" class="text-left">Welcome Message</Label>
                        <Textarea id="welcomeMessage" class="col-span-3" bind:value={chatbotConfig.welcomeMessage}/>
                    </div>
                    <div class="grid grid-cols-1 items-center gap-4">
                        <Label for="welcomeMessage" class="text-left">Job (What's the work of this chatbot?)</Label>
                        <Textarea id="welcomeMessage" class="col-span-3" bind:value={chatbotConfig.job}/>
                    </div>
                    <div class="grid grid-cols-1 items-center gap-4">
                        <Label for="conversationBgColor" class="text-left">Conversation Background Color</Label>
                        <Input type="color" id="conversationBgColor" class="col-span-3" bind:value={chatbotConfig.conversationBgColor}/>
                    </div>
                    <div class="grid grid-cols-1 items-center gap-4">
                        <Label for="conversationTextColor" class="text-left">Conversation Text Color</Label>
                        <Input type="color" id="conversationTextColor" class="col-span-3" bind:value={chatbotConfig.conversationTextColor}/>
                    </div>
                    <div class="grid grid-cols-1 items-center gap-4">
                        <Label for="headerColor" class="text-left">Header Color</Label>
                        <Input type="color" id="headerColor" class="col-span-3" bind:value={chatbotConfig.headerColor}/>
                    </div>
                    <div class="grid grid-cols-1 items-center gap-4">
                        <Label for="headerTextColor" class="text-left">Header Text Color</Label>
                        <Input type="color" id="headerTextColor" class="col-span-3" bind:value={chatbotConfig.headerTextColor}/>
                    </div>
                </div>
                <Sheet.Footer>
                    <Sheet.Close asChild let:builder>
                        <Button builders={[builder]} on:click={() => createChatbot()}>Create Chatbot</Button>
                    </Sheet.Close>
                </Sheet.Footer>
            </Sheet.Content>
        </Sheet.Root>
    </div>
</div>

