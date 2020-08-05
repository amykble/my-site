<template>
  <section class="bg-gray-900">
    <div class="max-w-screen-lg mx-auto">
      <header class="fade-in-ltr opacity-0 mt-16 px-2">
        <h1
          class="inline relative z-10 before-class-header mx-6 font-title font-bold text-3xl sm:text-4xl text-green-400"
        >recent projects</h1>
      </header>
      <section class="mx-6 mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
        <article v-for="edge in $page.portfolio.edges" :key="edge.node.id" class="z-10 relative">
          <g-link :to="edge.node.path" class="group bg-hover">
            <div
              class="p-6 h-full flex flex-col justify-between bg-white hover:bg-blue-100 transition-all duration-200 ease-in-out"
            >
              <div>
                <g-image :src="edge.node.img" class="h-40 w-auto mx-auto" />
              </div>
              <div>
                <h2 class="mt-4 text-2xl text-blue-600">{{ edge.node.title }}</h2>
              </div>
              <div class="mt-4 flex">
                <a :href="edge.node.github">
                  <img
                    src="../../assets/images/icons8-github.svg"
                    alt="github logo"
                    class="h-12 w-auto"
                  />
                </a>
                <a :href="edge.node.website">
                  <img
                    src="../../assets/images/icons8-website-96.png"
                    alt="internet icon"
                    class="h-12 w-auto ml-4"
                  />
                </a>
              </div>
              <div>
                <h3 class="mt-4 italic text-gray-800">{{ edge.node.date }}</h3>
              </div>
            </div>
          </g-link>
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
	name: 'RecentProjects',
}
</script>

<style scoped>
</style>