<template>
  <div
    class="assignment-card"
    :class="{ submitted: assignment.status === 'Submitted' }"
  >
    <div>
      <h3>{{ assignment.assignmentName }}</h3>

      <p>
        <strong>Subject:</strong>
        {{ assignment.subject }}
      </p>

      <p>
        <strong>Type:</strong>
        {{ assignment.submissionType }}
      </p>

      <p>
        <strong>Due Date:</strong>
        {{ formatDate(assignment.dueDate) }}
      </p>

      <p>
        <strong>Status:</strong>
        <span
          :class="
            assignment.status === 'Submitted'
              ? 'status-submitted'
              : 'status-pending'
          "
        >
          {{ assignment.status }}
        </span>
      </p>
    </div>

    <div class="actions">
      <button
        v-if="assignment.status !== 'Submitted'"
        @click="markSubmitted"
        class="submit-button"
      >
        Mark as Submitted
      </button>

      <button
        @click="deleteAssignment"
        class="delete-button"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script setup>
import { useFormatDate } from '../composables/useFormatDate'

const props = defineProps({
  assignment: {
    type: Object,
    required: true
  }
})

const emit = defineEmits([
  'submit-assignment',
  'delete-assignment'
])

const { formatDate } = useFormatDate()

function markSubmitted() {
  emit('submit-assignment', props.assignment.id)
}

function deleteAssignment() {
  emit('delete-assignment', props.assignment.id)
}
</script>