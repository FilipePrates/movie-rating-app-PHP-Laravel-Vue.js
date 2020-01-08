<template>
	<v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-title primary-title>
          <div>
						<v-avatar :tile="true" size="56px">
              <img src="https://s3.amazonaws.com/jovensgenios.com/apps-images/logos/jovens-genios-logo-lampada-redondo.png"
								alt="Jovens Gênios">
            </v-avatar>
						<h3 class="headline mb-0">Entrar como <b>Admin</b></h3>
						<div>Digite seus dados abaixo:</div>
          </div>
        </v-card-title>
				<v-card-text>
					<v-progress-circular indeterminate color="primary" v-if="loading"></v-progress-circular>

					<v-form @submit.prevent="signin" v-if="!loading">
						<v-text-field
							label="Email"
							name="email"
							v-model="email"
							class="input-group--focused"
							required
							></v-text-field>
						<v-text-field
							label="Senha"
							name="password"
							v-model="password"
							@click:append="() => (e3 = !e3)"
							type="password"
							required
						></v-text-field>

						<!-- <p style="color: red;">{{errorMsg}}</p> -->
						<v-btn block color="primary" type="submit">Entrar</v-btn>
					</v-form>
				</v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
	export default{
		data(){
			return{
				email: '',
				password: '',
        e3: true,
				loading: false,
				logado: true
			}
		},

		computed: {
			// loading(){
			// 	return this.$store.state.loading;
			// },
			//
			// errorMsg(){
			// 	return this.$store.state.errorMsg;
			// }
		},

		methods:{
			signin(){
				if(this.logado){
					this.$store.commit('signin')
					this.$router.push('/')
				}
			}
		}
	}
</script>
