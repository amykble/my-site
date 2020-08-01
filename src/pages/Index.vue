<template>
  <Layout class="bg-img bg-gray-900 font-body">
    <main>
      <RecentPosts />
    </main>
  </Layout>
</template>

<page-query>
query {
  blog: allPost(sortBy: "date", limit: 3) {
    edges {
      node {
        tag
        tagCol
        title
        date (format: "DD MMMM, YYYY")
        timeToRead
				path 
      }
    }
  }
}
</page-query>

<script>
import RecentPosts from '../components/modules/RecentPosts'

export default {
	metaInfo: {
		title: 'amykble | front-end developer',
	},
	name: 'Home',
	components: {
		RecentPosts,
	},
}
</script>

<style>
@import '../assets/styles/main.css';
</style>