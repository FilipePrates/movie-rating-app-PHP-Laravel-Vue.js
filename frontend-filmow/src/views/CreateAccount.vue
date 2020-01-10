<template class="background">
	<v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-title primary-title>
          <v-layout row wrap justify-center class="text-center">
								<v-avatar :tile="true" size="56px" class="mx-10">
									<img src="https://s3.amazonaws.com/jovensgenios.com/apps-images/logos/jovens-genios-logo-lampada-redondo.png"
										alt="Jovens Gênios">
								</v-avatar>
								<v-avatar :tile="true" size="56px" class="mx-12 hidden-md-and-up">
									<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_azLcOFrNrDr3ZKCDnN24oxT7d5xGl0NWqe1MP3UnAMX9rK5m&s"
										alt="Jovens Gênios">
								</v-avatar>
								<v-flex xs8>
									<h3 class="text mb-0 mt-4 text-center">./JG_filmow_trilha_backend</h3>
									<h3 class="headline mb-0 mt-4 hidden-sm-and-down">Preencha seu <b>nome</b>, <b>email</b> e <b>senha</b> abaixo!</h3>
								</v-flex>
								<v-avatar :tile="true" size="56px" class="mx-10 hidden-sm-and-down">
									<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_azLcOFrNrDr3ZKCDnN24oxT7d5xGl0NWqe1MP3UnAMX9rK5m&s"
										alt="Jovens Gênios">
								</v-avatar>
          </v-layout>
        </v-card-title>
				<v-card-text>
					<v-progress-circular indeterminate color="primary" v-if="loading"></v-progress-circular>

					<v-form @submit.prevent="createAccount" v-if="!loading" class="px-12">
						<v-text-field
							width="300"
							label="Nome"
							name="name"
							v-model="name"
							class="input-group--focused"
							required
						></v-text-field>
						<v-text-field
							width="300"
							label="Email"
							name="email"
							v-model="email"
							class="input-group--focused"
							required
						></v-text-field>

						<v-text-field
							v-if="edit"
							label="Nova Senha"
							name="password"
							v-model="password"
							@click:append="() => (e3 = !e3)"
							type="password"
							required
						></v-text-field>
						<v-text-field
							v-else
							label="Senha"
							name="password"
							v-model="password"
							@click:append="() => (e3 = !e3)"
							type="password"
							required
						></v-text-field>

						<!-- <p style="color: red;">{{errorMsg}}</p> -->
						<v-btn v-if="edit" block color="primary" type="submit" class="mb-2">Editar Conta</v-btn>
						<v-btn v-else block color="primary" type="submit" class="mb-2">Criar Conta</v-btn>
					</v-form>
				</v-card-text>
      </v-card>
    </v-flex>

		<v-snackbar
      v-model="snackbar"
			:color="color"
    >
      {{text}}
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
				name: '',
				password: '',
        e3: true,
				loading: false,
				logado: false,
				snackbar: false,
				text: '',
				color: ''
			}
		},

		computed: {
			edit(){
				return this.$store.getters.isEditingUser
			}
			// loading(){
			// 	return this.$store.state.loading;
			// },
			//
			// errorMsg(){
			// 	return this.$store.state.errorMsg;
			// }
		},

		methods:{
			createAccount(){
				if(!this.edit){
					this.$store.dispatch('createUserInServer',{name:this.name,email:this.email,password:this.password}).then(response=>{
						if(response.data){
							this.text = "Usuario criado com sucesso, voce sera redirecionado em instantes"
							this.color = 'success'
							this.snackbar = true
							setTimeout(()=>{
								this.$router.push('/login')
							},2000)
						}else{
							this.color = 'error'
							this.text = "Ocorreu um erro"
							this.snackbar = true
						}
					})
				}else{
					this.$store.dispatch('editUserInServer',{name:this.name,email:this.email,password:this.password}).then(response=>{
						if(response.data){
							this.text = "Usuario editado com sucesso, voce sera redirecionado em instantes"
							this.color = 'success'
							this.snackbar = true
							this.$store.commit('setUser',[response.data])
							this.$store.commit('setEditingUser',false)
							setTimeout(()=>{
								this.$router.push('/')
							},2000)
						}else{
							this.color = 'error'
							this.text = "Ocorreu um erro"
							this.snackbar = true
						}
					})
				}
			}
		},
		mounted(){
			if(this.edit){
				this.email = this.$store.getters.user[0].email
				this.name = this.$store.getters.user[0].name
			}
		}
	}
</script>

<style scoped>
	.background {background-color: rgb(201, 76, 76);}
</style>
