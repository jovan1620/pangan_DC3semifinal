<template>
  <section class="list-section">
    <h2>My Assignments</h2>

    <p v-if="assignments.length === 0" class="empty">
      No assignments yet.
    </p>

    <div v-else>
      <AssignmentItem
        v-for="assignment in assignments"
        :key="assignment.id"
        :assignment="assignment"
        @submit-assignment="handleSubmit"
        @delete-assignment="handleDelete"
      />
    </div>
  </section>
</template>

<script setup>
import AssignmentItem from './AssignmentItem.vue'

defineProps({
  assignments: {
    type: Array,
    required: true
  }
})

const emit = defineEmits([
  'submit-assignment',
  'delete-assignment'
])

function handleSubmit(id) {
  emit('submit-assignment', id)
}

function handleDelete(id) {
  emit('delete-assignment', id)
}
</script>