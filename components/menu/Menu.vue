<template>
	<div>
		<div class="navbar-item">
			<div class="field is-grouped">
				<p class="control">
					<a v-if="!isUserLoggedIn" class="button" @click="showSignupModal">
						<span class="icon">
							<i class="fa fa-user-plus"></i>
						</span>
						<span>{{ signupLabel }}</span>
					</a>
				</p>
				<p class="control">
					<a v-if="!isUserLoggedIn" class="button" @click="showLoginModal">
						<span class="icon">
							<i class="fa fa-user"></i>
						</span>
						<span>{{ loginLabel }}</span>
					</a>
				</p>
			</div>
		</div>
		<div v-if="isUserLoggedIn" class="navbar-item has-dropdown is-hoverable">
			<a class="navbar-link">
			Welcome {{ getUserName }}
			</a>
			<div class="navbar-dropdown is-boxed">
				<nuxt-link class="navbar-item" :to="{ name: 'admin-add' }" v-show="isShow">
					Admin
				</nuxt-link>
				<nuxt-link class="navbar-item" :to="{ name: 'user-profile' }">
					{{ userprofileLabel }}
				</nuxt-link>
				<nuxt-link class="navbar-item" :to="{ name: 'user-wishlist' }">
					{{ wishlistLabel }}
				</nuxt-link>
				<hr class="navbar-divider">
				<a class="navbar-item" @click="logout" href="/" >
					{{ logoutLabel }}
				</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'VmMenu',
	data () {
		return {
			tarnlabel: 'Tarn',
			wishlistLabel: 'Wishlist',
			userprofileLabel: 'User Profile',
			logoutLabel: 'Log out',
			loginLabel: 'Log in',
			signupLabel: 'Sign up',
			adminLabel: 'Admin',

		}
	},

	computed: {
		isShow(){
			console.log(this.$auth.$storage.getLocalStorage("role") )
			if(this.$auth.$storage.getLocalStorage("role") == "admin")
				return true
			return false
		},
		isUserLoggedIn () {
			return this.$store.getters.isUserLoggedIn;
		},
		getUserName () {
			let name = this.$store.getters.getUserName;
			
			if (name === '') {
				return 'user';
			} else {
				return name;
			}
		}
	},

	methods: {
		logout () {
			this.$store.commit('isUserLoggedIn', false);
			this.$store.commit('isUserSignedUp', false);
			this.$store.commit('removeProductsFromFavourite');
			this.$router.push({ name: 'index' });
			this.$axios.setToken(false)
            this.$auth.$storage.setLocalStorage('token', null)
            this.$auth.$storage.setLocalStorage('refresh_token', null)
            this.$auth.$storage.setLocalStorage('user_id', null)
            this.$auth.$storage.setLocalStorage('role', null)
			this.$auth.$storage.setLocalStorage('cart',null)
			this.$router
			window.location.reload(true)
		},
		showLoginModal () {
			this.$store.commit('showLoginModal', true);
		},
		showSignupModal () {
			this.$store.commit('showSignupModal', true);
		}
	}
}
</script>

