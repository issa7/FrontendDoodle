<template>
  <div @click.prevent="handleClick">
    <button class="btn" :class="btnClass" type="button" data-toggle="modal" data-target="#myModal">{{ btnName }}</button>

    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">{{ mTitle }}</h4>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
          </div>
          <div class="modal-body">
            <p>{{ mBody }}</p>
          </div>
          <div class="modal-footer">
            <button class="btn btn-danger" type="button" data-dismiss="modal" @click.prevent="confirmAction">OK</button>
            <button class="btn btn-secondary" type="button" data-dismiss="modal" @click.prevent="cancelAction">Annuler</button>
          </div>
        </div>
        <!-- /.modal-content-->
      </div>
      <!-- /.modal-dialog-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',

  props: {
    btnName: {type: String, default: 'Boutton'},
    btnClass: {type: String, default: 'btn-danger btn-sm'},
    mTitle: {type: String, default: 'Titre'},
    mBody: {type: String, default: 'Votre message ici !'}
  },

  methods: {
    confirmAction () {
      this.$emit('confirmAction')
    },

    cancelAction () {
      this.$emit('cancelAction')
    },

    handleClick () {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>

</style>
