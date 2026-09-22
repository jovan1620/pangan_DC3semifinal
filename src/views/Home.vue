<template>
    <section class="home">
        <h1>Welcome to Assignment Submission Tracker</h1>

        <p>Keep track of your assignments, subject, submission types, due dates, and submission status in one simple application</p>

    <RouterLink to="/assignments" class="button">
        View Assignments
    </RouterLink>
    </section>
</template>

<script setup>
import {RouterLink} from 'vue-router'
</script>
