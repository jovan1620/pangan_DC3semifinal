import { ref } from 'vue'

 export function useAssignments() {
 	const assignments = ref([])

 	function addAssignment(assignment) {
         assignments.value.push(assignment)
 	}

 	function removeAssignment(id) {
     	assignments.value = assignments.value.filter(
         	record => record.id !== id
     	)
 	}

 	return {
     	assignments,
     	addAssignment,
     	removeAssignment
 	}
 }
