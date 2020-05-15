<template>
<div>
  <div>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header text-uppercase"><strong>Ajouter ou Modifier - une Reunion au sondage : <span class="text-danger font-weight-bold">{{message}}</span> </strong></div>
          <div class="card-body">
            <form class="form-horizontal" action="#">
              <div class="form-group row">
                <label class="col-md-3 col-form-label" for="hf-name">intitule <span class="text text-danger font-weight-bold">*</span></label>
                <div class="col-md-9">
                  <input class="form-control" id="hf-name" type="text" name="hf-name" placeholder="" v-model="fname" required>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-md-3 col-form-label" for="textarea-input">resumer</label>
                <div class="col-md-9">
                  <textarea class="form-control" id="textarea-input" name="textarea-input" rows="9" placeholder="Content.."  v-model="fresumer"></textarea>
                </div>
              </div>
            </form>

          </div>
          <div class="card-footer">
            <div class="btn btn-sm btn-success" v-if="!isUpdate" @click.prevent="saveData()">Envoyer</div>
            <div class="btn btn-sm btn-warning" v-else @click.prevent="saveUpdateData()">Envoyer</div>
            <div class="btn btn-sm btn-danger" @click.prevent="clearInput()">Annuler</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "Reunion",
      data(){
          return{
            fname:'',
            fresumer:'',
            isUpdate:'',
            message:'',
            idsondage:'',
            mailuser:''
          }
      },
      methods:{
        loadmessage(code){
          this.$http.get('/rest/doodle/SondageDate/'+ code).then((response) => {
            let responseData = response.data
            this.message = responseData.nomSondage
            this.idsondage = responseData.id
            this.mailuser = responseData.utilisateur.mail
          }, (response) => {
            console.log(response)
          })
        },
        saveData(){
          if (this.fnane !== '') {
            const formData = {
              intitule: this.fnane,
              resume:this.fresumer
            }

            this.$http.post('/rest/doodle/sondageDate/'+this.idsondage+'/reunion',formData,   ).then((response) => {
              this.$router.push('/sondageDate/' + this.mailuser)
              console.log('sucess',response)
            }, ( response) => {
              console.log('errueru',response)

            })
          }

        },
      },
      mounted () {
        this.loadmessage(this.$route.params.id)

        // Mise à jour

      }
    }
</script>

<style scoped>

</style>
