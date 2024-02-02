<script lang="ts">
import { defineComponent, ref, onMounted, computed, watchEffect } from 'vue'
import axios from 'axios'
import type { User } from '../../types/types'

export default defineComponent({
  setup() {
    const users = ref<User[]>([])
    const selectAll = ref(false)
    const sortColumn = ref<string | null>(null)
    const sortDirection = ref<number>(1) // 1: Ascending, -1: Descending
    const currentPage = ref<number>(1)
    const usersPerPage = 5

    //mock datayı getir
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        users.value = response.data
      } catch (error) {
        console.log(error)
      }
    }

    //ekranda gösterilecek kullanıcıları tespit et
    const displayedUsers = computed(() => {
      const startIdx = (currentPage.value - 1) * usersPerPage
      return users.value.slice(startIdx, startIdx + usersPerPage)
    })

    //secili sütunun sıralama şeklini belirle
    const handleSort = (column: string) => {
      if (sortColumn.value === column) {
        sortDirection.value *= -1
      } else {
        sortColumn.value = column
        sortDirection.value = 1 // Ascending
      }

      sortUsers()
    }

    //sıralanacak sütunu belirle
    const sortUsers = () => {
      if (sortColumn.value) {
        users.value.sort((a, b) => {
          const column = sortColumn.value as keyof User
          const aValue = a[column]
          const bValue = b[column]

          if (typeof aValue === 'string' && typeof bValue === 'string') {
            return sortDirection.value * aValue.localeCompare(bValue)
          } else if (typeof aValue === 'number' && typeof bValue === 'number') {
            return sortDirection.value * (aValue - bValue)
          } else {
            return 0
          }
        })
      }
    }

    //toplam sayfa sayısını hesapla
    const totalPages = computed(() => Math.ceil(users.value.length / usersPerPage))

    //sayfayı değiştir
    const changePage = (page: number) => {
      if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page
      }
    }

    const selectAllUsers = () => {
      selectAll.value = !selectAll.value
      // görünen tüm kullanıcıları seç
      displayedUsers.value.forEach(user => (user.selected = selectAll.value))
      // görünen tüm kullanıcıların seçim değerini selectAll.value değerine eşle
      displayedUsers.value.forEach(displayedUser => {
        const userIndex = users.value.findIndex(user => user.id === displayedUser.id)
        if (userIndex !== -1) {
          users.value[userIndex].selected = selectAll.value
        }
      })

      // Seçme durumunu konsola yazdır

      // Kullanıcı dizisinin 'selected' özelliğini konsola yazdır
      console.log('users.selected', users.value)
    }

    //mock data kullanıcı silme ileride api ile değiştirilecek
    const deleteUser = (userId: number) => {
      // Implement your logic to delete the user with the given userId
      console.log(`Deleting user with ID: ${userId}`)
    }

    //mock data kullanıcı değiştirme ileride api ile değiştirilecek
    const editUser = (userId: number) => {
      // Implement your logic to edit the user with the given userId
      console.log(`Editing user with ID: ${userId}`)
    }

    //mock data seçili kullanıcıları silme ileride api ile değiştirilecek
    const deleteSelectedUsers = () => {
      // Filter out the selected users
      const selectedUsers = users.value.filter(user => user.selected)

      // Implement your logic to delete the selected users
      // ...

      // Clear the selection after deletion
      selectAll.value = false
      return { selectedUsers }
    }

    //seçili kullanıcıları izle
    watchEffect(() => {
      const selectedUsers = users.value.filter(user => user.selected)
      console.log('selectedUsers', selectedUsers)
    })

    onMounted(() => {
      fetchUsers()
    })

    return {
      displayedUsers,
      sortColumn,
      sortDirection,
      totalPages,
      currentPage,
      selectAll,
      handleSort,
      changePage,
      deleteUser,
      editUser,
      selectAllUsers,
      deleteSelectedUsers
    }
  }
})
</script>

<template>
  <div>
    <div class="overflow-x-auto scroll-smooth">
      <table class="mt-4px min-h-450px min-w-full border-collapse border border-gray-300">
        <thead class="bg-blue-100">
          <tr class="min-h-50px">
            <th
              @click="selectAllUsers"
              class="text-16px min-w-56px gap-4px cursor-ns-resize cursor-pointer items-center justify-center p-2 font-bold"
            >
              <div class="gap-4px flex h-full w-full items-center justify-center">
                <input type="checkbox" v-model="selectAll" />
                <div
                  v-show="sortColumn === 'id'"
                  :class="{
                    'i-mdi:sort-bool-ascending-variant': sortDirection === 1,
                    'i-mdi:sort-bool-descending-variant': sortDirection === -1
                  }"
                ></div>
              </div>
            </th>
            <th
              @click="() => handleSort('name')"
              class="text-16px min-w-56px gap-4px cursor-ns-resize cursor-pointer items-center justify-center p-4 font-bold"
            >
              <div class="gap-4px flex items-center">
                <div>Name</div>
                <div
                  v-show="sortColumn === 'name'"
                  :class="{
                    'i-mdi:sort-bool-ascending-variant': sortDirection === 1,
                    'i-mdi:sort-bool-descending-variant': sortDirection === -1
                  }"
                ></div>
              </div>
            </th>
            <th
              @click="() => handleSort('username')"
              class="text-16px min-w-56px gap-4px cursor-ns-resize cursor-pointer items-center justify-center p-4 font-bold"
            >
              <div class="gap-4px flex items-center">
                <div>Username</div>
                <div
                  v-show="sortColumn === 'username'"
                  :class="{
                    'i-mdi:sort-bool-ascending-variant': sortDirection === 1,
                    'i-mdi:sort-bool-descending-variant': sortDirection === -1
                  }"
                ></div>
              </div>
            </th>
            <th
              @click="() => handleSort('email')"
              class="text-16px min-w-56px gap-4px cursor-ns-resize cursor-pointer items-center justify-center p-4 font-bold"
            >
              <div class="gap-4px flex items-center">
                <div>Email</div>

                <div
                  v-show="sortColumn === 'email'"
                  :class="{
                    'i-mdi:sort-bool-ascending-variant': sortDirection === 1,
                    'i-mdi:sort-bool-descending-variant': sortDirection === -1
                  }"
                ></div>
              </div>
            </th>
            <th
              @click="() => handleSort('address')"
              class="text-16px min-w-56px gap-4px cursor-ns-resize cursor-pointer items-center justify-center p-4 font-bold"
            >
              <div class="gap-4px flex items-center">
                <div>City</div>
                <div
                  v-show="sortColumn === 'address'"
                  :class="{
                    'i-mdi:sort-bool-ascending-variant': sortDirection === 1,
                    'i-mdi:sort-bool-descending-variant': sortDirection === -1
                  }"
                ></div>
              </div>
            </th>
            <th
              @click="() => handleSort('phone')"
              class="text-16px min-w-56px gap-4px cursor-ns-resize cursor-pointer items-center justify-center p-4 font-bold"
            >
              <div class="gap-4px flex items-center">
                <div>Phone</div>
                <div
                  v-show="sortColumn === 'phone'"
                  :class="{
                    'i-mdi:sort-bool-ascending-variant': sortDirection === 1,
                    'i-mdi:sort-bool-descending-variant': sortDirection === -1
                  }"
                ></div>
              </div>
            </th>
            <th
              @click="() => handleSort('website')"
              class="text-16px min-w-56px gap-4px cursor-ns-resize cursor-pointer items-center justify-center p-4 font-bold"
            >
              <div class="gap-4px flex items-center">
                <div>Website</div>

                <div
                  v-show="sortColumn === 'website'"
                  :class="{
                    'i-mdi:sort-bool-ascending-variant': sortDirection === 1,
                    'i-mdi:sort-bool-descending-variant': sortDirection === -1
                  }"
                ></div>
              </div>
            </th>
            <th class="text-16px min-w-56px gap-4px items-center justify-center p-4 font-bold">
              <div class="gap-4px flex items-center">
                <div>Actions</div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="animate-fade-in" v-for="user in displayedUsers" :key="user.id">
            <td class="bg-white p-2">
              <div class="flex h-full w-full items-center justify-center">
                <input type="checkbox" v-model="user.selected" />
              </div>
            </td>
            <td class="bg-#f9fafb p-2">{{ user.name }}</td>
            <td class="bg-white p-2">{{ user.username }}</td>
            <td class="bg-#f9fafb p-2">{{ user.email }}</td>
            <td class="bg-white p-2">
              {{ user.address.city }}
            </td>
            <td class="bg-#f9fafb p-2">{{ user.phone }}</td>
            <td class="bg-white p-2">{{ user.website }}</td>
            <td class="bg-#f9fafb p-2">
              <button @click="deleteUser(user.id)" class="mr-2 text-red-500">Delete</button>
              <button @click="editUser(user.id)" class="text-blue-500">Edit</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="bg-red text-14px p-12px mt-4 flex flex items-center bg-white transition-all">
      <div
        v-for="page in totalPages"
        :key="page"
        @click="() => changePage(page)"
        :class="{
          'p-4px w-22px h-22px flex items-center bg-blue-300 text-black ': currentPage === page,
          'mx-2px': true
        }"
        class="p-4px w-22px h-22px flex cursor-pointer items-center justify-center rounded hover:bg-blue-200"
      >
        {{ page }}
      </div>
      <div class="ml-auto">page {{ currentPage }} of {{ totalPages }}</div>
    </div>
  </div>
</template>

<style scoped></style>
