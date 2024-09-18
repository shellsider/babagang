<script>
	import SignupBackground from '$lib/SignupPageAssets/signupBackgroundp.png'; // Import the background image
	import Navbar from '../../sections/HomePageSections/Navbar.svelte';
	import SignupForm from '../../sections/SignupSection/SignupForm.svelte';
</script>

<main class="min-h-screen bg-cover bg-center" style="background-image: url({SignupBackground});">
	<section id="nav-section">
		<Navbar />
	</section>

	<section id="form" class="flex min-h-screen items-center justify-center">
		<SignupForm />
	</section>
</main>

<style>
	/* Additional styling can be added here if needed */
</style>
