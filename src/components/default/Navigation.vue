<template>
  <nav>
    <section
      class="bg-blur bg-gray-900 md:bg-opacity-90 font-title fixed z-50 w-full text-orange-450"
    >
      <div class="max-w-screen-lg mt-10 mb-8 mx-auto">
        <ul class="block md:flex md:items-center md:justify-start text-lg">
          <li class="flex ml-6 mr-auto">
            <g-link to="/" class="gradient flex items-center">
              <g-image
                src="../../assets/images/amykble/white-line-1080.svg"
                class="h-10 w-10 mr-6"
              />
              <h1 class="text-gray-100 transition duration-200 ease-in-out">amykble</h1>
            </g-link>
            <button class="hamburger ml-auto mr-4 p-2 md:hidden hover:cursor-pointer">
              <span class="slice block h-1 w-8 bg-gray-200 mb-2"></span>
              <span class="slice block h-1 bg-gray-200 w-8"></span>
            </button>
          </li>
          <div
            class="h-screen md:h-auto flex items-center flex-col md:flex-row text-3xl md:text-base"
          >
            <li class="mt-12 md:mt-0 md:mr-12">
              <g-link
                class="relative before-class hover:text-purple-500 focus:text-purple-500 px-4 py-2 transition duration-200 ease-in-out"
                to="/about"
              >about</g-link>
            </li>
            <li class="mt-12 md:mt-0 md:mr-12">
              <g-link
                class="relative before-class hover:text-green-400 focus:text-green-400 px-4 py-2 transition duration-200 ease-in-out"
                to="/projects"
              >projects</g-link>
            </li>
            <li class="mt-12 md:mt-0 md:mr-6">
              <g-link
                class="relative before-class hover:text-blue-400 focus:text-blue-400 px-4 py-2 transition duration-200 ease-in-out"
                to="/blog"
              >blog</g-link>
            </li>
          </div>
        </ul>
      </div>
    </section>
    <section class="h-32 bg-gray-900"></section>
  </nav>
</template>


<script>
export default {
	name: 'Navigation',
}
</script>


<style scoped>
.hamburger:hover .slice {
	@apply bg-gray-500;
}
</style>