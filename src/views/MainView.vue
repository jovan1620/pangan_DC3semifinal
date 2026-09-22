<template>
  <div class="assignments-page">
    <h1>Assignment Submission Tracker</h1>

    <AssignmentForm
      @add-assignment="handleAddAssignment"
    />

    <AssignmentList
      :assignments="assignments"
      @submit-assignment="handleSubmitAssignment"
      @delete-assignment="handleDeleteAssignment"
    />
  </div>
</template>

<script setup>
import AssignmentForm from '../components/AssignmentForm.vue'
import AssignmentList from '../components/AssignmentList.vue'
import { useAssignments } from '../composables/useAssignments'

const {
  assignments,
  addAssignment,
  markAsSubmitted,
  removeAssignment
} = useAssignments()

function handleAddAssignment(assignment) {
  addAssignment(assignment)
}

function handleSubmitAssignment(id) {
  markAsSubmitted(id)
}

function handleDeleteAssignment(id) {
  removeAssignment(id)
}
</script>