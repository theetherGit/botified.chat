<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import type { PageServerData } from './$types';
	import { superForm } from 'sveltekit-superforms';
	import { LoginFormZodAdapter } from '$lib/utils/schema.zod';

	export let data: PageServerData;
	const loginForm = superForm(data.loginForm, {
		validators: LoginFormZodAdapter
	});

	const { form: formData, enhance } = loginForm;
</script>

<div class="-mt-32 flex flex-grow flex-col items-center justify-center md:mt-0">
	<Card.Root class="w-full max-w-sm">
		<Card.Header>
			<Card.Title class="text-2xl">Login</Card.Title>
			<Card.Description>Enter your email below to login to your account.</Card.Description>
		</Card.Header>
		<form method="POST" use:enhance>
			<Card.Content class="grid gap-2">
				<Form.Field form={loginForm} name="email">
					<Form.Control let:attrs>
						<Label>Email</Label>
						<Input {...attrs} type="email" bind:value={$formData.email} />
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>
				<Form.Field form={loginForm} name="password">
					<Form.Control let:attrs>
						<Label>Password</Label>
						<Input {...attrs} type="password" bind:value={$formData.password} />
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>
			</Card.Content>
			<Card.Footer>
				<Button type="submit" class="w-full">Login</Button>
			</Card.Footer>
		</form>
	</Card.Root>
</div>
