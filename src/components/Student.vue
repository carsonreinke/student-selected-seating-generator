<template>
  <div class="student">
    <div class="name">
      <input type="text" :value="student.name" @input="onNameChange" placeholder="Student name" />
    </div>
    <multiselect
      :multiple="true"
      :value="preferences"
      :options="otherStudents"
      label="name"
      track-by="id"
      :searchable="false"
      :close-on-select="true"
      :allow-empty="true"
      @select="onPreferenceSelect"
      @remove="onPreferenceRemove"
      placeholder="Student preferences"
    ></multiselect>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
import { mapActions } from "vuex";
import "vue-multiselect/dist/vue-multiselect.min.css";

export default {
  name: "student",
  props: {
    student: Object
  },
  components: {
    Multiselect
  },
  computed: {
    otherStudents() {
      const students = this.$store.getters.allStudents;
      return students
        .filter(student => student !== this.student)
        .filter(student => student.name !== null)
        .filter(student => !this.student.preferences.includes(student));
    },
    preferences() {
      return this.student.preferences;
    }
  },
  methods: {
    ...mapActions(["changeStudentName", "addPreference", "removePreference"]),
    onNameChange(event) {
      const { student } = this;
      this.changeStudentName({ student, name: event.target.value });
    },
    onPreferenceSelect(selectedOption) {
      const { student } = this;
      const preference = this.$store.getters.allStudents.find(
        preference => preference.id === selectedOption.id
      );
      this.addPreference({ student, preference });
    },
    onPreferenceRemove(removeOption) {
      const { student } = this;
      const preference = this.$store.getters.allStudents.find(
        preference => preference.id === removeOption.id
      );
      this.removePreference({ student, preference });
    }
  }
};
</script>

<style>
.student {
  clear: both;
  width: 100%;
  padding: 0.5em;
}

.student .name {
  float: left;
  margin: 0.5em;
  width: calc(35% - 2px - 1em);
  border: 1px solid #000000;
}

.student .name input {
  width: calc(100% - 10px);
  min-height: 33px;
  border: transparent solid 4px;
  outline: none;
}

.student .multiselect {
  float: right;
  margin: 0.5em;
  width: calc(65% - 1em);
}

.multiselect__spinner:before,
.multiselect__spinner:after {
  border-color: #41b883 transparent transparent;
}

.multiselect {
  color: #000000;
}

.multiselect__input,
.multiselect__single {
  border-radius: 0;
}

.multiselect__input::placeholder {
  color: #35495e;
}

.multiselect__input:hover,
.multiselect__single:hover {
  border-color: #000000;
}

.multiselect__input:focus,
.multiselect__single:focus {
  border-color: #000000;
}

.multiselect__tags {
  border-radius: 0;
  border: 1px solid #000000;
  font-size: 1em;
}

.multiselect__tag {
  border-radius: 0;
  background-color: rgba(0, 0, 0, 0.1);
  color: #000000;
}

.multiselect__tag-icon {
  border-radius: 0;
}

.multiselect__tag-icon:after {
  color: #000000;
}

.multiselect__tag-icon:focus,
.multiselect__tag-icon:hover {
  background: rgba(0, 0, 0, 0.5);
}

.multiselect__tag-icon:focus:after,
.multiselect__tag-icon:hover:after {
  color: white;
}

.multiselect__current {
  border-radius: 0;
  border: 1px solid #e8e8e8;
}

.multiselect__select:before {
  color: #000000;
  border-color: #000000 transparent transparent transparent;
}

.multiselect__placeholder {
  color: rgba(0, 0, 0, 0.5);
}

.multiselect__content-wrapper {
  border: 1px solid #e8e8e8;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.multiselect--above .multiselect__content-wrapper {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-top: 1px solid #e8e8e8;
}

.multiselect__option--highlight {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
}

.multiselect__option--highlight:after {
  background-color: transparent;
  color: white;
}

.multiselect__option--selected {
  background: #f3f3f3;
  color: #35495e;
}

.multiselect__option--selected:after {
  color: silver;
}

.multiselect__option--selected.multiselect__option--highlight {
  background: #ff6a6a;
  color: #fff;
}

.multiselect__option--selected.multiselect__option--highlight:after {
  background: #ff6a6a;
  color: #fff;
}

.multiselect--disabled .multiselect__current,
.multiselect--disabled .multiselect__select {
  background: #ededed;
  color: #a6a6a6;
}

.multiselect__option--disabled {
  background: #ededed !important;
  color: #a6a6a6 !important;
}

.multiselect__option--group {
  background: #ededed;
  color: #35495e;
}

.multiselect__option--group.multiselect__option--highlight {
  background: #35495e;
  color: #fff;
}

.multiselect__option--group.multiselect__option--highlight:after {
  background: #35495e;
}

.multiselect__option--disabled.multiselect__option--highlight {
  background: #dedede;
}

.multiselect__option--group-selected.multiselect__option--highlight {
  background: #ff6a6a;
  color: #fff;
}

.multiselect__option--group-selected.multiselect__option--highlight:after {
  background: #ff6a6a;
  color: #fff;
}
</style>
