<template>
  <section class="bg-gray-900">
    <div class="max-w-screen-lg mx-auto">
      <header class="fade-in-ltr opacity-0 px-2 mt-16">
        <h1
          class="inline relative z-10 before-class-header mx-6 font-title font-bold text-2xl sm:text-4xl text-blue-400"
        >recent posts</h1>
      </header>
      <section class="mx-6 mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
        <article v-for="edge in $page.blog.edges" :key="edge.node.id" class="z-10 relative">
          <g-link :to="edge.node.path" class="group bg-hover">
            <div
              class="p-6 h-full flex flex-col justify-between bg-white hover:bg-blue-100 transition-all duration-200 ease-in-out"
            >
              <div>
                <span :class="edge.node.tagCol" class="px-2 py-1 text-sm">{{ edge.node.tag }}</span>
                <h2 class="mt-2 text-2xl text-blue-600">{{ edge.node.title }}</h2>
              </div>
              <div>
                <h3 class="mt-4 italic text-gray-800">{{ edge.node.date }}</h3>
                <h4 class="mt-2 text-sm text-gray-600">{{ edge.node.timeToRead }} min read</h4>
              </div>
            </div>
          </g-link>
        </article>
        <article class="lg:hidden z-10 relative">
          <g-link to="/blog" class="group bg-hover">
            <div
              class="p-6 h-full flex flex-col justify-between bg-white hover:bg-blue-100 transition-all duration-200 ease-in-out"
            >
              <h2 class="mt-2 text-2xl text-blue-600">See All Posts</h2>
            </div>
          </g-link>
        </article>
      </section>
    </div>
  </section>
</template>

<script>
export default {
	name: 'RecentPosts',
}
</script>

<style scoped>
</style>