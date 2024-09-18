<script>
	import NavbarSection from '../sections/HomePageSections/Navbar.svelte';
	import backgroundImage from '$lib/babagang_background.webp';
</script>

<!-- Background section -->
<div
	class="relative min-h-screen bg-cover bg-center"
	style="background-image: url('{backgroundImage}');"
>
	<!-- Import Navbar Section -->
	<NavbarSection />

	<!-- Main Section with H1 and Button -->
	<div
		class="absolute inset-0 mt-32 flex flex-col items-center justify-start px-4 text-center md:mt-64 lg:mt-64"
	>
		<h1
			class="heading mt-2 text-4xl font-extrabold tracking-widest text-white drop-shadow-lg md:text-6xl lg:text-8xl"
		>
			BABAGANG
		</h1>

		<!-- Pill Button -->
		<a
			href="/info"
			class="pill-button mt-4 rounded-full border-2 border-red-500 px-16 py-4 text-xl font-bold text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-red-500 hover:to-red-700 hover:text-white lg:px-20 lg:py-5 lg:text-2xl"
		>
			Inf0
		</a>
	</div>
</div>

<style>
	.min-h-screen {
		background-size: cover;
		background-position: center;
		height: 100vh;
	}

	.heading {
		margin-top: 20px;
	}

	/* Move the heading and button slightly down */

	@media (max-width: 1024px) {
		.heading {
			margin-top: 75px;
			font-size: 100px;
		}
	}

	/* Responsive for small devices */
	@media (max-width: 768px) {
		.heading {
			margin-top: 125px; /* Moves heading slightly down on smaller screens */
			font-size: 50px;
		}

		.pill-button {
			font-size: 1.25rem;
			padding: 0.5rem 2rem;
		}
	}

	@media (max-width: 400px) {
		.heading {
			margin-top: 125px; /* Moves heading slightly down on smaller screens */
			font-size: 44px;
		}
	}

	/* Hover effects for the pill button */
	.pill-button {
		background: transparent;
		border-radius: 9999px;
	}

	.pill-button:hover {
		background: linear-gradient(to right, #ff3e3e, #ff1a1a);
		color: white;
	}
</style>
