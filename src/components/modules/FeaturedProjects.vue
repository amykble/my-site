<template>
  <section class="bg-gray-900">
    <div class="max-w-screen-lg mx-auto">
      <header class="fade-in-ltr opacity-0 mt-16 px-2">
        <h1
          class="inline relative z-10 before-class-header mx-6 font-title font-bold text-3xl sm:text-4xl text-green-400"
        >featured projects</h1>
      </header>
      <section class="mx-6 mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
        <article v-for="edge in $page.portfolio.edges" :key="edge.node.id" class="z-10 relative">
          <div class="h-full group bg-hover">
            <div
              class="h-full p-6 bg-white hover:bg-blue-100 transition-all duration-200 ease-in-out"
            >
              <g-link
                g-link
                :to="edge.node.path"
                class="text-blue-600 hover:cursor-pointer focus:cursor-pointer"
              >
                <div class="h-32 flex items-center">
                  <g-image :src="edge.node.img" class="max-h-full w-auto mx-auto" />
                </div>
                <div>
                  <h2 class="mt-4 text-2xl">{{ edge.node.title }}</h2>
                </div>
              </g-link>
              <div class="mt-4 flex">
                <a
                  :href="edge.node.github"
                  target="_blank"
                  rel="noopener"
                  class="opacity-60 hover:opacity-100 focus:opacity-100 transition duration-200 ease-in-out"
                >
                  <img
                    src="../../assets/images/icons8-github.svg"
                    alt="github logo"
                    class="h-8 w-auto"
                  />
                </a>
                <a
                  :href="edge.node.website"
                  target="_blank"
                  rel="noopener"
                  class="opacity-60 hover:opacity-100 focus:opacity-100 transition duration-200 ease-in-out"
                >
                  <img
                    src="../../assets/images/icons8-website-96.png"
                    alt="internet icon"
                    class="h-8 w-auto ml-4"
                  />
                </a>
              </div>
              <div>
                <h3 class="mt-4 italic text-gray-800">{{ edge.node.date }}</h3>
              </div>
            </div>
          </div>
        </article>
        <article class="lg:hidden z-10 relative">
          <g-link to="/blog" class="group bg-hover">
            <div
              class="p-6 h-full flex flex-col justify-between bg-white hover:bg-blue-100 transition-all duration-200 ease-in-out"
            >
              <h2 class="mt-2 text-2xl text-blue-600">See All Projects</h2>
            </div>
          </g-link>
        </article>
      </section>
    </div>
  </section>
</template>

<script>
export default {
	name: 'FeaturedProjects',
}
</script>

<style scoped>
</style>