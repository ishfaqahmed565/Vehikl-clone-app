<template>
  <Transition
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    enter-active-class="transition duration-1000"
    leave-active-class="transition duration-500"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
    ><slot></slot>
  </Transition>
</template>
