<script>
	import { gangMembers } from '../stores/gang.js';

	let members = [];
	$: members = $gangMembers;
</script>

<div class="min-h-screen bg-black p-4 text-white md:p-8 lg:p-16">
	<!-- Title and Reward Section -->
	<div class="relative mb-8 text-center lg:text-left">
		<div class="mb-4 text-center text-3xl font-bold text-green-500 lg:text-5xl">The Baba Gang</div>

		<!-- For large screens, position on top-right, for small screens keep in flow -->
		<div
			class="reward-box rounded border-2 border-green-500 bg-black p-4 text-center text-xl text-green-500 lg:absolute lg:right-0 lg:top-0"
		>
			<p>
				FOR ANY INFORMATION<br />
				REWARD WILL BE 3 LAKH ₹.
			</p>
		</div>
	</div>

	<!-- Member Information Section -->
	<div class="member space-y-8">
		{#each members as member, i (member.id)}
			<div class="lg:mb-8 lg:flex lg:items-center lg:space-x-8">
				{#if i === 5}
					<!-- Gang Hacker with image on the right -->
					<div class="lg:order-2 lg:w-2/3">
						<h2 class="text-2xl font-bold lg:text-3xl {member.titleColor} mb-2">
							About {member.name}:
						</h2>
						<p class="text-justify text-xl leading-7 lg:text-2xl">{member.description}</p>
					</div>
					<img class="member-img mb-4 lg:order-1 lg:mb-0" src={member.image} alt={member.name} />
				{:else}
					<!-- Regular members with image on the left -->
					<img class="member-img mb-4 lg:mb-0" src={member.image} alt={member.name} />
					<div class="lg:w-2/3">
						<h2 class="text-2xl font-bold lg:text-3xl {member.titleColor} mb-2">
							About {member.name}:
						</h2>
						<p class="text-justify text-xl leading-7 lg:text-2xl">{member.description}</p>
					</div>
				{/if}
			</div>
		{/each}
	</div>
</div>

<style>
	/* For small screens, the image will take full width */
	.member-img {
		width: 100%;
		height: auto;
	}

	/* On large screens, we restrict the width to 25% */
	@media (min-width: 1024px) {
		.member-img {
			width: 25%;
		}
	}
</style>
