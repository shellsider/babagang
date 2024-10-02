<!-- Disclaimer.svelte -->
<script>
    // No additional scripts are needed for this component
  </script>
  
  <style>
    /* Ensure the component doesn't exceed the viewport width */
    .disclaimer-container {
      max-width: 100vw;
    }
  
    /* Set the body's background to black */
    body {
      @apply bg-black;
    }
  </style>
  
  <div class="disclaimer-container text-white p-6 sm:p-8 md:p-10">
    <div class="bg-black bg-opacity-90 p-8 sm:p-10 md:p-12 shadow-xl">
      <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center">
        Disclaimer for Babagang
      </h2>
      <p class="text-lg sm:text-xl md:text-2xl text-justify leading-relaxed">
        The content on Babagang is intended solely for entertainment and humorous purposes.
        All characters, events, and scenarios depicted are entirely fictional.
        Any resemblance to actual persons, living or deceased, or to real events is purely coincidental.
      </p>
      <p class="mt-6 text-lg sm:text-xl md:text-2xl text-justify leading-relaxed">
        All information presented is for fun and giggles; no real work or professional activities are
        being conducted or utilized. Images and media used on this site have been included with the
        consent of the individuals involved.
      </p>
      <p class="mt-6 text-lg sm:text-xl md:text-2xl text-justify leading-relaxed">
        Babagang does not aim to offend or harm any individual or entity. The content should not be
        interpreted as factual or reliable information. By accessing and using this website, you
        acknowledge and agree to this disclaimer.
      </p>
    </div>
  </div>
  