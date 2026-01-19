<script lang="ts">
  import { onMount } from 'svelte';
  import { Home, Briefcase, FolderGit2, Calendar, Moon, Sun } from 'lucide-svelte';

  // We receive the current URL path from the parent Astro layout
  // Example: '/' or '/projects'
  export let currentPath: string = '/';

  // Navigation Items with explicit paths
  const navItems = [
    { id: 'home', label: 'Home', icon: Home, href: '/' },
    { id: 'experience', label: 'Experience', icon: Briefcase, href: '/experience' },
    { id: 'projects', label: 'Projects', icon: FolderGit2, href: '/projects' },
    { id: 'schedule', label: 'Schedule', icon: Calendar, href: '/schedule' },
  ];

  // --- Dark Mode Logic ---
  let isDarkMode = false;

  // Run once when component loads to check current theme
  onMount(() => {
    if (typeof localStorage !== 'undefined') {
      isDarkMode = document.documentElement.classList.contains('dark');
    }
  });

  function toggleTheme() {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }

  // Helper to check if a link is active
  // We check if the current path starts with the link href (for sub-pages)
  // or matches exactly for home ('/')
  function isActive(href: string) {
    if (href === '/') return currentPath === '/';
    return currentPath.startsWith(href);
  }
</script>

<nav class="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b transition-colors duration-200">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      
      <a href="/" class="flex items-center gap-2 text-foreground no-underline">
        <div class="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg"> </div>
        <span class="font-semibold">Portfolio</span>
      </a>

      <div class="flex gap-1 items-center text-foreground">
        {#each navItems as item}
          <a
            href={item.href}
            class="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium transition-colors rounded-md hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            class:bg-secondary={isActive(item.href)}
          >
            <svelte:component this={item.icon} class="w-4 h-4" />
            <span class="hidden sm:inline">{item.label}</span>
          </a>
        {/each}

        <button
          on:click={toggleTheme}
          class="ml-2 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground h-9 w-9"
          aria-label="Toggle theme"
        >
          {#if isDarkMode}
            <Sun class="w-5 h-5" />
          {:else}
            <Moon class="w-5 h-5" />
          {/if}
        </button>
      </div>
    </div>
  </div>
</nav>