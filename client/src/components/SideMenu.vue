<script lang="ts">
import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'

export default defineComponent({
  setup() {
    return {}
  },
  components: { RouterLink }
})
</script>

<template>
  <aside
    class="z-100 fixed inset-0 left-0 top-0 hidden w-60 overflow-hidden pb-2 pl-2 pt-2 transition-all lg:flex"
  >
    <div class="relative h-full w-full flex-col justify-center rounded-2xl bg-white">
      <div class="flex h-full flex-col">
        <div class="flex h-14 items-center justify-center font-bold">Hey, Have a nice day!</div>
        <div class="flex flex-grow overflow-y-auto">
          <ul class="flex w-full flex-col">
            <li class="py-12px">
              <RouterLink class="flex cursor-pointer py-3 text-blue-600 hover:text-black" to="/styles">
                <div class="inline-flex h-6 w-16 flex-none items-center justify-center">
                  <div class="i-material-symbols-account-balance w-18px h-18px"></div>
                </div>
                <span class="line-clamp-1 flex grow items-center text-ellipsis pr-12">Styles</span>
              </RouterLink>
            </li>
          </ul>
        </div>
        <div class="flex w-full cursor-pointer items-center rounded-b-2xl bg-blue-500 hover:bg-blue-700">
          <RouterLink class="flex cursor-pointer py-3 text-white" to="/styles">
            <div class="inline-flex h-6 w-16 flex-none items-center justify-center">
              <div class="i-material-symbols-account-balance w-18px h-18px"></div>
            </div>
            <span class="line-clamp-1 flex grow items-center text-ellipsis pr-12">Logout</span>
          </RouterLink>
        </div>
      </div>
    </div>
  </aside>
</template>

<style>
a {
  text-decoration: none;
}
</style>
