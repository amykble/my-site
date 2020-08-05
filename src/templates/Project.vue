<!-- Project Template template -->
<template>
  <Layout class="bg-gray-200 font-body">
    <main>
      <section>
        <div class="max-w-screen-lg mx-auto">
          <header class="mx-6 py-10">
            <h1
              class="font-title font-bold text-3xl md:text-4xl uppercase"
            >{{ $page.project.title }}</h1>
            <!-- <p
              :class="$page.post.tagCol"
              class="mt-2 inline-block px-2 py-1 text-sm"
            >{{ $page.post.tag }}</p>-->
            <h2 class="mt-6 text-gray-600 text-lg">
              {{ $page.project.date }}
              <!-- <span
                class="ml-6 text-gray-600 text-lg"
              >{{ $page.post.timeToRead }} {{ minSuffix }}</span>-->
            </h2>
            <div class="mt-6">
              <g-link
                to="/projects"
                class="py-2 px-2 text-lg font-bold border-2 border-solid border-blue-400 hover:border-orange-450 focus:border-orange-450 text-blue-400 hover:text-orange-450 focus:text-orange-450"
              >More Projects</g-link>
            </div>
          </header>
        </div>
        <div class="remark min-h-screen bg-gray-100 shadow-lg">
          <article
            v-html="$page.project.content"
            class="prose max-w-screen-lg mx-auto md:prose-xl px-6 py-10"
          ></article>
        </div>
      </section>
    </main>
  </Layout>
</template>

<page-query>
query Project ($path: String!) {
  project: project (path: $path) {
    id
    title
    type
    github
    website
    date (format: "MMMM, YYYY")
    img
    content
  }
}
</page-query>

<script>
</script>


<style>
.remark h1,
.remark h2,
.remark h3,
.remark h4 {
	@apply bg-orange-200;
}

.remark h1 code,
.remark h2 code,
.remark h3 code,
.remark h4 code,
.remark p code {
	@apply px-1;
}

.remark p a {
	@apply bg-blue-200 no-underline px-1 transition duration-200 ease-in-out;
}

.remark p a:hover,
.remark p a:focus {
	@apply bg-blue-400;
}
</style>