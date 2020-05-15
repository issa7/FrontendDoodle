<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-header"><i class="fa fa-align-justify"/>Liste des Participants <span class="text-danger font-weight-bold">{{message}}</span></div>
              <div class="card-body">
                <dataTable :t-columns="listTable.tabcolumns" :t-data="listData"/>
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
        name: "ListPartcipants",
      data () {
        return {
          message:'',
          idsondage:'',
          listData: [],
          isUpdate: false,
          listTable: {
            tabcolumns: ['Email', 'Nom', 'Prenom',],
            tabData: this.listData,
            tabButtonsName: {
              copy: 'Copier',
              print: 'Imprimer',
              colvis: 'Visibilté des colonnes'
            },
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
        loadData (code) {
          this.$http.get('/rest/doodle/SondageDate/'+code+'/participantsForSondage').then((response) => {
            let responseData = response.data
            let table = []
            responseData.forEach(element => {
              let item = {}
              item.email = element.mail
              item.name = element.nom
              item.prenom = element.prenom
              table.push(item)
            })
            this.listData = table
            //console.log(responseData)
          }, (response) => {
            //console.log(response)
          })
        },
        deleteData (code) {

        },
        updateData(){}
      },
      mounted () {
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
