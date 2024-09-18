<script>
	import BG from '$lib/SignupPageAssets/signupBackgroundp.png';
	import imagePlaceholder from '$lib/SignupPageAssets/favicon2.webp';
</script>

<div class="custom flex min-h-screen items-center justify-center bg-gray-50">
	<div
		class="flex h-full w-full flex-col overflow-hidden rounded-lg bg-white shadow-md md:max-w-4xl md:flex-row"
	>
		<!-- Left Form Section -->
		<div class="flex w-full flex-col items-center justify-center p-8 md:w-1/2">
			<!-- Heading Section -->
			<h1 class="mb-6 text-3xl font-bold">Join Us</h1>
			<!-- You can change this to "Sign Up" or any other heading -->

			<form class="w-full space-y-6">
				<div>
					<label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
					<input
						type="email"
						id="email"
						class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
						placeholder="Email address"
					/>
				</div>

				<div>
					<label for="username" class="block text-sm font-medium text-gray-700">Username</label>
					<input
						type="text"
						id="username"
						class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
						placeholder="Username"
					/>
				</div>
				<!-- 
				<div>
					<label for="password" class="block text-sm font-medium text-gray-700">Password</label>
					<input
						type="password"
						id="password"
						class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
						placeholder="Password"
					/>
				</div>

				<div>
					<label for="confirmpassword" class="block text-sm font-medium text-gray-700"
						>Confirm Password</label
					>
					<input
						type="password"
						id="conf-password"
						class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
						placeholder="Confirm Password"
					/>
				</div> -->

				<div>
					<button
						type="submit"
						class="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
					>
						Send Request
					</button>
				</div>
			</form>
		</div>

		<!-- Right Image Section -->
		<div class="hidden md:block md:w-1/2">
			<!-- svelte-ignore a11y-img-redundant-alt -->
			<img
				class="h-full w-full border-none object-cover"
				src={imagePlaceholder}
				alt="Placeholder Image"
			/>
		</div>
	</div>
</div>

<style>
	.custom {
		background: none;
	}
</style>
