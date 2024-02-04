<script lang="ts">
import { defineComponent, ref, onMounted, computed } from 'vue'
import axios from 'axios'
import type { User } from '../../types/types'
import SectionMain from '../SectionMain.vue'
import Loader from '../Loader.vue'

export default defineComponent({
  setup() {
    const loader = ref(true)
    const users = ref<User[]>([]) //kullanıcı verisi
    const selectAll = ref(false) //hepsini seçtin mi
    const isSelectedAll = ref(false) //hepsi seçili mi
    const sortColumn = ref<string | null>(null) //sıralanacak sütunu belirle
    const sortDirection = ref<number>(1) // 1: Ascending, -1: Descending
    const currentPage = ref<number>(1) //mevcur sayfa
    const usersPerPage = 5 //her sayfada gösterilecek kullanıcı sayısı
    //mock datayı getir
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        users.value = response.data
      } catch (error) {
        console.log(error)
      } finally {
        loader.value = false
      }
    }
    //arama yap
    // const searchTerm = ref<string>('');//arama yapılacak kelime
    // const filteredUsers = computed(() => {
    //   const term = searchTerm.value.toLowerCase();
    //   return users.value.filter(user =>
    //     user.name.toLowerCase().includes(term) || user.email.toLowerCase().includes(term)
    //   );
    // });
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
    //sayfayı değiştir ve değiştirirken hepsi seçili mi kontrol et
    const changePage = (page: number) => {
      if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page
        //sayfa değişince mevcut sayfadaki kullanıcılarda gez ve hepsi seçili mi verilerini kontrol et
        selectAll.value = displayedUsers.value.every(user => user.selected)
        updateSelectedAll()
      }
    }
    //kullanıcıyı seç
    const selectUser = (user: User) => {
      user.selected = !user.selected
      updateSelectedAll()
    }
    //ekranda kullanıcı varsa ve hepsinin değeri true ise isSelectedAll değerini true yap
    const updateSelectedAll = () => {
      isSelectedAll.value =
        displayedUsers.value.length > 0 && displayedUsers.value.every(user => user.selected)
    }
    //seçili olmayan tüm kullanıcıları seç, hepsi seçiliyse hepsini bırak
    const selectAllUsers = () => {
      selectAll.value = isSelectedAll.value ? false : (selectAll.value = true)
      // görünen tüm kullanıcıları seç
      displayedUsers.value.forEach(user => (user.selected = selectAll.value))
      // görünen tüm kullanıcıların seçim değerini selectAll.value değerine eşle
      updateSelectedAll()
      displayedUsers.value.forEach(displayedUser => {
        const userIndex = users.value.findIndex(user => user.id === displayedUser.id)
        if (userIndex !== -1) {
          users.value[userIndex].selected = selectAll.value
        }
      })
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
    onMounted(() => {
      setTimeout(() => {
        fetchUsers()
      }, 1000)
    })
    return {
      displayedUsers,
      sortColumn,
      sortDirection,
      totalPages,
      currentPage,
      selectAll,
      users,
      isSelectedAll,
      loader,
      handleSort,
      changePage,
      deleteUser,
      editUser,
      selectAllUsers,
      deleteSelectedUsers,
      selectUser
    }
  },
  components: { SectionMain, Loader }
})
</script>

<template>
  <div v-if="!loader && users.length > 0">
    <div class="h-54px mb-16px flex w-full flex-wrap items-center bg-white">
      <div class="gap-4px text-12.5px flex cursor-not-allowed" :key="user.id" v-for="user in users">
        <span class="p-4px mr-4px rounded-full bg-slate-100" v-if="user.selected">{{ user.name }}</span>
      </div>
    </div>
    <div class="overflow-x-auto scroll-smooth">
      <table class="mt-4px min-h-450px min-w-full border-collapse border border-gray-300">
        <thead class="bg-slate-100">
          <tr class="min-h-50px">
            <th
              @click="selectAllUsers"
              class="text-16px min-w-56px gap-4px cursor-ns-resize cursor-pointer items-center justify-center p-2 font-bold"
            >
              <div class="gap-4px flex h-full w-full items-center justify-center">
                <label
                  :class="isSelectedAll ? 'bg-slate-300' : 'border bg-white'"
                  class="w-20px h-20px rounded-4px relative flex cursor-pointer items-center justify-center transition-all"
                  for="selectAll"
                >
                  <span
                    :class="isSelectedAll ? 'flex' : 'hidden'"
                    class="-translate-x-50% -translate-y-50% absolute left-1/2 top-1/2 cursor-pointer"
                    >✔</span
                  >
                  <input class="z-3 cursor-pointer opacity-0" type="checkbox" :checked="isSelectedAll" />
                </label>
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
            <td class="h-45px w-100px bg-white p-2">
              <div class="flex h-full w-full items-center justify-center">
                <label
                  :class="user.selected ? 'bg-slate-300' : 'border bg-white'"
                  class="w-20px h-20px rounded-4px relative flex cursor-pointer items-center justify-center transition-all"
                >
                  <span
                    :class="user.selected ? 'flex' : 'hidden'"
                    class="-translate-x-50% -translate-y-50% absolute left-1/2 top-1/2 cursor-pointer"
                    >✔</span
                  >
                  <input
                    class="z-3 cursor-pointer opacity-0"
                    type="checkbox"
                    :checked="user.selected"
                    @click="selectUser(user)"
                  />
                </label>
              </div>
            </td>
            <td class="h-45px min-w-200px bg-#f9fafb p-2">{{ user.name }}</td>
            <td class="h-45px min-w-200px bg-white p-2">{{ user.username }}</td>
            <td class="h-45px min-w-200px bg-#f9fafb p-2">{{ user.email }}</td>
            <td class="h-45px min-w-200px bg-white p-2">
              {{ user.address.city }}
            </td>
            <td class="h-45px min-w-200px bg-#f9fafb p-2">{{ user.phone }}</td>
            <td class="h-45px min-w-200px bg-white p-2">{{ user.website }}</td>
            <td class="h-45px min-w-200px bg-#f9fafb p-2">
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
          'p-4px w-22px h-22px flex items-center bg-slate-300 text-black ': currentPage === page,
          'mx-2px': true
        }"
        class="p-4px w-22px h-22px flex cursor-pointer items-center justify-center rounded hover:bg-slate-200"
      >
        {{ page }}
      </div>
      <div class="ml-auto">page {{ currentPage }} of {{ totalPages }}</div>
    </div>
  </div>
  <Loader v-else-if="loader" />
</template>

<style scoped></style>
