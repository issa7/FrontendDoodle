<template>
  <div>
    <div class="card">
      <div class="card-header"><strong> Proposition de date sondage <span class="text-danger font-weight-bold">{{message}}</span> </strong > </div >
      <div class="card-body">
        <form class="form-horizontal" action="" method="post">
          <div class="form-group row">
            <label class="col-md-3 col-form-label" for="date-input">Date sondage</label>
            <div class="col-md-9">
              <input class="form-control" id="date-input" type="date" name="date-input" placeholder="date" v-model="fdate"><span class="help-block">Please enter a valid date</span>
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
                <dataTable :t-columns="listTable.tabcolumns" :t-data="listData"
                           :t-use-action-buttons="listTable.tabUseActionButtons"
                           :t-action-buttons="listTable.tabActionButtons" t-action-column="mail"
                           @updateItem="updateData" @deleteItem="deleteData"/>
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
    name: 'DateSondage',
    data (){
      return{
        fdate:'',
        isUpdate:'',
        message:'',
        idsondage:'',
        listData: [],
        isUpdate: false,
        listTable: {
          tabcolumns: ['date'],
          tabData: this.listData,
          tabButtonsName: {
            copy: 'Copier',
            print: 'Imprimer',
            colvis: 'Visibilté des colonnes'
          },
          tabUseActionButtons: true,
          tabActionButtons: {
            update: {
              name: 'Modifier',
              bClass: 'btn btn-sm btn-warning'
            },
            delete: {
              name: 'Supprimer',
              bClass: 'btn-danger btn-sm'
            }
          }
        }
      }

    },
    methods:{
      loadmessage(code){
        this.$http.get('/rest/doodle/SondageDate/'+ code).then((response) => {
          let responseData = response.data
          this.message = responseData.nomSondage
          this.idsondage = responseData.id
        }, (response) => {
          console.log(response)
        })
  },
      saveData(){
        if (this.fdate !== '') {
          const formData = {
            date: this.fdate,
          }

          this.$http.post('/rest/doodle/sondageDate/'+this.idsondage+'/datesSondage',formData,   ).then((response) => {
            this.$router.push('/sondageDate/')
            console.log('sucess',response)
            console.log(formData)
          }, ( response) => {
            console.log('errueru',response)
            console.log(formData)
          })
        }


      },
      loadData (code) {
        this.$http.get('/rest/doodle/SondageDate/'+code+'/choix').then((response) => {
          let responseData = response.data
          let table = []
          responseData.forEach(element => {
            let item = {}
            item.mail = element.mail
            item.name = element.nom
            item.prenom = element.prenom
            table.push(item)
          })
          this.listData = table

          this.messageErrorList = undefined
        }, () => {
          this.messageErrorList = 'Une erreur est survenue lors du chargement de la liste'
        })
      },
  }, mounted () {
      this.loadData(this.$route.params.id)
      // Mise à jour
      if (this.$route.params.id !== undefined) {
        this.loadmessage(this.$route.params.id)
      }

    }
  }
</script>

<style scoped>

</style>
