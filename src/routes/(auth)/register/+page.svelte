<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import * as Form from '$lib/components/ui/form';
	import type { PageServerData } from './$types';
	import { superForm } from 'sveltekit-superforms';
	import { SignupFormZodAdapter } from '$lib/utils/schema.zod';
	import CircleAlert from 'lucide-svelte/icons/circle-alert';
	import * as Alert from '$lib/components/ui/alert/index.js';

	export let data: PageServerData;
	const signupForm = superForm(data.signupForm, {
		validators: SignupFormZodAdapter
	});
	const { form: formData, enhance, message } = signupForm;
</script>

<div class="-mt-32 flex flex-grow flex-col items-center justify-center md:mt-0">
	<Card.Root class="mx-auto max-w-sm">
		<Card.Header>
			<Card.Title class="text-xl">Sign Up</Card.Title>
			<Card.Description>Enter your information to create an account</Card.Description>
			{#if $message?.type === 'error'}
				<Alert.Root variant="destructive">
					<CircleAlert class="h-4 w-4" />
					<Alert.Title class="capitalize">{$message.type}</Alert.Title>
					<Alert.Description>{$message?.message}</Alert.Description>
				</Alert.Root>
			{/if}
		</Card.Header>
		<form method="POST" use:enhance>
			<Card.Content class="grid gap-2">
				<Form.Field form={signupForm} name="name">
					<Form.Control let:attrs>
						<Label>Full Name</Label>
						<Input {...attrs} type="text" bind:value={$formData.name} />
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>
				<Form.Field form={signupForm} name="email">
					<Form.Control let:attrs>
						<Label>Email</Label>
						<Input {...attrs} type="email" bind:value={$formData.email} />
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>
				<Form.Field form={signupForm} name="password">
					<Form.Control let:attrs>
						<Label>Password</Label>
						<Input {...attrs} type="password" bind:value={$formData.password} />
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>
			</Card.Content>
			<Card.Footer>
				<Button type="submit" class="w-full">Sign up</Button>
			</Card.Footer>
		</form>
	</Card.Root>
</div>
