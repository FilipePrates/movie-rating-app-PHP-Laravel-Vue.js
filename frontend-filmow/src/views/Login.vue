<template class="background">
	<v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-title primary-title>
          <v-layout row wrap justify-center>
								<v-avatar :tile="true" size="56px" class="mx-12">
									<img src="https://s3.amazonaws.com/jovensgenios.com/apps-images/logos/jovens-genios-logo-lampada-redondo.png"
										alt="Jovens Gênios">
								</v-avatar>
								<v-avatar :tile="true" size="56px" class="mx-12 hidden-md-and-up">
									<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_azLcOFrNrDr3ZKCDnN24oxT7d5xGl0NWqe1MP3UnAMX9rK5m&s"
										alt="Jovens Gênios">
								</v-avatar>
								<v-flex>
									<h3 class="text mb-0 mt-4 text-center">./JG_filmow_trilha_backend</h3>
									<h3 class="headline mb-0 mt-4 hidden-sm-and-down">Bem vindo! Preencha seu <b>usuario</b> e <b>senha</b> abaixo!</h3>

								</v-flex>
								<v-avatar :tile="true" size="56px" class="mx-12 hidden-sm-and-down">
									<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_azLcOFrNrDr3ZKCDnN24oxT7d5xGl0NWqe1MP3UnAMX9rK5m&s"
										alt="Jovens Gênios">
								</v-avatar>
          </v-layout>
        </v-card-title>
				<v-card-text>
					<v-progress-circular indeterminate color="primary" v-if="loading"></v-progress-circular>

					<v-form @submit.prevent="signin" v-if="!loading" class="px-12">
						<v-text-field
							width="300"
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
						<v-btn block color="primary" type="submit" class="mb-2">Entrar</v-btn>
					</v-form>
				</v-card-text>
      </v-card>
    </v-flex>

		<v-snackbar
      v-model="snackbar"
			color="error"
    >
      Parece que essa conta nao existe. Tente de novo!
      <v-btn
        color="black"
        @click="snackbar = false"
      >
        Ok
      </v-btn>
    </v-snackbar>

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
				logado: false,
				snackbar: false
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
				this.$store.dispatch('authorizeLoginInServer',{email:this.email}).then(response => {
					console.log(response.data)
					if(response.data.length != 0){
						this.logado = true;
						this.$store.commit('setUser', response.data)
						this.$router.push('/')
					}else{
						console.log('errouuu')
						this.snackbar = true
					}
				})
			}
		}
	}
</script>

<style scoped>
	.background {background-color: rgb(201, 76, 76);}
</style>
