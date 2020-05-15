<template>
<div> <div class="card">
  <div class="card-header"><strong> Se Conecter</strong> </div>
  <div class="card-body">
    <form class="form-horizontal" action="" method="post">
      <div class="form-group row">
        <label class="col-md-3 col-form-label" for="hf-email">Email</label>
        <div class="col-md-9">
          <input class="form-control" id="hf-email" type="email" name="hf-email" placeholder="Enter Email.." autocomplete="email" v-model="femail"><span class="help-block">Please enter your email</span>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-md-3 col-form-label" for="hf-password">Password</label>
        <div class="col-md-9">
          <input class="form-control" id="hf-password" type="password" name="hf-password" placeholder="Enter Password.." autocomplete="current-password" v-model="fpass"><span class="help-block">Please enter your password</span>
        </div>
      </div>
    </form>
  </div>
  <div class="card-footer">
    <div class="btn btn-sm btn-success"  @click.prevent="saveData()">Envoyer</div>
    <div class="btn btn-sm btn-danger" @click.prevent="clearInput()">Annuler</div>
  </div>
</div></div>
</template>

<script>
    import $ from "jquery";

    export default {
        name: "loginParticipant",
      data() {
        return {
          femail: '',
          fpass:'',
        }
      },
      methods: {
        saveData() {
          this.$http.get('rest/doodle/Participant/' + this.femail).then((response) => {
            this.messageErrorEdit = undefined
            let createur = response.data
            if (createur.motPass === this.fpass) {
              this.participerausondage(this.femail)
              //console.log(createur)
            } else {
              this.clearInput()
            }

          }, (response) => {
            // console.log(console.log('errueru',response))
          })
        },
        participerausondage(mail) {
          this.$router.push('/sondageDate/' + mail)
        },
        clearInput() {
          this.femail = ''
          this.fpass = ''
        },
      },
      mounted () {
        // this.loadData()
        // eslint-disable-next-line no-undef
        $(document).ready(function () {
          // eslint-disable-next-line no-undef

        })
      }
    }
</script>

<style scoped>

</style>
