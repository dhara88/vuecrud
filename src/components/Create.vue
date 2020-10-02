
<template>
  <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Add Item</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="addItem">
                    <div class="form-group">
                        <label>Name:</label>
                        <input type="text" class="form-control" v-model="item.name"/>
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="text" class="form-control" v-model="item.email"/>
                    </div>
                    <div class="form-group">
                        <label>Designation</label>
                        <input type="text" class="form-control" v-model="item.designation"/>
                    </div>
                    <div class="form-group">
                        <label>Age</label>
                        <input type="text" class="form-control" v-model="item.age"/>
                    </div>
                    <div class="form-group">
                        <label>Created</label>
                        <input type="text" class="form-control" v-model="item.created"/>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Add Item"/>
                    </div>
                </form>
            </div>
        </div>
        <p v-if="errors.length" class="error" >
    <b>Please correct the following error(s):</b>
    <ul>
      <li  v-for="error in errors"  :key="error.id">{{ error }}</li>
    </ul>
  </p>
    </div>
</template>


<script>

export default {
  components: {
    //   name: 'AddItem'
  },
  data:function() { 
      return {
          item:{},
        errors: [],

      }
  }, 
    

  methods: {
      addItem:function(e) {
        
           let uri = 'http://localhost/vue_php_crud/api/create.php';
            this.axios.post(uri,this.item).then((response) => {
                console.log("res",response.data);
                this.$router.push({name: 'Read'});

            });
      
      this.errors = [];

      if (!this.item.name) {
        this.errors.push("Name required.");
      }
      if (!this.item.email) {
        this.errors.push('Email required.');
      } 
    //   else if (!this.validEmail(this.item.email)) {
    //     this.errors.push('Valid email required.');
    //   } 
       if (!this.item.designation) {
        this.errors.push("D required.");
      }
     if (!this.item.age) {
        this.errors.push("Age required.");
      }
       if (!this.item.created) {
        this.errors.push("C required.");
      }
      if (!this.errors.length) {
        return true;
      }
      e.preventDefault();
        
      },
    // validEmail: function (email) {
    //   var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //   return re.test(this.item.email);
    // }
  }

}
    



</script>
