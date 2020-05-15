<template>
  <div>
    <div class="card">
      <div class="card-header"><strong> Créer un Sondage</strong> </div>
      <div class="card-body">
        <form class="form-horizontal" action="" method="post">
          <div class="form-group row">
            <label class="col-md-3 col-form-label" for="hf-email">createur mail</label>
            <div class="col-md-9">
              <input class="form-control" id="hf-email" type="email" name="hf-email"  v-model="femail">
            </div>
          </div>
          <div class="form-group row">
            <label class="col-md-3 col-form-label" for="hf-text">Libelle du sondage</label>
            <div class="col-md-9">
              <input class="form-control" id="hf-text" type="text" name="hf-email" placeholder="Enter name of sondage.." autocomplete="text" v-model="fnane"><span class="help-block"> entrer le nom du sondage</span>
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
    <div class="row">
      <div class="col-md-12">
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-header"><i class="fa fa-align-justify"/>Liste</div>
              <div class="card-body">
              <!-- &lt;!&ndash;&ndash;&gt; <div class="text-danger font-weight-bold" v-if="messageErrorList !== undefined">{{ messageErrorList }}</div><br>-->

                <dataTable :t-columns="listTable.tabcolumns" :t-data="listData"
                           :t-use-action-buttons="listTable.tabUseActionButtons"
                           :t-action-buttons="listTable.tabActionButtons" t-action-column="id"
                           @updateItem="addDate" @addItem="addParticipant" />
              </div>
            </div>
          </div>
          <!-- /.col-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SondageDate',

    data(){
      return{
        fnane:'',
        isUpdate: false,
        femail:'',
        listData: [],
        listTable: {
          tabcolumns: ['Nom Sondage'],
          tabData: this.listData,
          tabButtonsName: {
            copy: 'Copier',
            print: 'Imprimer',
            colvis: 'Visibilté des colonnes'
          },
          tabUseActionButtons: true,
          tabActionButtons: {
            update: {
              name: 'Ajouter choix de Date',
              bClass: 'btn btn-sm btn-warning'
            },
            add: {
              name: 'Ajouter Participants',
              bClass: 'btn-danger btn-sm'
            },

          }
        }
      }
    },
    methods:{
      addDate (code) {
        this.$router.push('/dateSondage/' + code)
      },
      addParticipant (code) {
        this.$router.push('/participant/' + code)
      },

      loadData (mail) {
        this.$http.get('/rest/doodle/createur/'+mail+'/reunions').then((response) => {
          // this.listData = response.data.data
          // construction du tableau
          let responseData = response.data
          let table = []
          responseData.forEach(element => {
            let item = {}
            item.sondage = element.nomSondage
            item.id = element.id
            table.push(item)
          })
          this.listData = table
        }, (response) => {
          console.log(response)
        })
      },

      createSondagedate (mail){
        this.$http.get('/rest/doodle/Createur/'+mail).then((response) => {
         // this.messageErrorEdit = undefined
          let sondage = response.data
         // console.log(sondage.mail)
         this.femail = sondage.mail
           this.fname = '';
        }, ( response) => {
          //console.log('errueru',response)
          //this.messageErrorEdit = 'Une erreur est survenue lors de l\'enregistrement'
        })
      },
      saveData(){
        if (this.fnane !== '') {
          const formData = {
            nomSondage: this.fnane,
          }

          this.$http.post('/rest/doodle/createur/'+this.femail+'/sondageDate',formData,   ).then((response) => {

            this.clearInput()
            this.loadData(this.femail)
            console.log('sucess',response)
          }, ( response) => {
            console.log('errueru',response)
            console.log(formData)
          })
      }

    },
      clearInput () {
        this.fnane = ''
          this.isUpdate = false

      },

  }, mounted () {
      this.loadData(this.$route.params.id)
      // Mise à jour
      if (this.$route.params.id !== undefined) {
        this.createSondagedate(this.$route.params.id)
        this.loadData(this.$route.params.id)
      }

    }
  }
</script>

<style scoped>

</style>
