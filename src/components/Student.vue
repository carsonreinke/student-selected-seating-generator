<template>
  <div class="student">
    <input type="text" :value="student.name" @input="onNameChange" />

    <!--<select v-model="preferences" multiple>
      <option
        v-for="student in otherStudents"
        :key="student.id"
        :value="student.id"
      >{{ student.name }}</option>
    </select>-->
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
</style>