// src/stores/gang.js
import { writable } from 'svelte/store';
import gangleader from '$lib/gangleader.png'
import bali from '$lib/bali.png'
import silentKiller from '$lib/silent_killer.png'
import crackSupplier from '$lib/crack_supplier.jpeg'


export const gangMembers = writable([
    {
        id: 1,
        name: 'Gang Leader',
        image: gangleader, // replace with actual path
        description: `He is a very maliciously dangerous guy. Most wanted in Delhi, in total he has killed 32 people in various gang wars. Don’t go on his looks—he is a master in various fighting styles like jiu-jitsu, Muay Thai, and more.
    Once, he killed a guy at his home just for commenting badly on his Instagram post.
    He is known as “BABA” among many due to his badass style and personality in areas across Delhi and Punjab.`,
        titleColor: 'text-red-500'
    },
    {
        id: 2,
        name: 'Right Hand',
        image: bali, // replace with actual path
        description: `His name is “BALI,” and he is considered a bounty hunter of the gang. Bali operates gang work mostly in “East Delhi.” Previously Bali was a trained bodyguard, but now he works with Baba gang.`,
        titleColor: 'text-yellow-500'
    },
    {
        id: 3,
        name: 'Gang Hacker',
        image: silentKiller, // replace with actual path
        description: `He is known as “Silent Killer” due to his amazing hacking skills. He is known for hacking police servers so the police can’t track the “Baba Gang.” He is considered the gang’s eyes and ears.`,
        titleColor: 'text-red-500'
    },
    {
        id: 4,
        name: 'Drugs Supplier',
        image: crackSupplier, // replace with actual path
        description: `He is known as “Crack Supplier.” He is responsible for supplying drugs produced by the Baba Gang. He operates a drug supply chain across North India. Allegedly, he also handles Baba Gang’s financial operations.`,
        titleColor: 'text-red-500'
    }
]);
