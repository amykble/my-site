<template>
  <Layout class="bg-img bg-gray-900 font-body">
    <main>
      <Hero />
      <RecentPosts />
      <RecentProjects />
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
  portfolio: allProject(sortBy: "date", limit: 3) {
    edges {
      node {
        title
        type
        github
        website
        date (format: "MMMM, YYYY")
        img
				path 
      }
    }
  }
}
</page-query>

<script>
import Hero from '../components/modules/Hero'
import RecentPosts from '../components/modules/RecentPosts'
import RecentProjects from '../components/modules/RecentProjects'

export default {
	metaInfo: {
		title: 'amykble | front-end developer',
	},
	name: 'Home',
	components: {
		Hero,
		RecentPosts,
		RecentProjects,
	},
}
</script>

<style>
@import '../assets/styles/main.css';
</style>