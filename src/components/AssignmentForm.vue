<template>
  <form @submit.prevent="submitAssignment" class="form-card">
    <h2>Add Assignment</h2>

    <div class="form-group">
      <label>Assignment Name</label>

      <input
        type="text"
        v-model="form.assignmentName"
        placeholder="Enter assignment name"
      />
    </div>

    <div class="form-group">
      <label>Subject</label>

      <input
        type="text"
        v-model="form.subject"
        placeholder="Enter subject"
      />
    </div>

    <div class="form-group">
      <label>Submission Type</label>

      <select v-model="form.submissionType">
        <option value="">Select submission type</option>
        <option value="Written Work">Written Work</option>
        <option value="Programming">Programming</option>
        <option value="Presentation">Presentation</option>
        <option value="Project">Project</option>
      </select>
    </div>

    <div class="form-group">
      <label>Due Date</label>

      <input
        type="date"
        v-model="form.dueDate"
      />
    </div>

    <p v-if="errorMessage" class="error">
      {{ errorMessage }}
    </p>

    <button type="submit" class="button">
      Add Assignment
    </button>
  </form>
</template>

<script setup>
import { reactive, ref } from 'vue'

const emit = defineEmits(['add-assignment'])

const form = reactive({
  assignmentName: '',
  subject: '',
  submissionType: '',
  dueDate: ''
})

const errorMessage = ref('')

function submitAssignment() {
  if (
    !form.assignmentName ||
    !form.subject ||
    !form.submissionType ||
    !form.dueDate
  ) {
    errorMessage.value = 'Please complete all fields.'
    return
  }

  const newAssignment = {
    id: Date.now(),
    assignmentName: form.assignmentName,
    subject: form.subject,
    submissionType: form.submissionType,
    dueDate: form.dueDate,
    status: 'Pending'
  }

  emit('add-assignment', newAssignment)

  form.assignmentName = ''
  form.subject = ''
  form.submissionType = ''
  form.dueDate = ''

  errorMessage.value = ''
}
</script>