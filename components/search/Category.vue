<template>
	<div style="width:100%">
		<div class="display-align">
			<div class="navbar-item has-dropdown is-hoverable cate-border" style="width:20%">
				<p class="cate-deco">Clothing</p>
				<div class="navbar-dropdown is-boxed">
					<a class="navbar-item">Dress</a>
					<a class="navbar-item">Jumpsuits</a>
					<a class="navbar-item">Bodysuits</a>
					<a class="navbar-item">Suits & Sets</a>
				</div>
			</div>

			<div class="navbar-item has-dropdown is-hoverable cate-border" style="width:20%">
				<p class="cate-deco">Cellphones</p>
				<div class="navbar-dropdown is-boxed">
					<a class="navbar-item">Cellphones</a>
					<a class="navbar-item">Mobile Phone</a>
				</div>
			</div>

			<div class="navbar-item has-dropdown is-hoverable cate-border" style="width:20%">
				<p class="cate-deco">Computer</p>
				<div class="navbar-dropdown is-boxed">
					<a class="navbar-item">Laptops</a>
					<a class="navbar-item">PC</a>
					<a class="navbar-item">Desktops</a>
					<a class="navbar-item">Servers</a>
				</div>
			</div>

			<div class="navbar-item has-dropdown is-hoverable cate-border" style="width:20%">
				<p class="cate-deco">Jewelry</p>
				<div class="navbar-dropdown is-boxed">
					<a class="navbar-item">Earrings</a>
					<a class="navbar-item">Rings</a>
					<a class="navbar-item">Fine Jewelry</a>
				</div>
			</div>

			<div class="navbar-item has-dropdown is-hoverable cate-border" style="width:20%">
				<p class="cate-deco">Sports</p>
				<div class="navbar-dropdown is-boxed">
					<a class="navbar-item">Golf</a>
					<a class="navbar-item">Shooting</a>
					<a class="navbar-item">Running</a>
					<a class="navbar-item">Sneakers</a>
					<a class="navbar-item">Bowling</a>
				</div>
			</div>

			
		</div>
	</div>
</template>

<script>
export default {
	name: 'VmMenu',
	data () {
		return {
			logoutLabel: 'Log out',
		}
	},

	computed: {
	},

	methods: {

	}
}
</script>

<style>
  .display-align {
	display:flex !important
  }

  .cate-border{
	border: 1px solid #e8e8e8;
  }

  .cate-deco{
	width:100%;
	text-align: center;
	padding: 0.5rem 0.75rem;
  }

.cate-deco:hover{
	text-align: center;
	background-color: #fafafa;
  }
</style>

