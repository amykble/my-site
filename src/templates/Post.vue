<!-- Post template -->
<template>
  <Layout class="bg-gray-200 font-body">
    <main>
      <section>
        <div class="max-w-screen-lg mx-auto">
          <header class="mx-6 py-10">
            <h1 class="font-title font-bold text-3xl md:text-4xl uppercase">{{ $page.post.title }}</h1>
            <p
              :class="$page.post.tagCol"
              class="mt-2 inline-block px-2 py-1 text-sm"
            >{{ $page.post.tag }}</p>
            <h2 class="mt-6 text-gray-600 text-lg">
              {{ $page.post.date }}
              <span
                class="ml-6 text-gray-600 text-lg"
              >{{ $page.post.timeToRead }} {{ minSuffix }}</span>
            </h2>
            <div class="mt-6">
              <g-link
                to="/blog"
                class="py-2 px-2 text-lg font-bold border-2 border-solid border-blue-400 hover:border-orange-450 focus:border-orange-450 text-blue-400 hover:text-orange-450 focus:text-orange-450"
              >More Posts</g-link>
            </div>
          </header>
        </div>
        <div class="remark bg-gray-100 shadow-lg">
          <article
            v-html="$page.post.content"
            class="prose max-w-screen-lg mx-auto md:prose-xl px-6 py-10"
          ></article>
        </div>
      </section>
    </main>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    id
    title
    date (format: "DD MMMM, YYYY")
    content
    timeToRead
    tag
    tagCol
  }
}
</page-query>

<script>
export default {
	data() {
		return {
			minSuffix: String,
		}
	},
	methods: {
		suffixCalc() {
			if (this.$page.post.timeToRead >= 5) {
				return (this.minSuffix = 'min read 📖')
			}
			if (this.$page.post.timeToRead >= 2) {
				return (this.minSuffix = 'min read ☕')
			}
			if (this.$page.post.timeToRead <= 1) {
				return (this.minSuffix = 'min read 👀')
			}
		},
	},
	mounted() {
		this.suffixCalc()
	},
}
</script>


<style>
.remark h1,
.remark h2 {
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