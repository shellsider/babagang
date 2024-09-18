<script>
	let isOpen = false;

	function toggleMenu() {
		isOpen = !isOpen;
	}
</script>

<nav class="fixed left-0 top-0 z-10 w-full bg-gray-800 text-white">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<div class="flex-shrink-0">
				<a href="/" class="text-center text-xl font-bold text-white">BABAGANG</a>
			</div>
			<div class="hidden justify-end space-x-4 md:flex">
				<a href="/info" class="text-white hover:text-gray-400">About</a>
				<a href="#contact" class="text-white hover:text-gray-400">Contact</a>
				<a href="/signup" class="text-white hover:text-gray-400">Join</a>
				<a href="/signin" class="text-white hover:text-gray-400">Sign In</a>
			</div>
			<div class="flex items-center md:hidden">
				<button on:click={toggleMenu} class="text-white focus:outline-none">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16m-7 6h7"
						/>
					</svg>
				</button>
			</div>
		</div>
	</div>

	<!-- Dropdown menu -->
	{#if isOpen}
		<div class="absolute z-20 w-full bg-gray-800 text-center">
			<a href="#about" class="block py-2 text-white hover:bg-gray-700">About</a>
			<a href="#contact" class="block py-2 text-white hover:bg-gray-700">Contact</a>
			<a href="#join" class="block py-2 text-white hover:bg-gray-700">Join</a>
			<a href="#signin" class="block py-2 text-white hover:bg-gray-700">Sign In</a>
		</div>
	{/if}
</nav>

<style>
	nav {
		position: fixed;
	}
</style>
