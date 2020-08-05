<template>
  <footer class="w-full bg-gray-900">
    <section class="max-w-screen-lg mx-auto px-6 py-10 text-gray-500 font-body">
      <nav class="text-orange-450">
        <div class="max-w-screen-lg mx-auto">
          <ul class="flex items-center">
            <li class="mr-6">
              <g-link
                class="transition duration-200 ease-in-out hover:text-blue-400 focus:text-blue-400"
                to="/"
              >Home</g-link>
            </li>
            <li class="mr-6">
              <g-link
                class="transition duration-200 ease-in-out hover:text-blue-400 focus:text-blue-400"
                to="/about"
              >About</g-link>
            </li>
            <li class="mr-6 p-1">
              <g-link
                class="transition duration-200 ease-in-out hover:text-blue-400 focus:text-blue-400"
                to="/projects"
              >Projects</g-link>
            </li>
            <li class="mr-6">
              <g-link
                class="transition duration-200 ease-in-out hover:text-blue-400 focus:text-blue-400"
                to="/blog"
              >Blog</g-link>
            </li>
          </ul>
        </div>
      </nav>
      <p class="mt-6">Copyright &copy; {{ date }}.</p>
      <p>
        Created with
        <a tabindex="-1" href="https://gridsome.org" target="_blank" rel="noopener">
          <img class="inline h-3" src="../../assets/images/amykble/gridsome.svg" alt="gridsome" />
        </a>
        <a tabindex="-1" href="https://vuejs.org" target="_blank" rel="noopener">
          <img class="inline h-3 ml-1" src="../../assets/images/amykble/vue.svg.png" alt="vue" />
        </a>
        <a tabindex="-1" href="https://tailwindcss.com" target="_blank" rel="noopener">
          <img
            class="inline h-3 ml-1 mr-2"
            src="../../assets/images/amykble/tailwind.png"
            alt="tailwind"
          />
        </a>by
        <a
          class="transition duration-200 ease-in-out text-blue-400 hover:text-orange-450 focus:text-orange-450"
          href="https://github.com/amykble"
          target="_blank"
          rel="noopener"
        >Amy Keable</a>
      </p>
    </section>
    <!-- <a target="_blank" href="https://icons8.com/icons/set/domain">Website icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> -->
  </footer>
</template>


<script>
export default {
	name: 'Footer',
	data() {
		return {
			date: new Date().getFullYear(),
		}
	},
}
</script>


<style scoped>
</style>