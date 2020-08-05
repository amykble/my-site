<template>
  <header>
    <section
      :class="isOpen ? 'bg-opacity-100' : 'bg-opacity-90'"
      class="w-full fixed z-50 bg-gray-900 bg-blur md:bg-opacity-90 transition duration-200 ease-in-out"
    >
      <div
        class="max-w-screen-lg mx-auto px-6 md:flex mditems-center md:justify-between font-title"
      >
        <div class="h-24 flex items-center justify-between">
          <div>
            <g-link to="/" class="gradient flex items-center">
              <g-image
                src="../../assets/images/amykble/white-line-1080.svg"
                class="h-10 w-10 mr-6"
              />
              <h1 class="text-gray-100 transition duration-200 ease-in-out">amykble</h1>
            </g-link>
          </div>
          <div class="md:hidden">
            <button
              @click="isOpen = !isOpen"
              type="button"
              class="hamburger ml-auto py-2 hover:cursor-pointer"
            >
              <span
                :class="isOpen ? 'cross-down' : 'undo-top'"
                class="slice block h-1 w-8 bg-gray-200 mb-2 transition duration-200 ease-in-out"
              ></span>
              <span
                :class="isOpen ? 'cross-up' : 'undo-bottom'"
                class="slice block h-1 bg-gray-200 w-8 transition duration-200 ease-in-out"
              ></span>
            </button>
          </div>
        </div>
        <nav
          :class="isOpen ? 'flex' : 'hidden'"
          class="md:flex flex-col md:flex-row items-center pb-10 md:pb-0 text-orange-450 text-2xl md:text-base"
        >
          <g-link
            class="md:mr-12 relative before-class hover:text-purple-500 focus:text-purple-500 px-4 py-2 transition duration-200 ease-in-out"
            to="/about"
          >about</g-link>
          <g-link
            class="mt-6 md:mt-0 md:mr-12 relative before-class hover:text-green-400 focus:text-green-400 px-4 py-2 transition duration-200 ease-in-out"
            to="/projects"
          >projects</g-link>
          <g-link
            class="mt-6 md:mt-0 relative before-class hover:text-blue-400 focus:text-blue-400 px-4 py-2 transition duration-200 ease-in-out"
            to="/blog"
          >blog</g-link>
        </nav>
      </div>
    </section>
    <section class="h-24 bg-gray-900"></section>
  </header>
</template>


<script>
export default {
	name: 'Navigation',
	data() {
		return {
			isOpen: false,
		}
	},
}
</script>


<style scoped>
.hamburger:focus .slice {
	@apply bg-orange-450;
}

.cross-down {
	transform: translateY(-4px) translateX(9px) rotate(45deg);
	transform-origin: left;
}

.undo-top {
	transform: rotate(0deg);
	transform-origin: left;
}

.cross-up {
	transform: translateY(-16px) rotate(-45deg);
	transform-origin: right;
}

.undo-bottom {
	transform: rotate(0deg);
	transform-origin: right;
}

/* .fade-in-links {
	opacity: 1;
	transition: all;
	transition-duration: 200ms;
	transition-delay: 300ms;
}

.fade-out-links {
	opacity: 0;
} */
</style>