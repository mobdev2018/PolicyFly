
export default {
  name: 'Details',

  components: {

  },

  data () {
    return {
      image: '',
      userInfo: {
        fname: 'Ian',
        lname: 'Sterling',
        email: 'ian.sterling01@sterlingrisk.com',
        phone: '(703) 555 - 5555'
      },
      isActived: true,
      isEditable: false,
      rules: {
        required: (value) => !!value || 'Required.',
        validEmail: (value) => {
          const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Email is incorrect.'
        }
      },
    }
  },

  methods: {
    truncate: function(fname, lname) {
      const shortName = fname.substring(0, 1).toUpperCase() + lname.substring(0, 1).toUpperCase()
    	return shortName
    },
    keyUp (event) {
      if (this.$refs.mainForm.validate()) {
        this.isActived = true
      } else {
        this.isActived = false
      }
    },
    onEdit () {
      this.isEditable = true
    },
    onSubmit () {
      if (this.$refs.mainForm.validate()) {
        this.isEditable = false
      }
    },
    onCancel () {
      this.isEditable = false
    },
    editProfilePhoto (e) {
      document.getElementById('file-open-button').click();
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function (e) {
      this.image = '';
    }
  }
}
