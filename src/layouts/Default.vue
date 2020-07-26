<template>
  <div>
    <Navigation />
    <slot />
    <Footer />
  </div>
</template>


<static-query>
query {
	metadata {
		siteName
	}
}
</static-query>

<script>
import Navigation from '../components/default/Navigation'
import Footer from '../components/default/Footer'

export default {
	components: {
		Navigation,
		Footer,
	},
}
</script>

<style>
@font-face {
	font-family: 'MadeOuterSansAltRegular';
	src: url('../assets/fonts/outer-sans-alt-regular/made-outer-sans-alt-regular.ttf');
	src: url('../assets/fonts/outer-sans-alt-regular/made-outer-sans-alt-regular.woff')
			format('woff'),
		url('../assets/fonts/outer-sans-alt-regular/made-outer-sans-alt-regular.woff2')
			format('woff2');
}
</style>
